export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before the page paints (inlined in <head>), so a saved dark choice never flashes light.
 * Without a saved choice it follows the device setting.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;
