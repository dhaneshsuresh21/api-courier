import { useContext } from "react";

import { ResponseContext } from "../contexts/ResponseContext";
import { ResponseTimeContext } from "../contexts/ResponseTimeContext";
import { ThemeContext } from "../contexts/ThemeContext";

const ResponseInfo = () => {

    const {theme , setTheme} = useContext(ThemeContext)

    const {response , setResponse} = useContext(ResponseContext);
    const {responseTime , setResponseTime} = useContext(ResponseTimeContext);

    const status = response.status;
    const size = response.data === null && response.headers === null ? 0 : JSON.stringify(response.data).length + JSON.stringify(response.headers).length;

        // flex mx-10 text-xs font-medium mt-8 md:text-3xl md:mx-40

        // {`text-${theme === "Light 💡" ? "black" : "white"} text-xs italic mr-2 md:text-base md:mr-4 `}

    return (
        <>
            <div className="flex mx-10 text-xs  mt-8 md:text-3xl md:mx-40 ">
                <span className={`text-${theme === "Light 💡" ? "black" : "white"} text-xs italic mr-2 md:text-base md:mr-4 `}>status:{status}</span>
                <span className={`text-${theme === "Light 💡" ? "black" : "white"} text-xs italic mr-2 md:text-base md:mr-4 `}>size:{size}B </span>
                <span className={`text-${theme === "Light 💡" ? "black" : "white"} text-xs italic mr-2 md:text-base md:mr-4 `}>time:{responseTime}ms</span>
            </div>
        </>
    )

}

export default ResponseInfo;