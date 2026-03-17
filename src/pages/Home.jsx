
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, Code, Database, Smartphone } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 'var(--header-height)',
                background: 'radial-gradient(ellipse at top, #1e1b4b, #000000)',
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="fade-in" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Construyendo la Infraestructura<br />Digital del Mañana.
                    </h1>
                    <p className="fade-in" style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        color: 'var(--color-text-secondary)',
                        animationDelay: '0.2s'
                    }}>
                        VANI DIGITAL se especializa en crear aplicaciones de alto rendimiento, soluciones de datos y sistemas empresariales que impulsan la innovación.
                    </p>
                    <div className="fade-in" style={{ animationDelay: '0.4s', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#portfolio" className="btn btn-primary">
                            Ver Nuestro Trabajo <ArrowRight size={18} />
                        </a>
                        <a href="#about" className="btn btn-secondary">
                            Conocer Más
                        </a>
                    </div>
                </div>
            </section>

            {/* Services / About Section */}
            <section id="about" style={{ padding: '6rem 0', background: '#0a0a0a' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Nuestra Experiencia</h2>
                    <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <Database size={48} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Big Data y Analítica</h3>
                            <p>Herramientas de visualización y procesamiento de datos de última generación como DATASENSE para empoderar la toma de decisiones.</p>
                        </div>

                        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <Smartphone size={48} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aplicaciones Móviles y Web</h3>
                            <p>Aplicaciones fluidas y de alto rendimiento para iOS, Android y Web utilizando frameworks de vanguardia.</p>
                        </div>

                        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{ color: '#ec4899', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <Code size={48} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Desarrollo SaaS</h3>
                            <p>Soluciones de Software como Servicio escalables diseñadas para el crecimiento, la seguridad y la fiabilidad empresarial.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid Section */}
            <section id="portfolio" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <div>
                            <h2 style={{ marginBottom: '1rem' }}>Proyectos Destacados</h2>
                            <p style={{ maxWidth: '500px' }}>Explora nuestro portafolio de productos digitales que mejoran industrias desde las finanzas hasta la narración de historias.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                        {projects.map((project) => (
                            <div key={project.id} className="fade-in" style={{ animationDelay: '0.2s' }}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{ padding: '6rem 0', textAlign: 'center', background: 'linear-gradient(to top, #0f0a28, #000)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>¿Listo para transformar tu negocio?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#a1a1aa' }}>
                        Hablemos sobre cómo VANI DIGITAL puede dar vida a tu visión.
                    </p>
                    <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        Contáctanos
                    </button>
                </div>
            </section>
        </>
    );
}
