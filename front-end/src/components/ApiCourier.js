import react from 'react';
import React from 'react';


import { createContext, useState } from 'react';
import Heading from './Heading';
import RequestSection from './RequestSection';
import RequestInputs from './RequestInputs';
import Response from '../response/Response';
import { RequestInputApi } from '../contexts/RequestInputApi';
import { RequestInputMethod } from '../contexts/RequestInputMethod';

import { QueryParamsContext } from '../contexts/QueryParamsContext';
import { RequestHeadersContext } from '../contexts/RequestHeadersContext';
import { JsonContext } from '../contexts/JsonContext';

import { ResponseDataContext } from '../contexts/ResponseDataContext';
import { ResponseHeadersContext } from '../contexts/ResponseHeadersContext';

import { ResponseTimeContext } from '../contexts/ResponseTimeContext';

import { ResponseDivContext } from '../contexts/ResponseDivContext';

import { ResponseContext } from '../contexts/ResponseContext';


// export const QueryParamsContext = createContext();

function ApiCourier() {

    // const [queryParams, setQueryParams] = useState({});

    const [requestApi, setRequestApi] = useState("");
    const [requestMethod, setRequestMethod] = useState("get");

    const [queryParamsList, setQueryParamsList] = useState([]);
    const [requestHeaders, setRequestHeadersList] = useState([]);
    const [json, setJson] = useState("");

    const [responseData, setResponseData] = useState("");
    const [responseHeaders, setResponseHeaders] = useState("");

    const [responseDiv, setResponseDiv] = useState(false);

    const [responseTime , setResponseTime] = useState(null);

    const [response, setResponse] = useState();

    const [requestInputs, setRequestInputs] = useState({
        queryParams: {},
        requestHeaders: {},
        json: ""
    });



    return (


        <div className="App">



            <ResponseDivContext.Provider value={{ responseDiv, setResponseDiv }} >

                <ResponseContext.Provider value={{ response, setResponse }} >

                    <ResponseTimeContext.Provider value={{ responseTime, setResponseTime}} >


                    <ResponseDataContext.Provider value={{ responseData, setResponseData }} >
                        <ResponseHeadersContext.Provider value={{ responseHeaders, setResponseHeaders }} >


                            <QueryParamsContext.Provider value={{ queryParamsList, setQueryParamsList }} >
                                <RequestHeadersContext.Provider value={{ queryParamsList: requestHeaders, setQueryParamsList: setRequestHeadersList }} >
                                    <JsonContext.Provider value={{ json, setJson }} >


                                        <RequestInputApi.Provider value={{ requestApi, setRequestApi }} >
                                            <RequestInputMethod.Provider value={{ requestMethod, setRequestMethod }} >
                                                    <Heading />
                                                    <RequestSection />
                                                    <RequestInputs />
                                                    <Response />

                                                    {/* <ApiRequest /> */}
                                            </RequestInputMethod.Provider >
                                        </RequestInputApi.Provider >
                                    </JsonContext.Provider>
                                </RequestHeadersContext.Provider>
                            </QueryParamsContext.Provider>
                        </ResponseHeadersContext.Provider>
                    </ResponseDataContext.Provider>
                    </ResponseTimeContext.Provider>

                </ResponseContext.Provider>
            </ResponseDivContext.Provider>


        </div>
    );
}

export default ApiCourier;
