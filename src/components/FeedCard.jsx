
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';

function FeedCard(props) {

    const { title, imageURL, textContentArr } = props;

    const handleHover = () => "";

    return (
<Card
  className='card-grow'
  direction="row-reverse"
  overflow='hidden'
  variant='outline'
  my={2}
  h={360}
  minW={320}
>
  <Image
    objectFit='cover'
    w="45%"
    src={imageURL}
    alt={title}
  />

  <Stack
  my={1}
  >
    <CardBody>
      <Heading
      size='md'
      >{title}</Heading>

      <Text
      py='2'
      maxH="15ch"
      noOfLines={5}
      textOverflow="ellipsis"
      overflow="hidden"
      >{textContentArr[0]}</Text>
    </CardBody>

    {/* <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter> */}
  </Stack>
</Card>
    )
}

export default FeedCard;