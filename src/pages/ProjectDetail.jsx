import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, CheckCircle, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const hasImages = project?.images && project.images.length > 0;

    useEffect(() => {
        if (!hasImages || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [hasImages, project?.images]);

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

    const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

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

                        {/* Interactive Showcase / Carousel */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Visualización del Proyecto</h2>
                            {hasImages ? (
                                <div className="glass-card" style={{ padding: '1rem', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ 
                                        height: '500px', 
                                        width: '100%', 
                                        borderRadius: '12px', 
                                        overflow: 'hidden',
                                        position: 'relative',
                                        backgroundColor: '#000'
                                    }}>
                                        <img 
                                            key={hasImages ? currentImgIndex : 'static'}
                                            src={hasImages ? project.images[currentImgIndex] : project.image} 
                                            alt={`${project.title} slide`}
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'contain',
                                                animation: hasImages && project.images.length > 1 ? 'fadeInQuick 0.3s ease-in-out' : 'none'
                                            }}
                                        />
                                        
                                        {project.images.length > 1 && (
                                            <>
                                                <button onClick={prevImg} style={{
                                                    position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                                                    background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
                                                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                                                    backdropFilter: 'blur(4px)'
                                                }}>
                                                    <ChevronLeft size={24} />
                                                </button>
                                                <button onClick={nextImg} style={{
                                                    position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                                                    background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
                                                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                                                    backdropFilter: 'blur(4px)'
                                                }}>
                                                    <ChevronRight size={24} />
                                                </button>
                                                
                                                <div style={{
                                                    position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                                                    display: 'flex', gap: '0.5rem'
                                                }}>
                                                    {project.images.map((_, i) => (
                                                        <div key={i} onClick={() => setCurrentImgIndex(i)} style={{
                                                            width: i === currentImgIndex ? '24px' : '8px',
                                                            height: '8px',
                                                            borderRadius: '4px',
                                                            background: i === currentImgIndex ? 'var(--color-primary)' : 'rgba(255,255,255,0.3)',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease'
                                                        }} />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div style={{
                                    height: '300px',
                                    backgroundColor: '#1f1f22',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#52525b',
                                    border: '1px dashed #3f3f46'
                                }}>
                                    Visualización próximamente disponible
                                </div>
                            )}
                        </div>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Características Clave</h2>
                        <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                            {project.features.map((feature, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--color-primary)" />
                                    <span>{feature}</span>
                                </div>
                            ))}
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
