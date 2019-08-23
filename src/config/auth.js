import secret_data from '../../secret_data';

export default {
  secret: secret_data.jwt_secret,
  expiresIn: '7d',
};
