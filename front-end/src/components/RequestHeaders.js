
import { useState , useEffect} from "react";
import { useContext } from "react";
import KeyValuePair from "./KeyValuePair";
// import { QueryParamsContext } from "./ApiCourier";
import { RequestHeadersContext } from "../contexts/RequestHeadersContext";

import { ThemeContext } from "../contexts/ThemeContext";



const RequestHeaders = () => {


    const {theme , setTheme} = useContext(ThemeContext);

    const {queryParamsList , setQueryParamsList} = useContext(RequestHeadersContext);

    useEffect(() => {
        console.log("qpl")
        console.log(queryParamsList)
    },[queryParamsList])

    const addRequestHeader = () => {
        const obj = {
            key: "",
            value: "",
            id: queryParamsList.length
        }
        const newList = [...queryParamsList];
        newList.push(obj);
        setQueryParamsList(newList);

        console.log("qqlist");
        console.log(queryParamsList);

    }

    return (
        <>
            <button className={`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} mx-10 text-xs mt-8 md:mx-40 md:text-3xl p-1 border  border-solid cursor-pointer add-request-headers`} type="submit" onClick={addRequestHeader}>add-request-headers</button>
            {
                queryParamsList.map((keyValuePair) => {
                    // console.log(queryParam.id)
                    console.log(keyValuePair.id)
                    return <KeyValuePair 
                                        key={keyValuePair.id} 
                                        keyName={keyValuePair.key} 
                                        valueName={keyValuePair.value} 
                                        index={keyValuePair.id} 
                                        queryParamsList={queryParamsList} 
                                        setQueryParamsList={setQueryParamsList} 
                            />
                })
            }
            
        </>
    )

}

export default RequestHeaders;