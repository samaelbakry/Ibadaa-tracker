import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Main from "./components/main/Main";
import Quran from "./components/quran/Quran";
import SurahDetails from "./components/surahDetails/SurahDetails";
import MorningAdhkar from "./components/adhkar/MorningAdhkar";
import EveningAdhkar from "./components/adhkar/EveningAdhkar";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:pl-72 transition-all duration-300 pt-16 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/home", element: <Main /> },
        { index: true, element: <Main /> },
        { path: "/quran", element: <Quran/> },
        { path: "/surah/:surahNumber", element: <SurahDetails /> },
        { path: "/morningadhkar", element: <MorningAdhkar /> },
        { path: "/eveningadhkar", element: <EveningAdhkar /> },
      ],
    },
  ]);

  return (
    <div
      className={`min-h-screen relative transition-colors duration-500 selection:bg-amber-500/20 ${
        theme === "dark"
          ? "bg-linear-to-br from-slate-950 via-emerald-950/20 to-slate-900 text-slate-100"
          : "bg-linear-to-br from-amber-50/90 via-stone-50 to-orange-50/50 text-slate-900"
      }`}
    >
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;