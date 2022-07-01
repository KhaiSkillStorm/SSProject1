
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

export const AppNav = () => {

return (
    <Nav>
        <NavSection>
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/flights"> View Flights</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/flights/create">Create</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/flights/delete">Delete </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/flights/update">Update</NavLink>
            </NavItem>
        </NavSection>
    </Nav>


);

}