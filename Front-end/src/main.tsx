import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Header } from './Header.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Clients } from './Clients.tsx'
import { Accounts } from './Accounts.tsx'
import { Cards } from './Cards.tsx'
import { Credits } from './Credits.tsx'
import { Deposits } from './Deposits.tsx'

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/clients",
    element: <Clients />
  },
  {
    path: "/accounts",
    element: <Accounts />
  },
  {
    path: "/credits",
    element: <Credits />
  },
  {
    path: "/deposits",
    element: <Deposits />
  },
  {
    path: "/cards",
    element: <Cards />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
