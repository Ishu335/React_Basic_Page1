
import TabButton from '../../TabButton.jsx';
import { useState } from 'react';
import {EXAMPLES}  from  '../../data.js';

import { Tabs } from '../Tabs/Tabs.jsx';



export default function Example()
{
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
    return(
         <section  id="examples">
        <h2>Example</h2>
        <Tabs 
         buttonContainer='menu'
        // buttonContainer={<Section>}
        buttons={
            <>
                <TabButton onSelect={()=>handelUpdate('components')}>Componet</TabButton>
                <TabButton onSelect={()=>handelUpdate('jsx')}>JSX</TabButton>
                <TabButton onSelect={()=>handelUpdate('props')}>Props</TabButton>
                <TabButton onSelect={()=>handelUpdate('state')}>State</TabButton>
            </>
            }>
            {tabContent}
   
        </Tabs>
      </section>
    )

}