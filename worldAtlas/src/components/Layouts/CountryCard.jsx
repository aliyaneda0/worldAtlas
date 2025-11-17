export const CountryCard = ({country}) =>{
   
    const { flags , name, population, region, capital} = country ;
    const flagSrc = flags?.svg || flags?.png || ""; // safe fallback
    const countryName = name?.common || name?.official || name || "Country";
    return(
          <>
            <li className="relative bg-gradient-to-bl from-zinc-950/20 via-zinc-600/60 to-zinc-950/10
                        backdrop-blur-xl rounded-2xl px-4 py-2 shadow-xl border border-transparent
                         hover:border-gray-700 hover:scale-105 transform hover:shadow-gray-200/20 transition-all duration-500">
               <div>

                  <img src={flagSrc} alt="flag svg" />

                  <div>
                     <p className="text-2xl md:text-xl font-semibold mb-2 text-white">{countryName.length>10? countryName.slice(0,10):countryName}</p>

                     <p>  <span>Population:</span>
                         {population.toLocaleString()}
                     </p>
                     <p>
                         <span>Region:</span>{region}
                     </p>
                     <p>
                         <span>Capital:</span>{capital[0]}
                     </p>
                  </div>

               </div>

            </li>
          </>
    
    )
}