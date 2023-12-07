import React from 'react';
import { Center, Heading, Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';

const Blog = () => {

  const { t } = useTranslation("global");

  return (
    <Center flex={1} mt={10}>
      <View alignItems="center">
        <Heading mb="4" textAlign="center">
          {t('blog.titulo')}
        </Heading>
        <Text mb="4" textAlign="center">
          {t('blog.subtitulo')}
        </Text>
      </View>
    </Center>
  );
};

export default Blog;
