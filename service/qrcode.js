import {modulesApp} from "./modules.app.js";
import {Logging} from "../log/logging.js";

const mobile = '064-676-0613'
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
const generatePayload = modulesApp.promptPayQr
const fs = modulesApp.fs
const qrcode =  modulesApp.qrcode

export const generateQr = (amount) => {
    const payload = generatePayload ( mobile , { amount } )
    qrcode.toString(payload, options, (err, svg) => {
        if (err) return Logging.winstonLog.debug(err)
        fs.writeFileSync('./ui/images/qr.svg', svg) // remember , it always starts on your static folder  (Look at this  const _staticFolder = path.join(_dirname,'../ui'))
    })
}