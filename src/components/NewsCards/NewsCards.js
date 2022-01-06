import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard/NewsCard";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Badge,
  Box,
  Image,
  Stack,
  Text,
  Wrap,
  Tag,
  Tooltip,
  WrapItem,
  Skeleton,
} from "@chakra-ui/react";
import { FaMicrophoneAlt } from "react-icons/fa";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/4.png";
import Img3 from "../../assets/3.png";
import Img7 from "../../assets/7.png";

const NewsCards = ({ articles, activeArticle }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!articles.length) {
    return (
      <Wrap flexWrap="wrap" justify="center" p={5} spacing={7}>
        {/* Box 1 */}
        <WrapItem>
          <Box
            w="300px"
            rounded="20px"
            overflow="hidden"
            boxShadow="lg"
            bg={bgColor[colorMode]}
          >
            <Skeleton isLoaded={!loading} h={218}>
              <Image src={Img1} alt="" />
            </Skeleton>
            <Box p={5}>
              <Stack align="baseline" alignItems="center" h={28}>
                <Badge
                  variant="outline"
                  colorScheme="teal"
                  rounded="full"
                  px={2}
                  fontSize="md"
                  fontWeight="semibold"
                >
                  News by Countries
                </Badge>
                <Wrap spacing={1} justify="center" pt={3}>
                  <Tag>India</Tag>
                  <Tag>Australia</Tag>
                  <Tag>France</Tag>
                  <Tag>China</Tag>
                  <Tag>America</Tag>
                  <Tag>Germany</Tag>
                  <Tag>Japan</Tag>
                  <Tag>Saudi Arabia</Tag>
                </Wrap>
              </Stack>
            </Box>
            <Box p={5}>
              <Stack isInline justify="center">
                <Tooltip label="Try saying" fontSize="xs">
                  <Tag variant="ghost" size="md" p={0}>
                    <FaMicrophoneAlt cursor="pointer" />
                  </Tag>
                </Tooltip>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="none"
                  letterSpacing="wide"
                >
                  Top headlines from <Text as="u">India</Text>
                </Text>
              </Stack>
            </Box>
          </Box>
        </WrapItem>
        {/* Box 2 */}
        <WrapItem>
          <Box
            w="300px"
            rounded="20px"
            overflow="hidden"
            boxShadow="lg"
            bg={bgColor[colorMode]}
          >
            <Skeleton isLoaded={!loading} h={218}>
              <Image src={Img7} alt="" />
            </Skeleton>
            <Box p={5}>
              <Stack align="baseline" alignItems="center" h={28}>
                <Badge
                  variant="outline"
                  colorScheme="teal"
                  rounded="full"
                  px={2}
                  fontSize="md"
                  fontWeight="semibold"
                >
                  News by Categories
                </Badge>
                <Wrap spacing={1} justify="center" pt={3}>
                  <Tag>Business</Tag>
                  <Tag>Entertainment</Tag>
                  <Tag>General</Tag>
                  <Tag>Health</Tag>
                  <Tag>Science</Tag>
                  <Tag>Sports</Tag>
                  <Tag>Technology</Tag>
                </Wrap>
              </Stack>
            </Box>
            <Box p={5}>
              <Stack isInline justify="center">
                <Tooltip label="Try saying" fontSize="xs">
                  <Tag variant="ghost" size="md" p={0}>
                    <FaMicrophoneAlt cursor="pointer" />
                  </Tag>
                </Tooltip>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="none"
                  letterSpacing="wide"
                >
                  Give me the latest <Text as="u">health</Text> news
                </Text>
              </Stack>
            </Box>
          </Box>
        </WrapItem>
        {/* Box 3 */}
        <WrapItem>
          <Box
            w="300px"
            rounded="20px"
            overflow="hidden"
            boxShadow="lg"
            bg={bgColor[colorMode]}
          >
            <Skeleton isLoaded={!loading} h={218}>
              <Image src={Img3} alt="" />
            </Skeleton>
            <Box p={5}>
              <Stack align="baseline" alignItems="center" h={28}>
                <Badge
                  variant="outline"
                  colorScheme="teal"
                  rounded="full"
                  px={2}
                  fontSize="md"
                  fontWeight="semibold"
                >
                  News by Terms
                </Badge>
                <Wrap spacing={1} justify="center" pt={3}>
                  <Tag>Bitcoin</Tag>
                  <Tag>Smartphones</Tag>
                  <Tag>Gadgets</Tag>
                  <Tag>Stock Market</Tag>
                  <Tag>Coronavirus</Tag>
                  <Tag>Donald Trump</Tag>
                </Wrap>
              </Stack>
            </Box>
            <Box p={5}>
              <Stack isInline justify="center">
                <Tooltip label="Try saying" fontSize="xs">
                  <Tag variant="ghost" size="md" p={0}>
                    <FaMicrophoneAlt cursor="pointer" />
                  </Tag>
                </Tooltip>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="none"
                  letterSpacing="wide"
                >
                  What's up with <Text as="u">stock market</Text>
                </Text>
              </Stack>
            </Box>
          </Box>
        </WrapItem>
        {/* Box 4 */}
        <WrapItem>
          <Box
            w="300px"
            rounded="20px"
            overflow="hidden"
            boxShadow="lg"
            bg={bgColor[colorMode]}
          >
            <Skeleton isLoaded={!loading} h={218}>
              <Image src={Img2} alt="" />
            </Skeleton>
            <Box p={5}>
              <Stack align="baseline" alignItems="center" h={28}>
                <Badge
                  variant="outline"
                  colorScheme="teal"
                  rounded="full"
                  px={2}
                  fontSize="md"
                  fontWeight="semibold"
                >
                  News by Sources
                </Badge>
                <Wrap spacing={1} justify="center" pt={3}>
                  <Tag>CNN</Tag>
                  <Tag>Wired</Tag>
                  <Tag>BBC News</Tag>
                  <Tag>ABC</Tag>
                  <Tag>Fox News</Tag>
                  <Tag>ESPN</Tag>
                  <Tag>Buzzfeed</Tag>
                  <Tag>Bloomberg</Tag>
                </Wrap>
              </Stack>
            </Box>
            <Box p={5}>
              <Stack isInline justify="center">
                <Tooltip label="Try saying" fontSize="xs">
                  <Tag variant="ghost" size="md" p={0}>
                    <FaMicrophoneAlt cursor="pointer" />
                  </Tag>
                </Tooltip>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="none"
                  letterSpacing="wide"
                >
                  Give me the news from <Text as="u">CNN</Text>
                </Text>
              </Stack>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    );
  }

  return (
    <Wrap w="100%" spacing={4} justify="center" p={4}>
      {articles.map((article, i) => (
        <Box display="flex" flexWrap="wrap">
          <NewsCard article={article} activeArticle={activeArticle} i={i} />
        </Box>
      ))}
    </Wrap>
  );
};

export default NewsCards;
