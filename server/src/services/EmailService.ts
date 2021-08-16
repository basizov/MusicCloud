import nodemailer, { Transporter } from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';
import config from '../configuration/config';

class EmailService {
  transporter: Transporter<SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_POST,
      secure: false,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    });
  }

  async sendActivationEmail(emailTo: string, activationEmailLink: string) {
    await this.transporter.sendMail({
      from: config.SMTP_USER,
      to: emailTo,
      subject: `Активация пользоваталя на ${config.BASE_URL}`,
      text: '',
      html: `
        <div>
          <h1>Для активации аккаунта перейдите по ссылке:</h1>
          <a href="${activationEmailLink}">"${activationEmailLink}</a>
        </div>
      `
    });
  }
};

export default new EmailService();
