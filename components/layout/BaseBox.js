import { Box } from "@chakra-ui/layout";
const { Fragment } = require("react");

const BaseBox = ({ children, ...props }) => {
  return (
    <Fragment>
      <Box
        px={{ base: "6", md: "6", lg: "20", sm: "10", xl: "28" }}
        pb="0"
        pt={{ base: "8", sm: "14", md: "20", lg: "10" }}
        {...props}
      >
        {children}
      </Box>
    </Fragment>
  );
};

export default BaseBox;
