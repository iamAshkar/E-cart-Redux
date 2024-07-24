//user define hooks

import { useEffect, useState } from "react"

const useFetch = (url)=>{//useFetch hook data from url and return data

    const [data,setData]=useState([])
     useEffect(()=>{
        fetch(url).then((res)=>{
            res.json().then((arraData)=>setData(arraData.products))
        })
},[url])
return data
}

export default useFetch