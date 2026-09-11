"use client"

import { ActionBar, Box, Button, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { LuShare, LuTrash2 } from "react-icons/lu"

export const ActionBarWithCustomOffset = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen((current) => !current)}>
        {open ? "Hide" : "Show"} Action Bar
      </Button>

      <ActionBar.Root open={open}>
        <Portal>
          <ActionBar.Positioner css={{ "--action-bar-offset": "5rem" }}>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                2 selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                <LuTrash2 /> Delete
              </Button>
              <Button variant="outline" size="sm">
                <LuShare /> Share
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>

      <Portal>
        <Box
          position="fixed"
          insetInline="0"
          bottom="0"
          height="16"
          display="grid"
          placeItems="center"
          bg="bg.panel"
          borderTopWidth="1px"
          zIndex="docked"
        >
          Bottom navigation
        </Box>
      </Portal>
    </>
  )
}
