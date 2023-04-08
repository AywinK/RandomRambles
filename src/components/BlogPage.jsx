import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

function BlogPage(props) {
    const {id, title, imageURL, textContentArr} = props;
    return (
        <Box>
        <Image w="100%" maxH={400} objectFit="cover" src={imageURL} alt={title} />
        <Container my={8} maxW="container.lg">
          <Heading as="h1" mb={4}>
            {title}
          </Heading>
          {textContentArr.map((paragraph, index) => (
            <Text key={index} mb={4}>
              {paragraph}
            </Text>
          ))}
        </Container>
      </Box>
    )
};

export default BlogPage;