import React, { useState,useRef } from 'react'
import "./Achievement.css"
import { FaAward, FaUsers, FaStar, FaRocket, FaProjectDiagram } from 'react-icons/fa'
import Odometer from 'react-odometerjs'
import { GiTeamIdea } from 'react-icons/gi'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Achievement = () => {
    const [clients,setClients] = useState(0)
    const [projects,setProjects] = useState(0)
    const [team,setTeam] = useState(0)
    const [awards,setAwards] = useState(0)
    const container = useRef(null);
    const updateData = () => {
        setClients(120);
        setProjects(150);
        setTeam(44);
        setAwards(89);
    }

    const resetData = () =>{
            setClients(0);
            setProjects(0);
            setTeam(0);
            setAwards(0);

    }

    useGSAP(() => {
        const timeline = gsap.timeline();
        const trigger = ScrollTrigger.create({
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            onEnter: updateData,
            onLeaveBack: resetData,
        });
        return () => {
            timeline.revert();
            trigger.kill();
        };
    }, { scope: container });


  return (
    <div className='achievement_container' ref={container}>
        <div className='container'>

            {/*Start achievement*/}
        <div className='achievement'>
            <div className='icon_container'><FaUsers/></div>
            <div className='details'>
                <div className="row">
                    <Odometer
                    value={clients}
                    className='title'
                    />
                    <h1 className="title">K</h1>
                </div>
                <small className="text_muted">Happy Customer</small>
            </div>
        </div>
        {/*End achievementg*/}

         
            {/*Start achievement*/}
            <div className='achievement'>
            <div className='icon_container'><FaProjectDiagram/></div>
            <div className='details'>
                <div className="row">
                    <Odometer
                    value={projects}
                    className='title'
                    />
                    <h1 className="title">+</h1>
                </div>
                <small className="text_muted">Completed Projects</small>
            </div>
        </div>
        {/*End achievementg*/}

        
            {/*Start achievement*/}
            <div className='achievement'>
            <div className='icon_container'><GiTeamIdea/></div>
            <div className='details'>
                <div className="row">
                    <Odometer
                    value={team}
                    className='title'
                    />
                    <h1 className="title">+</h1>
                </div>
                <small className="text_muted">Expert Workers</small>
            </div>
        </div>
        {/*End achievementg*/}

        
            {/*Start achievement*/}
            <div className='achievement'>
            <div className='icon_container'><FaAward/></div>
            <div className='details'>
                <div className="row">
                    <Odometer
                    value={awards}
                    className='title'
                    />
                    <h1 className="title">+</h1>
                </div>
                <small className="text_muted">Awards Winning</small>
            </div>
        </div>
        {/*End achievementg*/}




        </div>

    </div>
  )
}

export default Achievement