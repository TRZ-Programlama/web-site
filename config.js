module.exports = {

	website: {
		protocol: 'https://', // https:// or http://
		domain: 'trz-bot.glitch.me', // Site Linkiniz HTTPS OLMADAN VE / OLMADAN
		port: 3000,
    cookieSecret: 'N3.B4K1Y0R2UN.83N.L3V14N' //Çerez Secret Bunu Silmeyin
	},
  bot: {
    name: 'TRZ', // Bot Isimi
    token: process.env.token,
    logo: 'https://cdn.discordapp.com/attachments/1018175755718496346/1018176048996831282/unknown.png', //BOT LOGO VE FAVICON
    description: 'Public, Moderasyon ve Eğlence Botu', //BOT ACIKLAMASI
    support: 'https://discord.gg/GbJGMJEDPR', // DESTEK SUNUCUSU
    invite: 'https://discord.com/api/oauth2/authorize?client_id=833273196370722837&permissions=8&scope=bot%20applications.commands', //DAVET LINKI
    botlist: 'https://top.gg/tr/bot/892504741395963964', // TOP GG SITESI VEYA DIGER BOTLIST SITELERI
    feature1: {
      main: 'Geberist#3411', // ÖZELLİK
      description: 'Bot Developer' // ÖZELLİK AÇIKLAMASI
    },
    feature2: {
      main: 'Bot Developer', // // ÖZELLİK AÇIKLAMASI
      description: 'Lavoin 々#3411' // ÖZELLİK
    }
      },
  img: {
    img1: 'https://cdn.discordapp.com/attachments/1018175755718496346/1018175825289412729/unknown.png', // YARDIM MENÜSÜ SS 
    img2: 'https://cdn.discordapp.com/attachments/1018175755718496346/1018176048996831282/unknown.png' //HER HANGI BIR KOMUT SS
}
  
};
