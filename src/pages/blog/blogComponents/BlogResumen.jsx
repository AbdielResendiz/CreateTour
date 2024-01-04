import React from 'react';
import { Box, VStack, Text, Image, HStack } from 'native-base';

const BlogResumen = ({ titulo, foto, fecha }) => {
    return (
        <Box shadow={5} borderWidth="1" borderColor="coolGray.300" borderRadius="md" overflow="hidden">
            <Image source={{ uri: foto }} alt="Imagen del Blog" height="150" width="100%" />
            <VStack space={2} p="4">
                <Text fontWeight="bold" fontSize="md">
                    {titulo}
                </Text>
                <HStack alignItems="center" space={2}>
                    <Text color="coolGray.600" fontSize="xs">
                        Publicado el: {fecha}
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default BlogResumen;
