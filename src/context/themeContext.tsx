import { createContext, useState, useEffect} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children,}: { children: React.ReactNode;}) {

  const [theme, setTheme] = useState<Theme>(() => {return (localStorage.getItem("theme") as Theme) || "light";});

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}


