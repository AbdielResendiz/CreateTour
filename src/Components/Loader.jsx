import { Box, Spinner, Text } from "native-base";

const Loader = ({ texto }) => {


    return (
        <Box alignSelf="center">
            <Text textAlign="center" fontSize={"lg"} my={2} bold>
                {texto}

            </Text>
            <Spinner size="xl" mb={20} />

        </Box>
    );
}
export default Loader; 