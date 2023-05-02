import React from 'react';

function Join() {
    //frameborder="0" marginwidth="0" marginheight="0"
    //allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen
    return (
        <div className="About" style={{marginTop: "75px"}}>
            <div className="row justify-content-center text-center" style={{marginTop: "75px", marginBottom: "1.5%"}}><h1>Join Us</h1></div>
            <div className="row justify-content-center text-center" style={{height:"100%"}}>
                <iframe width="640px" height="600px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=h1o6cprzIkqSRz_CQMATlnO8OjhqoIRIvJhMsNGBHK5UMDlIU0VNVTdMSTVMTTlCRThNNlo4R0FISy4u&embed=true" style={{border: "none", maxWidth: "100%", maxHeight: "100vh"}} > </iframe>
            </div>
        </div>
    );
}

export default Join;