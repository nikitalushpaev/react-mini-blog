import { useState, useEffect } from "react";
const getStorageValue = (key, defaultValue) =>{
    const saved = JSON.parse(localStorage.getItem(key));
    return saved || defaultValue;
}

export const useLocalStorage = (key, defaultValue) =>{
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}