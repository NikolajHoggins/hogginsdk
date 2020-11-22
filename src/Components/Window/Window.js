import Draggable from 'react-draggable';
import React from 'react';
import PropTypes from 'prop-types';
import './Window.scss';
import WindowBar from '../WindowBar';

export default function Window({ children }) {
  return (
    <Draggable
      handle=".window-bar"
      defaultPosition={{ x: 100, y: 100 }}
      position={null}
      grid={[5, 5]}
      scale={1}
      onStart={() => {}}
      onDrag={() => {}}
      onStop={() => {}}
    >
      <div className="window">
        <WindowBar />
        {children}
      </div>
    </Draggable>
  );
}

Window.propTypes = {
  children: PropTypes.string.isRequired,
};
