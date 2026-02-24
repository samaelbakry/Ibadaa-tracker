import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/Main";
import Quran from "./components/quran/Quran";
import SurahDetails from "./components/surahDetails/SurahDetails";
const App = () => {

  const router = createBrowserRouter([
    {path: "/home",element: <Main />},
    {index:true ,element: <Main />},
    {path:"*" , element: <h4 className="text-center my-10 font-bold text-rose-800 text-xl">404 Not Found</h4> },
    {path: "/quran" , element: <Quran/>},
    {path: "/surah/:surahNumber" , element: <SurahDetails/>}
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
