import { useState } from "react";
import React from 'react';

import { useContext } from "react";
// import { RequestInputApi } from '../contexts/RequestInputApi';
// import { RequestInputMethod } from '../contexts/RequestInputMethod';

import axios from "axios";

// Reuest url and method
import { RequestInputApi } from '../contexts/RequestInputApi';
import { RequestInputMethod } from '../contexts/RequestInputMethod';

// Request parameters
import { QueryParamsContext } from '../contexts/QueryParamsContext';
import { RequestHeadersContext } from '../contexts/RequestHeadersContext';
import { JsonContext } from '../contexts/JsonContext';

// Response data
import { ResponseDataContext } from '../contexts/ResponseDataContext';
import { ResponseHeadersContext } from '../contexts/ResponseHeadersContext';

import { ResponseTimeContext } from '../contexts/ResponseTimeContext';


import { ResponseContext } from '../contexts/ResponseContext';

import { ResponseDivContext } from "../contexts/ResponseDivContext";

import { ThemeContext } from "../contexts/ThemeContext";


const RequestSection = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const { requestApi, setRequestApi } = useContext(RequestInputApi);
    const { requestMethod, setRequestMethod } = useContext(RequestInputMethod);

    const { queryParamsList, setQueryParamsList } = useContext(QueryParamsContext);
    const { queryParamsList: requestHeadersList, setQueryParamsList: setRequestHeadersList } = useContext(RequestHeadersContext);
    const { json, setJson } = useContext(JsonContext);

    const { responseData, setResponseData } = useContext(ResponseDataContext);
    const { responseHeaders, setResponseHeaders } = useContext(ResponseHeadersContext);

    const { responseTime, setResponseTime } = useContext(ResponseTimeContext);

    const { response, setResponse } = useContext(ResponseContext);

    const { responseDiv, setResponseDiv } = useContext(ResponseDivContext);



    // const [requestMethod , setRequestMethod] = useState("get");
    // const [requestApi , setRequestApi] = useState("");

    const sendApiRequest = async () => {

        setResponseDiv(false);
        const getQueryParams = () => {
            const queryParams = {};

            queryParamsList.map((queryParam) => {
                if (queryParam.key && queryParam.value) {
                    queryParams[queryParam.key] = queryParam.value;
                }
                return;
            })

            return queryParams;

        }

        const getRequestHeaders = () => {
            const requestHeaders = {};

            requestHeadersList.map((requestHeader) => {
                if (requestHeader.key && requestHeader.value) {
                    requestHeaders[requestHeader.key] = requestHeader.value;
                }
                return;
            })

            return requestHeaders;

        }

        const getJson = () => {

            if (/^\s*$/.test(json))
                return {};

            if (json.length > 0) {

                try {
                    const jsonObject = JSON.parse(json);
                    return jsonObject;
                }
                catch (e) {
                    return null;
                }
            }
            return {};
        }

        const url = requestApi;
        const method = requestMethod;

        const queryParams = getQueryParams();
        const requestHeaders = getRequestHeaders();
        const jsonData = getJson();

        if (url === "") {
            const errorResponse = {
                data: null,
                headers: null,
                status: "nil"
            }

            setResponseTime("0");
            setResponseDiv(true);
            setResponse(errorResponse);
            setResponseData("Plaese enter url");
            setResponseHeaders({});

            return;

        }

        if (jsonData === null) {
            const errorResponse = {
                data: null,
                headers: null,
                status: "nil"
            }

            setResponseTime("0");
            setResponseDiv(true);
            setResponse(errorResponse);
            setResponseData("Invalid Json input");
            setResponseHeaders({});
            return;

        }

        const requestData = {
            url: url,    // Replace with your desired URL
            method: method,                                    // Replace with your desired HTTP method
            queryParams: queryParams,
            headers: requestHeaders, // Replace with your desired
            // jsonData: JSON.stringify(jsonData),
            jsonData: jsonData

        };
        
        console.log(requestData);

        const startRequestTime = Date.now();
        await axios.get('https://api-courier.onrender.com/request', { params: requestData })
            .then(response => {
                const endRequestTime = Date.now();
                setResponseTime(endRequestTime - startRequestTime);
                setResponseDiv(true);
                setResponse(response);
                console.log(response.data);
                setResponseData(response.data);  // Handle the response data from your server
                setResponseHeaders(response.headers);
            })
            .catch(error => {
                const errorResponse = {
                    data: null,
                    headers: null,
                    status: error.code
                }
    
                setResponseTime("0");
                setResponseDiv(true);
                setResponse(errorResponse);
                setResponseData(error.message);
                setResponseHeaders({});
                console.error(error);        // Handle any errors that occurred during the request

                return;
            });
    }

    const updaterequestMethod = (event) => {

        setRequestMethod((requestMethod) => requestMethod = event.target.value);
        console.log(requestMethod);

    }

    const updateApiUrl = (event) => {
        setRequestApi(event.target.value);
        console.log(requestApi);

    }

    // {`bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-1/5 border`}

    return (
        <div className="flex text-sm request-heading mt-8 bg-red-500 mx-10 md:text-3xl md:mx-40 cursor-pointer">
            <select className={`bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "black" : "white"} border border-${theme === "Light 💡" ? "black" : "white"} w-1/5 border border-solid cursor-pointer request-options`} onChange={updaterequestMethod} name="http_method">
                <option className={`get-request`} value="get">GET</option>
                <option className={`post-request`} value="post">POST</option>
                <option className={`delete-request`} value="delete">DELETE</option>
                <option className={`put-request`} value="put">PUT</option>
                <option className={`patch-request`} value="patch">PATCH</option>
            </select>

            <input className={`bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-3/5 border text-xs  md:text-2xl border-solid api-input`} type="text" id="url" name="url" required placeholder="paste the url" onChange={updateApiUrl} />
            <button className={`bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-1/5 border`} type="submit" onClick={sendApiRequest}>send</button>

        </div>
    )
}

export default RequestSection;