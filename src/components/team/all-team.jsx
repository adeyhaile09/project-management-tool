import { Box, Button, Checkbox, Modal, Stack, Text } from '@mantine/core';
import CreateTeam from './create-team';
import { useDisclosure } from '@mantine/hooks';
import { Table } from '@mantine/core';
import { useState } from 'react';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Teams() {
  const [openedT, { open: openT, close: closeT }] = useDisclosure(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={
        selectedRows.includes(element.position)
          ? 'var(--mantine-color-blue-light)'
          : undefined
      }
    >
      <Checkbox
        aria-label="Select row"
        checked={selectedRows.includes(element.position)}
        onChange={(event) =>
          setSelectedRows(
            event.currentTarget.checked
              ? [...selectedRows, element.position]
              : selectedRows.filter((position) => position !== element.position)
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
