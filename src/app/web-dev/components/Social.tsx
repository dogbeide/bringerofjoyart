import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { } from "@fortawesome/react-fontawesome"

import './Social.css'

const Social = () => {
    return (
        <>
        <div className="social-links">
            <a className="social-icon"
                href="mailto:iamboyowa@gmail.com"
                target="_blank"
            >
                <FontAwesomeIcon icon={faEnvelope}
                ></FontAwesomeIcon>
            </a>
            <a className="social-icon"
                href="https://wa.me/14378782696"
                target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp}
                ></FontAwesomeIcon>
            </a>
            <a className="social-icon"
                href="https://www.linkedin.com/in/boyowa-ogbeide-037528a5/"
                target="_blank"
            >
                <FontAwesomeIcon icon={faLinkedin}
                ></FontAwesomeIcon>
            </a>
            <a className="social-icon"
                href="https://t.me/iamboyowa"
                target="_blank"
            >
                <FontAwesomeIcon icon={faTelegram}
                ></FontAwesomeIcon>
            </a>
        </div>
        <div className="social-resume text-center">
            <a className="text-red-600" target="_blank" href="https://drive.google.com/file/d/1ENKbQSysR9VL45T1j91m8hL0l61HIH9E/view?usp=sharing">
                <Image
                    src="/images/icons/Adobe_Acrobat_DC_logo_2020.svg.png"
                    width={24}
                    height={24} 
                    alt="pdf logo"
                    className="pdf-icon"
                />
                <span className="ml-2">(Download) RESUME/CV</span>
            </a> 
        </div>
        </>
    )
}

export default Social