/*===============================================
    LOCALLY RUNNING BUILD OF CUSTOM DEVTOOLS
=================================================*/
import React  from 'react'
import { createDevTools } from 'redux-devtools'
import Dispatcher  from 'redux-devtools-dispatch'
import DockMonitor  from 'redux-devtools-dock-monitor'
import LogMonitor  from 'redux-devtools-log-monitor'
import MultipleMonitors  from 'redux-devtools-multiple-monitors'

const DevTools =  createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q"
               defaultIsVisible={false}>
    <MultipleMonitors>
      <LogMonitor />
      <Dispatcher />
    </MultipleMonitors>
  </DockMonitor>
);

export default DevTools;
