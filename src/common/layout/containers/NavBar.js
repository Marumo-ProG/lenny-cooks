// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import LinkText from "@/common/components/LinkText";
import MobileNavbar from "./MobileNavbar";

// utils
import { PageGutter } from "@/common/constants";

const NavBar = () => {
    return (
        <nav>
            <Stack
                px={PageGutter}
                py={2}
                direction={"row"}
                spacing={2}
                justifyContent={"space-between"}
                alignItems={"center"}
                display={{ xs: "none", sm: "flex" }}
            >
                <LinkText href="/">
                    <Typography variant="miniTitle">Lenny Cooks</Typography>
                </LinkText>

                <Stack direction="row" spacing={2} alignItems={"center"}>
                    <LinkText href="/blogs">
                        <Typography variant="link">Blogs</Typography>
                    </LinkText>
                    <LinkText href="/about">
                        <Typography variant="link">About</Typography>
                    </LinkText>
                    <LinkText href="/contact">
                        <Typography variant="link">Contact</Typography>
                    </LinkText>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                display={{ xs: "flex", sm: "none" }}
            >
                <LinkText href="/">
                    <Typography variant="miniTitle">Lenny Cooks</Typography>
                </LinkText>
                <MobileNavbar />
            </Stack>
        </nav>
    );
};

export default NavBar;
