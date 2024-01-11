import {modulesApp} from "./service/modules.app.js";
import {routerAndStaticFolder} from "./router/api.promtpay.js";
class Display {
    static init() {

        const app = modulesApp.application
        const express = modulesApp.express
        const _staticFolder = routerAndStaticFolder._staticFolder
        const router = routerAndStaticFolder.router
        const ejs = modulesApp.ejs

        app.engine('html', ejs.renderFile) // it's importance , use to read html file
        app.use(express.static(_staticFolder)) // can open folder image
        app.use(router)
        app.listen(3000 , (error) => {
            if (!error) {
                console.log(`You're on port 3000`)
            } else {
                throw error
            }
        })

    }
}

Display.init()