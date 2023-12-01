import { Box, Container, IconButton, Typography } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import theme from "../theme"
import { createContext, useContext } from "react"

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function Root() {
	const colorMode = useContext(ColorModeContext)

	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					CHROOT
				</Typography>
				{theme.palette.mode} mode
				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color="inherit"
				>
					{theme.palette.mode === "dark" ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
			</Box>
		</Container>
	)
}
