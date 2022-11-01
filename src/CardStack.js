import Card from "./Card";
import { firstProject, secondProject, thirdProject } from './data';


function CardStack() {


    function closeTab(string) {
        if (string !== "") {
            const project = document.querySelector(`.project-${string}`);
            project.style.display = 'none';
        }

    }

    function openTab(string) {
        const project = document.querySelector(`.project-${string}`);
        project.style.display = 'block';
    }


    return (
        <div>
            <div className='card-container'>
                <Card id="one" image={firstProject.image} title={firstProject.title} description={firstProject.description} openTab={openTab} />
                <Card id="two" image={secondProject.image} title={secondProject.title} description={secondProject.description} openTab={openTab} />
                <Card id="three" image={thirdProject.image} title={thirdProject.title} description={thirdProject.description} openTab={openTab} />
            </div>
            <div className="project-one" hidden>
                <div className="view-box">
                    <div className="box-content">
                        <div className="close" onClick={() => closeTab('one')}>X</div>
                        <h2>Choose Your Character</h2>
                        <h3>Description</h3>
                        <p>This website will display a character information when you click on their image.
                            The website also retrieves this characters from a public API called amiibo.
                        </p>
                        <br />
                        <h3>Users will be able to:</h3>
                        <br />
                        <ul style={{ fontWeight: "bold", listStylePosition: "inside" }}>
                            <li>The user will be able to select a character from the roster.</li>
                            <li>The user will be able to display the character information once a character it's click.</li>
                            <li>The user will be able to add characters to the roster clicking the '+' on the roster.</li>
                            <li>The user will be able to toggle a switch which will turn the background dark grey.</li>
                        </ul>

                        <br />
                        <h3>Links</h3>
                        <div className="links">
                            <ul style={{ listStylePosition: "inside", columns: "2", listStyleType: "none" }}>
                                <li><a href="https://github.com/Jafet19/Choose-Your-Character-" target="_blank">Github</a></li>
                                <li><a href="" target="_blank">Website</a></li>
                            </ul>
                        </div>
                        <br />
                        <label style={{ fontWeight: "lighter", fontSize: "17px" }}>Created by Joshua Campos, Jafet Reyes, Adriel Puello</label>
                    </div>
                </div>
            </div>

            <div className="project-two" hidden>
                <div className="view-box">
                    <div className="box-content">
                        <div className="close" onClick={() => closeTab('two')}>X</div>
                        <h2>iShopping App</h2>
                        <h3>Description</h3>
                        <p>This is a shopping website app that will enable users to shop for items and place and order.</p>
                        <br />
                        <h3>Users will be able to:</h3>
                        <br />
                        <ul style={{ fontWeight: "bold", listStylePosition: "inside" }}>
                            <li>Create an account.</li>
                            <li>Log into the website with their credentials.</li>
                            <li>Add items to Cart.</li>
                            <li>View the cart and place an order.</li>
                            <li>View account information and delete their account if they want to.</li>
                        </ul>

                        <br />

                        <h3>Admins will be able to:</h3>
                        <br />
                        <ul style={{ fontWeight: "bold", listStylePosition: "inside" }}>
                            <li>Log into the website with their credentials.</li>
                            <li>Add items to Cart.</li>
                            <li>View the cart and place an order.</li>
                            <li>View account information.</li>
                            <li>View the current users that have an account in the website.</li>
                            <li>Remove/Delete users as well as make them admin.</li>
                            <li>Delete items.</li>
                            <li>Add items.</li>
                        </ul>
                        <br />

                        <label style={{ fontWeight: "bold" }}>Admin Credentials: Username: admin, Password: admin</label>
                        <br />

                        <br />
                        <h3>Links</h3>
                        <div className="links">
                            <ul style={{ listStylePosition: "inside", columns: "2", listStyleType: "none" }}>
                                <li><a href="https://github.com/jc0808/ishopping-app" target="_blank">Github</a></li>
                                <li><a href="https://ishopping-app.netlify.app/" target="_blank">Website</a></li>
                            </ul>
                        </div>
                        <br />
                        <label style={{ fontWeight: "lighter", fontSize: "17px" }}>Created by me</label>
                    </div>
                </div>
            </div>

            <div className="project-three" hidden>
                <div className="view-box">
                    <div className="box-content">
                        <div className="close" onClick={() => closeTab('three')}>X</div>
                        <h2>Game Review Website</h2>
                        <h3>Description</h3>
                        <p>The focus of this project is building a Sinatra API backend that uses Active Record
                            to access and persist data in a database, which will be used by a separate React frontend
                            that interacts with the database via the API.</p>
                        <br />
                        <p>For our project, we made a Game review site, where users can login, look at games from our server, and leave reviews for games.</p>
                        <br />
                        <h3>Users will be able to:</h3>
                        <br />
                        <ul style={{ fontWeight: "bold", listStylePosition: "inside" }}>
                            <li>Create an account.</li>
                            <li>Log into the website with their credentials.</li>
                            <li>Select and view a game.</li>
                            <li>View reviews posted by other users and be able to write reviews.</li>
                            <li>View account information and delete their account if they want to.</li>
                        </ul>

                        <br />

                        <br />
                        <h3>Links</h3>
                        <div className="links">
                            <ul style={{ listStylePosition: "inside", columns: "2", listStyleType: "none" }}>
                                <li><a href="https://github.com/itosam/phase-3-project/tree/main" target="_blank">Github</a></li>
                                <li><a href="https://itosam.github.io/phase-3-project/" target="_blank">Website</a></li>
                            </ul>
                        </div>
                        <br />
                        <label style={{ fontWeight: "lighter", fontSize: "17px" }}>Created by Joshua Campos, Sam Ito, Ismael Aceves</label>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default CardStack;