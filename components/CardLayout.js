import Link from "next/link";
import styles from "../styles/CardLayout.module.css";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

export default function CardLayout({ postsMetaData }) {
  return (
    <div className={styles.cardLayout}>
      {postsMetaData.map((metadata) => (
        //const imgSrc = require(`../images/${metadata.metadata.imgName}?resize`);
        //const imgSrcWebp = require(`../images/${metadata.metadata.imgName}?resize&format=webp`);
        // const imgType = "image/" + metadata.metadata.imgName.split(".").pop();
        <div className={styles.cardContainer} key={metadata.metadata.title}
          style={{
            "--card-hover-border": c5,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderBottomColor = c5)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderBottomColor = "transparent")
          }
        >
          <div>
            <div className={styles.imgContainer}>
              {/*
								<picture>
			            <source srcSet={imgSrcWebp} type = "image/webp" />
			            <img src={imgSrc} alt = {metadata.metadata.title} />
			          </picture>
			          */}
              <img
                className={styles.image}
                src={"/images/" + metadata.metadata.imgName}
                alt={metadata.metadata.title}
              />
            </div>

            <div className={styles.infoContainer}>
              <div className={styles.descriptionContainer}>
                <p
                  className={styles.date}
                  style={{ color: c3 }}
                >
                  {metadata.metadata.date}
                </p>

                <Link
                  href={`/blog/${metadata.metadata.id}`}
                  className={styles.infoContainerLink}
                  style={{
                    color: c4,
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = c3)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = c4)
                  }
                  onMouseDown={(e) =>
                    (e.target.style.color = c5)
                  }
                >
                  {metadata.metadata.title}
                </Link>

                <p
                  className={styles.description}
                  style={{ color: c1 + "cc" }}
                >
                  {metadata.metadata.description}
                </p>
              </div>

              <div className={styles.tagsContainer}>
                <div className={styles.tagsContainerTag}>
                  {metadata.metadata.tags.map((tag_name) => (
                    <Link
                      key={tag_name}
                      href={`/tags/${tag_name}`}
                      className={styles.tagLink}
                      style={{
                        color: c4,
                        borderBottomColor: c5,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = c3;
                        e.target.style.color = c2;
                        e.target.style.borderBottomColor = c2;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = c4;
                        e.target.style.borderBottomColor = c5;
                      }}
                      onMouseDown={(e) =>
                        (e.target.style.background = c5)
                      }
                    >
                      {"#" + tag_name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}