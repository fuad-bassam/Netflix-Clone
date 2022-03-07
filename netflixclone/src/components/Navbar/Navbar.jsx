import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


export default function NavBar() {

    return (


        <>
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Netflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/fav">Favorite</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>


    )


};
