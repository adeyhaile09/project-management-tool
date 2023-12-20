import { Button, Modal, Stack, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { createTeam } from '../../config/firebase';
import { useDisclosure } from '@mantine/hooks';

const AddTeam = () => {
  const [teamName, setName] = useState('');
  const [error] = useState({});

  const handleCreateTeam = (e) => {
    e.preventDefault();
    createTeam(teamName);
  };

  return (
    <>
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
        <Button w={'100%'} type="submit" color="#247e7d" mt={10}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddTeam;
