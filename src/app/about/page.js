// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// Next Components
import Image from "next/image";

// Utils
import { Colors, PageGutter } from "@/common/constants";

// Images
import LennyImage from "@/assets/images/Lenny.jpg";

const About = () => {
    return (
        <Stack px={PageGutter} spacing={4} maxWidth="800px" alignSelf={"center"}>
            <Typography variant="bigTitle">About</Typography>
            <Typography variant="blogText">
                As an introvert, sometimes its hard to find a voice in a crowd, you need a place to
                write your thoughts, and access them, and even share with people easily. Its not to
                share your thoughts or document yourself, I am building this blog to be a portfolio
                of my thoughts, and to allow anyone to share their thoughts, experiences and advices{" "}
                <b>for free</b>
                <br />
                <br />
                Anyways What I am saying is I am not a talkative guy, so sometimes I feel like I
                want a platform to say what I want to say no matter how stupid, blunt or
                inapropriate it is, and also <b>cooking</b> on your own platform is better than
                those moderated and controlled platforms, its safe here, do it right here, lets{" "}
                <b>COOK</b> together.
            </Typography>
            <Stack alignItems={"center"}>
                <Image
                    src={LennyImage}
                    alt={"Lenny Thobejane"}
                    sizes="100vw"
                    style={{
                        height: 300,
                        width: 300,
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default About;
