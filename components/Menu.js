import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

function menu() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <div>
      <Tabs border="2px" rounded="lg" w="sm">
        <TabList>
          <Tab>Edit Card</Tab>
          <Tab>Add Card</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FormControl isInvalid={isError}>
              <FormLabel>Enter Card Id</FormLabel>
              <Input
                placeholder="Example: #1"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                ""
              ) : (
                <FormErrorMessage>Card Id is required!</FormErrorMessage>
              )}
            </FormControl>
          </TabPanel>
          <TabPanel>
            <FormControl>
              <FormLabel>Enter Name</FormLabel>
              <Input placeholder="Example: AJX" />
            </FormControl>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default menu;
