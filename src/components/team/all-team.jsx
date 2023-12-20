import { Button, Stack, Text } from '@mantine/core';

function Teams() {
  return (
    <Stack className="OrganizationList h-screen flex flex-col bg-default">
      <section className="flex flex-col py-4 md:py-7 md:px-8 xl:px-10 h-full overflow-y-auto items-center">
        <div className="divide-y max-w-xl w-full px-2 sm:px-0 pt-28">
          <div className="flex">
            <Text size="xl" variant="t3" className="flex-1">
              Team
            </Text>
            <Button color="#f44336" variant="outline" onClick={() => {}}>
              Create Team
            </Button>
          </div>
        </div>
      </section>
    </Stack>
  );
}
export default Teams;
