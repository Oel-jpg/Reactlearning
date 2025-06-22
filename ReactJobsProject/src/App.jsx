import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
 } from 'react-router-dom'

import JobsPage from './pages/JobsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MainLayouts from "./layouts/MainLayouts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts/>}>
      <Route path="" element={<HomePage/>}/>
      <Route path="jobs" element={<JobsPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App