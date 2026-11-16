import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SectionTitle from '../components/SectionTitle'
import WorkStep from '../components/workPage/WorkStep'
import rocket from '../assets/images/work-process-item-01.png'

const steps = [
    { id: 1, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
    { id: 2, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
    { id: 3, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
    { id: 4, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
    { id: 5, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
    { id: 6, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
]

const Work = () => {
    return (
        <section className="work" id="work">
            <Container>
                <SectionTitle
                    title="Work Process"
                    text="Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam."
                />
                <Row className="mt-5">
                    {steps.map((step) => (
                        <WorkStep
                            key={step.id}
                            image={step.image}
                            title={step.title}
                            text={step.text}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Work