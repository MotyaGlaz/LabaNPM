const axios = require('axios').default;
axios
    .get('https://vk.com/feed')
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })