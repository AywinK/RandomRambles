import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collectionRef } from "./helperFuncs/firebaseConfig";
import { onSnapshot, query } from "firebase/firestore";
import FeedCard from "./FeedCard";


function BlogsFeed() {

    const [orderFeedBy, setOrderFeedBy] = useState("recently created");
    const [blogsArr, setBlogsArr] = useState([]);

    const handleClick = (e) => {
        console.log(e);
        setOrderFeedBy(e.target.value);
    }

    console.log(collectionRef);

    useEffect(() => {
        const queryBlogs = query(collectionRef);
        const unsubscribeSnap = onSnapshot(queryBlogs, (snap) => {
            console.log("test");
            const blogs = [];
            snap.forEach((doc) => {
                blogs.push({ ...doc.data(), id: doc.id });
            });
            console.table(blogs);
            blogs.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
            setBlogsArr(blogs);
        });
        return () => unsubscribeSnap();
    }, [orderFeedBy]);

    console.log(blogsArr);


    return (
        <Container>

            <Flex
            justify="center"
            align="center"
            gap={5}
            mb={5}
            >

                <Text
                    mr={5}
                >Sort by:</Text>

                <Button
                    borderRadius={40}
                    colorScheme={((orderFeedBy === "recently created") ? "linkedin" : "whiteAlpha")}
                    onClick={handleClick}
                    value="recently created"
                >Recently Created</Button>

                <Button
                    borderRadius={40}
                    colorScheme={((orderFeedBy === "recently viewed") ? "linkedin" : "whiteAlpha")}
                    onClick={handleClick}
                    value="recently viewed"
                >Recently Viewed</Button>

            </Flex>

            <Container
            align="center"
            gap={5}
            >
                {blogsArr.map((blog, index) => <FeedCard key={index} title={blog.title} imageURL={blog.imageURL} textContentArr={blog.textContentArr} />)}
            </Container>
        </Container>
    )
};

export default BlogsFeed;