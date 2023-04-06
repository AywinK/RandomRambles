import { FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage, Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import isValidUrl from "./helperFuncs/isValidUrl";

function BlogForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const textContentArr = data.textContent.split("\n");




            if (data===6) {
                console.log(data);
                // const currentData = JSON.parse(data.blogsDB);
                data.push({
                    title: data.title,
                    imageURL: data.imageURL,
                    textContentArr: textContentArr
                });
                // writeData(JSON.stringify(data.blogsDB));
            } if (data) {
                // writeData(
                //     [{
                //         title: data.title,
                //         imageURL: data.imageURL,
                //         textContentArr: textContentArr
                //     }]
                // );
            }


        reset();
    };

    return (
        <Container
            maxW="600px"
            display="flex"
            flexDir="column"
            alignItems="center"
            gap={2}
            textAlign="center"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >

            <FormControl
                maxW="600px"
                display="flex"
                flexDir="column"
                alignItems="center"
                gap={2}
                textAlign="center"
                isRequired
                isInvalid={errors.title}
            >
                <FormLabel
                    htmlFor="title"
                >Blog Title</FormLabel>
                <Input
                    type="text"
                    {...register(
                        "title",
                        { required: true }
                    )}
                    placeholder="Blog Title"
                ></Input>
            </FormControl>

            <FormControl
                maxW="600px"
                display="flex"
                flexDir="column"
                alignItems="center"
                gap={2}
                textAlign="center"
                isRequired
                isInvalid={errors.imageURL}
            >
                <FormLabel
                    htmlFor="imageURL"
                >Add a link to image</FormLabel>
                <Input
                    type="text"
                    {...register(
                        "imageURL",
                        {
                            required: true,
                            validate: isValidUrl,
                        }
                    )}
                    placeholder="Image URL"
                ></Input>
                {errors.imageURL && <FormErrorMessage>{errors.imageURL.message}</FormErrorMessage>}
            </FormControl>

            <FormControl
                maxW="600px"
                display="flex"
                flexDir="column"
                alignItems="center"
                gap={2}
                textAlign="center"
                isRequired
                isInvalid={errors.textContent}
            >
                <FormLabel
                    htmlFor="textContent"
                >Blog Content</FormLabel>
                <Textarea
                    type="text"
                    {...register(
                        "textContent",
                        { required: true }
                    )}
                    placeholder="Enter your blog content here"
                    resize="vertical"
                    minH={200}
                />
            </FormControl>

            <Button
                bg="red.200"
                borderRadius="3xl"
                m={5}
                type="submit"
            >Submit Blog
            </Button>
        </Container>
    )
}

export default BlogForm