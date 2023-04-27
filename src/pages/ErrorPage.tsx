import React from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="ErrorPage align-items-center m-3">
                <h1 className="text-danger">Sorry, an error occurred! Here's the code: {error.status}</h1>
                <p className="text-danger">{error.statusText}</p>
                <Link to={"/"}>Go Home</Link>
            </div>
        );
    }

    return (
        <div className="ErrorPage">
            Sorry, an unknown error occurred!
        </div>
    );
}

export default ErrorPage;