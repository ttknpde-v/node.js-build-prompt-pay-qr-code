import {modulesApp} from "../service/modules.app.js";
import {Logging} from "../log/logging.js";
import {generateQr} from "../service/qrcode.js";

const router = modulesApp.router
// const app = modulesApp.application
const path = modulesApp.path
const express = modulesApp.express
const bodyParser = modulesApp.bodyParser
const fileURLToPath = modulesApp.fileURLToPath
// const ejs = modulesApp.ejs

// fileURLToPath(import.meta.url) => B:\practice-nodejs-php-typescript-angular\applications\Project-NodeJs\node-js-promptpay-qrcode-modify\router\api.promtpay.js
const _dirname = path.dirname(fileURLToPath(import.meta.url)) // B:\practice-nodejs-php-typescript-angular\applications\Project-NodeJs\node-js-promptpay-qrcode-modify\router
const _userinterface = path.join(_dirname,'../ui/userinterface.html');
const _staticFolder = path.join(_dirname,'../ui')
let _image = '../images/nobody.png' // *** focus at ../ , Why ?

// set middler ware for pass http post
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

// Logging.winstonLog.info(_staticFolder)

router.get('/', (req, res) => {
    Logging.winstonLog.info('access path :/')
    res.json({
        message : 'welcome back, ttknpdev'
    })
})


router.get('/api/prompt-pay', (req, res) => {
    // res.sendFile(_userinterface) first way to open html on server
    Logging.winstonLog.info('access path :/api/prompt-pay')
    let data = {
        title : 'Basic building the QR-Code' ,
        image : _image
    }
    res.render(_userinterface , { // can use because I have set engine
        data : data
    }) // can call , just using variable inside <% js %>
})


router.post('/api/qrcode', (req, res) => {
    let amount = req.body.amount
    Logging.winstonLog.info('access path :/api/qrcode')
    // Logging.winstonLog.info(amount)
    generateQr(parseInt(amount))
    _image = '../images/qr.svg'
    let data = {
        title : 'Basic building the QR-Code' ,
        image : _image
    }
    res.render(_userinterface , { // can use because I have set engine
        data : data
    }) // can call , just using variable inside <% js %>
})

/*

app.engine('html', ejs.renderFile) // it's importance , use to read html file
app.use(express.static(_staticFolder)) // can open folder image
app.use(router)
app.listen(3000,function (e) {
    if (e) console.log(e)
})
*/

export const routerAndStaticFolder = {
    router : router ,
    _staticFolder : _staticFolder
}