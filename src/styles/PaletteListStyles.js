const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    color: "#fff",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#fff",
      border: "1px solid #fff",
      padding: "7px",
      borderRadius: "5px",
      textAlign: "center",
    },
    "& a:hover": {
      color: "black",
      border: "1px solid black",
      backgroundColor: "#fff",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

export default styles;
