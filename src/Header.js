import logo from "./images/logo.png";

function Header(props) {
    return (
        <header>
            <div className="wrapper headerFlex">
                <img src={logo} alt="acm logo"/>
                <div>
                    {props.status ? <p>Welcome {props.name}!</p> : 
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <label htmlFor="userName">Enter Your Name</label>
                        <input type="text" id="userName" onChange={props.test}/>
                    </form>}
                    <button className="log" onClick={props.login}>{props.status ? "Log Out" : "Log In"}</button>
                </div>
            </div>
        </header>
    )
}

export default Header