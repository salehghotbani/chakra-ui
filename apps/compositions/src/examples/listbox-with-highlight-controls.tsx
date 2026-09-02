"use client"

import {
  Button,
  ButtonGroup,
  Listbox,
  Stack,
  createListCollection,
  useListbox,
} from "@chakra-ui/react"

export const ListboxWithHighlightControls = () => {
  const listbox = useListbox({ collection: frameworks })

  return (
    <Stack gap="4" maxW="320px">
      <ButtonGroup size="sm" variant="outline" flexWrap="wrap">
        <Button onClick={() => listbox.highlightFirst()}>First</Button>
        <Button onClick={() => listbox.highlightPrevious()}>Previous</Button>
        <Button onClick={() => listbox.highlightNext()}>Next</Button>
        <Button onClick={() => listbox.highlightLast()}>Last</Button>
      </ButtonGroup>

      <Listbox.RootProvider value={listbox}>
        <Listbox.Label>Select framework</Listbox.Label>
        <Listbox.Content>
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.RootProvider>
    </Stack>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})
