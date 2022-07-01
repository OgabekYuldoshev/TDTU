import { http } from "../servises"

export const NewsList = () => http.request.get(`/public/api/news/count/15`)

export const NewsHomeList = () => http.request.get("/public/api/news")

export const NewsSingle = ({ id }) => http.request.get(`/public/api/news/${id}`)

export const Graduats = () => http.request.get("/public/api/graduats")

export const UsifulLinks = () => http.request.get("/public/api/usefullinks")

export const Networks = () => http.request.get("/public/api/networks")

export const Workers = () => http.request.get("/public/api/workers")

export const Rectoret = () => http.request.get("/public/api/rectorats")

export const FinansActivity = () => http.request.get("/public/api/acts")
