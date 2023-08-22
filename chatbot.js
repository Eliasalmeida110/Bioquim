const qrcode = require('qrcode-terminal');
const { Client, MessageMedia, Chat} = require('whatsapp-web.js');

const client = new Client();
const media = MessageMedia.fromUrl("https://t1.uc.ltmcdn.com/pt/posts/9/7/6/tipos_de_triangulos_de_acordo_com_seus_lados_30679_0_600.jpg");

client.on('qr', (qr) => {
    console.log('qr recieved:');
    qrcode.generate(qr, {small:true});
});

client.on('ready', () => {console.log('client is ready')});

client.initialize();

client.on('message', async (msg) => {
    client.sendMessage(msg.from,'Olá seja bem vindo\nEscolha a modalidade de atendimento\n1- Requerimento de análise clínica\n2 - Resultado da análise clínica').then();
    if(msg.body){
        var ans = msg.body;
        switch(ans){
            case '1':
                client.sendMessage(msg.from,"test 1").then();
            break;
            case '2':
                client.sendMessage(msg.from,"test 2").then();
            break;
            default:
                client.sendMessage(msg.from, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA").then();
            break;
        }
    }
})
