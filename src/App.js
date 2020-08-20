import React from "react"

import NavBar from "./Navbar"
import FooTer from "./Footer"
import Jumbotron from "./Jumbotron"
import AppSection from "./AppSection"
import CardSection from "./CardSection"

const App = () => {
  return (
  <div>
  <NavBar />
  <Jumbotron />
  <AppSection />
  <CardSection />
  <FooTer />
  </div>
)
  }

export default App