
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, CheckCircle, Download, ExternalLink } from 'lucide-react';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 4rem)', minHeight: '60vh', textAlign: 'center' }}>
                <h2>Proyecto No Encontrado</h2>
                <Link to="/" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                    <ArrowLeft size={16} /> Volver al Inicio
                </Link>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <div style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.8), var(--color-bg)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '6rem 0 4rem'
            }}>
                <div className="container">
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: '#a1a1aa' }}>
                        <ArrowLeft size={16} /> Volver a Proyectos
                    </Link>
                    <h1 className="fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{project.title}</h1>
                    <p className="fade-in" style={{ fontSize: '1.2rem', maxWidth: '600px', color: '#e4e4e7', animationDelay: '0.1s' }}>
                        {project.description}
                    </p>
                    <div className="fade-in" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', animationDelay: '0.2s' }}>
                        <span style={{
                            padding: '0.3rem 1rem',
                            borderRadius: '20px',
                            backgroundColor: project.status === 'En Vivo' ? '#10b981' : '#3b82f6',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        }}>
                            {project.status.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div className="grid grid-cols-3" style={{ gap: '4rem', gridTemplateColumns: '2fr 1fr' }}>

                    {/* Main Content */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Descripción General</h2>
                        <p style={{ fontSize: '1.1rem', color: '#d4d4d8', marginBottom: '3rem', lineHeight: '1.8' }}>
                            {project.longDescription}
                        </p>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Características Clave</h2>
                        <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                            {project.features.map((feature, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--color-primary)" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Galería</h2>
                            <div style={{
                                height: '400px',
                                backgroundColor: '#1f1f22',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#52525b'
                            }}>
                                [Marcador de Posición para Capturas de Pantalla]
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Downloads */}
                    <div>
                        <div className="glass-card" style={{ position: 'sticky', top: '100px' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Obtener la App</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {project.platforms.includes('iOS') && (
                                    <button className="btn btn-secondary" style={{ justifyContent: 'center' }}>
                                        <Download size={18} /> Descargar para iOS
                                    </button>
                                )}
                                {project.platforms.includes('Android') && (
                                    <button className="btn btn-secondary" style={{ justifyContent: 'center' }}>
                                        <Download size={18} /> Descargar para Android
                                    </button>
                                )}
                                {project.platforms.includes('Web') && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                                        <ExternalLink size={18} /> Lanzar Web App
                                    </a>
                                )}
                            </div>

                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>Tecnologías</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: '#27272a', borderRadius: '4px' }}>React</span>
                                    <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: '#27272a', borderRadius: '4px' }}>Node.js</span>
                                    <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: '#27272a', borderRadius: '4px' }}>PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
