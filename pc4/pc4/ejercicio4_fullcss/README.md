# Portal Cultural Municipal: "Ciudad Viva"
### Evaluación Final - Hojas de Estilo en Cascada Avanzado (100000SI58)

Este proyecto consiste en el desarrollo del portal cultural inmersivo **"Ciudad Viva"** para una municipalidad, realizado para el **Ejercicio 4: FULL CSS (Construido sin frameworks)**. La propuesta demuestra el uso avanzado de CSS Grid Layout, Flexbox, media queries organizadas, animaciones `@keyframes`, microinteracciones y una arquitectura de estilos modular.

---

## 🚀 Instrucciones de Ejecución

El proyecto es estático, por lo que no requiere ningún proceso de compilación ni instalación de paquetes. Puedes ejecutarlo de dos maneras:
1.  **Directo**: Abre el archivo `index.html` en cualquier navegador web moderno.
2.  **Servidor Local**: Puedes usar extensiones como **Live Server** en VS Code para habilitar recargas automáticas.

---

## 📁 Estructura de Archivos
*   `index.html`: Página de inicio con hero banner, countdown, beneficios y noticias en grid asimétrico.
*   `agenda.html`: Cronograma interactivo por días usando Tabs y tablas adaptadas a móviles.
*   `detalle.html`: Ficha de evento con detalles, mapa simulado y botón de impresión nativo.
*   `lugares.html`: Directorio con buscador y modales de información de teatros y museos.
*   `galeria.html`: Rejilla asimétrica avanzada (mosaico/masonry) con overlays interactivos.
*   `contacto.html`: Formularios validados mediante CSS, acordeón de FAQ y boletín.
*   `css/`: Módulos de estilos (`variables.css`, `base.css`, `layout.css`, `components.css`, `animations.css`, `print.css`, `main.css`).
*   `js/main.js`: Lógica del navbar, modals, tabs, preloader y toasts.
*   `assets/images/`: Imágenes de fondos.

---

## 🛠️ Tecnologías Aplicadas
*   **Variables CSS**: Sistema de diseño centralizado en [variables.css](file:///c:/Users/LAB-USR-LNORTE/Desktop/pc4/ejercicio4_fullcss/css/variables.css) para colores, fuentes, espaciados y sombras.
*   **CSS Grid Layout**: Implementado en la rejilla de noticias, catálogo de lugares y mosaico asimétrico de galería.
*   **Flexbox**: Empleado en barras de navegación, botones y tarjetas.
*   **Animaciones Keyframes**: `@keyframes fadeInUp` para entrada y `pulseGlow` para botones.
*   **Media Queries**: Agrupadas en [layout.css](file:///c:/Users/LAB-USR-LNORTE/Desktop/pc4/ejercicio4_fullcss/css/layout.css) y [main.css](file:///c:/Users/LAB-USR-LNORTE/Desktop/pc4/ejercicio4_fullcss/css/main.css) para responsive.
*   **Versión Imprimible**: Estilos en [print.css](file:///c:/Users/LAB-USR-LNORTE/Desktop/pc4/ejercicio4_fullcss/css/print.css) optimizados para impresión de ficha en papel A4.
