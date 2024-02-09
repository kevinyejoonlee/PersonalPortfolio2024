import React from 'react';
import './skills.css';

import languages from "../../assets/symbols/languages.svg"; 
import stack from "../../assets/symbols/stack.svg"; 
import tools from "../../assets/symbols/tools.svg"; 



const Skills = () => {
  return (
    <section id='skills'>

       <div class="skills_container">

        <div class="skill_container_items" id="languages">
          <svg class="skillIcons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.664 502.664">  <path class="skillIconsColor" fill="#010002" d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431C153.821,303.954,153.821,358.226,153.821,358.226z"/>  <path class="skillIconsColor" fill="#010002" d="M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z"/>  <path class="skillIconsColor" fill="#010002" d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183L348.843,358.226z"/></svg>
            <h1 class="bubble_title" >Languages</h1>
            <p class="buble_subtitle">Proficient in various programming languages.</p>
            <p class="skillsItems"> 
            <span>Python</span>
            <span>JavaScript</span>
            <span>Java</span>
            <span>C/C++</span>
            <span>SQL</span>
            <span>VBA</span>
            <span>R</span>
            <span>HTML/CSS</span>
            </p>
        </div>

        <div class="skill_container_items" id="frameworks_Packages">
        <svg class="skillIcons" width="3.5rem" height="3.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m1.75 11 6.25 3.25 6.25-3.25m-12.5-3 6.25 3.25 6.25-3.25m-6.25-6.25-6.25 3.25 6.25 3.25 6.25-3.25z"/></svg>
          <h1 class="bubble_title">Frameworks & Packages</h1>
          <p class="buble_subtitle">Experienced in popular frameworks and tools. </p>
          <p class="skillsItems">
          <span>React.js</span>
          <span>Vue.js</span>
          <span>Express.js</span>
          <span>Node.js</span>
          <span>EJS</span>
          <span>jQuery</span>
          <span>Bootstrap</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Matplotlib</span>
          </p>
        </div>

        <div class="skill_container_items" id="DeveloperTools">
          <svg class="skillIconsColor" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path fill-rule="nonzero" clip-rule="evenodd" d="M14.773 3.485l-.78-.184-2.108 2.096-1.194-1.216 2.056-2.157-.18-.792a4.42 4.42 0 0 0-1.347-.228 3.64 3.64 0 0 0-1.457.28 3.824 3.824 0 0 0-1.186.84 3.736 3.736 0 0 0-.875 1.265 3.938 3.938 0 0 0 0 2.966 335.341 335.341 0 0 0-6.173 6.234c-.21.275-.31.618-.284.963a1.403 1.403 0 0 0 .464.967c.124.135.272.247.437.328.17.075.353.118.538.127.316-.006.619-.126.854-.337 1.548-1.457 4.514-4.45 6.199-6.204.457.194.948.294 1.444.293a3.736 3.736 0 0 0 2.677-1.133 3.885 3.885 0 0 0 1.111-2.73 4.211 4.211 0 0 0-.196-1.378zM2.933 13.928a.31.31 0 0 1-.135.07.437.437 0 0 1-.149 0 .346.346 0 0 1-.144-.057.336.336 0 0 1-.114-.11c-.14-.143-.271-.415-.14-.568 1.37-1.457 4.191-4.305 5.955-6.046.1.132.21.258.328.376.118.123.245.237.38.341-1.706 1.75-4.488 4.564-5.98 5.994zm11.118-9.065c.002.765-.296 1.5-.832 2.048a2.861 2.861 0 0 1-4.007 0 2.992 2.992 0 0 1-.635-3.137A2.748 2.748 0 0 1 10.14 2.18a2.76 2.76 0 0 1 1.072-.214h.254L9.649 3.839v.696l1.895 1.886h.66l1.847-1.816v.258zM3.24 6.688h1.531l.705.717.678-.674-.665-.678V6.01l.057-1.649-.22-.437-2.86-1.882-.591.066-.831.849-.066.599 1.838 2.918.424.215zm-.945-3.632L4.609 4.58 4.57 5.703H3.494L2.002 3.341l.293-.285zm7.105 6.96l.674-.673 3.106 3.185a1.479 1.479 0 0 1 0 2.039 1.404 1.404 0 0 1-1.549.315 1.31 1.31 0 0 1-.437-.315l-3.142-3.203.679-.678 3.132 3.194a.402.402 0 0 0 .153.105.477.477 0 0 0 .359 0 .403.403 0 0 0 .153-.105.436.436 0 0 0 .1-.153.525.525 0 0 0 .036-.184.547.547 0 0 0-.035-.184.436.436 0 0 0-.1-.153L9.4 10.016z"/></svg>
          <h1 class="bubble_title">Developer Tools</h1>
          <p class="buble_subtitle">Familiar with development and design software.</p>
          <p class="skillsItems">
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>Linux</span>
          <span>Amazon AWS EMR</span>
          <span>Postman</span>
          <span>Git</span>
          <span>Wireshark</span>
          <span>Figma</span>
          </p>
        </div>
      </div> 
            

    </section>
  )
}

export default Skills;
