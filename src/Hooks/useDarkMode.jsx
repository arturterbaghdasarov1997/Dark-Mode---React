import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useWindowSize from "./useWindowSize";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', false);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > 768) {
            document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }, [isDarkMode, width]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;