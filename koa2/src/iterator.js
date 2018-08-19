// 函数接收参数是一个数组
function makeIterator (arr) {
    let nextIndex = 0
    // 返回一个迭代器对象
    return {
        next: () => {
            // next()方法返回的结果对象（有value和done）
            if (nextIndex < arr.length) {
                return { value: arr[nextIndex++], done: false }
            } else {
                return { done: true }
            }
        }
    }
}

const it = makeIterator(['吃饭', '睡觉', '打豆豆'])
console.log('自定义的建议迭代器：')
console.log('首先',it.next().value)
console.log('其次',it.next().value)
console.log('然后',it.next().value)
console.log('最后',it.next().done)


// 生成器函数能生成迭代器，更方便使用迭代器
function *makeIterator (arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

const gen = makeIterator(['吃饭', '睡觉', '打豆豆'])
console.log('生成器函数，迭代器:')
// console.log('首先',gen.next()) // { value: '吃饭', done: false }
console.log('首先', gen.next().value)
console.log('其次', gen.next().value)
console.log('然后', gen.next().value)
console.log('最后', gen.next().done)
