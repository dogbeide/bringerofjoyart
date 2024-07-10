import Image from 'next/image'
import techs from '../constants/techs'

const TechIcon = ({ tech } : { tech: string }) => {
    return (
        <Image
            className="tech-icon"
            src={techs[tech].url}
            alt={tech}
            width={40}
            height={40}
        />
    )
}

export default TechIcon
