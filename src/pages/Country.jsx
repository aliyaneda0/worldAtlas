import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
// import Loader from "../components/UI/Loader";
import { CountryCard } from "../components/Layouts/CountryCard";

export const Country = () =>{

    const[isPending, startTransition] = useTransition();
    const[countries,setCountries] = useState([]);

    useEffect(()=>{
           
                 startTransition(async()=>{
                    const res =  await getCountryData();
                     console.log(res,res.data)
                 setCountries(res.data);
                 })
    },[])

//      useEffect(() => {
//     startTransition(async () => {
//       try {
//         const res = await getCountryData();
//         console.log("API response:", res);
//         let data = res?.data ?? [];

//         // normalize: ensure we have an array
//         if (!Array.isArray(data)) {
//           // if it's an object keyed by name or single item, convert to array
//           if (data && typeof data === "object") {
//             data = Object.values(data);
//           } else {
//             data = [];
//           }
//         }

//         setCountries(data);
//       } catch (err) {
//         console.error("Failed to load countries:", err);
//         setCountries([]); // fallback so .map won't crash
//       }
//     });
//    }, []);

//      if (!Array.isArray(countries)) {
//     return null; // defensive: avoid rendering until normalized
//   }

    // if (isPending) return <h1><Loader/></h1>

    return(
        <section className=" text-white py-16  relative overflow-hidden">
             <ul className=" max-w-[400px] sm:max-w-5xl mx-auto w-full  grid  gap-7 sm:grid-cols-3 lg:grid-cols-4 px-4">
                  {countries.map((curCountry, index) => {
                      return <CountryCard country={curCountry} key={index} />;
                  })}
             </ul>
        </section>
            
    )
}