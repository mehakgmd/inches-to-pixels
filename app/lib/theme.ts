export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before the page paints (inlined in <head>), so a saved dark choice never flashes light.
 * The site always starts light; it is dark only after the visitor picks dark with the toggle
 * (that choice is saved and reused). The device's own dark setting is ignored on purpose.
 */
export const THEME_INIT_SCRIPT = `(function(){try{document.documentElement.classList.toggle("dark",localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")}catch(e){}})()`;
