import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "https://tse4-mm.cn.bing.net/th/id/OIP-C.VhUch7xKlHoI3kW5Kg-H9gAAAA?w=196&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201908/16/105921zzf1w967jjf081fe.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "https://tse3-mm.cn.bing.net/th/id/OIP-C.xrThLfNe4ScB7ly1rH5CKgHaE8?w=196&h=131&c=7&r=0&o=5&dpr=2&pid=1.7",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
