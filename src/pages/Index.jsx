import React from "react";
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, VStack, Table, Thead, Tbody, Tr, Th, Td, Avatar, Text, IconButton } from "@chakra-ui/react";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";

const Index = () => {
  // Mock data - in a real app, this data would come from your backend that's connected to Active Directory
  const employees = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", department: "Engineering", title: "Software Engineer" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", department: "Marketing", title: "Marketing Director" },
    // ... other employees
  ];

  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Employee Directory
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input placeholder="Search employees" />
        </InputGroup>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Employee</Th>
              <Th>Email</Th>
              <Th>Department</Th>
              <Th>Title</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee) => (
              <Tr key={employee.id}>
                <Td>
                  <Flex align="center">
                    <Avatar name={employee.name} src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcwODU2NzkwOHww&ixlib=rb-4.0.3&q=80&w=1080" mr={4} />
                    <Text>{employee.name}</Text>
                  </Flex>
                </Td>
                <Td>{employee.email}</Td>
                <Td>{employee.department}</Td>
                <Td>{employee.title}</Td>
                <Td>
                  <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                  <IconButton aria-label="Delete" icon={<FaTrashAlt />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default Index;
