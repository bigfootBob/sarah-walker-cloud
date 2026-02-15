import { motion } from "framer-motion";
import styles from './Hero.module.scss';

const Hero = () => {
    // Variants for the container to coordinate the children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delays the start of each child animation
                delayChildren: 0.2,
            },
        },
    };

    // Variants for the individual text items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <motion.section
            className={styles.heroContainer}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
                padding: '100px 20px',
                textAlign: 'center',
                fontFamily: 'serif' // Classic writer aesthetic
            }}
        >
            <motion.h1
                variants={itemVariants}
                style={{ fontSize: '4rem', margin: '0', fontWeight: '300' }}
            >
                Sarah Walker
            </motion.h1>

            <motion.p
                variants={itemVariants}
                style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#555' }}
            >
                Writer & Anthropologist
            </motion.p>

            <motion.div
                variants={itemVariants}
                style={{ marginTop: '30px' }}
            >
                <motion.hr
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ border: '1px solid #ccc', margin: '0 auto' }}
                />
            </motion.div>

            <motion.p
                variants={itemVariants}
                style={{ maxWidth: '600px', margin: '30px auto', lineHeight: '1.6' }}
            >
                Exploring the intersections of human culture, history, and the
                untold stories that shape our shared experience.
            </motion.p>
        </motion.section>
    );
};

export default Hero;