"use client";

// Forms
import { useForm, Controller } from "react-hook-form";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Utils
import { PageGutter, Colors } from "@/common/constants";

const SubscribeSection = () => {
    const { control, handleSubmit } = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };
    return (
        <Stack px={PageGutter} direction={"row"} spacing={10} alignItems={"center"}>
            <Stack
                width="100%"
                sx={{ backgroundColor: Colors.tag, borderRadius: "5px", p: 4 }}
                alignItems={"center"}
                spacing={2}
            >
                <Typography variant="miniTitle" sx={{ color: Colors.white, textAlign: "center" }}>
                    Subscribe to our newsletter
                </Typography>
                <Typography variant="p" sx={{ color: Colors.background, textAlign: "center" }}>
                    Get weekly food news, articles, and videos delivered to your inbox.
                </Typography>
                <form onSubmit={handleSubmit(handleOnSubmit)} style={{ width: "100%" }}>
                    <Stack spacing={2}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: "Email is required" }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            overflow: "hidden",
                                        },
                                        "& .MuiInputBase-input": {
                                            backgroundColor: Colors.white,
                                        },
                                    }}
                                />
                            )}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ backgroundColor: Colors.title, width: "fit-content" }}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </Stack>
            <Stack width="100%"></Stack>
            <Stack width="100%"></Stack>
        </Stack>
    );
};

export default SubscribeSection;
