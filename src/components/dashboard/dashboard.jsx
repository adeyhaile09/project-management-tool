import React, { useState } from 'react';
import { AppShell, Box, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ProjectList from '../project/project-list';
import Teams from '../team/all-team';
import WorkspaceList from '../workspace/workspace-list';

const Dashboard = () => {
  const [opened, { toggle }] = useDisclosure();
  const [activeSection, setActiveSection] = useState('project');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg={'#4c5156'}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Box href="" className="flex items-center mt-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            PMT
          </span>
          <Button size="xs" radius={'md'} className="ml-32">
            <a href="/" className="text-white ">
              Logout
            </a>
          </Button>
        </Box>
      </AppShell.Header>

      <AppShell.Navbar p="md " bg={'#4c5156'} className="text-white">
        <Button
          variant="outline"
          color="white"
          w={200}
          ml={40}
          mt={20}
          onClick={() => handleButtonClick('team')}
        >
          Teams
        </Button>
        <Button
          variant="outline"
          color="white"
          w={200}
          ml={40}
          mt={20}
          onClick={() => handleButtonClick('project')}
        >
          Project
        </Button>
        <Button
          variant="outline"
          color="white"
          w={200}
          ml={40}
          mt={20}
          onClick={() => handleButtonClick('workspace')}
        >
          Workspace
        </Button>
      </AppShell.Navbar>

      <AppShell.Main>
        {activeSection === 'team' && <Teams />}
        {activeSection === 'project' && <ProjectList />}
        {activeSection === 'workspace' && <WorkspaceList />}
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
