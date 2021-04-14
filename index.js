const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const db = require('quick.db')



client.once('ready', () => {
  console.log('SOM ONLINE');

  client.user.setPresence({
    status: "online",
    activity: {
      name: "jt!help",
      type: "LISTENING"
    }
  })

  

});

client.on('message', async (message) => {
    const prefix = "jt!";



    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;



    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();









    if(cmd === "poll"){

      if(!message.member.hasPermission('MANAGE_MESSAGES'))
      if(!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(`${message.author.username}, Nemáš permise.`)
      
    if(!args[0]) return message.channel.send("No args")
    message.delete()
    
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ANKET')
      .setDescription(args.join(" "))
      .setFooter(`Tuto anketu vytvořil: ${message.author.username}`)
      
      
      
      message.channel.send(embed).then(m => {
        m.react("✅")
        m.react("❌")
    
    
      })
      
      
      
      };

      if(cmd === "funfact"){
        if (message.author.id !== "736893699157524530")
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        if(!message.member.hasPermission('ADMINISTRATOR'))
          return message.channel.send(`No perms`)
        
      if(!args[0]) return message.channel.send("No args")
      message.delete()
      
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('FUNFACT')
        .setDescription(args.join(" "))
        .setFooter(`funfact by: ${message.author.username}`)
        
        
        
        message.channel.send(embed).then(m => {
          m.react("✅")
          m.react("❌")
      
      
        })
        
        
        
        };


if(cmd === "clear" || cmd === "purge") {

  //THIS IS THE CODE FOR THE COMMAND ONLY
   
  const messageArray = message.content.split(' ');
  const args = messageArray.slice(1);
  
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('No perms!');
    
  
    let deleteAmount;
  
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return await message.channel.send(`Numeber!`)} 
  
  
    if (parseInt(args[0]) > 99) {
        return message.channel.send(`99 msgs max.`)
    } else {
        deleteAmount = parseInt(args[0]);
    }
  
    message.channel.bulkDelete(deleteAmount + 1, true);
    (await message.channel.send(`deleted ${deleteAmount}** msgs!`)).delete({ timeout: 3000})
  
  
    }
  

if (cmd === "ping") {
    message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);
}


});

client.login('token');
