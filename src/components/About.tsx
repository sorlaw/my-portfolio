'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/About.module.css';

const skills = [
    "JavaScript", "TypeScript", "React.js", "React Native",
    "Expo", "Node.js", "Express", "Bun",
    "MySQL", "PostgreSQL", "SQLite", "Bootstrap", "jQuery"
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className={styles.label}>ABOUT ME</span>
                <h2 className={styles.title}>
                    Solving real-world problems with <br />
                    <span className={styles.highlight}>scalable</span> solutions.
                </h2>

                <div className={styles.grid}>
                    <div className={styles.text}>
                        <p>
                            Hello! I&apos;m Putra Jangjaya, a dedicated Software Developer with a strong foundation in the JavaScript ecosystem.
                            With over 2+ years of experience in Web Development and a growing expertise in Mobile App Development,
                            I specialize in building scalable, user-centric applications.
                        </p>
                        <p>
                            My approach to development is simple: I don&apos;t just write code; I solve real-world problems.
                            Whether it&apos;s optimizing backend performance with Bun/Express or crafting seamless UI with React,
                            I am committed to delivering robust solutions that drive value.
                        </p>
                    </div>

                    <div>
                        <h3 className={styles.skillTitle}>Core Competencies</h3>
                        <div className={styles.skillList}>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={styles.skillTag}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
