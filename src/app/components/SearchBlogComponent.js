"use client";

// Utils
import { Colors } from "@/common/constants";

// MUI
import TextField from "@mui/material/TextField";

// Icons
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBlogComponent = ({ setFilters, filters }) => {
    return (
        <TextField
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            variant="outlined"
            label="Search for articles"
            fullWidth
            InputProps={{
                endAdornment: <SearchRoundedIcon sx={{ color: Colors.greyLight }} />,
            }}
        />
    );
};

export default SearchBlogComponent;
