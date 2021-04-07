// 单元测试有问题，暂时不弄了，浪费时间
import Storage from '../../src/storage/index'
import test from './unTest'



let storageArr = ['local', 'session']

for (let i of storageArr) {
  console.info('======this is '+ i);
  let storage = new Storage(i);

  let testModule = 'testModule';
  let key = 'testKey';
  test.isNull(storage.getItem(testModule, key), 'test default')
}

