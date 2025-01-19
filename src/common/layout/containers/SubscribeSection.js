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

    const popularPosts = [
        "The Best Way to Cook Bacon",
        "How to Make the Perfect Pancakes",
        "5 Delicious Breakfast Ideas",
    ];
    const recentPosts = [];

    const handleOnSubmit = (data) => {
        console.log(data);
    };
    return (
        <Stack px={PageGutter} direction={{ xs: "column", md: "row" }} spacing={10}>
            <Stack
                width={{ xs: "auto", md: "100%" }}
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
            <Stack width="100%" justifyContent={"start"} spacing={3}>
                {popularPosts.length > 0 && (
                    <>
                        <Typography variant="body1">POPULAR POSTS</Typography>
                        <Stack spacing={2}>
                            {popularPosts.map((post, index) => (
                                <Typography
                                    key={index}
                                    variant="footerLink"
                                    sx={{ color: Colors.black, fontWeight: 400 }}
                                >
                                    {post}
                                </Typography>
                            ))}
                        </Stack>
                    </>
                )}
            </Stack>

            <Stack width="100%" spacing={3}>
                {recentPosts.length > 0 && (
                    <>
                        <Typography variant="body1">RECENT POSTS</Typography>
                        <Stack spacing={2}>
                            {recentPosts.map((post, index) => (
                                <Typography
                                    key={index}
                                    variant="footerLink"
                                    sx={{ color: Colors.black, fontWeight: 400 }}
                                >
                                    {post}
                                </Typography>
                            ))}
                        </Stack>
                    </>
                )}
            </Stack>
        </Stack>
    );
};

export default SubscribeSection;
