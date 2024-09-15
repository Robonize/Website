"use client";

import logo from "../assets/logo v0.21.png"
import Image from "next/image";
import SideBarElement from "./sideBarElement"
import { useState } from "react"

const SideBar = () => {

    return (
        <main>
        <aside className="h-screen w-48 fixed top-0 left-0 justify-center">
            <div className="bg-[#222222] h-full flex flex-col items-center">

                {/*logo e nome*/}
                
                <div className="flex flex-row justify-center items-center m-4 mb-14 h-40 w-40 ">
                    <a href="/">
                                <Image src={logo} alt="RobonizeIcon" className=""/>
                    </a>
                </div>
                

                {/*Elementos*/}
                <ul className="w-3/4">
                    

                </ul>
            </div>

        </aside>
        </main>
    );
  }

export default SideBar;