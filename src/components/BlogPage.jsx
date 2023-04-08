import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { query, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { collectionRef } from "./helperFuncs/firebaseConfig";




function BlogPage(props) {

  const { id, title, imageURL, textContentArr } = props;

  console.log(id)

  // useEffect(() => {

  //   const queryBlogs = query(collectionRef);

  //   const unsubscribeSnap = onSnapshot(queryBlogs, (snap) => {
  //     const blogDoc = snap.docs.filter(doc => doc.id === id)[0];
  //     // Update specific document's field
  //       if (blogDoc) {
  //         const viewCount = blogDoc.data().viewCount || 0;
  //         console.log(blogDoc.data())
  //         const updatedViewCount = viewCount + 1;
  //         const specificDocRef = doc(collectionRef, id);
  //         updateDoc(specificDocRef, { viewCount: updatedViewCount });
  //       } else {
  //         console.log("Document does not exist!");
  //       }
  //   });



  //   return () => unsubscribeSnap();
  // }, [id]);

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