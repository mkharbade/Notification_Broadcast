import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Tab, Tabs, Typography } from "@mui/material";
import Broadcast from "./Broadcast";
import NotiDetail from "./NotiDetail";

function Notification() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container>
        <Typography
          style={{ marginTop: "20px", color: "#68747B", fontSize: "13px" }}
        >
          Notification and Broadcast
        </Typography>
        <Typography
          style={{ marginTop: "5px", color: "#00224B", fontSize: "25px" }}
        >
          Notification and Broadcast
        </Typography>
        <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="error"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="Notification" index={0} />
            <Tab label="Broadcast" index={1} />
          </Tabs>
        </Box>
        {value === 0 && <NotiDetail />}
        {value === 1 && <Broadcast />}
      </Container>
    </div>
  );
}

export default Notification;
