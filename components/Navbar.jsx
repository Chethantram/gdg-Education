"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { LogIn, MailIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState('Home');
  return (
    <nav className="flex justify-between items-center p-4 mx-10  max-h-[200px] bg-fixed   bg-background/60 border-b">
      <div className="flex items-center  gap-20">
        <h1 className="font-bold text-2xl">OpenLearnX</h1>
        <ul className="flex items-center gap-10 text-md text-foreground cursor-pointer">
          <Link href={'/'} onClick={()=>setActive('Home')} className={active ==='Home'?"active":""}>Home</Link>
          <Link href={'/courses'} onClick={()=>setActive('Courses')} className={active ==='Courses'?"active":""}>Courses</Link>
          <Link href={'/quiz'} onClick={()=>setActive('Quiz')} className={active ==='Quiz'?"active":""}>Quiz</Link>
        </ul>
      </div>
      <div className="space-x-4">
        <Button variant="secondary">
          <MailIcon />
          Register
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-800">
          <LogIn />
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
