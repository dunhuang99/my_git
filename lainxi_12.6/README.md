### 数组方法 foreach map filter reduce

#### foreach 知识普通的 for 循环 result1 为 undefined

let result1 = arr.forEach((item, index) =>{
console.log(item,index)
})

#### map 返回新的数组

let result2 = arr.map((item, index) =>{
return index + item
})

#### filter 对数组进行过滤，返回想要的数组

filter 中的回调函数有一个要求，必须返回一个 boolean 值
true 将这次回调的 item 加入到新的数组中
false 过滤掉这次 item

//比如去除数组中的奇数
let result3 = arr.filter((item, index) =>{
if (item%2 === 0 ) {
return true
}else {
return false
}
})

#### reduce 对数组进行遍历和操作 通常四个参数 (pre , cur, index)

例子: 数组求和
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = arr.reduce((pre, cur, index) =>{
return pre + cur
}, origin)

origin 为初始值
总共会实行 10 次操作
第一次操作 pre = origin, cur = 1, return origin + 1,
第二次操作 pre = origin + 1, cur = 2, return origin + 1 + 2,
...

#### for...in... 遍历数组

let obj = {
name: '张三，
age: 18,
contnet: '前端'
}
for (key in obj) {
console.log(key, obj[key])
}

#### for...of... 用来遍历数组，类数组的对象，字符串，set/map, generator // for (item of obj)

let obj = ['张三', '李四', '王五']
for (key in obj) {
console.log(key, obj[key])
}

### 表单 (v-model)

注意： 必须绑定 value 值 和 onCchange 事件

#### v-model 修饰符

v-model.lazy 在按下 enter 键或失去焦点时再绑定

v-model 通常返回的都是 string 类型， 所以 v-model.number 返回 number 类型

v-nodel.trim 去除 v-model 绑定值的俩边的空格
