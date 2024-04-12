import React, { useState } from "react";
import { Container, Text } from "@chakra-ui/react";
import FileUpload from "../components/FileUpload";

const Index = () => {
  const [uploadedData, setUploadedData] = useState(null);

  const handleUpload = (data) => {
    setUploadedData(data);
  };

  return (
    <Container maxW="container.lg">
      <FileUpload onUpload={handleUpload} />
      {uploadedData && <Text mt={8}>File uploaded and parsed successfully!</Text>}
    </Container>
  );
};

export default Index;
