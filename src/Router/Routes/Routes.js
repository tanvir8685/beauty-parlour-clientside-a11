import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddPersonalService from '../../Pages/AddPersonalService/AddPersonalService';
import AddService from '../../Pages/AddService/AddService';
import AllServices from '../../Pages/AllServices/AllServices';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReview from '../../Pages/MyReview/MyReview';
import ServiceFullDetail from '../../Pages/ServiceFullDetail/ServiceFullDetail';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/services',
            element:<AllServices></AllServices>,
            loader:()=>fetch('https://beauty-parlour-server-nine.vercel.app/services')
        },
        {
            path:'/services/:id',
            element:<ServiceFullDetail></ServiceFullDetail>,
            loader:({params})=>fetch(`https://beauty-parlour-server-nine.vercel.app/services/${params.id}`)
        },
        {
            path:'/myreview',
            element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
            path:'/addservice',
            element:<AddPersonalService></AddPersonalService>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>

        }
        
      ]
    }
  ])

export default router;