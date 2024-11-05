import styled from 'styled-components';

interface CheckBoxProps {
  color?: string;
}

export const CheckBoxWrapper = styled.div`
	position: relative;
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 38px;
	height: 20px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: ' ';
    box-sizing:border-box;
		display: block;
		border-radius: 50%;
		width: 15.3px;
		height: 15.3px;
		margin: 2.3px;
    margin-left:2.4px;
		background: #ffffff;
		
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input<CheckBoxProps>`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: ${(props) => (props.color ? props.color : '#e2513a')};
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 16px;
			height: 16px;
			margin-left: 20.2px;
			transition: 0.2s;
		}
	}
`;