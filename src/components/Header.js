import trollFace from "../styles/troll-face.png"

function Header() {
    return (
        <nav>
            <div className="header-left">
                <img src={trollFace} alt="troll face" className="project-logo" />
                <h1 className="project-title">Meme Generator</h1>
            </div>
            <div className="header-right">
                <p className="project-description">React Course - Project 3</p>
            </div>
        </nav>
    )
}

export default Header;