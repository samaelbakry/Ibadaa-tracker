import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/Main";
import Quran from "./components/quran/Quran";
import SurahDetails from "./components/surahDetails/SurahDetails";
import { useTheme } from "./hooks/useTheme";
import MorningAdhkar from "./components/adhkar/MorningAdhkar";
import EveningAdhkar from "./components/adhkar/EveningAdhkar";

const App = () => {
  const { theme } = useTheme()

  const router = createBrowserRouter([
    {path: "/home",element: <Main />},
    {index:true ,element: <Main />},
    {path:"*" , element: <h4 className="text-center my-10 font-bold text-rose-800 text-xl">404 Not Found</h4> },
    {path: "/quran" , element: <Quran/>},
    {path: "/surah/:surahNumber" , element: <SurahDetails/>},
    {path: "/morningadhkar" , element: <MorningAdhkar />},
    {path: "/eveningadhkar" , element: <EveningAdhkar />}
  ])
  return (
    <>
    <div className={`${theme ==="dark" ? "bg-[url(./assets/jema_lh_053_16.jpg)] min-h-dvh bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden"
       : "bg-[url(./assets/8445202.jpg)] min-h-dvh bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden"  }`}>
    <RouterProvider router={router} />
    </div>
    </>
  );
};

export default App;
