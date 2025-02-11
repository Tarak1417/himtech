import React, { useState } from 'react';
import logo from "../../Assets/Breathe matters Logo.png";
import caponatoer from "../../Assets/Capnotrainer.png";
import knosis from "../../Assets/KNOSIS.png";
import drcruz from "../../Assets/Dr Cruz.png";
import airway from "../../Assets/Airway 1.png";
import conspire from "../../Assets/conspire logo.png";
import women from "../../Assets/woman yoga with capno 1.png";
import head from "../../Assets/headache 1.png";
import lowbattery from '../../Assets/low-battery 1.png';
import musclepain from "../../Assets/muscle-pain 1.png";
import carpt from "../../Assets/Capno.png";
import tick from "../../Assets/Vector (1).png";
import feedback from "../../Assets/feedback interface 1.png";
import realtime from "../../Assets/real-time PCO2 waveform analysis 1.png";
import monitor from "../../Assets/Monitor Your Progress 1.png";
import gyequip from "../../Assets/capno with gym 1.png"
import wellness from "../../Assets/Wellness Enthusiasts.png"
import educator from "../../Assets/Educators & Trainers 1.png"
import athelete from "../../Assets/Athletes & Performers 1.png"
import health from "../../Assets/Healthcare Professionals 1.png"
import healthpro from '../../Assets/Health Practitioners 1.png'

import capnogram from "../../Assets/Breath strategies.png"
import wave from "../../Assets/Breathwave.png"
import protable from "../../Assets/Portable.png"
import anxity from "../../Assets/Eliminate Stress and Anxiety 1.png"
import Enhancemental from "../../Assets/Enhance Mental Clarity and Focus.png"
import Acheive from "../../Assets/Achieve Peak Performance 1.png"
import improvephysicaal from "../../Assets/Improve Physical Health 1.png"
import frame from "../../Assets/Frame 188.png"

import insta from "../../Assets/instagram (3) 1.png"
import facebook from "../../Assets/facebook (3) 1.png"
import twitter from "../../Assets/twitter (2) 1.png"
import discord from "../../Assets/discord (1) 1.png"

import './Home.css';
import real from "../../Assets/monitoring 1.png";






const features = [
  {
    img: anxity,
    title: "Eliminate Stress and Anxiety",
    description:
      "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations.",
  },
  {
    img: Enhancemental,
    title: "Enhance Mental Clarity and Focus",
    description:
      "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
  },
  {
    img: Acheive,
    title: "Achieve Peak Performance",
    description:
      "Whether you're giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
  },
  {
    img: improvephysicaal,
    title: "Improve Physical Health",
    description:
      "Address breathlessness, dizziness, and fatigue by optimizing your acid-base physiology.",
  },
];

const faqs = [
  {
    question: "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
    answer: "No, the CapnoTrainer® GO is designed for beginners and experts alike. It guides you through the process step-by-step.",
  },
  {
    question: "Is it safe to use for health conditions like asthma or anxiety?",
    answer: "Yes, it is safe. However, we recommend consulting with a healthcare professional before use.",
  },
  {
    question: "How do I get started?",
    answer: "Simply download the app, connect your device, and follow the guided instructions.",
  },
];


