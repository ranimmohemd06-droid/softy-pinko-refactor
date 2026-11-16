import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SectionTitle = ({ title, text }) => {
    return (
        <Row>
            <Col className="title">
                <h3>{title}</h3>
                <p className="mt-4">{text}</p>
            </Col>
        </Row>
    )
}

export default SectionTitle