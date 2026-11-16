import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/testi/TestimonialCard'
import testi from '../assets/images/testimonial-icon.png'

const testimonials = [
    {
        id: 1,
        image: testi,
        text: 'Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
        name: 'Catherine Soft',
        job: 'Managing Director',
    },
    {
        id: 2,
        image: testi,
        text: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
        name: 'Kelvin Wood',
        job: 'Digital Marketer',
    },
    {
        id: 3,
        image: testi,
        text: 'Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.',
        name: 'David Martin',
        job: 'Website Manager',
    },
]

const Testimonials = () => {
    return (
        <section className="testi mt-5 mb-5" id="testi">
            <Container>
                <SectionTitle
                    title="What do they say?"
                    text="Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero."
                />
                <Row className="mt-5">
                    {testimonials.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            image={item.image}
                            text={item.text}
                            name={item.name}
                            job={item.job}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials