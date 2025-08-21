
import Header from './componets/Header.jsx';
import  CoreConcepts  from './componets/CoreConcepts/CoreConcepts.jsx';
import Examples from './componets/Examples/Examples.jsx';

const reactDescption =["Fundamental","Core","Supporting"];

export function dynamicResponce(max){
  return Math.floor(Math.random()* (max+1));
}

function App() {

  return (
    <div>
      <Header/>
      <main>  
      <CoreConcepts id="core-concepts"/>  {/* <= this a example of ...props */}
      <Examples/>
    
      </main>
        
    </div>
  );
}

export default App;
