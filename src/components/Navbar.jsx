import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
            {props.pages.map((pageObj, key) => (<Link key={key} to={pageObj.route}>{pageObj.name}</Link>))}
        </Flex>
    )
}

export default Navbar