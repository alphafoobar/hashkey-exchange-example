const WebSocket = require('ws');
const ws = new WebSocket('wss://pro.hashkey.com/APITradeWS/v1/messages', {
    checkServerIdentity: () => {}
});

ws.on('open', ()=>{
    console.log('WebSocket open');
    ws.send('{"type":"subscribe", "channel":{"ticker":["ETH-BTC"]}}');
    ws.send('{"type":"subscribe", "channel":{"level2":["ETH-BTC"]}}');
});

//Send ping
//发送 ping
setInterval(() => {
    ws.ping('');
}, 15000);

ws.on('message', (data) => {
    console.log(data);
});
