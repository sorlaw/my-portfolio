'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background decorations */}
            <div className={styles.blob1} />
            <div className={styles.blob2} />

            <div className={styles.content}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.greeting}
                >
                    Software Developer
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.headline}
                >
                    Solving <span className={styles.highlight}>Real-World Problems</span><br />
                    with Code.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className={styles.subheadline}
                >
                    I don&apos;t just write code—I build scalable, user-centric applications using the modern JavaScript ecosystem.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className={styles.ctaGroup}
                >
                    <a href="#projects" className={styles.primaryBtn}>
                        View Work
                    </a>
                    <a href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
