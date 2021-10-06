import React, { useState } from "react"

import Route from "./components/Route"
import Home from "./Home"
import About from "./About"
import Navbar from "./components/NAvbar"
import Hero from "./components/Hero"

export default () => {
  return <div className="container">
    <Route path="/">
        <Hero></Hero>
        <Navbar></Navbar>
        <Home />
      </Route>
      <Route path="/About">
        <About></About>
      </Route>
    </div>
}
