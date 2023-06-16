import { useContext } from "react";
import React from 'react';

import { ThemeContext } from '../contexts/ThemeContext';


const Heading = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {

        const newTheme = theme === "Light 💡" ? "Dark 🌙" : "Light 💡";
        setTheme(newTheme);

    }

    return (

        // bg-${theme === "Light 💡" ? "black" : "white"}
        // {`my-auto mt-8 font-serif border border-2 border-solid border-${theme === "Light 💡" ? "white" : "black"} px-2 rounded-xl self-start bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "white" : "black"} `}
        <div className="mt-0">
            <div className="mx-10 md:mx-40 flex justify-between">
                <h1 className={`text-2xl mt-8 md:text-4xl font-serif self-end  text-${theme === "Light 💡" ? "black" : "white"} font-bold`}>API-Courier</h1>
                <button className={`my-auto mt-8 font-serif border border-4 border-solid border-${theme === "Light 💡" ? "black" : "white"} px-2 rounded-xl self-start text-${theme === "Light 💡" ? "black" : "white"} `} onClick={changeTheme}>
                    {theme === "Light 💡" ? "Dark 🌙" : "Light 💡" }
                </button>
            </div>
        </div>


        // <div className="mt-8 bg-orange-400">
        //     <h1 className="font-serif text-4xl text-center">API Courier</h1>
        //     <button className="">Dark</button>
        // </div>
    )

}

export default Heading;