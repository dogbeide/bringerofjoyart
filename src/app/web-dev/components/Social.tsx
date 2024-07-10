import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { } from "@fortawesome/react-fontawesome"

import './Social.css'

const Social = () => {
    return (
        <div className="social-links">
            <a className="social-icon"
                href="mailto:iamboyowa@gmail.com"
                target="_blank"
            >
                <FontAwesomeIcon icon={faEnvelope}
                ></FontAwesomeIcon>
            </a>
            <a className="social-icon"
                href="https://wa.me/14374324885"
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
    )
}

export default Social