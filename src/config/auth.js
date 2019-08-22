import jwt_config from '../../jwt_secret';

export default {
  secret: jwt_config.jwt_secret,
  expiresIn: '7d',
};
