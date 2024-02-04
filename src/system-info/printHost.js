import { cpus } from 'os';

const printHost = () => {
  const cpusArr = cpus();
  console.log(`Overall amount of CPUs: ${cpusArr.length}`);

  cpusArr.forEach((cpu, index) => {
    const { model, speed } = cpu;
    console.log(`CPU ${index + 1}: Model is ${model}, Clock Rate is ${speed / 1000} GHz`);
  })
};

export default printHost;
