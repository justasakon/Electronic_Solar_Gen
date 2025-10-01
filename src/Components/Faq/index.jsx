import React, { useState } from 'react'
import "./Faq.css"
import { faq } from "../../data"
import { FaTimes, FaPlus } from 'react-icons/fa'

const Faq = () => {
  const [activeIndex,setActiveIndex] = useState(-1);
  return (
    <section id='Faq'>
        <div className="container">
            <h1 className="title">
                Frequently <span className="g_text">Asked Questions</span>
            </h1>
            <div className="faq_list">
                {
                   faq.map((list,index)=>(
                    <div className={`faq ${activeIndex === index ? 'active' : ''}`}
                    onClick={()=>{
                      if(activeIndex === index){
                        return setActiveIndex(-1);
                      }
                      setActiveIndex(index);
                    }}
                     key={index}>
                      <div className="question">
                        <h3>{list.title}</h3>
                        {
                            activeIndex === index ?
                            <div className="icon_container"><FaTimes/></div>:
                             <div className="icon_container"><FaPlus/></div>
                        }
                      </div>
                      <div className="answer">
                        <p className="text_muted">{list.description}</p>
                      </div>
                    </div>
                   ))  
                }
            </div>
        </div>
        
    </section>
  )
}

export default Faq