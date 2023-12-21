import { Button, Modal, Stack, TextInput, rem } from '@mantine/core';
import React, { useState } from 'react';
import { createTeam } from '../../config/firebase';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { IconAt } from '@tabler/icons-react';

const AddTeam = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error] = useState({});
  const navigate = useNavigate();

  const handleCreateTeam = (e) => {
    e.preventDefault();
    createTeam(name, email);
  };
  const handleClick = () => {
    navigate('/all-team');
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
        <Button
          w={'100%'}
          type="submit"
          color="#247e7d"
          mt={10}
          // onClick={handleClick}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddTeam;
