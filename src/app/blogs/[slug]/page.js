// Next Components
import Image from "next/image";

// Date
import { format } from "date-fns";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

// Components
import ContentsBlock from "./component/ContentsBlock";
import BlogContentPart from "./component/BlogContentPart";
import KeepReadingList from "./component/KeepReadingList";

// Utils
import { Colors, PageGutter } from "@/common/constants";

// Images
import TestImage from "@/assets/images/test.png";
import AvatarTestImage from "@/assets/images/avatar_test.jpg";

const Blog = () => {
    const blog = {
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
        // contents: [
        //     {
        //         title: "How to travel without spending a dime",
        //         link: "#how-to-travel-without-spending",
        //     },
        //     {
        //         title: "Get the most out of your credit card reward points",
        //         link: "#get-most-credit",
        //     },
        //     {
        //         title: "Why you don’t need more than 3 pieces of clothing",
        //         link: "#why-you-dont-need-3-piece-clothing",
        //     },
        // ],
        sections: [
            {
                titleVariant: "secondaryTitle",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.",
                text: "Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus malesuada et ac vulputate. Aenean lacinia suspendisse et mattis adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at tellus diam.",
            },
        ],
        parts: [
            {
                id: "#how-to-travel-without-spending",
                title: "How to travel without spending a dime",
                content:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.</p>",
            },
            {
                id: "#get-most-credit",
                title: "Get the most out of your credit card reward points",
                content:
                    "<p>Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.</p>",
            },
            {
                id: "#why-you-dont-need-3-piece-clothing",
                title: "Why you don’t need more than 3 pieces of clothing",
                content:
                    "<p>Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.</p>",
            },
        ],
        keep_reading: [
            {
                image: TestImage,
                link: "blogs/why-you-dont-need-more",
                title: "Why you don’t need more than 3 pieces of clothing",
                subtitle:
                    "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
            },
            {
                image: TestImage,
                link: "blogs/why-you-dont-more",
                title: "Why you don’t need more than 3 pieces of clothing",
                subtitle:
                    "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
            },
        ],
    };
    return (
        <Stack spacing={2} alignSelf={"center"} sx={{ px: PageGutter, maxWidth: "800px" }}>
            <Chip label={blog.category} />
            <Stack>
                <Typography variant="bigTitle" sx={{ color: Colors.black }}>
                    {blog.title}
                </Typography>
                <Typography variant="footerLink">
                    {format(new Date(blog.date), "MMM d, yyyy")} • {blog.readTime}
                </Typography>
            </Stack>
            <Image
                src={blog.image}
                alt="Lenny cooks blog"
                sizes="100vw"
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                    maxHeight: "278px",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
            />

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
            <Stack spacing={3}>
                {blog.sections.map((section, index) => (
                    <Stack key={index} spacing={2}>
                        <Typography variant={section.titleVariant}>{section.title}</Typography>
                        <Typography variant="blogText">{section.text}</Typography>
                    </Stack>
                ))}
                <ContentsBlock items={blog.parts} />
                <Typography variant="blogText">
                    Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et
                    nulla a magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis
                    non. Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque
                    vitae, libero fermentum urna, nunc.
                </Typography>
                {blog.parts.map((part, index) => (
                    <BlogContentPart key={index} part={part} />
                ))}

                <KeepReadingList blogs={blog.keep_reading} />
            </Stack>
        </Stack>
    );
};

export default Blog;
