// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import SearchBlogComponent from "./components/SearchBlogComponent";

// Utils
import { Colors, PageGutter } from "@/common/constants";

const Landing = () => {
    return (
        <Stack spacing={2} sx={{ px: PageGutter, py: 5 }}>
            <Stack spacing={4} alignItems={"center"}>
                <Stack spacing={1}>
                    <Typography variant="bigTitle" sx={{ textAlign: "center" }}>
                        Lenny Cooks Blog
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: "center",
                            fontWeight: 400,
                            color: Colors.link,
                        }}
                    >
                        A blog about food, experiences, and recipes.
                    </Typography>
                </Stack>
                <Stack sx={{ width: "50%" }}>
                    <SearchBlogComponent />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Landing;
