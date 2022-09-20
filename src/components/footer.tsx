
import { Icon } from '@iconify/react'


const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
            <h2 className='text-3xl'>cm.</h2>
            <p>Just your friendly neighborhood developer.</p>
        </div> 
        <div>
            <span className="footer-title">Social</span> 
            <div className="grid grid-flow-col gap-12">
            <a href='https://github.com/Qolors' target="_blank"><Icon className='text-2xl' icon="brandico:github" /></a> 
            <a href='https://www.linkedin.com/in/chris-mcgowen-214b821b7/' target="_blank"><Icon className='text-2xl' icon="line-md:linkedin" /></a>
            <a download href='/Chris_McGowen.pdf' target="_blank" rel="noopener noreferrer"><Icon className='text-2xl' icon="carbon:document-pdf" /></a>  
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;