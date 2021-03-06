import { container, title } from "assets/jss/material-kit-react.jsx";

const recordPageStyle = {
  container: {
    zIndex: "12",
    color: "#3C4858",
    padding: "50px",
    ...container
  },
  small : {
      maxHeight: "300px"
  },
  recordimage : {
    width: "100%"
},
metalabel : {
    color: "#3C4858"
},
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#3C4858",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default recordPageStyle;
