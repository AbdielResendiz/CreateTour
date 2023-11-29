import React from 'react';
import { Box, VStack, Text, Divider, Button , Modal, FormControl, Input} from 'native-base';
import { useState } from 'react';

const TipoTextoA = ({ texto, precio }) => (
  <VStack p={3}>
    <Text bold fontSize={{
                      base: "sm",
                      md: "md",
                      lg: "lg"
                    }}>${precio} USD</Text>
    <Text fontSize={{
                      base: "xs",
                      md: "sm",
                      lg: "md"
                    }} color={"muted.600"}>/ {texto} </Text>
  </VStack>
);



const PrecioComponent = ({ viaje }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  return (
    <Box flexDirection={"row"} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={4} m={1} justifyContent={"center"}>
      <VStack space={3} justifyContent={"center"}>
        <TipoTextoA texto="Adulto Extranjero" precio={viaje.PrecioAdultoExtranjero} />
        <TipoTextoA texto="Adulto Nacional" precio={viaje.PrecioAdultoNacional} />
      </VStack>
      <Divider orientation="vertical" h={"80%"} alignSelf={"center"} />
      <VStack space={3} justifyContent={"center"}>
        <TipoTextoA texto="Niño Extranjero" precio={viaje.PrecioInfantilExtranjero} />
        <TipoTextoA texto="Adulto Nacional" precio={viaje.PrecioInfantilNacional} />
      </VStack>
      <Button onPress={()=>setModalOpen(true)}>
          Modal
        </Button>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} style={{ zIndex: 9999 }}>
        {/* Contenido del modal */}

        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalOpen(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={() => {
                setModalOpen(false);
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        
        </Modal>

      
    </Box>
  );
};

export default PrecioComponent;
