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
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors.tag,
                    borderRadius: "3px",
                    width: "fit-content",
                    padding: "2px 4px",
                    color: Colors.white,
                    fontSize: "14px",
                },
            },
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily, // Default font family
        body: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "16px",
            color: Colors.greyDark,
        },
        link: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "18px",
            color: Colors.link,
        },
        footerLink: {
            fontFamily: merriweather.style.fontFamily,
            fontSize: "14px",
            color: Colors.greyLight,
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
        secondaryTitle: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "26px",
            color: Colors.greyDark,
            fontWeight: "medium",
        },
    },
});

const App = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default App;
