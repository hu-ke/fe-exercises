// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found)

// const str = "For more information, see Chapter 3.4.5.1";
// const re = /see (chapter \d+(\.\d)*)/gi;
// const found = str.match(re);

// console.log(found);

// zoom面试题
const data = {
  company: 'zoom',
  me: {
    name: 'tan xin',
    email: 'xxxxx',
  },
  now: Date.now(),
};
const template =
  '我们公司是{{ company }}，我是面试官{{ me.name }}, 我的邮箱是{{ me.email }}。当前时间是{{ now }}';

const regexp = /{{(.+?)}}/ig
const result = template.match(regexp)

function strRender(str, data) {
  if (!str) {
    return ''
  } else if (!data) {
    return str
  }
  const regex = /{{\s*(.+?)\s*}}/

  while (regex.test(str)) {
    const found = str.match(regex)
    const key = found[1]
    console.log('found', found)
    if (key) {
      if (data.hasOwnProperty(key)) {
        str = str.replace(regex, data[key])
      } else if (key.indexOf('.') > -1) {
        let keys = key.split('.')
        let value = data
        keys.forEach(k => {
          value = value[k]
        })
        str = str.replace(regex, value)
      }
    }
    console.log('str', str)
  }
  return str
}
console.log(strRender(template, data))
  
// template.replace(found[0], )
// console.log(found, found.input);

// const regex = /\{\s?((\w|\.)+)\s?\}/
// console.log(regex.test('我们公司是{ }'))