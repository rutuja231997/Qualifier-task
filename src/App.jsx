import BottomPagination from "./components/BottomPagination";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-y-auto w-full">
      <Outlet />
      <BottomPagination />
    </div>
  );
};

export default App;
