import './Icon.css'

export default function Icon(props) {
    return (
        <a className={props.stylename} href={props.link} target='_blank'>
            {props.svg}
        </a>
    )
}

export const linkedin = (
    <svg className='section-icon' width="60" height="60" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><path className='section-icon' d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/></svg>
)

export const email = (
    <svg width="60" height="60" viewBox="0 0 122.88 88.86" xmlns="http://www.w3.org/2000/svg"><path className="section-icon" d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/></svg>
)

export const github = (
    <svg className='section-icon' width="75" height="75"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
)

export const python = (
    <svg className='icon-skills' viewBox="0 0 121.54 122.88" xmlns="http://www.w3.org/2000/svg"> 
        <path className='section-icon' d="M60.04,0c-5.01,0.02-9.8,0.45-14.01,1.2C33.63,3.39,31.38,7.98,31.38,16.44v11.17h29.32v3.72H31.38h-11 c-8.52,0-15.98,5.12-18.31,14.86c-2.69,11.17-2.81,18.13,0,29.79c2.08,8.68,7.06,14.86,15.58,14.86h10.08V77.46 c0-9.68,8.37-18.21,18.31-18.21h29.28c8.15,0,14.66-6.71,14.66-14.9V16.44c0-7.94-6.7-13.91-14.66-15.24 C70.28,0.36,65.06-0.02,60.04,0L60.04,0z M44.19,8.99c3.03,0,5.5,2.51,5.5,5.6c0,3.08-2.47,5.57-5.5,5.57 c-3.04,0-5.5-2.49-5.5-5.57C38.69,11.5,41.15,8.99,44.19,8.99L44.19,8.99z"/>
        <path className='section-icon' d="M93.63,31.33v13.02c0,10.09-8.56,18.59-18.31,18.59H46.04c-8.02,0-14.66,6.86-14.66,14.9v27.91 c0,7.94,6.91,12.62,14.66,14.9c9.28,2.73,18.18,3.22,29.28,0c7.38-2.14,14.66-6.44,14.66-14.9V94.58H60.69v-3.72h29.28h14.66 c8.52,0,11.69-5.94,14.66-14.86c3.06-9.18,2.93-18.01,0-29.79c-2.11-8.48-6.13-14.86-14.66-14.86H93.63L93.63,31.33z M77.16,102.02c3.04,0,5.5,2.49,5.5,5.57c0,3.09-2.46,5.6-5.5,5.6c-3.03,0-5.5-2.51-5.5-5.6 C71.66,104.51,74.13,102.02,77.16,102.02L77.16,102.02z"/>
    </svg>
)

export const html = (
    <svg className='icon-skills' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.36 122.88">
        <path className='section-icon' d="M0,0l9.86,110.59l44.25,12.29l44.37-12.3L108.36,0L0,0L0,0L0,0z M86.89,36.18h-51.9l1.24,13.89l49.43,0 l-3.72,41.64l-27.82,7.71l-27.79-7.71l-1.9-21.31h13.62l0.97,10.83l15.11,4.07l0.03-0.01l15.11-4.08l1.57-17.59l-47.01,0 l-3.65-41.02h67.94L86.89,36.18L86.89,36.18L86.89,36.18L86.89,36.18z"/>
    </svg>
)

export const css = (
    <svg className='icon-skills' viewBox="0 0 296297 333333" xmlns="http://www.w3.org/2000/svg">
        <path className='section-icon' d="M268517 300922l-120369 32411-120371-32411L0 0h296297z"/>
        <path className='section-icon background' d="M148040 99617l-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z"/>
        <path className='section-icon background' d="M62019 135497l2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z"/>
        <path className='section-icon background' d="M54129 61186h186189l-3674 36339H58620l-4491-36339z"/>
    </svg>
)

export const js = (
    <svg className='icon-skills' viewBox="0 0 124 141.53199999999998" xmlns="http://www.w3.org/2000/svg">
        <path className='section-icon' d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"/>
        <path className='section-icon background' d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"/>
    </svg>
)

