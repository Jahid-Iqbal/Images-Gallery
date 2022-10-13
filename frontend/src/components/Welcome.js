import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Images Gallery</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          This is a simple application of retrieving images. Please enter valid
          image name to get the image. Such as, car, phone etc.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" href="https://unsplash.com/" target="_blank">
          Learn More
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Welcome;
