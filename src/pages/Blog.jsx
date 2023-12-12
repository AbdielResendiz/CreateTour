import React from 'react';
import { Center, Heading, Text, Box, Flex } from 'native-base';
import { useTranslation } from 'react-i18next';

const Blog = () => {

  const { t } = useTranslation("global");

  return (
    <Flex mx={5} mt={[20, 20, 10, 10]} mb={20} w="80%" >
      <Box alignItems="center">
        <Heading mb="4" textAlign="center">
          {t('blog.titulo')}
        </Heading>
        <Text mb="4" textAlign="center">
          {t('blog.subtitulo')}
        </Text>
      </Box>
    </Flex>
  );
};

export default Blog;
