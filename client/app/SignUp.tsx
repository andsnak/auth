import React, { FC, useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

interface Props {
  onCreateUser: VoidFunction;
}

const SignUp: FC<Props> = ({ onCreateUser }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handleCreateUser = () => {
    onCreateUser();
    toggle();
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={toggle}>
          <PersonAdd />
        </IconButton>
      </Box>
      <Dialog open={open} onClose={toggle}>
        <DialogTitle>title</DialogTitle>
        <DialogContent>Content</DialogContent>
        <DialogActions>
          <Button onClick={toggle}>Cancel</Button>
          <Button onClick={handleCreateUser}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SignUp;
