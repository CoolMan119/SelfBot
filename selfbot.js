const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'MjA5MDMyNTA2MjcwNDE2OTA2.CqC-LQ.lBSB2xgWp3DDa19toaSJlGSqyq8'
const userid = 'YourUserIDHere'
const prefix = '/'

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Selfbot
// By: houseofkraft

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

function replace(before, after) {
  return before.replace(before, after);
}

function isLetter(l) {
  var found = false
  letters.forEach(function (i, index, array) {
    var lo = l.toLowerCase();
    if (lo === i) {
      found = true
    }
  });
  return found
}

bot.on('message', message => {
  if (message.author.id !== userid) return;
  const params = message.content.split(" ");
  const command = params.shift().slice(prefix.length);
  if(message.content.startsWith(prefix+"eval")) {
   message.delete();
   var code = params.join(" ");
   try {
     var promise = eval(code);
     message.delete();
     promise.then(function(GotData) {
          var embed = new Discord.RichEmbed();
          embed.setTitle("Sucess")
          embed.setDescription(clean(GotData));
          message.channel.sendEmbed(embed);
     });
   } catch(err) {
     var embed = new Discord.RichEmbed();
     embed.setTitle("Failed")
     embed.setDescription(clean(err));
     message.channel.sendEmbed(embed);
   }
  }
  if (message.content.startsWith(prefix + "lenny")) {
    message.delete();
    message.channel.sendMessage("(° ͜ʖ °)")
  }
  if (message.content.startsWith(prefix + "ground")) {
    message.delete();
    let args = message.content.split(" ").slice(1);
    if (args.length < 2) {
      message.channel.sendMessage("**Usage:** ground <username> <time>");
    } else {
      var user = args[0];
      var time = args[1];
      message.channel.sendMessage("THATS IT " + user + "! YOU ARE GROUNDED GROUNDED GROUNDED GROUNDED FOR " + time + " YEARS! GO TO YOUR ROOM NOW!");
    }
  }
  if (message.content.startsWith(prefix + "vert")) {
      var user = message.author;
      let args = message.content.split(" ").slice(1);
      var str = ""
      message.delete()
      args.forEach(function (i, index, array) {
        str += i + " "
      });
      var final = []
      for (var i = 0, len = str.length; i < len; i++) {
        if (i === "") {
          final.push(" ");
        } else {
         final.push(str[i]);
        }
      }
      message.channel.sendMessage(final);
  }
  if (message.content.startsWith(prefix + "etext")) {
    let args = message.content.split(" ").slice(1);
    var str = ""
    message.delete();
    if (args.length < 1) {
      message.channel.sendMessage("**Usage:** etext <message>")
    } else {
      args.forEach(function (i, index, array) {
        str += i + " "
      });
      var final = ""
      for (var i = 0, len = str.length; i < len; i++) {
        if (isLetter(str[i])) {
          var ri = ":regional_indicator_" + str[i] + ":"
          var n = replace(str[i], ri);
          final += n.toLowerCase(); + " "
        } else {
          final += "  "
        }
      }
      message.channel.sendMessage(final);
    }
  }
  if (message.content.startsWith(prefix + "embsay")) {
    message.delete();
    let args = message.content.split(" ").slice(1);
    if (args.length < 2) {
      message.channel.sendMessage("**Usage:** embsay <title> <message>");
    } else {
      var counter = 1
      args.forEach(function (i, index, array) {
        if (counter === 1) {
          // Do nothing
        } else {
          str += i + " "
        }
        counter = counter + 1
      });
      str = str.replace("undefined", "")
      var embed = new Discord.RichEmbed();
      embed.setTitle(args[0]);
      embed.setDescription(str);
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.startsWith(prefix + "space")) {
    message.delete();
    let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.sendMessage("**Usage:** space <message>");
    } else {
      args.forEach(function (i, index, array) {
        str += i + " "
      });
      message.channel.sendMessage(str);
    }
  }
});
bot.login(token);
