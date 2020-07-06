import React from "react";
import { Heading, Container } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <div>
      <Heading>Gatsby Theme</Heading>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
