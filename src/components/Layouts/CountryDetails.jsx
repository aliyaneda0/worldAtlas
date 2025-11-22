import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router";
import  {getCountryByName}  from "../../api/postApi";

export const CountryDetails = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (!name) return;

        startTransition(async () => {
            const res = await getCountryByName(name);
            setCountry(res.data);
        });
    }, [name]);

    if (isPending || !country.length) return <h1>Loading...</h1>;

    const data = country[0];

     // helpers to convert objects to renderable strings
   const formatCurrencies = (currObj) => {
     if (!currObj || typeof currObj !== "object") return "N/A";
     return Object.values(currObj)
        .map(c => `${c.name}${c.symbol ? ` (${c.symbol})` : ""}`)
        .join(", ");
    };

    const formatLanguages = (langObj) => {
      if (!langObj || typeof langObj !== "object") return "N/A";
      return Object.values(langObj).join(", ");
    };
 

    return (
        // <section className="max-w-4xl mx-auto min-h-screen  text-white py-10 px-4">
        //     <div  className=" max-w-5xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#111] 
        //           rounded-3xl shadow-2xl p-10 
        //           flex flex-col md:flex-row gap-12 
        //           border border-gray-800
        //       ">
                
        //         <div className="md:w-1/2 flex justify-center ">
        //             <img 
        //             src={data.flags.svg}
        //             alt={data.flags?.alt || "Country Flag"}
        //             className=" w-64 h-64 object-cover rounded-xl shadow-xl 
        //            transition-all duration-300 hover:scale-105 ring-2 ring-gray-700"
        //         />
        //         </div>
        //         <div className="   sm:w-[500px] mt:0 md:mt-2 flex  justify-center  relative p-2 shadow-lg  ">
        //              <div className=" flex flex-col  ">
        //                  <h1 className="text-4xl font-bold mb-8">{data.name.common}</h1>
        //                     <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
        //                     <p><strong>Region:</strong> {data.region}</p>
        //                     <p><strong>Capital:</strong> {data.capital?.[0]}</p>
        //              </div>
                
        //         </div>
        //     </div>
        // </section>

        <div className="min-h-screen  text-white py-20 px-4 flex justify-center">
            <div className="w-full  max-w-2xl md:max-w-4xl bg-gradient-to-br from-[#1b1b1b] to-[#111] 
                  p-12 md:p-8 rounded-2xl shadow-2xl border border-zinc-500/40
                  flex flex-col md:flex-row gap-10
                   hover:border-gray-700 hover:scale-105 transform hover:shadow-gray-200/20 transition-all duration-500">

                    {/* LEFT FLAG BOX */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className=" bg-[#0f0f0f] shadow-lg  ">
                        <img
                        src={data.flags.svg}
                        alt="Flag"
                        className="w-60 object-cover shadow-md"
                        />
                   </div>
                </div>

    {/* RIGHT DETAILS */}
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start gap-3">
                <h1 className="text-3xl font-bold mb-2" >{data.name.common}</h1>

               <p className="flex flex-wrap mx-1.">
                    <span className="font-medium text-gray-400 ">Native Names: </span>
                    {Object.values(data.name?.nativeName || {})
                        .map((n) => n.common)
                        .join(", ")}
               </p>


                <p><span className="font-semibold text-gray-400">Population:</span> {data.population.toLocaleString()}</p>

                <p><span className="font-semibold text-gray-400">Region:</span> {data.region}</p>
                <p><span className="font-semibold text-gray-400">Sub Region:</span> {data.subregion}</p>

                <p><span className="font-semibold text-gray-400">Capital:</span> {data.capital?.[0]}</p>

                <p><span className="font-semibold text-gray-400">Top Level Domain:</span> {data.tld?.[0]}</p>

                <p>
                    <span className="font-semibold text-gray-400">Currencies: </span>
                    {Object.values(data.currencies).map((c) => c.name).join(", ")}
                </p>

                <p>
                        <span className="font-semibold text-gray-400">Languages: </span>
                        {Object.values(data.languages).join(", ")}
                </p>
            </div>

          </div>
      </div>

    );
};

