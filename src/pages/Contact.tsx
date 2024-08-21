import emailjs from '@emailjs/browser';
import { useRef } from 'react'; 
import { InstagramEmbed } from 'react-social-media-embed';
import toast from 'react-hot-toast';


function Contact() {

    const form = useRef<any>();

    const sendEmail = (e : any) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_5wo78yq', 'template_2vtjusa', form.current, {
          publicKey: 'BtN5vWV_fRtsqAN9Z',
        })
        .then(
          () => {
            toast.success("Your form has been submitted!");
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error("There was an issue submitting your form. Please try again.");
            console.log('FAILED...', error.text);
          },
        );
    };
    
    // to update the embeded form, replace the src="link" in line 11 with the src link for the new embed

    return (
        <div style={{ display: 'flex' }}>
            <div className="Contact" style={{marginTop: "30px", padding: "5%", alignContent: "center", minHeight: "80vh", width: '60dvw'}}>
                <div className="row">
                    <h1>Contact</h1>

                    <p>Have a question or want more information? Fill out the form below to get in touch with us!</p>
                </div>        
                <div className="row">
                    <form ref={form} className="col p-3" onSubmit={sendEmail}>
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
                            <textarea className="row form-control" id="message" name="message" required />
                        </div>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://waterlooconcretecanoe.ca/#/contact" />
                        <button className="row btn btn-primary" type="submit">Send</button>
                    </form> 
                </div>
            </div>
            <div style={{ marginTop: '30px', paddingTop: '5%', justifyContent: 'center', width: '35dvw' }}>
                <InstagramEmbed url="https://www.instagram.com/waterlooconcretecanoe/" width={"100%"} />
            </div>
        </div>
    );
}

export default Contact;
