import Icon from '../Icons/Icon.jsx'
import {github} from '../Icons/Icon.jsx'
import {python} from '../Icons/Icon.jsx'
import {html} from '../Icons/Icon.jsx'
import {css} from '../Icons/Icon.jsx'
import {js} from '../Icons/Icon.jsx'
import {react} from '../Icons/Icon.jsx'
import {java} from '../Icons/Icon.jsx'
import './Skills.css'

function Skill(props) {
    return (
        <span className='skill-entry'>
            <Icon svg={props.svg} />
            <h6 className='skill-name' id="skill-name">{props.name}</h6>
        </span>
    )
}

function Skills() {
    return (
        <section className='section-container skills'>
            <h1 className='section-title skills'>👨‍💻 Programming Languages</h1>
            <span className='skills-container'>
                <Skill name={"Python"} svg={python} />
                <Skill name={"HTML"} svg={html} />
                <Skill name={"CSS"} svg={css} />
                <Skill name={"JS"} svg={js} />
                <Skill name={"React"} svg={react} />
                <Skill name={"Java"} svg={java} />
                {/* <Icon svg={github} />
                <Icon svg={github} />
                <Icon svg={github} />
                <Icon svg={github} />
                <Icon svg={github} />
                <Icon svg={github} />
                <Icon svg={github} /> */}
            </span>
        </section>
    )
}

export default Skills