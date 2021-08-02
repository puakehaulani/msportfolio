import React from "react";
// import List from "../components/List";

function About() {
    return (
        <div id="about">
            <div className="vertical-nav">
                {/* <List /> */}
            </div>
            <div className="row mt-5" id="about">
                <div className="jumbotron col-md-10 bg-dark">
                    <h2 >aloha, i'm lexi jack</h2>
                    <p>
                        I'm a full-stack web developer from O‘ahu, Hawai‘i, with a background in service and client relations.
                        I earned a Certificate in Web Development from the University of Washington in 2021.
                        My strengths include teamwork, listening, anticipating the needs of clients, and working in
                        fast paced environments.
                    </p><p>
                        My motivation comes from my insatiable curiosity and the endorphin rush from solving a
                        problem. I love to learn.
                    </p><p>
                        If I'm not coding, I'm probably outside - snowboarding, paddling outrigger canoes, or hanging out at a dog park .
                    </p><p>
                        I'm excited to find my technical niche. In the meantime, I plan to continue trying new things and taking on diverse projects.
                    </p>
                </div>

            </div>


        </div>
    );
}

export default About;
