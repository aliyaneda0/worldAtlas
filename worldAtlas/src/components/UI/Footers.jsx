import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const  Footers = () =>{
    return (
        <>
           <footer className = "  max-w-5xl  mx-auto  w-full   pt-2 px-4  ">
              <div className=" mt-20 py-2 w-full max-w-4xl mx-auto px-6 grid gap-8 sm:grid-cols-3 text-center">
                <div className="flex flex-col items-center">
                  <FaMapMarkerAlt className="text-blue-400 text-xl mb-2" />
                  <h4 className="font-semibold text-lg">Find us</h4>
                  <p className="text-gray-400 text-sm">Hyderabad, Telangana</p>
                </div>

                <div className="flex flex-col items-center">
                  <FaPhoneAlt className="text-blue-400 text-xl mb-2" />
                  <h4 className="font-semibold text-lg">Call us</h4>
                  <p className="text-gray-400 text-sm">98********</p>
                </div>

                <div className="flex flex-col items-center">
                  <FaEnvelope className="text-blue-400 text-xl mb-2" />
                  <h4 className="font-semibold text-lg">Mail us</h4>
                  <p className="text-gray-400 text-sm">nedaaliya4@gmail.com</p>
                </div>
            </div>
            <div className="my-2 border-t border-gray-800 pt-4 text-center">
                <p className="text-gray-500 text-sm">&copy; 2024 World Atlas. All rights reserved.</p>
            </div>
      
           </footer>
        </>      
    )
}