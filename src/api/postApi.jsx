import axios from "axios";

const api = axios.create(
    {
        baseURL :"https://restcountries.com/v3.1",
    }
)


//https get Method 

export const getCountryData = () => {
    return api.get("/all", {
        params: { fields: "name,population,region,capital,flags" },
    });
};

export const getCountryByName = (countryName) =>{

    return api.get(`/name/${countryName}`,
//         {

//         params: { fields: "name,population,region,capital,flags,languages,currencies,subregion,tld,borders" },
//     }
 )
}