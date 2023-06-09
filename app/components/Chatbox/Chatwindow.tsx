import { Avatar, Box, Stack } from "@chakra-ui/react"
import { type } from "os"


export type MessageType = {isUser?: boolean, text: string, avatar?: string}
export const Chatwindow = ({messages}: {messages: MessageType[] }) => {
  return (
    <Stack direction={"column-reverse"} border="1px solid #000" h="300px" p={6} overflow="auto">
      {messages.map((message, i) => <Message key={i+message.text} data={message}/>)}
    </Stack>
  )
}

const Message = ({ data} : { data: {isUser?: boolean, text: string, avatar?: string}}) => {
  return (
    <Stack direction={data.isUser ? "row-reverse" : "row"}>
      <Avatar src={data.avatar}/>
      <Box>{data.text}</Box>
    </Stack>
  )
}