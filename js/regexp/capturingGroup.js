
const message = '我最喜欢的两本书: 《黄金时代》和《沉默的大多数》、《一只特立独行的猪》';
/**
 * 括号用来分组
 * 这里分成了三个组
 */
// const regex = /(《)(.+?)(》)/gi;
const regex = /《(.+?)》/gi
const res = message.matchAll(regex);
for (const iterator of res) {
  console.log(iterator);
}
