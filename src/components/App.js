import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New York" color="firebrick"/>
      <About bio={ user.bio } Links= { user.links }/>
      <Links github={ user.links.github } linkedin= { user.links.linkedin }/>
    </div>
  );
}

export default App;
