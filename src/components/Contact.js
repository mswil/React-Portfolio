import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ first: '', last: '', email: '', message: '' });
    const { first, last, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
          }
    }

    return (
        <>
            <form className="row g-3 p-5" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
                <div className="col-md-6">
                    <label htmlFor='First name' className="form-label">First</label>
                    <input type="text" defaultValue={first} className="form-control" onBlur={handleChange} name='First name' required></input>
                </div>
                <div className="col-md-6">
                    <label htmlFor='Last name' className="form-label">Last</label>
                    <input type="text" defaultValue={last} className="form-control" onBlur={handleChange} name='Last name' required></input>
                </div>
                <div className="col-12">
                    <label htmlFor='Email' className="form-label">Email</label>
                    <input type="email" defaultValue={email} className="form-control" onBlur={handleChange} name='Email' required></input>
                </div>
                <div className="col-12">
                    <label htmlFor='Message' className="form-label">Message</label>
                    <textarea defaultValue={message} className="form-control" onBlur={handleChange} name='Message' required></textarea>
                </div>

                {errorMessage && (
                    <div>
                        <p className="error">{errorMessage}</p>
                    </div>
                )}

                <div className="col-12">
                    <button type="submit" className="btn btn-lg btn-block">Send</button>
                </div>
            </form>
        </>
    )
}

export default Contact;
