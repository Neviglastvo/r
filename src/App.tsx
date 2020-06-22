import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "styled-theming"
import { Tooltip } from "components/Tooltip"

const backgroundColor = theme.variants("mode", "variant", {
	default: { light: "gray", dark: "darkgray" },
	primary: { light: "blue", dark: "darkblue" },
	success: { light: "green", dark: "darkgreen" },
	warning: { light: "orange", dark: "darkorange" },
})

const Button = styled.button<{ variant?: string }>`
	background-color: ${backgroundColor};
`

function App() {
	return (
		<ThemeProvider theme={{ mode: "light" }}>
			<div
				style={{
					padding: "10px",
					width: "100%",
					height: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflowX: "hidden",
				}}
			>
				<Tooltip
					content="Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World"
					position="top"
				>
					Hello World
				</Tooltip>
			</div>
		</ThemeProvider>
	)
}

export default App
