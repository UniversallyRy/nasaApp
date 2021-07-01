
import NextLink from 'next/link'
import { Image, chakra, Link, Text, TextProps, useColorModeValue, Heading, Box } from "@chakra-ui/react"

const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'

const EpicItem = ({ item, index }:any) => {

    return (
        <Box
            mx={3}
            py={2}
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
            maxW="xl"
            align='center'
        >
            <Heading>{ item.caption }</Heading>
            <Image
                rounded="lg"
                shadow="sm"
                priority
                src={ imageLink + item.image + `.png` }
                height={ 600 }
                width={ 600 }
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                placeholder="blur"
                alt={ item.title }
            />
            <Text m={2}>Lat: { item.centroid_coordinates.lat }</Text>
            <Text m={2}>Long: { item.centroid_coordinates.lon }</Text>
            <Text m={2}>Date Taken: { item.date }</Text>
            <NextLink passHref href={ `/epic/${ item.id = index }`}>
                <Link
                mt={3}
                bg="black"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.900" }}
                >
                View Solo
                </Link>
          </NextLink>
        </Box>  
    )
}

export default EpicItem
