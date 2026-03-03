const AppRouter = () => {
    return(
        <>
        <NavBar />
            <Toaster />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardLayout />} />
                </Routes>
            <Footer />
        </>
    )
}

export default AppRouter

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:url" element={<LandingPage />} />   
        </Routes>
    )
}