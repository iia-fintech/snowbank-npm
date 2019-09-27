var request = require("request");

module.exports = {
    initUser: (token, callback) => {
        var options = { method: 'GET',
            url: 'https://api.snowbank.me/init-user',
            json: true,
            headers: 
            {   'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Authorization: token } };
        request(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    userHash: body.userHash,
                    message: body.message
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
        
    },
    createUser: (token, userHash, password, callback) => {
        var options = { method: 'POST',
            url: 'https://api.snowbank.me/create-user',
            headers: 
            {   Authorization: token,
                'Content-Type': 'application/json' },
                body: '{ "password": '+password+', "userHash": '+userHash+'}' };
        request.get(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    message: body.message
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
    },
    userBalance: (token, userHash, callback) => {
        var options = { method: 'POST',
            url: 'https://api.snowbank.me/user/balance',
            headers: 
            {   Authorization: token,
                'Content-Type': 'application/json' },
                body: '{ "userHash": '+userHash+'}' };
        request.get(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    message: body.message,
                    balance: body.balance
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
    },
    generateAddress: (token, userHash, callback) => {
        var options = { method: 'POST',
            url: 'https://api.snowbank.me/user/generate-address',
            headers: 
            {   Authorization: token,
                'Content-Type': 'application/json' },
                body: '{ "userHash": '+userHash+'}' };
        request.get(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    message: body.message,
                    address: body.address
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
    },
    publicKey: (token, userHash, callback) => {
        var options = { method: 'POST',
            url: 'https://api.snowbank.me/user/public-key',
            headers: 
            {   Authorization: token,
                'Content-Type': 'application/json' },
                body: '{ "userHash": '+userHash+'}' };
        request.get(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    message: body.message,
                    publicKey: body.publicKey
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
    },
    createChannel: (token, fromUserHash, toUserHash, satoshi, callback) => {
        var options = { method: 'POST',
            url: 'https://api.snowbank.me/create-channel',
            headers: 
            {   Authorization: token,
                'Content-Type': 'application/json' },
                body: '{ "fromUserHash": '+fromUserHash+', "toUserHash": '+toUserHash+', "satoshi": '+satoshi+'}' };
        request.get(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    message: body.message
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
    },
    sendCoin: (token, fromUserHash, toUserHash, satoshi, callback) => {
        var options = { method: 'POST',
            url: 'https://api.snowbank.me/send-coin',
            headers:
            {   Authorization: token,
                'Content-Type': 'application/json' },
                body: '{ "fromUserHash": '+fromUserHash+', "toUserHash": '+toUserHash+', "satoshi": '+satoshi+'}' };
        request.get(options, function (error, response, body) {
            if (error){ 
                err = new Error(error);
                return callback(err, false)
            }
            if (body.code == 0) {
                res = {
                    message: body.message
                }
                return callback(false, res)
            }else{
                err = new Error(body.message)
                return callback(err, false)
            }
            
        });
    },
    
}
