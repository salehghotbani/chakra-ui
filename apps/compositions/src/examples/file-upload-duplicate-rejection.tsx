"use client"

import { Button, FileUpload, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { HiUpload } from "react-icons/hi"

export const FileUploadDuplicateRejection = () => {
  const [duplicateFile, setDuplicateFile] = useState<string | null>(null)

  return (
    <Stack align="flex-start">
      <FileUpload.Root
        maxFiles={5}
        onFileAccept={() => setDuplicateFile(null)}
        onFileReject={(details) => {
          const duplicate = details.files.find((item) =>
            item.errors.includes("FILE_EXISTS"),
          )
          setDuplicateFile(duplicate?.file.name ?? null)
        }}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Trigger asChild>
          <Button variant="outline" size="sm">
            <HiUpload /> Upload files
          </Button>
        </FileUpload.Trigger>
        <FileUpload.List showSize clearable />
      </FileUpload.Root>

      {duplicateFile && (
        <Text role="alert" color="fg.error" textStyle="sm">
          {duplicateFile} has already been added.
        </Text>
      )}
    </Stack>
  )
}
