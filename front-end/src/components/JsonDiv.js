import { useState , useContext } from "react";
import React from 'react';

import { JsonContext } from "../contexts/JsonContext";
import { ThemeContext } from "../contexts/ThemeContext";

const JsonDiv = () => {

    const {theme , setTheme} = useContext(ThemeContext)

    const { json , setJson} = useContext(JsonContext);

    const updateJson = (e) => {
        setJson(e.target.value);
    }


    // {`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} bg-${theme === "Light 💡" ? "black" : "white"} w-full h-full border border-solid border-2 resize-none overflow-scroll`}
    return (
        <div className="mt-8 mx-10 md:mx-40 h-40 md:h-80 ">
            <textarea value={json} className={`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} bg-${theme === "Light 💡" ? "white" : "black"} text-xs md:text-2xl w-full h-full border border-solid border-2 resize-none overflow-scroll`} onChange={updateJson}></textarea>
        </div>
    )
}

export default JsonDiv;