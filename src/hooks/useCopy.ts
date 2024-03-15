//  复制文本：借助 input 属性
/*
    1. 创建一个 input 并把传递进来的 iconName 保存到 input.value 中，然后追加到 body 中
    2. 执行选中输入框的操作
    3. 使用 document.execCommand('Copy') 执行复制操作
    4. 删除创建的输入框
    注意： execCommand 方法在现代 web 开发中已经不再推荐使用，它被新的 navigator.clipboard 所替换
          可以使用 navigator.clipboard.writeText() 来复制文本 .readText 粘贴文本
 */

import { ElMessage } from 'element-plus';

const useCopy = async (iconName: string) => {
  let input = document.createElement('input');
  input.value = `<${iconName} />`;

  document.body.appendChild(input);
  input.select();

  await navigator.clipboard.writeText(input.value);
  document.body.removeChild(input);

  ElMessage.success('复制成功！');
};

export default useCopy;
