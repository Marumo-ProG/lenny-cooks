// Next Components
import Link from "next/link";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import LinkText from "@/common/components/LinkText";

// Utils
import { Colors } from "@/common/constants";

const ContentsBlock = ({ items }) => {
    return (
        <Stack padding={4} spacing={2} sx={{ backgroundColor: Colors.background }}>
            <Typography variant="miniTitle">In this article</Typography>

            {items.map((item, index) => (
                <LinkText href={item.link} key={index}>
                    <Typography variant="content">
                        {index + 1}. {item.title}
                    </Typography>
                </LinkText>
            ))}
        </Stack>
    );
};

export default ContentsBlock;
