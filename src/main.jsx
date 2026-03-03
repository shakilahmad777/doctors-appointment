import { StrictMode, Suspense } from 'react'
import './index.css'
import './App.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import { ColorRing } from 'react-loader-spinner';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense fallback={<h1>loader.....</h1>}>
            <RouterProvider router={router}></RouterProvider>
        </Suspense>
    </StrictMode>,
);
