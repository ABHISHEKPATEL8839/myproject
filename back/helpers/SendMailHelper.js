import nodemailer from 'nodemailer'

const Transporter = nodemailer.createTransport({
    host : "smtp-relay.brevo.com",
    port : 587,
    secure : false,
    auth : {
        user : process.env.BREVO_MAIL_USER,
        pass : process.env.BREVO_MAIL_PASS
    }
})

let DoSendMail = async(to, sub, body)=>{
    try{
        let response = await Transporter.sendMail({
            to : to,
            from : "tss759048@gmail.com",
            subject : sub,
            html : body
        })
        
    }catch(err){
        console.log("--------- ERROR ", err)
    }
}

export default DoSendMail;