import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import ContextComponent from './Context/ContextComponent';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ContextComponent>
        <RouterProvider router={router}></RouterProvider>
      </ContextComponent>
    </React.StrictMode>,
  </QueryClientProvider>
)
