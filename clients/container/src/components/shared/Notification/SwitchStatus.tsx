import React from 'react'
import {WarningNotif,DangergNotif,InfoNotif} from './MessageNotif'
interface props {
  type?:string | null
}
const SwitchStatus:React.FC<props> = ({type}) => {
  switch (type) {
    case 'WARNING':
      return <WarningNotif/>;
    case 'DANGER':
      return <DangergNotif/>;
    case 'INFO':
      return <InfoNotif/>;
    default:
      // If the type is not recognized, you can return a default component or null.
      return <WarningNotif/>;
  }
}

export default SwitchStatus