import './StatusIcon.css'

import { VscDebugBreakpointData as Process } from "react-icons/vsc";
import { VscDebugBreakpointLogUnverified as Detained } from "react-icons/vsc";
import { VscDebugBreakpointUnsupported as Abandoned } from "react-icons/vsc";

function StatusIcon({ status, onStatus }){
  
  const iconType = {
    'v' : <Process className='Icon-svg' fill='green' /> ,
    '~' : <Detained className='Icon-svg' fill='blue' /> ,
    'x' : <Abandoned className='Icon-svg' fill='red' />
  }

  return (
    <span onClick={ onStatus } className='status'>
      { iconType[status] }
    </span>
  )
}

export { StatusIcon };
