const app = new Vue({
    el: "#app",
    data: {
        listArr: [
            {
                id: 1,
                name: "算法导论",
                date: "2006-9",
                price: 85,
                count: 1
            },
            {
                id: 2,
                name: "Unix编程艺术",
                date: "2006-2",
                price: 59,
                count: 1
            },
            {
                id: 3,
                name: "算编程珠玑",
                date: "2008-10",
                price: 39,
                count: 1
            },
            {
                id: 4,
                name: "代码大全",
                date: "2006-3",
                price: 128,
                count: 1
            },
        ]
    },
    computed: {
        totalPrice() {
            let totalPrice = 0
            for (let item of this.listArr) {
                totalPrice += item.price * item.count
            }
            return totalPrice
        }
    },

    methods: {
        add(index) {
            this.listArr[index].count++
        },
        sub(index) {
            if (this.listArr[index].count > 1) {
                this.listArr[index].count--
            }
        },
        remove(index) {
            this.listArr.splice(index, 1)
        }
    },

    filters: {
        showPrice(price) {
            return "￥" + price.toFixed(2)
        }
    }
})