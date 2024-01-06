import React,{useState,useEffect} from 'react'
interface UseThemeSwitcherReturn {
  colorTheme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}
const useThemeSwitcher=(): UseThemeSwitcherReturn =>{
  const [theme, setTheme] = useState<string | any>(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    
    // save theme to local storage
    localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
    
    return {colorTheme, setTheme};
}

export default useThemeSwitcher