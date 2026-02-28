import Link from "next/link";
import styles from "../styles/Tags.module.css";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const tags_background = c2,
  tags_border = c1,
  tag = c4,
  tag_border = c5;

const tag_hover = c2,
  tag_hover_background = c3,
  tag_hover_border = c2,
  tag_active_background = c5;

const tags = [
  "ai",
  "system-design",
  "python",
  "python-performance",
  "go",
  "linux",
  "mysql",
  "image-processing",
  "opencv",
  "concurrency",
  "color-science",
  "react",
  "next-js",
  "flutter",
];

export default function Tags(props) {
  return (
    <div
      className={styles.tags}
      style={{
        backgroundColor: tags_background,
        borderBottom: `5px solid ${tags_border}`,
      }}
    >
      {tags.map((tagName) => (
        <Link
          key={tagName}
          href={`/tags/${tagName}`}
          className={styles.tagLink}
          style={{
            color: tag,
            borderBottomColor: tag_border,
          }}
          onMouseEnter={(e) => {
            e.target.style.background = tag_hover_background;
            e.target.style.color = tag_hover;
            e.target.style.borderBottomColor = tag_hover_border;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = tag;
            e.target.style.borderBottomColor = tag_border;
          }}
          onMouseDown={(e) => {
            e.target.style.background = tag_active_background;
          }}
        >
          {`#${tagName}`}
        </Link>
      ))}
    </div>
  );
}