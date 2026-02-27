import Link from "next/link";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const card_container_hover_border = c5;
const info_container_link = c4,
  info_container_link_hover = c3,
  info_container_link_active = c5,
  date = c3,
  description = c1 + "cc";
const tag_link = c4,
  tag_link_border = c5,
  tag_link_hover = c2,
  tag_link_hover_background = c3,
  tag_link_hover_border = c2;
const tag_link_active_background = c5;

export default function CardLayout({ postsMetaData }) {
  return (
    <div className="card-layout">
      {postsMetaData.map((metadata, index) => {
        //const imgSrc = require(`../images/${metadata.metadata.imgName}?resize`);
        //const imgSrcWebp = require(`../images/${metadata.metadata.imgName}?resize&format=webp`);
        // const imgType = "image/" + metadata.metadata.imgName.split(".").pop();

        return (
          <div className="card-container" key={metadata.metadata.title}>
            <div>
              <div className="img-container">
                {/*
								<picture>
			            <source srcSet={imgSrcWebp} type = "image/webp" />
			            <img src={imgSrc} alt = {metadata.metadata.title} />
			          </picture>
			          */}
                <img
                  src={"/images/" + metadata.metadata.imgName}
                  alt={metadata.metadata.title}
                />
              </div>

              <div className="info-container">
                <div className="description-container">
                  <p className="date">{metadata.metadata.date}</p>
                  <Link
                    href={`/blog/${metadata.metadata.id}`}
                    key={metadata.metadata.title}
                    legacyBehavior
                  >
                    <a className="info-container-link">
                      {metadata.metadata.title}
                    </a>
                  </Link>
                  <p className="description">{metadata.metadata.description}</p>
                </div>

                <div className="tags-container">
                  <div className="tags-container-tag">
                    {metadata.metadata.tags.map((tag_name, index) => {
                      return (
                        <Link href={`/tags/${tag_name}`} key={tag_name} legacyBehavior>
                          <a className="tag-link">{"#" + tag_name}</a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .card-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          margin: 1vh 11vw 1vh 11vw;
        }

        .card-container {
          display: flex;
          flex: 0 1 auto;
          flex-direction: column;
          flex-wrap: wrap;
          box-sizing: border-box;
          margin: 1vh 0.87vw 1vh 0.87vw;
          border-bottom: 3px solid transparent;
        }

        .card-container:hover {
          border-bottom: 3px solid ${card_container_hover_border};
          transform: scale(0.99);
        }

        .img-container {
          width: 100%;
          max-width: 100%;
        }

        img {
          width: 100%;
          max-width: 100%;
          aspect-ratio: 2/1;
          object-fit: cover;
          border-radius: 5px;
        }

        .info-container {
          display: flex;
          flex: 100%;
          max-width: 100%;
          flex-direction: column;
          flex-wrap: wrap;
          overflow-wrap: break-word;
        }

        .info-container-link {
          font-family: "Maven Pro", sans-serif;
          font-weight: bold;
          font-size: calc(20px + (26 - 20) * ((100vw - 300px) / (1600 - 300)));
          text-decoration: none;
          overflow-wrap: break-word;
          color: ${info_container_link};
        }

        .info-container-link:hover {
          color: ${info_container_link_hover};
        }

        .info-container-link:active {
          color: ${info_container_link_active};
        }

        .date {
          font-family: "Source Sans Pro", sans-serif;
          font-size: calc(15px + (18 - 15) * ((100vw - 300px) / (1600 - 300)));
          font-weight: 600;
          margin: 0.5vh 0 0.5vh 0;
          color: ${date};
          max-width: 100%;
        }

        .description-container {
          display: flex;
          flex-direction: column;
          max-width: 100%;
        }

        .description {
          font-family: "Source Sans Pro", sans-serif;
          font-size: calc(15px + (18 - 15) * ((100vw - 300px) / (1600 - 300)));
          color: ${description};
          max-width: 100%;
        }

        .tags-container {
          display: flex;
          flex: 100%;
          max-width: 100%;
          flex-direction: column-reverse;
          margin: 2vh 0 2vh 0;
        }

        .tags-container-tag {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .tag-link {
          font-family: "Share Tech Mono", monospace;
          font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
          color: ${tag_link};
          text-decoration: none;
          margin-right: 1em;
          border-bottom: 1px dashed ${tag_link_border};
        }

        .tag-link:hover {
          background: ${tag_link_hover_background};
          color: ${tag_link_hover};
          border-bottom: 1px dashed ${tag_link_hover_border};
        }

        .tag-link:active {
          background: ${tag_link_active_background};
        }

        @media screen and (max-width: 1800px) {
          .card-layout {
            grid-template-columns: repeat(3, 1fr);
            margin: 1vh 7vw 1vh 7vw;
          }
        }

        @media screen and (max-width: 1280px) {
          .card-layout {
            grid-template-columns: repeat(2, 1fr);
            margin: 1vh 5vw 1vh 5vw;
          }

          .card-container {
            margin: 1vh 1vw 1vh 1vw;
          }
        }

        @media screen and (max-width: 560px) {
          .card-layout {
            grid-template-columns: repeat(1, 1fr);
            margin: 1vh 5vw 1vh 5vw;
          }

          .card-container {
            margin: 1vh 0 1vh 0;
            border-bottom: 3px solid ${card_container_hover_border};
          }
        }
      `}</style>
    </div>
  );
}
