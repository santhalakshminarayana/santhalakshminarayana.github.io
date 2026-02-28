import { useEffect, useState } from "react";
import styles from "../styles/BlogProgress.module.css";

export default function BlogProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const article = document.getElementById("blog-content");
            if (!article) return;

            const rect = article.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const articleTop = window.scrollY + rect.top;
            const articleHeight = article.offsetHeight;

            const scrollPosition = window.scrollY - articleTop;
            const totalScrollable = articleHeight - windowHeight;

            if (scrollPosition <= 0) {
                setProgress(0);
            } else if (scrollPosition >= totalScrollable) {
                setProgress(100);
            } else {
                setProgress((scrollPosition / totalScrollable) * 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}