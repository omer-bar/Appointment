export default {
  ContactSection: {
    background: "#f6f9fe",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
    zIndex: "0",
  },
  ContactUsHeading: {
    position: "absolute",
    content: "",
    height: "2px",
    width: "70px",
    backgroundColor: "#0362e2",
    bottom: "100px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  socialIcon: {
    display: "inline-block",
    height: "45px",
    width: "45px",
    lineHeight: "45px",
    fontSize: "18px",
    textAlign: "center",
    backgroundColor: "#0362e2",
    color: "#fff",
    borderRadius: "4px",
    marginRight: "1rem !important",
  },
  contactUsList: {
    listStyle: "none",
    paddingLeft: "0",
  },
  media: {
    display: "flex",
    alignItems: "flex-start",
    textDecoration: "none",
    outline: "none",
    boxShadow: "none",
    color: "#444",
    transition: "all 0.3s ease 0s",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#0362e2 !important",
      textDecoration: "none !important",
    },
  },
};
