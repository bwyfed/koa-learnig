
/*
let router = require('koa-better-router')({ prefix: '/api' })
let route = router.createRoute('GET', '/users/:id', [
  function (ctx, next) {console.log(1111)},
  function (ctx, next) {console.log(2222)},
  function (ctx, next) {console.log(3333)},
])

console.log(route)
console.log(route.match('/foobar'))    // => false
console.log(route.match('/users'))     // => false
console.log(route.match('/api/users/haha')) // => true
console.log(route.middlewares.length)  // => 3
*/
const Koa = require('koa')
const Router = require('koa-router')
// const route = require('koa-path-match')
const logger = require('koa-logger')
// user router
const userRouter = new Router()

userRouter.all('/login', (ctx, next) => {
  console.log('/user/login')
  ctx.body = {
    code: '0000',
    msg: 'success'
  }
})

const router = new Router()
router.prefix('/api/:service/:other')
router.all('*', (ctx, next) => {
  const service = ctx.params.service
  console.log( `service:${service}`)
  const other = ctx.params.other
  console.log(`other:${other}`)
  console.log(ctx.request.method)
  console.log(ctx.request.body)
  ctx.body = {
    haha: 'gaga'
  }
})

const app = new Koa()
app.use(logger())
app.use(router.routes())
app.listen(2666)
