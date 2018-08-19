// 示例1: 箭头函数写法
// 函数定义
const arrow1 = function (param) {}
// 只有一个参数可以写成以下两种方式
const arrow2 = (param) => {}
const arrow3 = param => {} // 一个参数的简化写法
// 函数体只有一条语句
const arrow4 = param => console.log(param)
// 函数只返回一个对象
const arrow5 = param => ({param: param})
// 函数有多个参数，()不能省略
const arrow6 = (param1, param2) => {}
// 函数参数是一个对象 {id:1, movie: ***}，直接通过对象解构方式拿到参数
const arrow7 = ({id, movie}) => {
    console.log(id, movie)
}
// 示例2：this演示(面试题)
const luke = {
    id: 2,
    say: function () {
        setTimeout(function () {
            console.log('id:', this.id)
        }, 50)
    },
    sayWithThis: function () {
        let that = this // 或者命名为self, me, _this
        setTimeout(function () {
            console.log('this.id:', that.id)
        }, 500)
    },
    sayWithArrow: function () {
        setTimeout(() => {
            console.log('arrow id:', this.id) // 2
        }, 1500)
    },
    sayWithGlobalArrow: () => {
        setTimeout(() => {
            console.log('global arrow id:', this.id)
        }, 2000)
    }
}

luke.say() // undefined
luke.sayWithThis() // 2
luke.sayWithArrow() // undefined 答错了，是2
luke.sayWithGlobalArrow() // 2 答错了，是undefined