import { subDomainList } from "./constant"

export const getApps = () => {
    const subdomain = getSubdomain(window.location.hostname)

    const mainApp = subDomainList.find((app) => app.main)
}

export const getSubdomain = (location) => {
    const locationParts = location.split(".")
    const isLocalhost = location.slice(-1)[0] === "localhost"
    const sliceTill = isLocalhost ? -1 : -2
    return locationParts.slice(0, sliceTill).join("")
}