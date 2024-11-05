import { render, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils'; // Import act
import React from 'react'
import TopBar from './TopBar'
interface NavbarProps {
  menuActive: boolean;
  setMenuActive:any
}
describe('TopBar Component', () => {
  it('renders a heading', () => {
    act(() => {
      render(<TopBar menuActive={false} setMenuActive={() => {}} />);
    });
  })
})