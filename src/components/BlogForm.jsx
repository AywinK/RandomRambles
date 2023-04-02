import { FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function BlogForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const textContentArr = data.textContent.split("\n");
        console.log(textContentArr);
        reset();
    };


    return (
        <FormControl
            maxW="600px"
            display="flex"
            flexDir="column"
            alignItems="center"
            gap={2}
            isRequired
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >

            <FormLabel>Blog Title</FormLabel>
            <Input
                type="text"
                {...register(
                    "title",
                    { required: true }
                )}
                placeholder="Blog Title"
            ></Input>

            <FormLabel>Add a link to image</FormLabel>
            <Input
                type="text"
                {...register(
                    "imageURL",
                    { required: true }
                )}
                placeholder="Image URL"
            ></Input>

            <FormLabel>Blog Content</FormLabel>
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

            <Button
                bg="red.200"
                borderRadius="3xl"
                m={5}
                type="submit"
            >Submit Blog
            </Button>
        </FormControl>
    )
}

export default BlogForm