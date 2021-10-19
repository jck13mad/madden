import React, {Component} from 'react';
import './Contact.scss';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        const {  email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'Jack',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            'service_n0lecmf',
            'template_gfc70dr',
            templateParams,
            'user_F5ZZu6NGwdEt2qfpjZAdQ'
        )
        .then((result) => {
            console.log(result.text);
            alert(`Thank you! I'll get back to you soon.`);
        }, (error) => {
            console.log(error.text);
            alert(`Sorry, something went wrong. Contact me in one of the ways below.`);
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
    
    render(){
        return (
            <div className="contact" id="contact">
                <h1>Get in touch with me!</h1>
                <div className="containing">
                    <div className="top">
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup controlId="formBasicEmail">
                                <Label className="text-muted">Email address</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    className="text-primary"
                                    onChange={this.handleChange.bind(this, 'email')}
                                    placeholder="Enter email"
                                    required
                                />
                            </FormGroup >
                            <FormGroup controlId="formBasicName">
                                <Label className="text-muted">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    className="text-primary"
                                    onChange={this.handleChange.bind(this, 'name')}
                                    placeholder="Name"
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="formBasicSubject">
                                <Label className="text-muted">Subject</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    className="text-primary"
                                    value={this.state.subject}
                                    onChange={this.handleChange.bind(this, 'subject')}
                                    placeholder="Subject"
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="formBasicMessage">
                                <Label className="text-muted">Message</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        className="text-primary"
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this, 'message')}
                                        placeholder="How can I help?"
                                        required
                                    />
                            </FormGroup>
                            <Button id="submit" className="submit" type="submit" >Send It</Button>
                            
                        </Form>
                    </div>
                </div>
                <div className="bottom">
                    <ul>
                        <li><a href="https://twitter.com/jackathon3" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="mailto:jck13mad@gmail.com" target="_blank" rel="noopener noreferrer" alt="jck13mad@gmail.com">Email</a></li>
                        <li><a href="https://www.linkedin.com/in/jackcharlesmadden/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/jck13mad?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="https://dev.to/john_madden_13" target="_blank" rel="noopener noreferrer">Dev.to</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact;