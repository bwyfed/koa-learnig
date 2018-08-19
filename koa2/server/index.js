const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()

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

app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(2333)