const Home = () => {


    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    
   
  return (
    <div className='booknow-container'>
      <div className='buttonbelowbackgrouund'></div>
      <div className='Header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='bookbutton'>Book Now</button>
      </div>

      <div className='rightleft'>
        <div>
          <img src={caponatoer} alt='caponatoer' className='mobilecaponatoer' />
          <button className='mobilebookbutton'>Book Now</button>
          <h1 className='maintextcontent'>Transform Your Life with the Revolutionary <br /> CapnoTrainer® GO</h1>
          <h1 className='secondcontend'>Breathe Smarter, Live Better</h1>
          <p className='secondpara'>
            Breathing is more than just an unconscious action—it’s a foundation of health, performance,<br /> and emotional well-being. But what if your breathing habits are silently holding you back?<br /> Enter the CapnoTrainer® GO, the groundbreaking tool that merges science, psychology, and<br /> technology to revolutionize your breathing habits and transform <span className='spanitem'>your </span>life.
          </p>
        </div>
        <div>
          <img src={caponatoer} alt='caponatoer' className='caponatoer' />
        </div>
      </div>

      <div className='darkground'></div>
      <div className='whitebackground'>
        <div className='logos'>
          <img src={knosis} alt='knosis' className='knosis' />
          <img src={drcruz} alt='drcruz' className='drcruz' />
          <img src={airway} alt='airway' className='airway' />
          <img src={conspire} alt='conspire' className='conspire' />
        </div>

        <div>
          <h1 className='discoverpage'>Discover the Hidden Power of Your Breath</h1>
          <div className='backgroundthree'>
            <div className='womenimagecontainer'>
              <img src={women} alt="women" className='womenimage' />
            </div>
            <div className='sidecontent'>
              <h1 className='sidecont'>Your breathing isn’t just about oxygen in and carbon dioxide out—it’s a complex behavior shaped by triggers, habits, and physiology. When misaligned, these habits can:</h1>
              <div className='healthimages'>
                <img src={head} alt='head' className='head' />
                <div className='headcontent'>
                  <h1 className='haeltheading'>Compromise your health:</h1>
                  <p className='healthpara'>Triggering anxiety, fatigue, and physical discomfort.</p>
                </div>
              </div>
              <div className='healthimages'>
                <img src={lowbattery} alt='head' className='head' />
                <div className='headcontent'>
                  <h1 className='haeltheading'>Compromise your health:</h1>
                  <p className='healthpara'>Triggering anxiety, fatigue, and physical discomfort.</p>
                </div>
              </div>
              <div className='healthimages'>
                <img src={musclepain} alt='head' className='head' />
                <div className='headcontent'>
                  <h1 className='haeltheading'>Compromise your health:</h1>
                  <p className='healthpara'>Triggering anxiety, fatigue, and physical discomfort.</p>
                </div>
              </div>
              <div className='darkbelow'>
                <h1 className='belowcontent'>Millions of people suffer the consequences of poor breathing habits. But you don’t have to be one of them. With the CapnoTrainer® GO, you’ll unlock a scientifically-backed pathway to breathing mastery.</h1>
              </div>
            </div>
          </div>

          <div className='backgroundfour'>
            <div className='backgroundfourcontent'>
              <h1 className='headingwhat'>What Is This<br /> CapnoTrainer® GO?</h1>
              <p className='componet'>
                The CapnoTrainer® GO isn’t just a tool—it’s your personal gateway to a healthier,<br /> more aligned you. Using advanced capnography technology, <br />it provides real-time insights into your breathing behavior <br />by measuring CO2 levels and visualizing your breathing patterns.<br /> Paired with a guided learning framework, it empowers you to:
              </p>
            </div>
            <div>
              <img src={carpt} alt='capno' className='capno' />
            </div>
            <div className='liitems'>
              <ul>
                <li className='listitems'>
                  <img src={tick} alt="Breathing Habits" className="list-image" />
                  Understand your breathing habits and triggers
                </li>
                <li className='listitems'>
                  <img src={tick} alt="Optimal Health" className="list-image" />
                  Learn how to breathe for optimal health and performance
                </li>
                <li className='listitems'>
                  <img src={tick} alt="Conscious Breathing" className="list-image" />
                  Master the art of conscious breathing
                </li>
              </ul>
            </div>
          </div>

          

         
</div>
<div className='backgroundfive'>
            <h1 className='side'>experience The</h1>
            <h1 className='main'>Power of CapnoTrainer® GO</h1>
            <div className='backgroundfivecontent'>
              <div className='backgroundfivecontentone'>
                <img src={realtime} alt='realtime' className='realtime' />
                <div className='realtimecontent'>
                  <h1 className='realtimeheading'>See Your Breathing in Action</h1>
                  <p className='realtimepara'>Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.</p>
                </div>
              </div>
              <div className='backgroundfivecontentone'>
                <img src={monitor} alt='realtime' className='realtime' />
                <div className='realtimecontent'>
                  <h1 className='realtimeheading'>Monitor Your Progress</h1>
                  <p className='realtimepara'>Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.</p>
                </div>
              </div>
              <div className='backgroundfivecontentone'>
                <img src={feedback} alt='realtime' className='realtime' />
                <div className='realtimecontent'>
                  <h1 className='realtimeheading'>Receive Tailored Feedback</h1>
                  <p className='realtimepara'>Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
           <div className='backgroundsix'>
          <div className='backgroundsixcontent'>
            <h1 className='sixheading'>How the CapnoTrainer® GO Works</h1>
            <div className='sixparamaincontainer'>
            <div className='sixpara'>
             <h1 className='sixheaad'>Measure What Matters</h1>
             <p className='sixparaapa'>Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.</p>
            </div>
            <div className='sixpara'>
             <h1 className='sixheaad'>Measure What Matters</h1>
             <p className='sixparaapa'>Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.</p>
            </div>
            <div className='sixpara'>
             <h1 className='sixheaad'>Measure What Matters</h1>
             <p className='sixparaapa'>Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.</p>
            </div>
            <div className='sixpara'>
             <h1 className='sixheaad'>Measure What Matters</h1>
             <p className='sixparaapa'>Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.</p>
            </div>
            </div>
          </div>
         
           </div>

           <div className='backgroundseven'>
           <div>
            <img src={gyequip} alt='gym' className='gym' />
           </div>
           <div  className='gymcontent'>
            <h1 className='gymhead'>What Makes the CapnoTrainer® go Different?</h1>
            <p className='gympara'>Unlike traditional breathing tools that focus on shallow techniques, the CapnoTrainer® GO goes deeper. <br/>It integrates psychophysiology, behavioral analysis, and cutting-edge technology to provide a complete understanding of your breath’s<br/> role in health and performance.</p>
            <div className='gymcontentbox'>
              <h1 className='gymer'>“Breathing is behavior. And behavior can be changed. The CapnoTrainer® helps you edit,<br/> optimize, and own your breath for life.”</h1>

            </div>
           </div>
          
           </div>
           <div className='backgroundeight'>
            <h1 className='eighthead'>Who Is the CapnoTrainer® GO For?</h1>
            <div className='eightcontent'>
              <div className='eightcontentone'>
                 <img src={wellness} alt="wellness" className='wellness'/>
                 <div className='sightpara'>
                 <h1 className='headeight'>Wellness Enthusiasts</h1>
                 <p className='paraeight'>Achieve better sleep, reduce anxiety, and enhance overall vitality.</p>
                 </div>
              </div>
              <div className='eightcontentone'>
                 <img src={educator} alt="wellness" className='wellness'/>
                 <div className='sightpara'>
                 <h1 className='headeight'>Wellness Enthusiasts</h1>
                 <p className='paraeight'>Achieve better sleep, reduce anxiety, and enhance overall vitality.</p>
                 </div>
              </div>
              <div className='eightcontentone'>
                 <img src={healthpro} alt="wellness" className='wellness'/>
                 <div className='sightpara'>
                 <h1 className='headeight'>Wellness Enthusiasts</h1>
                 <p className='paraeight'>Achieve better sleep, reduce anxiety, and enhance overall vitality.</p>
                 </div>
              </div>
              <div className='eightcontentone'>
                 <img src={athelete} alt="wellness" className='wellness'/>
                 <div className='sightpara'>
                 <h1 className='headeight'>Wellness Enthusiasts</h1>
                 <p className='paraeight'>Achieve better sleep, reduce anxiety, and enhance overall vitality.</p>
                 </div>
              </div>
              <div className='eightcontentone'>
                 <img src={health} alt="wellness" className='wellness'/>
                 <div className='sightpara'>
                 <h1 className='headeight'>Wellness Enthusiasts</h1>
                 <p className='paraeight'>Achieve better sleep, reduce anxiety, and enhance overall vitality.</p>
                 </div>
              </div>
              
              
              
            </div>

            

           </div>
           
          </div>
          <div>
    <h1 className="mainclass">Key Features You’ll Love</h1>
    <div className="keyfeatures">
        <div className="keyfeaturesone">
            <div>
                <img src={real} alt="real" className="real" />
                <h1 className="realheading">Real-Time Monitoring</h1>
                <p className="realpara">
                    Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.
                </p>
            </div>
        </div>
     
        <div className="keyfeaturesone">
            <div>
                <img src={wave} alt="real" className="real" />
                <h1 className="realheading">Capnogram Visualization</h1>
                <p className="realpara">Get instant feedback on your breathing mechanics</p>
            </div>
        </div>
        <div className="keyfeaturesone">
            <div>
                <img src={protable} alt="real" className="real" />
                <h1 className="realheading">Custom Learning Plans</h1>
                <p className="realpara">Description for another feature.</p>
            </div>
        </div>
        <div className="keyfeaturesone">
            <div>
                <img src={capnogram} alt="real" className="real" />
                <h1 className="realheading">Another Feature</h1>
                <p className="realpara">Description for another feature.</p>
            </div>
        </div>
    </div>
</div>
<div>
  <h1 className='ninecapo'>What Can the CapnoTrainer®GO Do for You?</h1>
  <div className="keyfeatures-container">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.img} alt={feature.title} className="feature-img" />
          <div className="feature-content">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
</div>
<div>
  <img  src={frame }alt="frame" className="frame" />
</div>

<div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>&#x25B3;</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    <div className='backgroundten'>

    <div className='wait'>
      <h1 className='miniheaading'>Don't Wait</h1>
      <h1 className='maxheader'>Transform Your Breathing Today!</h1>
      <p className='dontpara'>Your breath is your power. Take control with the CapnoTrainer® GO, and experience life with greater clarity, confidence, and vitality.</p>
      <button className='ordernowbutton'> Order Now and Start Your Breathing Journey!</button>

    </div>
    </div>
    <div className="fottercontainer">
  <div className="nameandother">
    <img src={logo} alt="name" className="logoimage" />
    <p className="logocontent">
      Join us on a journey towards a healthier, balanced life – where each inhale and exhale contributes to your overall sense of wellness.
    </p>
  </div>

  <div className="contact">
    <h1>Contact</h1>
    <p>Email: achantatarak@gmail.com</p>
    <p>Phone: 8008434124</p>
    <p>Location: East Godavari, Andhra Pradesh</p>
  </div>

  <div className="socialmedia">
    <h1>stay in Touch</h1>
    <div className="social-icons">
      <img src={insta} alt="Instagram" className="icon" />
      <img src={facebook} alt="Facebook" className="icon" />
      <img src={twitter} alt="Twitter" className="icon" />
      <img src={discord} alt="Discord" className="icon" />
    </div>
  </div>
</div>


    </div>
    </div>
  );
};

export default Home;