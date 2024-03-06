import { handleBlogRoute } from './../src/routes/blog.js';
import querystring from 'querystring';

export const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if(req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData){
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

export const serverHandler = (req, res) => {
  // 设置响应返回的数据类型
  res.setHeader('Content-type', 'applocation/json');
  const url = req.url;
  req.path = url.split('?')[0];
  req.query = querystring.parse(url.split('?')[1]);
  getPostData(req).then((postData) => {
    req.body = postData
    console.log('blogData',postData);
    const blogData = handleBlogRoute(req, res);
    if (blogData) {
      res.end(JSON.stringify(blogData));
      return;
    }
    //如果不是上面的路由，就会返回下面的结果
    res.writeHead(404, { 'Content-Type': 'text/plain' }); //无格式正文
    res.write('404 Not Found');
    res.end(); //终止响应
    
  })
};
