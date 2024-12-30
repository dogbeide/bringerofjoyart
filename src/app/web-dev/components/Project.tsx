import Image from 'next/image';
import './Project.css';
import TechIcon from './TechIcon';


const Project = ({ url, img, alt, title, desc, techs, inactive = false, githubUrl } : {
    url: string,
    img: string,
    // width: number,
    // height: number
    alt: string,
    title: string,
    desc: string,
    techs: any,
    inactive: boolean | undefined,
    githubUrl?: string,
}) => {
    return (
        <div className={`project ${inactive ? "inactive" : ""}`}>
            <div className="project__techs">
                {techs ? techs.map((tech: string, i: number) =>
                    <TechIcon key={i} tech={tech} />
                ) : null}
            </div>
            {inactive ? <Image
                    className="project__img"
                    src={img}
                    alt={alt}
                    width={300}
                    height={240}
                /> : <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="project__img"
                        src={img}
                        alt={alt}
                        width={300}
                        height={240}
                    />
                </a>
            }

            <div className="project__info">
                <div className="project__title">
                    <a href={url} target='_blank' className='text-black underline hover:text-blue-950'>{title}</a>
                </div>
                <div className="project__github">
                    <a href={githubUrl} target='_blank' className='text-blue-800 underline italic'>🔗(Github repo)</a>
                </div>
                <div className="project__desc">{desc}</div>
            </div>
        </div>
    )
}

export default Project;
