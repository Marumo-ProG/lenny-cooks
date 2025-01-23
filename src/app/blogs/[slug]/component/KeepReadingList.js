// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Next Components
import Image from "next/image";

const KeepReadingList = ({ blogs }) => {
    return (
        <Stack spacing={4}>
            <Typography variant="bigTitle">Keep Reading</Typography>
            {blogs.map((blog, index) => (
                <Stack direction="row" spacing={4} alignItems={"center"} key={index}>
                    <Stack flex={1}>
                        <Image
                            src={blog.image}
                            alt="Lenny cooks blog"
                            sizes="100vw"
                            style={{
                                borderRadius: "5px",
                                width: "100%",
                                height: "100%",
                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                objectFit: "cover",
                            }}
                        />
                    </Stack>
                    <Stack flex={2} spacing={1}>
                        <Typography variant="miniTitle">{blog.title}</Typography>
                        <Typography variant="blogText">{blog.subtitle}</Typography>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};

export default KeepReadingList;
