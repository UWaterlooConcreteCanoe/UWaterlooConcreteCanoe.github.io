import React from 'react';

function Contact() {
    
    // to update the embeded form, replace the src="link" in line 11 with the src link for the new embed

    return (
        <div className="Contact" style={{marginTop: "50px"}}>
            <div className="row justify-content-center text-center" style={{height:"100%"}}>
                <iframe width="640px" height="600px" title="join-form" src="https://forms.office.com/Pages/ResponsePage.aspx?id=h1o6cprzIkqSRz_CQMATlnO8OjhqoIRIvJhMsNGBHK5UREtBWlYzWlk0WDRINzJLUkdYOEc5NjNGUi4u&embed=true" style={{border: "none", maxWidth: "100%", maxHeight: "100vh"}}> </iframe>
            </div>
        </div>
    );
}

export default Contact;