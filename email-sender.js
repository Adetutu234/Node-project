const { error } = require("console");
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "lauradoe@gmail.com",
        pass: "fakepassword"
    }
})
let mailOptions = {
    from: "johndoe@gmail.com",
    to: "janedoe@gmail.com",
    subject: "Hello from Node.js ",
    text: "This is your first test using Node.js under your Node.js project"
};

transporter.sendMail(mailOptions,(err,info)=>{
    if (err) throw err

    console.log("Email sent:", info.response);
    
})