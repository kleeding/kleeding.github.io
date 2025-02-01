import Icon from '/src/components/Icons/Icon.jsx'
import github from '/src/components/Icons/Github.jsx'
import './Projects.css'

function Project() {
    return (
        <section className='section-container'>
            <h1 className='section-title projects'>👨‍🚀 Projects</h1>
            <Icon stylename={"icon-centered"} link={"https://github.com/kleeding"} svg={github} />
        </section>
    )
}

export default Project