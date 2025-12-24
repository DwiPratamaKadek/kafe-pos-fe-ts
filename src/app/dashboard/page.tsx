"use client"

import Sidebar from "@/component/organisms/Sidebar";
import { useState } from "react";

export default function Dashboard () {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return (
        <section>
            <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
            <div className={`flex-1 p-6 transition-all duration-300 ease-in-out ${isOpen ? "ml-32 md:ml-64" : "ml-10 md:ml-20"}`}>
                <h3>Dashboard Page</h3>
            </div>
        </section>
    )
}