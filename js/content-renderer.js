/**
 * Renderiza el contenido de la página cargando datos desde un archivo JSON.
 */
async function renderPageContent() {
    // 1. Determinar la categoría de la página desde el nombre del archivo URL
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const category = filename.split('.')[0];

    if (!category || category === 'plantilla_producto' || category === 'index') {
        console.log('No se requiere renderizado de contenido para esta página.');
        return;
    }

    try {
        // 2. Cargar el archivo JSON correspondiente
        const response = await fetch(`data/${category}.json`);
        if (!response.ok) {
            throw new Error(`No se encontró el archivo de datos: data/${category}.json`);
        }
        const data = await response.json();

        // 3. Poblar el contenido en el HTML
        document.title = data.pageTitle || document.title;
        document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription || '');

        // Poblar Hero
        const hero = document.querySelector('.product-hero');
        if (hero) {
            hero.style.backgroundImage = `url(${data.hero.backgroundImage})`;
            hero.querySelector('.product-title').textContent = data.hero.title;
            hero.querySelector('.product-subtitle').textContent = data.hero.subtitle;
        }

        // Poblar Detalles del Producto
        const details = document.querySelector('.product-details');
        if (details) {
            // Obtener todas las imágenes de la carpeta panes artesanales
            const panesImages = [
                'images/panes artesanales/panes artesanales 1.jpg',
                'images/panes artesanales/panes artesanales 2.jpg',
                'images/panes artesanales/panes artesanales 3.jpg',
                'images/panes artesanales/panes artesanales 4.jpg',
                'images/panes artesanales/panes artesanales 5.jpg'
            ];

            // Establecer la primera imagen como principal
            const mainImage = details.querySelector('.main-image');
            if (panesImages.length > 0) {
                mainImage.src = panesImages[0];
            }
            
            details.querySelector('.product-info h2').textContent = data.details.title;
            
            const paragraphsContainer = details.querySelector('.product-info p').parentElement;
            const ctaButton = details.querySelector('.cta-btn');
            paragraphsContainer.innerHTML = ''; // Limpiar párrafos existentes
            data.details.paragraphs.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                paragraphsContainer.appendChild(p);
            });
            paragraphsContainer.appendChild(ctaButton); // Re-adjuntar el botón

            const cta = details.querySelector('.cta-btn');
            if(cta) {
                const encodedText = encodeURIComponent(data.details.ctaText);
                cta.href = `https://wa.me/593996976759?text=${encodedText}`;
            }

            // Cargar miniaturas de las imágenes de panes artesanales
            const thumbnailsContainer = details.querySelector('.thumbnail-images');
            thumbnailsContainer.innerHTML = ''; // Limpiar thumbnails existentes
            
            panesImages.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = `Pan artesanal ${index + 1}`;
                if (index === 0) img.classList.add('active');
                
                // Hacer clic en la miniatura para cambiar la imagen principal
                img.addEventListener('click', () => {
                    mainImage.src = src;
                    // Actualizar la miniatura activa
                    thumbnailsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                    img.classList.add('active');
                });
                
                thumbnailsContainer.appendChild(img);
            });
        }

        // Poblar Características
        const featuresGrid = document.querySelector('.features-grid');
        if (featuresGrid) {
            featuresGrid.innerHTML = ''; // Limpiar características existentes
            data.features.forEach(feature => {
                const item = document.createElement('div');
                item.className = 'feature-item';
                item.innerHTML = `
                    <i class="${feature.icon}"></i>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                `;
                featuresGrid.appendChild(item);
            });
        }

    } catch (error) {
        console.error('Error al renderizar el contenido de la página:', error);
        const body = document.querySelector('body');
        body.innerHTML = `<p style="color: red; text-align: center; padding: 2rem;">Error: No se pudo cargar el contenido de la página. Verifique que el archivo de datos exista y no tenga errores.</p>`;
    }
}