export const react = (
    <svg  className='icon-skills' viewBox="0 0 122.88 109.43" xmlns="http://www.w3.org/2000/svg"><path className='section-icon' d="M122.88,54.73c0-8.14-10.19-15.85-25.82-20.64c3.61-15.93,2-28.6-5.06-32.66c-1.63-0.95-3.53-1.4-5.61-1.4 v5.59c1.15,0,2.08,0.23,2.86,0.65c3.41,1.95,4.88,9.39,3.73,18.96c-0.28,2.35-0.73,4.83-1.28,7.36c-4.91-1.2-10.27-2.13-15.9-2.73 c-3.38-4.63-6.89-8.84-10.42-12.52C73.54,9.74,81.2,5.59,86.41,5.59V0l0,0c-6.89,0-15.9,4.91-25.02,13.43 C52.27,4.96,43.26,0.1,36.37,0.1v5.59c5.18,0,12.87,4.13,21.04,11.67c-3.51,3.68-7.01,7.86-10.34,12.5 c-5.66,0.6-11.02,1.53-15.93,2.75c-0.58-2.5-1-4.93-1.3-7.26c-1.18-9.57,0.28-17.01,3.66-18.99c0.75-0.45,1.73-0.65,2.88-0.65V0.13 l0,0c-2.1,0-4.01,0.45-5.66,1.4c-7.04,4.06-8.62,16.71-4.98,32.59C10.14,38.92,0,46.61,0,54.73c0,8.14,10.19,15.85,25.82,20.64 c-3.61,15.93-2,28.6,5.06,32.66c1.63,0.95,3.53,1.4,5.64,1.4c6.89,0,15.9-4.91,25.02-13.43c9.12,8.47,18.13,13.33,25.02,13.33 c2.1,0,4.01-0.45,5.66-1.4c7.04-4.06,8.62-16.71,4.98-32.59C112.74,70.56,122.88,62.84,122.88,54.73L122.88,54.73z M72.86,54.73 c0-6.32-5.12-11.45-11.45-11.45c-6.32,0-11.45,5.12-11.45,11.45s5.12,11.45,11.45,11.45C67.74,66.17,72.86,61.05,72.86,54.73 L72.86,54.73z M36.34,0.1L36.34,0.1L36.34,0.1L36.34,0.1z M90.27,38.02c-0.93,3.23-2.08,6.56-3.38,9.89c-1.03-2-2.1-4.01-3.28-6.01 c-1.15-2-2.38-3.96-3.61-5.86C83.56,36.57,86.99,37.22,90.27,38.02L90.27,38.02z M78.8,64.7c-1.95,3.38-3.96,6.59-6.04,9.57 c-3.73,0.33-7.51,0.5-11.32,0.5c-3.78,0-7.56-0.18-11.27-0.48c-2.08-2.98-4.11-6.16-6.06-9.52c-1.9-3.28-3.63-6.61-5.21-9.97 c1.55-3.36,3.31-6.71,5.18-9.99c1.95-3.38,3.96-6.59,6.04-9.57c3.73-0.33,7.51-0.5,11.32-0.5c3.78,0,7.56,0.18,11.27,0.48 c2.08,2.98,4.11,6.16,6.06,9.52c1.9,3.28,3.63,6.61,5.21,9.97C82.4,58.06,80.68,61.41,78.8,64.7L78.8,64.7z M86.89,61.44 c1.35,3.36,2.5,6.71,3.46,9.97c-3.28,0.8-6.74,1.48-10.32,2c1.23-1.93,2.45-3.91,3.61-5.94C84.78,65.47,85.86,63.44,86.89,61.44 L86.89,61.44z M61.49,88.16c-2.33-2.4-4.66-5.08-6.96-8.01c2.25,0.1,4.56,0.18,6.89,0.18c2.35,0,4.68-0.05,6.96-0.18 C66.12,83.08,63.79,85.76,61.49,88.16L61.49,88.16z M42.86,73.41c-3.56-0.53-6.99-1.18-10.27-1.98c0.93-3.23,2.08-6.56,3.38-9.89 c1.03,2,2.1,4.01,3.28,6.01C40.43,69.56,41.63,71.51,42.86,73.41L42.86,73.41z M61.36,21.29c2.33,2.4,4.66,5.08,6.96,8.01 c-2.25-0.1-4.56-0.18-6.89-0.18c-2.35,0-4.68,0.05-6.96,0.18C56.73,26.37,59.06,23.69,61.36,21.29L61.36,21.29z M42.83,36.04 c-1.23,1.93-2.45,3.91-3.61,5.94c-1.15,2-2.23,4.01-3.26,6.01c-1.35-3.36-2.5-6.71-3.46-9.97C35.79,37.24,39.25,36.57,42.83,36.04 L42.83,36.04z M20.16,67.4c-8.87-3.78-14.6-8.74-14.6-12.67c0-3.93,5.74-8.92,14.6-12.67c2.15-0.93,4.51-1.75,6.94-2.53 c1.43,4.91,3.31,10.02,5.64,15.25c-2.3,5.21-4.16,10.29-5.56,15.18C24.7,69.18,22.34,68.33,20.16,67.4L20.16,67.4z M33.64,103.19 c-3.41-1.95-4.88-9.39-3.73-18.96c0.28-2.35,0.73-4.83,1.28-7.36c4.91,1.2,10.27,2.13,15.9,2.73c3.38,4.63,6.89,8.84,10.42,12.52 c-8.17,7.59-15.83,11.75-21.04,11.75C35.34,103.84,34.39,103.62,33.64,103.19L33.64,103.19z M93.05,84.11 c1.18,9.57-0.28,17.01-3.66,18.99c-0.75,0.45-1.73,0.65-2.88,0.65c-5.18,0-12.87-4.13-21.04-11.67c3.51-3.68,7.01-7.86,10.34-12.5 c5.66-0.6,11.02-1.53,15.93-2.76C92.32,79.35,92.77,81.78,93.05,84.11L93.05,84.11z M102.69,67.4c-2.15,0.93-4.51,1.75-6.94,2.53 c-1.43-4.91-3.31-10.02-5.64-15.25c2.3-5.21,4.16-10.29,5.56-15.18c2.48,0.78,4.83,1.63,7.04,2.55c8.87,3.78,14.6,8.74,14.6,12.67 C117.29,58.66,111.56,63.64,102.69,67.4L102.69,67.4z"/></svg>
)

