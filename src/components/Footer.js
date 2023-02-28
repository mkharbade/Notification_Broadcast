import { Container, Toolbar } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <Toolbar
        style={{
          boxShadow: "0px -1px 1px .5px #F2F3F6",
          height: "10px",
          position: "sticky",
          color: "#00224B",
          marginTop: "auto",
          fontSize: "13px",
        }}
      >
        <Container>Powered by IIHT &copy;2023 All Rights Reserved</Container>
      </Toolbar>
    </div>
  );
}

export default Footer;
