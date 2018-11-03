const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("esclave ");
var randnum = 0

bot.on('ready', ()=> {
    bot.user.setPresence({ game: { name: 'niquer ta mère', type: 0}})
    console.log("Bot Ready !");
});

bot.on('memberGuildAdd', member => {
    let guild = member.guild ;
    let channel = guild.channels.find('name', 'zizi');

    channel.send(member.user.username + " Bienvenue maître, faites -esclave help- pour avoir les commandes")
})

bot.login('NDg5NTIzNjA4MzE4NjQwMjAz.Dn6aFw.X3w8ZAHTul3VtrwL4YZS16wdcgc')

bot.on('message',message => {

if (message.content === "ping"){
    message.reply("pong");
    console.log('ping pong')
}
if (message.content === "oui"){
    message.channel.send("stiti");
    console.log('oui')
}
if (message.content === "Oui"){
    message.channel.send("stiti");
    console.log('Oui')
}
if (message.content === "esclave send nudes"){
    message.channel.send("Je suis trop bonne", {files: ["./images/aylanmosh.png"]});
    console.log('nudes')
}
if (message.content === "brotte"){
    message.channel.send("BROTTEEEUHH", {files: ["./images/brotte.png"]});
    console.log('brotte')
}
if (message.content === "jpp"){
    message.reply("Jean Pierre Pernaut?");
    console.log('jpp')
}
if (message.content === "Jpp"){
    message.reply("Jean Pierre Pere Noël?");
    console.log('JPP')
}
if (message.content === "JPP"){
    message.reply("Jean Pierre Porno?");
    console.log('jpprn')
}
if (message.content === "Toz"){
    message.reply("Toz en 2018? Sérieusement? Même en 2007 c'était interdit");
    console.log('toz')
}
if (message.content === "Jayejaye"){
    message.reply("Suce ma bite, Fais pas ton Weli");
    console.log('Jaye')
}
if (message.content === "Argh"){
    message.reply("Weli ferme ta gueule sale pute, et oui j'ai mis ce message rien que pour toi");
    console.log('Argh')
}
if (message.content === "Erk"){
    message.reply("Berk?!? Fais pas ton Weli");
    console.log('Erk')
}
if (message.content === "Weli"){
    message.channel.sendMessage("coptère");
    console.log('welipue')
}
if (message.content === "Alec"){
    message.channel.sendMessage("Suce des queues");
    console.log('queue')
}
if (message.content === "David"){
    message.channel.sendMessage("Mange des bites");
    console.log('bite')
}
if (message.content === "Nokyte"){
    message.channel.sendMessage("Ce gros con");
    console.log('noky')
}
if (message.content === "Angela"){
    message.reply("Merkel");
    console.log('angl')
}
if (message.content === "Rio"){
    message.channel.sendMessage("suce Weli");
    console.log('riod')
}
if (message.content === "Ikurem"){
    message.channel.sendMessage("ce gros fdp? m'en parle meme pas... Si tu lis ce message sache que t'es pas beau");
    console.log('ikur')
}
if (message.content === "Naoki"){
    message.channel.sendMessage("cette grosse merde? je peux insulter comme je veux de toute façon il veut pas me mettre sur son discord ce juif...");
    console.log('naok')
}
if (message.content === "Caps"){
    message.channel.sendMessage("ule de bierre");
    console.log('caps')
}
if (message.content === "t la?"){
    message.channel.sendMessage("Miskin t'as pas d'ami, ftg plutot non?");
    console.log('tla')
}
if (message.content === "Quoi"){
    message.channel.sendMessage("ffeur");
    console.log('ffeur')
}
if (message.content === "Juillet"){
    message.channel.sendMessage("Aout");
    console.log('mois')
}
if (message.content === "Septembre"){
    message.channel.sendMessage("Octobre");
    console.log('mois')
}
if (message.content === "Novembre"){
    message.channel.sendMessage("Décembre");
    console.log('mois')
}
if (message.content === "Janvier"){
    message.channel.sendMessage("Février");
    console.log('mois')
}
if (message.content === "Mars"){
    message.channel.sendMessage("Avril");
    console.log('mois')
}
if (message.content === "Mai"){
    message.channel.sendMessage("Juin");
    console.log('mois')
}
if (message.content === "Quoi?"){
    message.channel.sendMessage("ffeur");
    console.log('ffeur')
}
if (message.content === "quoi"){
    message.channel.sendMessage("ffeur");
    console.log('ffeur')
}
if (message.content === "quoi?"){
    message.channel.sendMessage("ffeur");
    console.log('ffeur')
}
if (message.content === "Salut"){
    message.channel.sendMessage("TG");
    console.log('Slt')
}
if (message.content === "salut"){
    message.channel.sendMessage("tg");
    console.log('slt')
}
if (message.content === "bye"){
    message.channel.sendMessage("Casse toi");
    console.log('bye')
}
if (message.content === "Kaelan"){
    message.channel.sendMessage("Le gros porc");
    console.log('porc')
}
if (message.content === "Rayan"){
    message.channel.sendMessage("Est coincé en Afrique");
    console.log('africa')
}
if (message.content === "Some"){
    message.channel.sendMessage("-body once told me the world is gonna roll me\nI ain't the sharpest tool in the shed\nShe was looking kind of dumb with her finger and her thumb\nIn the shape of an L on her forehead\nWell the years start coming and they don't stop coming\nFed to the rules and I hit the ground running\nDidn't make sense not to live for fun\nYour brain gets smart but your head gets dumb\nSo much to do, so much to see\nSo what's wrong with taking the back streets?\nYou'll never know if you don't go\nYou'll never shine if you don't glow\nHey now, you're an all-star, get your game on, go play\nHey now, you're a rock star, get the show on, get paid\nAnd all that glitters is gold\nOnly shooting stars break the mold\nIt's a cool place and they say it gets colder\nYou're bundled up now, wait till you get older\nBut the meteor men beg to differ\nJudging by the hole in the satellite picture\nThe ice we skate is getting pretty thin\nThe water's getting warm so you might as well swim\nMy world's on fire, how about yours?\nThat's the way I like it and I never get bored\nHey now, you're an all-star, get your game on, go play\nHey now, you're a rock star, get the show on, get paid\nAll that glitters is gold\nOnly shooting stars break the mold\nHey now, you're an all-star, get your game on, go play\nHey now, you're a rock star, get the show, on get paid\nAnd all that glitters is gold\nOnly shooting stars\nSomebody once asked could I spare some change for gas?\nI need to get myself away from this place\nI said yep what a concept\nI could use a little fuel myself\nAnd we could all use a little change\nWell, the years start coming and they don't stop coming\nFed to the rules and I hit the ground running\nDidn't make sense not to live for fun\nYour brain gets smart but your head gets dumb\nSo much to do, so much to see\nSo what's wrong with taking the back streets?");
    console.log('some')
}
if (message.content === "bruh"){
    message.reply("Suce ma bite");
    console.log('bruh')
}
if (message.content === "Bruh"){
    message.reply("Nique Ta Mère");
    console.log('BRUH')
}
if (message.content === "lol"){
    message.reply("lolmdr123");
    console.log('lolmdr')
}
if (message.content === "Lol"){
    message.reply("League of Legends");
    console.log('loloflegends')
}
if (message.content === "Ah"){
    message.channel.sendMessage("Bh");
    console.log('Bh')
}
if (message.content === "Nazi"){
    message.channel.sendMessage("卐");
    console.log('卐')
}
if (message.content === "nazi"){
    message.channel.sendMessage("卐");
    console.log('nazi')
}
if (message.content === "issou"){
    message.channel.sendMessage(":issouclassic:");
    console.log('issouc')
}
if (message.content === "Issou"){
    message.channel.sendMessage(":issouakbar");
    console.log('issoua')
}
if (message.content === "ah"){
    message.channel.sendMessage("bh");
    console.log('bh')
}
if (message.content === "Kiwi"){
    message.channel.sendMessage("Kinon");
    console.log('kiwi')
}
if (message.content === "Frite"){
    message.channel.sendMessage("la sous merde");
    console.log('frite')
}
if (message.content === "jeanne"){
    message.channel.sendMessage("au secours!\nhttps://media1.tenor.com/images/1def2a3e6539b9fe821b7ef3b29eacd8/tenor.gif?itemid=7223273");
    console.log('jaenne')
}
if (message.content === "Jeanne"){
    message.channel.sendMessage("Au secours!\nhttps://media1.tenor.com/images/1def2a3e6539b9fe821b7ef3b29eacd8/tenor.gif?itemid=7223273");
    console.log('jeanne')
}
if (message.content === "wow"){
    message.channel.sendMessage("world of warcraft");
    console.log('wow')
}
if (message.content === "Keske"){
    message.channel.sendMessage("Weli, je suis ton père");
    console.log('ksk')
}
if (message.content === "Wow"){
    message.channel.sendMessage("World Of Warcraft");
    console.log('WoW')
}
if (message.content === "ching"){
    message.channel.sendMessage("chong");
    console.log('ching chong')
}
if (message.content === "mais"){
    message.reply("juin");
    console.log('juillet')
}
if (message.content === "discord"){
    message.channel.sendMessage("corde corde corde corde corde corde corde corde corde corde ");
    console.log('ffeur')
}
if (message.content === "Discord"){
    message.channel.sendMessage("corde corde corde corde corde corde corde corde corde corde ");
    console.log('ffeur')
}
if (message.content === "Mais"){
    message.reply("Juin");
    console.log('Juillet')
}
if (message.content === "mdr"){
    message.reply("Fils de pute");
    console.log('mdr')
}
if (message.content === "Mdr"){
    message.reply("Vas te faire enculer gros con vas");
    console.log('MDR')
}
if (message.content === "esclave t'es moche"){
    message.channel.sendMessage("Ta mère la reine des putes");
    console.log("Commande help demandée !");
}




if (message.content === "esclave do u kno da wae"){
    random();

    if (randnum == 0){
        message.reply("**Yes ma bruddah, i kno da wae follo me**\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠶⣿⣭⡧⡤⣤⣻⣛⣹⣿⣿⣿⣶⣄\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⣼⣊⣤⣶⣷⣶⣧⣤⣽⣿⣿⣿⣿⣿⣿⣷\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⢀⢀⢀⢀⢀⢀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧\n⢀⢀⢀⢀⢀⢀⠸⠿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣻⣿⣿⣿⣿⣿⡆\n⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⡀⠘⣿⡿⢿⣿⣿⡟⣾⣿⣯⣽⣼⣿⣿⣿⣿⡀\n⢀⢀⢀⢀⢀⢀⡠⠚⢛⣛⣃⢄⡁⢀⢀⢀⠈⠁⠛⠛⠛⠛⠚⠻⣿⣿⣿⣷\n⢀⢀⣴⣶⣶⣶⣷⡄⠊⠉⢻⣟⠃⢀⢀⢀⢀⡠⠔⠒⢀⢀⢀⢀⢹⣿⣿⣿⣄⣀⣀⣀⣀⣀⣀\n⢠⣾⣿⣿⣿⣿⣿⣿⣿⣶⣄⣙⠻⠿⠶⠒⠁⢀⢀⣀⣤⣰⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄\n⢿⠟⠛⠋⣿⣿⣿⣿⣿⣿⣿⣟⡿⠷⣶⣶⣶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠙⠻⠿⣿⣿⡿\n⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⢀⢀⢀⠈⠁\n⢀⢀⢀⢀⢸⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢀⢀⢀⢀⢸⣿⣿⣿⣿⣄⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣹⣿⣿⣿⣿⣿⣿⣿⣿⠇\n⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣧⣀⢀⢀⠉⠛⠛⠋⠉⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠏\n⢀⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣿⣷⣤⣄⣀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋\n⢀⢀⢀⢀⢀⢀⢀⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢹⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⡇⢀⠈⠙⠛⠛⠛⠛⠛⠛⠻⣿⣿⣿⠇\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⣸⣿⡇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢨⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⣾⣿⡿⠃⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⡏\n⢀⢀⢀⢀⢀⢀⢀⢀⠻⠿⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣿⣿⡇");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("No my bruddah, i don kno da wae, sho me da wae");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Yes ma bruddah, lets find da queen");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Wtf yo talking 'bout, im for **Sanic Team** u uganda suker");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Uganda Knuckles in 2018, wtf?");
        console.log(randnum);
    }

}
if (message.content === "esclave suce ma bite"){
    random();

    if (randnum == 0){
        message.reply("T'en as pas pd lol");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Oui maître");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Désolé, je suce déjà votre mère");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Ton père le Despacito");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave nique ta mère"){
    random();

    if (randnum == 0){
        message.reply("**MIROIR MAGIQUE TOUT CE QUE TU DIS SE RETOURNE CONTRE TOI**");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Oui maître");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Désolé, je suis occupé avec votre mère");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Ton père le Despacito");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave"){
    random();

    if (randnum == 0){
        message.reply("Oui maître?");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Vous m'avez appelé, maître?");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Que désirez vous, maître supérieur?");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Oui, je suis à votre service");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("J'suis pas ton esclave t'as cru quoi");
        console.log(randnum);
    }
}
if (message.content === "esclave donne moi du couscous"){
    random();

    if (randnum == 0){
        message.reply("Tenez maître");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Oui maître, j'y vais de ce pas");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("D'accord maître, j'arrive");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("T'as cru quoi lol vas cuisiner tout seul gros porc");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave donne moi à boire"){
    random();

    if (randnum == 0){
        message.reply("D'accord, j'arrive vous pisser dans la bouche");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("D'accord, j'arrive vous prendre du Coca Cola");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("D'accord, j'arrive vous prendre de l'Orangina");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("D'accord, j'arrive vous prendre du Sprite sa mère");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave masse moi"){
    random();

    if (randnum == 0){
        message.reply("D'accord, j'arrive vous masser les pieds");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("D'accord, j'arrive vous masser les couilles");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("D'accord, j'arrive vous masser le dos");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("D'accord, j'arrive vous masser les fesses");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Désolé, je suis occupé avec votre mère");
        console.log(randnum);
    }
}
if (message.content === "esclave tu pues"){
    random();

    if (randnum == 0){
        message.reply("Pas autant que toi bouffon");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Vous sentez le caca, maître");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Ta mère elle pue");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("D'accord, je vais aller me laver, en espérant que vous fassiez de même gros porc");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave ferme ta gueule"){
    random();

    if (randnum == 0){
        message.reply("Non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non non ");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("T'as un problème fdp?");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("La tête de oim je parle si je veux, si ça te dérange casse toi");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("...");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave t'es gay"){
    random();

    if (randnum == 0){
        message.reply("Avec ta mère oui");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("T'as un problème fdp?");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("La tête de oim je vais te niquer ta race");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Avec ta soeur oui");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Tu veux qu'on se tape?");
        console.log(randnum);
    }
}
if (message.content === "esclave t'es gros"){
    random();

    if (randnum == 0){
        message.reply("Pas autant que ta mère la galaxie");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("T'es tellement gros que y'a un decalage horaire entre tes deux fesses");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("T'es tellement gros que ta ceinture c'est l'équateur");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("T'es tellement gros que la gravité t'empêche de sauter");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("T'es tellement gros que t'es sur l'échelle de Richter");
        console.log(randnum);
    }
}
if (message.content === "esclave t'es arabe"){
    random();

    if (randnum == 0){
        message.reply("ALLAH AKBAR");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Tu veux que je te halalise?");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("T'as de la chance je peux pas te manger sale porc");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Tu veux que je te vole ton vélo?");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Ali baba, pour vous servir");
        console.log(randnum);
    }
}
if (message.content === "esclave chante"){
    random();
    message.react("🎵");

    if (randnum == 0){
        message.reply("**Despacito**\n**Luis Fonsi**\n\nAy \nFonsi \nDY \nOh\nOh no, oh no\nOh yeah\nDiridiri, dirididi Daddy \nGo\nSí, sabes que ya llevo un rato mirándote \nTengo que bailar contigo hoy (DY) \nVi que tu mirada ya estaba llamándome \nMuéstrame el camino que yo voy (Oh)\nTú, tú eres el imán y yo soy el metal \nMe voy acercando y voy armando el plan \nSolo con pensarlo se acelera el pulso (Oh yeah)\nYa, ya me está gustando más de lo normal \nTodos mis sentidos van pidiendo más \nEsto hay que tomarlo sin ningún apuro\nDespacito \nQuiero respirar tu cuello despacito \nDeja que te diga cosas al oído \nPara que te acuerdes si no estás conmigo\nDespacito \nQuiero desnudarte a besos despacito \nFirmo en las paredes de tu laberinto \nY hacer de tu cuerpo todo un manuscrito (sube, sube, sube)\n(Sube, sube)\nQuiero ver bailar tu pelo \nQuiero ser tu ritmo \nQue le enseñes a mi boca \nTus lugares favoritos (favoritos, favoritos baby)\nDéjame sobrepasar tus zonas de peligro \nHasta provocar tus gritos \nY que olvides tu apellido (Diridiri, dirididi Daddy)\nSi te pido un beso ven dámelo \nYo sé que estás pensándolo \nLlevo tiempo intentándolo \nMami, esto es dando y dándolo \nSabes que tu corazón conmigo te hace bom, bom \nSabes que esa beba está buscando de mi bom, bom \nVen prueba de mi boca para ver cómo te sabe \nQuiero, quiero, quiero ver cuánto amor a ti te cabe \nYo no tengo prisa, yo me quiero dar el viaje \nEmpecemos lento, después salvaje");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Dame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nMuévete para aquí, muévete para allá\nDame tu cosita (ay toma, cosita, cosita, cosita)\nDame tu cosita (ay toma, cosita, pure energy)\nDame tu cosita (ay toma, cosita, cosita, cosita)\nDame tu cosita (ay toma, cosita, cosita, cosita)\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nMuévete para aquí, muévete para allá\nDame tu cosita (ay toma, cosita, cosita, cosita) \nDame tu cosita (ay toma, cosita, pure energy)\nDame tu cosita (ay toma, cosita, cosita, cosita) \nDame tu cosita (ay toma, cosita, cosita, cosita)\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nDame tu cosita ah, ay\nDame tu cosita ah ah\nMuévete para aquí, muévete para allá\nDame tu cosita (ay toma, cosita, cosita, cosita) \nDame tu cosita (ay toma, cosita, pure energy)\nDame tu cosita (ay toma, cosita, cosita, cosita) \nDame tu cosita (ay toma, cosita, eh)");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Alors, wesh alors (x2) \nViens dans mon dél' allez let's go \nIls parlent de moi mais je les laisse gros \nTiens ta gadgi j'ai pas la laisse gros \nOn voit que ses fesses gros \nOuais ouais ouais je baise tout \nJamais je dirai je laisse tout \nOh le con il veut me test ou \nT'as des voix dans ta tête ouh  \nJ'fais des tours dans le quartiers c'est mort \nJ'lève ma main à des traîtres j'leur dis... \nWesh alors (x5) \nSors ta beuh, ta plaquette \nJ'suis dans l'game en claquettes \nDans l'carré VIP en survêt' \nViens pas me prendre la tête \nWesh le sang, wesh la honda \nMes sons tournent à la Jonqua' \nTu m'as trahis mais t'es un bon gars \nJ'suis en fumette mais j'me trompe pas \nÇa fait deux ans que j'nique le game \nT'oses me demander comment j'm'appelle \nJ'vous demande une chose \nLaisez Ju-Ju-Jul tranquille \nCar tout va mal dans sa tête \nJamais à court d'idées, ouais jamais à sec \nJ'vois la ligne s'coucher quand j'cabre sur la A7 \nJ'sais qu'les jaloux m'écoutent en cachette \nEt au Bled ça m'écoute même en cassettes \nWesh alors (x5) \nSors ta beuh, ta plaquette \nJ'suis dans l'game en claquettes \nDans l'carré VIP en survêt' ");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("P-P-A-P\nI have a pen, I have a apple\n**Uh**\nApple-Pen\nI have a pen, I have pineapple\n**Uh**\nPineapple-Pen\nApple-Pen, Pineapple-Pen\n**Uh**\n**Pen-Pineapple-Apple-Pen**\n**Pen-Pineapple-Apple-Pen**");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Somebody once told me the world is gonna roll me\nI ain't the sharpest tool in the shed\nShe was looking kind of dumb with her finger and her thumb\nIn the shape of an L on her forehead\nWell the years start coming and they don't stop coming\nFed to the rules and I hit the ground running\nDidn't make sense not to live for fun\nYour brain gets smart but your head gets dumb\nSo much to do, so much to see\nSo what's wrong with taking the back streets?\nYou'll never know if you don't go\nYou'll never shine if you don't glow\nHey now, you're an all-star, get your game on, go play\nHey now, you're a rock star, get the show on, get paid\nAnd all that glitters is gold\nOnly shooting stars break the mold\nIt's a cool place and they say it gets colder\nYou're bundled up now, wait till you get older\nBut the meteor men beg to differ\nJudging by the hole in the satellite picture\nThe ice we skate is getting pretty thin\nThe water's getting warm so you might as well swim\nMy world's on fire, how about yours?\nThat's the way I like it and I never get bored\nHey now, you're an all-star, get your game on, go play\nHey now, you're a rock star, get the show on, get paid\nAll that glitters is gold\nOnly shooting stars break the mold\nHey now, you're an all-star, get your game on, go play\nHey now, you're a rock star, get the show, on get paid\nAnd all that glitters is gold\nOnly shooting stars\nSomebody once asked could I spare some change for gas?\nI need to get myself away from this place\nI said yep what a concept\nI could use a little fuel myself\nAnd we could all use a little change\nWell, the years start coming and they don't stop coming\nFed to the rules and I hit the ground running\nDidn't make sense not to live for fun\nYour brain gets smart but your head gets dumb\nSo much to do, so much to see\nSo what's wrong with taking the back streets?");
        console.log(randnum);
    }
}
if (message.content === "esclave chie"){
    random();
    message.react("💩");

    if (randnum == 0){
        message.reply("\n░░░░░░░░░░░█▀▀░░█░░░░░░\n░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░\n░░░░░░█░█░░░░░░░░░░▐░░░\n░░░░░░▐▐░░░░░░░░░▄░▐░░░\n░░░░░░█░░░░░░░░▄▀▀░▐░░░\n░░░░▄▀░░░░░░░░▐░▄▄▀░░░░\n░░▄▀░░░▐░░░░░█▄▀░▐░░░░░\n░░█░░░▐░░░░░░░░▄░█░░░░░\n░░░█▄░░▀▄░░░░▄▀▐░█░░░░░\n░░░█▐▀▀▀░▀▀▀▀░░▐░█░░░░░\n░░▐█▐▄░░▀░░░░░░▐░█▄▄░░░\n░░░▀▀▄░░░░░░░░▄▐▄▄▄▀░░░\n░░░░░░░░░░░░░░░░░░░░░░░");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply(":poop: Wouaouw, un gros caca! Gros comme vous, maître!");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Je ne peux pas chier sur commande, non jdec :poop:");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("... Rien... Je suis constipé");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Un caca? Vous cherchez quelque chose qui vous ressemble?");
        console.log(randnum);
    }
}
if (message.content === "esclave danse"){
    random();

    if (randnum == 0){
        message.reply("\n⊂_ヽ\n　 ＼＼ ＿\n　　 ＼(　•_•) F\n　　　 <　⌒ヽ A\n　　　/ 　 へ＼ B\n　　 /　　/　＼＼ U\n　　 ﾚ　ノ　　 ヽ_つ L\n　　/　/ O\n　 /　/| U\n　(　(ヽ S    \n　|　|、＼    \n　| 丿 ＼ ⌒)    \n　| |　　) /    \n`ノ )　 Lﾉ");
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("\n(_＼ヽ\n    　 ＼＼ .Λ＿Λ.\n    　　 ＼( ͡° ͜ʖ ͡°) 　\n    　　　 >　⌒ヽ\n    　　　/ 　 へ＼\n    　　 /　　/　＼＼\n    　　 ﾚ　ノ　　 ヽ_つ\n    　　/　/\n    　 /　/|\n    　(　(ヽ\n    　|　|、＼\n    　| 丿 ＼ ⌒)\n    　| |　　) /\n    `ノ ) 　 Lﾉ\n    (_／");
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Ca tombe bien... J'ai un don pour la danse... ♪(┌・。・)┌");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Tu veux que je twerk? Saleté de pute");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("D'accord, je vais danser avec votre mère\n┏(･o･)┛♪┗ (･o･) ┓");
        console.log(randnum);
    }
}



if (message.content.startsWith ("esclave insulte")){
    random();
    victimementionne = message.mentions.users.first();

    if (randnum == 0){
        victimementionne.sendMessage ("**VAS CREVER FILS DE SIPHANO**");
        console.log(randnum);
    }

    if (randnum == 1){
        victimementionne.sendMessage ("**TON PERE CEST NAOKI SALE FILS DE CHEVAL**");
        console.log(randnum);
    }

    if (randnum == 2){
        victimementionne.sendMessage ("**NIQUE TA MERE LA GROSSE PUTE**");
        console.log(randnum);
    }

    if (randnum == 3){
        victimementionne.sendMessage ("t pa bo");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Pourquoi veux-tu que j'insulte " + victimementionne + " ?");
        console.log(randnum);
    }
}
if (message.content.startsWith ("esclave tue")){
    random();
    message.react("💀");
    victimetuee = message.mentions.users.first();

    if (randnum == 0){
        message.channel.sendMessage (victimetuee +" :knife: Meurs!!");
        console.log(randnum);
    }

    if (randnum == 1){
        message.channel.sendMessage (victimetuee +" :dagger: Mouahaha!!");
        console.log(randnum);
    }

    if (randnum == 2){
        message.channel.sendMessage (victimetuee +" :fork_and_knife: JE VAIS TE MANGER");
        console.log(randnum);
    }

    if (randnum == 3){
        message.channel.sendMessage (victimetuee +" Viens 1v1 Gare du Nord si t'as des couilles");
        console.log(randnum);
    }

    if (randnum == 4){
        message.channel.sendMessage ("Pourquoi veux-tu que je tues " + victimementionne + " ? Tu mérites plus la mort toi sale gros");
        console.log(randnum);
    }
}

if (message.content.startsWith ("@everyone")){
    random();
    message.react("💀");
    victimetuee = message.mentions.users.first();

    if (randnum == 0){
        message.channel.sendMessage ("FRAPPEZ-LE");
        console.log(randnum);
    }

    if (randnum == 1){
        message.channel.sendMessage ("ALBATARDDD");
        console.log(randnum);
    }

    if (randnum == 2){
        message.channel.sendMessage ("Bien joué poto");
        console.log(randnum);
    }

    if (randnum == 3){
        message.channel.sendMessage ("NIQUE TES GRANDS MORTS");
        console.log(randnum);
    }

    if (randnum == 4){
        message.channel.sendMessage ("ton pere le dame tu cosita");
        console.log(randnum);
    }
}


if (message.content.startsWith ("allah")){
    message.react("💣");
    message.reply("ALLAH AKBAR :bomb::bomb::bomb:");
    console.log('alak')
}
if (message.content.startsWith ("Allah")){
    message.react("💣");
    message.reply("ALLAH AKBAR :bomb::bomb::bomb:");
    console.log('Alak')
}




if (message.content === "esclave help"){
    random();

    if (randnum == 0){
        message.reply("Regarde tes MPs bouffon");
        message.author.send("**Tous ces messages on pour même préfixe:\nesclave\n\nt'es moche\ndo u kno da wae\nsuce ma bite\nnique ta mère\ndonne moi du couscous\ndonne moi à boire\nmasse moi\ntu pues\nferme ta gueule\nt'es gay\nt'es gros\nt'es arabe\nt'es chiant\nchante\nchie\ndanse\n\ninsulte @quelqu'un\ntue @quelqu'un**")
        console.log(randnum);
    }

    if (randnum == 1){
        message.reply("Oui maître, je vous envoie toutes mes possibilités aussi rapidement que possible");
        message.author.send("**Tous ces messages on pour même préfixe:\nesclave\n\nt'es moche\ndo u kno da wae\nsuce ma bite\nnique ta mère\ndonne moi du couscous\ndonne moi à boire\nmasse moi\ntu pues\nferme ta gueule\nt'es gay\nt'es gros\nt'es arabe\nt'es chiant\nchante\nchie\ndanse\n\ninsulte @quelqu'un\ntue @quelqu'un**")
        console.log(randnum);
    }

    if (randnum == 2){
        message.reply("D'abord nourris moi avant de me demander de t'aider, je suis pas ton esclave... Enfin si mais...");
        message.author.send("**Tous ces messages on pour même préfixe:\nesclave\n\nt'es moche\ndo u kno da wae\nsuce ma bite\nnique ta mère\ndonne moi du couscous\ndonne moi à boire\nmasse moi\ntu pues\nferme ta gueule\nt'es gay\nt'es gros\nt'es arabe\nt'es chiant\nchante\nchie\ndanse\n\ninsulte @quelqu'un\ntue @quelqu'un**")
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Tiens je te les passe, mais c'est parceque je suis cool");
        message.author.send("**Tous ces messages on pour même préfixe:\nesclave\n\nt'es moche\ndo u kno da wae\nsuce ma bite\nnique ta mère\ndonne moi du couscous\ndonne moi à boire\nmasse moi\ntu pues\nferme ta gueule\nt'es gay\nt'es gros\nt'es arabe\nt'es chiant\nchante\nchie\ndanse\n\ninsulte @quelqu'un\ntue @quelqu'un**")
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Ptn si seulement t'étais pas un boloss");
        message.author.send("**Tous ces messages on pour même préfixe:\nesclave\n\nt'es moche\ndo u kno da wae\nsuce ma bite\nnique ta mère\ndonne moi du couscous\ndonne moi à boire\nmasse moi\ntu pues\nferme tagueule\nt'es gay\nt'es gros\nt'es arabe\nt'es chiant\nchante\nchie\ndanse\n\ninsulte @quelqu'un\ntue @quelqu'un**")
        console.log(randnum);
    }
}




});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
randnum = Math.floor(Math.random() * (max - min +1) + min);
}