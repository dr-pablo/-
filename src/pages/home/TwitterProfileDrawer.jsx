import React from "react";
import ProfileTwitter from "./ProfileTwitter";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";
function TwitDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Twitter Profile
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        colorScheme="twitter"
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <ProfileTwitter />
          </DrawerBody>

          <DrawerFooter>@0xTraderMans</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default TwitDrawer;
