import { NavLink } from "react-router";

export const CountryCard = ({country}) =>{
   
    const { flags , name, population, region, capital} = country ;
    const flagSrc = flags?.svg || flags?.png || ""; // safe fallback
    const countryName = name?.common || name?.official || name || "Country";
    return(
          <>
            <li className="relative bg-gradient-to-bl from-zinc-950/20 via-zinc-600/60 to-zinc-950/10
                        backdrop-blur-xl rounded-2xl  px-2 md:px-4 py-2  shadow-xl border border-transparent
                         hover:border-gray-700 hover:scale-105 transform hover:shadow-gray-200/20 transition-all duration-500">
                <div className=" flex flex-col gap-2   ">

                     <div className=" mx-3 sm:mx-1 h-[180px]   rounded-0  overflow-hidden  ">
                        <img  className=" w-[100%] h-auto  my-3 md:my-3 md:mx-auto" src={flagSrc} alt="flag svg" />
                     </div>

                  <div className="mx-5">
                     <p className="text-2xl md:text-xl font-semibold  text-white">{countryName.length>10? countryName.slice(0,10)+"...":countryName}</p>

                     <p className="text-sm md:text-base m-1">  
                        <span>Population:</span>
                         {population.toLocaleString()}
                     </p>
                     <p className="text-sm md:text-base m-1">
                         <span>Region:</span>{region}
                     </p>
                     <p className="text-sm md:text-base m-1">
                         <span>Capital:</span>{capital[0]}
                     </p>

                     <NavLink to={`/country/${countryName}`} >
                      <button className="flex items-center gap-2 bg-black-500 border border-white-50-smooth  hover:bg-gradient-to-b from-green-50 to-white-50 text-white font-semibold py-1.5 px-3 rounded-full transition duration-300 shadow-lg btn-inline btn-darken">
                                Read More
                                <span className="text-xl">→</span>
                            </button>
                     </NavLink>
                  </div>

               </div>

            </li>
          </>
    
    )
}