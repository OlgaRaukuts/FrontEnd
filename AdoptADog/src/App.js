import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

const appRouter = <Route path="/somepath" element={ <Root /> }> </Route>;

function App() {
  return (
   <RouterProvider router={appRouter}/>
  );
}

export default App;
