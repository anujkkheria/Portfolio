import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from '../App'
import Home from './Home'
import Experience from './Experience'
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
                element:<Home/>
            },
            {
                path:"/Experience",
                element:<Experience/>
            },
            {
                path : "/Project",
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