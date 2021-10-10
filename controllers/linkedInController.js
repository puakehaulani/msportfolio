const axios = require("axios")

// const api_key = process.env.REACT_APP_PROXYCURL_API_KEY
const api_key = "b7eecfb0-3bea-4c43-b828-b777164ca8b5"
module.exports = {
    scrape: function (req, res) {
        axios.get('https://nubela.co/proxycurl/api/v2/linkedin?url=https://www.linkedin.com/in/michael-scales/&use_cache=if-present', {
            headers: {
                'Authorization': 'Bearer ' + api_key
            }
        })
            .then(data => {
                res.json(data.data)

            })
            .catch((error) => {
                console.error(error)
            })
    }
}

