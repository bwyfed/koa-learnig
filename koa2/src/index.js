/*
// 示例1：import导入
import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs} from 'fs'
import * as qs from 'querystring'

promisify(readFile)(r(__dirname, '../package.json'))
    .then(data => {
        data = JSON.parse(data)
        console.log(data.name)
        wfs(r(__dirname, './name'), String(data.name), 'utf8')
    })


// 示例2：export导出测试代码
import { name } from './export'
import { getName } from './export'
// import {name, getName } from './export'
console.log(name) // Luke
console.log(getName()) // Luke
// 导入默认值
import age from './export'
import ageeee from './export' // 导入默认变量名时可以重命名
console.log(age)
console.log(ageeee)
// 导入export模块的批量导出
import {
    name2 as name3,
    getName2 as getName3,
    age as age2
} from './export'
console.log('name3', name3)
console.log('getName3()', getName3())
console.log('age2', age2)
*/

// 示例3：生产环境下异步操作
import { promisify } from 'util'
import { readFile } from 'fs'
import { resolve as r } from 'path'

async function init() {
    let data = await promisify(readFile)(r(__dirname,'../package.json'))
    data = JSON.parse(data)
    console.log(data.name)
}

init()