import React from 'react'
import Guasts from './Guasts'
import Rooms from './Rooms'
import Food from './Food'
import Config from './Config'
interface props{
  type?:string | null
}
const SwitchNot: React.FC<props> = ({ type }) => {
  switch (type) {
    case 'GUAST':
      return <Guasts/>;
    case 'ROOMS':
      return <Rooms/>;
    case 'CONFIG':
      return <Config/>;
    case 'FOOD':
      return <Food/>;
    default:
      // If the type is not recognized, you can return a default component or null.
      return <Guasts/>;
  }
};


export default SwitchNot