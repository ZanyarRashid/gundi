import Header1 from "./elements/header1";
import LoginBtn from "./elements/login-btn";

export default function Header(props) {
    return <header className="section header">
        <div className="row">
            <div className="column header-title">
                <Header1 title="Gundi"/>
            </div>
            <div className="column header-login">
                <LoginBtn />
            </div>
        </div>
    </header>;
  }