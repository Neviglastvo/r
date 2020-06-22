/* eslint-disable react-hooks/exhaustive-deps */
import React, {
	FC,
	MutableRefObject,
	ReactChild,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from "react"
import { ScTooltip, ScTooltipBody } from "./styled"

type TooltipProps = {
	children: ReactChild | ReactNode | string
	content: ReactChild | ReactNode | string
	position: string
}

export const Tooltip: FC<TooltipProps> = ({ content, position, children }) => {
	const node = useRef() as MutableRefObject<HTMLElement>
	const [isVisible, setIsVisible] = useState(false)

	const handleHover = (event: MouseEvent) => {
		const target = event.currentTarget as Node

		if (node?.current.contains(target)) {
			// inside
			return
		}
		// outside
		setIsVisible(false)
	}

	useEffect(() => {
		// add when mounted
		document.addEventListener("mouseenter", handleHover)
		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mouseenter", handleHover)
		}
	}, [handleHover])

	return (
		<ScTooltip
			ref={node}
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{children}
			{isVisible && <ScTooltipBody isVisible={isVisible}>{content}</ScTooltipBody>}
		</ScTooltip>
	)
}
