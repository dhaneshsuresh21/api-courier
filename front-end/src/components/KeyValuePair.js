import { useState, useContext, useEffect } from "react";
import React from 'react';

import { ThemeContext } from "../contexts/ThemeContext";

const KeyValueValuePair = ({ keyName, valueName, index, queryParamsList, setQueryParamsList }) => {


    const {theme , setTheme} = useContext(ThemeContext)

    const [key, setKey] = useState(keyName);
    const [value, setValue] = useState(valueName);

    useEffect(() => {
        setTimeout(() => {

        }, 1000)
        setKey(key);
    }, [key, value])

    const updateKey = async (e) => {

        const updatedArray = queryParamsList.map(obj => {
            if (obj.id === index) {
                return { ...obj, key: e.target.value };
            }
            return obj;
        });
        setKey(e.target.value);
        setQueryParamsList(updatedArray);


    }

    const updateValue = (e) => {
        const updatedArray = queryParamsList.map(obj => {
            if (obj.id === index) {
                return { ...obj, value: e.target.value };
            }
            return obj;
        });
        setValue(e.target.value);
        setQueryParamsList(updatedArray);

    }

    const removekeyValuePair = () => {

        const filteredList = queryParamsList.filter((queryParam) => {
            if(queryParam.id === index)
                return false;
            return true;
        })

        setQueryParamsList(filteredList);

    }


        // flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40

    //{`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-1/5 border border-solid border-2 remove-query-param`}

    return (
        <div className="flex mx-10 text-xs font-medium mt-4 md:mt-8 md:text-3xl md:mx-40 md:text-3xl">
            <input value={key} className={`bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-2/5 border border-solid border-2 query-params-key`} type="text" required placeholder="key" onChange={updateKey} />
            <input value={value} className={`bg-${theme === "Light 💡" ? "white" : "black"} text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-2/5 border border-solid border-2 query-params-value`} type="text" required placeholder="value" onChange={updateValue} />
            <button className={`text-${theme === "Light 💡" ? "black" : "white"} border-${theme === "Light 💡" ? "black" : "white"} w-1/5 border border-solid border-2 remove-query-param`}  onClick={removekeyValuePair}>remove</button>
        </div>
    )
}

export default KeyValueValuePair;