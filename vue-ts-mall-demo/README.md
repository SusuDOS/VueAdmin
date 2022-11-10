# vue-ts-mall-demo

Vue3+TS电商后台系统项目实战

视频地址:https://www.bilibili.com/video/BV1nr4y1G73d?p=1 

## 资料整理

代码源自：https://github.com/chenbozhi/vue-ts-mall-demo

有修改部分注释和细节....

## 运行

node版本:v14.17.0

```bash
git clone https://github.com/chenbozhi/vue-ts-mall-demo.git

npm install

npm run serve
```

就可以进入系统

## 界面展示

输入http://localhost:8081/, 如果是首次进入, 会跳转到登录页面。

![image-20220625153342646](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com/cbz_book_images/image-20220625153342646.png)

**用户名是 admin  密码是 123456**

登录成功后会进入系统主页面

系统主页面

商品列表

![image-20220625153447006](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com/cbz_book_images/image-20220625153447006.png)

用户列表页面

![image-20220625153517445](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com/cbz_book_images/image-20220625153517445.png)

角色列表

![image-20220625153535530](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com/cbz_book_images/image-20220625153535530.png)

## 编写流程(可代替看视频)

- 检测到any类型的警告，可以在package.js的rule配置警告忽略/过滤掉，则不会显示警告.

### 项目搭建

### 登录页面

### 登录逻辑

在登录成功之后, 会跳转到首页

![image-20220622162821112](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com/cbz_book_images/image-20220622162821112.png)

同时, 可以查看本地localStorage, 保存了token信息

![image-20220622162531334](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com/cbz_book_images/image-20220622162531334.png)

## 关于fastmock

由于这个项目本身只是一个前端项目,是没有后端数据的, 但是前端又想要展示数据,于是用fastmock这个网站提供的模拟接口的功能

### 简单使用

首先进入fastmock的官网

fastmock网站地址: https://www.fastmock.site

点击导航栏 的**立即使用**

![image-20220812110820696](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com//cbz_book_imagesimage-20220812110820696.png)

如果没有账号,要先创建一个账号, 我是用github登录的



![image-20220812110921841](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com//cbz_book_imagesimage-20220812110921841.png)

登录后, 可以创建项目, 也有使用文档, 文档是最好的学习方式

![image-20220812111155715](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com//cbz_book_imagesimage-20220812111155715.png)


进入创建的项目


![image-20220812111321487](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com//cbz_book_imagesimage-20220812111321487.png)



关于上面接口根地址, 它将作为请求的根路径

可以看到在这个项目代码`request/index.ts`文件中,关于axios的配置(下面是up主配的, 上面是我自己的)

![image-20220812111800684](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com//cbz_book_imagesimage-20220812111800684.png)


新建一个接口


![image-20220812111442866](https://firstbucket-1300448090.cos.ap-chengdu.myqcloud.com//cbz_book_imagesimage-20220812111442866.png)


可以看到, 数据是写在一个`json`字符串中, 它是写死的, 前端请求的数据, 就是这里设置的


目前我也没有使用除了get以外的请求测试

fastmock经常不稳定，我已经改使用easymock

~~原视频项目中的up主定义的mock接口依然可以用~~


> 更新于2022-08-12 11:16

## 关于easymock

最近不少小伙伴说登录一直登不进去，有结果无法页面跳转等问题，我排查了一下，的确是有些问题，一方面有墙的原因，还有代码的原因，已经过了比较久了，弄了半天，现在我这里不再使用fastmock，毕竟国外的不稳定，改为使用easymock，本人调试无问题，可以使用

已经拉取过代码的小伙伴再pull一下即可

> 更新日期：2022-10-25

## 最后

花了两天时间来敲这个项目demo, 收获还是很多的, 关于vue3的新特性,与vue2不同的用法, 还有使用ts

本来想顺着把这个页面完善好, 但是比较懒, 这个项目代码基本上是从0跟着一步一步敲出来的, 但是视频中有些命名和少部分代码我觉得可以优化,所以我就自己改了,绝大部分的内容和视频是相同的。