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
        <span className={'skill-entry ' + props.cn}>
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
                <Skill cn={'python-skill'} name={"Python"} svg={python} />
                <Skill cn={'java-skill'} name={"Java"} svg={java} />
                <Skill cn={'html-skill'} name={"HTML"} svg={html} />
                <Skill cn={'css-skill'} name={"CSS"} svg={css} />
                <Skill cn={'js-skill'} name={"JS"} svg={js} />
                <Skill cn={'react-skill'} name={"React"} svg={react} />
                <Skill cn={'fastapi-skill'} name={"FastAPI"} svg={fastapi} />
                <Skill cn={'sqlite-skill'} name={"SQLite"} svg={sqlite} />
                <Skill cn={'postgres-skill'} name={"Postgres"} svg={postgres} />
                <Skill cn={'git-skill'} name={"Git"} svg={git} />
            </span>
        </section>
    )
}

export default Skills