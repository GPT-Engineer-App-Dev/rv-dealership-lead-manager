import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the RV Dealership Sales Lead Management Tool</Text>
        <Text>Manage your sales leads efficiently and effectively.</Text>
        <Link to="/login">
          <Button colorScheme="orange">Login</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;