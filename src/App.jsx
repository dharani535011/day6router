
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import './App.css'
import Hhome from './pages/Hhome'
import Fullstack from './pages/Fullstack'
import Data from './pages/Ddata'
import Career from './pages/Ccareer'
import Cyber from './pages/Ccyber'
import All from './pages/All'



const router=createBrowserRouter([
  {
    path:"/",
    element:<Hhome/>,
    children:[
      {
        path:"/",
        element:<All/>
      },
      {
        path:"/fullstackdevelopment",
        element:<Fullstack/>
      },
      {
        path:"/datascience",
        element:<Data/>
      },
      {
        path:"/blockchain",
        element:<Career/>
      }
      , {
        path:"/cybersecurity",
        element:<Cyber/>
      }
    ]}])

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
