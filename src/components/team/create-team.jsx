import React, { useState } from 'react';
import { Box, Text } from '@mantine/core';
import AddTeam from './add-team';

export default function CreateTeam() {
  const [, setIsVisible] = useState();

  return (
    <Box>
      <Text className="text-center" size="xl">
        <span className="font-semibold  "> Create your Team</span>
      </Text>

      <AddTeam setVisible={setIsVisible} />
    </Box>
  );
}
