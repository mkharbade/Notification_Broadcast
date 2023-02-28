import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormGroup,
  InputBase,
  TextField,
  Toolbar,
} from "@mui/material";
import styled from "@emotion/styled";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./Broadcast.scss";
import SearchIcon from "@mui/icons-material/Search";
import BroadcastDetails from "./BroadcastDetails";
import { FileUploader } from "react-drag-drop-files";
import { Form, useNavigate } from "react-router-dom";

function Broadcast() {
  // Modal Form
  const broadcastdetail = useContext(BroadcastDetails);

  const [maxId, setmaxId] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        res.json().then((jsonData) => {
          setmaxId(Math.max(...jsonData.map((m) => m.id)));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const initialvalues = {
    id: "",
    description: "",
    broadcast: "",
    broadcastedto: "",
    notificationName: "",
    date: "",
    time: "",
  };
  const [formValues, setFormValues] = useState(initialvalues);

  const getData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(name, value);
  };

  function getDate(dateTime) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      dateTime.getDate() +
      " " +
      monthNames[dateTime.getMonth()] +
      " " +
      dateTime.getFullYear()
    );
  }

  const handleBroadcastCreate = (e) => {
    e.preventDefault(true);
    const currentDateTime = new Date();

    formValues.id = maxId + 1;
    formValues.date = getDate(currentDateTime);
    formValues.time = getTime(currentDateTime);
    formValues.broadcast = formValues.notificationName;

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formValues),
    })
      .then((res) => {
        alert("Saved Successfully!");
        // console.log(formValues);
        navigate("/notification");
      })
      .catch((errors) => {
        console.log(errors.message);
      });

    setmaxId(maxId + 1);
    setOpen(false);
  };

  function getTime(dateTime) {
    return dateTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  }

  //Modal Form

  const StyledTypo = styled(Typography)({
    fontFamily: "monospace",
    textalign: "center",
    letterSpacing: ".0rem",
    color: "#00224B",
    opacity: 3,
    fontSize: "13px",
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  });

  //   *****************

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  //   *****************

  const Search = styled("div")(() => ({
    backgroundColor: "white",
    border: "1px solid black",
    display: "flex",
    justifyContent: "end",
    padding: "0 10px",
    width: "80%",
    fontSize: "8px",
    borderRadius: "2px",
  }));
  //   *****************

  // *******  Modal *********

  const [open, setOpen] = useState(false);

  //Handler functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // *******  Modal *********

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "none",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  //   *****************
  const fileTypes = ["JPG", "PNG", "GIF", "DOCS", "PDF"];
  const [file, setFile] = useState(null);
  const handleChangefile = (file) => {
    setFile(file);
  };

  //   *****************

  return (
    <div>
      <StyledToolbar>
        <span style={{ fontSize: "16px", fontWeight: "600", color: "#00224B" }}>
          Past Broadcasts
        </span>
        <StyledTypo sx={{ direction: "horizontal" }}>
          <span>
            <Search
              style={{
                direction: "horizontal",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #00224B33",
                width: "180px",
              }}
            >
              <InputBase placeholder="Search..." style={{ fontSize: "14px" }} />
              <SearchIcon style={{ color: "#68747B", fontSize: "16px" }} />
            </Search>
          </span>
          <span
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              gap: "10px",
            }}
          >
            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleOpen()}
                style={{ height: "30px" }}
              >
                Create Broadcast
              </Button>
              <Modal
                open={open}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ color: "#00224B", direction: "horizontal" }}
                  >
                    Create Broadcast
                    <span style={{ float: "right" }} onClick={handleClose}>
                      <HighlightOffIcon />
                    </span>
                  </Typography>

                  <hr />

                  <FormGroup>
                    <FormControl>
                      <TextField
                        // required
                        id="notificationName"
                        label="Notification Name"
                        defaultValue=""
                        size="small"
                        variant="outlined"
                        type="text"
                        name="notificationName"
                        value={formValues.notificationName}
                        onChange={getData}
                        style={{
                          width: "95%",
                          padding: "10px",
                          border: "none",
                          outline: "none",
                          height: "auto",
                        }}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        // required
                        id="description"
                        label="Description"
                        name="description"
                        value={formValues.description}
                        onChange={getData}
                        defaultValue=""
                        type="text"
                        variant="outlined"
                        style={{
                          width: "95%",
                          padding: "10px",
                          border: "none",
                          outline: "none",
                          height: "auto",
                        }}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        required
                        id="sendinvitesto"
                        label="Send Invites To"
                        name="broadcastedto"
                        value={formValues.broadcastedto}
                        defaultValue=""
                        size="small"
                        type="email"
                        variant="outlined"
                        onChange={getData}
                        style={{
                          width: "95%",
                          padding: "10px",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FileUploader
                        handleChange={handleChangefile}
                        name="file"
                        types={fileTypes}
                        classes="drag_drop"
                      />
                    </FormControl>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
                    <FormControl>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "1rem",
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            color: "#00224B",
                            backgroundColor: "#CBD2DC",
                            marginRight: "10px",
                          }}
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>

                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleBroadcastCreate}
                        >
                          Create
                        </Button>
                      </div>
                    </FormControl>
                  </FormGroup>
                </Box>
              </Modal>
              <modal />
            </div>
          </span>
        </StyledTypo>
      </StyledToolbar>

      <Box style={{ marginBottom: "1rem" }}>
        <BroadcastDetails />
      </Box>
    </div>
  );
}

export default Broadcast;
