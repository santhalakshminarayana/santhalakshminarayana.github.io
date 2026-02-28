import { useState } from "react";
import Link from "next/link";
import Tags from "./Tags.js";
import styles from "../styles/Header.module.css";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const header = c4,
  header_left_link = c6,
  header_left_link_hover = c3,
  header_left_link_active = c5;
const header_right_link = c6,
  header_right_link_hover = c3,
  header_right_link_active = c5;

export default function Header(props) {
  const [showTags, setShowTags] = useState("none");

  function handleTagsClick(e) {
    e.preventDefault();
    if (showTags === "none") setShowTags("block");
    else setShowTags("none");
  }

  return (
    <div style={{ background: header }}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link href="/">
            {/*
    			<picture>
	            <source srcSet={require('../images/santha-lakshmi-narayana-logo.png?webp')} type = "image/webp" />
	            <source srcSet={require('../images/santha-lakshmi-narayana-logo.png')} type = 'image/png' />
	            <img src={require('../images/santha-lakshmi-narayana-logo.png')} alt = 'Logo' />
	          </picture>
	          */}
            <img
              src={"/images/santha-lakshmi-narayana-logo.png"}
              alt="Logo"
              className={styles.logo}
            />
          </Link>

          <Link
            href="/"
            className={`${styles.headerLeftLink} ${styles.name}`}
            style={{ color: header_left_link }}
            onMouseEnter={(e) =>
              (e.target.style.color = header_left_link_hover)
            }
            onMouseLeave={(e) =>
              (e.target.style.color = header_left_link)
            }
            onMouseDown={(e) =>
              (e.target.style.color = header_left_link_active)
            }
          >
            <b>Santha Lakshmi Narayana</b>
          </Link>
        </div>

        <div className={styles.headerRight}>
          <Link
            href="/about"
            className={styles.headerRightLink}
            style={{ color: header_right_link }}
            onMouseEnter={(e) =>
              (e.target.style.color = header_right_link_hover)
            }
            onMouseLeave={(e) =>
              (e.target.style.color = header_right_link)
            }
            onMouseDown={(e) =>
              (e.target.style.color = header_right_link_active)
            }
          >
            About
          </Link>

          <a
            href="#"
            onClick={handleTagsClick}
            className={styles.headerRightLink}
            style={{ color: header_right_link }}
            onMouseEnter={(e) =>
              (e.target.style.color = header_right_link_hover)
            }
            onMouseLeave={(e) =>
              (e.target.style.color = header_right_link)
            }
            onMouseDown={(e) =>
              (e.target.style.color = header_right_link_active)
            }
          >
            Tags
          </a>

          <Link
            href="/"
            className={styles.headerRightLink}
            style={{ color: header_right_link }}
            onMouseEnter={(e) =>
              (e.target.style.color = header_right_link_hover)
            }
            onMouseLeave={(e) =>
              (e.target.style.color = header_right_link)
            }
            onMouseDown={(e) =>
              (e.target.style.color = header_right_link_active)
            }
          >
            Home
          </Link>
        </div>
      </div>

      <div style={{ display: showTags }}>
        <Tags />
      </div>
    </div>
  );
}