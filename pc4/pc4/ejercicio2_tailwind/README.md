# Marketplace de Economía Circular: "Reuse Market"
### Evaluación Final - Hojas de Estilo en Cascada Avanzado (100000SI58)

Este proyecto consiste en el desarrollo del marketplace responsivo de economía circular **"Reuse Market"**, realizado para el **Ejercicio 2: TAILWIND CSS**. La propuesta demuestra el uso de utilidades, composición responsiva y creación de componentes reutilizables sin librerías externas.

---

## 🚀 Instrucciones de Ejecución

El proyecto es estático y utiliza el **Tailwind Play CDN** para el procesamiento en caliente directo en el navegador de la configuración del tema de identidad visual. Puedes abrir `index.html` en tu navegador.

---

## 📁 Estructura de Archivos
*   `index.html`: Propuesta de valor, categorías populares y catálogo de destacados.
*   `catalogo.html`: Barra de búsqueda, paginación y grid de productos adaptable.
*   `detalle.html`: Ficha de producto con miniaturas de galería, características e info de vendedor.
*   `perfil.html`: Estadísticas ecológicas del vendedor (CO2 Ahorrado) y reputación.
*   `carrito.html`: Resumen de pedido con cantidades, subtotal e inputs de entrega.
*   `publicar.html`: Formulario completo con zona de carga visual y preguntas frecuentes.
*   `tailwind.config.js`: Contiene la configuración de la identidad visual del proyecto.
*   `css/style.css`: Estilos de componentes personalizados y clases de utilidad comunes.
*   `js/main.js`: Lógica interactiva para la barra lateral móvil, filtros y notificaciones push.

---

## 🛠️ Tecnologías Aplicadas
*   **Identidad Visual Propia**: Configurada en `tailwind.config.js` y expandida en caliente en la cabecera HTML mediante la redefinición del objeto `tailwind.config`.
*   **Grid Dinámico**: El catálogo de productos cambia dinámicamente de 1 a 2, 3 o 4 columnas en base a los breakpoints del dispositivo.
*   **Componentes Reutilizables**: Implementación de clases de componentes comunes `.btn-primary`, `.btn-secondary`, `.btn-outline` y `.custom-card` en [style.css](file:///c:/Users/LAB-USR-LNORTE/Desktop/pc4/ejercicio2_tailwind/css/style.css).
