// 创建基类
class BaseModel {
  constructor(data, messgae) {
    if (typeof data === 'string') {
      this.messgae = data;
      data = null;
      messgae = null;
    }
    if (data) {
      this.data = data;
    }
    if (messgae) {
      this.messgae = messgae;
    }
  }
}
// 根据基类，分别创建成功和失败的返回模型
export class SuccessModel extends BaseModel {
  constructor(data, messgae) {
    super(data, messgae);
    this.code = 0;
  }
}
export class ErrorModel extends BaseModel {
  constructor(data, messgae) {
    super(data, messgae);
    this.code = -1;
  }
}
