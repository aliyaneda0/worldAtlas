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

    return (
        <section className="text-white max-w-5xl mx-auto p-7 py-20  relative overflow-hidden">
            <div  className="max-w-5xl mx-auto  flex flex-col md:flex-row gap-[2.2rem]   sm:gap-[4.2rem] items-center justify-between border border-x-0 border-white/20 bg-zinc-700/35 p-4 rounded-lg shadow-zinc-800/25 shadow-lg ">
                
                <div className=" w-[420px]  sm:w-[480px] mt:0 md:mt-2 flex justify-center  relative p-4 shadow-lg   ">
                    <img 
                    src={data.flags.svg}
                    alt={data.flags?.alt || "Country Flag"}
                    className=" w-[270px] shadow-lg"
                />
                </div>
                <div className=" md:w-1/2 z-10  sm:w-[500px] mt:0 md:mt-2 flex justify-center  relative p-2 shadow-lg  ">
                    
                <h1 className="text-4xl font-bold mb-8">{data.name.common}</h1>
                <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {data.region}</p>
                <p><strong>Capital:</strong> {data.capital?.[0]}</p>
                </div>
            </div>
        </section>
    );
};

