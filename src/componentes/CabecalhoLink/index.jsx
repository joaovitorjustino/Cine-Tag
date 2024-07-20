import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
    color: white;
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
`

const CabecalhoLink = ({ url, children }) => {
    return (
        <NavLink to={url} className="Nav">
            {children}
        </NavLink>
    )
}

export default CabecalhoLink