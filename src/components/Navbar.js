import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Navbar.scss";
import { Badge, IconButton, Tabs } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      style={{
        background: "#fff",
        color: "#00224B",
        boxShadow: "0px 1px 1px .5px #F2F3F6",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a">
            <Link
              to="/"
              style={{
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "#00224B",
                textDecoration: "none",
              }}
            >
              Techademy
            </Link>
          </Typography>

          <Tabs
            style={{
              marginLeft: "auto",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              fontSize: "12px",
              color: "#00224B",
            }}
          >
            <NavLink
              to="/dashboard"
              style={{
                marginRight: "1rem",
                fontSize: "15px",
                color: "#00224B",
                textDecoration: "none",
                letterSpacing: "1px",
              }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/manage"
              style={{
                marginRight: "1rem",
                fontSize: "15px",
                color: "#00224B",
                textDecoration: "none",
                letterSpacing: "1px",
              }}
            >
              Manage
            </NavLink>
            <NavLink
              to="/schedule"
              style={{
                marginRight: "1rem",
                fontSize: "15px",
                color: "#00224B",
                textDecoration: "none",
                letterSpacing: "1px",
              }}
            >
              Schedule
            </NavLink>
          </Tabs>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge variant="dot" color="error" style={{ marginRight: "2px" }}>
              <Link
                to="/message"
                style={{
                  marginLeft: "auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  fontSize: "12px",
                  color: "#00224B",
                }}
              >
                <MailOutlineIcon style={{ fontSize: "20px" }} />
              </Link>
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge variant="dot" color="error" style={{ marginRight: "2px" }}>
              <Link
                to="/notification"
                style={{
                  marginLeft: "auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  fontSize: "12px",
                  color: "#00224B",
                }}
              >
                <NotificationsNoneIcon style={{ fontSize: "20px" }} />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
