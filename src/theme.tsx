import { createTheme } from "@mui/material/styles"
import { useMemo, useState } from "react"

function ToggleColorMode() {
	const [mode, setMode] = useState<"light" | "dark">("light")
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
			},
		}),
		[]
	)
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[]
	)
}

const theme = createTheme({
	// palette: {
	// 	mode: "dark",
	// },
})

export default theme
