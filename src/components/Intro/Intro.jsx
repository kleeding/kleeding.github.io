import Icon from '../Icons/Icon.jsx'
import {linkedin} from '../Icons/Icon.jsx'
import {email} from '../Icons/Icon.jsx'
import './Intro.css'

function Intro() {
    return (
        <section className="intro-container">
            <span className='intro-content'>
                <h1 className='intro-name'>Kent Leeding</h1>
                <h3 className='intro-tagline'>Software Developer</h3>
                <span className='intro-welcome-container'>
                    <h2 className='intro-welcome'>Welcome to my page </h2>
                    <h2 className='icon-on-top'>&nbsp;😄</h2>
                </span>
            </span>
            <span className='contact-info'>
                <Icon stylename={"contact-icon-centered"} link={"https://www.linkedin.com/in/kentleeding/"} svg={linkedin} />
                <Icon stylename={"contact-icon-centered"} link={"mailto:kent@leeding.dev"} svg={email} />
            </span>
        </section>
    )
}

export default Intro