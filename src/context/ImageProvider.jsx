import React, { useEffect, useState } from "react";
import { getImages } from "../services/api";

export const ImageContext = React.createContext(null);

export const ImageProvider = (props) => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(5);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(count < 3 || count > 200){
            setOpen(true);
            return;
        }
        setOpen(false);

        const getImagesData = async () => {
           const res = await getImages(text, count);
        //    console.log(res);
           setData(res.data.hits);
        }
        getImagesData();
    }, [text, count]);

    return <ImageContext.Provider value={{
        text,
        setText,
        count,
        setCount,
        data,
        open,
        setOpen
    }}>
        {props.children}
    </ImageContext.Provider>
}