import React from 'react';
import { Heading, Text, Box, View, Stack, Pressable } from 'native-base';
import { useTranslation } from 'react-i18next';
import BlogResumen from './blog/blogComponents/BlogResumen';
import Blog01 from './blog/Blog01';
import { useNavigate } from "react-router-dom";
const Blog = () => {

  const { t } = useTranslation(["global", "blog"]);
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      titulo: t('blog:blog01.titulo'),
      foto: 'https://createtours.com.mx/pictures/galeria/4x1-plus-08.jpg',
      fecha: '2024-01-01'
    },
    // Más blogs...
  ];

  return (
    <View mt={12} mb={20} w="100%"  >
      <Box alignItems="center" bg={"#449bab"} shadow={7} w="100%" mb={5} py={3}>
        <Heading mb="4" textAlign="center" color={"white"} fontSize="4xl">
          {t('global:blog.titulo')}
        </Heading>
        <Text mb="4" textAlign="center" color={"white"} fontSize={"lg"}>
          {t('global:blog.subtitulo')}
        </Text>
      </Box>
      <Stack direction={["column", "column", "row", "row"]}>
        <Box w={["80%", "60%"]} ml={["10%", "8%"]} mr={["10%", "1rem"]}>
          <Blog01 />
        </Box>

        <Box w={["90%", "90%", "30%", "30%"]}>
          <Heading mx={3}>
            {t('global:blog.entradas')}
          </Heading>
          {blogs.map((blog) => (
            <Pressable key={blog.id} onPress={() => { navigate('/Blog') }}>
              <BlogResumen
                titulo={blog.titulo}
                foto={blog.foto}
                fecha={blog.fecha}
              />
            </Pressable>
          ))}
        </Box>

      </Stack>

    </View>
  );
};

export default Blog;
