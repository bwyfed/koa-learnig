const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const Router = require('koa-router')
const koaBody = require('koa-body')
const app = new Koa()
const router = new Router()

router.all('/test', (ctx, next) => {
    console.log('/test')
    console.log(ctx.request.headers)
    console.log(ctx.request.body)
    ctx.body = {
        code: '0000',
        msg: 'success'
    }
})

app.use(koaBody())
app.use(router.routes())


/*
const mid1 = async (ctx, next) => {
    ctx.body = 'Hi'
    await next()
    ctx.body = ctx.body + ' There'
}

const mid2 = async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    await next()
}

const mid3 = async (ctx, next) => {
    ctx.body = ctx.body + ' Luke'
}

//尾递归
function tail (i) {
    if (i > 3) return
    console.log('修改前', i)
    tail(i+1)
    console.log('修改后', i)
}
tail(0)
*/
app.keys = ['Hi Luke'] // 用于对session进行加密
app.use(logger())
// app.use(mid1)
// app.use(mid2)
// app.use(mid3)
// session示例
app.use(session(app)) // 注意传入参数config和app
// app.use(ctx => {
//     if (ctx.path === '/favicon.ico') return

//     let n = ctx.session.views || 0
//     ctx.session.views = ++n // 统计访问次数
//     ctx.body = n + ' views'
// })

// 路由示例
app.use(ctx => {
    if (ctx.path === '/') {
        let n = ctx.session.views || 0
        ctx.session.views = ++n
        ctx.body = n + ' 次'
    } else if (ctx.path === '/hi') {
        ctx.body = 'Hi Luke'
    } else {
        ctx.body = '404'
    }
})

app.listen(2333)