import { Routes, Route } from 'react-router-dom/dist';
import Dashboard from '../pages/Dashboard';

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
    </Routes>
  );
};

export default MainRouter;
