import React, { Component } from 'react';
import './contact.css'; // Ensure your CSS is well-defined for these classes
import ReactGA from 'react-ga';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Form fields managed by React state
            email: '',
            title: '',
            message: '',
            // UI feedback states
            isSubmitting: false,
            submitSuccess: null, // true for success, false for error, null initially
            errorMessage: '',
        };
    }

    componentDidMount() {
        // Initialize Google Analytics and track pageview
        ReactGA.initialize('UA-174924337-1');
        // Robust pageview tracking with fallback
        if (this.props.location && this.props.location.pathname) {
            ReactGA.pageview(this.props.location.pathname);
        } else {
            console.warn("ReactGA: this.props.location.pathname is undefined. Using window.location.pathname fallback.");
            ReactGA.pageview(window.location.pathname);
        }
    }

    // Generic handler for input changes to keep state updated
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    // Basic client-side validation
    validateForm = () => {
        const { email, title, message } = this.state;
        if (!email.trim() || !title.trim() || !message.trim()) {
            this.setState({ errorMessage: 'All fields are required.' });
            return false;
        }
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.setState({ errorMessage: 'Please enter a valid email address.' });
            return false;
        }
        this.setState({ errorMessage: '' }); // Clear any previous error
        return true;
    };

    // Handle form submission
    handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        if (!this.validateForm()) {
            return; // Stop if validation fails
        }

        this.setState({ isSubmitting: true, submitSuccess: null, errorMessage: '' });

        // Simulate an API call (replace with actual Axios.post to your backend)
        try {
            // Example: Replace with your actual backend endpoint
            // const response = await Axios.post('/api/contact', {
            //     email: this.state.email,
            //     title: this.state.title,
            //     message: this.state.message,
            // });

            // For demonstration, simulate a successful response after a delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Assuming a successful response from your backend
            this.setState({
                submitSuccess: true,
                isSubmitting: false,
                // Optionally clear form fields on success
                email: '',
                title: '',
                message: '',
            });
            console.log('Form submitted successfully:', {
                email: this.state.email,
                title: this.state.title,
                message: this.state.message,
            });

        } catch (error) {
            console.error('Error submitting contact form:', error);
            this.setState({
                submitSuccess: false,
                isSubmitting: false,
                errorMessage: 'Failed to send message. Please try again later.',
            });
        }
    };

    render() {
        const { email, title, message, isSubmitting, submitSuccess, errorMessage } = this.state;

        return (
            <div className="wrapper">
                <h1 className="main-header-text">
                    Get In Touch
                </h1>
                {/* Use a <form> element for semantic correctness and proper submission handling */}
                <form className="middle" onSubmit={this.handleSubmit}>
                    {/* Display error message if any */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {/* Display success/failure message after submission */}
                    {submitSuccess === true && (
                        <p className="success-message">Your message has been sent successfully!</p>
                    )}
                    {submitSuccess === false && !errorMessage && (
                        <p className="error-message">There was an issue sending your message. Please try again.</p>
                    )}

                    <label htmlFor="email" className="name-text">Email</label>
                    <input
                        type="email" // Use type="email" for better mobile keyboard and basic browser validation
                        id="email"
                        name="email" // Add name attribute to match state keys
                        className="name"
                        placeholder="Eg. username@example.com"
                        value={email} // Controlled component: value comes from state
                        onChange={this.handleChange} // Update state on change
                        required // HTML5 validation: field is required
                    />

                    <label htmlFor="title" className="name-text">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title" // Add name attribute
                        className="name"
                        placeholder="Eg. Talks about collaborations"
                        value={title} // Controlled component
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="message" className="name-text">Message</label>
                    <textarea
                        id="message"
                        name="message" // Add name attribute
                        className="textarea"
                        placeholder="Type your message here..."
                        value={message} // Controlled component
                        onChange={this.handleChange}
                        required
                    />

                    <button
                        type="submit" // Specify type="submit" for the form button
                        className="submitbtn"
                        disabled={isSubmitting} // Disable button while submitting
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </div>
        );
    }
}

export default Contact;
