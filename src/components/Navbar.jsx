import { motion, useReducedMotion } from "framer-motion";
import styles from './Navbar.module.scss';

const navLinks = [
    { name: "Art", href: "#art" },
    { name: "Writing", href: "#writing" },
    { name: "Other Projects", href: "#other-projects" },
    { name: "About", href: "#about" },
];

const Navbar = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <nav
            aria-label="Main navigation"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '2rem 10%',
                alignItems: 'baseline',
                fontFamily: 'serif'
            }}
        >
            <motion.a
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    color: 'inherit'
                }}
            >
                S. WALKER
            </motion.a>

            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                    <motion.li key={link.name} whileHover={prefersReducedMotion ? {} : { y: -2 }}>
                        <a
                            href={link.href}
                            className={styles.navLink}
                            style={{
                                textDecoration: 'none',
                                color: '#333',
                                position: 'relative',
                                fontSize: '0.9rem'
                            }}
                        >
                            {link.name}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={prefersReducedMotion ? {} : { scaleX: 1 }}
                                style={{
                                    height: '1px',
                                    backgroundColor: '#bc4749',
                                    originX: 0
                                }}
                            />
                        </a>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;