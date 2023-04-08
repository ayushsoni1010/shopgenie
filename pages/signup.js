import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import supabase from "@/lib/supabase";
import { helpers } from "../helpers/index";
import toastHelper from "../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  VStack,
  FormErrorMessage,
  CircularProgress,
  Text,
  Grid,
  Image,
  Link,
  HStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import BaseBox from "@/components/layout/BaseBox";
import BaseColorModeSwitcher from "@/components/layout/BaseColorModeSwitcher";

const Login = () => {
  const router = useRouter();

  const text = useColorModeValue("light", "dark");

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    isError: false,
    errorEmailMessage: "",
    errorPasswordMessage: "",
  });

  const handleChangeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!data.email && !data.password) {
      setError({
        isError: true,
        errorEmailMessage: "Email is required",
        errorPasswordMessage: "Password is required",
      });
    }

    const { email, password } = data;

    if (helpers.validEmail(email) && data.email && password) {
      try {
        setLoading(true);
        // login(email, password);
        router.push("/dashboard");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        switch (err.code) {
          case "auth/Invalid-email":
            setError({
              ...error,
              isError: true,
              errorEmailMessage: "Please enter correct email address",
            });
            toastHelper.alertToastHandling(
              "Invalid email! Please enter your correct email"
            );
            break;

          case "auth/user-disabled":
            setError({
              ...error,
              isError: true,
            });
            toastHelper.alertToastHandling(
              "Unexpected error! Please try again later"
            );
            break;

          case "auth/user-not-found":
            setError({
              ...error,
              isError: true,
            });
            toastHelper.alertToastHandling(
              "User not found! Make sure you have signed up"
            );
            break;

          case "auth/wrong-password":
            setError({
              ...error,
              isError: true,
              errorPasswordMessage: "Please enter correct password",
            });
            toastHelper.alertToastHandling(
              "Wrong Password! Please enter correct password"
            );
            break;
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      <BaseBox h="100vh">
        <HStack justify={"space-between"}>
          <NextLink href="/">
            <HStack>
              <Image />
              <Text fontSize={"2xl"} fontWeight={"medium"}>
                Shop Genie
              </Text>
            </HStack>
          </NextLink>
          <BaseColorModeSwitcher />
        </HStack>
        <Grid gridTemplateColumns="auto auto">
          <Box
            w={{ sm: "base", md: "md" }}
            p="10"
            my="10"
            justifyContent="center"
            boxShadow={text === "dark" ? "2xl" : "none"}
            borderRadius={"md"}
            backgroundImage={"@/public//assets/bg-sign.jpg"}
          >
            <Heading fontSize="3xl" my="2">
              Welcome back
            </Heading>
            <Text fontSize="md" my="2">
              Sign in to your account
            </Text>
            <Box mt="10">
              <form onSubmit={handleLoginSubmit}>
                <VStack gap={2} align="left">
                  <FormControl
                    isRequired={error.isError}
                    isInvalid={
                      error.isError && error.errorEmailMessage.length !== 0
                    }
                  >
                    <FormLabel htmlFor="Email">Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChangeEmail}
                      placeholder="you@example.com"
                    />
                    {error.isError ? (
                      <FormErrorMessage>
                        {error.errorEmailMessage}
                      </FormErrorMessage>
                    ) : (
                      <></>
                    )}
                  </FormControl>
                  <FormControl
                    isRequired={error.isError}
                    isInvalid={
                      error.isError && error.errorPasswordMessage.length !== 0
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChangePassword}
                      placeholder="**********"
                    />
                    {error.isError ? (
                      <FormErrorMessage>
                        {error.errorPasswordMessage}
                      </FormErrorMessage>
                    ) : (
                      <></>
                    )}
                  </FormControl>

                  <Link
                    href="/reset-password"
                    fontSize="sm"
                    alt="Sign up"
                    colorScheme="purple"
                  >
                    Forgot Password?
                  </Link>

                  <Button
                    w="full"
                    type="submit"
                    variant="solid"
                    colorScheme="purple"
                  >
                    {loading ? (
                      <CircularProgress
                        isIndeterminate
                        size="24px"
                        color="gray.400"
                      />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </VStack>
              </form>
            </Box>
            <Text my="4" textAlign="center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" alt="Sign up" colorScheme="purple">
                Sign up
              </Link>
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Text
              zIndex="10"
              color="white"
              textAlign="center"
              position="absolute"
              fontSize="3xl"
              top={"32"}
              right="200"
              w="md"
              mx={"auto"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              neque fugit
              <Text w="48" m="auto" fontSize="lg" mt="6">
                Lorem ipsum dolor sit amet consectetur Enim, ipsum.
              </Text>
            </Text>
            <Box>
              <Image
                src={"/assets/genie.png"}
                h="75vh"
                mx={"auto"}
                mt="-10"
                alt="Background Image"
                zIndex="-6"
              />
            </Box>
          </Box>
        </Grid>
      </BaseBox>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
};

export default Login;
