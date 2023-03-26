//in DEV Mode process.env does not have .env content
import * as dotenv from 'dotenv'

dotenv.config()

const config = {
    rootdir: (process.env.ROOTDIR==null)?process.cwd():process.env.ROOTDIR
}

export {
    config
}
