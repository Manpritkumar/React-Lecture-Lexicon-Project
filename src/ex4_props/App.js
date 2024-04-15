import React from "react";
import Header, { Nav } from "./Header";

const App = () => {
  const headerText = "My App Ui";
  const logo = "logo.jpg";
  const links = ["Login", "Sign up", "About"];

  return (
    <div>
      <Nav logo={logo} links={links} />

      <Header text={headerText} bgColor="info" />
      <Header />
      <Header text={"App UI 2"} bgColor="danger" />
      <Nav logo={logo} links={["login", "Register", "Search"]} />
    </div>
  );
};

export default App;
