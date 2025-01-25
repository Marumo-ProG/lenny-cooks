"use client";

import { useState } from "react";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// Components
import Filters from "../components/Filters";

// Utils
import { PageGutter } from "@/common/constants";

const Blogs = () => {
    const [filters, setFilters] = useState({ category: "", search: "" });
    return (
        <Stack spacing={3} px={PageGutter}>
            <Stack maxWidth="800px" alignSelf="center" width={"100%"}>
                <Typography variant="bigTitle">Blogs</Typography>
            </Stack>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
                spacing={2}
            >
                <Filters />
            </Stack>
        </Stack>
    );
};

export default Blogs;
