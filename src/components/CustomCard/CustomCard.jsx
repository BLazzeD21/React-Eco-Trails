import React from 'react';
import { Card, Image, Text, Button, Box } from '@mantine/core';
import imageByIndex from '../../store/imageByIndex';
import { useNavigate } from 'react-router-dom';

const CustomCard = ({ point }) => {
  const navigate = useNavigate();
  const { id, name, shortName, description } = point;

  const buttonHandler = (id) => {
    const path = `/catalog/${id}`;
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" w={'100%'}>
      <Card.Section>
        <Image
          src={imageByIndex(id - 1)}
          height={200}
          alt={name}
        />
      </Card.Section>
      <Box p={10} ta>
        <Text
          fw={400}
          variant="gradient"
          gradient={{ from: '#1ABC9C', to: '#18947b', deg: 107 }}
        >
          {shortName.toUpperCase()}</Text>
      </Box>
      <Box px={10} ta>
        <Text size="sm" c="dimmed" truncate="end">
          {description}
        </Text>
      </Box>

      <Button
        color="#1ABC9C"
        fullWidth mt="md"
        radius="md"
        onClick={() => buttonHandler(id)}>
        Подробнее
      </Button>
    </Card>
  );
};

export default CustomCard;
