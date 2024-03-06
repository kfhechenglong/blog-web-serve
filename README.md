# blog-web-serve

#### 服务创建
创建bin文件夹，也就是程序运行最开始访问的文件夹，并再该文件下创建`www.js`文件，创建服务器

#### nodemon
``` bash
npm install nodemon -D

```
#### 修改启动命令
启动前，将`package.json`中的`main`属性修改成`bin/www.js`设置启动入口
```json
"scripts": {
    "serve": "nodemon bin/www.js"
},
```

#### 启动服务

```bash
npm run serve
```
