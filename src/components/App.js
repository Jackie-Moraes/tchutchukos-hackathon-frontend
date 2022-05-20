import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import DefaultPage from "../layouts/DefaultPage.js"

import GlobalStyle from "../styles/globalstyle.js"
import { theme } from "../styles/theme.js"
import MainPage from "../pages/MainPage.js"

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<DefaultPage />}>
                        <Route path="" element={<MainPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
