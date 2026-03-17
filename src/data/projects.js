
// Proyectos de Vani Digital
// Todos los proyectosincluyendo los activos y los que están en desarrollo.

export const projects = [
  {
    id: 'datasense',
    title: 'DATASENSE',
    description: 'Plataforma empresarial de inteligencia de negocios y visualización de datos.',
    longDescription: 'DATASENSE es nuestra solución insignia para análisis avanzado de datos, visualización e inteligencia empresarial. Empodera a las organizaciones para tomar decisiones basadas en datos a través de paneles interactivos e informes en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Tech/Data placeholder
    link: 'https://datasense.vani-digital.com', // Subdominio Externo
    isExternal: true,
    status: 'En Vivo',
    features: ['Análisis en Tiempo Real', 'Paneles Personalizados', 'Integración Segura de Datos', 'Exportación a PDF/Excel'],
    platforms: ['Web']
  },
  {
    id: 'findata',
    title: 'FINDATA',
    description: 'Sistema de gestión de datos financieros de próxima generación.',
    longDescription: 'FINDATA optimiza las operaciones financieras con procesamiento inteligente de datos y herramientas de informes automatizados. Diseñado para profesionales de finanzas que necesitan precisión y velocidad.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', // Finance placeholder
    link: '/projects/findata',
    isExternal: false,
    status: 'En Desarrollo',
    features: ['Conciliación Automatizada', 'Soporte Multimoneda', 'Pistas de Auditoría'],
    platforms: ['Web', 'iOS', 'Android']
  },
  {
    id: 'contador-de-cuentos',
    title: 'CONTADOR DE CUENTOS',
    description: 'Una plataforma de narración interactiva para niños y educadores.',
    longDescription: 'Dando vida a las historias a través de la innovación digital. Contador de Cuentos ofrece una biblioteca de historias interactivas que atraen a los niños y ayudan a los educadores a enseñar a través de la narrativa.',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80', // Kids/Book placeholder
    link: '/projects/contador-de-cuentos',
    isExternal: false,
    status: 'Beta',
    features: ['Audio Interactivo', 'Narración Visual', 'Controles Parentales'],
    platforms: ['iOS', 'Android']
  },
  {
    id: 'dropstore',
    title: 'DROPSTORE',
    description: 'Automatización de dropshipping sin problemas para el comercio electrónico moderno.',
    longDescription: 'DropStore conecta a minoristas con proveedores al instante. Automatiza tu inventario, procesamiento de pedidos y seguimiento con nuestra solución de dropshipping todo en uno.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80', // E-commerce placeholder
    link: '/projects/dropstore',
    isExternal: false,
    status: 'En Desarrollo',
    features: ['Sincronización de Inventario', 'Automatización de Pedidos', 'Red de Proveedores'],
    platforms: ['Web']
  },
  {
    id: 'sync',
    title: 'SYNC',
    description: 'Herramienta de sincronización universal para flujos de trabajo multiplataforma.',
    longDescription: 'Mantén tu vida digital en armonía. SYNC proporciona sincronización de archivos y datos sin esfuerzo en todos tus dispositivos con encriptación de extremo a extremo.',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&w=800&q=80', // Tech/Sync placeholder
    link: '/projects/sync',
    isExternal: false,
    status: 'En Desarrollo',
    features: ['Sincronización en Tiempo Real', 'Encriptación de Extremo a Extremo', 'Soporte Multiplataforma'],
    platforms: ['MacOS', 'Windows', 'Linux']
  }
];
