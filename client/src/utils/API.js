import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    scrapeLinkedIn: () => {
        return axios.get("/external/linkedIn/get")
    }
}