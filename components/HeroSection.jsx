import React from "react";
import { Button } from "./ui/button";
import { Merge, NotebookText } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="mx-auto mt-40 black-background ">
      <h1 className="text-5xl font-bold text-center text-blue-50">
        Empowering Quality Education
      </h1>
      <p className="text-md text-center font-medium mt-20 ">
        Bridging the Digital Divide <br /> Innovating for Inclusive and
        Equitable Education in the Digital Age.
      </p>
      <div className="flex justify-center items-center gap-5 mt-8">
        <Button className="bg-blue-600 text-white hover:bg-blue-800"><Merge/>Join Us Now</Button>
        <Button variant="secondary"><NotebookText/>Get Started</Button>
      </div>
    </header>
  );
};

export default HeroSection;
