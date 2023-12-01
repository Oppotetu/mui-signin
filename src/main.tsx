import React, { createContext, useContext } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Signin from "./routes/signin.tsx"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Root from "./routes/root.tsx"
import theme from "./theme.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Root />,
			},
			{
				path: "signin",
				element: <Signin />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	</React.StrictMode>
)
