import React, { useState } from 'react';
import './styles/dashboard_employe.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Sidebar_employe = () => {
    const [startAnimate, setStartAnimate] = React.useState(false);
    const [highlightTopPosition, setStateHighlightTopPosition] = React.useState(0);
    const [currCount, setCurrCount] = React.useState(0);
  
    const onClickTab = (count) => {
      setStartAnimate(false);
      setCurrCount(count);
      setStateHighlightTopPosition(count * 52);
  
      setTimeout(() => {
        setStartAnimate(true);
      }, 100);
    }
  
    React.useEffect(() => {
      
      setTimeout(() => {
        setStartAnimate(true);
      }, 500);
  
      return () => {
        
      }
    }, []);
  
    return (
      <div className="container">
          {/* <h1>Sidebar animation example</h1> */}
          <div className="sidebar">
            <div style={{ top: `${highlightTopPosition}px` }} className={`sidebar__highlight ${startAnimate && 'sidebar__highlight__animate'}`}></div>
            {/* note: will still have to think about this implementation */}
            {/* <div style={{ position: "absolute", height: "500px", width: "50px", backgroundColor: "#049DBF", zIndex: "-1" }}></div> */}
  
            <Link className={currCount === 0 && 'active'} to="/employe/gestion_import" onClick={() => onClickTab(0)}>
              <span className={currCount === 0 && 'text-active'}><i className="fas fa-arrow-right"></i> Import</span>
            </Link>
            <Link className={currCount === 1 && 'active'} to="/employe/gestion_export" onClick={() => onClickTab(1)}>
              <span className={currCount === 1 && 'text-active'}><i className="fas fa-arrow-right"></i> Export</span>
            </Link>
            <Link className={currCount === 2 && 'active'} to="/employe/compte" onClick={() => onClickTab(2)}>
              <span className={currCount === 2 && 'text-active'}><i className="fas fa-arrow-right"></i> Compte</span>
            </Link>
            <Link className={currCount === 3 && 'active'} to="/employe/Deconnexion" onClick={() => onClickTab(3)}>
              <span className={currCount === 3 && 'text-active'}><i className="fas fa-arrow-right"></i> Deconnexion</span>
            </Link>
          </div>
        </div>
    )
  }

export default Sidebar_employe;