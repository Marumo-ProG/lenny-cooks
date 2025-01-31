// MUI configure
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

// MUI
import Stack from "@mui/material/Stack";

// Containers
import NavBar from "@/common/layout/containers/NavBar";
import Footer from "@/common/layout/containers/Footer";
import SubscribeSection from "@/common/layout/containers/SubscribeSection";

// Theme
import ThemeContext from "@/common/theme";
import theme from "@/common/theme";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeContext theme={theme}>
                        <Stack spacing={5}>
                            <NavBar />
                            {children}
                            <SubscribeSection />
                            <Footer />
                        </Stack>
                    </ThemeContext>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
