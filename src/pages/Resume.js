import React from 'react'

export default function Resume() {
    return (
        <div id="resume" className="col d-flex mt-5">
            <div className="jumbotron col-md-10 bg-dark adjustRight resume">
                <div className="d-flex justify-content-end text-nowrap rightHeader"><h1>Resume</h1></div>
                <div className="d-flex flex-wrap resumeImg">
                    <img src="./images/resumeimg.png" alt="resume" className="mx-auto py-auto" />
                    <a className="btn btn-danger align-self-start mt-5 mr-5 resumeButton" role="button" href="./resume.pdf"
                        download="resume.pdf">
                        Download
                    </a>
                </div>
            </div>
        </div >
    )
}