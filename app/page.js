
"use client"

import { use } from "react";
import Navbar from "./componentes/navbar";
import Header from "./componentes/header";
import Services from "./componentes/services";
import AboutMe from "./componentes/aboutme";
import Contact from "./componentes/contact";
import Base from "./componentes/base";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Services />
    <AboutMe />
    <Contact />
    <Base />
    </>
  );
}
