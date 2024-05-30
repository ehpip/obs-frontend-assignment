import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import React, { useState } from "react";

const AddUser = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add User
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <div className="grid grid-cols-2 gap-3 w-full">
            <h2 className="font-semibold text-xl col-span-2">Add User</h2>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Username" variant="outlined" fullWidth />
            <TextField label="Phone" variant="outlined" fullWidth />
            <TextField label="Website" variant="outlined" fullWidth />
            <TextField label="Company" variant="outlined" fullWidth />
            <TextField label="Address" variant="outlined" fullWidth />
            <TextField label="City" variant="outlined" fullWidth />
            <Button
              variant="contained"
              onClick={handleClose}
              className="col-span-2"
            >
              Add User
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
