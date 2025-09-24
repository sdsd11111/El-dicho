# Proyecto Confecciones Arévalo

Este proyecto es un sitio web estático para Confecciones Arévalo, construido con HTML, CSS y JavaScript. El sitio es responsivo y presenta un diseño moderno con componentes cargados dinámicamente.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas:

- **/components**: Contiene fragmentos de HTML reutilizables como el `header`, `footer`, y widgets. Estos son cargados dinámicamente en las páginas.
- **/css**: Contiene las hojas de estilo.
  - `styles.css`: Estilos principales del sitio.
  - `contact-widget.css`: Estilos específicos para el widget de contacto lateral.
  - `producto.css`: Estilos para la plantilla de productos.
- **/data**: Contiene archivos `JSON` que se usan para poblar dinámicamente el contenido de las páginas de productos.
- **/images**: Contiene todas las imágenes del sitio, organizadas en subcarpetas por categoría.
- **/js**: Contiene los archivos de JavaScript.
  - `component-loader.js`: Un script simple para cargar componentes HTML en el DOM.
  - `content-renderer.js`: Script para renderizar el contenido en las páginas de producto individuales usando los archivos de `data`.
  - `script.js`: El script principal que maneja todas las interacciones del sitio (sliders, menús, tabs, el widget de contacto, etc.).

## Cómo Ejecutar el Sitio en Local

Para ver el sitio web en tu máquina local, necesitas un pequeño servidor web. Python proporciona uno muy simple.

1. Abre una terminal o línea de comandos en la carpeta raíz del proyecto.
2. Ejecuta el siguiente comando:

   ```bash
   python -m http.server 8000
   ```

3. Abre tu navegador web y ve a la dirección `http://localhost:8000`.

## Componentes Dinámicos

El sitio utiliza un script (`js/component-loader.js`) para cargar partes de la página como el encabezado, el pie de página y los widgets. Esto se hace para facilitar el mantenimiento, permitiendo editar un componente una sola vez y que el cambio se refleje en todas las páginas que lo usan.

La lógica de carga se encuentra al final de cada archivo HTML principal (ej. `index.html`).

## ¡Importante! Activación de los Formularios de Contacto

Los formularios de contacto (el de la página de contacto y el del widget de suscripción) **requieren un paso manual** para poder enviar correos.

Este proyecto está preparado para usar un servicio externo gratuito llamado [**Formspree**](https://formspree.io/).

Para activarlos:

1.  **Crea una cuenta** en [Formspree.io](https://formspree.io/).
2.  **Crea un nuevo formulario** en su panel de control. Te darán una URL única con un ID, algo como `https://formspree.io/f/YOUR_FORM_ID`.
3.  **Reemplaza el `action` en los formularios**: 
    - Abre `components/formulario_contacto.html`.
    - Abre `components/contact-widget.html`.
    - En ambos archivos, busca la etiqueta `<form>` y reemplaza la URL de ejemplo `https://formspree.io/f/YOUR_FORM_ID` por la URL real que te dio Formspree.

Una vez hecho esto, los correos enviados a través de los formularios llegarán a la dirección de email con la que te registraste en Formspree.
