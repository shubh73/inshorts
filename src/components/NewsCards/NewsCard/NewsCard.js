import React, { useState, useEffect, createRef } from "react";
import {
  Badge,
  Box,
  Button,
  Image,
  Spacer,
  Stack,
  VStack,
  Tag,
  Text,
  LinkBox,
  LinkOverlay,
  Skeleton,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);

  // To store elements -> for auto scroll
  const [elementRefs, setElementRefs] = useState([]);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  // Refs for each card - this is called only at the start to set up all references
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    window.scroll(0, 0);

    setElementRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  // Is called each time i, activeArticle or elementRef is changed
  useEffect(() => {
    if (i === activeArticle && elementRefs[activeArticle]) {
      scrollToRef(elementRefs[activeArticle]);
    }
  }, [i, activeArticle, elementRefs]);

  return (
    <>
      <Box
        ref={elementRefs[i]}
        w="340px"
        rounded="20px"
        overflow="hidden"
        boxShadow="md"
        bg={bgColor[colorMode]}
        transition="ease-in 0.2s"
        style={{ transform: `scale(${hover ? 1.01 : 1})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        cursor="pointer"
      >
        <LinkBox>
          <LinkOverlay href={url}>
            <Skeleton isLoaded={!loading}>
              <Image
                src={
                  urlToImage ||
                  "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                }
                alt="news"
                h={64}
              />
            </Skeleton>
            <Box pl={5} pr={5} pt={5}>
              <Stack align="baseline" isInline>
                <Badge
                  px={2}
                  variant="solid"
                  colorScheme="teal"
                  rounded="full"
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  {new Date(publishedAt).toDateString()}
                </Badge>
                <Spacer />
                <Badge
                  px={2}
                  variant="solid"
                  colorScheme="teal"
                  rounded="full"
                  fontWeight="semibold"
                  fontSize="sm"
                  isTruncated
                >
                  {source.name}
                </Badge>
              </Stack>
              <VStack align="baseline" h={52}>
                <Text as="h2" my={2} fontWeight="semibold" fontSize="lg">
                  {title}
                </Text>
                <Text noOfLines={4} fontWeight="light" fontSize="md">
                  {description}
                </Text>
              </VStack>
            </Box>
            <Box pl={5} pr={5} pt={0}>
              <Stack isInline my={4}>
                <Button size="sm" colorScheme="teal" href={url}>
                  Learn More
                </Button>
                <Spacer />
                <Tag
                  colorScheme="teal"
                  variant={activeArticle === i ? "solid" : "ghost"}
                >
                  {i + 1}
                </Tag>
              </Stack>
            </Box>
          </LinkOverlay>
        </LinkBox>
      </Box>
    </>
  );
};

export default NewsCard;
