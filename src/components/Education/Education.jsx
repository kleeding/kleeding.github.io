import './Education.css'
import data from './education_data'

function EdutcationEntry(props) {
    return (
            <span className='section-content'>
                <h2 className='education-location'>{props.entry.location}</h2>
                <h3 className='education-course'>{props.entry.course}</h3>
                <h4 className='education-grade'>{props.entry.grade}</h4>
            </span>
    )
}

function Education() {
    const educationElement = data.map((entry) => {
        return (
            <EdutcationEntry key={entry.id} entry={entry} />
        )
    })

    return (
        <section className='section-container education'>
            <span className='section-title-container'>
                <h1 className='section-icon'>👨‍🎓&nbsp;</h1>
                <h1 className='section-title'>Education</h1>
            </span>
            {educationElement}
        </section>       
    )
}

export default Education