export const java = (
    <svg className='icon-skills' viewBox="0 0 90.63 122.88" xmlns="http://www.w3.org/2000/svg">
        <path className='section-icon' d="M29.19,95.03c0,0-4.7,2.73,3.34,3.65c9.74,1.11,14.71,0.95,25.44-1.08c0,0,2.82,1.77,6.76,3.3 C40.68,111.22,10.29,100.31,29.19,95.03L29.19,95.03z"/>
        <path className='section-icon' d="M26.25,81.58c0,0-5.27,3.9,2.78,4.73c10.4,1.07,18.62,1.16,32.83-1.58c0,0,1.97,1.99,5.06,3.08 C37.83,96.32,5.43,88.48,26.25,81.58L26.25,81.58z"/>
        <path className='section-icon' d="M51.03,58.76c5.93,6.82-1.56,12.96-1.56,12.96s15.05-7.77,8.14-17.5C51.15,45.15,46.2,40.64,73,25.1 C73,25.1,30.94,35.6,51.03,58.76L51.03,58.76z"/>
        <path className='section-icon' d="M82.84,104.98c0,0,3.47,2.86-3.83,5.08c-13.88,4.21-57.79,5.48-69.99,0.17c-4.38-1.91,3.84-4.55,6.42-5.11 c2.7-0.59,4.24-0.48,4.24-0.48c-4.88-3.43-31.52,6.74-13.53,9.66C55.2,122.25,95.56,110.72,82.84,104.98L82.84,104.98z"/>
        <path className='section-icon' d="M31.45,67.64c0,0-22.33,5.3-7.91,7.23c6.09,0.82,18.23,0.63,29.54-0.32c9.24-0.78,18.52-2.44,18.52-2.44 s-3.26,1.4-5.62,3.01c-22.68,5.96-66.49,3.19-53.88-2.91C22.77,67.05,31.45,67.64,31.45,67.64L31.45,67.64z"/>
        <path className='section-icon' d="M71.51,90.03c23.05-11.98,12.39-23.49,4.95-21.94c-1.82,0.38-2.64,0.71-2.64,0.71s0.68-1.06,1.97-1.52 c14.72-5.17,26.04,15.26-4.75,23.36C71.05,90.64,71.4,90.32,71.51,90.03L71.51,90.03z"/>
        <path className='section-icon' d="M57.61,0c0,0,12.77,12.77-12.11,32.41c-19.95,15.75-4.55,24.74-0.01,35C33.85,56.91,25.3,47.66,31.03,39.05 C39.45,26.41,62.76,20.29,57.61,0L57.61,0z"/>
        <path className='section-icon' d="M33.71,122.49c22.13,1.42,56.11-0.79,56.92-11.26c0,0-1.55,3.97-18.29,7.12c-18.89,3.55-42.18,3.14-56,0.86 C16.34,119.22,19.17,121.56,33.71,122.49L33.71,122.49z"/>
    </svg>
)

