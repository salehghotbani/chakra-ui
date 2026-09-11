import { Button, HStack, Text, VStack } from "@chakra-ui/react"
import { Tooltip } from "compositions/ui/tooltip"

const actions = ["Cut", "Copy", "Paste"]

export const TooltipWithInstantTransitions = () => {
  return (
    <VStack align="flex-start">
      <Text textStyle="sm" color="fg.muted">
        Move the pointer directly between the buttons.
      </Text>
      <HStack>
        {actions.map((action) => (
          <Tooltip
            key={action}
            content={action}
            contentProps={{
              css: {
                "&[data-instant]": { animationDuration: "0s" },
              },
            }}
          >
            <Button variant="outline" size="sm">
              {action}
            </Button>
          </Tooltip>
        ))}
      </HStack>
    </VStack>
  )
}
