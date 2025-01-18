"use client";

// React
import { useState } from "react";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

// Icons
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Components
import LinkText from "@/common/components/LinkText";

// Utils
import { Colors } from "@/common/constants";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <MenuOpenRoundedIcon sx={{ color: Colors.title, fontSize: 24 }} />
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={handleClose}>
                <Stack
                    px={2}
                    py={3}
                    direction={"column"}
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    onClick={handleClose}
                >
                    <LinkText href="/">
                        <Typography variant="miniTitle">Lenny Cooks</Typography>
                    </LinkText>
                    <LinkText href="/blogs">
                        <Typography variant="link">Blogs</Typography>
                    </LinkText>
                    <LinkText href="/about">
                        <Typography variant="link">About</Typography>
                    </LinkText>
                    <LinkText href="/contact">
                        <Typography variant="link">Contact</Typography>
                    </LinkText>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Stack>
            </Drawer>
        </>
    );
};

export default MobileNavbar;
