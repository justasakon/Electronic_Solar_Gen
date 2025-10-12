import React from 'react'
import "./Teams.css"
import { teams } from '../../data'
import { Link } from 'react-scroll'


const Teams = () => {
  return (
    <section id='team'>
        <div className="container">
           <h1 className="title">Our <span className='g_text'>Teams</span></h1>
           <p className="text_muted description">
        <h1>CUSTOMER PROBLEM</h1>
  <p>
    In Cameroon, particularly in Bamenda, there is a significant lack of access to reliable and affordable energy sources. Frequent power outages disrupt operations for factories, individuals, churches, and bars, hindering productivity and compromising quality of life. This instability forces reliance on costly alternatives, such as diesel generators, which not only increase operational expenses but also contribute to environmental pollution.
  </p>
  <p>
    The rising demand for renewable energy solutions underscores the need for accessible and efficient energy storage options. As awareness of climate change and sustainability increases, more customers seek alternatives to traditional energy sources. Our solar generators and panels meet this demand, empowering customers to take control of their energy consumption and reduce reliance on fossil fuels. IMAGO-DEL Solar Energy Storage positions itself as a key player in facilitating the transition to a cleaner, more sustainable energy future.
  </p>
           </p>
           <div className="team_container">
            {
                teams.map((team,index) =>(
                    <div className="team_card" key={index}>
                        <div className="profile_container">
                            <img src={team.profile} alt={team.name} />
                        </div>
                        <div className="details">
                            <h3 className="name">{team.name}</h3>
                            <p className="text_muted">{team.title}</p>
                        </div>
                        <div className="social_container">
                            {
                                team.social.map((item,i)=>(
                                    <Link 
                                    href={item.url ||""} 
                                    target="_blank" 
                                    className='icon_container' 
                                    key={i}>
                                    {item.icon}
                                    </Link>
                                ))
                            }
                        </div>

                    </div>
                 ))
            }
           </div>
        </div>

    </section>
  )
}

export default Teams