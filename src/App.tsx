import "./App.css"
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Outlet, Link as RouterLink } from "react-router-dom"
import Copyright from "./components/copyright"

export default function App() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100svh" || "100vh",
				}}
			>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							sx={{ mr: 2 }}
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>

						<Link component={RouterLink} to={"/"} color="inherit">
							Home
						</Link>

						<Link
							component={RouterLink}
							to={"signin"}
							color="inherit"
							ml={"auto"}
						>
							Signin
						</Link>
					</Toolbar>
				</AppBar>

				<Outlet />

				<Copyright sx={{ mt: "auto", mb: 4 }} />
			</Box>
		</>
	)
}
