实现设置localstorage失效时间，cookie在哪种场景下比localStorage更好，服务端会保存哪个，怎么开启GPU加速
有1万张图片做轮播图，然后怎么优化，如果用户疯狂点击切换，图片又很大，怎么优化
post加密的信息在哪？那这样的话不是还是明文的吗？能不能设计一种方法提高安全性？
有哪些加密方式？
介绍一下中间件的洋葱模型，以及为什么要设计出洋葱模型这个东西
大量图片加载和单个大图片加载
react - fiber对react有什么意义
react18新特性
不同图片拼在一起怎么处理的，是什么格式的图片？你的图片地址存在哪里的，怎么拿到？是url还是图片的地址？
你知道img标签有一个原生的类似于loader的属性吗？图片的CSS属性你知道吗？图片两种存入方式的区别？
你怎么处理不同设备间的屏幕大小比例同步？
移动端不同尺寸适配方面怎么做的？
介绍一下redux以及为什么会考虑到使用redux进行状态管理
redux中怎么发起异步请求其原理是什么？
react为什么能运行redux
懒加载的原理
jsonp的方式是怎么获取数据加载到页面中的
一个文件名字hash化怎么实现？以及其原理？
微前端原理、运用、优劣等
对数据库有了解吗
对数据库的掌握程度(视图、索引)
手写一个简版搜索框组件，要求考虑可复用性
手写实现一个组件，包含一个全选按钮和多个复选按钮，实现全选按钮选中则复选按钮全部被选中，全部复选按钮选中则全选按钮自动选中
非对称加密？为什么只有私钥可以解密？
组件通信方式及场景
使用 CSS 实现一个常见的中后台布局
顶部导航 + 左侧菜单 + 右下角内容
你之前使用react - lazyload封装loading组件实现图片懒加载功能
现在你需要使用 React 实现一个图片懒加载组件
然后实现一个元素出现在可视区中
flexible.js的底层逻辑
jwt登录与传统cookie登录的区别
tailwind与css in js的区别
webpack和vite介绍一下
有一个场景，10个组件都调用了同一个接口，那么怎么办，不更改组件内在的逻辑，如何让请求只发一次？（我后面说在重新封装axios，然后我提到了拦截URL，后面经过面试官提醒想到了请求拦截器）
部署到CentOS，后端是用Java吗？还是Node相关？
前端如何部署到Nginx的？（我提到了location，try_files，root等等）
你刚刚提到了一些概念如location，反向代理，history等等，那你前端是Vue项目吗？（是的）
你的vue项目你刚刚提到了打包，那是webpack打包生成dist吗？
生成的dist如何部署到后端的呢？
你这个路由重定向是如何处理的？就比如说 / a / b？
本质上Vue项目没有做路由分发，都是通过nginx来完成吗，如果是node环境下有没有做关于history的配置？（没有在node侧做配置，就没有涉及到node）
刷新会显示404，从 / 不会404这种情况遇到过吗？怎么去解决刷新可以正常显示呢？（我严重怀疑面试官不知道try_files，已经解释好几次了，最开始提到nginx的时候我就解释了try_files。。。）
然后面试官问，脱离nginx该如何解决这个问题，换tomcat，换apache该如何办呢？（事实上，tomcat就是当404的时候重定向到index.html即可，apache我没用过，估计也是加一个配置，但是面试官想不用这个静态资源直接在Vue中解决，我是真的不会）
node中有没有用过history相关的？
刚刚提到了反向代理，那么反向和正向的区别是什么？
部署服务器的时候有域名吗？（最开始是IP，后面是域名，再后面是HTTPS也实现了）
https当时是怎么配置的？（腾讯云，直接一粘贴完事）
所以你的https是nginx实现的？
你能说一下https握手的全流程吗？
解释一下证书和签名的概念？第三方劫持https是如何做预防的？（不会，这俩我都不会，直接下一题）
你能说一下虚拟DOM和真实DOM的好坏有什么见解？
写过dockerfile吗？
它的组成是几部分呢？（三部分，签名算法，内容，签名）
相比普通token有什么优点吗？（不好意思呀，我没用过普通token，我直接jwttoken好吧）
那jwt有啥缺点吗？
既然用了jwt，还用redis，那这个redis是什么时候用呢？
所以jwt的缺点是？
jwt传输过程中放到哪里的？（放到请求头的一个k - v对，反正不是cookie，名字可以随便取，一般是A开头的一个单词，我忘了叫啥，我当时这么说的）
如果校验失败，返回状态码是多少？（我说的401，但是实际是后端定的，想多少就多少，但是一般401）
如果你的同事出现工作上情绪的问题，你如何调节？
你之前的项目是怎么做线上发布的？
你是怎么理解软件研发的生命周期的？
你是怎么理解 RESTful 的，它的优缺点是什么？
图片懒加载怎么做得？有哪些常见方案？
说说你的理解 UI 组件和业务组件有什么区别？
有没有了解 Webpack 的 loader 和 plugin，它们是怎么实现的？
如果让你实现一个 loader 你怎么做？
手写代码，实现图片加载失败后，显示另一个地址内容
你是怎么封装的useRequest呢
统一请求，统一拦截，从这两方面散开去说
聊到了babel和AST
你们用的什么进行状态管理呢，为什么不使用useState呢
从不易于管理以及容易引起重复渲染两方面回答
你上面提到了时间戳，那么时间戳的单位是什么呢
秒，但是应该是毫秒
uuid的底层原理是什么呀
时间戳加mac地址
现在有一个需求，需要你调用后端api来生成你前端代码中没有的组件，请问你该如何设计
前后端都是json数据，然后调用后端传来的json，放在react.creatElement里面，讲了讲createElement
现在又有一个需求，需要你在生成的一系列表单中实现例如一个提交的功能，请问你该如何设计
请问虚拟列表你是怎么实现的呢
关键词: 边执行边销毁，然后说了说具体的过程
无感加载你是怎么实现的呢
用户还没滑到已创建列表的结尾就开始进行创建
实现了你该如何优化item创建的过程呢
从taro和浏览器两方面回答，taro中使用节流方案，浏览器中使用节流 + rsf
TCP是如何得知数据发送完毕的、
服务器返回数据之后具体客户端的浏览器解析引擎是如何解析数据并展示的（需要了解解析顺序，css和js是同步还是异步解析的）、
const与引用类型，作用域之类的
样式穿透
esm和cjs区别，各自遇到循环引用时会怎么处理
一个this指向的题目，注意class里默认开启严格模式
数据库存64位的数据，前端怎么在不损失的情况下处理（让后端转成字符串再返回给前端，用bigint去处理）
算法：合并区间
页面假死的时候，浏览器还可以响应跳转链接的操作吗，为什么，哪个线程来响应（有没有大佬来解答一下）
代码题：1.数组扁平化 + 去重 2.查找重复最多的字母及长度 3.对象数组转为树结构
对以后工作的规划
react为什么推行hooks？
redux有过哪些体系？
useSelector ？
如果不是React18，不能开启并发更新，怎么优化渲染？（项目深挖）
全局错误处理怎么做的？ 如果想单独给某个组件做特殊的错误处理怎么办？（项目深挖）
对项目优化的理解？怎么考虑的？
项目文件怎么分配和管理的？
自定义hook？
有没有用过hooks库？
链表和栈在项目中什么地方会用到？
堆了解过吗？
http，dns，tcp, udp都介绍下？
进程通信了解吗？
项目有用git版本管理吗？可以看下你的提交分支吗？
垃圾回收 讲讲内存碎片化
dns解析全过程
cdn加速原理 以及详细说说如何工作的
本地存储 以及具体应用
逻辑题
一个班有百分之六十的人喜欢足球 七十喜欢篮球 八十喜欢排球 ，最少有多少人同时喜欢三种球
SSO单点登录实现过程；
页面渲染过程；
括号匹配（栈解决）；
tcp三次握手流程；
实现文档中左中右三部分布局；
列表内查找不存在的最小整数；
字符串处理（首字母大写，去除垃圾字符）；
在html中实现一个双向绑定（只知道原理，api没怎么了解没写出来
用nginx做了什么，nginx有哪些优点？
判断回文字符串；（位运算取中点，栈解决）
作为负责人，小组内有人进度慢怎么办；
3. 边下拉边加载，数据量过大会不会卡顿，怎么办
4. position有哪些属性
5. relative使用top和left会怎么样
7. 类名的命名习惯
8. 修改tailwindcss所提供类的样式
10. 判断数组是否为数组
11. 数组过滤需要的数据
13. 类如何继承
14. 如何复制对象
16. 异步队列前一个任务时间过长要怎么办（说Web Workers）
18. 响应式原理有什么区别
5.27
2.一道阶乘递归的算法题
3.扩展运算符的作用
5、Object.defineProperty除了可以设置set，get还可以设置什么（可枚举，可删除）
6、ES6里面有哪些新特性（const，let，forOf，Object.keys，Object.entits，arr数组的新api（reduce，map））
7、什么是高阶函数（参数或返回值是函数）
12、如何判断一个对象是不是某个类创建的（apiisPrototypeOf，或者自己写递归）
14、对react的了解多少（掰扯react和umi）
15、ts用得多吗（用过）
16、typescript可以对已有的类型进行一些变换吗？（我理解错题目了，面试官应该是想问强制类型转换，我去回答type了，还扯了interface和namespace，其实我现在一想就是想问as关键字或者 <>）
17、一些常用的页面性能优化方法（掰扯cdn、懒加载、负载均衡等等）
算法一：实现任务调度，传来若干个任务，然后同时执行最多n个，我一脸懵逼，直言我不会，然后直接下一题
算法二：百万级别的乱序数组，找到倒数第n小的数字，我默默关闭webstorm，打开了idea用Java的标准库（优先队列，也就是堆，利用标准库的堆排序）调API给实现了，然后问复杂度，然后问优先队列的复杂度
1.怎么防止用户篡改token
2.怎么防止用户同时修改数据
2.异步函数和同步函数，怎么设置异步同步执行顺序
3.promise实现
4.js语言的特点
5.c / s 和b / s的区别
8.用什么数据结构和算法可以实现事件冒泡
5.25
2. 项目中路由用的是hash还是history
3. 样式less scss
4. 浏览器缓存策略
5. 有没用过rem vw
项目里跨域怎么处理
跨域是怎么出现的
 cookie localStorage的区别
 Promise 和 async await
