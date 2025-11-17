import Herosection from"../components/UI/Herosection.jsx"
import { About } from "./About.jsx"
import { Contact } from "./Contact.jsx"
export const Home = () =>{
       console.log("Home Page")
    return (
          <>     
               
                <Herosection />
                <About/>
                <Contact/>
          </>
        
    )
}
