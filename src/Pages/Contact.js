import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import Layout from '../components/Layout';

class Contact extends React.Component {
  
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'sarah.e.montalbano',
      subject: subject,
      message_html: message,
     }
	 emailjs.send("service_qoratk8","template_d8kdyu9", templateParams, "user_47EUN0A8TQ4CCCBcQmTty").then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     this.resetForm()
 }
 
 resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render () {
  	return (
  	<>
  		<Layout>
  			<h1 className="p-heading1">Get in Touch</h1>
    <Form onSubmit={this.handleSubmit.bind(this)}>
      <FormGroup row>
        <Label for="name" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} id="name" placeholder="Joe Blow" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} id="email" placeholder="commenter@example.com" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Select</Label>
        <Col sm={10}>
          <Input type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} id="subject" placeholder="Subject">
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Message</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" value={this.state.messagehtml} onChange={this.handleChange.bind(this, 'messagehtml')} id="exampleText" placeholder="What's on your mind?"/>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button variant="primary" type="submit">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </Layout>
    </>
  )
}}


export default Contact;
