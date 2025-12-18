'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.navbar}
        >
            <Link href="/" className={styles.logo}>
                Putra JK
            </Link>

            <div className={styles.links}>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#projects" className={styles.link}>Projects</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
            </div>

            <div className={styles.socials}>
                <a href="https://github.com/sorlaw" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/putra-jangjaya-73837725a/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <Linkedin size={20} />
                </a>
                <a href="mailto:putrajangjayakoncoro@gmail.com" className={styles.socialIcon}>
                    <Mail size={20} />
                </a>
            </div>
        </motion.nav>
    );
}
