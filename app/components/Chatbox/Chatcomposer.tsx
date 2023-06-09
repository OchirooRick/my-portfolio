import { Button, Input, Stack, HStack} from "@chakra-ui/react"
import { useState } from "react"

export const Chatcomposer = ({submitMessage}:{submitMessage: (input: string) => void }) => {
  const [inpTxt, setInpTxt] = useState("");
  const submitHandle = () => {
    submitMessage(inpTxt)
    setInpTxt("")
  }
  return (
    <HStack   padding={3} border="1px solid #000" h="75px" spacing={2}>
      <Input onKeyDown={(e) => {
        if(e.key === "Enter") submitHandle()
      }} onChange={(e) => setInpTxt(e.target.value)} value={inpTxt} placeholder="Толгойнд чинь юу байна?"/>
      <Button onClick={submitHandle}>Send</Button>
    </HStack>
  )
}