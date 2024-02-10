import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const about=()=>{
    alert("About page")
  }

  useEffect(() => {
    // Mettre à jour l'état une fois que le composant est monté
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div className='logo'>
        <Link to="/">
          <img src={require('./logos.png')} width="50px" alt="Logo" />
        </Link>
        <img alt='logo' src={require("./line (3).png")} width="50px" height="30px" style={{ marginLeft: "0px", padding: "0px" }} />
        <Link to="/" className='title'>CAF</Link>
      </div>
      <div className='menu'>
        <Link to="/" onClick={() => handleLinkClick('home')} className={activeLink === '/' ? 'lien-active' : 'lien'}>
          Home
        </Link>
        <a href="#sectio" onClick={about}>About</a>
        <Link to="/historical" onClick={() => handleLinkClick('group')} className={activeLink === '/historical' ? 'lien-active' : 'lien'}>
          HistoryOfCan
        </Link>
        <Link to="/matchs" onClick={() => handleLinkClick('matche')} className={activeLink === '/matchs' ? 'lien-active' : 'lien'}>
          Matches
        </Link>
        <Link to="/groups" onClick={() => handleLinkClick('groups')} className={activeLink === '/groups' ? 'lien-active' : 'lien'}>
          Groups
        </Link>
      </div>
      <div className="button">
        <a href="#" className='btnlogin'>Jalil Mehdi</a>
        <i className='bx bxs-user'></i>
      </div>
    </nav>
  );
}
