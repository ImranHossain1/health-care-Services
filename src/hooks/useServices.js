import { useEffect, useState } from "react"

const useServices = () =>{
    const [services, setServices] = useState([]);
    const [displayServices, setDisplayServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=> {
            setServices(data);
            setDisplayServices(data)
        })

    },[]);
    // return necessary things
    return {services, setServices, displayServices, setDisplayServices};
}

export default useServices;