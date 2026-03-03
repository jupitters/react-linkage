import { subDomainList } from "./constant"

export const getApps = () => {
    const subdomain = getSubdomain(window.location.hostname)

    const mainApp = subDomainList.find((app) => app.main)
    if(subdomain === "") return mainApp.app

    const apps = subDomainList.find((app) => subdomain === app.subdomain)

    return apps ? apps.app : mainApp.app
}

export const getSubdomain = (location) => {
    if(location.includes("localhost")){
        const locationParts = location.split(".")
        return locationParts.length > 1 ? locationParts[0] : "";
    }
    
    const parts = location.split(".");
    return parts.length > 2 ? parts[0] : "";
}