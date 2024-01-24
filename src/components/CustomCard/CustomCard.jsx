import React from 'react';
import { Card, Image, Text, Button, Box } from '@mantine/core';
import imageByIndex from '../../store/imageByIndex';

const CustomCard = ({ point }) => {
  const { id, name, shortName, description } = point;

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

      <Button color="#1ABC9C" fullWidth mt="md" radius="md">
        Подробнее
      </Button>
    </Card>
  );
};

export default CustomCard;
