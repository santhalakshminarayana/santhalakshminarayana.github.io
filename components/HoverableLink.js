import { Component } from "react";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const non_hover_color = c1,
  hover_color = c3,
  click_color = c5,
  border = c5;

export default class HoverableLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_color: non_hover_color,
    };
  }

  handle_mouse_enter() {
    this.setState((state) => ({ text_color: hover_color }));
  }

  handle_mouse_leave() {
    this.setState((state) => ({ text_color: non_hover_color }));
  }

  render() {
    return (
      <a
        style={{
          color: this.state.text_color,
          textDecoration: "none",
          cursor: "pointer",
          borderBottom: `1px dashed ${border}`,
          fontSize: "calc(1rem + 0.1vw)",
          fontWeight: "bold",
          overflowWrap: "break-word",
        }}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => this.handle_mouse_enter()}
        onMouseLeave={() => this.handle_mouse_leave()}
        {...this.props.link_props}
      />
    );
  }
}
