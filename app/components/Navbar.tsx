"use client";

//import { label } from "three/tsl";
import { Menu, X } from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {useState, useEffect, useRef} from "react";

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        }
    
        function handleEscape(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);


    return (
        <nav className="fixed flex top-0 left-0 w-full items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-md z-50">
            <a href="#hero" className="font-bold text-lg">Esinam Amegah</a>
            <ul className="hidden md:flex gap-6 list-none">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button className="md:hidden"onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={25}/> : <Menu size={25}/>}
            </button>

            <AnimatePresence>
            { isOpen && (
                <motion.ul
                ref={menuRef as React.RefObject<HTMLUListElement>}
                initial = {{opacity:0, y: -20}}
                animate = {{ opacity: 1, y: 0}}
                exit={{ opacity:0, y: -20}}
                transition={{ duration: 0.4}}


                className="md:hidden absolute top-full left-0 w-full flex flex-col items-end gap-6 py-6 px-8 bg-black/90 backdrop-blur-md list-none">
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </motion.ul>
            )

            }
            </AnimatePresence>
        </nav>
    );
}