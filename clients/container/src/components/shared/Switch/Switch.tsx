import React, { useContext, useState } from 'react'
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './Styles';
import { LayoutContext } from '../../hooks/useLayouts';
interface props{
  className?:string 
  onChange?:()=>void,
  id?:any,
  color?:string,
  value?:boolean
}
const SwitchInput:React.FC<props> = ({
  className,onChange,id,color,value
}) => {
  const { switchRTL } = useContext(LayoutContext)
  return (
    <CheckBoxWrapper>
			<CheckBox
				id={id} 
				type="checkbox"
				color={color}
				checked={switchRTL}
				onChange={onChange}
			/>
			<CheckBoxLabel htmlFor={id} />
		</CheckBoxWrapper>
  )
}

export default SwitchInput