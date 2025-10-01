import React, { useEffect, useState } from 'react'
import "./Project.css"
import { projects } from '../../data'
import ProjectNavigation from "./ProjectNavigation"

const Project = () => {
    const [activeProjects,setActiveProjects] = useState(projects);
    const [load,setLoad] = useState(false);

    useEffect(()=>{
        setLoad(true);
        setTimeout(()=>{
            setLoad(false);
        },[600])
    })
    const getTabs = () => {
        const tabs = ["All"];
        projects.forEach((item) => {
            if (item.category && !tabs.includes(item.category)) {
                tabs.push(item.category);
            }
        });
        return tabs;
    }
    const setProjects = (value) => {
        if (value === "All") {
            setActiveProjects(projects);
        } else {
            const new_projects = projects.filter((item) => item.category === value);
            setActiveProjects(new_projects);
        }
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const openModal = (img) => {
        setModalImage(img);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
        setModalImage(null);
    };

    return (
        <section id='project'>
            <div className="container">
                <h1 className="title">Our <span className="g_text">Projects</span></h1>
                <ProjectNavigation
                    tabs={getTabs()}
                    onChange={setProjects}
                />
                <div className="project_container">
                    {activeProjects.map((project, index) => (
                        <div className={`project_card} ${load ? `zoom_in`: ''}`} key={index}>
                            <div className="image_container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src={project.image} alt={project.title} />
                                <button
                                    className="view-image-btn"
                                    onClick={() => openModal(project.image)}
                                >
                                    View Image
                                </button>
                            </div>
                            <h3 className="name">{project.title}</h3>
                            <p className="text_muted description">{project.description}</p>
                        </div>
                    ))}
                </div>
                {modalOpen && (
                    <div className="image-modal" onClick={closeModal}>
                        <div className="image-modal-content" onClick={e => e.stopPropagation()}>
                            <img src={modalImage} alt="Full view" />
                            <button className="close-modal-btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Project