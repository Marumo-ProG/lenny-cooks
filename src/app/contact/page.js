"use client";

// Forms
import { useForm, Controller } from "react-hook-form";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Utils
import { PageGutter, Colors } from "@/common/constants";

const Contact = () => {
    const { control, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
    };
    return (
        <Stack px={PageGutter} spacing={3} maxWidth="800px" alignSelf="center">
            <Typography variant="bigTitle">Contact Me</Typography>
            <Typography variant="blogText">
                For whatever reason you want to reach out to me, please use this form.
                <br />
                <br />I will get back to you when I do, I mean its not like we know each other right
            </Typography>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Stack spacing={2}>
                    <Controller
                        name="full_name"
                        control={control}
                        rules={{
                            required: "Required",
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Full Name *"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                            />
                        )}
                    />
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Required",
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    label="Email *"
                                    variant="outlined"
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    fullWidth
                                />
                            )}
                        />
                        <Controller
                            name="subject"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Subject (optional)"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                    <Controller
                        name="message"
                        control={control}
                        rules={{
                            required: "Required",
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                multiline
                                rows={3}
                                label="Message *"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: Colors.title, width: "fit-content" }}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default Contact;
