import {useState} from 'react';
import './Navbar.css'

function Navbar() {
    const [isToggled, setIsToggled] = useState(false)

    const toggleTheme = () => {
        setIsToggled((toggled) => !toggled)
    }

    return (
        <nav>
            <a className='nav-title' href=''>LEEDING.dev</a>
            <div className='theme-icons'>
                <div className={`theme-toggle-container-sun ${isToggled ? "is-toggled" : ""}`} onClick={toggleTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 307.42">
                        <path fill="#919191" d="M488.15 227.15c8.59.08 10.71 4.88 10.71 10.79 0 5.96-2.15 10.79-10.91 10.79H29.55c-8.77 0-10.92-4.83-10.92-10.79 0-5.91 2.12-10.71 10.71-10.79h458.81zm-223.97 80.27c-8.76 0-10.91-4.83-10.91-10.79 0-5.96 2.15-10.79 10.91-10.79h236.9c8.77 0 10.92 4.83 10.92 10.79 0 5.96-2.15 10.79-10.92 10.79h-236.9zm-253.26 0C2.15 307.42 0 302.59 0 296.63c0-5.96 2.15-10.79 10.92-10.79h122.97c8.77 0 10.92 4.83 10.92 10.79 0 5.96-2.15 10.79-10.92 10.79H10.92z"/>
                        <path fill="#F8B62D" d="M82.23 192.69c-6.5 0-11.78-5.27-11.78-11.78s5.28-11.78 11.78-11.78h30.18c6.51 0 11.78 5.27 11.78 11.78s-5.27 11.78-11.78 11.78H82.23zm171.56-113c28.97 0 55.18 12.29 74.16 32.17 18.97 19.89 30.71 47.36 30.71 77.69 0 8.08-.83 15.95-2.41 23.53H151.28h.06c-1.58-7.58-2.42-15.45-2.42-23.53 0-30.34 11.73-57.8 30.72-77.69 18.98-19.87 45.2-32.17 74.15-32.17zm-93.85-40.26c-3.26-5.6-1.33-12.8 4.28-16.06 5.6-3.25 12.8-1.34 16.05 4.28l15.1 26.13c3.25 5.61 1.33 12.8-4.28 16.06-5.61 3.25-12.8 1.34-16.06-4.28l-15.09-26.13zm84.5-27.65c0-6.51 5.27-11.78 11.78-11.78S268 5.27 268 11.78v30.17c0 6.51-5.27 11.78-11.78 11.78s-11.78-5.27-11.78-11.78V11.78zm87.07 18.35c3.23-5.61 10.39-7.55 16.01-4.33 5.61 3.23 7.55 10.39 4.33 16.02l-15.1 26.12c-3.22 5.61-10.39 7.55-16.01 4.32-5.61-3.22-7.55-10.38-4.32-16.01l15.09-26.12zm66.19 59.35c5.6-3.25 12.8-1.33 16.05 4.28 3.26 5.61 1.35 12.8-4.27 16.06l-26.13 15.09c-5.61 3.26-12.8 1.33-16.06-4.27-3.25-5.61-1.34-12.81 4.28-16.06l26.13-15.1zm-297.12 16.14c-5.6-3.23-7.54-10.39-4.32-16.01 3.22-5.61 10.39-7.55 16.01-4.33l26.13 15.1c5.6 3.22 7.55 10.39 4.32 16.01-3.22 5.61-10.39 7.55-16.01 4.32l-26.13-15.09zm324.77 68.37c6.51 0 11.78 5.27 11.78 11.78 0 6.5-5.27 11.77-11.78 11.77h-30.17c-6.51 0-11.78-5.27-11.78-11.77 0-6.51 5.27-11.78 11.78-11.78h30.17z"/>
                    
                    </svg>
                </div>
                <div className={`theme-toggle-container-moon ${isToggled ? "is-toggled" : ""}`} onClick={toggleTheme}>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.56 122.88">
                        <path className="theme-moon-icon" d="M121.85,87.3A64.31,64.31,0,1,1,36.88.4c2.94-1.37,5.92.91,4.47,4.47a56.29,56.29,0,0,0,75.75,77.4l.49-.27a3.41,3.41,0,0,1,4.61,4.61l-.35.69ZM92.46,74.67H92A16.11,16.11,0,0,0,76.2,58.93v-.52a15.08,15.08,0,0,0,11-4.72,15.19,15.19,0,0,0,4.72-11h.51a15.12,15.12,0,0,0,4.72,11,15.12,15.12,0,0,0,11,4.72v.51A16.13,16.13,0,0,0,92.46,74.67Zm10.09-46.59h-.27a7.94,7.94,0,0,0-2.49-5.81A7.94,7.94,0,0,0,94,19.78v-.27A7.94,7.94,0,0,0,99.79,17a8,8,0,0,0,2.49-5.8h.27A8,8,0,0,0,105,17a8,8,0,0,0,5.81,2.49v.27A8,8,0,0,0,105,22.27a7.94,7.94,0,0,0-2.49,5.81Zm-41.5,8h-.41a12.06,12.06,0,0,0-3.78-8.82A12.06,12.06,0,0,0,48,23.5v-.41a12.07,12.07,0,0,0,8.82-3.78,12.09,12.09,0,0,0,3.78-8.82h.41a12.08,12.08,0,0,0,3.77,8.82,12.09,12.09,0,0,0,8.83,3.78v.41a12.09,12.09,0,0,0-8.83,3.78,12.08,12.08,0,0,0-3.77,8.82Z"/>
                    </svg>
                </div>
            </div>
            
            <div className={`theme-screen ${isToggled ? "is-toggled" : ""}`}></div>
        </nav>
    )
}

export default Navbar