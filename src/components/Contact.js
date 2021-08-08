
function Contact() {
    return (
        <>
            <form className="row g-3 p-5">
            <h2>Contact Me</h2>
                <div className="col-md-6">
                    <label for="inputFirst" className="form-label">First</label>
                    <input type="name" className="form-control" id="inputFirst" placeholder="Joe"></input>
                </div>
                <div className="col-md-6">
                    <label for="inputLast" className="form-label">Last</label>
                    <input type="name" className="form-control" id="inputLast" placeholder="Smith"></input>
                </div>
                <div className="col-12">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="joe.smith@email.com"></input>
                </div>
                <div className="col-12">
                    <label for="inputMessage" className="form-label">Message</label>
                    <textarea type="Message" className="form-control" id="inputMessage" placeholder="Great work!"></textarea>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-lg btn-block">Send</button>
                </div>
            </form>
        </>
    )
}

export default Contact;
