import { addFn, subFn } from './utils.mjs'

let a = 0
let fn = null
if (a) {
   fn = addFn
} else {
    fn = subFn
}

fn()