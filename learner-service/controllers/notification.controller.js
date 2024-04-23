import nodemailer from 'nodemailer'

export const SendEmail = (userMail) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.email",
        port: 587,
        secure: false, 
        auth: {
            user: "Mvirajselling@gmail.com",
            pass: "zwso oqql vvji lycx",
        },
    });

    const mailOptions = {
       from:{
        name:"Edugrade",
        address:"Mvirajselling@gmail.com",
       },
       to:[userMail],
       subject: "Course Enrollment",
       text: "You successfully enrolled to this course",
       html: "<b>You successfully enrolled to this course</b>",
    }

    const sendEmail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            console.log("Email has been sent");
        } catch (error) {
            console.error(error);
        }
    };

    sendEmail(transporter,mailOptions)
}