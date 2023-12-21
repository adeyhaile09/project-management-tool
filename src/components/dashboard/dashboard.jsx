import React, { useState } from 'react';
import { AppShell, Burger, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreateTeam from '../team/create-team';
import CreateProject from '../project/create-project';
import CreateWorkspace from '../workspace/create-workspace';
import ProjectList from '../project/project-list';
import Teams from '../team/all-team';
import WorkspaceList from '../workspace/workspace-list';

const Dashboard = () => {
  const [opened, { toggle }] = useDisclosure();

  const [openedP, { open: openP, close: closeP }] = useDisclosure(false);
  const [openedW, { open: openW, close: closeW }] = useDisclosure(false);

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
        <a href="https://flowbite.com" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            PMT
          </span>
        </a>
      </AppShell.Header>

      <AppShell.Navbar p="md " bg={'#4c5156'} className="text-white">
        <Modal
          size={'lg'}
          centered
          opened={openedP}
          onClose={closeP}
          withCloseButton={false}
        >
          <CreateProject />
        </Modal>
        <Modal
          size={'lg'}
          centered
          opened={openedW}
          onClose={closeW}
          withCloseButton={false}
        >
          <CreateWorkspace />
        </Modal>
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
