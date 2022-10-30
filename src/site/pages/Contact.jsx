import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../css/pages/contact.css";

export const Contact = () => {
      return (
            <div className="contact">
              <p className="heading__primary heading__primary-center">¿ Tienes alguna duda o quieres un DEMO ?</p>
        
              <div className="contact__main">
                <section className="contact__mainSection">
              <h1 className="heading__secondary">Contáctanos</h1>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre y Apellido</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                      <Form.Label>Numero de teléfono</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                      <Form.Label>
                        ¿Cuál de nuestros servicios te interesa más?
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
        
                    <Button className="ms-auto" variant="danger" type="submit">
                      Enviar
                    </Button>
                  </Form>
                </section>
                <section className="contact__mainSection">
                  <h2 className="heading__secondary">Información de VOZ TOTAL</h2>
                  <h3>Dirección en: </h3>
                  <ul className="mainSection_ul">
                    <li className="section__ul_item">
                      Anaxágoras 29, Piedad Narvarte, Benito Juárez, 03000 Ciudad de
                      México, CDMX
                    </li>
                    <li className="section__ul_item">
                      Avenida Armando Birlaín Shaffler 2001, Centro Sur, 76090
                      Querétaro, Qro.
                    </li>
                    <li className="section__ul_item">
                      Torre Magnia Corporate Center Calle 15 No. 503, Piso 7, Col.
                      Altabrisa, 97130 Mérida, Yuc.
                    </li>
                  </ul>
        
                  <div className="contact__mainSection_phones">
                    <h3 className="mainSection_phones_subtitle">Teléfonos:</h3>
                    <ul className="mainSection_ul">
                      <li className="section__ul_item">
                        <strong>Oficina:</strong>(55) 888 02 100
                      </li>
                      <li className="section__ul_item">
                        <strong>WhatsApp:</strong> <a href="https://wa.me/525569690965?text= " target="_blank">(55) 696 909 65</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mainSection_phones_subtitle">Correo electrónico</h3>
                    <a className="mainSection_email" href="mailto: contacto@voztotal.mx">contacto@voztotal.mx</a>
                  </div>
                </section>
                <div className="contact__schedule">
                  <h3 className="heading__secondary schedule-subtitle">Horario:</h3>
                  <p className="schedule-p">
                    <strong>Lunes - Viernes:</strong> 9:00am - 6:00pm
                  </p>
                  <p className="schedule-p">
                    <strong>Sábado:</strong> 10:00am - 1:00pm
                  </p>
                  <p className="schedule-p">
                    <strong>Domingo:</strong> Cerrado
                  </p>
                </div>
              </div>
            </div>
          );
        };
        