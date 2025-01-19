"use client";

// Forms
import { useForm, Controller } from "react-hook-form";

// Utils
import { PageGutter, Colors } from "@/common/constants";

// MUI
import TextField from "@mui/material/TextField";

// Icons
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBlogComponent = () => {
    const { control, handleSubmit } = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} style={{ width: "100%" }}>
            <Controller
                name="search"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="outlined"
                        label="Search for articles"
                        fullWidth
                        InputProps={{
                            endAdornment: <SearchRoundedIcon sx={{ color: Colors.greyLight }} />,
                        }}
                    />
                )}
            />
        </form>
    );
};

export default SearchBlogComponent;
