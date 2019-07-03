import React from "react";

import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
function Header() {
  return (
    <header>
      <h1>hello world</h1>
      <Jumbotron fluid>
        <Container>
          <h1>Google books</h1>
          <p>Search for books of Interest and save them.</p>
        </Container>
      </Jumbotron>
    </header>
  );
}

export default Header;
