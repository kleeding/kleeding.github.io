import Icon from '../Icons/Icon.jsx'
import github from '../Icons/Github.jsx'
import python from '../Icons/Python.jsx'
import html from '../Icons/HTML.jsx'
import css from '../Icons/CSS.jsx'
import js from '../Icons/JS.jsx'
import react from '../Icons/React.jsx'
import './Skills.css'

function Skill(props) {
    return (
        <span className='skill-entry'>
            <h6 className='skill-name'>{props.name}</h6>
            <Icon svg={props.svg} />
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