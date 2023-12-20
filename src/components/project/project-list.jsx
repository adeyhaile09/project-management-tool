import { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Box, Card, Text } from '@mantine/core';

const ProjectList = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setInfo(newData);
        console.log(info, newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [info]);

  return (
    <>
      <Box mt={20}>
        <center>
          <Text size="xl">Project Details</Text>
        </center>
        <Box
          mt={30}
          ml={80}
          mr={100}
          h={600}
          className="grid grid-cols-3 justify-center gap-8"
        >
          {info.map((data, index) => (
            <Card shadow="md" withBorder key={index} w={300}>
              <Text>Description: {data.projectContent}</Text>
              <Text>Title: {data.title}</Text>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectList;
