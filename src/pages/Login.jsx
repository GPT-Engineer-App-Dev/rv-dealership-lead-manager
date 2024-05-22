import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="8px" boxShadow="lg">
        <Heading as="h2" size="lg" textAlign="center" mb={6}>Login</Heading>
        <form>
          <VStack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button type="submit" colorScheme="orange" width="full">Login</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;