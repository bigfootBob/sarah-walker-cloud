import { motion } from "framer-motion";
import styles from './Navbar.module.scss';

const navLinks = [
    { name: "Art", href: "#art" },
    { name: "Writing", href: "#writing" },
    { name: "Other Projects", href: "#other-projects" },
    { name: "About", href: "#about" },
];

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem 10%',
            alignItems: 'baseline',
            fontFamily: 'serif'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}
            >
                S. WALKER
            </motion.div>

            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
                {navLinks.map((link) => (
                    <motion.li key={link.name} whileHover={{ y: -2 }}>
                        <a
                            href={link.href}
                            style={{
                                textDecoration: 'none',
                                color: '#333',
                                position: 'relative',
                                fontSize: '0.9rem'
                            }}
                        >
                            {link.name}
                            {/* This is the hover underline effect */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
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