import React from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import Header from '../layout/header';
import Footer from '../layout/footer';

const Home = () => {
  return (
    <div>
      <Header />

      <Box
        display={'flex'}
        // bg={'#ffa2e3'}
        className="w-full text-white bg-[#247e7d]"
        h={'100vh'}
      >
        <Box mt={100}>
          <Box ml={250}>
            <Text className="">
              <span className="text-[3rem] text-bold">
                Trello brings all your <br /> tasks, teammates, and <br /> tools
                together
              </span>
            </Text>
            <Text size="xl">
              Keep everything in the same place—even if your team isn’t.
            </Text>
            <br />
            <Box display={'flex'}>
              <TextInput w={300} size="md" placeholder="email" />
              <Button size="md" ml={20}>
                Sign up it's free!
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          mt={100}
          ml={100}
          style={{
            backgroundImage: `url('https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '40vw',
            height: '80vh',
          }}
        ></Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
