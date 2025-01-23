// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const BlogContentPart = ({ part }) => {
    return (
        <Stack spacing={1} id={part.id}>
            <Typography variant="miniTitle">{part.title}</Typography>
            <Typography variant={"blogText"} dangerouslySetInnerHTML={{ __html: part.content }} />
        </Stack>
    );
};

export default BlogContentPart;
