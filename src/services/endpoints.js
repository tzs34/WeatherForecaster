import Creds from '../creds'

let {LOCAL_URL} = Creds

let localUrl = process.env.NODE_ENV  === 'production' ? 'to-be-decided' : LOCAL_URL

const API_MAP = {

    getPets: `${localUrl}\pets`

}

export default API_MAP;
