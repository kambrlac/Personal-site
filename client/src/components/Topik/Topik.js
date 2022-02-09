import * as React from 'react';
import './Topik.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Outlet
} from "react-router-dom";
import { getInfo, getResource, getInfos } from "./api";
import img1 from './Pictures/404.jpeg';


  function Contact(){
      return(
        <React.Fragment>
        <h1>So...You were scammed into contacting me...</h1>
        <p>My email is branko.n.petrovic@gmail.com</p>
        <p>
          Press{" "}<Link className='here' to="/info">here</Link> to go back.
        </p>
      </React.Fragment>
      )
  }

  function NotFound() {
    return(
      <React.Fragment>
      <div className='not-found'>
      <h1>*The Weather Girls - It's Raining Men STOPS*</h1>
      <p>Wow... Didn't think you'd find this.. Awkward..</p>
      <img className='palma' src={img1} alt='you..dont want none of this'/>
      <p>
        You want me to play EKV for real... Wow..{" "}<Link className='here' to="/info">go home..</Link>
      </p>
      </div>
    </React.Fragment>
    )

  }
  
  function Home() {
    return (
      <React.Fragment>
        <h1>Welcome</h1>
        <p>Hi, my name is Branko, and I'm a self taught web developer.</p>
        <p>
          Press{" "}<Link className='here' to="/info">here</Link> to see more about me.
        </p>
      </React.Fragment>
    );
  }
  
  function Resource() {
    const { infoId, resourceId } = useParams();
  
    const { name, description, link, video } = getResource({ infoId, resourceId });
    
   
  
    if(link == null){
        return (
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          );
    }else{
        return (
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
              <a className='links' href={link}>Click here to check them out</a>
              {/* <div className='app__video'>
                <video
                  src={video}
                  ref={vidRef}
                  type='video/mp4'
                  loop
                  controls={false}
                  muted
                />
              </div> */}
              <p>(Free advertising, I know T_T)</p>
            </div>
          );
    }
  }
  
  function Info() {
    const { infoId } = useParams();
    const info = getInfo(infoId);
  
    return (
      <div>
        <h2>{info.name}</h2>
        <p>{info.description}</p>
  
        <ul>
          {info.resources.map((sub) => (
            <li key={sub.id}>
              <Link className='links' to={sub.id}>{sub.name}</Link>
            </li>
          ))}
        </ul>
  
  
        <Outlet />
      </div>
    );
  }
  
  function Infos() {
    const infos = getInfos();
  
    return (
      <div>
        <h1>Info</h1>
        <ul>
          {infos.map(({ name, id }) => (
            <li key={id}>
              <Link className='links' to={id}>{name}</Link>
            </li>
          ))}
        </ul>
  
  
        <Outlet />
      </div>
    );
  }

  export default function Topik() {
    return (
      <Router>
        <div className='list'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact?*" element={<NotFound />} />
            <Route path="/info/*" element={<NotFound />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/info" element={<Infos />}>
              <Route path=":infoId" element={<Info />}>
                <Route path=":resourceId" element={<Resource />} />
              </Route>
            </Route>
            
          </Routes>
        </div>
      </Router>
    );
  }
  
  