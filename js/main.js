let currentResult = ''

const writeCode = (result) => {
    let currentIndex = 0
    const interval = setInterval(() => {
        currentResult += result[currentIndex]
        code.innerHTML = Prism.highlight(currentResult, Prism.languages.css)
        style.innerHTML = currentResult
        currentIndex += 1
        if (currentIndex === result.length) {
            clearInterval(interval)
        }
    }, 50)
}

const result = `/*
* 面试官你好，我是CC
* 试试用不一样的方式介绍自己吧
* 先加点样式哦
*/

/* 给页面添加内边距和背景吧 */
body {
    padding: 10px;
    background: rgb(33, 37, 43);
}

/* 让代码板看起来高端一些 */
.code {
    padding: 20px;
    animation: breath 1s ease-in-out infinite alternate;
}

/* 怎么能没有代码高亮呢 */
.code .selector { 
    color: #690; 
}
.code .property {
    color: #905; 
}
.code .punctuation {
    color: #999; 
}

/* 来，转个圈 */
.code {
    transform: rotate3d(0, 1, 0, 360deg);
}
`
writeCode(result)