// React components
import React, { useState } from 'react';

// Bootstrap dependencies components
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {

  const [id_empleado, setIdEmpleado] = useState('');
  const [nombre_empleado, setNombreEmpleado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Objeto con los datos del nuevo empleado
    const nuevoEmpleado = {
      id_empleado: id_empleado,
      nombre_empleado: nombre_empleado,
    };

    try {
      // Realiza una solicitud POST al servidor back-end en Vercel
      const response = await fetch('https://mi-backend.vercel.app/empleados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoEmpleado),
      });

      if (response.status === 200) {
        // Éxito: el empleado se agregó correctamente
        alert('Empleado agregado con éxito');
      } else {
        // Maneja otros códigos de estado (puede ser un error del servidor)
        console.error('Error al agregar empleado:', response.statusText);
      }
    } catch (error) {
      // Maneja errores de red u otros errores
      console.error('Error de red al agregar empleado:', error);
    }
  };

  return (
    <>
      <Container fluid>

        <Row className="p-1">
          <Col sm={12} md={5} className="border border-3 rounded border-warning">
            <p className="text-center fw-bold">Agregar</p>
            <div className="">
              <Form onSubmit={handleSubmit} className="p-1">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="idEmpleado">Id</Form.Label>
                  <Form.Control 
                    type="number"
                    id="idEmpleado"
                    value={id_empleado}
                    onChange={(e) => setIdEmpleado(e.target.value)}
                    required
                    placeholder="Ingrese el Id del empleado" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="nombreEmpleado">Nombre</Form.Label>
                  <Form.Control 
                    type="text"
                    id="nombreEmpleado"
                    value={nombre_empleado}
                    onChange={(e) => setNombreEmpleado(e.target.value)}
                    required 
                    placeholder="Ingrese el Nombre del empleado" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                Agregar
                </Button>
              </Form>
            </div>
          </Col>
          <Col sm={2}></Col>
          <Col sm={12} md={5} className="border border-success mb-1">
            <p className="text-center fw-bold">Consulta Individual</p>
          </Col>
        </Row>

        <Row className="p-1">
          <Col sm={12} md={5} className="border border-primary mb-1">
            <p className="text-center fw-bold">Modificar</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={12} md={5} className="border border-danger mb-1">
            <p className="text-center fw-bold">Eliminar</p>
          </Col>
        </Row>

        <Row className="p-1">
          <Col className="border border-success">
            <p className="text-center fw-bold">Consulta General</p>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App