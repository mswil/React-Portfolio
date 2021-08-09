
function Resume() {
    return (
        <div className='container row mt-4'>
            <div className='col m-4'>
                <ul>
                    <h4>Backend API Development</h4>
                    <li>Languages: JavaScript, Java, C89</li>
                    <li>Types: REST, GraphQL</li>
                    <li>Frameworks: Node.js, Express, Apollo Server</li>
<br></br>
                    <h4>Responsive Web Development</h4>
                    <li>Languages: HTML, CSS, JavaScript</li>
                    <li>Libraries: React, Bootstrap, Handlebars.js, jQuery, jQuery UI, Materialize, Bulma, Moment.js</li>
                    <li>Testing: Jest, React Testing Library</li>
                    <li>Additional Technologies: PWA, Service Workers, IndexedDB, JWT, Google Lighthouse</li>
<br></br>
                    <h4>Data Storage Development</h4>
                    <li>Database: MySQL, MongoDB</li>
                    <li>ORM/ODM: Sequelize, Mongoose</li>
<br></br>
                    <h4>Application Packaging and Deployment</h4>
                    <li>Build Management Platforms: CI/CD integrations on GitHub with Heroku and MongoDB Atlas</li>
                    <li>Build Tools: Webpack, Inquirer</li>
<br></br>
                    <h4>Application Design</h4>
                    <li>TDD and Agile Methodology</li>
                    <li>Design Patterns: MVC</li>
                    <li>API Integrations: Stripe</li>
                </ul>

            </div>
            <div class="col d-flex justify-content-center align-items-center">

                <a className='download d-flex flex-wrap justify-content-center fs-3 btn' href='./assets/Molly_Wilson_Resume.pdf' download>

                    <h4 className='w-100'>Download Resume</h4>
                    <div className='icon'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>DocuSign</title><path d="M9.517 3.31h4.966v6.621h3.31L12 16.552 6.207 9.931h3.31V3.31zM0 19.034h24v1.655H0v-1.655z" /></svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Resume;
