import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
       <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block text-light">404</span>
                        <div class="mb-4 lead text-light">The page you are looking for was not found.</div>
                        <Link to="/"><a class="btn btn-link text-light">Back to Home</a> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
