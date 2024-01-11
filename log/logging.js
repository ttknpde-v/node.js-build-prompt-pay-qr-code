import {createLogger , format , transports} from "winston"
import path from "path"
export class Logging {
    static get winstonLog() {
        return createLogger({
            level : 'silly' ,
            format : format.
            combine(
                format.label({label : path.basename(process.argv[1])}) ,
                format.timestamp({format : 'YYYY-MM-DD HH:mm:ss'}) ,
                format.printf((info) => `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`)
            ) ,
            transports : [ new transports.Console ]
        })
    }
}

