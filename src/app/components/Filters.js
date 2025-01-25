"use client";

import { useState, useEffect } from "react";

// MUI
import Stack from "@mui/material/Stack";

// compoents
import SearchBlogComponent from "./SearchBlogComponent";
import FilterByCategory from "./FilterByCategory";
import BlogList from "../containers/BlogList";

const Filters = ({ justSearch = false }) => {
    const [filters, setFilters] = useState({ category: "", search: "" });

    useEffect(() => {
        // fetch data
        console.log(filters);
    }, [filters]);
    return (
        <Stack width={"100%"} spacing={3}>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                maxWidth={"800px"}
                width={"100%"}
                alignSelf={"center"}
            >
                <SearchBlogComponent setFilters={setFilters} filters={filters} />
                {!justSearch && <FilterByCategory setFilters={setFilters} filters={filters} />}
            </Stack>
            <BlogList filters={filters} />
        </Stack>
    );
};

export default Filters;
