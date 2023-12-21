import { Button, TextInput, rem } from '@mantine/core';
import React, { useState } from 'react';
import { createTeam } from '../../config/firebase';
import { IconAt } from '@tabler/icons-react';

const AddTeam = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error] = useState({});

  const handleCreateTeam = (e) => {
    e.preventDefault();
    createTeam(name, email);
  };

  return (
    <>
      <form onSubmit={handleCreateTeam}>
        <TextInput
          name="teamName"
          label="Team Name"
          error={error.name}
          placeholder="Enter team name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextInput
          mt="md"
          rightSectionPointerEvents="none"
          rightSection={icon}
          label="Your email"
          required
          placeholder="Your email"
          onChange={(e) => {
            setEmail(e.target.value);
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
