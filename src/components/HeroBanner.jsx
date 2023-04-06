import { Grid, Image, Box, Heading } from "@chakra-ui/react";
import homeBanner from "../assets/images/homeBanner.jpg"

function HeroBanner(props) {
    const { title } = props;
    return (
        <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={0}
            m={3}
        >

            <Image
                src={homeBanner}
                gridColumn="1/3"
                gridRow="1/4"
                objectFit="cover"
                objectPosition="10% 10%"
                filter="auto"
                brightness="40%"
                borderRadius="2xl"
                maxH="400px"
                w="100vw"
            >
            </Image>

            <Box
                gridColumn="1/3"
                gridRow="2/3"
                zIndex={1}
                color="whiteAlpha.800"
            >
                <Heading
                    as="h1"
                    textAlign="center"
                >
                    {title}
                </Heading>
            </Box>

        </Grid>
    )
}

export default HeroBanner