
/**
 * Carga un componente HTML desde la carpeta /components y lo inyecta en un elemento del DOM.
 * @param {string} componentName - El nombre del archivo del componente (ej. 'header.html').
 * @param {string} targetElementId - El ID del elemento donde se inyectará el HTML.
 * @returns {Promise<void>}
 */
async function loadComponent(componentName, targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error(`Error: Elemento con ID '${targetElementId}' no encontrado.`);
    return;
  }

  try {
    // Usar ruta absoluta para cargar los componentes
    const response = await fetch(`/components/${componentName}`);
    if (!response.ok) {
      throw new Error(`No se pudo cargar el componente: ${componentName}`);
    }
    const html = await response.text();
    targetElement.innerHTML = html;
  } catch (error) {
    console.error(`Error al cargar el componente '${componentName}':`, error);
    targetElement.innerHTML = `<p style="color: red;">Error al cargar ${componentName}.</p>`;
  }
}
