import { Button, Stack, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { createTeam } from '../../config/firebase';

const AddTeam = () => {
  const [teamName, setName] = useState('');
  const [error] = useState({});

  const handleCreateTeam = (e) => {
    e.preventDefault();
    createTeam(teamName);
  };

  return (
    <Stack>
      <form onSubmit={handleCreateTeam}>
        <TextInput
          name="teamName"
          label="Team Name"
          error={error.teamName}
          placeholder="Enter team name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button w={'100%'} type="submit" mt={10} color="#247e7d">
          Submit
        </Button>
      </form>
    </Stack>
  );
};

export default AddTeam;
