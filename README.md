# El Dicho Panadería

Sitio web estático para El Dicho Panadería, construido con HTML, CSS y JavaScript. El sitio es completamente responsivo y utiliza componentes dinámicos para facilitar el mantenimiento.

## Estructura del Proyecto

- **/components**: Componentes HTML reutilizables (header, footer, formularios, etc.)
- **/css**: Hojas de estilo del sitio
- **/data**: Archivos JSON con el contenido de los productos
- **/images**: Imágenes del sitio organizadas por categorías
- **/js**: Scripts de JavaScript
  - `component-loader.js`: Carga componentes HTML dinámicamente
  - `content-renderer.js`: Renderiza contenido desde archivos JSON
  - `script.js`: Lógica principal del sitio

## Despliegue en Vercel

Este proyecto está configurado para desplegarse fácilmente en Vercel. Sigue estos pasos:

1. **Preparación**
   - Asegúrate de que todos los archivos estén en el repositorio
   - Verifica que las rutas en tu código sean relativas

2. **Despliegue manual**
   - Ve a [Vercel](https://vercel.com/) e inicia sesión
   - Haz clic en "New Project"
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"

3. **Configuración (opcional)**
   - **Variables de entorno**: Si usas APIs, configúralas en Settings > Environment Variables
   - **Dominio personalizado**: Configura tu dominio en Settings > Domains

4. **Despliegue automático**
   - Con cada push a tu repositorio, Vercel desplegará automáticamente los cambios

## Ejecución Local

Para desarrollo local:

1. **Con Python** (más simple):
   ```bash
   python -m http.server 8000
   ```
   Abre `http://localhost:8000` en tu navegador.

2. **Con Node.js**:
   ```bash
   npx serve
   ```
   o instala `http-server` globalmente:
   ```bash
   npm install -g http-server
   http-server
   ```

## Componentes Dinámicos

El sitio utiliza `component-loader.js` para cargar componentes HTML de forma dinámica, lo que facilita el mantenimiento al permitir actualizar un componente una sola vez.

## Configuración de Formularios

Los formularios usan Formspree.io. Para activarlos:

1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario para obtener tu URL única
3. Actualiza el atributo `action` en los formularios con tu URL de Formspree
   - Abre `components/formulario_contacto.html`
   - Abre `components/contact-widget.html`
   - En ambos archivos, busca la etiqueta `<form>` y reemplaza la URL de ejemplo `https://formspree.io/f/YOUR_FORM_ID` por la URL real que te dio Formspree.

## Solución de Problemas Comunes

- **Rutas rotas**: Verifica que todas las rutas sean relativas
- **Componentes no cargan**: Revisa la consola del navegador para ver errores 404
- **Estilos no aplicados**: Asegúrate de que las rutas CSS sean correctas
- **JavaScript no funciona**: Verifica que los scripts se carguen en el orden correcto

## Soporte

Si encuentras algún problema, por favor:
1. Revisa la consola del navegador (F12 > Console)
2. Verifica que todos los archivos se hayan subido correctamente
3. Asegúrate de que las rutas sean correctas

## Licencia

Este proyecto es de uso exclusivo de El Dicho Panadería.
