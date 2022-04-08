import { useEffect, useState } from "react";

const useFaQ = () =>{
    const [faQ, setFaQ] = useState([]);

    useEffect(()=>{
        fetch('/faq.json')
        .then(res=>res.json())
        .then(data=> {
            setFaQ(data);
        })

    },[]);
    // return necessary things
    return {faQ, setFaQ};
}

export default useFaQ;