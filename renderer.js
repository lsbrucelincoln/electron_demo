checkUpdate()
const axios = require('axios');
const shell = electron.shell;

function checkUpdate() {

}
axios.get('https://raw.githubusercontent.com/iview/iview-cli/master/package.json?' + Date.parse(new Date()))
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });