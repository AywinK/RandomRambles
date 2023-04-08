import { Button } from "@chakra-ui/button";
import capitalize from "./helperFuncs/capitalise";

function SortByButton(props) {

    const {value, handleClick, orderFeedBy} = props;

    return (
        <Button
            fontSize={["smaller", "initial"]}
            p={5}
            borderRadius={40}
            colorScheme={((orderFeedBy === {value}) ? "linkedin" : "whiteAlpha")}
            onClick={handleClick}
            value={value}
        >{capitalize(value)}</Button>
    )
};

export default SortByButton;