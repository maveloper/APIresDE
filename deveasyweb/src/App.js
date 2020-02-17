import React, {useState , useEffect} from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const[latitude, setLatitude] = useState('');
  const[longitude, setLongitude] = useState('');



useEffect(() =>{
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const {latitude, longitude } = position.coords;

      setLatitude(latitude);
      setLongitude(longitude);
    },
    (err) => {
      console.log(err);
    },
    {
      timeout: 30000,
    }
  )

},[]);


    return (
   <div id="app">
     <aside>
      <strong>Register</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required/>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Your tech skills</label>
          <input name="techs" id="techs" required/>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
            type="number" 
            name="latitude" 
            id= "Latitude" 
            required 
            value={latitude}
            onChange={e => setLatitude(e.targer.value)}/>  
        </div>

        <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange={e => setLongitude(e.targer.value)} />
        </div>
        </div>
 
        <button type="submit">Save</button>

      </form>
     </aside>

     <main>
       <ul>
         <li className="dev-item">
           <header>
             <img src="https://avatars2.githubusercontent.com/u/57489512?s=460&v=4" alt="May Santos"/>
             <div className="user-info">
               <strong>May Santos</strong>
               <span>Node.jS, ReactJS, React Native,Python </span>
             </div>
           </header>
           <p>JS/ReactJS/Python - I'm a very curious person and passionate about creations, interactivity on multiplatforms and solve problems. Learning React Native</p>
           <a href="https://github.com/maveloper">Access GitHub profile</a>
         </li>

         <li className="dev-item">
           <header>
             <img src="https://avatars2.githubusercontent.com/u/57489512?s=460&v=4" alt="May Santos"/>
             <div className="user-info">
               <strong>May Santos</strong>
               <span>Node.jS, ReactJS, React Native,Python </span>
             </div>
           </header>
           <p>JS/ReactJS/Python - I'm a very curious person and passionate about creations, interactivity on multiplatforms and solve problems. Learning React Native</p>
           <a href="https://github.com/maveloper">Access GitHub profile</a>
         </li>

         <li className="dev-item">
           <header>
             <img src="https://avatars2.githubusercontent.com/u/57489512?s=460v=4" alt="May Santos"/>
             <div className="user-info">
               <strong>May Santos</strong>
               <span>Node.jS, ReactJS, React Native,Python </span>
             </div>
           </header>
           <p>JS/ReactJS/Python - I'm a very curious person and passionate about creations, interactivity on multiplatforms and solve problems. Learning React Native</p>
           <a href="https://github.com/maveloper">Access GitHub profile</a>
         </li>

         <li className="dev-item">
           <header>
             <img src="https://avatars2.githubusercontent.com/u/57489512?s=460&v=4" alt="May Santos"/>
             <div className="user-info">
               <strong>May Santos</strong>
               <span>Node.jS, ReactJS, React Native,Python </span>
             </div>
           </header>
           <p>JS/ReactJS/Python - I'm a very curious person and passionate about creations, interactivity on multiplatforms and solve problems. Learning React Native</p>
           <a href="https://github.com/maveloper">Access GitHub profile</a>
         </li>


       </ul>

     </main>
   </div> 
   
   );

  
}

export default App;


