const qrcode = require('qrcode-terminal');
const { Client, MessageMedia, Chat} = require('whatsapp-web.js');

const client = new Client();
const media = MessageMedia.fromFilePath('C:\\Users\\henri\\Downloads\\legal.jpg')       ;

client.initialize();
client.on('qr', (qr) => {
    console.log('qr recieved:');
    qrcode.generate(qr, {small:true});
});

client.on('ready', () => {console.log('client is ready')});

client.on('message', (msg) => {
    if(msg.body){
        msg.reply('Olá seja bem vindo\nEscolha a modalidade de atendimento\n1- Requerimento de análise clínica\n2 - Resultado da análise clínica')
        if(msg.body === '1'){
            msg.reply('escolha os atendimentos requeridos. ao final enviaremos um boleto\na\nb\nc\nd');
            msg.reply('gerando boleto...');
            msg.reply('enviando');
            Chat.sendMessage(media,{caption:'fui burro lol'});
        }else if(msg.body === '2'){
            msg.reply('acho que funcionou');
        }else{
            msg.reply('não tem nada aqui');
        }
    }
})
