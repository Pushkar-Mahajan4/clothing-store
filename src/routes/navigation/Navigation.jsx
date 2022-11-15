import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from "..//../assets/crown.svg"
import "./navigation.styles.scss";

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link to="/" className="logo-container">
                <CrwnLogo/>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/sign-in">
                SIGN IN
            </Link>
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;