// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import LinkText from "@/common/components/LinkText";

// Utils
import { PageGutter, Colors } from "@/common/constants";

export default function Footer() {
    return (
        <Stack
            spacing={3}
            sx={{ px: PageGutter, py: 5, backgroundColor: Colors.background }}
            alignItems={"center"}
        >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={"center"}>
                <LinkText href="/about">
                    <Typography variant="footerLink">About</Typography>
                </LinkText>
                <LinkText href="/privacy-policy">
                    <Typography variant="footerLink">Privacy Policy</Typography>
                </LinkText>
                <LinkText href="/contact">
                    <Typography variant="footerLink">Contact</Typography>
                </LinkText>
            </Stack>
            <Typography variant="footerLink" sx={{ textAlign: "center" }}>
                Copyright © 2025 Lenny Cooks Blog. All Rights Reserved.
            </Typography>
        </Stack>
    );
}
