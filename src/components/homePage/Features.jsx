import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'
import featuredImg from '../../assets/images/featured-item-01.png'

const features = [
    {
        id: 1,
        image: featuredImg,
        title: 'Modern Strategy',
        text: 'Customize anything in this template to fit your website needs',
    },
    {
        id: 2,
        image: featuredImg,
        title: 'Best Relationship',
        text: 'Contact us immediately if you have a question in mind',
    },
    {
        id: 3,
        image: featuredImg,
        title: 'Ultimate Marketing',
        text: 'You just need to tell your friends about our free templates',
    },
]

const Features = () => {
    return (
        <Container className="cards">
            <Row>
                {features.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default Features