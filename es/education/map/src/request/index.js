import u from "./index2.js";
const d = (s, n) => new Promise((c, e) => {
  u.get(s, n).then((t) => {
    t.status >= 200 && t.status < 300 ? c({
      status: t.status,
      data: t.data
    }) : e({
      status: t.status,
      message: "请求失败",
      response: t
    });
  }).catch((t) => {
    var a;
    const o = {
      status: ((a = t.response) == null ? void 0 : a.status) || 500,
      message: t.message || "网络错误",
      response: t.response
    };
    e(o);
  });
}), i = d("jysl/oauth/token", {
  client_id: void 0,
  client_secret: void 0
}).then((s) => {
  s.status === 200 && s.data.access_token ? localStorage.setItem("access_token", s.data.access_token) : console.log("获取token失败, 请检查密钥信息");
});
export {
  d as getResponse,
  i as getToken
};
