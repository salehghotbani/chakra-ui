"use client"

import { Button, Popover, Portal, Stack } from "@chakra-ui/react"
import { useRef } from "react"

export const PopoverWithFinalFocus = () => {
  const finalFocusRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Stack align="flex-start">
      <Popover.Root finalFocusEl={() => finalFocusRef.current}>
        <Popover.Trigger asChild>
          <Button variant="outline" size="sm">
            Open popover
          </Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Body>
                <Popover.Title fontWeight="medium">Confirm changes</Popover.Title>
                Close the popover to move focus to the target button.
              </Popover.Body>
              <Popover.Footer>
                <Popover.CloseTrigger asChild position="static">
                  <Button size="sm">Close</Button>
                </Popover.CloseTrigger>
              </Popover.Footer>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>

      <Button ref={finalFocusRef} variant="subtle" size="sm">
        Final focus target
      </Button>
    </Stack>
  )
}
