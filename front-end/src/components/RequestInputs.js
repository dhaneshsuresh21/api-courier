import { useState } from "react";
import QueryParams from "./QueryParams";
import RequestHeaders from "./RequestHeaders";
import JsonDiv from "./JsonDiv";

import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";



const RequestInputs = () => {

    const {theme , setTheme} = useContext(ThemeContext);

    const [queryParamsDiv, setQueryParamsDiv] = useState(true);
    const [requestHeadersDiv, setRequestHeadersDiv] = useState(false);
    const [jsonDiv, setJSONDiv] = useState(false);

    const updateQueryParamsDiv = (event) => {
        setQueryParamsDiv(true);
        setRequestHeadersDiv(false);
        setJSONDiv(false);
    }

    const updaterequestHeadersDiv = (event) => {
        setQueryParamsDiv(false);
        setRequestHeadersDiv(true);
        setJSONDiv(false);
    }

    const updatejsonDiv = (event) => {
        setQueryParamsDiv(false);
        setRequestHeadersDiv(false);
        setJSONDiv(true);
    }

    // {`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer query-params-button`}

    return (
        <>

            <div className="flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40 input-type-heading">
                <button className={`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer query-params-button`} type="submit" onClick={updateQueryParamsDiv}>Query Params</button>
                <button className={`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer request-headers-button`} type="submit" onClick={updaterequestHeadersDiv}>Headers</button>
                <button className={`p-1 text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} border-solid cursor-pointer json-button`} type="submit" onClick={updatejsonDiv}>JSON</button>
            </div>
            {queryParamsDiv && !requestHeadersDiv && !jsonDiv && <QueryParams />}
            {requestHeadersDiv && !queryParamsDiv && !jsonDiv && <RequestHeaders />}
            {jsonDiv && !requestHeadersDiv && !queryParamsDiv && <JsonDiv />}
            {/* {
                queryParamsDiv === true ? <QueryParams /> : null
            }
            {
                requestHeadersDiv === true ? <RequestHeaders /> : null
            }
            {
                jsonDiv === true ? <JsonDiv /> : null
            } */}
        </>
    )
}

export default RequestInputs;