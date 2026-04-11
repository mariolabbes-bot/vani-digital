import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
    const isExternal = project.isExternal;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasMultipleImages = project.images && project.images.length > 1;

    useEffect(() => {
        if (!hasMultipleImages) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 5000); // 5 seconds visibility

        return () => clearInterval(interval);
    }, [hasMultipleImages, project.images]);

    const displayImage = hasMultipleImages ? project.images[currentImageIndex] : project.image;

    return (
        <div className="glass-card" style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div className="image-wrapper" style={{
                height: '240px',
                width: '100%',
                marginBottom: '1.5rem',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#1f1f22'
            }}>
                <img
                    key={hasMultipleImages ? currentImageIndex : 'static'}
                    src={displayImage}
                    alt={project.title}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 0.5s ease',
                        animation: hasMultipleImages ? 'fadeInQuick 0.3s ease-in-out' : 'none'
                    }}
                />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>{project.title}</h3>
                    {project.status === 'En Vivo' && (
                        <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '20px', backgroundColor: '#10b981', color: '#fff', fontWeight: 'bold' }}>EN VIVO</span>
                    )}
                    {project.status !== 'En Vivo' && (
                        <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '20px', backgroundColor: '#3b82f6', color: '#fff' }}>{project.status}</span>
                    )}
                </div>

                <p style={{ fontSize: '0.95rem', color: '#a1a1aa', flex: 1, lineHeight: '1.5' }}>
                    {project.description}
                </p>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.platforms.map(p => (
                        <span key={p} style={{
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.6rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '4px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#d4d4d8'
                        }}>
                            {p}
                        </span>
                    ))}
                </div>

                <div style={{ marginTop: '2rem' }}>
                    {isExternal ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Visitar Sitio <ExternalLink size={16} />
                        </a>
                    ) : (
                        <Link
                            to={`/projects/${project.id}`}
                            className="btn btn-secondary"
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Ver Detalles <ArrowRight size={16} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
