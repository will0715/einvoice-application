import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

const transporter = nodemailer.createTransport(mailConfig);

export const sendMail = (mailOptions, callback) => {
    transporter.sendMail(mailOptions, callback);
};
