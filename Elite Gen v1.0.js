const Discord = require("discord.js");
const client = new Discord.Client(739333638021185588);
const PREFIX = "e!";

let pulsee = [

];

let wakoroad = [

];

let alphaclicker = [

];

let alphalinks = [

];

let rocord = [

];

let uncheckednitro = [

];

let crainaxlinks = [

];

let shootout = [

];

let twinniesimulator = [
 
];

client.on("message", async message => {
  let checkdm = new Discord.MessageEmbed()
    .setDescription("Check your DMs")
    .setColor(`RANDOM`);
  if (message.content == `${PREFIX}stock`) {
    let stockembed = new Discord.MessageEmbed()
      .setTitle("Games Generator")
      .addField("Alphastar", alphalinks.length, false)
      .addField("Crainax", crainaxlinks.length, false)
      .addField("Shootout 3D", shootout.length, false)
      .addField("Twinnie Simulator", twinniesimulator.length, false)
      .addField("Alpha Clicker", alphaclicker.length, false)
      .addField("21", pulsee.length, false)
      .addField("Wako Road", wakoroad.length, false)
      .addField("Rocord", rocord.length, false)
      .setTitle("Accounts Generator")
      .addField("Unchecked Nitro Codes", uncheckednitro.length, false);
    message.channel.send(stockembed);
  }

  if (message.content == `${PREFIX}gen alpha`) {
    let randomalpha = alphalinks[Math.floor(Math.random() * alphalinks.length)];
    message.author.send(randomalpha);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen wakoroad`) {
    let randomalpha = wakoroad[Math.floor(Math.random() * wakoroad.length)];
    message.author.send(randomalpha);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen 21`) {
    let twentyone = twentyone[Math.floor(Math.random() * twentyone.length)];
    message.author.send(twentyone);
    message.channel.send(checkdm);
  }

  if (message.content == `${PREFIX}gen nitro`) {
    let randomnitro =
      uncheckednitro[Math.floor(Math.random() * uncheckednitro.length)];
    message.author.send(randomnitro);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen crainax`) {
    let randomcrainax =
      crainaxlinks[Math.floor(Math.random() * crainaxlinks.length)];
    message.author.send(randomcrainax);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen twinnie`) {
    let randomtwinnie =
      twinniesimulator[Math.floor(Math.random() * twinniesimulator.length)];
    message.author.send(randomtwinnie);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen shootout`) {
    let randomshootout = shootout[Math.floor(Math.random() * shootout.length)];
    message.author.send(randomshootout);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen alphaclicker`) {
    let randomalphac =
      alphaclicker[Math.floor(Math.random() * alphaclicker.length)];
    message.author.send(randomalphac);
    message.channel.send(checkdm);
  }
  if (message.content == `${PREFIX}gen rocord`) {
    let rocord = rocord[Math.floor(Math.random() * rocord.length)];
    message.author.send(rocord);
    message.channel.send(checkdm);
  }

  /* 
if (message.content == `${PREFIX}stock`){
    
  }
*/
});

client.on("ready", () => {
  console.log("Ready!");
  client.user.setActivity("generating | e!stock");
  let stockk = client.channels.cache.get("737964490473078834");
  let stockembed = new Discord.MessageEmbed()
    .setTitle("Generator Stock")
    .addField("Alphastars", alphalinks.length, false)
    .addField("Shootout 3D", shootout.length, false)
    .addField("Crainax", crainaxlinks.length, false)
    .addField("Twinnie Simulator", twinniesimulator.length, false)
    .addField("Alpha Clicker", alphaclicker.length, false)
    .addField("21", pulsee.length, false)
    .addField("Record", rocord.length, false)
    .addField("Wako Road", wakoroad.length, false)
    .addField("Unchecked Nitro Codes", uncheckednitro.length, false);
  stockk.send(stockembed);
});

client.login("NzM5MzMzNjM4MDIxMTg1NTg4.XyY8Gw.QMoyhVbtNnJhkvqoKFn36eToB3E");