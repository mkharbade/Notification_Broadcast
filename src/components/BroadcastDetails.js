import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Attachment from "@mui/icons-material/Attachment";
import DeleteIcon from "@mui/icons-material/Delete";

// Delete
const Removefunction = (id) => {
  fetch("http://localhost:8000/employee/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      alert("Removed Successfully!");
      window.location.reload(false);
    })
    .catch((errors) => {
      console.log(errors.message);
    });
};
// Delete

const columns = [
  // { field: "id", headerName: "ID", width: 50 },
  {
    field: "broadcast",
    headerName: "Broadcasts ",
    width: 180,
    sortable: false,
    editable: false,
  },
  {
    field: "broadcastedto",
    headerName: "Broadcasted to",
    width: 180,
    sortable: false,
    editable: false,
  },
  // {
  //   field: "notificationName",
  //   headerName: "Notification Name",
  //   width: 200,
  //   sortable: false,
  //   editable: false,
  // },
  { field: "date", headerName: "Date", width: 150, editable: true },
  {
    field: "time",
    headerName: "Time",
    sortable: false,
    width: 150,
  },
  {
    field: "attachment",
    headerName: "Attachment",
    width: 150,
    editable: true,
    sortable: false,
    renderCell: (params) => (
      <div>
        <IconButton>
          <Attachment />
        </IconButton>
      </div>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    editable: true,
    sortable: false,
    renderCell: (params) => (
      <div>
        <IconButton>
          <DeleteIcon
            onClick={() => {
              Removefunction(params.id);
            }}
          />
        </IconButton>
      </div>
    ),
  },
];

function BroadcastDetails() {
  const [pageSize, setPageSize] = React.useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        res.json().then((jsonData) => {
          setRows(jsonData);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          pagination
        />
      </Box>
    </>
  );
}

export default BroadcastDetails;
