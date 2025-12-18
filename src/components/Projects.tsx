'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';

const projects = [
    {
        title: "Crypto Trade Trace",
        category: "Full Stack Web Application",
        image: "/project-1.png",
        description: "Advanced Blockchain Transaction Monitoring & Forensic Visualization System.",
        link: "https://github.com/sorlaw/crypto-trade-trace"
    },
    {
        title: "myFinance",
        category: "Mobile Application",
        image: "/project-2.jpg",
        description: "A modern, personal finance tracking application built with React Native, Expo, and Clean Architecture.",
        link: "https://github.com/sorlaw/myFinance"
    },
    {
        title: "HRM App",
        category: "Human Resource Management",
        image: "/project-3.jpg",
        description: "A modern, efficient Human Resource Management solution built with React Native and Expo.",
        link: "https://github.com/sorlaw/hrm-app"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.header}
            >
                <span className={styles.label}>PORTFOLIO</span>
                <h2 className={styles.title}>Selected Works</h2>
            </motion.div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={styles.image}
                                unoptimized
                            />
                            <div className={styles.overlay}>
                                <span className={styles.viewBtn}><a href={project.link} target='_blank'>View Project</a></span>
                            </div>
                        </div>

                        <div className={styles.info}>
                            <span className={styles.category}>{project.category}</span>
                            <h3 className={styles.projectTitle}>
                                {project.title}
                            </h3>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
