import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Loading from "./Loading";
import NewsCards from "./components/NewsCards/NewsCards";
import {
  Button,
  LinkBox,
  Spacer,
  useColorMode,
  useDisclosure,
  Wrap,
  WrapItem,
  Tag,
  Icon,
  TagLabel,
} from "@chakra-ui/react";
import { Stack, Flex, Box, Heading, LinkOverlay } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import {
  FaSun,
  FaMoon,
  FaInfo,
  FaUsers,
  FaNewspaper,
  FaRegNewspaper,
} from "react-icons/fa";
import wordsToNumbers from "words-to-numbers";
import "./App.css";

const alanKey =
  "4baadf286113f89f01994a830f6e95772e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        <Stack p={4}>
          <Flex w="100%">
            <LinkBox>
              <LinkOverlay href=".">
                <Button variant="ghost">
                  <Heading
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "teal.300" : "gray.900"}
                  >
                    <Icon as={FaRegNewspaper} mr={2} mb={1}></Icon>
                    Inshorts
                  </Heading>
                </Button>
              </LinkOverlay>
            </LinkBox>
            <Spacer />
            <Wrap spacing={3}>
              <WrapItem>
                <IconButton icon={<FaInfo />} onClick={onOpen}></IconButton>

                {/* Modal */}
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  size="md"
                  isCentered
                  motionPreset="slideInRight"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Instructions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {/* Accordion */}
                      <Accordion defaultIndex={[0]} allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Tag variant="ghost" p={0}>
                                  <TagLabel>Small Talk</TagLabel>
                                  <Icon
                                    as={FaUsers}
                                    ml={2}
                                    mt={0.3}
                                    fontSize="lg"
                                  ></Icon>
                                </Tag>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Smart News includes small talk just like Siri and
                            Alexa. You can click on the mic button to ask
                            questions such as
                            <Tag p={1} ml={1}>
                              How are you ?
                            </Tag>{" "}
                            <Tag p={1}>How old are you ?</Tag>{" "}
                            <Tag p={1}>Where do you live ?</Tag> and a lot more.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <Tag variant="ghost" p={0}>
                                  <TagLabel>News</TagLabel>
                                  <Icon
                                    as={FaNewspaper}
                                    ml={2}
                                    mt={0.8}
                                    fontSize="md"
                                  ></Icon>
                                </Tag>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            You can start off by clicking on the mic and asking{" "}
                            <Tag p={1}>What is this project ?</Tag> or{" "}
                            <Tag p={1} mr={1}>
                              What is this ?{" "}
                            </Tag>
                            to get a gist of what the project is about, and then
                            move on to asking multiple questions related to news
                            on any topic based on the commands shown. <br />
                            You can also ask Alan to open an article by saying{" "}
                            <Tag p={1}>Open article 4</Tag> as well as go back
                            using the command{" "}
                            <Tag p={1} mt={0.5}>
                              Go back.
                            </Tag>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </WrapItem>
              <WrapItem>
                <IconButton
                  icon={isDark ? <FaSun /> : <FaMoon />}
                  onClick={toggleColorMode}
                ></IconButton>
              </WrapItem>
            </Wrap>
          </Flex>
          <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </Stack>
      )}
    </div>
  );
};

export default App;
