class Article {
    static publicsher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) { 
        return article1 - article2
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.title : this.viewCnt
    }
/*
    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }
*/
}

console.log(Article.publicsher)

Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

//
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publicsher, article2.publicsher, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))

let articles = [article1, article2]
console.log(articles)

articles.sort((a, b) => a - b)// 오름차순 정렬
articles.sort((a, b) => b - a)// 내림차순 정렬
console.log(articles)