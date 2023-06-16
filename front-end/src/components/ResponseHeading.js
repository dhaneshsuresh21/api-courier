import React from 'react';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ResponseHeading = () => {

    const {theme , setTheme} = useContext(ThemeContext);
    // flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40
    // text-${theme === "Light 💡" ? "black" : "white"}
    // {`text-${theme === "Light 💡" ? "black" : "white"} text-xl font-serif md:text-4xl `}
    return (
        <div className="mx-10 font-medium mt-8 md:mx-40">
            <h1 className={`text-${theme === "Light 💡" ? "black" : "white"} text-xl font-serif md:text-4xl `}>Response:</h1>
        </div>
    )

}

export default ResponseHeading;