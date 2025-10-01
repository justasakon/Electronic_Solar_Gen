import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
         panel,gen2,gen3,batteries, member1, member2, member3, member4} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Clients",id:'testimonial'},
    {name:"FAQ",id:'faq'},
    {name:"Contact",id:'contact'},
];

export const services = [
  {
    name:"Solar Panels",
    image:panel,
    description:`Transform your energy consumption with our top-of-the-line solar panels. 
    Designed for efficiency and durability, these panels not only reduce your electricity bills but also contribute to a greener planet. Experience the freedom of sustainable energy and join the movement towards a cleaner, brighter future. Invest in solar power today and illuminate your world with renewable energy!`,
  },
  {
    name:"solar Electronic Generators",
    image:gen2,
    description:`Say goodbye to power outages and embrace the future of energy with our advanced solar electronic generators. Engineered for reliability and efficiency, these generators provide clean, renewable energy wherever you need it. Whether for outdoor adventures or emergency backup, our solar generators are your ultimate solution for sustainable power. 
                 Join the revolution in energy independence—light up your life with solar today!`,
  },
    {
    name:"solar Electronic Generators",
    image:gen3,
    description:`Discover our cutting-edge solar electronic generators, 
    designed to provide reliable and efficient power wherever you need it. 
    Perfect for outdoor adventures or as a backup during emergencies, 
    these generators harness the sun's energy to keep your devices running smoothly. 
    Experience the freedom of sustainable power and elevate your energy solutions with our innovative products today!`,
  },
  {
    name:"Battery Storage Solutions",
    image:batteries,
    description:`Elevate Your Energy Strategy with Our Battery Storage Solutions!
Maximize the potential of your renewable energy systems with our advanced battery storage solutions.
 Designed for efficiency and reliability, these batteries store excess power for use whenever you need it, 
 ensuring you have backup energy at your fingertips. Embrace energy independence and enjoy peace of mind knowing you’re prepared for any situation. Explore our innovative storage options today!

`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Solar system massive installation",
    image:"https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
    category:"Solar Panel",
    description:`Transform Your Energy Landscape with Our Massive Solar Installations!

Harness the sun's power on a grand scale with our comprehensive solar system installations. 
Designed for efficiency and durability, our systems provide sustainable energy solutions for homes and businesses alike.
Reduce your carbon footprint and enjoy significant savings on energy bills while contributing to a greener planet. 
Discover how our massive installations can reshape your energy future today!`,
  },
  {
    title:"Empowering Communities: Solar Solutions for a Sustainable Future",
    image:"https://www.solarpowerworldonline.com/wp-content/uploads/2019/07/ips1.jpg",
    category:"Solar Panel",
    description:`Empowering Communities: Solar Solutions for a Sustainable Future

Discover how our innovative solar solutions are transforming communities by providing sustainable energy options. With our advanced solar panel technology, we empower individuals and organizations to take charge of their energy needs while contributing to a greener planet. 
Join us in making a positive impact on the environment and securing a sustainable future for generations to come.`,
  },
  {
    title:"Harvesting Sunshine: The Green Energy Initiative Project",
    image:"https://www.biscaynetimes.com/downloads/2317/download/6.jpg",
    category:"Solar Panel",
    description:`Harvesting Sunshine: The Green Energy Initiative Project

Join us in our mission to harness the power of the sun through innovative solar energy solutions. 
Our Green Energy Initiative Project aims to provide sustainable energy to communities while reducing reliance on fossil fuels. 
By utilizing cutting-edge solar technology, we are paving the way for a cleaner, greener future. 
Together, we can make a significant impact on the environment and foster energy independence.`,
  },
  {
    title:"Wind and Solar Synergy: Hybrid Power Solutions for Tomorrow",
    image:"https://cdn.britannica.com/75/114975-159-38AE7632/Wind-turbines-Tehachapi-Calif.jpg",
    category:"Wind Turbine",
    description:`Wind and Solar Synergy: Hybrid Power Solutions for Tomorrow

Explore the future of energy with our innovative hybrid power solutions that combine the strengths of wind and solar energy. 
By harnessing both renewable resources, we create a more reliable and efficient energy system. 
Our approach not only reduces carbon footprints but also promotes energy independence and sustainability. 
Join us in leading the charge toward a cleaner, greener tomorrow.`,
  },
  {
    title:"Power Vault: Solar Battery Storage Solutions",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd_ThhlfShBjbodGPZOKZR2v_IvCIMc1FRu8t9VFNAmGZttNxdVlMX87FUZ4Rk7m6eGS3OLKep06Fbr_IGpdN4zVJR1pPUKH5z2fiC9J3ThLwWotIn5PPBW3H_ezvr3xlPpDD30lD8JyGSFyDzkOEbgXHUEhXgiY1_hR93mwHQCzhKXPkyOWJ-FRbBHg/s1000/mumti%20power.jpg",
    category:"Solar Battery",
    description:`Power Vault: Solar Battery Storage Solutions

Unlock the potential of renewable energy with our advanced solar battery storage solutions. 
Designed to store excess solar power, our systems ensure you have reliable energy available when you need it most.
Whether for residential or commercial use, our battery solutions enhance energy independence and maximize your investment in solar technology.
Join us in creating a sustainable energy future!`,
  },
  {
    title:"Eclipse Reserve: Innovative Solar Battery Integration",
    image:"https://energymall.ng/wp-content/uploads/2020/12/sunfit-solar-scaled.jpg",
    category:"Solar Battery",
    description:`Eclipse Reserve: Innovative Solar Battery Integration

Discover the future of energy storage with our Eclipse Reserve solar battery solutions. 
These innovative systems are designed to seamlessly integrate with your solar panels, providing you with reliable energy storage for when you need it most. Our advanced technology ensures optimal performance and efficiency, allowing you to harness the power of the sun even when it's not shining. Join us in revolutionizing energy storage for a sustainable future.`,
  },
];

