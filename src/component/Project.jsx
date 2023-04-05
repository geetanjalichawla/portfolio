<<<<<<< HEAD

import React from 'react';
import { Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Project = () => {
    const Projects =[
        // {
        //     title: "Business startup",
        //     description:"Desgin & Devlopment",
        //     url :"https://ik.imagekit.io/b80sh2n2k/project-img3.png?updatedAt=1679470990174"
        // },
        // {
        //     title: "Travel world",
        //     description:"Desgin & Devlopment",
        //     url :"https://ik.imagekit.io/b80sh2n2k/project-img1.png?updatedAt=1679470990174"
        // },
    
        {
            title: "gaming website ",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__216_.png?updatedAt=1679913364463",
            websiteUrl : "https://easegaming.netlify.app/"
        },
        {
            title: "Discord clone",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/2023-03-27.png?updatedAt=1679913577541",
            websiteUrl : "https://geetdiscord.netlify.app/"
        },
        {
            title: "explore space",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__8_.png?updatedAt=1679914133139",
            websiteUrl : "https://geetanjalichawla.github.io/explore-space/"
        },
        {
            title: "Testimonial componetnt",
            description:"Desgin & Devlopment",
            url : "https://ik.imagekit.io/b80sh2n2k/Screenshot__219_.png?updatedAt=1679914168476",
            websiteUrl : "https://geet-testimonial.netlify.app/"
        },
       
        {
            title: "Filter componet",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__220_.png?updatedAt=1679914864311",
            websiteUrl : "https://geet-filter.netlify.app"
        },
        {
            title: "Morden chair",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__221_.png?updatedAt=1679915371756",
            websiteUrl : "https://github.com/geetanjalichawla/mordern-chair/deployments/activity_log?environment=github-pages"
        },
    ]


    return (
  <section className='project' id='project'>
    <div className="conitaner px-9">
        <div className="row">
            <div className="col text-center">
            <div className='w-full text-4xl'> Project </div>
             <p>please click on the project to check the project sites </p>
                          
            </div>
            <TabContainer id="projects-tab" defaultActiveKey="first">

            <Nav variant='pills'  className='mb-8'>              
            <Nav.Item >
                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
            </Nav>
        
            <TabContent>
                <TabPane eventKey="first">
                    
                    <div className="row">
                    {
                        Projects.map((p,index)=>{
                            return (
                              <ProjectCard
                              key = {index}
                              {...p}
                              />
                            )
                        })
                    }
                    </div>
                    
                </TabPane>
                <TabPane eventKey="second">

                </TabPane>
                <TabPane eventKey="third">
             </TabPane>
            </TabContent> 
            </TabContainer>
        </div>
        
    </div>
    {/* <img className='left' src="https://ik.imagekit.io/b80sh2n2k/color-sharp2.png?updatedAt=1679470985047" alt="" /> */}

  </section>
    );
}

export default Project;
=======

import React from 'react';
import { Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Project = () => {
    const Projects =[
        // {
        //     title: "Business startup",
        //     description:"Desgin & Devlopment",
        //     url :"https://ik.imagekit.io/b80sh2n2k/project-img3.png?updatedAt=1679470990174"
        // },
        // {
        //     title: "Travel world",
        //     description:"Desgin & Devlopment",
        //     url :"https://ik.imagekit.io/b80sh2n2k/project-img1.png?updatedAt=1679470990174"
        // },
    
        {
            title: "gaming website ",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__216_.png?updatedAt=1679913364463",
            websiteUrl : "https://easegaming.netlify.app/"
        },
        {
            title: "Discord clone",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/2023-03-27.png?updatedAt=1679913577541",
            websiteUrl : "https://geetdiscord.netlify.app/"
        },
        {
            title: "explore space",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__8_.png?updatedAt=1679914133139",
            websiteUrl : "https://geetanjalichawla.github.io/explore-space/"
        },
        {
            title: "Testimonial componetnt",
            description:"Desgin & Devlopment",
            url : "https://ik.imagekit.io/b80sh2n2k/Screenshot__219_.png?updatedAt=1679914168476",
            websiteUrl : "https://geet-testimonial.netlify.app/"
        },
       
        {
            title: "Filter componet",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__220_.png?updatedAt=1679914864311",
            websiteUrl : "https://geet-filter.netlify.app"
        },
        {
            title: "Morden chair",
            description:"Desgin & Devlopment",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__221_.png?updatedAt=1679915371756",
            websiteUrl : "https://github.com/geetanjalichawla/mordern-chair/deployments/activity_log?environment=github-pages"
        },
    ]


    return (
  <section className='project' id='project'>
    <div className="conitaner px-9">
        <div className="row">
            <div className="col text-center">
            <div className='w-full text-4xl'> Project </div>
             <p>please click on the project to check the project sites </p>
                          
            </div>
            <TabContainer id="projects-tab" defaultActiveKey="first">

            <Nav variant='pills'  className='mb-8'>              
            <Nav.Item >
                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
            </Nav>
        
            <TabContent>
                <TabPane eventKey="first">
                    
                    <div className="row">
                    {
                        Projects.map((p,index)=>{
                            return (
                              <ProjectCard
                              key = {index}
                              {...p}
                              />
                            )
                        })
                    }
                    </div>
                    
                </TabPane>
                <TabPane eventKey="second">

                </TabPane>
                <TabPane eventKey="third">
             </TabPane>
            </TabContent> 
            </TabContainer>
        </div>
        
    </div>
    {/* <img className='left' src="https://ik.imagekit.io/b80sh2n2k/color-sharp2.png?updatedAt=1679470985047" alt="" /> */}

  </section>
    );
}

export default Project;
>>>>>>> 4398298036ec6751ef2d715db72fae5c3a5bee1a
