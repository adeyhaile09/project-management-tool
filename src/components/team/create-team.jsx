import React, { useState } from 'react';
import { Card, Stack, Text } from '@mantine/core';
import AddTeam from './add-team';

export default function CreateTeam() {
  const [, setIsVisible] = useState();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text className="text-center" size="xl">
        <span className="font-semibold  "> Create your Team</span>
      </Text>

      <AddTeam setVisible={setIsVisible} />
      <span className="p-6">
        <span>
          Looking to join an existing team? Ask someone of that team to invite
          you and
        </span>
      </span>
    </Card>
  );
}
