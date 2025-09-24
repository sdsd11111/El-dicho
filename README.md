# El Dicho Panadería

Sitio web estático para El Dicho Panadería, construido con HTML, CSS y JavaScript. El sitio es completamente responsivo y utiliza componentes dinámicos para facilitar el mantenimiento.

## 🚀 Características

- **Diseño Responsivo**: Se adapta a dispositivos móviles, tablets y escritorios
- **Carga Dinámica**: Componentes HTML cargados mediante JavaScript
- **Rendimiento Optimizado**: Carga rápida gracias a la optimización de recursos
- **Fácil Mantenimiento**: Estructura modular que facilita las actualizaciones

## 🏗️ Estructura del Proyecto

```
el-dicho-panaderia/
├── components/           # Componentes HTML reutilizables
│   ├── header.html
│   ├── footer.html
│   ├── formulario_contacto.html
│   └── testimonios.html
├── css/                 # Hojas de estilo
│   ├── styles.css
│   └── producto.css
├── data/                # Datos de productos en formato JSON
│   ├── panes-artesanales.json
│   └── ...
├── images/              # Recursos multimedia
│   ├── productos/
│   └── iconos/
├── js/                  # Scripts JavaScript
│   ├── content-renderer.js
│   └── script.js
├── index.html           # Página principal
└── vercel.json          # Configuración de Vercel
```

## 🚀 Despliegue en Vercel

### Requisitos Previos
- Cuenta en [Vercel](https://vercel.com/)
- Repositorio Git (GitHub, GitLab o Bitbucket)

### Pasos para el Despliegue

1. **Preparación**
   - Asegúrate de que todos los archivos estén en el repositorio
   - Verifica que las rutas en el código sean correctas

2. **Despliegue Automático**
   1. Conecta tu repositorio a Vercel
   2. Vercel detectará automáticamente la configuración
   3. Haz clic en "Deploy"

3. **Configuración Avanzada**
   - **Variables de entorno**: Configura en `Settings > Environment Variables`
   - **Dominio personalizado**: Configura en `Settings > Domains`
   - **Redirecciones**: Configura en `vercel.json`

## 💻 Desarrollo Local

### Opción 1: Con Python (Recomendado para pruebas rápidas)
```bash
# Python 3
python -m http.server 8000

# Abre en tu navegador
http://localhost:8000
```

### Opción 2: Con Node.js
```bash
# Instalar servidor HTTP globalmente
npm install -g http-server

# Iniciar servidor
http-server -p 8080

# O con npx (sin instalación)
npx http-server -p 8080
```

## 🛠️ Componentes Dinámicos

El sitio utiliza un sistema de carga dinámica de componentes que permite:

- **Reutilización de código**: Componentes como header y footer se cargan una vez
- **Mantenimiento simplificado**: Actualizaciones en un solo archivo
- **Carga eficiente**: Los componentes se cargan bajo demanda

## 📝 Notas de Versión

### Última Actualización
- Corrección de errores en la carga de componentes
- Mejoras en el rendimiento de la galería de imágenes
- Optimización para SEO

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

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
