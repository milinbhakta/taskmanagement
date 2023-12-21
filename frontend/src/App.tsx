import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import ViewTasks from './Pages/Tasks/ViewTasks';
import EditTask from './Pages/Tasks/EditTask';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Dashboard />} />

        <Route path="tasks">
          <Route index element={<ViewTasks />} />
          <Route path=":taskId" element={<EditTask />} />
          {/* <Route path="new" element={<NewTask />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
