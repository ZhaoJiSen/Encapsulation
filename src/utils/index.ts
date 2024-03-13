/**
 * Description 将驼峰转换为 - 连接
 * @date 2024/3/13 - 16:05:09
 *
 * @param {string} value
 */
const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase();
};

export { toLine };
