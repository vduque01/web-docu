// import routes from "./routes.json"
// interface Route {
//     id: string, 
//     name: string
// }
// export const getNotionRoute = (name: string): Route | null => {
//     return routes.find((r: Route) => r.name == name)
// }

import routes from "./routes.json"

export const getNotionRoute = (nombre)=> {
    return routes.find((route) => route.name == nombre)
}