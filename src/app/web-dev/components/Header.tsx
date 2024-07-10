'use client'

import { Component, ComponentLifecycle } from 'react';
import Image from 'next/image';
import React from 'react';
import './Header.css'

// interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }
type HeaderProps = {}
type HeaderState = {
    isDesktop: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isDesktop: false
        }
        this.updatePredicate = this.updatePredicate.bind(this)
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1000 });
    }

    render() {
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
                {this.state.isDesktop ? (
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
                {this.state.isDesktop ? (
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
}

export default Header
