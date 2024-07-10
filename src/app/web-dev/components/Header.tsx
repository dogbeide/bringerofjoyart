'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Header.css'

function Header() {
    const [isDesktop, setIsDesktop] = useState(false);

    function updatePredicate() {
        // setIsDesktop(window.innerWidth > 1000);
    }

    // useEffect(() => {
    //     window.addEventListener("resize", updatePredicate);
    //     return () => {
    //         window.removeEventListener("resize", updatePredicate);
    //     };
    // }, [])

    
    return (
        <div className="header">
            <h1 className="header-title">Hi, I&apos;m Boyowa David Ogbeide</h1>
            <Image 
                id="david-ogbeide" 
                src="/images/davidogbeide_suit.jpg" 
                // src="@/../../../../../public/images/davidogbeide_suit.jpg"
                alt="Boyowa David Ogbeide" 
                width={250}
                height={250}
            />
            {isDesktop ? (
                null
            ) : (
                <h4 className="header-title header-subtitle">
                    <span className="ltgt">&lt;</span>
                    <span className="subtitle-text">I WRITE STUFF THAT WORKS</span>
                    <span className="ltgt">/&gt;</span>
                </h4>)
            }
            <div className="header-items row">
                <div className="header-item col-lg-4">
                    <div className="header-item-title">
                        WHO I AM
                    </div>
                    <div className="header-item-desc">
                        I am a web/software developer with 3 years of professional experience 
                        and a basis in engineering, 
                        computer science, and media art design.
                    </div>
                </div>
                <div className="header-item col-lg-4">
                    <div className="header-item-title">
                        MY GOAL
                    </div>
                    <div className="header-item-desc">
                        To deliver functional, concise, yet beautiful interactive displays!~
                        <br/> (on time) 
                    </div>
                </div>
                <div className="header-item col-lg-4">
                    <div className="header-item-title">
                        YOUR NEEDS
                    </div>
                    <div className="header-item-desc">
                        A digital platform for your: 
                        idea, app, business, project, organization, practice, etc.
                    </div>
                </div>
            </div>
            {isDesktop ? (
                <h4 className="header-title header-subtitle">
                    <span className="ltgt">&lt;</span>
                    <span className="subtitle-text">I WRITE STUFF THAT WORKS</span>
                    <span className="ltgt">/&gt;</span>
                </h4>) : (
                    null
                )
            }
        </div>
    )
}

export default Header;