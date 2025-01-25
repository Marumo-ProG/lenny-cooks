"use client";

import { useState } from "react";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";

// Components
// import SearchBlogComponent from "../components/SearchBlogComponent";
// import FilterByCategory from "../components/FilterByCategory";

// Utils
import { PageGutter, Colors } from "@/common/constants";

const Blogs = () => {
    const [filters, setFilters] = useState({ category: "", search: "" });
    return (
        <Stack spacing={3} px={PageGutter} maxWidth="800px" alignSelf="center">
            <Typography variant="bigTitle">Blogs</Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
                spacing={2}
            >
                {/* <SearchBlogComponent />
                <FilterByCategory /> */}
            </Stack>
        </Stack>
    );
};

export default Blogs;
