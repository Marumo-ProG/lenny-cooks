// MUI
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Grid";

// Utils
import { PageGutter, Colors } from "@/common/constants";

// Components
import BlogCard from "@/app/components/BlogCard";

// Images
import TestImage from "@/assets/images/test.png";
import AvatarTestImage from "@/assets/images/avatar_test.jpg";

const BlogList = ({ blogs }) => {
    blogs = [
        {
            id: 1,
            title: "The Best Chocolate Cake",
            image: TestImage,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
            date: "2025-12-17",
            category: "Travel",
            readTime: "5 min",
            author: {
                name: "Lenny, the cook",
                image: AvatarTestImage,
            },
        },
    ];
    return (
        <Grid2 container spacing={3}>
            {blogs.map((blog) => (
                <Grid2 xs={12} sm={6} lg={4} key={blog.id}>
                    <BlogCard blog={blog} />
                </Grid2>
            ))}
        </Grid2>
    );
};

export default BlogList;
