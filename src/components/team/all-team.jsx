import { Box, Button, Checkbox, Modal, Stack, Text } from '@mantine/core';
import CreateTeam from './create-team';
import { useDisclosure } from '@mantine/hooks';
import { Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

function Teams() {
  const [openedT, { open: openT, close: closeT }] = useDisclosure(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'teams'));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTeamData(newData);
        console.log(teamData, newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const rows = teamData.map((element) => (
    <Table.Tr
      key={element.name}
      bg={
        selectedRows.includes(element.name)
          ? 'var(--mantine-color-blue-light)'
          : undefined
      }
    >
      <Checkbox
        aria-label="Select row"
        checked={selectedRows.includes(element.name)}
        onChange={(event) =>
          setSelectedRows(
            event.currentTarget.checked
              ? [...selectedRows, element.name]
              : selectedRows.filter((name) => name !== element.name)
          )
        }
      />
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Box className="flex ">
        <Text size="xl" variant="t3" className="flex-1">
          Teams
        </Text>
        <Button color="#f44336" variant="outline" onClick={openT}>
          Create Team
        </Button>
        <Modal
          size={'lg'}
          centered
          opened={openedT}
          onClose={closeT}
          withCloseButton={false}
        >
          <CreateTeam />
        </Modal>
      </Box>
      <Table stickyHeader stickyHeaderOffset={60} mt={20}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Team Name</Table.Th>
            <Table.Th>Email </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
export default Teams;
