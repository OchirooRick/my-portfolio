import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Chatcomposer } from "./Chatcomposer";
import { Chatwindow, MessageType } from "./Chatwindow";

export default function Chatbox() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      isUser:false,
      avatar: "https://gravatar.com/avatar/some_random_guy",
      text: "Таньд юугар туслах вэ?"
    }
  ]);

  const submitMessage = (input:string) => {
    setMessages(prev => [
      {
        isUser: true,
        avatar: "https://gravatar.com/avatar/some_random_guy",
        text: input
      },
      ...prev
    ]);
  }
  return (
    <Stack h="400px" w="800px" border="1px solid #000" p={6}>
      <Chatwindow messages={messages} />
      <Chatcomposer submitMessage={submitMessage}/>
    </Stack>
  )
}
