import { constants } from 'fs';
import { copyFile, rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import FtpDeploy from 'ftp-deploy';
import dotenv from 'dotenv';

dotenv.config();

// copy fresh .htaccess file (site redirection) to out folder
try {
  await rm('out/.htaccess', { force: true });
  await copyFile('.htaccess', 'out/.htaccess');
  console.log('.htaccess is copied to out dir successfully');
} catch (error) {
  console.log('.htaccess could not be copied to out dir');
  console.log(error);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FPT_PASS,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/out',
  remoteRoot: process.env.FTP_PATH,
  include: ['*', '**/*', '.htaccess'],
  exclude: [],
  deleteRemote: true,
  forcePasv: true,
  sftp: false,
};

console.log('deploying...');

ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
