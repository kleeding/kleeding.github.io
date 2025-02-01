import './Icon.css'

function Icon(props) {
    return (
        <a className={props.stylename} href={props.link} target='_blank'>
            {props.svg}
        </a>
    )
}

export default Icon