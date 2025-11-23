import react from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Country } from './pages/Country'
import { Home } from './pages/Home'
import { AppLayout } from './components/Layouts/AppLayouts'
import { ErrorPage } from './pages/ErrorPage'
import { CountryDetails } from './components/Layouts/CountryDetails'


const router = createHashRouter([

  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },{
        path:"country",
        element:<Country/>
      },{
        path:"country/:name",
        element:<CountryDetails/>
      },{
        path:"contact",      
        element:<Contact/>
      },
  ]
    
  },
  // {
  //   path:"about",
  //   element:<About/>
  // },{
  //   path:"country",
  //   element:<Country/>
  // },{
  //   path:"about",
  //   element:<About/>
  // },{
  //   path:"contact",
  //   element:<Contact/>
  // },
  // },{
  //   path:"*",
  //   element:<Error/>
  // }
], {
    basename: "/worldAtlas",
   }
)

function App() {
 

  return (
    <>
       <RouterProvider router = {router}/>
    </>
  )
}

export default App
