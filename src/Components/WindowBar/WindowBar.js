import React from 'react';
import './WindowBar.scss';

export default function WindowBar() {
  return (
    <div className="window-bar">
      <div className="manage">
        <button className="manage-button close" type="button" aria-label="close window" />
        <button className="manage-button minimize" type="button" aria-label="minimize window" />
        <button className="manage-button size" type="button" aria-label="resize window" />
      </div>
    </div>
  );
}
