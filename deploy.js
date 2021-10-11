require('dotenv').config();
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FPT_PASS,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/out',
  remoteRoot: process.env.FTP_PATH,
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ['*', '**/*'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};

console.log('deploying...');

ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
