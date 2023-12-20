import React, { useState, useEffect } from 'react';
import { Box, Card, Stack, Text } from '@mantine/core';
import AddTeam from './add-team';

export default function CreateTeam() {
  const [isVisible, setIsVisible] = useState();

  return (
    <Stack mt={200}>
      <Text className="text-center" size="xl" variant="t2">
        <span className="font-semibold  "> Create your Team</span>
      </Text>

      <Card shadow="sm" padding="lg" radius="md" withBorder w={400} ml={570}>
        <AddTeam setVisible={setIsVisible} />
        <span className="p-6">
          <span>
            Looking to join an existing team? Ask someone of that team to invite
            you and
          </span>
        </span>
      </Card>
    </Stack>
  );
}
