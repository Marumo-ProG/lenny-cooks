"use client";

// MUI
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const FilterByCategory = ({ setFilters, filters }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                label="Category"
                variant="outlined"
                fullWidth
                defaultValue=""
                sx={{
                    width: "100%",
                }}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                <MenuItem value={"personal"}>Personal</MenuItem>
                <MenuItem value={"tech"}>Tech</MenuItem>
                <MenuItem value={"travel"}>Travel</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterByCategory;
