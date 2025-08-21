

import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from '../CoreConcept.jsx';



export default function CoreConcepts({...props}){
    return(
         <section {...props}>
                <h2>Core-Concepts</h2>
               <ul>
                {
                CORE_CONCEPTS.map((itemConcepts)=><CoreConcept key={itemConcepts.title} {...itemConcepts}/> )}
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
    )

}