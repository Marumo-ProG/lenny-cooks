// next components
import Image from "next/image";

// Date
import { format } from "date-fns";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

// Components
import LinkText from "@/common/components/LinkText";

// Utils
import { Colors } from "@/common/constants";

const BlogCard = ({ blog }) => {
    return (
        <LinkText href={`/blogs/${blog.slug}`}>
            <Stack
                spacing={2}
                width={"100%"}
                sx={{ borderRadiusTopLeft: "5px", borderRadiusTopRight: "5px", overflow: "hidden" }}
            >
                <Box sx={{ width: "100%", maxHeight: "278px", aspectRatio: "510/278" }}>
                    <Image
                        src={blog.image}
                        sizes="100vw"
                        alt="Lenny cooks blog"
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            borderRadius: "5px",
                        }}
                    />
                </Box>
                <Chip label={blog.category} />
                <Stack spacing={2}>
                    <Stack>
                        <Typography variant="miniTitle" sx={{ color: Colors.black }}>
                            {blog.title}
                        </Typography>
                        <Typography variant="footerLink" sx={{}}>
                            {format(new Date(blog.date), "MMM d, yyyy")} • {blog.readTime}
                        </Typography>
                    </Stack>
                    <Stack spacing={3}>
                        <Typography
                            variant="body"
                            sx={{
                                color: Colors.black,
                                maxHeight: "101px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {blog.description}
                        </Typography>
                        <Stack direction="row" alignItems={"center"} spacing={3}>
                            <Image
                                src={blog.author.image}
                                alt={blog.author.name}
                                width={45}
                                height={45}
                                style={{
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                            <Typography variant="footerLink">{blog.author.name}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </LinkText>
    );
};

export default BlogCard;
