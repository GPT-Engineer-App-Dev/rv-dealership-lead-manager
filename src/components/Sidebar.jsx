import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <Box position="fixed" left="0" top="0" height="100%" width="200px" bg="rgba(0, 0, 0, 0.8)" color="white" pt={5}>
      <VStack spacing={4} align="stretch">
        {items.map((item, index) => (
          <Link to={item.path} key={index}>
            <Box className="sidebar-item" p={4} _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}>
              <Text>{item.label}</Text>
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;