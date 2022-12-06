import { createBrowserRouter} from 'react-router-dom'
import * as React from 'react';

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  }

])

export {router};