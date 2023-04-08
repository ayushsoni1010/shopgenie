import { IconButton } from "@chakra-ui/button";
import { Fragment, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const BaseColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Fragment>
      <IconButton
        size="md"
        variant="outline"
        icon={<SwitchIcon />}
        colorScheme="purple"
        onClick={toggleColorMode}
        border="2px"
        _focus={{ boxShadow: "outline" }}
      />
    </Fragment>
  );
};

export default BaseColorModeSwitcher;
