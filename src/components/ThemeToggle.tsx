
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    // Check if theme is stored in local storage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
      return;
    }
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform duration-500 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-500 rotate-0 hover:rotate-90" />
      )}
    </Button>
  );
};

export default ThemeToggle;
