
import react_img from './assets/react-core-concepts.png';
import Header from './componets/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import Tabbutton from './Tabbutton.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data.js'
import { CoreConcept } from './componets/CoreConcepts.jsx';





const reactDescption =["Fundamental","Core","Supporting"];

export function dynamicResponce(max){
  return Math.floor(Math.random()* (max+1));
}


function App() {
  const [selectElement,setSelectedElement]=useState()
    function handelUpdate(selectElement)
    {
     
      setSelectedElement(selectElement)
    }
  let tabContent=<p>Please Selected the Element</p>
  if(selectElement)
    {
         
    tabContent=(
    <div id="tab-content">
    <h3>{EXAMPLES[selectElement].title}</h3>
      <p>{EXAMPLES[selectElement].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectElement].code }
        </code>
      </pre>
      </div>
      );
  }
  return (
    <div>
      <Header/>
      <main>  
      <section id="core-concepts">
        <h2>Core-Concepts</h2>
       <ul>
        {CORE_CONCEPTS.map((itemConcepts)=><CoreConcept key={itemConcepts.title} {...itemConcepts}/> )}
                  {/* <CoreConcept
                    title={"Ract js"}
                    description={"React is a JavaScript library for building user interfaces."}
                    image={CORE_CONCEPTS[0].image}
                  /> 
                  <CoreConcept {...CORE_CONCEPTS[1]}/>  */}
                  {/* short-hand syntax for props */}

                  {/* <CoreConcept
                    title={CORE_CONCEPTS[2].title}
                    description={CORE_CONCEPTS[2].description}
                    image={CORE_CONCEPTS[2].image}
                  /> 
                <CoreConcept {...CORE_CONCEPTS[3]}/>  */}
        </ul>
      </section>

      <section  id="examples">
        <h2>Example</h2>
        <menu>
          <Tabbutton onSelect={()=>handelUpdate('components')}>Componet</Tabbutton>
          <Tabbutton onSelect={()=>handelUpdate('jsx')}>JSX</Tabbutton>
          <Tabbutton onSelect={()=>handelUpdate('props')}>Props</Tabbutton>
          <Tabbutton onSelect={()=>handelUpdate('state')}>State</Tabbutton>
        </menu>
   
      {tabContent}
   
      </section>
    
      </main>
        
    </div>
  );
}

export default App;
