import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import {Col, Row} from "react-bootstrap"
import "./Contacts.css"

const contactData = [
    {
        title: "Github",
        link: "https://github.com/Namagaii",
        linkText: "Follow me on github!"
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/noel-ramirez-3a7706219/",
        linkText: "Add me on LinkedIn!"
    },
    {
        title: "Email",
        link: "rnoel2125@gmail.com",
        linkText: "Email me if you'd like."
    }
]

const ContactsPage = () => {
  return (
      <div style={{height:"100%"}}>
          <Header />
          <div className='ContactsArea'>
            <Row style={{paddingTop:"15rem", paddingLeft:"7rem"}}>
                <Col>
                    <ContactCard props = {contactData[0]}/>
                </Col>
                <Col>
                    <ContactCard props = {contactData[1]}/>
                </Col>
                <Col>
                    <ContactCard props = {contactData[2]}/>
                </Col>
            </Row>
          </div>
          <Footer />
      </div>
  );
};

export default ContactsPage;
