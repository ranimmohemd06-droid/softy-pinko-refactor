import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SectionTitle from '../components/SectionTitle'
import BlogEntry from '../components/blogPage/BlogEntry'
import entry01 from '../assets/images/blog-item-01.png'
import entry02 from '../assets/images/blog-item-02.png'
import entry03 from '../assets/images/blog-item-03.png'

const entries = [
    {
        id: 1,
        image: entry01,
        title: 'Vivamus ac vehicula dui',
        text: 'Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.',
    },
    {
        id: 2,
        image: entry02,
        title: 'Phasellus convallis augue',
        text: 'Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.',
    },
    {
        id: 3,
        image: entry03,
        title: 'Nam gravida purus non',
        text: 'Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.',
    },
]

const Blog = () => {
    return (
        <section className="blog mt-5 mb-5" id="blog">
            <Container>
                <SectionTitle
                    title="Blog Entries"
                    text="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
                />
                <Row className="mt-5">
                    {entries.map((item) => (
                        <BlogEntry
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Blog