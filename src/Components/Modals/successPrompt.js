import React from "react";
import { ReactComponent as MyIcon } from "../../Assests/svg/reset-success-icon.svg";
import { ReactComponent as MyIcon2 } from "../../Assests/svg/icons8-cancels.svg";
import {
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Spacer,
    Text,
} from "@chakra-ui/react";

export const SuccessPrompt = ({ isOpen, onClose, title, content }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody h="100%">
                        <Flex flexDir="column">
                            <Flex w="100%" justifyContent="flex-end" mb="21px">
                                <IconButton
                                    icon={<MyIcon2 />}
                                    onClick={onClose}
                                    variant="unstyled"
                                    _focus={{
                                        outline: "none",
                                        boxShadow: "none",
                                    }}
                                />
                            </Flex>
                            <Flex justifyContent="center">
                                <MyIcon style={{ width: "70px", height: "70px" }} />
                            </Flex>
                            <Flex flexDir="column" alignItems="center" mt="22px">
                                <Text mb="22px" fontSize="24px" fontWeight="500" color="#000">
                                    {title}
                                </Text>
                                <Text mb="34px" textAlign="center">
                                    {content}
                                </Text>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};