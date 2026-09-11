"use client"

import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  createOverlay,
} from "@chakra-ui/react"

interface DialogProps {
  title: string
  description: string
}

const dialog = createOverlay<DialogProps>((props) => {
  const { title, description, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>{description}</Dialog.Description>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
})

export const OverlayWithHasCheck = () => {
  const openSettings = () => {
    if (dialog.has("settings")) return

    dialog.open("settings", {
      title: "Settings",
      description: "Only one settings dialog can exist at a time.",
    })
  }

  return (
    <>
      <Button onClick={openSettings}>Open settings</Button>
      <dialog.Viewport />
    </>
  )
}
