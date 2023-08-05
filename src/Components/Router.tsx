import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from '../App'
import Hero from './Hero'
import Project from './Project'
import Contact from './Contact'
const Router = () => {
  
    const router = createBrowserRouter([
        {
            path:"/",
            element: <App/>,
            children:[
                {
                path:"/",
                element:<Hero/>
            },
            {
                path : "/Projects",
                element: <Project />
            },
            {
                path:"/contact Me",
                element:<Contact />
        }
        ]
        },
    ])
    return <RouterProvider router={router} />
}

export default Router