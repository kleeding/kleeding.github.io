import Icon from '../Icons/Icon.jsx'
import linkedin from '../Icons/Linkedin.jsx'
import email from '../Icons/Email.jsx'
import './Intro.css'

function Intro() {
    return (
        <section className="intro-container">
            <span className='intro-content'>
                {/* <div className='img-container'></div> */}
                <h1 className='intro-name'>Kent Leeding</h1>
                <h3>Software Developer</h3>
                <h2>Welcome to my page 😄</h2>
            </span>
            <span className='contact-info'>
                <Icon link={"https://www.linkedin.com/in/kentleeding/"} svg={linkedin} />
                <Icon link={"mailto:kent@leeding.dev"} svg={email} />
            </span>
        </section>
    )
}

export default Intro