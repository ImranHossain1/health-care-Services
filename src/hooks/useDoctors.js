import { useEffect, useState } from "react"

const useDoctors = () =>{
    const [doctors, setDoctors] = useState([]);
    const [displayDoctors, setDisplayDoctors] = useState([]);

    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data=> {
            setDoctors(data);
            setDisplayDoctors(data);
        })

    },[]);
    // return necessary things
    return {doctors, setDoctors, displayDoctors, setDisplayDoctors};
}

export default useDoctors;