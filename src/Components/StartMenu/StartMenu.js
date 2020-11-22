import React, { useEffect, useRef, useState } from 'react';
import './StartMenu.scss';

export default function StartMenu() {
  const [shown, setShown] = useState(false);
  const menuRef = useRef();

  const handleClickOutsite = (e) => {
    if (!e.target.className.includes('menu')) {
      setShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsite);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsite);
    };
  }, []);

  useEffect(() => {
    menuRef.current.style.bottom = shown ? '42px' : '-500px';
  }, [shown]);

  return (
    <div className="start-menu">
      <button onClick={() => setShown(!shown)} className="menu-icon" type="button">
        Open
      </button>
      <div className="menu" ref={menuRef} id="start-menu">
        hello
      </div>
    </div>
  );
}
