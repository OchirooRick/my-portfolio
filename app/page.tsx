"use client";
import { Heading, Text, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Chatbox from './components/Chatbox';
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Stack 
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}>
      <Heading>Hello World</Heading>
      <Text fontSize={"2xl"} color="black">This is my portfolio</Text>
      <Chatbox />
      </Stack>
    </main>
  )
}
1