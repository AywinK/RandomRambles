
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';

function FeedCard(props) {

    const { title, imageURL, textContentArr } = props;

    return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  my={2}
  h={300}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={imageURL}
    alt={title}
  />

  <Stack>
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