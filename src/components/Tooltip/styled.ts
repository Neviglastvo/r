import styled from "styled-components/macro"

export const ScTooltip = styled.span`
	text-decoration: underline dotted;
	position: relative;
	border: 1px solid red;

	&:hover {
		cursor: pointer;
	}
`

export const ScTooltipBody = styled.span<{ isVisible: boolean }>`
	width: 100%;
	min-height: 100%;
	max-height: 200px;
	overflow-y: auto;
	max-width: 300px;
	min-width: 250px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: calc(100% + 10px);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	border: 1px solid red;

	opacity: ${({ isVisible }) => (isVisible === false ? 0 : 1)};

	transition: all 300ms ease;

	/* z-index: 0; ????? */

	&:hover {
		cursor: pointer;
	}
`
