
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: isScrolled ? 'rgba(3, 0, 20, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'var(--header-height)'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="VANI DIGITAL" style={{ height: '200px', objectFit: 'contain' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Inicio</Link>
                    <a href="#portfolio" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Portafolio</a>
                    <a href="#about" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Nosotros</a>
                    <a
                        href="https://datasense.vani-digital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                    >
                        Ir a DATASENSE <ExternalLink size={14} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'var(--header-height)',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--color-bg)',
                    padding: '2rem',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                    <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portafolio</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
                    <a href="https://datasense.vani-digital.com" target="_blank" rel="noopener noreferrer">DATASENSE</a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