export const faq = [
  {
    title:"How do solar panels work?",
    description:`
       Solar panels convert sunlight into electricity 
       using photovoltaic (PV) cells. When sunlight hits the cells, 
       it creates an electric field that generates direct current (DC) 
       electricity. This DC electricity is then converted to 
       alternating current (AC) electricity using an inverter, making 
       it usable for your home or business.
    `,
  },
  {
    title:"What are the benefits of installing solar panels?",
    description:`
       Installing solar panels can reduce or eliminate your 
       electricity bills, increase the value of your property, 
       decrease your carbon footprint, and provide a renewable 
       source of energy. Additionally, many regions offer incentives 
       and rebates for solar installations.
    `,
  },
  {
    title:"How much does a solar power system cost?",
    description:`
      The cost of a solar power system varies depending on the size of
       the system, the type of equipment used, and your location. On 
       average, a residential solar panel system can range from $15,000 
       to $25,000 before incentives and rebates.
    `,
  },
  {
    title:"How long will it take for my solar panels to pay for themselves?",
    description:`
    The payback period for solar panels typically ranges from 6 to 10 years, 
    depending on factors such as your energy usage, the cost of electricity 
    in your area, and the available financial incentives.
    `,
  },
  {
    title:"Will my solar panels work during a power outage?",
    description:`
      Most grid-tied solar power systems will not function during a power 
      outage for safety reasons unless they are paired with a battery
       storage system or a solar generator that allows for off-grid 
       operation.
    `,
  },
  {
    title:"How much maintenance do solar panels require?",
    description:`
    Solar panels require minimal maintenance. Regular cleaning to remove dust, 
    dirt, and debris, as well as periodic inspections to ensure everything is 
    functioning properly, is generally sufficient. Most panels come with a 
    25-year warranty.
    `,
  },
  {
    title:"Do I need a battery storage system?",
    description:`
      While a battery storage system is not required, it can be beneficial 
      for storing excess energy generated during the day for use at night or 
      during power outages. Batteries can also help you become more energy
      independent.
    `,
  },
]

export const testimonial = [
  {
    image: profile2,
    name: 'Samuel Eze',
    review: `Using the solar electronic generator has transformed my energy consumption. 
             Not only am I reducing my electricity bills, but I also feel good about 
             contributing to a sustainable future. The efficiency and reliability of the 
             generator are truly impressive!`
  },
  {
    image: profile3,
    name: 'Emmanuel Joseph',
    review: `I recently installed a solar electronic generator, and the difference is remarkable. 
             The generator is easy to use and provides consistent power for my home. 
             I highly recommend it to anyone looking to adopt renewable energy solutions!`
  },
  {
    image: profile4,
    name: 'Gloria Chiwendu',
    review: `The solar electronic generator has exceeded my expectations. It’s not only 
             environmentally friendly but also incredibly efficient. I love knowing that I 
            ’m using clean energy while keeping my home powered. It's a fantastic investment!`
  },
  {
    image: profile5,
    name: 'Precious Stone',
    review: `I am thrilled with my decision to switch to a solar electronic generator. 
             The installation was straightforward, and the performance has been outstanding. 
             I can now.`
  }
];

export const contacts = [
  {
    name:"Email",
    value:"tdingha43@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+237687404333",
    value:"+237677099672",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Bamenda, Douala, Cameroon",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"About Us",id:'about'},
        {name:"Services",id:'services'},
        {name:"Team",id:'team'},
        {name:"Project",id:'project'},
        {name:"Clients",id:'testimonial'},
        {name:"FAQ",id:'faq'},
        {name:"Contact",id:'contact'},
      ]
    },
    {
        name:"Gallery",
        routes:[
          {name:"Privacy Policy"},
          {name:"Terms and Conditions"},
          {name:"Cookie Policy"},
        ]
      },
]


