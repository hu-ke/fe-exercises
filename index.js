
// 题目：设计一个简单的异步任务队列执行器，要求执行并发数为 2
// 这里压入了 4 个异步任务，generatePromise 参数为：异步返回时间，执行完后打印的数字
// 可以不用关心 generatePromise 的内部实现
// 按照最大并发数的限制，最终输出的结果要为 2 4 1 3

class Scheduler {
  constructor() {
    this.limitCnt = 2; // 并发数
    this.callbacks = []
    this.state = 'PENDING'
  }

  _run() { // 完成之后重置state为PENDING
    if (this.callbacks.length > 0) {
      // setTimeout(() => {
      let tempCount = 0
      let promises = []
      while(this.callbacks.length > 0 && tempCount < this.limitCnt) {
        let fn = this.callbacks.shift()
        promises.push(fn())
        tempCount++
      }
      this.state = 'PENDING'
      tempCount = 0
      Promise.all(promises).then(() => {
        if (this.callbacks.length > 0) {
          this._run()
        }
      })
      // }, 500)
    }
  }

  run(fn){
    this.callbacks.push(fn)
    if (this.state === 'PENDING') {
      this.state = 'RUNNING'
      queueMicrotask(() => {
        this._run()
      })
    }
  }
}

function test() {
  const generatePromise = (time, data) => new Promise(resolve => setTimeout(resolve, time, data)).then(data => console.log(data));
  const scheduler = new Scheduler();

  scheduler.run(() => generatePromise(400,4))
  scheduler.run(() => generatePromise(200,2))
  scheduler.run(() => generatePromise(400,3))
  scheduler.run(() => generatePromise(100,1))
}

test(); // 打印结果: 2 4 1 3
