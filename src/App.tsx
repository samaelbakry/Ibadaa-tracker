import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/Main";
import Quran from "./components/quran/Quran";
import SurahDetails from "./components/surahDetails/SurahDetails";
// import lightBg from "./assets/psdd_03_06_2022_112.jpg"
// import darkBg from "./assets/jema_lh_053_16.jpg"
// import darkBg2 from "./assets/8445202.jpg"
import { useTheme } from "./context/themeContext";

const App = () => {
  const { theme } = useTheme()

  const router = createBrowserRouter([
    {path: "/home",element: <Main />},
    {index:true ,element: <Main />},
    {path:"*" , element: <h4 className="text-center my-10 font-bold text-rose-800 text-xl">404 Not Found</h4> },
    {path: "/quran" , element: <Quran/>},
    {path: "/surah/:surahNumber" , element: <SurahDetails/>}
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
