import Home from './pages/Home';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import Login from './pages/Login';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <Home />
  },
  {
    name: '约课',
    path: '/booking',
    element: <Booking />
  },
  {
    name: '已约',
    path: '/appointments',
    element: <Appointments />
  },
  {
    name: '我的',
    path: '/profile',
    element: <Profile />
  },
  {
    name: 'Login',
    path: '/login',
    element: <Login />,
    visible: false
  }
];

export default routes;