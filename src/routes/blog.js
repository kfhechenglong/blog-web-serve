import { SuccessModel } from './../model/responseModel.js';
import { getList,updateBlog } from './../controller/blog.js';
// 处理博客相关的路由，定义处理路由的逻辑
export const handleBlogRoute = (req, res) => {
  const method = req.method;
  if (method === 'POST' && req.path === '/manage-service/nav/admin/getList') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }
  const pageNum = req.query.pageNum
  const blogData = req.body;
  if (method === 'POST' && req.path === '/manage-service/nav/getCate') {
    const updateBlogData = updateBlog(pageNum,blogData)
    if (updateBlogData) {
      return new SuccessModel('更新成功！')
    }
  }
};
