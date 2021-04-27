const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(process.env.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));




  //------------------------ KOMUTLAR ---------------------------\\


    //----------------------------- BOT KANALA YAZIYOR ------------------------------------\\ 


  
  //----------------------------- BOT KANALA YAZIYOR ------------------------------------\\ 
  

  //------------------------------ BOT SESLİ KANAL SOKMA ----------------------------------\\
  
  client.on("ready", () => {
    client.channels.cache.get("835544858604470336").join();
  })
  
  //------------------------------ BOT SESLİ KANAL SOKMA ----------------------------------\\
  
client.on("message", message => {
    if(message.content.toLowerCase() == "sa") 
    return message.channel.send(`${message.author}, Aleyküm Selam.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selam") 
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "merhaba") 
    return message.channel.send(`${message.author}, Merhaba hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "s.a") 
    return message.channel.send(`${message.author}, Aleyküm Selam.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "mrb") 
    return message.channel.send(`${message.author}, Aleyküm Selam.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "slm") 
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});
  
  //------------------------------ BOT YAYINDA OYNUYOR ------------------------------------\\
  
  client.on("ready", async () => {
     //log("Durum başarıyla ayarlandı")
        client.user.setActivity("Veronica💛Emirhan",  
          {
          type: 'idle' }); 
  })
  
  //------------------------------ BOT YAYINDA OYNUYOR ------------------------------------\\