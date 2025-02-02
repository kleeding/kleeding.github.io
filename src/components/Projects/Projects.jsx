import Icon from '../Icons/Icon.jsx'
import {github} from '../Icons/Icon.jsx'
import './Projects.css'

function Project() {
    return (
        <section className='section-container'>
            <span className='section-title-container'>
                <h1 className='section-icon'>👨‍🚀&nbsp;</h1>
                <h1 className='section-title'>Projects</h1>
            </span>
            <Icon stylename={"icon-centered"} link={"https://github.com/kleeding"} svg={github} />
        </section>
    )
}

export default Project