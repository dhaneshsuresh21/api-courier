import { useState, useContext } from "react";
import React from 'react';

import ResponseData from "./ResponseData";
import ResponseHeaders from "./ResponseHeaders";
import ResponseHeading from "../components/ResponseHeading";
import ResponseInfo from "./ResponseInfo";

import { ResponseDivContext } from "../contexts/ResponseDivContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Response = () => {

    const {theme , setTheme} = useContext(ThemeContext);

    const [responseDivButton, setResponseDivButton] = useState("responseData");

    const { responseDiv, setResponseDiv } = useContext(ResponseDivContext);


    const updateResponseDataDiv = () => {
        setResponseDivButton("responseData");
    }

    const updateResponseHeadersDiv = () => {
        setResponseDivButton("responseHeaders");
    }

    // <button className={`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer query-params-button`} type="submit" onClick={updateQueryParamsDiv}>Query Params</button>

    return (
        <>
            {
                responseDiv && (
                    <div className={`h-full bg-${theme === "Light 💡" ? "white" : "black"}`}>
                        <ResponseHeading />
                        <ResponseInfo />

                        <div className="flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40 input-type-heading">
                            <button className={`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer query-params-button`} type="submit" onClick={updateResponseDataDiv}>response-data</button>
                            <button className={`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer request-headers-button`} type="submit" onClick={updateResponseHeadersDiv}>response-headers</button>
                        </div>

                        {
                            responseDivButton === "responseData" ? <ResponseData /> : <ResponseHeaders />
                        }
                    </div>

                )

            }


        </>
    )

}

export default Response;