import { Component } from "react";

import { SiGithub, SiLinkedin, SiMedium, SiKaggle } from "react-icons/si";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const copy_right = c2;

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github_current_color: this.props.normal_color,
      linkedin_current_color: this.props.normal_color,
      medium_current_color: this.props.normal_color,
      kaggle_current_color: this.props.normal_color,
    };
    this.icon_font_size = this.props.icon_size;
    this.normal_color = this.props.normal_color;
    this.github_color = "#24292e";
    this.linkedin_color = "#0e76a8";
    this.medium_color = "black";
    this.kaggle_color = "#20beff";
  }

  render() {
    return (
      <div>
        {this.props.icon_name == "github" ? (
          <SiGithub
            style={{
              color: this.state.github_current_color,
              fontSize: this.icon_font_size,
            }}
            onMouseEnter={() => {
              this.setState(() => ({
                github_current_color: this.github_color,
              }));
            }}
            onMouseLeave={() => {
              this.setState(() => ({
                github_current_color: this.normal_color,
              }));
            }}
          />
        ) : this.props.icon_name == "linkedin" ? (
          <SiLinkedin
            style={{
              color: this.state.linkedin_current_color,
              fontSize: this.icon_font_size,
            }}
            onMouseEnter={() => {
              this.setState(() => ({
                linkedin_current_color: this.linkedin_color,
              }));
            }}
            onMouseLeave={() => {
              this.setState(() => ({
                linkedin_current_color: this.normal_color,
              }));
            }}
          />
        ) : this.props.icon_name == "medium" ? (
          <SiMedium
            style={{
              color: this.state.medium_current_color,
              fontSize: this.icon_font_size,
            }}
            onMouseEnter={() => {
              this.setState(() => ({
                medium_current_color: this.medium_color,
              }));
            }}
            onMouseLeave={() => {
              this.setState(() => ({
                medium_current_color: this.normal_color,
              }));
            }}
          />
        ) : this.props.icon_name == "kaggle" ? (
          <SiKaggle
            style={{
              color: this.state.kaggle_current_color,
              fontSize: this.icon_font_size,
            }}
            onMouseEnter={() => {
              this.setState(() => ({
                kaggle_current_color: this.kaggle_color,
              }));
            }}
            onMouseLeave={() => {
              this.setState(() => ({
                kaggle_current_color: this.normal_color,
              }));
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-container-links">
        <div className="footer-links">
          {props.github == true ? (
            <div className="link-item">
              <a
                href="https://github.com/santhalakshminarayana"
                className="link"
                rel="noreferrer"
                target=" _blank"
              >
                <Icon
                  icon_name="github"
                  normal_color={props.normal_color}
                  icon_size={props.icon_size}
                />
              </a>
            </div>
          ) : null}

          {props.linkedin == true ? (
            <div className="link-item">
              <a
                href="https://www.linkedin.com/in/santhalakshminarayana/"
                className="link"
                rel="noreferrer"
                target="_blank"
              >
                <Icon
                  icon_name="linkedin"
                  normal_color={props.normal_color}
                  icon_size={props.icon_size}
                />
              </a>
            </div>
          ) : null}

          {props.medium == true ? (
            <div className="link-item">
              <a
                href="https://medium.com/@santhalakshminarayana/"
                className="link"
                rel="noreferrer"
                target="_blank"
              >
                <Icon
                  icon_name="medium"
                  normal_color={props.normal_color}
                  icon_size={props.icon_size}
                />
              </a>
            </div>
          ) : null}

          {props.kaggle == true ? (
            <div className="link-item">
              <a
                href="https://www.kaggle.com/santhalnr/"
                className="link"
                rel="noreferrer"
                target="_blank"
              >
                <Icon
                  icon_name="kaggle"
                  normal_color={props.normal_color}
                  icon_size={props.icon_size}
                />
              </a>
            </div>
          ) : null}
        </div>
      </div>

      {props.need_copy_right == true ? (
        <div className="copy-right-container">
          <p className="copy-right-text">Santha Lakshmi Narayana &#169; 2025</p>
        </div>
      ) : null}

      <style jsx>{`
		  .footer-container {
				display: flex;
				flex-direction: column;
				background: ${props.bg_color};
				padding: ${props.vertical_padding} ${props.horizontal_padding} ${props.vertical_padding} ${props.horizontal_padding};
			  }

			 .footer-container-links {
				display: flex;
				flex-direction: row;
				justify-content: center;
			  }

			  .footer-links {
				display: flex;
				justify-content: center;
				align-items: center;
			  }

			  .link-item {
				margin: 0 ${props.horizontal_margin} 0 ${props.horizontal_margin};
			  }

			  .link {
				text-decoration: none;
				cursor: pointer:
				background-color: yellow;
			  }

			  .link:hover {
				color: black;
			  }

			  .copy-right-container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				margin-top: 10px;
			  }

			  .copy-right-text {
				font-family: 'Maven Pro', sans-serif;
				font-size: calc(0.75rem + 0.1vw);
				color: ${copy_right};
			  }

		  `}</style>
    </div>
  );
}
