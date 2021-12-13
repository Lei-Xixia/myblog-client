export default function(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  // 将月份和日期保持为两位数的格式
  // 先将其变成一个字符串；padStart保证字符串的长度为2，不足为2的时候则在开始的位置给他填充0
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  // 将时间戳转化成合适的日期格式 (此时为年-月-日格式)
  let str = `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hours = date
      .getHours()
      .toString()
      .padStart(2, "0");
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const seconds = date
      .getSeconds()
      .toString()
      .padStart(2, "0");
    str += ` ${hours}:${minutes}:${seconds}`;
  }
  return str;
}
