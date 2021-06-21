import logo from "./images/logo.png";

function Header(props) {
    return (
        <header>
            <div className="wrapper headerFlex">
                <img src={logo} alt="acm logo"/>
                <div>
                    {props.status ? <p>Welcome {props.name}!</p> : 
                    <div>
                        <p>Enter Your Name</p>
                        <input type="text" id="newBook" onChange={props.test}/>
                    </div>}
                    <div className="headerFlex">
                    <button className="log" onClick={props.login}>{props.status ? "Log Out" : "Log In"}</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header