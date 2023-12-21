import { Box, Button, List, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import CreateWorkspace from './create-workspace';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

const WorkspaceList = () => {
  const [openedW, { open: openW, close: closeW }] = useDisclosure(false);
  const [workspaceData, setWorkspaceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'workspaces'));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setWorkspaceData(newData);
        console.log(workspaceData, newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box className="flex">
        <Text className="flex-1">Workspaces</Text>
        <Button color="#f44336" variant="outline" onClick={openW}>
          Create
        </Button>
        <Modal
          size={'lg'}
          centered
          opened={openedW}
          onClose={closeW}
          withCloseButton={false}
        >
          <CreateWorkspace />
        </Modal>
      </Box>
      {workspaceData.map((data, index) => (
        <List>
          <List.Item>
            <Text>Name: {data.name}</Text>
          </List.Item>
        </List>
      ))}
    </>
  );
};

export default WorkspaceList;
