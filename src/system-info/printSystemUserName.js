import { userInfo } from 'os';

const printSystemUserName = () => {
  const user = userInfo();
  console.log(`The current system user name is ${user.username}`);
};

export default printSystemUserName;
