import { useState , useContext } from 'react'
import React from 'react';

import { ResponseDataContext } from '../contexts/ResponseDataContext';

import { ThemeContext } from '../contexts/ThemeContext';

const ResponseData = () => {

    const {theme , setTheme } = useContext(ThemeContext);

    const { responseData , setResponseData} = useContext(ResponseDataContext);

    const json = {
        name : "b",
        id : 2
    }

    const jsonResponse = [
        {
            name : {
                nick : {
                    diff : "diff",
                    id : 0
                },
                player : "player"
            },
            id : 1
        },
        {
            name : "b",
            id : 2
        },
        {
            name : "a",
            id : 1
        },
        {
            name : "b",
            id : 2
        },
        {
            name : "a",
            id : 1
        },
        {
            name : "b",
            id : 2
        },
        {
            name : "a",
            id : 1
        },
        {
            name : "b",
            id : 2
        },
        {
            name : "a",
            id : 1
        },
        {
            name : "b",
            id : 2
        }
    ]

        // flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40
        // {`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} bg-${theme === "Light 💡" ? "white" : "black"} mx-10 text-xs md:text-base h-96 md:mx-40 mt-8 border border-solid border-2 overflow-scroll json-container`}

    return (
        <div className={`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} bg-${theme === "Light 💡" ? "white" : "black"} mx-10 text-xs md:text-base h-96 md:mx-40 mt-8 border border-solid border-2 overflow-scroll json-container`}>
                <pre className="mx-5 md:mx-10 mt-5 ">{JSON.stringify(responseData, null, 2)}</pre>

            {/* <ReactJson src={jsonResponse} name="data" theme="bright:inverted" indentWidth={4} enableClipboard={true}/> */}

        </div>
    )
}

export default ResponseData;


