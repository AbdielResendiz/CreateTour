import React, { useState } from "react";
import { Button, Modal, FormControl, Input, Center } from "native-base";

const ModalExample = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    // Lógica para guardar la información (puedes pasarlo a través de una prop si es necesario)
    console.log("Nombre:", name);
    console.log("Email:", email);
    onClose(); // Cierra el modal después de guardar
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input value={name} onChangeText={(value) => setName(value)} />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={(value) => setEmail(value)} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              Cancel
            </Button>
            <Button onPress={handleSave}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalExample;
