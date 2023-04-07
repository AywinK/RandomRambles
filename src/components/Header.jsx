import { Heading, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";

function Header(props) {
    console.log(props)
    return (
        <Flex
        as="header"
        bg="red.100"
        alignitems="center"
        justifyContent="space-between"
        p={3}
        >
            <Heading
            fontSize={["sm", "3xl"]}
            >{props.title}</Heading>
            <Navbar pages = {props.pages} />
        </Flex>
    )
}

export default Header