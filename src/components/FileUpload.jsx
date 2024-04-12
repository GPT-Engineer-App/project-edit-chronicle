import React from "react";
import { Container, Heading, Input, Button, Text } from "@chakra-ui/react";

const FileUpload = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const jsonData = JSON.parse(content);
      onUpload(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <Container>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Upload JSON File
      </Heading>
      <Input type="file" onChange={handleFileChange} mb={4} />
      <Text>Select a JSON file to upload and parse.</Text>
    </Container>
  );
};

export default FileUpload;
