import React, { ReactNode } from 'react';
import {Button} from '@nextui-org/button'
import Spinner from '../../../icons/Spinner';
interface ButtonProps {
  children: ReactNode;
  loading?:boolean
}

const CustomButton: React.FC<ButtonProps> = ({children,loading=true}) => {
  return (
    <Button
      isLoading
      color="secondary"
      className=' flex items-center bg-textColor gap-2 justify-center border border-greyLight w-full 
       py-2 px-2 rounded-md'
      spinner={
        loading && (
            <Spinner/>
        )
      }
    >
      {children}
    </Button>
  );
};

export default CustomButton;