import { PinInput, Stack, Text } from "@chakra-ui/react"

export const PinInputWithEnterKeyHint = () => {
  return (
    <Stack align="flex-start">
      <PinInput.Root count={4} otp>
        <PinInput.HiddenInput />
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
      <Text textStyle="sm" color="fg.muted">
        Mobile keyboards show Next for the first three inputs and Done for the
        last input.
      </Text>
    </Stack>
  )
}
