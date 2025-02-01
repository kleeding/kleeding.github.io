import Icon from '../Icons/Icon.jsx'
import {github} from '../Icons/Icon.jsx'
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