import Icon from '../Icons/Icon.jsx'
import {github} from '../Icons/Icon.jsx'
import {python} from '../Icons/Icon.jsx'
import {html} from '../Icons/Icon.jsx'
import {css} from '../Icons/Icon.jsx'
import {js} from '../Icons/Icon.jsx'
import {react} from '../Icons/Icon.jsx'
import {java} from '../Icons/Icon.jsx'
import {fastapi} from '../Icons/Icon.jsx'
import {git} from '../Icons/Icon.jsx'
import {postgres} from '../Icons/Icon.jsx'
import {sqlite} from '../Icons/Icon.jsx'
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
            <span className='section-title-container'>
                <h1 className='section-icon'>👨‍💻&nbsp;</h1>
                <h1 className='section-title skills'>Languages + Frameworks + Tools</h1>
            </span>
            <span className='skills-container'>
                <Skill name={"Python"} svg={python} />
                <Skill name={"Java"} svg={java} />
                <Skill name={"HTML"} svg={html} />
                <Skill name={"CSS"} svg={css} />
                <Skill name={"JS"} svg={js} />
                <Skill name={"React"} svg={react} />
                <Skill name={"FastAPI"} svg={fastapi} />
                <Skill name={"SQLite"} svg={sqlite} />
                <Skill name={"Postgres"} svg={postgres} />
                <Skill name={"Git"} svg={git} />
            </span>
        </section>
    )
}

export default Skills