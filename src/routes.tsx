import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Skills',
    path: '/skills',
    element: <Skills />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  }
];

export default routes;
