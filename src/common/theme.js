"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Importing fonts
import { Merriweather, Roboto } from "next/font/google";

// Utils
import { Colors } from "./constants";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["700"],
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily, // Default font family
        link: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "18px",
            color: Colors.link,
        },
        miniTitle: {
            fontFamily: merriweather.style.fontFamily,
            fontSize: "24px",
            color: Colors.title,
            fontWeight: "bold",
        },
        bigTitle: {
            fontFamily: merriweather.style.fontFamily,
            fontSize: "48px",
            color: Colors.title,
        },
    },
});

const App = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default App;