项目里组件间通信是怎么做的，用哪些方式
什么时候用到本地存储
 列表数据渲染时为什么要加 key
setState
手写：利用promise实现隔1秒输出1，输出1后，然后再隔2秒输出2.....直到再隔10秒输出10.（代码上不能写成10个then的形式，也就是说需要考虑数很大的情况比如隔100秒输出100）
js原生的生命周期
setTimeout(() => { console.log(1) }, 0); 执行时机
js获取对象原型的方法
New的执行过程
call, apply, bind
类数组对象，以及怎么把类数组对象转化为数组
git pull与git fetch的区别
html语义化标签和块级元素行内元素
CSS选择器的优先级，CSS盒子模型，BFC
深浅拷贝，事件机制，事件循环，原型和原型链
讲讲http和https，把http0.9 - 3，https作用，加密过程，对称非对称加密一起讲了，问了什么是队头阻塞
讲讲http缓存，强制 / 协商缓存，共享 / 私有缓存都讲了一遍，顺带着讲了浏览器渲染
讲讲对webpack的了解
1.（手写）两种判断回文的方法
隐藏元素的方式有哪些
同时发送三个请求，怎么做
有多个button按钮，做防抖怎么做
合并数组的方法
你介绍一下MVVM框架
8. 有了解过react吗
3、js的事件循环机制4、定时器是宏任务还是微任务，定时1分钟会精确执行吗？
6、如何设计一个vue搜索框，具有模糊搜索功能
7、watch和computed9、手写：找出数组中重复的数字10、手写：数组中第K大的数字
1.实现一个HardMan函数，能链式调用study()、rest()、restFirst()函数，其中rest()作用是其后面的链式调用延迟5s，restFirst()作用是使整条链式调用延迟10s；
2.大数相加
web安全xss和xsrf
http和websocket
页面性能优化
cdn
less和sass预处理器区别
http文件获取之后解析的过程
前端性能优化
React生命周期
12、React - Fiber
13、如何自定义通用组件
3、对hooks的理解
4、hooks的源码
自身发展规划
工作中遇到困难的事
CSS哪些属性可以实现布局
CPU和GPU各自擅长的工作
深度学习激活函数的用法
进程和线程的区别与联系
js中栈与堆
CDN缓存查询步骤
与缓存有关的状态码
JS事件模型与事件循环机制
fibonacci数列用两种以上方式实现
你理解的react。
遇到的问题，怎么解决的呢
你做的登录，登录会返回那些内容。
postman用过吗。
react的状态复用（想问下大家，这里面试官想问的是状态管理吗？）
你对hook的理解。
props children与 react children的区别。
项目怎么设计的，怎么思考的
举例说明项目哪些技术栈是你深思熟虑后才用的
做项目有什么性能优化的经验
用虚拟滚动出现白屏怎么解决，有没有用到节流
如果用户反馈页面卡顿，如何查找问题出现在哪（一脸懵）
两种函数定义的区别在哪
http在一个链接可以支持多个流传输吗
为什么tcp挥手比握手多一次
算法题：求a ^ b的后三位，说一下思路，有什么优化以及优化后的算法复杂度
css的动画和canvas都操作DOM了吗？
Echarts的布局算法知道吗？
开发过 webpack 插件吗？讲下 webpack的打包过程？
讲下 GPT eventSouce 的连接过程(实习)
有哪些排序算法？冒泡排序的最好最差时间复杂度？有无穷个数据，怎么排序？
sort排序？排序数组里面有字符串和数字，怎么排序？
剩下全是场景题：
如果用户拖动了当前窗口，保证用户拖动的时候元素位置不变，用户拖动完成位置变化，怎么实现？
详细说说？（监听当前浏览器的可视化区域高度和宽度，document.documentElement.clientHeight）
如何实现动画使这个div动起来？
如果用户在拖动窗口过程中，动画还在动，会出现什么现象？如何解决？(答：丢帧)
了解跨端rn, flutter吗？(用过 uniapp)
开发过小程序吗？微信小程序的实现原理是什么？（简历没写这些玩意，面试官为了凑时间吧）
1. css如何防止冲突（scoped用处？）
2. v - model实现（我答响应式不对、答双向绑定双向数据流都不对，有无佬儿给我指点迷津QAQ真的不知道面试官想听什么）
3. 希望父组件给子组件传值时，一次性绑定数据怎么绑？问你怎么绑？
4. 如何测试发布npm包（npm link有了解过么）
5.项目技术实现方案、项目有没有上线（主要针对数据模拟，网络请求，测试，信息推送）
6.有没有更方便的联调方法
7.封装的网络请求模块有哪些内容，对外暴露了什么方法
8.response（响应参数）数据结构大概是怎样的；通过什么来判断接口成功或者失败（code、data、message；通过code来判断）
9.对响应结果的处理有没有封装在请求库里面
10.项目里消息推送这个功能实现场景在哪
11.有没有想过用微信来实现推送功能
13.有没有找一些开源框架或者项目来自学，改造
14.怎么控制整个项目的进展，进展有没有延期过
15.为什么想来实习，就业而不去考研
16.共享屏幕展示一下项目，指出一些写法错误和优化（这里真的超级好！）
实现一个Tooltip
实现一个URL解析
React.memo / useCallback / useEffect
![](https://uploadfiles.nowcoder.com/images/20230521/119095502_1684651260953/D2B5CA33BD970F64A6301FA75AE2EB22)
    性能优化有哪些做法
写一个函数，参数为任意个数组数据，求它们的交集，
    例：func([1, 2, 3, 5], [2, 4, 6], [2, 3, 5])=> [2]
func([1, 2, 3, 5])=> [1, 2, 3, 5]
用 react / vue 写一个页面，页面上显示一个计数及一个按钮，点击按钮计数 + 1，在 5 秒内没有再次点击时，计数清零。中间还穿插问了一个 clearTimeout / clearInterval 能否相互清除对方的定时器的问题。这个我答的不会，但结果是会的...
说一下生命周期，componentWillReceiveProps是更新阶段的吗？组件初始化的时候我不能接收props吗？组件初始化会调用这个生命周期吗？顺便问一下大佬，我说的是不会调用，但是他说会调用？我记得是不会调用的吧
请求是在那个生命周期里面的呢？我能不能在componentWillMount里面做请求呢？并解释原因。
    讲一讲react - redux的一个流程
高阶组件。
    隐藏元素的方式, 区别, 应用场景
路由鉴权
常见请求头字段含义
常见性能优化方案
webpack优化
首屏优化与指标
13.算法题 统计数组里面出现次数 最多的数字
连连看算法题, 九方格, 判断是否可以连接, 只允许两次转弯(一面)
3.二叉树后续遍历, 层次遍历(二面)
正则匹配(二面)
牛顿法和T梯度消减求正数的平方根(三面)
前端知识偏基础和偏宏观概念
项目经验(axios封装, 权限校验, token)
浏览器指纹
浏览器加载资源过程, script async defer 区别
v8引擎, 事件循环, 垃圾回收
MVVM
Axios与Store的封装（项目提及）
    ElementUI多文件上传优化（项目提及）
    如何取消请求
在什么时候取消
EventBus如何实现
听说过尾递归吗
说一下electron中有哪些线程
div标签中有EChart，如何自适应div宽高
应该用EChart.resize()
有canvas相关经验吗
图片显示怎么做的？
    有可视化相关经验，如three.js
算法题 生成之间区间(left, rigth)的n个不重复的数字 算法题 给定字符串Str, 待求重复的子串的长度Num, 找出所有的重复子串 基础知识 各种数据取反![]!{}!""!undefined等等原型链  Funcition Object Function.prototype 
 promise, callback
2.为什么要用虚拟DOM？
    4.有用过promise吗？为什么要用promise？以前没有promise怎么办？
    5.promise在项目中有真正用过吗？
    7.假设现在有3个后端服务，想询问哪个服务还活着，只要有一个活着，然后就进行下一步操作，这种情况如何实现？
    8.初始化的时候，有3个请求，这3个请求没什么关系，假设是3个下拉列表，我想同时请求下来，拿到请求结果后进行下一步操作，但是不想其中任何一个接口失败而导致后面的操作无法进行，这时候应该怎么做？
    promise.all是用来干什么？
    用过express对吧？express和koa这些有了解吗？
    洋葱模型有没有了解过？
    后端设计有用过MVC或者其他什么设计模式吗？ MVC这3个都代表什么？
    promise还有什么api或者方法可用？
    promise.then可以接收几个参数？
    git命令主要用哪些？创建分支是用什么命令？
    如果要做代码的分支回滚，用什么命令？
    异步加载？async和defer的区别？
    如果有一个script的资源加载，希望资源加载后的执行顺序和初始顺序位置保持不变，应该用什么方法？
    如果想在数组中删除某两个元素，并且插入一个元素，用什么方法？
    数组头部删除元素应该怎么做？
    cors是什么的缩写？cors的原理？
    假设发生跨域的错误，前端会看到什么报错？
    跨域的时候是把接口发出去了嘛？接口是发的时候被拦截还是发到服务器，服务器不给返回还是返回了数据被浏览器给拦截了？
    让你实现一个动态加载脚本，loadScript函数，你应该怎么设计？功能是：传资源的路径，然后加载到页面上来，应该如何实现？
    用过哪些数据结构？树有哪些类型？二叉树有哪些类型？（完全、满、搜索树、平衡树），面试官补充霍夫曼树
霍夫曼树用来做什么的？
    如果让你做一个深度优先算法，不要用递归，你应该怎么做？栈？
    如果是广度优先呢？队列
    给定一个数组，来实现堆排序，你能说一下实现的过程吗？是边插入边调整吗？
    堆排序的时间复杂度是？空间复杂度是？是稳定的吗？
    OSI七层网络模型
HTTP是哪一层
传输层有哪些协议？
    网络组网结构？局域网有哪些网络结构？
    目前局域网最常用的是哪种结构？局域网的中心是什么？--- 让我了解一下哈哈哈，
    总线结构在数据链路层去实现拥塞控制，用了哪些算法？
    class关键字
class解决什么问题
react释放不了闭包，具体为什么
力扣86题
封装过哪些组件
登陆注册流程
算法部分是自己做的吗（inSight）
    CPU 的内核态 和 用户态 减少切换
进程 线程 协程 的区别
cpu进程通信方式
数据库一道题 interval group by  
CPU的一次xxx
代码：分割url参数
瀑布流虚拟列表
拓扑排序
精灵图
MongoDB和MySQL的区别
CI / CD的流程
Redis中的数据结构
项目打包部署
如何学习前端技术的
组件间通信方式
封装底层方法，需要处理哪些事情
登录注册过程
如何防止别人的token生效
仿篡改
移动端开发与PC端开发差别
适配怎么做的
CSS样式遇到什么问题
如果希望覆盖子组件的样式，需要怎么做
哪些元素可以继承
position: fix什么时候会失效
设计针对一个人一天只弹一次的弹窗
手写：数组切分
模板编译原理
ast语法树看过吗
asyncawait的理解
事件代理了解吗，事件代理优缺点，规则是什么
手写：最大不重复子串
用node做后端有什么弊端
用到node来创建子进程了吗
文本溢出、隐藏的处理方式
清除浮动
promise async await
ES6模块规范与commonJS的区别
对前端工程化有了解吗
浏览器渲染原理
ts相比js有什么价值
入参的判断：按照Promise的要求，可迭代的入参
手写：有序数组的合并，如果不用splice呢
前端视频拉流的方案想到了吗
部署的规模
4卡2080ti，跑了多少个模型呢
异常检测算法有参与是吗
js通过串反向生成类，有了解吗
ts比js有哪些优势
node.js在哪用到的
mongoDB和mySQL的差别有了解吗
mongoDB能够多表查询吗
socket用过吗
sshSocket呢
flask也用过？
    nginx有了解吗
除了nginx跨域，还了解其它跨域方式吗
deepLearning和前端可以结合吗
说说对tcp与udp的理解
哪些协议基于TCP或UDP
    - 有移动端的相关经验吗
    - 移动端应用有哪些性能指标
    - 从开发者视角看，有哪些性能指标
    - web有哪些性能指标
- 抛开用户角度看，还有哪些指标
- 口述：判断链表是否相交
- 口述：如果输入有环呢
- 口述：两个栈模拟队列
- 口述：两个队列模拟栈
- 手写：归并排序
- 手写：逆序数查找
- 不建议使用全局变量
- 数据结构、算法、设计模式学过课程吗
- 数据结构哪方面学的比较好呢
- 堆和栈是怎么理解的，相应的应用场景
https用的是对称还是非对称的呢，加密的过程有了解过吗
- 如何实现从http升级到https，CA机构有了解吗
- 有一个服务器，上面需要放什么东西，推流与拉流如何实现
- 样式是什么样的
- 描述一下数据流向的过程，组件能直接commit吗
手写：双向数据绑定
- proxy与Object.definePropoty，与proxy配套的什么，reflect
- 主轴上如何实现等间距布局
- 如何让内部元素动态填满整个盒子
- 浏览器渲染页面的流程
- h5本地存储的形式
- tcpip协议分为哪些层，分别举例
- tcp粘包问题是什么，如何解决
- kmp算法--不会
- 说一下深度优先和广度优先
- 谁占用的空间大
- 重载和重写的区别--不会，js中不支持多态
- 面向对象的基本原则--不会
- 用了哪些事件获取到位置
- 有一堆位置，取的是哪几个值
- 知道路由守卫的意思吗
- 知道如何实现的吗
- 讲一下网址的组成与含义
- query部分与hash部分的差别
- history模式与hash模式的差别
- 解释一下同源
- z - index原理
- 讲一下token的生成与验证的过程
- 鉴权的方案，有什么区别，存在什么风险
- 账号安全有什么挑战
- 如何实现屏幕适配的
- 从缓存角度讲一下加载的流程
- 划分组件的方法论
- 组件的模块化的方案
