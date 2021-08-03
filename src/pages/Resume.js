import React from 'react'

export default function Resume() {
    return (
        <div id="resume" className="row d-flex mt-5">
            <div className="jumbotron col-md-10 bg-dark adjustRight">
                <a href="./resume.pdf" download>
                    <img src="./images/resumeimg.png" alt="resume" />
                    <br />
                    click to download
                </a>
            </div>
        </div >
    )
}