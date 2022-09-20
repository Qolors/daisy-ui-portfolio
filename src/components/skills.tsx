import { useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";


const Skills: React.FC = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5,
                type: 'sping',
                
            }
        }
    }
    const item = {
        hidden: { scale: 0 },
        show: { scale: 1.0},
        
    }

    const revItem = {
        hidden: { scale: 0 },
        show: { scale: 1.0},
        
    }

    return (
        <motion.div className=" flex flex-col bg-base-100 pt-24 justify-center place-items-center">
            <h2 className="text-5xl font-bold">My Tools</h2>
            <p className=" text-lg w-full pt-6 pb-2 text-left indent-2 px-10">My current employer work has me mostly working in the Microsoft Environment.</p>
            <p className=" text-lg w-full text-left pb-6 indent-2 px-10">Almost all of my side work is done outside of that. My <span className=" text-red-500">favorite</span> framework
                has to be Nextjs. It gives me great speed in prototyping combined with Tailwindcss. </p>
            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 pb-12">
                <motion.li variants={item} className="btn btn-ghost text-xl text-right rounded-none">Git</motion.li>
                <motion.li variants={revItem} className="btn btn-ghost text-xl rounded-none">JavaScript</motion.li>
                <motion.li variants={item} className="btn btn-ghost text-xl rounded-none">HTML & CSS</motion.li>
                <motion.li variants={revItem} className="btn btn-ghost text-xl rounded-none">React</motion.li>
                <motion.li variants={item} className="btn btn-ghost text-xl rounded-none">C#</motion.li>
                <motion.li variants={revItem} className="btn btn-ghost text-xl rounded-none">.NET Core</motion.li>
                <motion.li variants={item} className="btn btn-ghost text-xl rounded-none">SQL</motion.li>
                <motion.li variants={revItem} className="btn btn-ghost text-xl rounded-none">Nodejs</motion.li>
                <motion.li variants={item} className="btn btn-ghost text-xl rounded-none text-red-500">Nextjs</motion.li>
            </motion.ul>
            
        
        </motion.div>
    )


}


export default Skills;