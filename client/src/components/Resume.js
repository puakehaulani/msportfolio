import React from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

// import { db } from '../base';
// const storage = getStorage();

export default function Resume() {
    // const [resumePDF, setResumePDF] = useState("")

    // async function getResume(db) {
    //     // const docRef = doc(db, "resume", "1");
    //     // const docSnap = await getDoc(docRef);

    //     // if (docSnap.exists()) {
    //     //     setResumePDF(docSnap.data().pdf)
    //     // } else {
    //     //     console.log("No such document!");
    //     // }

    //     getDownloadURL(ref(storage, 'resume/resume.pdf'))
    //         .then((url) => {

    //             // This can be downloaded directly:
    //             const xhr = new XMLHttpRequest();
    //             xhr.responseType = 'blob';
    //             xhr.onload = (event) => {
    //                 const blob = xhr.response;
    //             };
    //             xhr.open('GET', url);
    //             xhr.send();

    //             // // Or inserted into an <img> element
    //             // const img = document.getElementById('myimg');
    //             // img.setAttribute('src', url);
    //         })
    //         .catch((error) => {
    //             // Handle any errors
    //         });
    // }


    // useEffect(() => {
    //     getResume(db)
    //     console.log(resumePDF)
    // }, [])

    return (
        <Container fluid="true" id="resume" className="jumbotron bg-dark adjustRight mt-5">

            <h1 className="d-flex justify-content-end neonText rightHeader">Resume</h1>

            <Button className="btn btn-danger align-self-start mt-5 mr-5 resumeButton" role="button" href="./resume.pdf" download
            >
                Download
            </Button>

            <Image src="./images/resumeimg.png" alt="resume" className="mx-auto py-auto d-flex flex-wrap resumeImg" />

        </Container >
    )
}