/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unreachable */
import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export interface IModalProductProps {
  show: boolean;
  handleClose: any;
}

export default function ModalProduct({
  show,
  handleClose,
}: IModalProductProps) {
  console.log(show);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="car">
              <Form.Label>Price Product</Form.Label>
              <Form.Control as="input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
