import react from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Country } from './pages/Country'
import { Home } from './pages/Home'
import { AppLayout } from './components/Layouts/AppLayouts'
import { ErrorPage } from './pages/ErrorPage'


const router = createBrowserRouter([
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
    path:"about",
    element:<About/>
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
])

function App() {
 

  return (
    <>
       <RouterProvider router = {router}/>
    </>
  )
}

export default App
