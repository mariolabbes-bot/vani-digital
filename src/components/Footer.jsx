
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            padding: '4rem 0',
            marginTop: '6rem',
            backgroundColor: 'var(--color-bg-secondary)'
        }}>
            <div className="container">
                <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>VANI DIGITAL</h3>
                        <p style={{ maxWidth: '300px', fontSize: '0.9rem', color: '#666' }}>
                            Construyendo el futuro de las experiencias digitales, una aplicación a la vez.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <a href="#" style={{ color: '#ccc' }}><Twitter size={20} /></a>
                        <a href="#" style={{ color: '#ccc' }}><Linkedin size={20} /></a>
                        <a href="#" style={{ color: '#ccc' }}><Facebook size={20} /></a>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', pt: '2rem', borderTop: '1px solid #111', fontSize: '0.8rem', color: '#444', textAlign: 'center' }}>
                    © {new Date().getFullYear()} VANI DIGITAL. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
