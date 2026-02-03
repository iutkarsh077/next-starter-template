import nodemailer from "nodemailer";


export interface IUserData {
    fname: string;
    email: string;
    address: string;
    english: number;
    maths: number;
    createdAt: Date;
}

const SendEmail = async ({to, data}: {to: string, data: IUserData}) => {
  try {
    console.log(data)
    const fromEmail = process.env.GOOGLE_EMAIL;
    const appPassword = process.env.GOOGLE_APP_PASSWORD;

    if (!fromEmail || !appPassword) {
      return { message: "Env credentials are not available", status: false };
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail,
        pass: appPassword,
      },
    });

     const emailHtml = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #333; text-align: center;">Hello, ${data.fname}</h1>
    <p style="font-size: 16px; color: #555; text-align: center;">
      Thank you for registering on SNIPPETS. Your account details are given below:
    </p>
    <div style="text-align: start; margin: 20px 0;">
      <div style="font-size: 16px; color: black;"> <br/> Name: ${data.fname}<br/> email: ${data.email} <br/> address: ${data.address} <br/> English Marks: ${data.english} <br/> Maths Marks: ${data.maths} <br/> Created At: ${new Date(data.createdAt).toLocaleString()}</div>
    </div>
    <p style="font-size: 14px; color: #777; text-align: center;">
      Regards,<br />The SNIPPETS Team
    </p>
  </div>
`;

    await transporter.sendMail({
        from: fromEmail,
        to: to,
        subject: "Snippets - Create Account",
        html: emailHtml
    })

    return { message: "Email sent successfully", status: true }
  } catch (error) {
    console.log(error);
    return { message: "Failed to send email", status: false };
  }
};

export default SendEmail;
