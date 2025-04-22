import h from "../../node_modules/.pnpm/axios@1.8.4/node_modules/axios/lib/axios.js";
const l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
function f(c = {}) {
  let u = null;
  const s = h.create({
    baseURL: c.baseURL,
    timeout: 3e4,
    ...c
  });
  s.interceptors.request.use(
    (t) => (u && t.withToken !== !1 && (t.headers = t.headers || {}, t.headers.Authorization = `Bearer ${u}`), t),
    (t) => Promise.reject(t)
  ), s.interceptors.response.use(
    (t) => t,
    async (t) => {
      const e = t.config;
      if (h.isCancel(t))
        return Promise.reject(t);
      if (e.retry && e.retry > 0) {
        e.retry--;
        const n = Math.pow(2, e.retry || 0) * 1e3;
        return await new Promise((o) => setTimeout(o, n)), s(e);
      }
      return Promise.reject(t);
    }
  );
  async function a(t) {
    var p;
    const e = {
      method: "get",
      withToken: !0,
      ...c,
      ...t,
      headers: {
        ...c.headers,
        ...t.headers
      }
    };
    ((p = e.method) == null ? void 0 : p.toLowerCase()) === "get" && (e.params = {
      ...e.params,
      ...e.data || {}
      // 将data合并到params
    }, delete e.data);
    const n = JSON.stringify({
      url: e.url,
      method: e.method,
      params: e.params,
      data: e.data
    });
    if (e.cache) {
      const r = l.get(n), i = Date.now();
      if (r && (e.cache === !0 || r.expire > i))
        return r.data;
    }
    const o = h.CancelToken.source();
    e.cancelToken = o.token, d.set(o, !0);
    try {
      const r = await s.request(e), i = {
        data: r.data,
        status: r.status,
        statusText: r.statusText,
        headers: r.headers,
        config: e
      };
      if (e.cache) {
        const m = typeof e.cache == "number" ? Date.now() + e.cache : Number.MAX_SAFE_INTEGER;
        l.set(n, { expire: m, data: i });
      }
      return i;
    } finally {
      d.delete(o);
    }
  }
  return a.get = function(t, e, n) {
    return a({ ...n, url: t, data: e, method: "get", params: { ...n == null ? void 0 : n.data, ...e } });
  }, a.post = function(t, e, n) {
    return a({ ...n, url: t, data: e, method: "post" });
  }, a.put = function(t, e, n) {
    return a({ ...n, url: t, data: e, method: "put" });
  }, a.delete = function(t, e) {
    return a({ ...e, url: t, method: "delete" });
  }, a.cancelRequest = function(t) {
    d.has(t) && (t.cancel("Request canceled by user"), d.delete(t));
  }, a.setToken = function(t) {
    u = t;
  }, a.clearToken = function() {
    u = null;
  }, a.axiosInstance = s, a;
}
const w = f({
  baseURL: "",
  headers: {
    "Content-Type": "application/json"
  }
});
export {
  f as createRequest,
  w as default
};
