export const getList = (author, keyword) => {
  return [
    {
      id: 1,
      name: '张三',
      age: 18
    },
    {
      id: 2,
      name: '张三2',
      age: 19
    },
    {
      id: 3,
      name: '张三3',
      age: 20
    }
  ];
};
export const updateBlog = (pageNum, body = {}) => {
  console.log('pageNum', pageNum)
  console.log('body', body)
  return true
}