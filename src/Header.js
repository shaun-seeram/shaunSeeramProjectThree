import logo from "./images/logo.png";
import CartCorner from "./CartCorner";

function Header(props) {
    return (
        <header>
            <div className="wrapper headerFlex">
                <img src={logo}/>
                <div>
                    <p>{props.status ? "Welcome!" : "Please Log In"}</p>
                    <div className="headerFlex">
                    <button className="log" onClick={props.login}>{props.status ? "Log Out" : "Log In"}</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header