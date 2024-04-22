const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

// Check the browser preferred color scheme, and sets the defaultTheme based of that
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDarkMode ? "dark" : "light";
const preferredTheme = localStorage.getItem("theme")

// Check if the localStorage item is set, if not set it to the default theme
if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
}

// Sets the theme of the site either the preferredTheme or the defaultTheme (based on localStorage)
html.dataset.theme = preferredTheme || defaultTheme;

// Theme toggle handler
toggle.addEventListener("click", () => {
    // Check if the saved theme in localStorage is  "dark"
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    // Chooses the opposite theme of the current selected one
    const newTheme = isDarkTheme ? "light" : "dark"
    // Changes the theme to the newTheme
    localStorage.setItem("theme", newTheme);
    html.dataset.theme = newTheme;
});