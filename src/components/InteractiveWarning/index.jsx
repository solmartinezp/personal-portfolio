import React from "react";
import './styles.css';

export default function InteractiveWarning() {
    return (
        <div className='layout-3d'>
        <span class="material-symbols-outlined">
          swipe_vertical
        </span>
        <p>
          This is a 3D interactive background.
        </p>
        <p>
          Feel free to move around!
        </p>
      </div>
    );
};