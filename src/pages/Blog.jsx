import React from 'react';
import { Heading, Text, Box, Flex } from 'native-base';
import { useTranslation } from 'react-i18next';

const Blog = () => {

  const { t } = useTranslation("global");

  return (
    <Flex mx={5} mt={[12, 12, 24, 24]} mb={20} w="80%" >
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
