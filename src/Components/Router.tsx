import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from '../App'
import Skills from './Skills'
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
                path:"/skills",
                element: <Skills/>
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