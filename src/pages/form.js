import { Box } from "@mui/system";
import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@mui/material";
import KeyStore from './Keystore';
import PrivateKey from "./PrivateKey";
import Phrase from "./Phrase";


const Form = () => {
  return (
    <Box
        paddingY={10}
    >
      <Container>
        <div className="tab-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <Tabs defaultActiveKey="profile">
                  <Tab eventKey="home" title="Keystore JSON">
                    <div className="tab-item-wrapper">
                      <KeyStore />
                    </div>
                  </Tab>

                  <Tab eventKey="profile" title="Private Key">
                    <div className="tab-item-wrapper">
                      <PrivateKey />
                    </div>
                  </Tab>

                  <Tab eventKey="contact" title="Phrase">
                    <div className="tab-item-wrapper">
                      <Phrase />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Form;
