import bodyParser from "body-parser"
import express from "express"
import fs from "fs"
import qrcode from "qrcode"
import promptPayQr from "promptpay-qr"
import path from "path"
import {fileURLToPath}  from "url"
import ejs from "ejs"

// this variable object stores any modules for application
export const modulesApp = {
    application : express() ,
    express : express ,
    path : path ,
    router : express.Router(),
    bodyParser : bodyParser ,
    promptPayQr : promptPayQr,
    qrcode : qrcode ,
    fs : fs ,
    fileURLToPath : fileURLToPath ,
    ejs : ejs
}