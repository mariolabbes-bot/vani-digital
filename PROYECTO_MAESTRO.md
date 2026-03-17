
# PROYECTO MAESTRO: VANI DIGITAL (vani-digital.com)

Esta documentación consolida toda la información relevante sobre el desarrollo, la arquitectura y el estado actual del sitio web corporativo de VANI DIGITAL.

## 1. Visión General del Proyecto
El objetivo principal es establecer una presencia web profesional para **VANI DIGITAL**, una agencia de soluciones digitales. El sitio actúa como una matriz para mostrar el portafolio de aplicaciones y proyectos en desarrollo.

*   **Dominio Principal**: `vani-digital.com` (planeado)
*   **Subdominio Existente**: `datasense.vani-digital.com` (enlace externo)
*   **Tecnologías Clave**: React (Vite), React Router, Vanilla CSS (Variables & Flexbox/Grid), Lucide React (Íconos).

## 2. Arquitectura y Estructura

### Stack Tecnológico
*   **Frontend**: React 18+
*   **Build Tool**: Vite
*   **Routing**: React Router DOM v6
*   **Estilos**: CSS Puro con variables globales (`index.css`) para un tema oscuro y moderno.
*   **Despliegue**: Preparado para Vercel/Netlify (SPA).

### Estructura de Directorios
La estructura del proyecto está organizada para escalabilidad y mantenimiento:

```
vani-digital/
├── index.html              # Punto de entrada HTML (SEO y Metadatos)
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── public/                 # Archivos estáticos
└── src/
    ├── main.jsx            # Punto de montaje de React
    ├── App.jsx             # Componente raíz y Rutas
    ├── index.css           # Estilos globales y variables de diseño
    ├── components/         # Componentes reutilizables
    │   ├── Layout.jsx      # Wrapper principal (Navbar + Footer)
    │   ├── Navbar.jsx      # Barra de navegación receptiva
    │   ├── Footer.jsx      # Pie de página
    │   └── ProjectCard.jsx # Tarjeta de proyecto para la cuadrícula
    ├── pages/              # Vistas principales
    │   ├── Home.jsx        # Página de inicio (Hero, Servicios, Grid)
    │   └── ProjectDetail.jsx # Plantilla dinámica para detalles de proyecto
    ├── data/
    │   └── projects.js     # Fuente de verdad para los datos de los proyectos
    └── assets/             # Imágenes y recursos estáticos
```

## 3. Estado del Proyecto

### ✅ Completado
*   **Configuración Inicial**: Proyecto Vite creado y dependencias instaladas.
*   **Diseño Visual**: Implementación de un tema "profesional y oscuro" con animaciones suaves.
*   **Navegación**:
    *   Integración de React Router.
    *   Navbar responsivo con menú móvil.
*   **Páginas**:
    *   `Home`: Hero section, grid de proyectos, sección "Nosotros".
    *   `ProjectDetail`: Página dinámica que carga datos basados en el ID del proyecto.
*   **Datos**: Estructura de datos centralizada en `src/data/projects.js`.
*   **Traducción**: Todo el contenido y la interfaz han sido localizados al **Español Latinoamericano**.

### 🚧 Pendientes (Próximos Pasos)
1.  **Contenido Real**: Reemplazar los textos de marcador de posición (Lorem Ipsum o descripciones genéricas) con el copy final de la agencia.
2.  **Imágenes**: Actualizar `src/data/projects.js` con capturas de pantalla reales de las aplicaciones (Datasense, Findata, etc.).
3.  **Enlaces de Descarga**: Agregar las URL reales de Google Play / App Store en los botones de descarga.
4.  **Despliegue**: Subir el proyecto a un hosting de producción (Vercel, Netlify, DigitalOcean).

## 4. Guía de Desarrollo

### Instalación Local
```bash
# 1. Navegar a la carpeta
cd vani-digital

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

### Construcción para Producción
```bash
npm run build
```
Esto generará una carpeta `dist/` lista para ser desplegada.

## 5. Detalles de los Proyectos

| Proyecto | Estado | Tipo | Enlace / Acción |
| :--- | :--- | :--- | :--- |
| **DATASENSE** | En Vivo | Enterprise / Data | Redirige a `datasense.vani-digital.com` |
| **FINDATA** | En Desarrollo | Finanzas | Página interna con detalles |
| **CONTADOR DE CUENTOS** | Beta | EdTech / Kids | Página interna con detalles |
| **DROPSTORE** | En Desarrollo | E-commerce | Página interna con detalles |
| **SYNC** | En Desarrollo | Utilidad | Página interna con detalles |

---
**Generado por Asistente de IA**
*Fecha: 9 de Febrero, 2026*
