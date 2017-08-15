var electron = require('electron');
var axios = require('axios');
var shell = electron.shell;
checkUpdate()

function checkUpdate() {
    axios.get('https://raw.githubusercontent.com/lsbrucelincoln/electron_demo/master/package.json?' + Date.parse(new Date()))
        .then(function(response) {
            var data = response.data;
            // 获得本地版本进行比较
            getLocalVersion(data)
        })
        .catch(function(error) {
            console.log(error);
        });

}

function getLocalVersion(data) {
    axios.get('./package.json')
        .then(function(response) {
            var localData = response.data;
            console.log('local version is ' + localData.version)
            console.log('lastest version is ' + data.version)
            if (data.version != localData.version) {
                alert('请先下载最新的安装包')
                shell.openExternal(localData.repository);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}