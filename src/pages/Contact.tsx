function Contact() {
    
    // to update the embeded form, replace the src="link" in line 11 with the src link for the new embed

    return (
        <div className="Contact" style={{marginTop: "30px", padding: "10%", alignContent: "center", minHeight: "80vh"}}>
            <div className="row">
                <h1>Contact</h1>

                <p>Have a question or want more information? Fill out the form below to get in touch with us!</p>
            </div>        
            <div className="row">
                <form className="col p-3" action="https://formsubmit.co/concretecanoe@uwaterloo.ca" method="POST">
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input className="row form-control" type="text" id="subject" name="subject" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input className="row form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="row form-control" type="email" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Please enter your message</label>
                        <textarea className="row form-control" id="message" name="email" required />
                    </div>
                    <button className="row btn btn-primary" type="submit">Send</button>
                </form> 
            </div>
        </div>
    );
}

export default Contact;
