import secret_data from '../../secret_data';

export default {
  host: secret_data.mailer.host,
  port: secret_data.mailer.port,
  secure: false,
  auth: {
    user: secret_data.mailer.user,
    pass: secret_data.mailer.pass,
  },
  default: {
    from: secret_data.mailer.from,
  },
};
