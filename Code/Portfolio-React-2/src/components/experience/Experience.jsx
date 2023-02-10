import React from "react";
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Front-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML/CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                            <h4>Angular</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                            <h4>Typescript</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Back-end Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                <h4>Ruby On Rails</h4>
                                <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                <h4>Firebase</h4>
                                <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                <h4>NextJS</h4>
                                <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                <h4>SQL</h4>
                                <small className="text-light">Experienced</small>
                                </div>
                            </article>

                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Experience