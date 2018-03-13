function main() {
    let currentCssResult = ''
    let currentMdResult = ''

    const writeCss = (result, callback) => {
        let currentIndex = 0
        const interval = setInterval(() => {
            currentCssResult += result[currentIndex]
            code.innerHTML = Prism.highlight(currentCssResult, Prism.languages.css)
            code.scrollTop = code.scrollHeight
            style.innerHTML = currentCssResult
            currentIndex += 1
            if (currentIndex === result.length) {
                clearInterval(interval)
                callback()
            }
        }, 0)
    }

    const writeMd = (result, callback) => {
        let currentIndex = 0
        const interval = setInterval(() => {
            currentMdResult += result[currentIndex]
            paper.innerHTML = currentMdResult
            paper.scrollTop = code.scrollHeight
            currentIndex += 1
            if (currentIndex === result.length) {
                clearInterval(interval)
                callback()
            }
        }, 0)
    }

    const css = `/*
* 面试官你好，我是CC
* 试试用不一样的方式介绍自己吧
* 这里是我的代码板，先用它加点样式哦
*/

/* 给页面添加内边距和背景吧 */
body {
    padding: 20px;
    background: rgb(33, 37, 43);
}

/* 让代码板看起来高端一些 */
.code {
    padding: 20px;
    animation: breath 1s ease-in-out infinite alternate;
}

/* 怎么能没有代码高亮呢 */
.code {
    color: rgb(209, 154, 102);
}
.code .comment {
    color: rgb(127, 132, 142);
}
.code .selector { 
    color: rgb(224, 108, 117);
}
.code .function {
    color: rgb(67, 182, 194);
}

/*
* 好了，开始写简历啦
* 先把代码板变窄一点
*/
.code {
    width: 50%;
}

/*
* 在哪写呢，要有张纸的吧
*/
.paper {
    width: 50%;
    padding: 20px;
    color: #000;
    background: #fff;
}

/* OK，可以写啦 */
`

    const md = `# 我的简历
    
## 自我介绍

你好，我叫CC
XXXX年X月出生
就读于XXXX大学，计算机专业，大三
目前自学前端半年
想要应聘前端实习岗位

## 技能介绍

- 熟悉HTML&CSS&JavaScript
- 熟悉HTTP协议
- 熟悉主流的前端框架

## 项目介绍

- XXX画板
- XXX简历
- XXX游戏

## 联系方式

- 手机：188xxxxxxxx
- 邮箱：xxxxx@gmail.com
- QQ：8xxxxxxxx
`

    const css2 = `
/* 写完啦，但现在还是markdown格式，把它转成HTML吧 */
`

    writeCss(css, () => {
        writeMd(md, () => {
            writeCss(css2, () => {
                paper.innerHTML = marked(currentMdResult)
            })
        })
    })
}

window.onload = main