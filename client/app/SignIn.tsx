import { Box, Button, TextField } from "@mui/material";
import React, { FormEvent } from "react";

const SignIn = () => {
  return (
    <Box
      component="form"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        console.log("submnit");
      }}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default SignIn;
