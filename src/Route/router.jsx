// this is router compnents
import { createBrowserRouter } from "react-router";
import RootLoayout from "../RootLoayout/RootLoayout";
import App from "../App";
import ProjectDetailPage from "../components/ProjectDetailPage/ProjectDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLoayout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: '/details/:id',
                element: <ProjectDetailPage />
            }
        ]
    }
])