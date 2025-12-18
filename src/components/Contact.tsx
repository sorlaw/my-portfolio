"use client";

import { motion } from "framer-motion";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={styles.box}
      >
        <h2 className={styles.title}>Let&apos;s Work Together</h2>
        <p className={styles.text}>
          Have a project in mind? I&apos;m always open to discussing new ideas
          and opportunities.
        </p>

        <motion.a
          href="mailto:putrajangjayakoncoro@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.button}
        >
          Say Hello
        </motion.a>
      </motion.div>

      <footer className={styles.footer}>
        <p>© 2025 Built by Putra Jangjaya</p>
      </footer>
    </section>
  );
}
