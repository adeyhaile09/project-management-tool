import React, { useState } from 'react';
import { Box, Button, Card, Text, TextInput, Textarea } from '@mantine/core';
import { createProject } from '../../config/firebase';
import ProjectList from './project-list';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [projectContent, setProjectContent] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleProject = (e) => {
    e.preventDefault();
    createProject(title, projectContent);
  };
  const handleProjectList = () => {
    navigate('/project-list');
  };

  return (
    <form onSubmit={handleProject}>
      <Text className="text-center">Create a New Project</Text>
      <Box>
        <TextInput
          type="text"
          name="title"
          label="Project Title"
          value={title}
          error={error.title}
          placeholder="Enter project title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Box>
      <Box>
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

      <Button
        w={'100%'}
        type="submit"
        mt={10}
        color="#247e7d"
        onClick={handleProjectList}
      >
        Create
      </Button>
    </form>
  );
};

export default CreateProject;
