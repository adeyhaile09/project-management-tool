import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Reset from './components/auth/reset';
import CreateTeam from './components/team/create-team';
import CreateWorkspace from './components/workspace/create-workspace';
import CreateProject from './components/project/create-project';
import Footer from './components/layout/footer';
import Home from './components/home/home';
import Header from './components/layout/header';
import ProjectList from './components/project/project-list';
import Dashboard from './components/dashboard/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },

  {
    path: '/team',
    element: <CreateTeam />,
  },
  {
    path: '/workspace',
    element: <CreateWorkspace />,
  },
  {
    path: '/project',
    element: <CreateProject />,
  },
  {
    path: '/project-list',
    element: <ProjectList />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
