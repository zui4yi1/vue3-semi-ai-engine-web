export const contactRule = [
  {
    required: true,
    message: '该项必填',
    trigger: 'blur',
  },
  {
    validator: (_: any, arr = [], callback: any) => {
      for (let i = 0; i < arr.length; i++) {
        const { name = '', phone = '' } = arr[i];
        if (!name || !phone) {
          callback(new Error('请输入姓名和手机号'));
          break;
        }
        // 验证是否11位的手机号
        if (!/^1[3456789]\d{9}$/.test(phone)) {
          callback(new Error('请输入正确的手机号'));
          break;
        }
      }
      callback();
    },
    trigger: 'blur',
  },
];
