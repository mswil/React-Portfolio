
function Resume() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">

            <a className='download d-flex flex-wrap justify-content-center fs-3 btn' href='./assets/Molly_Wilson_Resume.pdf' download>

                <h4 className='w-100'>Download Resume</h4>
                <div className='icon'>
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>DocuSign</title><path d="M9.517 3.31h4.966v6.621h3.31L12 16.552 6.207 9.931h3.31V3.31zM0 19.034h24v1.655H0v-1.655z" /></svg>
                </div>
            </a>
        </div>
    );
}

export default Resume;
