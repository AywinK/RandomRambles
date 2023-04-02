import { Heading, Flex, Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom";

function Navbar(props) {
    console.log(props);
    return (
        <Flex
            as="nav"
            alignItems="center"
            justifyContent="space-between"
            gap={5}
            pr={[0, 1]}
            ml={[5, 0]}
        >
            {props.pages.map((pageObj, key) => <Link key={key}>{pageObj.name}</Link>)}
        </Flex>
    )
}

export default Navbar