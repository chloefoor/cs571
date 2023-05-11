import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Badger from "./Badger"
import { Container, Row, Col } from "react-bootstrap";

const FindMyBadgers = () => {

    const [badgers, setBadgers] = useState([]);

    function addABadger() {
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => {
                const person = data.results[0];
                console.log("Fetched a person!");
                console.log(person);
                setBadgers(oldBadgers => [...oldBadgers, {
                    name: person.name.first + " " + person.name.last,
                    email: person.email
                }]);
            });
    }

    // On load, add a badger.
    useEffect(() => {
        addABadger()
        addABadger()
        addABadger()
        addABadger()
    }, []);

    return <div>
        <h1>Find My Badgers</h1>
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
        <Button onClick={addABadger}>Add a Badger</Button>
        {
            badgers.map(badger => <Badger key={badger.email} name={badger.name} email={badger.email}/>)
        }
    </div>
}

export default FindMyBadgers;