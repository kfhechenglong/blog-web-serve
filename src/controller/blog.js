import {fetchData} from './../db/mysql.js'
export const getList = async (author, keyword) => {
  const res = await fetchData();
  return res
};
export const updateBlog = (pageNum, body = {}) => {
  console.log('pageNum', pageNum)
  console.log('body', body)
  return true
}