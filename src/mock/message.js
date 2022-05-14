import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.5HUlIB2Yv1KOQHmwRjkLwAHaHa?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.NAbEWiLGI7HlIEDWixP4zAAAAA?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.5vLehASN50lMlJc5VjUfGQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.cqDsejVFnMsVy7DQjyFbmwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://tse4-mm.cn.bing.net/th/id/OIP-C.5HUlIB2Yv1KOQHmwRjkLwAHaHa?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.NAbEWiLGI7HlIEDWixP4zAAAAA?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
            "https://tse4-mm.cn.bing.net/th/id/OIP-C.5vLehASN50lMlJc5VjUfGQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.cqDsejVFnMsVy7DQjyFbmwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
          ],
        },
      ],
    },
  });
});
