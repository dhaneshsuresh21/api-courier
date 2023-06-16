import { useState, useEffect } from "react";
import { useContext } from "react";
import KeyValuePair from "./KeyValuePair";
// import { QueryParamsContext } from "./ApiCourier";
import { QueryParamsContext } from "../contexts/QueryParamsContext";
import { ThemeContext } from "../contexts/ThemeContext";

const QueryParams = () => {


    const {theme , setTheme} = useContext(ThemeContext);

    const {queryParamsList, setQueryParamsList} = useContext(QueryParamsContext);

    const addQueryParam = () => {
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

    // flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40

    // mx-40 mt-8 p-1 border border-black border-solid cursor-pointer json-button
    // {`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} mx-10 text-xs mt-8 md:mx-40 md:text-3xl p-1 border  border-solid cursor-pointer add-query-params`}
    return (
        <>


        
            <button className={`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} mx-10 text-xs mt-8 md:mx-40 md:text-3xl p-1 border  border-solid cursor-pointer add-query-params`} type="submit" onClick={addQueryParam}>add-query-params</button>
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

export default QueryParams;