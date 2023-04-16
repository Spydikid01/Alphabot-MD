const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'spydikid894@gmail.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': '𝘙𝘖𝘓𝘌𝘟-𝘔𝘋',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "𝘙𝘖𝘓𝘌𝘟-𝘔𝘋^ x 𝑆𝛲𝑌𝐷𝛪_.𝛫𝛪𝐷"
global.ownername= "ᴹᴿ᭄𝑆𝛲𝑌𝐷𝛪_.𝛫𝛪𝐷×፝֟͜×"
global.myweb ="spydikid894@gmail.com"
global.youtube = "https://youtube.com/@hackergamingyt7597"
global.github = "https://Spydikid01.github.io/"
global.ownernomer = "919947946045"
global.ownernomerr = "+919947946045"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["919947946045"] //ganti agar fitur owner bisa di gunakan
global.packname = '© 𝘙𝘖𝘓𝘌𝘟-𝘔𝘋 /n' //sticker wm
global.author = 'Created By 𝑆𝛲𝑌𝐷𝛪_.𝛫𝛪𝐷' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done~',
    admin: 'This command can only be used by Admin !',
    botAdmin: 'This command can only be used when the bot becomes an admin. !',
    owner: 'This command can only be used by the owner !',
    group: 'This command can only be used in the group !',
    private: 'This command can only be used in private !',
	bot: 'Special Feature User Nomor Bot',
    errtoimg: 'Sorry, Currently Not Supporting Gif Sticker !',
    wait: '⏳ Being proses',
	lockCmd: 'Features Not Activated By Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
