

const Nav = ({minimal, authtoken, setShowModal, showModal, setIsSignUp }) => {
    const logo = 'https://source.unsplash.com/random/'
    const colorLogo = 'https://source.unsplash.com/random/'

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo:logo}/>
            </div>
            {!authtoken && !minimal && <button className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log in</button> }
        </nav>
    )
}

export default Nav