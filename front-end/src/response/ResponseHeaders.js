import { useState , useContext } from 'react';
import React from 'react';

import { ResponseHeadersContext } from '../contexts/ResponseHeadersContext';

import { ThemeContext } from '../contexts/ThemeContext';

const ResponseHeaders = () => {

    const {theme , setTheme } = useContext(ThemeContext);

    const {responseHeaders , setResponseHeaders} = useContext(ResponseHeadersContext);

    return (
        <div className={`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} bg-${theme === "Light 💡" ? "white" : "black"} mx-10 text-xs md:text-base h-96 md:mx-40 mt-8 border border-solid border-2 overflow-scroll json-container`}>
                <pre className="mx-5  md:mx-10 mt-5 ">{JSON.stringify(responseHeaders, null, 2)}</pre>

            {/* <ReactJson src={jsonResponse} name="data" theme="bright:inverted" indentWidth={4} enableClipboard={true}/> */}

        </div>
    )
}

export default ResponseHeaders;


