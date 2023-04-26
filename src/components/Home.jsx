import BadgeNotification from "./Notification"
import logo from "../assets/logo.png"

function Home() {
    return (
        <div>
            <div className="container">
                <header className="header2" >
                    <img src={logo} alt="Kognit" />
                    <div className="badge-notification">
                        <BadgeNotification />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Home
