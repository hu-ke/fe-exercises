
//sw.js

// 版本号
const CACHE_VERSION = 'cache-v0'

// 安装
self.addEventListener('install', (event) => {
    // sw.js 文件发生变动，就会执行 install 回调函数
  console.log('install')
})

// 激活
self.addEventListener('activate', (event) => {
  console.log('activate')
})

// 捕获网络请求
self.addEventListener('fetch', (event) => {})

self.addEventListener('message', (event) => {
  let data = event.data; // 收到消息
  console.log('data', data)
  let prmsNotifyAll = self.clients.matchAll().then((clients)=>{
      clients.forEach(client=> client.postMessage(data)); // 批量通知各子页面
  });
  event.waitUntil(prmsNotifyAll); // 等待完成
});