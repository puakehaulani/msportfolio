import React from 'react'

export default function Resume() {
    return (
        <div id="resume" className="row d-flex mt-5">
            <div className="d-flex justify-content-end text-nowrap"><h3>Resume</h3></div>

            <div className="jumbotron col-md-10 bg-dark adjustRight">
                <div className="d-flex justify-content-between flex-wrap">
                    <img src="./images/resumeimg.png" alt="resume" />
                    <a className="btn btn-danger align-self-baseline" role="button" href="./resume.pdf"
                        download="resume.pdf">
                        Download
                    </a>
                </div>
            </div>
        </div >
    )
}