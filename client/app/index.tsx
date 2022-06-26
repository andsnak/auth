import React from "react";
import { Container, CssBaseline } from "@mui/material";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
  return (
    <CssBaseline>
      <Container component="main" maxWidth="xs">
        <SignUp onCreateUser={() => {}} />
        <SignIn />
      </Container>
    </CssBaseline>
  );
};

export default App;
