import AppRouter, { SubDomainRouter } from "../AppRouter";

export const subDoaminList = [
    {subdomain: "www", app: AppRouter, main:true},
    {subdomain: "url", app: SubDomainRouter, main:false},
];