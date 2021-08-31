/*Custom Hook*/
import {useState} from "react";
export default function useCustomCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1);
    }
    return {
        count, handleClick
    }
}