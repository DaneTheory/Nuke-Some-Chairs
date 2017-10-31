/*===============================================
          SERVER SIDE DEVTOOLS RENDER
                    **WIP**
=================================================*/
import React  from 'react'
import { render } from 'react-dom'
import DevTools  from '../assets/Devtool'

export default function createDevToolsWindow(store) {
  // const popup = window.open(null, 'Redux DevTools', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');
  // // Reload in case it already exists
  // popup.location.reload();


    document.write('<div id="react-devtools-root"></div>');
    render(
      <DevTools store={store} />,
      document.getElementById('react-devtools-root')
    );
}
