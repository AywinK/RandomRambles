import { Button, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collectionRef } from "./helperFuncs/firebaseConfig";
import { onSnapshot, query, limit, orderBy } from "firebase/firestore";
import FeedCard from "./FeedCard";

function BlogsFeed() {

    const [orderFeedBy, setOrderFeedBy] = useState("recently created");
    const [blogsArr, setBlogsArr] = useState([]);

    const handleClick = (e) => {
        console.log(e);
        setOrderFeedBy(e.target.value);
    };

    function selectQuery(orderFeedBy) {
        const orderOptions = {
            "recently created": () => query(collectionRef, limit(6), orderBy("createdAt", "desc")),
            "most viewed": () => query(collectionRef, limit(6), orderBy("views", "desc")),
            "view all": () => query(collectionRef, orderBy("createdAt", "desc"))
        };

        const selectedOrderOption = orderOptions[orderFeedBy];

        if (!selectedOrderOption) {
            throw new Error("Invalid orderFeedBy value: " + orderFeedBy);
        }

        return selectedOrderOption();
    }


    useEffect(() => {
        const queryBlogs = selectQuery(orderFeedBy);
        const unsubscribeSnap = onSnapshot(queryBlogs, (snap) => {
            console.log("test");
            const blogs = [];
            snap.forEach((doc) => {
                blogs.push({ ...doc.data(), id: doc.id });
            });
            console.table(blogs);
            setBlogsArr(blogs);
        });
        return () => unsubscribeSnap();
    }, [orderFeedBy]);

    console.log(blogsArr);

    return (
        <Container
            display="flex"
            flexDir="column"
            alignItems="center"
            py={2.5}
        >

            <Flex
                justify="center"
                align="center"
                gap={5}
                mb={5}
                maxW="100%"
            >

                <Text
                    mr={1}
                >Sort by:</Text>

                <Button
                    fontSize={["smaller", "initial"]}
                    p={5}
                    borderRadius={40}
                    colorScheme={((orderFeedBy === "recently created") ? "linkedin" : "whiteAlpha")}
                    onClick={handleClick}
                    value="recently created"
                >Recently Created</Button>

                <Button
                    fontSize={["smaller", "initial"]}
                    p={5}
                    borderRadius={40}
                    colorScheme={((orderFeedBy === "view all") ? "linkedin" : "whiteAlpha")}
                    onClick={handleClick}
                    value="view all"
                >View All</Button>

            </Flex>

            <Grid
                align="center"
                // templateRows={[1, 2, 4]}
                templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                columnGap={5}
                rowGap={2.5}
            >
                {blogsArr.map((blog) => <FeedCard key={blog.id} id={blog.id} title={blog.title} imageURL={blog.imageURL} textContentArr={blog.textContentArr} />)}
            </Grid>
        </Container>
    )
};

export default BlogsFeed;