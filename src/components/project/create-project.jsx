import React, { useState } from 'react';
import { Box, Button, Card, Text, TextInput, Textarea } from '@mantine/core';
import { createProject } from '../../config/firebase';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [projectContent, setProjectContent] = useState('');
  const [error, setError] = useState({});

  const handleProject = (e) => {
    e.preventDefault();
    createProject(title, projectContent);
  };

  return (
    <Box className="flex items-center justify-center h-screen">
      <Card shadow="md" w={400} className="">
        <form className="" onSubmit={handleProject}>
          <Text className="">Create a New Project</Text>
          <Box className="">
            <TextInput
              type="text"
              name="title"
              label="Project Title"
              value={title}
              error={error.teamName}
              placeholder="Enter project title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Box>
          <Box className="">
            <Textarea
              name="projectContent"
              label="Project Content"
              value={projectContent}
              error={error.projectContent}
              placeholder="Enter project content"
              required
              onChange={(e) => {
                setProjectContent(e.target.value);
              }}
            />
          </Box>

          <Button w={'100%'} type="submit" mt={10} color="#247e7d">
            Create
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default CreateProject;
