import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import { CountryCard } from "../components/Layouts/CountryCard";

export const Country = () =>{

    const[isPending, startTransition] = useTransition();
    const[countries,setCountries] = useState([]);

    useEffect(()=>{
           
                 startTransition(async()=>{
                   const res =  await getCountryData();
                    console.log(res)
                    setCountries(res.data);
                 })
    },[])

    if (isPending) return <h1><Loader/></h1>

    return(
        <section className=" text-white py-16  relative overflow-hidden">
             <ul className="max-w-5xl mx-auto w-full grid  gap-[1.5rem] sm:grid-cols-3 lg:grid-cols-4 px-4">
                  {countries.map((curCountry, index) => {
                      return <CountryCard country={curCountry} key={index} />;
                  })}
             </ul>
        </section>
            
    )
}