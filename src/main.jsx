import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { router } from './Routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className=" ">
   <Toaster position="top-center" reverseOrder={false} />
   <RouterProvider router={router}></RouterProvider>
   </div>
  </StrictMode>,
)
