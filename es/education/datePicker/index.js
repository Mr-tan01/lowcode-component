// css 
 import './css/index.css';
 // # end css mapping css/index.css 

var Vd = Object.defineProperty;
var jd = (e, r, t) => r in e ? Vd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ee = (e, r, t) => jd(e, typeof r != "symbol" ? r + "" : r, t);
import { ref as F, readonly as fo, watch as mt, computed as P, getCurrentInstance as Do, onMounted as ar, onBeforeUnmount as fr, reactive as Ud, onBeforeMount as _o, createTextVNode as Yd, Fragment as To, Comment as wl, defineComponent as Ce, provide as Nr, inject as Qe, withDirectives as Ln, toRef as Ge, h as c, Teleport as Gd, nextTick as br, renderSlot as Pl, onActivated as Dl, onDeactivated as _l, mergeProps as $a, isVNode as qd, shallowRef as Kd, watchEffect as At, Transition as $r, TransitionGroup as Xd, markRaw as ui, openBlock as Tl, createBlock as Qd, unref as On, withCtx as fa, createElementBlock as Jd, createVNode as fi, createElementVNode as Zd } from "vue";
function ge(e) {
  const r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || r === "[object Number]" || typeof e == "string" || r === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ve(e, r) {
  return e instanceof Date ? new e.constructor(r) : new Date(r);
}
function Jr(e, r) {
  const t = ge(e);
  return isNaN(r) ? Ve(e, NaN) : (r && t.setDate(t.getDate() + r), t);
}
function vt(e, r) {
  const t = ge(e);
  if (isNaN(r)) return Ve(e, NaN);
  if (!r)
    return t;
  const n = t.getDate(), o = Ve(e, t.getTime());
  o.setMonth(t.getMonth() + r + 1, 0);
  const a = o.getDate();
  return n >= a ? o : (t.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    n
  ), t);
}
const Ol = 6048e5, ec = 864e5, tc = 6e4, rc = 36e5, nc = 1e3;
let oc = {};
function mn() {
  return oc;
}
function Qt(e, r) {
  var l, s, d, u;
  const t = mn(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((s = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ?? t.weekStartsOn ?? ((u = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function nn(e) {
  return Qt(e, { weekStartsOn: 1 });
}
function Ml(e) {
  const r = ge(e), t = r.getFullYear(), n = Ve(e, 0);
  n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = nn(n), a = Ve(e, 0);
  a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0);
  const i = nn(a);
  return r.getTime() >= o.getTime() ? t + 1 : r.getTime() >= i.getTime() ? t : t - 1;
}
function on(e) {
  const r = ge(e);
  return r.setHours(0, 0, 0, 0), r;
}
function mo(e) {
  const r = ge(e), t = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return t.setUTCFullYear(r.getFullYear()), +e - +t;
}
function ac(e, r) {
  const t = on(e), n = on(r), o = +t - mo(t), a = +n - mo(n);
  return Math.round((o - a) / ec);
}
function ic(e) {
  const r = Ml(e), t = Ve(e, 0);
  return t.setFullYear(r, 0, 4), t.setHours(0, 0, 0, 0), nn(t);
}
function lc(e, r) {
  const t = r * 3;
  return vt(e, t);
}
function ma(e, r) {
  return vt(e, r * 12);
}
function sc(e, r) {
  const t = on(e), n = on(r);
  return +t == +n;
}
function dc(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Yt(e) {
  if (!dc(e) && typeof e != "number")
    return !1;
  const r = ge(e);
  return !isNaN(Number(r));
}
function cc(e) {
  const r = ge(e);
  return Math.trunc(r.getMonth() / 3) + 1;
}
function uc(e) {
  const r = ge(e);
  return r.setSeconds(0, 0), r;
}
function $n(e) {
  const r = ge(e), t = r.getMonth(), n = t - t % 3;
  return r.setMonth(n, 1), r.setHours(0, 0, 0, 0), r;
}
function dr(e) {
  const r = ge(e);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function Vn(e) {
  const r = ge(e), t = Ve(e, 0);
  return t.setFullYear(r.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const fc = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, mc = (e, r, t) => {
  let n;
  const o = fc[e];
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function en(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const hc = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pc = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, gc = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vc = {
  date: en({
    formats: hc,
    defaultWidth: "full"
  }),
  time: en({
    formats: pc,
    defaultWidth: "full"
  }),
  dateTime: en({
    formats: gc,
    defaultWidth: "full"
  })
}, Cc = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, bc = (e, r, t, n) => Cc[e];
function tr(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : i;
      o = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      o = e.values[l] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return o[a];
  };
}
const xc = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Sc = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, yc = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, wc = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Pc = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Dc = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, _c = (e, r) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Tc = {
  ordinalNumber: _c,
  era: tr({
    values: xc,
    defaultWidth: "wide"
  }),
  quarter: tr({
    values: Sc,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tr({
    values: yc,
    defaultWidth: "wide"
  }),
  day: tr({
    values: wc,
    defaultWidth: "wide"
  }),
  dayPeriod: tr({
    values: Pc,
    defaultWidth: "wide",
    formattingValues: Dc,
    defaultFormattingWidth: "wide"
  })
};
function rr(e) {
  return (r, t = {}) => {
    const n = t.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(o);
    if (!a)
      return null;
    const i = a[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Mc(l, (f) => f.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Oc(l, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(s) : s, d = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(d)
    ) : d;
    const u = r.slice(i.length);
    return { value: d, rest: u };
  };
}
function Oc(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function Mc(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function Rl(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const l = r.slice(o.length);
    return { value: i, rest: l };
  };
}
const Rc = /^(\d+)(th|st|nd|rd)?/i, Ec = /\d+/i, Ic = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kc = {
  any: [/^b/i, /^(a|c)/i]
}, Fc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ac = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $c = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zc = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Hc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Nc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Bc = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Lc = {
  ordinalNumber: Rl({
    matchPattern: Rc,
    parsePattern: Ec,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: rr({
    matchPatterns: Ic,
    defaultMatchWidth: "wide",
    parsePatterns: kc,
    defaultParseWidth: "any"
  }),
  quarter: rr({
    matchPatterns: Fc,
    defaultMatchWidth: "wide",
    parsePatterns: Ac,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: rr({
    matchPatterns: $c,
    defaultMatchWidth: "wide",
    parsePatterns: zc,
    defaultParseWidth: "any"
  }),
  day: rr({
    matchPatterns: Hc,
    defaultMatchWidth: "wide",
    parsePatterns: Wc,
    defaultParseWidth: "any"
  }),
  dayPeriod: rr({
    matchPatterns: Nc,
    defaultMatchWidth: "any",
    parsePatterns: Bc,
    defaultParseWidth: "any"
  })
}, za = {
  code: "en-US",
  formatDistance: mc,
  formatLong: vc,
  formatRelative: bc,
  localize: Tc,
  match: Lc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Vc(e) {
  const r = ge(e);
  return ac(r, Vn(r)) + 1;
}
function El(e) {
  const r = ge(e), t = +nn(r) - +ic(r);
  return Math.round(t / Ol) + 1;
}
function Ha(e, r) {
  var u, f, m, g;
  const t = ge(e), n = t.getFullYear(), o = mn(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((f = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = Ve(e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const l = Qt(i, r), s = Ve(e, 0);
  s.setFullYear(n, 0, a), s.setHours(0, 0, 0, 0);
  const d = Qt(s, r);
  return t.getTime() >= l.getTime() ? n + 1 : t.getTime() >= d.getTime() ? n : n - 1;
}
function jc(e, r) {
  var l, s, d, u;
  const t = mn(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((s = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : s.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Ha(e, r), a = Ve(e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), Qt(a, r);
}
function Il(e, r) {
  const t = ge(e), n = +Qt(t, r) - +jc(t, r);
  return Math.round(n / Ol) + 1;
}
function We(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const hr = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return We(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : We(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return We(e.getDate(), r.length);
  },
  // AM or PM
  a(e, r) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, r) {
    return We(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return We(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return We(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return We(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return We(o, r.length);
  }
}, Gr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, mi = {
  // Era
  G: function(e, r, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, r, t) {
    if (r === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return t.ordinalNumber(o, { unit: "year" });
    }
    return hr.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const o = Ha(e, n), a = o > 0 ? o : 1 - o;
    if (r === "YY") {
      const i = a % 100;
      return We(i, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : We(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = Ml(e);
    return We(t, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, r) {
    const t = e.getFullYear();
    return We(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return We(n, 2);
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(n);
      case "qq":
        return We(n, 2);
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return hr.M(e, r);
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "L":
        return String(n + 1);
      case "LL":
        return We(n + 1, 2);
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, r, t, n) {
    const o = Il(e, n);
    return r === "wo" ? t.ordinalNumber(o, { unit: "week" }) : We(o, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = El(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : We(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : hr.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = Vc(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : We(n, r.length);
  },
  // Day of week
  E: function(e, r, t) {
    const n = e.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, r, t, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(a);
      case "ee":
        return We(a, 2);
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
      case "eee":
        return t.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, r, t, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(a);
      case "cc":
        return We(a, r.length);
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return t.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, r, t) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (r) {
      case "i":
        return String(o);
      case "ii":
        return We(o, r.length);
      case "io":
        return t.ordinalNumber(o, { unit: "day" });
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, r, t) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, r, t) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = Gr.noon : n === 0 ? o = Gr.midnight : o = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, r, t) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = Gr.evening : n >= 12 ? o = Gr.afternoon : n >= 4 ? o = Gr.morning : o = Gr.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, r, t) {
    if (r === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return hr.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : hr.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : We(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : We(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : hr.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : hr.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return hr.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return pi(n);
      case "XXXX":
      case "XX":
        return Mr(n);
      case "XXXXX":
      case "XXX":
      default:
        return Mr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return pi(n);
      case "xxxx":
      case "xx":
        return Mr(n);
      case "xxxxx":
      case "xxx":
      default:
        return Mr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + hi(n, ":");
      case "OOOO":
      default:
        return "GMT" + Mr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + hi(n, ":");
      case "zzzz":
      default:
        return "GMT" + Mr(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(e.getTime() / 1e3);
    return We(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    const n = e.getTime();
    return We(n, r.length);
  }
};
function hi(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(o) : t + String(o) + r + We(a, 2);
}
function pi(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + We(Math.abs(e) / 60, 2) : Mr(e, r);
}
function Mr(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), o = We(Math.trunc(n / 60), 2), a = We(n % 60, 2);
  return t + o + r + a;
}
const gi = (e, r) => {
  switch (e) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, kl = (e, r) => {
  switch (e) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, Uc = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], o = t[2];
  if (!o)
    return gi(e, r);
  let a;
  switch (n) {
    case "P":
      a = r.dateTime({ width: "short" });
      break;
    case "PP":
      a = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = r.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", gi(n, r)).replace("{{time}}", kl(o, r));
}, ha = {
  p: kl,
  P: Uc
}, Yc = /^D+$/, Gc = /^Y+$/, qc = ["D", "DD", "YY", "YYYY"];
function Fl(e) {
  return Yc.test(e);
}
function Al(e) {
  return Gc.test(e);
}
function pa(e, r, t) {
  const n = Kc(e, r, t);
  if (console.warn(n), qc.includes(e)) throw new RangeError(n);
}
function Kc(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Xc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Jc = /^'([^]*?)'?$/, Zc = /''/g, eu = /[a-zA-Z]/;
function Ne(e, r, t) {
  var u, f, m, g, h, C, y, b;
  const n = mn(), o = (t == null ? void 0 : t.locale) ?? n.locale ?? za, a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((g = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((C = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : C.weekStartsOn) ?? n.weekStartsOn ?? ((b = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, l = ge(e);
  if (!Yt(l))
    throw new RangeError("Invalid time value");
  let s = r.match(Qc).map((_) => {
    const E = _[0];
    if (E === "p" || E === "P") {
      const O = ha[E];
      return O(_, o.formatLong);
    }
    return _;
  }).join("").match(Xc).map((_) => {
    if (_ === "''")
      return { isToken: !1, value: "'" };
    const E = _[0];
    if (E === "'")
      return { isToken: !1, value: tu(_) };
    if (mi[E])
      return { isToken: !0, value: _ };
    if (E.match(eu))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + E + "`"
      );
    return { isToken: !1, value: _ };
  });
  o.localize.preprocessor && (s = o.localize.preprocessor(l, s));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return s.map((_) => {
    if (!_.isToken) return _.value;
    const E = _.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Al(E) || !(t != null && t.useAdditionalDayOfYearTokens) && Fl(E)) && pa(E, r, String(e));
    const O = mi[E[0]];
    return O(l, E, o.localize, d);
  }).join("");
}
function tu(e) {
  const r = e.match(Jc);
  return r ? r[1].replace(Zc, "'") : e;
}
function Ut(e) {
  return ge(e).getDate();
}
function ru(e) {
  return ge(e).getDay();
}
function nu(e) {
  const r = ge(e), t = r.getFullYear(), n = r.getMonth(), o = Ve(e, 0);
  return o.setFullYear(t, n + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function $l() {
  return Object.assign({}, mn());
}
function vr(e) {
  return ge(e).getHours();
}
function ou(e) {
  let t = ge(e).getDay();
  return t === 0 && (t = 7), t;
}
function au(e) {
  return ge(e).getMilliseconds();
}
function ho(e) {
  return ge(e).getMinutes();
}
function je(e) {
  return ge(e).getMonth();
}
function po(e) {
  return ge(e).getSeconds();
}
function j(e) {
  return ge(e).getTime();
}
function Xe(e) {
  return ge(e).getFullYear();
}
function iu(e, r) {
  const t = r instanceof Date ? Ve(r, 0) : new r(0);
  return t.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), t.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), t;
}
const lu = 10;
class zl {
  constructor() {
    ee(this, "subPriority", 0);
  }
  validate(r, t) {
    return !0;
  }
}
class su extends zl {
  constructor(r, t, n, o, a) {
    super(), this.value = r, this.validateValue = t, this.setValue = n, this.priority = o, a && (this.subPriority = a);
  }
  validate(r, t) {
    return this.validateValue(r, this.value, t);
  }
  set(r, t, n) {
    return this.setValue(r, t, this.value, n);
  }
}
class du extends zl {
  constructor() {
    super(...arguments);
    ee(this, "priority", lu);
    ee(this, "subPriority", -1);
  }
  set(t, n) {
    return n.timestampIsSet ? t : Ve(t, iu(t, Date));
  }
}
class $e {
  run(r, t, n, o) {
    const a = this.parse(r, t, n, o);
    return a ? {
      setter: new su(
        a.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a.rest
    } : null;
  }
  validate(r, t, n) {
    return !0;
  }
}
class cu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 140);
    ee(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(t, { width: "abbreviated" }) || o.era(t, { width: "narrow" });
      case "GGGGG":
        return o.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return o.era(t, { width: "wide" }) || o.era(t, { width: "abbreviated" }) || o.era(t, { width: "narrow" });
    }
  }
  set(t, n, o) {
    return n.era = o, t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const dt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, nr = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ct(e, r) {
  return e && {
    value: r(e.value),
    rest: e.rest
  };
}
function Ze(e, r) {
  const t = r.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: r.slice(t[0].length)
  } : null;
}
function or(e, r) {
  const t = r.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: r.slice(1)
    };
  const n = t[1] === "+" ? 1 : -1, o = t[2] ? parseInt(t[2], 10) : 0, a = t[3] ? parseInt(t[3], 10) : 0, i = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: n * (o * rc + a * tc + i * nc),
    rest: r.slice(t[0].length)
  };
}
function Hl(e) {
  return Ze(dt.anyDigitsSigned, e);
}
function rt(e, r) {
  switch (e) {
    case 1:
      return Ze(dt.singleDigit, r);
    case 2:
      return Ze(dt.twoDigits, r);
    case 3:
      return Ze(dt.threeDigits, r);
    case 4:
      return Ze(dt.fourDigits, r);
    default:
      return Ze(new RegExp("^\\d{1," + e + "}"), r);
  }
}
function go(e, r) {
  switch (e) {
    case 1:
      return Ze(dt.singleDigitSigned, r);
    case 2:
      return Ze(dt.twoDigitsSigned, r);
    case 3:
      return Ze(dt.threeDigitsSigned, r);
    case 4:
      return Ze(dt.fourDigitsSigned, r);
    default:
      return Ze(new RegExp("^-?\\d{1," + e + "}"), r);
  }
}
function Wa(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Wl(e, r) {
  const t = r > 0, n = t ? r : 1 - r;
  let o;
  if (n <= 50)
    o = e || 100;
  else {
    const a = n + 50, i = Math.trunc(a / 100) * 100, l = e >= a % 100;
    o = e + i - (l ? 100 : 0);
  }
  return t ? o : 1 - o;
}
function Nl(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class uu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, n, o) {
    const a = (i) => ({
      year: i,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return ct(rt(4, t), a);
      case "yo":
        return ct(
          o.ordinalNumber(t, {
            unit: "year"
          }),
          a
        );
      default:
        return ct(rt(n.length, t), a);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, o) {
    const a = t.getFullYear();
    if (o.isTwoDigitYear) {
      const l = Wl(
        o.year,
        a
      );
      return t.setFullYear(l, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in n) || n.era === 1 ? o.year : 1 - o.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class fu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    const a = (i) => ({
      year: i,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return ct(rt(4, t), a);
      case "Yo":
        return ct(
          o.ordinalNumber(t, {
            unit: "year"
          }),
          a
        );
      default:
        return ct(rt(n.length, t), a);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, o, a) {
    const i = Ha(t, a);
    if (o.isTwoDigitYear) {
      const s = Wl(
        o.year,
        i
      );
      return t.setFullYear(
        s,
        0,
        a.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Qt(t, a);
    }
    const l = !("era" in n) || n.era === 1 ? o.year : 1 - o.year;
    return t.setFullYear(l, 0, a.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Qt(t, a);
  }
}
class mu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n) {
    return go(n === "R" ? 4 : n.length, t);
  }
  set(t, n, o) {
    const a = Ve(t, 0);
    return a.setFullYear(o, 0, 4), a.setHours(0, 0, 0, 0), nn(a);
  }
}
class hu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, n) {
    return go(n === "u" ? 4 : n.length, t);
  }
  set(t, n, o) {
    return t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class pu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 120);
    ee(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    switch (n) {
      case "Q":
      case "QQ":
        return rt(n.length, t);
      case "Qo":
        return o.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return o.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || o.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, o) {
    return t.setMonth((o - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class gu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 120);
    ee(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    switch (n) {
      case "q":
      case "qq":
        return rt(n.length, t);
      case "qo":
        return o.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return o.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || o.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, o) {
    return t.setMonth((o - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class vu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    ee(this, "priority", 110);
  }
  parse(t, n, o) {
    const a = (i) => i - 1;
    switch (n) {
      case "M":
        return ct(
          Ze(dt.month, t),
          a
        );
      case "MM":
        return ct(rt(2, t), a);
      case "Mo":
        return ct(
          o.ordinalNumber(t, {
            unit: "month"
          }),
          a
        );
      case "MMM":
        return o.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return o.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(t, { width: "wide", context: "formatting" }) || o.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, o) {
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Cu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 110);
    ee(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    const a = (i) => i - 1;
    switch (n) {
      case "L":
        return ct(
          Ze(dt.month, t),
          a
        );
      case "LL":
        return ct(rt(2, t), a);
      case "Lo":
        return ct(
          o.ordinalNumber(t, {
            unit: "month"
          }),
          a
        );
      case "LLL":
        return o.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return o.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(t, { width: "wide", context: "standalone" }) || o.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, o) {
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function bu(e, r, t) {
  const n = ge(e), o = Il(n, t) - r;
  return n.setDate(n.getDate() - o * 7), n;
}
class xu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 100);
    ee(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    switch (n) {
      case "w":
        return Ze(dt.week, t);
      case "wo":
        return o.ordinalNumber(t, { unit: "week" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, o, a) {
    return Qt(bu(t, o, a), a);
  }
}
function Su(e, r) {
  const t = ge(e), n = El(t) - r;
  return t.setDate(t.getDate() - n * 7), t;
}
class yu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 100);
    ee(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    switch (n) {
      case "I":
        return Ze(dt.week, t);
      case "Io":
        return o.ordinalNumber(t, { unit: "week" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, o) {
    return nn(Su(t, o));
  }
}
const wu = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Pu = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Du extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "subPriority", 1);
    ee(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    switch (n) {
      case "d":
        return Ze(dt.date, t);
      case "do":
        return o.ordinalNumber(t, { unit: "date" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    const o = t.getFullYear(), a = Nl(o), i = t.getMonth();
    return a ? n >= 1 && n <= Pu[i] : n >= 1 && n <= wu[i];
  }
  set(t, n, o) {
    return t.setDate(o), t.setHours(0, 0, 0, 0), t;
  }
}
class _u extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "subpriority", 1);
    ee(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    switch (n) {
      case "D":
      case "DD":
        return Ze(dt.dayOfYear, t);
      case "Do":
        return o.ordinalNumber(t, { unit: "date" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    const o = t.getFullYear();
    return Nl(o) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(t, n, o) {
    return t.setMonth(0, o), t.setHours(0, 0, 0, 0), t;
  }
}
function Na(e, r, t) {
  var f, m, g, h;
  const n = mn(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.weekStartsOn) ?? n.weekStartsOn ?? ((h = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = ge(e), i = a.getDay(), s = (r % 7 + 7) % 7, d = 7 - o, u = r < 0 || r > 6 ? r - (i + d) % 7 : (s + d) % 7 - (i + d) % 7;
  return Jr(a, u);
}
class Tu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(t, { width: "short", context: "formatting" }) || o.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return o.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(t, { width: "short", context: "formatting" }) || o.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return o.day(t, { width: "wide", context: "formatting" }) || o.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(t, { width: "short", context: "formatting" }) || o.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, o, a) {
    return t = Na(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
class Ou extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o, a) {
    const i = (l) => {
      const s = Math.floor((l - 1) / 7) * 7;
      return (l + a.weekStartsOn + 6) % 7 + s;
    };
    switch (n) {
      case "e":
      case "ee":
        return ct(rt(n.length, t), i);
      case "eo":
        return ct(
          o.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return o.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(t, { width: "short", context: "formatting" }) || o.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return o.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return o.day(t, { width: "short", context: "formatting" }) || o.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return o.day(t, { width: "wide", context: "formatting" }) || o.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(t, { width: "short", context: "formatting" }) || o.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, o, a) {
    return t = Na(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
class Mu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, n, o, a) {
    const i = (l) => {
      const s = Math.floor((l - 1) / 7) * 7;
      return (l + a.weekStartsOn + 6) % 7 + s;
    };
    switch (n) {
      case "c":
      case "cc":
        return ct(rt(n.length, t), i);
      case "co":
        return ct(
          o.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return o.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(t, { width: "short", context: "standalone" }) || o.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return o.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(t, { width: "short", context: "standalone" }) || o.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return o.day(t, { width: "wide", context: "standalone" }) || o.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(t, { width: "short", context: "standalone" }) || o.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, o, a) {
    return t = Na(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
function Ru(e, r) {
  const t = ge(e), n = ou(t), o = r - n;
  return Jr(t, o);
}
class Eu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, o) {
    const a = (i) => i === 0 ? 7 : i;
    switch (n) {
      case "i":
      case "ii":
        return rt(n.length, t);
      case "io":
        return o.ordinalNumber(t, { unit: "day" });
      case "iii":
        return ct(
          o.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(t, {
            width: "short",
            context: "formatting"
          }) || o.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiii":
        return ct(
          o.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return ct(
          o.day(t, {
            width: "short",
            context: "formatting"
          }) || o.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiii":
      default:
        return ct(
          o.day(t, {
            width: "wide",
            context: "formatting"
          }) || o.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(t, {
            width: "short",
            context: "formatting"
          }) || o.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 7;
  }
  set(t, n, o) {
    return t = Ru(t, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Iu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 80);
    ee(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return o.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, o) {
    return t.setHours(Wa(o), 0, 0, 0), t;
  }
}
class ku extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 80);
    ee(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return o.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, o) {
    return t.setHours(Wa(o), 0, 0, 0), t;
  }
}
class Fu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 80);
    ee(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, o) {
    return t.setHours(Wa(o), 0, 0, 0), t;
  }
}
class Au extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "h":
        return Ze(dt.hour12h, t);
      case "ho":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 12;
  }
  set(t, n, o) {
    const a = t.getHours() >= 12;
    return a && o < 12 ? t.setHours(o + 12, 0, 0, 0) : !a && o === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(o, 0, 0, 0), t;
  }
}
class $u extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "H":
        return Ze(dt.hour23h, t);
      case "Ho":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 23;
  }
  set(t, n, o) {
    return t.setHours(o, 0, 0, 0), t;
  }
}
class zu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "K":
        return Ze(dt.hour11h, t);
      case "Ko":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, o) {
    return t.getHours() >= 12 && o < 12 ? t.setHours(o + 12, 0, 0, 0) : t.setHours(o, 0, 0, 0), t;
  }
}
class Hu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "k":
        return Ze(dt.hour24h, t);
      case "ko":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 24;
  }
  set(t, n, o) {
    const a = o <= 24 ? o % 24 : o;
    return t.setHours(a, 0, 0, 0), t;
  }
}
class Wu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 60);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "m":
        return Ze(dt.minute, t);
      case "mo":
        return o.ordinalNumber(t, { unit: "minute" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, o) {
    return t.setMinutes(o, 0, 0), t;
  }
}
class Nu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 50);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, n, o) {
    switch (n) {
      case "s":
        return Ze(dt.second, t);
      case "so":
        return o.ordinalNumber(t, { unit: "second" });
      default:
        return rt(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, o) {
    return t.setSeconds(o, 0), t;
  }
}
class Bu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 30);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, n) {
    const o = (a) => Math.trunc(a * Math.pow(10, -n.length + 3));
    return ct(rt(n.length, t), o);
  }
  set(t, n, o) {
    return t.setMilliseconds(o), t;
  }
}
class Lu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 10);
    ee(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, n) {
    switch (n) {
      case "X":
        return or(
          nr.basicOptionalMinutes,
          t
        );
      case "XX":
        return or(nr.basic, t);
      case "XXXX":
        return or(
          nr.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return or(
          nr.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return or(nr.extended, t);
    }
  }
  set(t, n, o) {
    return n.timestampIsSet ? t : Ve(
      t,
      t.getTime() - mo(t) - o
    );
  }
}
class Vu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 10);
    ee(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, n) {
    switch (n) {
      case "x":
        return or(
          nr.basicOptionalMinutes,
          t
        );
      case "xx":
        return or(nr.basic, t);
      case "xxxx":
        return or(
          nr.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return or(
          nr.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return or(nr.extended, t);
    }
  }
  set(t, n, o) {
    return n.timestampIsSet ? t : Ve(
      t,
      t.getTime() - mo(t) - o
    );
  }
}
class ju extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 40);
    ee(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Hl(t);
  }
  set(t, n, o) {
    return [Ve(t, o * 1e3), { timestampIsSet: !0 }];
  }
}
class Uu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 20);
    ee(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Hl(t);
  }
  set(t, n, o) {
    return [Ve(t, o), { timestampIsSet: !0 }];
  }
}
const Yu = {
  G: new cu(),
  y: new uu(),
  Y: new fu(),
  R: new mu(),
  u: new hu(),
  Q: new pu(),
  q: new gu(),
  M: new vu(),
  L: new Cu(),
  w: new xu(),
  I: new yu(),
  d: new Du(),
  D: new _u(),
  E: new Tu(),
  e: new Ou(),
  c: new Mu(),
  i: new Eu(),
  a: new Iu(),
  b: new ku(),
  B: new Fu(),
  h: new Au(),
  H: new $u(),
  K: new zu(),
  k: new Hu(),
  m: new Wu(),
  s: new Nu(),
  S: new Bu(),
  X: new Lu(),
  x: new Vu(),
  t: new ju(),
  T: new Uu()
}, Gu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ku = /^'([^]*?)'?$/, Xu = /''/g, Qu = /\S/, Ju = /[a-zA-Z]/;
function Zu(e, r, t, n) {
  var C, y, b, _, E, O, N, V;
  const o = $l(), a = (n == null ? void 0 : n.locale) ?? o.locale ?? za, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((y = (C = n == null ? void 0 : n.locale) == null ? void 0 : C.options) == null ? void 0 : y.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((_ = (b = o.locale) == null ? void 0 : b.options) == null ? void 0 : _.firstWeekContainsDate) ?? 1, l = (n == null ? void 0 : n.weekStartsOn) ?? ((O = (E = n == null ? void 0 : n.locale) == null ? void 0 : E.options) == null ? void 0 : O.weekStartsOn) ?? o.weekStartsOn ?? ((V = (N = o.locale) == null ? void 0 : N.options) == null ? void 0 : V.weekStartsOn) ?? 0;
  if (r === "")
    return e === "" ? ge(t) : Ve(t, NaN);
  const s = {
    firstWeekContainsDate: i,
    weekStartsOn: l,
    locale: a
  }, d = [new du()], u = r.match(qu).map((p) => {
    const T = p[0];
    if (T in ha) {
      const I = ha[T];
      return I(p, a.formatLong);
    }
    return p;
  }).join("").match(Gu), f = [];
  for (let p of u) {
    !(n != null && n.useAdditionalWeekYearTokens) && Al(p) && pa(p, r, e), !(n != null && n.useAdditionalDayOfYearTokens) && Fl(p) && pa(p, r, e);
    const T = p[0], I = Yu[T];
    if (I) {
      const { incompatibleTokens: U } = I;
      if (Array.isArray(U)) {
        const H = f.find(
          (S) => U.includes(S.token) || S.token === T
        );
        if (H)
          throw new RangeError(
            `The format string mustn't contain \`${H.fullToken}\` and \`${p}\` at the same time`
          );
      } else if (I.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${p}\` and any other token at the same time`
        );
      f.push({ token: T, fullToken: p });
      const Y = I.run(
        e,
        p,
        a.match,
        s
      );
      if (!Y)
        return Ve(t, NaN);
      d.push(Y.setter), e = Y.rest;
    } else {
      if (T.match(Ju))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + T + "`"
        );
      if (p === "''" ? p = "'" : T === "'" && (p = ef(p)), e.indexOf(p) === 0)
        e = e.slice(p.length);
      else
        return Ve(t, NaN);
    }
  }
  if (e.length > 0 && Qu.test(e))
    return Ve(t, NaN);
  const m = d.map((p) => p.priority).sort((p, T) => T - p).filter((p, T, I) => I.indexOf(p) === T).map(
    (p) => d.filter((T) => T.priority === p).sort((T, I) => I.subPriority - T.subPriority)
  ).map((p) => p[0]);
  let g = ge(t);
  if (isNaN(g.getTime()))
    return Ve(t, NaN);
  const h = {};
  for (const p of m) {
    if (!p.validate(g, s))
      return Ve(t, NaN);
    const T = p.set(g, h, s);
    Array.isArray(T) ? (g = T[0], Object.assign(h, T[1])) : g = T;
  }
  return Ve(t, g);
}
function ef(e) {
  return e.match(Ku)[1].replace(Xu, "'");
}
function tf(e) {
  const r = ge(e);
  return r.setMinutes(0, 0, 0), r;
}
function Bl(e, r, t) {
  const n = Qt(e, t), o = Qt(r, t);
  return +n == +o;
}
function jn(e, r) {
  const t = ge(e), n = ge(r);
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth();
}
function Ll(e, r) {
  const t = $n(e), n = $n(r);
  return +t == +n;
}
function Ba(e) {
  const r = ge(e);
  return r.setMilliseconds(0), r;
}
function Vl(e, r) {
  const t = ge(e), n = ge(r);
  return t.getFullYear() === n.getFullYear();
}
function La(e, r) {
  const t = ge(e), n = t.getFullYear(), o = t.getDate(), a = Ve(e, 0);
  a.setFullYear(n, r, 15), a.setHours(0, 0, 0, 0);
  const i = nu(a);
  return t.setMonth(r, Math.min(o, i)), t;
}
function Ct(e, r) {
  let t = ge(e);
  return isNaN(+t) ? Ve(e, NaN) : (r.year != null && t.setFullYear(r.year), r.month != null && (t = La(t, r.month)), r.date != null && t.setDate(r.date), r.hours != null && t.setHours(r.hours), r.minutes != null && t.setMinutes(r.minutes), r.seconds != null && t.setSeconds(r.seconds), r.milliseconds != null && t.setMilliseconds(r.milliseconds), t);
}
function Tr(e, r) {
  const t = ge(e);
  return t.setHours(r), t;
}
function Yo(e, r) {
  const t = ge(e);
  return t.setMinutes(r), t;
}
function rf(e, r) {
  const t = ge(e), n = Math.trunc(t.getMonth() / 3) + 1, o = r - n;
  return La(t, t.getMonth() + o * 3);
}
function Go(e, r) {
  const t = ge(e);
  return t.setSeconds(r), t;
}
function ga(e, r) {
  const t = ge(e);
  return isNaN(+t) ? Ve(e, NaN) : (t.setFullYear(r), t);
}
let vo = [];
const jl = /* @__PURE__ */ new WeakMap();
function nf() {
  vo.forEach((e) => e(...jl.get(e))), vo = [];
}
function Ul(e, ...r) {
  jl.set(e, r), !vo.includes(e) && vo.push(e) === 1 && requestAnimationFrame(nf);
}
function Yl(e, r) {
  let { target: t } = e;
  for (; t; ) {
    if (t.dataset && t.dataset[r] !== void 0)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Oo(e) {
  return e.composedPath()[0] || null;
}
function Co(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function _n(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Zr(e, r) {
  const t = e.trim().split(/\s+/g), n = {
    top: t[0]
  };
  switch (t.length) {
    case 1:
      n.right = t[0], n.bottom = t[0], n.left = t[0];
      break;
    case 2:
      n.right = t[1], n.left = t[1], n.bottom = t[0];
      break;
    case 3:
      n.right = t[1], n.bottom = t[2], n.left = t[1];
      break;
    case 4:
      n.right = t[1], n.bottom = t[2], n.left = t[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return n;
}
const vi = {
  black: "#000",
  silver: "#C0C0C0",
  gray: "#808080",
  white: "#FFF",
  maroon: "#800000",
  red: "#F00",
  purple: "#800080",
  fuchsia: "#F0F",
  green: "#008000",
  lime: "#0F0",
  olive: "#808000",
  yellow: "#FF0",
  navy: "#000080",
  blue: "#00F",
  teal: "#008080",
  aqua: "#0FF",
  transparent: "#0000"
}, hn = "^\\s*", pn = "\\s*$", Rr = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Er = "([0-9A-Fa-f])", Ir = "([0-9A-Fa-f]{2})", of = new RegExp(`${hn}rgb\\s*\\(${Rr},${Rr},${Rr}\\)${pn}`), af = new RegExp(`${hn}rgba\\s*\\(${Rr},${Rr},${Rr},${Rr}\\)${pn}`), lf = new RegExp(`${hn}#${Er}${Er}${Er}${pn}`), sf = new RegExp(`${hn}#${Ir}${Ir}${Ir}${pn}`), df = new RegExp(`${hn}#${Er}${Er}${Er}${Er}${pn}`), cf = new RegExp(`${hn}#${Ir}${Ir}${Ir}${Ir}${pn}`);
function kt(e) {
  return parseInt(e, 16);
}
function cr(e) {
  try {
    let r;
    if (r = sf.exec(e))
      return [kt(r[1]), kt(r[2]), kt(r[3]), 1];
    if (r = of.exec(e))
      return [wt(r[1]), wt(r[5]), wt(r[9]), 1];
    if (r = af.exec(e))
      return [
        wt(r[1]),
        wt(r[5]),
        wt(r[9]),
        In(r[13])
      ];
    if (r = lf.exec(e))
      return [
        kt(r[1] + r[1]),
        kt(r[2] + r[2]),
        kt(r[3] + r[3]),
        1
      ];
    if (r = cf.exec(e))
      return [
        kt(r[1]),
        kt(r[2]),
        kt(r[3]),
        In(kt(r[4]) / 255)
      ];
    if (r = df.exec(e))
      return [
        kt(r[1] + r[1]),
        kt(r[2] + r[2]),
        kt(r[3] + r[3]),
        In(kt(r[4] + r[4]) / 255)
      ];
    if (e in vi)
      return cr(vi[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (r) {
    throw r;
  }
}
function uf(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function va(e, r, t, n) {
  return `rgba(${wt(e)}, ${wt(r)}, ${wt(t)}, ${uf(n)})`;
}
function qo(e, r, t, n, o) {
  return wt((e * r * (1 - n) + t * n) / o);
}
function re(e, r) {
  Array.isArray(e) || (e = cr(e)), Array.isArray(r) || (r = cr(r));
  const t = e[3], n = r[3], o = In(t + n - t * n);
  return va(qo(e[0], t, r[0], n, o), qo(e[1], t, r[1], n, o), qo(e[2], t, r[2], n, o), o);
}
function Q(e, r) {
  const [t, n, o, a = 1] = Array.isArray(e) ? e : cr(e);
  return r.alpha ? va(t, n, o, r.alpha) : va(t, n, o, a);
}
function st(e, r) {
  const [t, n, o, a = 1] = Array.isArray(e) ? e : cr(e), { lightness: i = 1, alpha: l = 1 } = r;
  return ff([t * i, n * i, o * i, a * l]);
}
function In(e) {
  const r = Math.round(Number(e) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function wt(e) {
  const r = Math.round(Number(e));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function ff(e) {
  const [r, t, n] = e;
  return 3 in e ? `rgba(${wt(r)}, ${wt(t)}, ${wt(n)}, ${In(e[3])})` : `rgba(${wt(r)}, ${wt(t)}, ${wt(n)}, 1)`;
}
function so(e) {
  return e.composedPath()[0];
}
const mf = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function hf(e, r, t) {
  if (e === "mousemoveoutside") {
    const n = (o) => {
      r.contains(so(o)) || t(o);
    };
    return {
      mousemove: n,
      touchstart: n
    };
  } else if (e === "clickoutside") {
    let n = !1;
    const o = (i) => {
      n = !r.contains(so(i));
    }, a = (i) => {
      n && (r.contains(so(i)) || t(i));
    };
    return {
      mousedown: o,
      mouseup: a,
      touchstart: o,
      touchend: a
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function Gl(e, r, t) {
  const n = mf[e];
  let o = n.get(r);
  o === void 0 && n.set(r, o = /* @__PURE__ */ new WeakMap());
  let a = o.get(t);
  return a === void 0 && o.set(t, a = hf(e, r, t)), a;
}
function pf(e, r, t, n) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Gl(e, r, t);
    return Object.keys(o).forEach((a) => {
      Rt(a, document, o[a], n);
    }), !0;
  }
  return !1;
}
function gf(e, r, t, n) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Gl(e, r, t);
    return Object.keys(o).forEach((a) => {
      pt(a, document, o[a], n);
    }), !0;
  }
  return !1;
}
function vf() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function t() {
    e.set(this, !0);
  }
  function n() {
    e.set(this, !0), r.set(this, !0);
  }
  function o(p, T, I) {
    const U = p[T];
    return p[T] = function() {
      return I.apply(p, arguments), U.apply(p, arguments);
    }, p;
  }
  function a(p, T) {
    p[T] = Event.prototype[T];
  }
  const i = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var p;
    return (p = i.get(this)) !== null && p !== void 0 ? p : null;
  }
  function d(p, T) {
    l !== void 0 && Object.defineProperty(p, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: T ?? l.get
    });
  }
  const u = {
    bubble: {},
    capture: {}
  }, f = {};
  function m() {
    const p = function(T) {
      const { type: I, eventPhase: U, bubbles: Y } = T, H = so(T);
      if (U === 2)
        return;
      const S = U === 1 ? "capture" : "bubble";
      let A = H;
      const J = [];
      for (; A === null && (A = window), J.push(A), A !== window; )
        A = A.parentNode || null;
      const ne = u.capture[I], K = u.bubble[I];
      if (o(T, "stopPropagation", t), o(T, "stopImmediatePropagation", n), d(T, s), S === "capture") {
        if (ne === void 0)
          return;
        for (let he = J.length - 1; he >= 0 && !e.has(T); --he) {
          const ve = J[he], de = ne.get(ve);
          if (de !== void 0) {
            i.set(T, ve);
            for (const Te of de) {
              if (r.has(T))
                break;
              Te(T);
            }
          }
          if (he === 0 && !Y && K !== void 0) {
            const Te = K.get(ve);
            if (Te !== void 0)
              for (const Fe of Te) {
                if (r.has(T))
                  break;
                Fe(T);
              }
          }
        }
      } else if (S === "bubble") {
        if (K === void 0)
          return;
        for (let he = 0; he < J.length && !e.has(T); ++he) {
          const ve = J[he], de = K.get(ve);
          if (de !== void 0) {
            i.set(T, ve);
            for (const Te of de) {
              if (r.has(T))
                break;
              Te(T);
            }
          }
        }
      }
      a(T, "stopPropagation"), a(T, "stopImmediatePropagation"), d(T);
    };
    return p.displayName = "evtdUnifiedHandler", p;
  }
  function g() {
    const p = function(T) {
      const { type: I, eventPhase: U } = T;
      if (U !== 2)
        return;
      const Y = f[I];
      Y !== void 0 && Y.forEach((H) => H(T));
    };
    return p.displayName = "evtdUnifiedWindowEventHandler", p;
  }
  const h = m(), C = g();
  function y(p, T) {
    const I = u[p];
    return I[T] === void 0 && (I[T] = /* @__PURE__ */ new Map(), window.addEventListener(T, h, p === "capture")), I[T];
  }
  function b(p) {
    return f[p] === void 0 && (f[p] = /* @__PURE__ */ new Set(), window.addEventListener(p, C)), f[p];
  }
  function _(p, T) {
    let I = p.get(T);
    return I === void 0 && p.set(T, I = /* @__PURE__ */ new Set()), I;
  }
  function E(p, T, I, U) {
    const Y = u[T][I];
    if (Y !== void 0) {
      const H = Y.get(p);
      if (H !== void 0 && H.has(U))
        return !0;
    }
    return !1;
  }
  function O(p, T) {
    const I = f[p];
    return !!(I !== void 0 && I.has(T));
  }
  function N(p, T, I, U) {
    let Y;
    if (typeof U == "object" && U.once === !0 ? Y = (ne) => {
      V(p, T, Y, U), I(ne);
    } : Y = I, pf(p, T, Y, U))
      return;
    const S = U === !0 || typeof U == "object" && U.capture === !0 ? "capture" : "bubble", A = y(S, p), J = _(A, T);
    if (J.has(Y) || J.add(Y), T === window) {
      const ne = b(p);
      ne.has(Y) || ne.add(Y);
    }
  }
  function V(p, T, I, U) {
    if (gf(p, T, I, U))
      return;
    const H = U === !0 || typeof U == "object" && U.capture === !0, S = H ? "capture" : "bubble", A = y(S, p), J = _(A, T);
    if (T === window && !E(T, H ? "bubble" : "capture", p, I) && O(p, I)) {
      const K = f[p];
      K.delete(I), K.size === 0 && (window.removeEventListener(p, C), f[p] = void 0);
    }
    J.has(I) && J.delete(I), J.size === 0 && A.delete(T), A.size === 0 && (window.removeEventListener(p, h, S === "capture"), u[S][p] = void 0);
  }
  return {
    on: N,
    off: V
  };
}
const { on: Rt, off: pt } = vf(), qr = "@@coContext", Va = {
  mounted(e, { value: r, modifiers: t }) {
    e[qr] = {
      handler: void 0
    }, typeof r == "function" && (e[qr].handler = r, Rt("clickoutside", e, r, {
      capture: t.capture
    }));
  },
  updated(e, { value: r, modifiers: t }) {
    const n = e[qr];
    typeof r == "function" ? n.handler ? n.handler !== r && (pt("clickoutside", e, n.handler, {
      capture: t.capture
    }), n.handler = r, Rt("clickoutside", e, r, {
      capture: t.capture
    })) : (e[qr].handler = r, Rt("clickoutside", e, r, {
      capture: t.capture
    })) : n.handler && (pt("clickoutside", e, n.handler, {
      capture: t.capture
    }), n.handler = void 0);
  },
  unmounted(e, { modifiers: r }) {
    const { handler: t } = e[qr];
    t && pt("clickoutside", e, t, {
      capture: r.capture
    }), e[qr].handler = void 0;
  }
};
function Cf(e, r) {
  console.error(`[vdirs/${e}]: ${r}`);
}
class bf {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(r, t) {
    const { elementZIndex: n } = this;
    if (t !== void 0) {
      r.style.zIndex = `${t}`, n.delete(r);
      return;
    }
    const { nextZIndex: o } = this;
    n.has(r) && n.get(r) + 1 === this.nextZIndex || (r.style.zIndex = `${o}`, n.set(r, o), this.nextZIndex = o + 1, this.squashState());
  }
  unregister(r, t) {
    const { elementZIndex: n } = this;
    n.has(r) ? n.delete(r) : t === void 0 && Cf("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: r } = this;
    r || (this.nextZIndex = 2e3), this.nextZIndex - r > 2500 && this.rearrange();
  }
  rearrange() {
    const r = Array.from(this.elementZIndex.entries());
    r.sort((t, n) => t[1] - n[1]), this.nextZIndex = 2e3, r.forEach((t) => {
      const n = t[0], o = this.nextZIndex++;
      `${o}` !== n.style.zIndex && (n.style.zIndex = `${o}`);
    });
  }
}
const Ko = new bf(), Kr = "@@ziContext", xf = {
  mounted(e, r) {
    const { value: t = {} } = r, { zIndex: n, enabled: o } = t;
    e[Kr] = {
      enabled: !!o,
      initialized: !1
    }, o && (Ko.ensureZIndex(e, n), e[Kr].initialized = !0);
  },
  updated(e, r) {
    const { value: t = {} } = r, { zIndex: n, enabled: o } = t, a = e[Kr].enabled;
    o && !a && (Ko.ensureZIndex(e, n), e[Kr].initialized = !0), e[Kr].enabled = !!o;
  },
  unmounted(e, r) {
    if (!e[Kr].initialized)
      return;
    const { value: t = {} } = r, { zIndex: n } = t;
    Ko.unregister(e, n);
  }
};
function Sf(e) {
  const r = F(!!e.value);
  if (r.value)
    return fo(r);
  const t = mt(e, (n) => {
    n && (r.value = !0, t());
  });
  return fo(r);
}
function Gt(e) {
  const r = P(e), t = F(r.value);
  return mt(r, (n) => {
    t.value = n;
  }), typeof e == "function" ? t : {
    __v_isRef: !0,
    get value() {
      return t.value;
    },
    set value(n) {
      e.set(n);
    }
  };
}
function yf() {
  return Do() !== null;
}
const wf = typeof window < "u";
let tn, kn;
const Pf = () => {
  var e, r;
  tn = wf ? (r = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || r === void 0 ? void 0 : r.ready : void 0, kn = !1, tn !== void 0 ? tn.then(() => {
    kn = !0;
  }) : kn = !0;
};
Pf();
function Df(e) {
  if (kn)
    return;
  let r = !1;
  ar(() => {
    kn || tn == null || tn.then(() => {
      r || e();
    });
  }), fr(() => {
    r = !0;
  });
}
function bo(e, r) {
  return mt(e, (t) => {
    t !== void 0 && (r.value = t);
  }), P(() => e.value === void 0 ? r.value : e.value);
}
function Mo() {
  const e = F(!1);
  return ar(() => {
    e.value = !0;
  }), fo(e);
}
const _f = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Tf() {
  return _f;
}
function ql(e = {}, r) {
  const t = Ud({
    ctrl: !1,
    command: !1,
    win: !1,
    shift: !1,
    tab: !1
  }), { keydown: n, keyup: o } = e, a = (s) => {
    switch (s.key) {
      case "Control":
        t.ctrl = !0;
        break;
      case "Meta":
        t.command = !0, t.win = !0;
        break;
      case "Shift":
        t.shift = !0;
        break;
      case "Tab":
        t.tab = !0;
        break;
    }
    n !== void 0 && Object.keys(n).forEach((d) => {
      if (d !== s.key)
        return;
      const u = n[d];
      if (typeof u == "function")
        u(s);
      else {
        const { stop: f = !1, prevent: m = !1 } = u;
        f && s.stopPropagation(), m && s.preventDefault(), u.handler(s);
      }
    });
  }, i = (s) => {
    switch (s.key) {
      case "Control":
        t.ctrl = !1;
        break;
      case "Meta":
        t.command = !1, t.win = !1;
        break;
      case "Shift":
        t.shift = !1;
        break;
      case "Tab":
        t.tab = !1;
        break;
    }
    o !== void 0 && Object.keys(o).forEach((d) => {
      if (d !== s.key)
        return;
      const u = o[d];
      if (typeof u == "function")
        u(s);
      else {
        const { stop: f = !1, prevent: m = !1 } = u;
        f && s.stopPropagation(), m && s.preventDefault(), u.handler(s);
      }
    });
  }, l = () => {
    Rt("keydown", document, a), Rt("keyup", document, i);
  };
  return yf() ? (_o(l), fr(() => {
    pt("keydown", document, a), pt("keyup", document, i);
  })) : l(), fo(t);
}
function Ca(e, r, t = "default") {
  const n = r[t];
  if (n === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return n();
}
function ba(e, r = !0, t = []) {
  return e.forEach((n) => {
    if (n !== null) {
      if (typeof n != "object") {
        (typeof n == "string" || typeof n == "number") && t.push(Yd(String(n)));
        return;
      }
      if (Array.isArray(n)) {
        ba(n, r, t);
        return;
      }
      if (n.type === To) {
        if (n.children === null)
          return;
        Array.isArray(n.children) && ba(n.children, r, t);
      } else n.type !== wl && t.push(n);
    }
  }), t;
}
function Ci(e, r, t = "default") {
  const n = r[t];
  if (n === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const o = ba(n());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`);
}
let pr = null;
function Kl() {
  if (pr === null && (pr = document.getElementById("v-binder-view-measurer"), pr === null)) {
    pr = document.createElement("div"), pr.id = "v-binder-view-measurer";
    const { style: e } = pr;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(pr);
  }
  return pr.getBoundingClientRect();
}
function Of(e, r) {
  const t = Kl();
  return {
    top: r,
    left: e,
    height: 0,
    width: 0,
    right: t.width - e,
    bottom: t.height - r
  };
}
function Xo(e) {
  const r = e.getBoundingClientRect(), t = Kl();
  return {
    left: r.left - t.left,
    top: r.top - t.top,
    bottom: t.height + t.top - r.bottom,
    right: t.width + t.left - r.right,
    width: r.width,
    height: r.height
  };
}
function Mf(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Xl(e) {
  if (e === null)
    return null;
  const r = Mf(e);
  if (r === null)
    return null;
  if (r.nodeType === 9)
    return document;
  if (r.nodeType === 1) {
    const { overflow: t, overflowX: n, overflowY: o } = getComputedStyle(r);
    if (/(auto|scroll|overlay)/.test(t + o + n))
      return r;
  }
  return Xl(r);
}
const ja = Ce({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    var r;
    Nr("VBinder", (r = Do()) === null || r === void 0 ? void 0 : r.proxy);
    const t = Qe("VBinder", null), n = F(null), o = (b) => {
      n.value = b, t && e.syncTargetWithParent && t.setTargetRef(b);
    };
    let a = [];
    const i = () => {
      let b = n.value;
      for (; b = Xl(b), b !== null; )
        a.push(b);
      for (const _ of a)
        Rt("scroll", _, f, !0);
    }, l = () => {
      for (const b of a)
        pt("scroll", b, f, !0);
      a = [];
    }, s = /* @__PURE__ */ new Set(), d = (b) => {
      s.size === 0 && i(), s.has(b) || s.add(b);
    }, u = (b) => {
      s.has(b) && s.delete(b), s.size === 0 && l();
    }, f = () => {
      Ul(m);
    }, m = () => {
      s.forEach((b) => b());
    }, g = /* @__PURE__ */ new Set(), h = (b) => {
      g.size === 0 && Rt("resize", window, y), g.has(b) || g.add(b);
    }, C = (b) => {
      g.has(b) && g.delete(b), g.size === 0 && pt("resize", window, y);
    }, y = () => {
      g.forEach((b) => b());
    };
    return fr(() => {
      pt("resize", window, y), l();
    }), {
      targetRef: n,
      setTargetRef: o,
      addScrollListener: d,
      removeScrollListener: u,
      addResizeListener: h,
      removeResizeListener: C
    };
  },
  render() {
    return Ca("binder", this.$slots);
  }
}), Ua = Ce({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: r } = Qe("VBinder");
    return {
      syncTarget: r,
      setTargetDirective: {
        mounted: e,
        updated: e
      }
    };
  },
  render() {
    const { syncTarget: e, setTargetDirective: r } = this;
    return e ? Ln(Ci("follower", this.$slots), [
      [r]
    ]) : Ci("follower", this.$slots);
  }
}), Rf = "@css-render/vue3-ssr";
function Ef(e, r) {
  return `<style cssr-id="${e}">
${r}
</style>`;
}
function If(e, r, t) {
  const { styles: n, ids: o } = t;
  o.has(e) || n !== null && (o.add(e), n.push(Ef(e, r)));
}
const kf = typeof document < "u";
function gn() {
  if (kf)
    return;
  const e = Qe(Rf, null);
  if (e !== null)
    return {
      adapter: (r, t) => If(r, t, e),
      context: e
    };
}
function bi(e, r) {
  console.error(`[vueuc/${e}]: ${r}`);
}
function Ff(e) {
  let r = 0;
  for (let t = 0; t < e.length; ++t)
    e[t] === "&" && ++r;
  return r;
}
const Ql = /\s*,(?![^(]*\))\s*/g, Af = /\s+/g;
function $f(e, r) {
  const t = [];
  return r.split(Ql).forEach((n) => {
    let o = Ff(n);
    if (o) {
      if (o === 1) {
        e.forEach((i) => {
          t.push(n.replace("&", i));
        });
        return;
      }
    } else {
      e.forEach((i) => {
        t.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (i && i + " ") + n
        );
      });
      return;
    }
    let a = [
      n
    ];
    for (; o--; ) {
      const i = [];
      a.forEach((l) => {
        e.forEach((s) => {
          i.push(l.replace("&", s));
        });
      }), a = i;
    }
    a.forEach((i) => t.push(i));
  }), t;
}
function zf(e, r) {
  const t = [];
  return r.split(Ql).forEach((n) => {
    e.forEach((o) => {
      t.push((o && o + " ") + n);
    });
  }), t;
}
function Hf(e) {
  let r = [""];
  return e.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? r = $f(r, t) : r = zf(r, t));
  }), r.join(", ").replace(Af, " ");
}
function xi(e) {
  if (!e)
    return;
  const r = e.parentElement;
  r && r.removeChild(e);
}
function Ro(e, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Wf(e) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", e), r;
}
function Qn(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Nf = /[A-Z]/g;
function Jl(e) {
  return e.replace(Nf, (r) => "-" + r.toLowerCase());
}
function Bf(e, r = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => r + `  ${Jl(t[0])}: ${t[1]};`).join(`
`) + `
` + r + "}" : `: ${e};`;
}
function Lf(e, r, t) {
  return typeof e == "function" ? e({
    context: r.context,
    props: t
  }) : e;
}
function Si(e, r, t, n) {
  if (!r)
    return "";
  const o = Lf(r, t, n);
  if (!o)
    return "";
  if (typeof o == "string")
    return `${e} {
${o}
}`;
  const a = Object.keys(o);
  if (a.length === 0)
    return t.config.keepEmptyBlock ? e + ` {
}` : "";
  const i = e ? [
    e + " {"
  ] : [];
  return a.forEach((l) => {
    const s = o[l];
    if (l === "raw") {
      i.push(`
` + s + `
`);
      return;
    }
    l = Jl(l), s != null && i.push(`  ${l}${Bf(s)}`);
  }), e && i.push("}"), i.join(`
`);
}
function xa(e, r, t) {
  e && e.forEach((n) => {
    if (Array.isArray(n))
      xa(n, r, t);
    else if (typeof n == "function") {
      const o = n(r);
      Array.isArray(o) ? xa(o, r, t) : o && t(o);
    } else n && t(n);
  });
}
function Zl(e, r, t, n, o) {
  const a = e.$;
  let i = "";
  if (!a || typeof a == "string")
    Qn(a) ? i = a : r.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: n.context,
      props: o
    });
    Qn(d) ? i = d : r.push(d);
  } else if (a.before && a.before(n.context), !a.$ || typeof a.$ == "string")
    Qn(a.$) ? i = a.$ : r.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: n.context,
      props: o
    });
    Qn(d) ? i = d : r.push(d);
  }
  const l = Hf(r), s = Si(l, e.props, n, o);
  i ? t.push(`${i} {`) : s.length && t.push(s), e.children && xa(e.children, {
    context: n.context,
    props: o
  }, (d) => {
    if (typeof d == "string") {
      const u = Si(l, { raw: d }, n, o);
      t.push(u);
    } else
      Zl(d, r, t, n, o);
  }), r.pop(), i && t.push("}"), a && a.after && a.after(n.context);
}
function Vf(e, r, t) {
  const n = [];
  return Zl(e, [], n, r, t), n.join(`

`);
}
function zn(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function jf(e, r, t, n) {
  const { els: o } = r;
  if (t === void 0)
    o.forEach(xi), r.els = [];
  else {
    const a = Ro(t, n);
    a && o.includes(a) && (xi(a), r.els = o.filter((i) => i !== a));
  }
}
function yi(e, r) {
  e.push(r);
}
function Uf(e, r, t, n, o, a, i, l, s) {
  let d;
  if (t === void 0 && (d = r.render(n), t = zn(d)), s) {
    s.adapter(t, d ?? r.render(n));
    return;
  }
  l === void 0 && (l = document.head);
  const u = Ro(t, l);
  if (u !== null && !a)
    return u;
  const f = u ?? Wf(t);
  if (d === void 0 && (d = r.render(n)), f.textContent = d, u !== null)
    return u;
  if (i) {
    const m = l.querySelector(`meta[name="${i}"]`);
    if (m)
      return l.insertBefore(f, m), yi(r.els, f), f;
  }
  return o ? l.insertBefore(f, l.querySelector("style, link")) : l.appendChild(f), yi(r.els, f), f;
}
function Yf(e) {
  return Vf(this, this.instance, e);
}
function Gf(e = {}) {
  const { id: r, ssr: t, props: n, head: o = !1, force: a = !1, anchorMetaName: i, parent: l } = e;
  return Uf(this.instance, this, r, n, o, a, i, l, t);
}
function qf(e = {}) {
  const { id: r, parent: t } = e;
  jf(this.instance, this, r, t);
}
const Jn = function(e, r, t, n) {
  return {
    instance: e,
    $: r,
    props: t,
    children: n,
    els: [],
    render: Yf,
    mount: Gf,
    unmount: qf
  };
}, Kf = function(e, r, t, n) {
  return Array.isArray(r) ? Jn(e, { $: null }, null, r) : Array.isArray(t) ? Jn(e, r, null, t) : Array.isArray(n) ? Jn(e, r, t, n) : Jn(e, r, t, null);
};
function es(e = {}) {
  const r = {
    c: (...t) => Kf(r, ...t),
    use: (t, ...n) => t.install(r, ...n),
    find: Ro,
    context: {},
    config: e
  };
  return r;
}
function Xf(e, r) {
  if (e === void 0)
    return !1;
  if (r) {
    const { context: { ids: t } } = r;
    return t.has(e);
  }
  return Ro(e) !== null;
}
const { c: kr } = es(), ts = "vueuc-style";
function wi(e) {
  return e & -e;
}
class rs {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(r, t) {
    this.l = r, this.min = t;
    const n = new Array(r + 1);
    for (let o = 0; o < r + 1; ++o)
      n[o] = 0;
    this.ft = n;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(r, t) {
    if (t === 0)
      return;
    const { l: n, ft: o } = this;
    for (r += 1; r <= n; )
      o[r] += t, r += wi(r);
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(r) {
    return this.sum(r + 1) - this.sum(r);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(r) {
    if (r === void 0 && (r = this.l), r <= 0)
      return 0;
    const { ft: t, min: n, l: o } = this;
    if (r > o)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let a = r * n;
    for (; r > 0; )
      a += t[r], r -= wi(r);
    return a;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(r) {
    let t = 0, n = this.l;
    for (; n > t; ) {
      const o = Math.floor((t + n) / 2), a = this.sum(o);
      if (a > r) {
        n = o;
        continue;
      } else if (a < r) {
        if (t === o)
          return this.sum(t + 1) <= r ? t + 1 : o;
        t = o;
      } else
        return o;
    }
    return t;
  }
}
const Qf = Ce({
  name: "LazyTeleport",
  props: {
    to: {
      type: [String, Object],
      default: void 0
    },
    disabled: Boolean,
    show: {
      type: Boolean,
      required: !0
    }
  },
  setup(e) {
    return {
      showTeleport: Sf(Ge(e, "show")),
      mergedTo: P(() => {
        const { to: r } = e;
        return r ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Ca("lazy-teleport", this.$slots) : c(Gd, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Ca("lazy-teleport", this.$slots)) : null;
  }
}), Zn = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Pi = {
  start: "end",
  center: "center",
  end: "start"
}, Qo = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Jf = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
}, Zf = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
}, em = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Di = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, _i = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function tm(e, r, t, n, o, a) {
  if (!o || a)
    return { placement: e, top: 0, left: 0 };
  const [i, l] = e.split("-");
  let s = l ?? "center", d = {
    top: 0,
    left: 0
  };
  const u = (g, h, C) => {
    let y = 0, b = 0;
    const _ = t[g] - r[h] - r[g];
    return _ > 0 && n && (C ? b = Di[h] ? _ : -_ : y = Di[h] ? _ : -_), {
      left: y,
      top: b
    };
  }, f = i === "left" || i === "right";
  if (s !== "center") {
    const g = em[e], h = Zn[g], C = Qo[g];
    if (t[C] > r[C]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        r[g] + r[C] < t[C]
      ) {
        const y = (t[C] - r[C]) / 2;
        r[g] < y || r[h] < y ? r[g] < r[h] ? (s = Pi[l], d = u(C, h, f)) : d = u(C, g, f) : s = "center";
      }
    } else t[C] < r[C] && r[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    r[g] > r[h] && (s = Pi[l]);
  } else {
    const g = i === "bottom" || i === "top" ? "left" : "top", h = Zn[g], C = Qo[g], y = (t[C] - r[C]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (r[g] < y || r[h] < y) && (r[g] > r[h] ? (s = _i[g], d = u(C, g, f)) : (s = _i[h], d = u(C, h, f)));
  }
  let m = i;
  return (
    // space is not enough
    r[i] < t[Qo[i]] && // opposite position's space is larger
    r[i] < r[Zn[i]] && (m = Zn[i]), {
      placement: s !== "center" ? `${m}-${s}` : m,
      left: d.left,
      top: d.top
    }
  );
}
function rm(e, r) {
  return r ? Zf[e] : Jf[e];
}
function nm(e, r, t, n, o, a) {
  if (a)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(t.top - r.top + t.height)}px`,
          left: `${Math.round(t.left - r.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(t.top - r.top + t.height)}px`,
          left: `${Math.round(t.left - r.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(t.top - r.top)}px`,
          left: `${Math.round(t.left - r.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(t.top - r.top)}px`,
          left: `${Math.round(t.left - r.left + t.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(t.top - r.top)}px`,
          left: `${Math.round(t.left - r.left + t.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(t.top - r.top + t.height)}px`,
          left: `${Math.round(t.left - r.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(t.top - r.top)}px`,
          left: `${Math.round(t.left - r.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(t.top - r.top + t.height)}px`,
          left: `${Math.round(t.left - r.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(t.top - r.top)}px`,
          left: `${Math.round(t.left - r.left + t.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(t.top - r.top + t.height / 2)}px`,
          left: `${Math.round(t.left - r.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(t.top - r.top + t.height / 2)}px`,
          left: `${Math.round(t.left - r.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(t.top - r.top + t.height)}px`,
          left: `${Math.round(t.left - r.left + t.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(t.top - r.top + t.height + n)}px`,
        left: `${Math.round(t.left - r.left + o)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(t.top - r.top + t.height + n)}px`,
        left: `${Math.round(t.left - r.left + t.width + o)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(t.top - r.top + n)}px`,
        left: `${Math.round(t.left - r.left + o)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(t.top - r.top + n)}px`,
        left: `${Math.round(t.left - r.left + t.width + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(t.top - r.top + n)}px`,
        left: `${Math.round(t.left - r.left + t.width + o)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(t.top - r.top + t.height + n)}px`,
        left: `${Math.round(t.left - r.left + t.width + o)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(t.top - r.top + n)}px`,
        left: `${Math.round(t.left - r.left + o)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(t.top - r.top + t.height + n)}px`,
        left: `${Math.round(t.left - r.left + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(t.top - r.top + n)}px`,
        left: `${Math.round(t.left - r.left + t.width / 2 + o)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(t.top - r.top + t.height / 2 + n)}px`,
        left: `${Math.round(t.left - r.left + t.width + o)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(t.top - r.top + t.height / 2 + n)}px`,
        left: `${Math.round(t.left - r.left + o)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(t.top - r.top + t.height + n)}px`,
        left: `${Math.round(t.left - r.left + t.width / 2 + o)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const om = kr([
  kr(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  kr(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    kr("> *", {
      pointerEvents: "all"
    })
  ])
]), Ya = Ce({
  name: "Follower",
  inheritAttrs: !1,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: !0
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: !0
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(e) {
    const r = Qe("VBinder"), t = Gt(() => e.enabled !== void 0 ? e.enabled : e.show), n = F(null), o = F(null), a = () => {
      const { syncTrigger: m } = e;
      m.includes("scroll") && r.addScrollListener(s), m.includes("resize") && r.addResizeListener(s);
    }, i = () => {
      r.removeScrollListener(s), r.removeResizeListener(s);
    };
    ar(() => {
      t.value && (s(), a());
    });
    const l = gn();
    om.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: ts,
      ssr: l
    }), fr(() => {
      i();
    }), Df(() => {
      t.value && s();
    });
    const s = () => {
      if (!t.value)
        return;
      const m = n.value;
      if (m === null)
        return;
      const g = r.targetRef, { x: h, y: C, overlap: y } = e, b = h !== void 0 && C !== void 0 ? Of(h, C) : Xo(g);
      m.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), m.style.setProperty("--v-target-height", `${Math.round(b.height)}px`);
      const { width: _, minWidth: E, placement: O, internalShift: N, flip: V } = e;
      m.setAttribute("v-placement", O), y ? m.setAttribute("v-overlap", "") : m.removeAttribute("v-overlap");
      const { style: p } = m;
      _ === "target" ? p.width = `${b.width}px` : _ !== void 0 ? p.width = _ : p.width = "", E === "target" ? p.minWidth = `${b.width}px` : E !== void 0 ? p.minWidth = E : p.minWidth = "";
      const T = Xo(m), I = Xo(o.value), { left: U, top: Y, placement: H } = tm(O, b, T, N, V, y), S = rm(H, y), { left: A, top: J, transform: ne } = nm(H, I, b, Y, U, y);
      m.setAttribute("v-placement", H), m.style.setProperty("--v-offset-left", `${Math.round(U)}px`), m.style.setProperty("--v-offset-top", `${Math.round(Y)}px`), m.style.transform = `translateX(${A}) translateY(${J}) ${ne}`, m.style.setProperty("--v-transform-origin", S), m.style.transformOrigin = S;
    };
    mt(t, (m) => {
      m ? (a(), d()) : i();
    });
    const d = () => {
      br().then(s).catch((m) => console.error(m));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((m) => {
      mt(Ge(e, m), s);
    }), ["teleportDisabled"].forEach((m) => {
      mt(Ge(e, m), d);
    }), mt(Ge(e, "syncTrigger"), (m) => {
      m.includes("resize") ? r.addResizeListener(s) : r.removeResizeListener(s), m.includes("scroll") ? r.addScrollListener(s) : r.removeScrollListener(s);
    });
    const u = Mo(), f = Gt(() => {
      const { to: m } = e;
      if (m !== void 0)
        return m;
      u.value;
    });
    return {
      VBinder: r,
      mergedEnabled: t,
      offsetContainerRef: o,
      followerRef: n,
      mergedTo: f,
      syncPosition: s
    };
  },
  render() {
    return c(Qf, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, r;
        const t = c("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          c("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (r = (e = this.$slots).default) === null || r === void 0 ? void 0 : r.call(e))
        ]);
        return this.zindexable ? Ln(t, [
          [
            xf,
            {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }
          ]
        ]) : t;
      }
    });
  }
});
var Fr = [], am = function() {
  return Fr.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, im = function() {
  return Fr.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Ti = "ResizeObserver loop completed with undelivered notifications.", lm = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Ti
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Ti), window.dispatchEvent(e);
}, Hn;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Hn || (Hn = {}));
var Ar = function(e) {
  return Object.freeze(e);
}, sm = /* @__PURE__ */ function() {
  function e(r, t) {
    this.inlineSize = r, this.blockSize = t, Ar(this);
  }
  return e;
}(), ns = function() {
  function e(r, t, n, o) {
    return this.x = r, this.y = t, this.width = n, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ar(this);
  }
  return e.prototype.toJSON = function() {
    var r = this, t = r.x, n = r.y, o = r.top, a = r.right, i = r.bottom, l = r.left, s = r.width, d = r.height;
    return { x: t, y: n, top: o, right: a, bottom: i, left: l, width: s, height: d };
  }, e.fromRect = function(r) {
    return new e(r.x, r.y, r.width, r.height);
  }, e;
}(), Ga = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, os = function(e) {
  if (Ga(e)) {
    var r = e.getBBox(), t = r.width, n = r.height;
    return !t && !n;
  }
  var o = e, a = o.offsetWidth, i = o.offsetHeight;
  return !(a || i || e.getClientRects().length);
}, Oi = function(e) {
  var r;
  if (e instanceof Element)
    return !0;
  var t = (r = e == null ? void 0 : e.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(t && e instanceof t.Element);
}, dm = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Fn = typeof window < "u" ? window : {}, eo = /* @__PURE__ */ new WeakMap(), Mi = /auto|scroll/, cm = /^tb|vertical/, um = /msie|trident/i.test(Fn.navigator && Fn.navigator.userAgent), er = function(e) {
  return parseFloat(e || "0");
}, rn = function(e, r, t) {
  return e === void 0 && (e = 0), r === void 0 && (r = 0), t === void 0 && (t = !1), new sm((t ? r : e) || 0, (t ? e : r) || 0);
}, Ri = Ar({
  devicePixelContentBoxSize: rn(),
  borderBoxSize: rn(),
  contentBoxSize: rn(),
  contentRect: new ns(0, 0, 0, 0)
}), as = function(e, r) {
  if (r === void 0 && (r = !1), eo.has(e) && !r)
    return eo.get(e);
  if (os(e))
    return eo.set(e, Ri), Ri;
  var t = getComputedStyle(e), n = Ga(e) && e.ownerSVGElement && e.getBBox(), o = !um && t.boxSizing === "border-box", a = cm.test(t.writingMode || ""), i = !n && Mi.test(t.overflowY || ""), l = !n && Mi.test(t.overflowX || ""), s = n ? 0 : er(t.paddingTop), d = n ? 0 : er(t.paddingRight), u = n ? 0 : er(t.paddingBottom), f = n ? 0 : er(t.paddingLeft), m = n ? 0 : er(t.borderTopWidth), g = n ? 0 : er(t.borderRightWidth), h = n ? 0 : er(t.borderBottomWidth), C = n ? 0 : er(t.borderLeftWidth), y = f + d, b = s + u, _ = C + g, E = m + h, O = l ? e.offsetHeight - E - e.clientHeight : 0, N = i ? e.offsetWidth - _ - e.clientWidth : 0, V = o ? y + _ : 0, p = o ? b + E : 0, T = n ? n.width : er(t.width) - V - N, I = n ? n.height : er(t.height) - p - O, U = T + y + N + _, Y = I + b + O + E, H = Ar({
    devicePixelContentBoxSize: rn(Math.round(T * devicePixelRatio), Math.round(I * devicePixelRatio), a),
    borderBoxSize: rn(U, Y, a),
    contentBoxSize: rn(T, I, a),
    contentRect: new ns(f, s, T, I)
  });
  return eo.set(e, H), H;
}, is = function(e, r, t) {
  var n = as(e, t), o = n.borderBoxSize, a = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (r) {
    case Hn.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case Hn.BORDER_BOX:
      return o;
    default:
      return a;
  }
}, fm = /* @__PURE__ */ function() {
  function e(r) {
    var t = as(r);
    this.target = r, this.contentRect = t.contentRect, this.borderBoxSize = Ar([t.borderBoxSize]), this.contentBoxSize = Ar([t.contentBoxSize]), this.devicePixelContentBoxSize = Ar([t.devicePixelContentBoxSize]);
  }
  return e;
}(), ls = function(e) {
  if (os(e))
    return 1 / 0;
  for (var r = 0, t = e.parentNode; t; )
    r += 1, t = t.parentNode;
  return r;
}, mm = function() {
  var e = 1 / 0, r = [];
  Fr.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var l = [];
      i.activeTargets.forEach(function(d) {
        var u = new fm(d.target), f = ls(d.target);
        l.push(u), d.lastReportedSize = is(d.target, d.observedBox), f < e && (e = f);
      }), r.push(function() {
        i.callback.call(i.observer, l, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var t = 0, n = r; t < n.length; t++) {
    var o = n[t];
    o();
  }
  return e;
}, Ei = function(e) {
  Fr.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(o) {
      o.isActive() && (ls(o.target) > e ? t.activeTargets.push(o) : t.skippedTargets.push(o));
    });
  });
}, hm = function() {
  var e = 0;
  for (Ei(e); am(); )
    e = mm(), Ei(e);
  return im() && lm(), e > 0;
}, Jo, ss = [], pm = function() {
  return ss.splice(0).forEach(function(e) {
    return e();
  });
}, gm = function(e) {
  if (!Jo) {
    var r = 0, t = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return pm();
    }).observe(t, n), Jo = function() {
      t.textContent = "".concat(r ? r-- : r++);
    };
  }
  ss.push(e), Jo();
}, vm = function(e) {
  gm(function() {
    requestAnimationFrame(e);
  });
}, co = 0, Cm = function() {
  return !!co;
}, bm = 250, xm = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Ii = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], ki = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Zo = !1, Sm = function() {
  function e() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return e.prototype.run = function(r) {
    var t = this;
    if (r === void 0 && (r = bm), !Zo) {
      Zo = !0;
      var n = ki(r);
      vm(function() {
        var o = !1;
        try {
          o = hm();
        } finally {
          if (Zo = !1, r = n - ki(), !Cm())
            return;
          o ? t.run(1e3) : r > 0 ? t.run(r) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var r = this, t = function() {
      return r.observer && r.observer.observe(document.body, xm);
    };
    document.body ? t() : Fn.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ii.forEach(function(t) {
      return Fn.addEventListener(t, r.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), Ii.forEach(function(t) {
      return Fn.removeEventListener(t, r.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Sa = new Sm(), Fi = function(e) {
  !co && e > 0 && Sa.start(), co += e, !co && Sa.stop();
}, ym = function(e) {
  return !Ga(e) && !dm(e) && getComputedStyle(e).display === "inline";
}, wm = function() {
  function e(r, t) {
    this.target = r, this.observedBox = t || Hn.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var r = is(this.target, this.observedBox, !0);
    return ym(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, e;
}(), Pm = /* @__PURE__ */ function() {
  function e(r, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = t;
  }
  return e;
}(), to = /* @__PURE__ */ new WeakMap(), Ai = function(e, r) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === r)
      return t;
  return -1;
}, ro = function() {
  function e() {
  }
  return e.connect = function(r, t) {
    var n = new Pm(r, t);
    to.set(r, n);
  }, e.observe = function(r, t, n) {
    var o = to.get(r), a = o.observationTargets.length === 0;
    Ai(o.observationTargets, t) < 0 && (a && Fr.push(o), o.observationTargets.push(new wm(t, n && n.box)), Fi(1), Sa.schedule());
  }, e.unobserve = function(r, t) {
    var n = to.get(r), o = Ai(n.observationTargets, t), a = n.observationTargets.length === 1;
    o >= 0 && (a && Fr.splice(Fr.indexOf(n), 1), n.observationTargets.splice(o, 1), Fi(-1));
  }, e.disconnect = function(r) {
    var t = this, n = to.get(r);
    n.observationTargets.slice().forEach(function(o) {
      return t.unobserve(r, o.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), Dm = function() {
  function e(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ro.connect(this, r);
  }
  return e.prototype.observe = function(r, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Oi(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ro.observe(this, r, t);
  }, e.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Oi(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ro.unobserve(this, r);
  }, e.prototype.disconnect = function() {
    ro.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class _m {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Dm)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(r) {
    for (const t of r) {
      const n = this.elHandlersMap.get(t.target);
      n !== void 0 && n(t);
    }
  }
  registerHandler(r, t) {
    this.elHandlersMap.set(r, t), this.observer.observe(r);
  }
  unregisterHandler(r) {
    this.elHandlersMap.has(r) && (this.elHandlersMap.delete(r), this.observer.unobserve(r));
  }
}
const $i = new _m(), Wn = Ce({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let r = !1;
    const t = Do().proxy;
    function n(o) {
      const { onResize: a } = e;
      a !== void 0 && a(o);
    }
    ar(() => {
      const o = t.$el;
      if (o === void 0) {
        bi("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        bi("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && ($i.registerHandler(o.nextElementSibling, n), r = !0);
    }), fr(() => {
      r && $i.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return Pl(this.$slots, "default");
  }
});
let no;
function Tm() {
  return typeof document > "u" ? !1 : (no === void 0 && ("matchMedia" in window ? no = window.matchMedia("(pointer:coarse)").matches : no = !1), no);
}
let ea;
function zi() {
  return typeof document > "u" ? 1 : (ea === void 0 && (ea = "chrome" in window ? window.devicePixelRatio : 1), ea);
}
const ds = "VVirtualListXScroll";
function Om({ columnsRef: e, renderColRef: r, renderItemWithColsRef: t }) {
  const n = F(0), o = F(0), a = P(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const u = new rs(d.length, 0);
    return d.forEach((f, m) => {
      u.add(m, f.width);
    }), u;
  }), i = Gt(() => {
    const d = a.value;
    return d !== null ? Math.max(d.getBound(o.value) - 1, 0) : 0;
  }), l = (d) => {
    const u = a.value;
    return u !== null ? u.sum(d) : 0;
  }, s = Gt(() => {
    const d = a.value;
    return d !== null ? Math.min(d.getBound(o.value + n.value) + 1, e.value.length - 1) : 0;
  });
  return Nr(ds, {
    startIndexRef: i,
    endIndexRef: s,
    columnsRef: e,
    renderColRef: r,
    renderItemWithColsRef: t,
    getLeft: l
  }), {
    listWidthRef: n,
    scrollLeftRef: o
  };
}
const Hi = Ce({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: !0 },
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const { startIndexRef: e, endIndexRef: r, columnsRef: t, getLeft: n, renderColRef: o, renderItemWithColsRef: a } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Qe(ds)
    );
    return {
      startIndex: e,
      endIndex: r,
      columns: t,
      renderCol: o,
      renderItemWithCols: a,
      getLeft: n
    };
  },
  render() {
    const { startIndex: e, endIndex: r, columns: t, renderCol: n, renderItemWithCols: o, getLeft: a, item: i } = this;
    if (o != null)
      return o({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: r,
        allColumns: t,
        item: i,
        getLeft: a
      });
    if (n != null) {
      const l = [];
      for (let s = e; s <= r; ++s) {
        const d = t[s];
        l.push(n({ column: d, left: a(s), item: i }));
      }
      return l;
    }
    return null;
  }
}), Mm = kr(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  kr("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    kr("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), ya = Ce({
  name: "VirtualList",
  inheritAttrs: !1,
  props: {
    showScrollbar: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => []
    },
    renderCol: Function,
    renderItemWithCols: Function,
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: !0
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(e) {
    const r = gn();
    Mm.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: ts,
      ssr: r
    }), ar(() => {
      const { defaultScrollIndex: S, defaultScrollKey: A } = e;
      S != null ? y({ index: S }) : A != null && y({ key: A });
    });
    let t = !1, n = !1;
    Dl(() => {
      if (t = !1, !n) {
        n = !0;
        return;
      }
      y({ top: g.value, left: i.value });
    }), _l(() => {
      t = !0, n || (n = !0);
    });
    const o = Gt(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let S = 0;
      return e.columns.forEach((A) => {
        S += A.width;
      }), S;
    }), a = P(() => {
      const S = /* @__PURE__ */ new Map(), { keyField: A } = e;
      return e.items.forEach((J, ne) => {
        S.set(J[A], ne);
      }), S;
    }), { scrollLeftRef: i, listWidthRef: l } = Om({
      columnsRef: Ge(e, "columns"),
      renderColRef: Ge(e, "renderCol"),
      renderItemWithColsRef: Ge(e, "renderItemWithCols")
    }), s = F(null), d = F(void 0), u = /* @__PURE__ */ new Map(), f = P(() => {
      const { items: S, itemSize: A, keyField: J } = e, ne = new rs(S.length, A);
      return S.forEach((K, he) => {
        const ve = K[J], de = u.get(ve);
        de !== void 0 && ne.add(he, de);
      }), ne;
    }), m = F(0), g = F(0), h = Gt(() => Math.max(f.value.getBound(g.value - Co(e.paddingTop)) - 1, 0)), C = P(() => {
      const { value: S } = d;
      if (S === void 0)
        return [];
      const { items: A, itemSize: J } = e, ne = h.value, K = Math.min(ne + Math.ceil(S / J + 1), A.length - 1), he = [];
      for (let ve = ne; ve <= K; ++ve)
        he.push(A[ve]);
      return he;
    }), y = (S, A) => {
      if (typeof S == "number") {
        O(S, A, "auto");
        return;
      }
      const { left: J, top: ne, index: K, key: he, position: ve, behavior: de, debounce: Te = !0 } = S;
      if (J !== void 0 || ne !== void 0)
        O(J, ne, de);
      else if (K !== void 0)
        E(K, de, Te);
      else if (he !== void 0) {
        const Fe = a.value.get(he);
        Fe !== void 0 && E(Fe, de, Te);
      } else ve === "bottom" ? O(0, Number.MAX_SAFE_INTEGER, de) : ve === "top" && O(0, 0, de);
    };
    let b, _ = null;
    function E(S, A, J) {
      const { value: ne } = f, K = ne.sum(S) + Co(e.paddingTop);
      if (!J)
        s.value.scrollTo({
          left: 0,
          top: K,
          behavior: A
        });
      else {
        b = S, _ !== null && window.clearTimeout(_), _ = window.setTimeout(() => {
          b = void 0, _ = null;
        }, 16);
        const { scrollTop: he, offsetHeight: ve } = s.value;
        if (K > he) {
          const de = ne.get(S);
          K + de <= he + ve || s.value.scrollTo({
            left: 0,
            top: K + de - ve,
            behavior: A
          });
        } else
          s.value.scrollTo({
            left: 0,
            top: K,
            behavior: A
          });
      }
    }
    function O(S, A, J) {
      s.value.scrollTo({
        left: S,
        top: A,
        behavior: J
      });
    }
    function N(S, A) {
      var J, ne, K;
      if (t || e.ignoreItemResize || H(A.target))
        return;
      const { value: he } = f, ve = a.value.get(S), de = he.get(ve), Te = (K = (ne = (J = A.borderBoxSize) === null || J === void 0 ? void 0 : J[0]) === null || ne === void 0 ? void 0 : ne.blockSize) !== null && K !== void 0 ? K : A.contentRect.height;
      if (Te === de)
        return;
      Te - e.itemSize === 0 ? u.delete(S) : u.set(S, Te - e.itemSize);
      const et = Te - de;
      if (et === 0)
        return;
      he.add(ve, et);
      const be = s.value;
      if (be != null) {
        if (b === void 0) {
          const we = he.sum(ve);
          be.scrollTop > we && be.scrollBy(0, et);
        } else if (ve < b)
          be.scrollBy(0, et);
        else if (ve === b) {
          const we = he.sum(ve);
          Te + we > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          be.scrollTop + be.offsetHeight && be.scrollBy(0, et);
        }
        Y();
      }
      m.value++;
    }
    const V = !Tm();
    let p = !1;
    function T(S) {
      var A;
      (A = e.onScroll) === null || A === void 0 || A.call(e, S), (!V || !p) && Y();
    }
    function I(S) {
      var A;
      if ((A = e.onWheel) === null || A === void 0 || A.call(e, S), V) {
        const J = s.value;
        if (J != null) {
          if (S.deltaX === 0 && (J.scrollTop === 0 && S.deltaY <= 0 || J.scrollTop + J.offsetHeight >= J.scrollHeight && S.deltaY >= 0))
            return;
          S.preventDefault(), J.scrollTop += S.deltaY / zi(), J.scrollLeft += S.deltaX / zi(), Y(), p = !0, Ul(() => {
            p = !1;
          });
        }
      }
    }
    function U(S) {
      if (t || H(S.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (S.contentRect.height === d.value)
          return;
      } else if (S.contentRect.height === d.value && S.contentRect.width === l.value)
        return;
      d.value = S.contentRect.height, l.value = S.contentRect.width;
      const { onResize: A } = e;
      A !== void 0 && A(S);
    }
    function Y() {
      const { value: S } = s;
      S != null && (g.value = S.scrollTop, i.value = S.scrollLeft);
    }
    function H(S) {
      let A = S;
      for (; A !== null; ) {
        if (A.style.display === "none")
          return !0;
        A = A.parentElement;
      }
      return !1;
    }
    return {
      listHeight: d,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: P(() => {
        const { itemResizable: S } = e, A = _n(f.value.sum());
        return m.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: _n(o.value),
            height: S ? "" : A,
            minHeight: S ? A : "",
            paddingTop: _n(e.paddingTop),
            paddingBottom: _n(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: P(() => (m.value, {
        transform: `translateY(${_n(f.value.sum(h.value))})`
      })),
      viewportItems: C,
      listElRef: s,
      itemsElRef: F(null),
      scrollTo: y,
      handleListResize: U,
      handleListScroll: T,
      handleListWheel: I,
      handleItemResize: N
    };
  },
  render() {
    const { itemResizable: e, keyField: r, keyToIndex: t, visibleItemsTag: n } = this;
    return c(Wn, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var o, a;
        return c("div", $a(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? c("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            c(n, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: i, renderItemWithCols: l } = this;
                return this.viewportItems.map((s) => {
                  const d = s[r], u = t.get(d), f = i != null ? c(Hi, {
                    index: u,
                    item: s
                  }) : void 0, m = l != null ? c(Hi, {
                    index: u,
                    item: s
                  }) : void 0, g = this.$slots.default({
                    item: s,
                    renderedCols: f,
                    renderedItemWithCols: m,
                    index: u
                  })[0];
                  return e ? c(Wn, {
                    key: d,
                    onResize: (h) => this.handleItemResize(d, h)
                  }, {
                    default: () => g
                  }) : (g.key = d, g);
                });
              }
            })
          ]) : (a = (o = this.$slots).empty) === null || a === void 0 ? void 0 : a.call(o)
        ]);
      }
    });
  }
});
const Rm = "n-internal-select-menu-body", Em = "n-drawer-body", Im = "n-modal-body", km = "n-popover-body", cs = "__disabled__";
function yr(e) {
  const r = Qe(Im, null), t = Qe(Em, null), n = Qe(km, null), o = Qe(Rm, null), a = F();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const i = () => {
      a.value = document.fullscreenElement;
    };
    ar(() => {
      Rt("fullscreenchange", document, i);
    }), fr(() => {
      pt("fullscreenchange", document, i);
    });
  }
  return Gt(() => {
    var i;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? cs : l === !0 ? a.value || "body" : l : r != null && r.value ? (i = r.value.$el) !== null && i !== void 0 ? i : r.value : t != null && t.value ? t.value : n != null && n.value ? n.value : o != null && o.value ? o.value : l ?? (a.value || "body");
  });
}
yr.tdkey = cs;
yr.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
const Eo = typeof document < "u" && typeof window < "u";
function Fm(e) {
  const r = {
    isDeactivated: !1
  };
  let t = !1;
  return Dl(() => {
    if (r.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), _l(() => {
    r.isDeactivated = !0, t || (t = !0);
  }), r;
}
function Wi(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Ni(e) {
  const {
    left: r,
    right: t,
    top: n,
    bottom: o
  } = Zr(e);
  return `${n} ${r} ${o} ${t}`;
}
var Bi = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function Am(e) {
  let r = ".", t = "__", n = "--", o;
  {
    let h = e.blockPrefix;
    h && (r = h), h = e.elementPrefix, h && (t = h), h = e.modifierPrefix, h && (n = h);
  }
  const a = {
    install(h) {
      o = h.c;
      const C = h.context;
      C.bem = {}, C.bem.b = null, C.bem.els = null;
    }
  };
  function i(h) {
    let C, y;
    return {
      before(b) {
        C = b.bem.b, y = b.bem.els, b.bem.els = null;
      },
      after(b) {
        b.bem.b = C, b.bem.els = y;
      },
      $({ context: b, props: _ }) {
        return h = typeof h == "string" ? h : h({ context: b, props: _ }), b.bem.b = h, `${(_ == null ? void 0 : _.bPrefix) || r}${b.bem.b}`;
      }
    };
  }
  function l(h) {
    let C;
    return {
      before(y) {
        C = y.bem.els;
      },
      after(y) {
        y.bem.els = C;
      },
      $({ context: y, props: b }) {
        return h = typeof h == "string" ? h : h({ context: y, props: b }), y.bem.els = h.split(",").map((_) => _.trim()), y.bem.els.map((_) => `${(b == null ? void 0 : b.bPrefix) || r}${y.bem.b}${t}${_}`).join(", ");
      }
    };
  }
  function s(h) {
    return {
      $({ context: C, props: y }) {
        h = typeof h == "string" ? h : h({ context: C, props: y });
        const b = h.split(",").map((O) => O.trim());
        function _(O) {
          return b.map((N) => `&${(y == null ? void 0 : y.bPrefix) || r}${C.bem.b}${O !== void 0 ? `${t}${O}` : ""}${n}${N}`).join(", ");
        }
        const E = C.bem.els;
        if (E !== null) {
          if (Bi.NODE_ENV !== "production" && E.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);
          return _(E[0]);
        } else
          return _();
      }
    };
  }
  function d(h) {
    return {
      $({ context: C, props: y }) {
        h = typeof h == "string" ? h : h({ context: C, props: y });
        const b = C.bem.els;
        if (Bi.NODE_ENV !== "production" && b !== null && b.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${h}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(y == null ? void 0 : y.bPrefix) || r}${C.bem.b}${b !== null && b.length > 0 ? `${t}${b[0]}` : ""}${n}${h})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...h) => o(i(h[0]), h[1], h[2]),
    cE: (...h) => o(l(h[0]), h[1], h[2]),
    cM: (...h) => o(s(h[0]), h[1], h[2]),
    cNotM: (...h) => o(d(h[0]), h[1], h[2])
  }), a;
}
const $m = "n", zm = `.${$m}-`, Hm = "__", Wm = "--", us = es(), fs = Am({
  blockPrefix: zm,
  elementPrefix: Hm,
  modifierPrefix: Wm
});
us.use(fs);
const {
  c: $,
  find: CS
} = us, {
  cB: oe,
  cE: B,
  cM: ae,
  cNotM: Vt
} = fs;
function Se(e, r) {
  return e + (r === "default" ? "" : r.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
const Nm = /* @__PURE__ */ new WeakSet();
function xo(e) {
  Nm.add(e);
}
const Li = /* @__PURE__ */ new Set();
function wr(e, r) {
  const t = `[naive/${e}]: ${r}`;
  Li.has(t) || (Li.add(t), console.error(t));
}
function ms(e, r) {
  console.error(`[naive/${e}]: ${r}`);
}
function qa(e, r) {
  throw new Error(`[naive/${e}]: ${r}`);
}
function Pe(e, ...r) {
  if (Array.isArray(e))
    e.forEach((t) => Pe(t, ...r));
  else
    return e(...r);
}
function Un(e) {
  return e.some((r) => qd(r) ? !(r.type === wl || r.type === To && !Un(r.children)) : !0) ? e : null;
}
function ke(e, r) {
  return e && Un(e()) || r();
}
function Et(e, r, t) {
  return e && Un(e(r)) || t(r);
}
function Cr(e, r) {
  const t = e && Un(e());
  return r(t || null);
}
function Bm(e) {
  return !(e && Un(e()));
}
const Vi = Ce({
  render() {
    var e, r;
    return (r = (e = this.$slots).default) === null || r === void 0 ? void 0 : r.call(e);
  }
}), ur = "n-config-provider", wa = "n";
function Yn(e = {}, r = {
  defaultBordered: !0
}) {
  const t = Qe(ur, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: t == null ? void 0 : t.inlineThemeDisabled,
    mergedRtlRef: t == null ? void 0 : t.mergedRtlRef,
    mergedComponentPropsRef: t == null ? void 0 : t.mergedComponentPropsRef,
    mergedBreakpointsRef: t == null ? void 0 : t.mergedBreakpointsRef,
    mergedBorderedRef: P(() => {
      var n, o;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (o = (n = t == null ? void 0 : t.mergedBorderedRef.value) !== null && n !== void 0 ? n : r.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : Kd(wa),
    namespaceRef: P(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function zr(e, r, t, n) {
  t || qa("useThemeClass", "cssVarsRef is not passed");
  const o = Qe(ur, null), a = o == null ? void 0 : o.mergedThemeHashRef, i = o == null ? void 0 : o.styleMountTarget, l = F(""), s = gn();
  let d;
  const u = `__${e}`, f = () => {
    let m = u;
    const g = r ? r.value : void 0, h = a == null ? void 0 : a.value;
    h && (m += `-${h}`), g && (m += `-${g}`);
    const {
      themeOverrides: C,
      builtinThemeOverrides: y
    } = n;
    C && (m += `-${zn(JSON.stringify(C))}`), y && (m += `-${zn(JSON.stringify(y))}`), l.value = m, d = () => {
      const b = t.value;
      let _ = "";
      for (const E in b)
        _ += `${E}: ${b[E]};`;
      $(`.${m}`, _).mount({
        id: m,
        ssr: s,
        parent: i
      }), d = void 0;
    };
  };
  return At(() => {
    f();
  }), {
    themeClass: l,
    onRender: () => {
      d == null || d();
    }
  };
}
const ji = "n-form-item";
function Io(e, {
  defaultSize: r = "medium",
  mergedSize: t,
  mergedDisabled: n
} = {}) {
  const o = Qe(ji, null);
  Nr(ji, null);
  const a = P(t ? () => t(o) : () => {
    const {
      size: s
    } = e;
    if (s) return s;
    if (o) {
      const {
        mergedSize: d
      } = o;
      if (d.value !== void 0)
        return d.value;
    }
    return r;
  }), i = P(n ? () => n(o) : () => {
    const {
      disabled: s
    } = e;
    return s !== void 0 ? s : o ? o.disabled.value : !1;
  }), l = P(() => {
    const {
      status: s
    } = e;
    return s || (o == null ? void 0 : o.mergedValidationStatus.value);
  });
  return fr(() => {
    o && o.restoreValidation();
  }), {
    mergedSizeRef: a,
    mergedDisabledRef: i,
    mergedStatusRef: l,
    nTriggerFormBlur() {
      o && o.handleContentBlur();
    },
    nTriggerFormChange() {
      o && o.handleContentChange();
    },
    nTriggerFormFocus() {
      o && o.handleContentFocus();
    },
    nTriggerFormInput() {
      o && o.handleContentInput();
    }
  };
}
const Lm = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (e) => `Please load all ${e}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    weekPlaceholder: "Select Week",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (e) => `Total ${e} items`,
    selected: (e) => `${e} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
    clear: "Clear"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipDownload: "Download",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
}, Vm = {
  name: "zh-CN",
  global: {
    undo: "撤销",
    redo: "重做",
    confirm: "确认",
    clear: "清除"
  },
  Popconfirm: {
    positiveText: "确认",
    negativeText: "取消"
  },
  Cascader: {
    placeholder: "请选择",
    loading: "加载中",
    loadingRequiredMessage: (e) => `加载全部 ${e} 的子节点后才可选中`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w周",
    clear: "清除",
    now: "此刻",
    confirm: "确认",
    selectTime: "选择时间",
    selectDate: "选择日期",
    datePlaceholder: "选择日期",
    datetimePlaceholder: "选择日期时间",
    monthPlaceholder: "选择月份",
    yearPlaceholder: "选择年份",
    quarterPlaceholder: "选择季度",
    weekPlaceholder: "选择周",
    startDatePlaceholder: "开始日期",
    endDatePlaceholder: "结束日期",
    startDatetimePlaceholder: "开始日期时间",
    endDatetimePlaceholder: "结束日期时间",
    startMonthPlaceholder: "开始月份",
    endMonthPlaceholder: "结束月份",
    monthBeforeYear: !1,
    firstDayOfWeek: 0,
    today: "今天"
  },
  DataTable: {
    checkTableAll: "选择全部表格数据",
    uncheckTableAll: "取消选择全部表格数据",
    confirm: "确认",
    clear: "重置"
  },
  LegacyTransfer: {
    sourceTitle: "源项",
    targetTitle: "目标项"
  },
  Transfer: {
    selectAll: "全选",
    clearAll: "清除",
    unselectAll: "取消全选",
    total: (e) => `共 ${e} 项`,
    selected: (e) => `已选 ${e} 项`
  },
  Empty: {
    description: "无数据"
  },
  Select: {
    placeholder: "请选择"
  },
  TimePicker: {
    placeholder: "请选择时间",
    positiveText: "确认",
    negativeText: "取消",
    now: "此刻",
    clear: "清除"
  },
  Pagination: {
    goto: "跳至",
    selectionSuffix: "页"
  },
  DynamicTags: {
    add: "添加"
  },
  Log: {
    loading: "加载中"
  },
  Input: {
    placeholder: "请输入"
  },
  InputNumber: {
    placeholder: "请输入"
  },
  DynamicInput: {
    create: "添加"
  },
  ThemeEditor: {
    title: "主题编辑器",
    clearAllVars: "清除全部变量",
    clearSearch: "清除搜索",
    filterCompName: "过滤组件名",
    filterVarName: "过滤变量名",
    import: "导入",
    export: "导出",
    restore: "恢复默认"
  },
  Image: {
    tipPrevious: "上一张（←）",
    tipNext: "下一张（→）",
    tipCounterclockwise: "向左旋转",
    tipClockwise: "向右旋转",
    tipZoomOut: "缩小",
    tipZoomIn: "放大",
    tipDownload: "下载",
    tipClose: "关闭（Esc）",
    tipOriginalSize: "缩放到原始尺寸"
  }
}, jm = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, Um = (e, r, t) => {
  let n;
  const o = jm[e];
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", String(r)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + "内" : n + "前" : n;
}, Ym = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Gm = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, qm = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Km = {
  date: en({
    formats: Ym,
    defaultWidth: "full"
  }),
  time: en({
    formats: Gm,
    defaultWidth: "full"
  }),
  dateTime: en({
    formats: qm,
    defaultWidth: "full"
  })
};
function Ui(e, r, t) {
  const n = "eeee p";
  return Bl(e, r, t) ? n : e.getTime() > r.getTime() ? "'下个'" + n : "'上个'" + n;
}
const Xm = {
  lastWeek: Ui,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Ui,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Qm = (e, r, t, n) => {
  const o = Xm[e];
  return typeof o == "function" ? o(r, t, n) : o;
}, Jm = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Zm = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, eh = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, th = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, rh = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, nh = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, oh = (e, r) => {
  const t = Number(e);
  switch (r == null ? void 0 : r.unit) {
    case "date":
      return t.toString() + "日";
    case "hour":
      return t.toString() + "时";
    case "minute":
      return t.toString() + "分";
    case "second":
      return t.toString() + "秒";
    default:
      return "第 " + t.toString();
  }
}, ah = {
  ordinalNumber: oh,
  era: tr({
    values: Jm,
    defaultWidth: "wide"
  }),
  quarter: tr({
    values: Zm,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tr({
    values: eh,
    defaultWidth: "wide"
  }),
  day: tr({
    values: th,
    defaultWidth: "wide"
  }),
  dayPeriod: tr({
    values: rh,
    defaultWidth: "wide",
    formattingValues: nh,
    defaultFormattingWidth: "wide"
  })
}, ih = /^(第\s*)?\d+(日|时|分|秒)?/i, lh = /\d+/i, sh = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, dh = {
  any: [/^(前)/i, /^(公元)/i]
}, ch = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, uh = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, fh = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, mh = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^一|1/i,
    /^二|2/i,
    /^三|3/i,
    /^四|4/i,
    /^五|5/i,
    /^六|6/i,
    /^七|7/i,
    /^八|8/i,
    /^九|9/i,
    /^十(?!(一|二))|10/i,
    /^十一|11/i,
    /^十二|12/i
  ]
}, hh = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, ph = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, gh = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, vh = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, Ch = {
  ordinalNumber: Rl({
    matchPattern: ih,
    parsePattern: lh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: rr({
    matchPatterns: sh,
    defaultMatchWidth: "wide",
    parsePatterns: dh,
    defaultParseWidth: "any"
  }),
  quarter: rr({
    matchPatterns: ch,
    defaultMatchWidth: "wide",
    parsePatterns: uh,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: rr({
    matchPatterns: fh,
    defaultMatchWidth: "wide",
    parsePatterns: mh,
    defaultParseWidth: "any"
  }),
  day: rr({
    matchPatterns: hh,
    defaultMatchWidth: "wide",
    parsePatterns: ph,
    defaultParseWidth: "any"
  }),
  dayPeriod: rr({
    matchPatterns: gh,
    defaultMatchWidth: "any",
    parsePatterns: vh,
    defaultParseWidth: "any"
  })
}, bh = {
  code: "zh-CN",
  formatDistance: Um,
  formatLong: Km,
  formatRelative: Qm,
  localize: ah,
  match: Ch,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, xh = {
  name: "en-US",
  locale: za
}, Sh = {
  name: "zh-CN",
  locale: bh
};
var hs = typeof global == "object" && global && global.Object === Object && global, yh = typeof self == "object" && self && self.Object === Object && self, vn = hs || yh || Function("return this")(), an = vn.Symbol, ps = Object.prototype, wh = ps.hasOwnProperty, Ph = ps.toString, Tn = an ? an.toStringTag : void 0;
function Dh(e) {
  var r = wh.call(e, Tn), t = e[Tn];
  try {
    e[Tn] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ph.call(e);
  return n && (r ? e[Tn] = t : delete e[Tn]), o;
}
var _h = Object.prototype, Th = _h.toString;
function Oh(e) {
  return Th.call(e);
}
var Mh = "[object Null]", Rh = "[object Undefined]", Yi = an ? an.toStringTag : void 0;
function Gn(e) {
  return e == null ? e === void 0 ? Rh : Mh : Yi && Yi in Object(e) ? Dh(e) : Oh(e);
}
function Cn(e) {
  return e != null && typeof e == "object";
}
var Eh = "[object Symbol]";
function Ih(e) {
  return typeof e == "symbol" || Cn(e) && Gn(e) == Eh;
}
function kh(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = Array(n); ++t < n; )
    o[t] = r(e[t], t, e);
  return o;
}
var So = Array.isArray, Gi = an ? an.prototype : void 0, qi = Gi ? Gi.toString : void 0;
function gs(e) {
  if (typeof e == "string")
    return e;
  if (So(e))
    return kh(e, gs) + "";
  if (Ih(e))
    return qi ? qi.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function Br(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function vs(e) {
  return e;
}
var Fh = "[object AsyncFunction]", Ah = "[object Function]", $h = "[object GeneratorFunction]", zh = "[object Proxy]";
function Ka(e) {
  if (!Br(e))
    return !1;
  var r = Gn(e);
  return r == Ah || r == $h || r == Fh || r == zh;
}
var ta = vn["__core-js_shared__"], Ki = function() {
  var e = /[^.]+$/.exec(ta && ta.keys && ta.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hh(e) {
  return !!Ki && Ki in e;
}
var Wh = Function.prototype, Nh = Wh.toString;
function Bh(e) {
  if (e != null) {
    try {
      return Nh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lh = /[\\^$.*+?()[\]{}|]/g, Vh = /^\[object .+?Constructor\]$/, jh = Function.prototype, Uh = Object.prototype, Yh = jh.toString, Gh = Uh.hasOwnProperty, qh = RegExp(
  "^" + Yh.call(Gh).replace(Lh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kh(e) {
  if (!Br(e) || Hh(e))
    return !1;
  var r = Ka(e) ? qh : Vh;
  return r.test(Bh(e));
}
function Xh(e, r) {
  return e == null ? void 0 : e[r];
}
function Xa(e, r) {
  var t = Xh(e, r);
  return Kh(t) ? t : void 0;
}
var Xi = Object.create, Qh = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!Br(r))
      return {};
    if (Xi)
      return Xi(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Jh(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
function Zh(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var ep = 800, tp = 16, rp = Date.now;
function np(e) {
  var r = 0, t = 0;
  return function() {
    var n = rp(), o = tp - (n - t);
    if (t = n, o > 0) {
      if (++r >= ep)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
function op(e) {
  return function() {
    return e;
  };
}
var yo = function() {
  try {
    var e = Xa(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ap = yo ? function(e, r) {
  return yo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: op(r),
    writable: !0
  });
} : vs, ip = np(ap), lp = 9007199254740991, sp = /^(?:0|[1-9]\d*)$/;
function Cs(e, r) {
  var t = typeof e;
  return r = r ?? lp, !!r && (t == "number" || t != "symbol" && sp.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function Qa(e, r, t) {
  r == "__proto__" && yo ? yo(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
function ko(e, r) {
  return e === r || e !== e && r !== r;
}
var dp = Object.prototype, cp = dp.hasOwnProperty;
function up(e, r, t) {
  var n = e[r];
  (!(cp.call(e, r) && ko(n, t)) || t === void 0 && !(r in e)) && Qa(e, r, t);
}
function fp(e, r, t, n) {
  var o = !t;
  t || (t = {});
  for (var a = -1, i = r.length; ++a < i; ) {
    var l = r[a], s = void 0;
    s === void 0 && (s = e[l]), o ? Qa(t, l, s) : up(t, l, s);
  }
  return t;
}
var Qi = Math.max;
function mp(e, r, t) {
  return r = Qi(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, o = -1, a = Qi(n.length - r, 0), i = Array(a); ++o < a; )
      i[o] = n[r + o];
    o = -1;
    for (var l = Array(r + 1); ++o < r; )
      l[o] = n[o];
    return l[r] = t(i), Jh(e, this, l);
  };
}
function hp(e, r) {
  return ip(mp(e, r, vs), e + "");
}
var pp = 9007199254740991;
function bs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pp;
}
function Ja(e) {
  return e != null && bs(e.length) && !Ka(e);
}
function gp(e, r, t) {
  if (!Br(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? Ja(t) && Cs(r, t.length) : n == "string" && r in t) ? ko(t[r], e) : !1;
}
function vp(e) {
  return hp(function(r, t) {
    var n = -1, o = t.length, a = o > 1 ? t[o - 1] : void 0, i = o > 2 ? t[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && gp(t[0], t[1], i) && (a = o < 3 ? void 0 : a, o = 1), r = Object(r); ++n < o; ) {
      var l = t[n];
      l && e(r, l, n, a);
    }
    return r;
  });
}
var Cp = Object.prototype;
function xs(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Cp;
  return e === t;
}
function bp(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var xp = "[object Arguments]";
function Ji(e) {
  return Cn(e) && Gn(e) == xp;
}
var Ss = Object.prototype, Sp = Ss.hasOwnProperty, yp = Ss.propertyIsEnumerable, Pa = Ji(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ji : function(e) {
  return Cn(e) && Sp.call(e, "callee") && !yp.call(e, "callee");
};
function wp() {
  return !1;
}
var ys = typeof exports == "object" && exports && !exports.nodeType && exports, Zi = ys && typeof module == "object" && module && !module.nodeType && module, Pp = Zi && Zi.exports === ys, el = Pp ? vn.Buffer : void 0, Dp = el ? el.isBuffer : void 0, ws = Dp || wp, _p = "[object Arguments]", Tp = "[object Array]", Op = "[object Boolean]", Mp = "[object Date]", Rp = "[object Error]", Ep = "[object Function]", Ip = "[object Map]", kp = "[object Number]", Fp = "[object Object]", Ap = "[object RegExp]", $p = "[object Set]", zp = "[object String]", Hp = "[object WeakMap]", Wp = "[object ArrayBuffer]", Np = "[object DataView]", Bp = "[object Float32Array]", Lp = "[object Float64Array]", Vp = "[object Int8Array]", jp = "[object Int16Array]", Up = "[object Int32Array]", Yp = "[object Uint8Array]", Gp = "[object Uint8ClampedArray]", qp = "[object Uint16Array]", Kp = "[object Uint32Array]", Ye = {};
Ye[Bp] = Ye[Lp] = Ye[Vp] = Ye[jp] = Ye[Up] = Ye[Yp] = Ye[Gp] = Ye[qp] = Ye[Kp] = !0;
Ye[_p] = Ye[Tp] = Ye[Wp] = Ye[Op] = Ye[Np] = Ye[Mp] = Ye[Rp] = Ye[Ep] = Ye[Ip] = Ye[kp] = Ye[Fp] = Ye[Ap] = Ye[$p] = Ye[zp] = Ye[Hp] = !1;
function Xp(e) {
  return Cn(e) && bs(e.length) && !!Ye[Gn(e)];
}
function Qp(e) {
  return function(r) {
    return e(r);
  };
}
var Ps = typeof exports == "object" && exports && !exports.nodeType && exports, An = Ps && typeof module == "object" && module && !module.nodeType && module, Jp = An && An.exports === Ps, ra = Jp && hs.process, tl = function() {
  try {
    var e = An && An.require && An.require("util").types;
    return e || ra && ra.binding && ra.binding("util");
  } catch {
  }
}(), rl = tl && tl.isTypedArray, Ds = rl ? Qp(rl) : Xp;
function Zp(e, r) {
  var t = So(e), n = !t && Pa(e), o = !t && !n && ws(e), a = !t && !n && !o && Ds(e), i = t || n || o || a, l = i ? bp(e.length, String) : [], s = l.length;
  for (var d in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Cs(d, s)) || l.push(d);
  return l;
}
function eg(e, r) {
  return function(t) {
    return e(r(t));
  };
}
function tg(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var rg = Object.prototype, ng = rg.hasOwnProperty;
function og(e) {
  if (!Br(e))
    return tg(e);
  var r = xs(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !ng.call(e, n)) || t.push(n);
  return t;
}
function _s(e) {
  return Ja(e) ? Zp(e) : og(e);
}
var Nn = Xa(Object, "create");
function ag() {
  this.__data__ = Nn ? Nn(null) : {}, this.size = 0;
}
function ig(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var lg = "__lodash_hash_undefined__", sg = Object.prototype, dg = sg.hasOwnProperty;
function cg(e) {
  var r = this.__data__;
  if (Nn) {
    var t = r[e];
    return t === lg ? void 0 : t;
  }
  return dg.call(r, e) ? r[e] : void 0;
}
var ug = Object.prototype, fg = ug.hasOwnProperty;
function mg(e) {
  var r = this.__data__;
  return Nn ? r[e] !== void 0 : fg.call(r, e);
}
var hg = "__lodash_hash_undefined__";
function pg(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Nn && r === void 0 ? hg : r, this;
}
function Hr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Hr.prototype.clear = ag;
Hr.prototype.delete = ig;
Hr.prototype.get = cg;
Hr.prototype.has = mg;
Hr.prototype.set = pg;
function gg() {
  this.__data__ = [], this.size = 0;
}
function Fo(e, r) {
  for (var t = e.length; t--; )
    if (ko(e[t][0], r))
      return t;
  return -1;
}
var vg = Array.prototype, Cg = vg.splice;
function bg(e) {
  var r = this.__data__, t = Fo(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Cg.call(r, t, 1), --this.size, !0;
}
function xg(e) {
  var r = this.__data__, t = Fo(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function Sg(e) {
  return Fo(this.__data__, e) > -1;
}
function yg(e, r) {
  var t = this.__data__, n = Fo(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
function mr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
mr.prototype.clear = gg;
mr.prototype.delete = bg;
mr.prototype.get = xg;
mr.prototype.has = Sg;
mr.prototype.set = yg;
var Ts = Xa(vn, "Map");
function wg() {
  this.size = 0, this.__data__ = {
    hash: new Hr(),
    map: new (Ts || mr)(),
    string: new Hr()
  };
}
function Pg(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function Ao(e, r) {
  var t = e.__data__;
  return Pg(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function Dg(e) {
  var r = Ao(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function _g(e) {
  return Ao(this, e).get(e);
}
function Tg(e) {
  return Ao(this, e).has(e);
}
function Og(e, r) {
  var t = Ao(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
function bn(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
bn.prototype.clear = wg;
bn.prototype.delete = Dg;
bn.prototype.get = _g;
bn.prototype.has = Tg;
bn.prototype.set = Og;
function Mg(e) {
  return e == null ? "" : gs(e);
}
var Os = eg(Object.getPrototypeOf, Object), Rg = "[object Object]", Eg = Function.prototype, Ig = Object.prototype, Ms = Eg.toString, kg = Ig.hasOwnProperty, Fg = Ms.call(Object);
function Ag(e) {
  if (!Cn(e) || Gn(e) != Rg)
    return !1;
  var r = Os(e);
  if (r === null)
    return !0;
  var t = kg.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Ms.call(t) == Fg;
}
function $g(e, r, t) {
  var n = -1, o = e.length;
  r < 0 && (r = -r > o ? 0 : o + r), t = t > o ? o : t, t < 0 && (t += o), o = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var a = Array(o); ++n < o; )
    a[n] = e[n + r];
  return a;
}
function zg(e, r, t) {
  var n = e.length;
  return t = t === void 0 ? n : t, !r && t >= n ? e : $g(e, r, t);
}
var Hg = "\\ud800-\\udfff", Wg = "\\u0300-\\u036f", Ng = "\\ufe20-\\ufe2f", Bg = "\\u20d0-\\u20ff", Lg = Wg + Ng + Bg, Vg = "\\ufe0e\\ufe0f", jg = "\\u200d", Ug = RegExp("[" + jg + Hg + Lg + Vg + "]");
function Rs(e) {
  return Ug.test(e);
}
function Yg(e) {
  return e.split("");
}
var Es = "\\ud800-\\udfff", Gg = "\\u0300-\\u036f", qg = "\\ufe20-\\ufe2f", Kg = "\\u20d0-\\u20ff", Xg = Gg + qg + Kg, Qg = "\\ufe0e\\ufe0f", Jg = "[" + Es + "]", Da = "[" + Xg + "]", _a = "\\ud83c[\\udffb-\\udfff]", Zg = "(?:" + Da + "|" + _a + ")", Is = "[^" + Es + "]", ks = "(?:\\ud83c[\\udde6-\\uddff]){2}", Fs = "[\\ud800-\\udbff][\\udc00-\\udfff]", ev = "\\u200d", As = Zg + "?", $s = "[" + Qg + "]?", tv = "(?:" + ev + "(?:" + [Is, ks, Fs].join("|") + ")" + $s + As + ")*", rv = $s + As + tv, nv = "(?:" + [Is + Da + "?", Da, ks, Fs, Jg].join("|") + ")", ov = RegExp(_a + "(?=" + _a + ")|" + nv + rv, "g");
function av(e) {
  return e.match(ov) || [];
}
function iv(e) {
  return Rs(e) ? av(e) : Yg(e);
}
function lv(e) {
  return function(r) {
    r = Mg(r);
    var t = Rs(r) ? iv(r) : void 0, n = t ? t[0] : r.charAt(0), o = t ? zg(t, 1).join("") : r.slice(1);
    return n[e]() + o;
  };
}
var sv = lv("toUpperCase");
function dv() {
  this.__data__ = new mr(), this.size = 0;
}
function cv(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function uv(e) {
  return this.__data__.get(e);
}
function fv(e) {
  return this.__data__.has(e);
}
var mv = 200;
function hv(e, r) {
  var t = this.__data__;
  if (t instanceof mr) {
    var n = t.__data__;
    if (!Ts || n.length < mv - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new bn(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
function xn(e) {
  var r = this.__data__ = new mr(e);
  this.size = r.size;
}
xn.prototype.clear = dv;
xn.prototype.delete = cv;
xn.prototype.get = uv;
xn.prototype.has = fv;
xn.prototype.set = hv;
var zs = typeof exports == "object" && exports && !exports.nodeType && exports, nl = zs && typeof module == "object" && module && !module.nodeType && module, pv = nl && nl.exports === zs, ol = pv ? vn.Buffer : void 0;
ol && ol.allocUnsafe;
function gv(e, r) {
  return e.slice();
}
var al = vn.Uint8Array;
function vv(e) {
  var r = new e.constructor(e.byteLength);
  return new al(r).set(new al(e)), r;
}
function Cv(e, r) {
  var t = vv(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
function bv(e) {
  return typeof e.constructor == "function" && !xs(e) ? Qh(Os(e)) : {};
}
function xv(e) {
  return function(r, t, n) {
    for (var o = -1, a = Object(r), i = n(r), l = i.length; l--; ) {
      var s = i[++o];
      if (t(a[s], s, a) === !1)
        break;
    }
    return r;
  };
}
var Sv = xv();
function Ta(e, r, t) {
  (t !== void 0 && !ko(e[r], t) || t === void 0 && !(r in e)) && Qa(e, r, t);
}
function yv(e) {
  return Cn(e) && Ja(e);
}
function Oa(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
function wv(e) {
  return fp(e, _s(e));
}
function Pv(e, r, t, n, o, a, i) {
  var l = Oa(e, t), s = Oa(r, t), d = i.get(s);
  if (d) {
    Ta(e, t, d);
    return;
  }
  var u = a ? a(l, s, t + "", e, r, i) : void 0, f = u === void 0;
  if (f) {
    var m = So(s), g = !m && ws(s), h = !m && !g && Ds(s);
    u = s, m || g || h ? So(l) ? u = l : yv(l) ? u = Zh(l) : g ? (f = !1, u = gv(s)) : h ? (f = !1, u = Cv(s)) : u = [] : Ag(s) || Pa(s) ? (u = l, Pa(l) ? u = wv(l) : (!Br(l) || Ka(l)) && (u = bv(s))) : f = !1;
  }
  f && (i.set(s, u), o(u, s, n, a, i), i.delete(s)), Ta(e, t, u);
}
function Hs(e, r, t, n, o) {
  e !== r && Sv(r, function(a, i) {
    if (o || (o = new xn()), Br(a))
      Pv(e, r, i, t, Hs, n, o);
    else {
      var l = n ? n(Oa(e, i), a, i + "", e, r, o) : void 0;
      l === void 0 && (l = a), Ta(e, i, l);
    }
  }, _s);
}
var Mn = vp(function(e, r, t) {
  Hs(e, r, t);
});
function qn(e) {
  const {
    mergedLocaleRef: r,
    mergedDateLocaleRef: t
  } = Qe(ur, null) || {}, n = P(() => {
    var a, i;
    return (i = (a = r == null ? void 0 : r.value) === null || a === void 0 ? void 0 : a[e]) !== null && i !== void 0 ? i : Lm[e];
  });
  return {
    dateLocaleRef: P(() => {
      var a;
      return (a = t == null ? void 0 : t.value) !== null && a !== void 0 ? a : xh;
    }),
    localeRef: n
  };
}
const Bn = "naive-ui-style";
function Za(e, r, t) {
  if (!r) return;
  const n = gn(), o = P(() => {
    const {
      value: l
    } = r;
    if (!l)
      return;
    const s = l[e];
    if (s)
      return s;
  }), a = Qe(ur, null), i = () => {
    At(() => {
      const {
        value: l
      } = t, s = `${l}${e}Rtl`;
      if (Xf(s, n)) return;
      const {
        value: d
      } = o;
      d && d.style.mount({
        id: s,
        head: !0,
        anchorMetaName: Bn,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: n,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return n ? i() : _o(i), o;
}
const Lr = {
  fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
  fontWeight: "400",
  fontWeightStrong: "500",
  cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
  cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
  cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
  borderRadius: "3px",
  borderRadiusSmall: "2px",
  fontSize: "14px",
  fontSizeMini: "12px",
  fontSizeTiny: "12px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  lineHeight: "1.6",
  heightMini: "16px",
  // private now, it's too small
  heightTiny: "22px",
  heightSmall: "28px",
  heightMedium: "34px",
  heightLarge: "40px",
  heightHuge: "46px"
}, {
  fontSize: Dv,
  fontFamily: _v,
  lineHeight: Tv
} = Lr, Ws = $("body", `
 margin: 0;
 font-size: ${Dv};
 font-family: ${_v};
 line-height: ${Tv};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [$("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var Ov = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function Kn(e, r, t) {
  if (!r) {
    Ov.NODE_ENV !== "production" && qa("use-style", "No style is specified.");
    return;
  }
  const n = gn(), o = Qe(ur, null), a = () => {
    const i = t.value;
    r.mount({
      id: i === void 0 ? e : i + e,
      head: !0,
      anchorMetaName: Bn,
      props: {
        bPrefix: i ? `.${i}-` : void 0
      },
      ssr: n,
      parent: o == null ? void 0 : o.styleMountTarget
    }), o != null && o.preflightStyleDisabled || Ws.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Bn,
      ssr: n,
      parent: o == null ? void 0 : o.styleMountTarget
    });
  };
  n ? a() : _o(a);
}
function Jt(e, r, t, n, o, a) {
  const i = gn(), l = Qe(ur, null);
  if (t) {
    const d = () => {
      const u = a == null ? void 0 : a.value;
      t.mount({
        id: u === void 0 ? r : u + r,
        head: !0,
        props: {
          bPrefix: u ? `.${u}-` : void 0
        },
        anchorMetaName: Bn,
        ssr: i,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || Ws.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Bn,
        ssr: i,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    i ? d() : _o(d);
  }
  return P(() => {
    var d;
    const {
      theme: {
        common: u,
        self: f,
        peers: m = {}
      } = {},
      themeOverrides: g = {},
      builtinThemeOverrides: h = {}
    } = o, {
      common: C,
      peers: y
    } = g, {
      common: b = void 0,
      [e]: {
        common: _ = void 0,
        self: E = void 0,
        peers: O = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: N = void 0,
      [e]: V = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: p,
      peers: T = {}
    } = V, I = Mn({}, u || _ || b || n.common, N, p, C), U = Mn(
      // {}, executed every time, no need for empty obj
      (d = f || E || n.self) === null || d === void 0 ? void 0 : d(I),
      h,
      V,
      g
    );
    return {
      common: I,
      self: U,
      peers: Mn({}, n.peers, O, m),
      peerOverrides: Mn({}, h.peers, T, y)
    };
  });
}
Jt.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Mv = oe("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [$("svg", `
 height: 1em;
 width: 1em;
 `)]), xr = Ce({
  name: "BaseIcon",
  props: {
    role: String,
    ariaLabel: String,
    ariaDisabled: {
      type: Boolean,
      default: void 0
    },
    ariaHidden: {
      type: Boolean,
      default: void 0
    },
    clsPrefix: {
      type: String,
      required: !0
    },
    onClick: Function,
    onMousedown: Function,
    onMouseup: Function
  },
  setup(e) {
    Kn("-base-icon", Mv, Ge(e, "clsPrefix"));
  },
  render() {
    return c("i", {
      class: `${this.clsPrefix}-base-icon`,
      onClick: this.onClick,
      onMousedown: this.onMousedown,
      onMouseup: this.onMouseup,
      role: this.role,
      "aria-label": this.ariaLabel,
      "aria-hidden": this.ariaHidden,
      "aria-disabled": this.ariaDisabled
    }, this.$slots);
  }
}), ei = Ce({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: r
  }) {
    const t = Mo();
    return () => c($r, {
      name: "icon-switch-transition",
      appear: t.value
    }, r);
  }
});
function $o(e, r) {
  const t = Ce({
    render() {
      return r();
    }
  });
  return Ce({
    name: sv(e),
    setup() {
      var n;
      const o = (n = Qe(ur, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var a;
        const i = (a = o == null ? void 0 : o.value) === null || a === void 0 ? void 0 : a[e];
        return i ? i() : c(t, null);
      };
    }
  });
}
const ln = Ce({
  name: "Backward",
  render() {
    return c("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, c("path", {
      d: "M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",
      fill: "currentColor"
    }));
  }
}), Rv = Ce({
  name: "ChevronDown",
  render() {
    return c("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, c("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), Ev = $o("clear", () => c("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, c("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, c("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, c("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), il = $o("date", () => c("svg", {
  width: "28px",
  height: "28px",
  viewBox: "0 0 28 28",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, c("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, c("g", {
  "fill-rule": "nonzero"
}, c("path", {
  d: "M21.75,3 C23.5449254,3 25,4.45507456 25,6.25 L25,21.75 C25,23.5449254 23.5449254,25 21.75,25 L6.25,25 C4.45507456,25 3,23.5449254 3,21.75 L3,6.25 C3,4.45507456 4.45507456,3 6.25,3 L21.75,3 Z M23.5,9.503 L4.5,9.503 L4.5,21.75 C4.5,22.7164983 5.28350169,23.5 6.25,23.5 L21.75,23.5 C22.7164983,23.5 23.5,22.7164983 23.5,21.75 L23.5,9.503 Z M21.75,4.5 L6.25,4.5 C5.28350169,4.5 4.5,5.28350169 4.5,6.25 L4.5,8.003 L23.5,8.003 L23.5,6.25 C23.5,5.28350169 22.7164983,4.5 21.75,4.5 Z"
}))))), Iv = Ce({
  name: "Eye",
  render() {
    return c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, c("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), c("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), kv = Ce({
  name: "EyeOff",
  render() {
    return c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, c("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), c("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), c("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), c("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), c("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), sn = Ce({
  name: "FastBackward",
  render() {
    return c("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, c("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, c("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, c("path", {
      d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
    }))));
  }
}), dn = Ce({
  name: "FastForward",
  render() {
    return c("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, c("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, c("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, c("path", {
      d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
    }))));
  }
}), cn = Ce({
  name: "Forward",
  render() {
    return c("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, c("path", {
      d: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",
      fill: "currentColor"
    }));
  }
}), Fv = $o("time", () => c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, c("path", {
  d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z",
  style: `
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      `
}), c("polyline", {
  points: "256 128 256 272 352 272",
  style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `
}))), Av = $o("to", () => c("svg", {
  viewBox: "0 0 20 20",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, c("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, c("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, c("path", {
  d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
}))))), {
  cubicBezierEaseInOut: $v
} = Lr;
function wo({
  originalTransform: e = "",
  left: r = 0,
  top: t = 0,
  transition: n = `all .3s ${$v} !important`
} = {}) {
  return [$("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: r,
    top: t,
    opacity: 0
  }), $("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: r,
    top: t,
    opacity: 1
  }), $("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: r,
    top: t,
    transition: n
  })];
}
const zv = oe("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [$(">", [B("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [$("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), $("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), B("placeholder", `
 display: flex;
 `), B("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [wo({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ma = Ce({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    show: Boolean,
    onClear: Function
  },
  setup(e) {
    return Kn("-base-clear", zv, Ge(e, "clsPrefix")), {
      handleMouseDown(r) {
        r.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return c("div", {
      class: `${e}-base-clear`
    }, c(ei, null, {
      default: () => {
        var r, t;
        return this.show ? c("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, ke(this.$slots.icon, () => [c(xr, {
          clsPrefix: e
        }, {
          default: () => c(Ev, null)
        })])) : c("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (t = (r = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(r));
      }
    }));
  }
}), Hv = Ce({
  name: "FadeInExpandTransition",
  props: {
    appear: Boolean,
    group: Boolean,
    mode: String,
    onLeave: Function,
    onAfterLeave: Function,
    onAfterEnter: Function,
    width: Boolean,
    // reverse mode is only used in tree
    // it make it from expanded to collapsed after mounted
    reverse: Boolean
  },
  setup(e, {
    slots: r
  }) {
    function t(l) {
      e.width ? l.style.maxWidth = `${l.offsetWidth}px` : l.style.maxHeight = `${l.offsetHeight}px`, l.offsetWidth;
    }
    function n(l) {
      e.width ? l.style.maxWidth = "0" : l.style.maxHeight = "0", l.offsetWidth;
      const {
        onLeave: s
      } = e;
      s && s();
    }
    function o(l) {
      e.width ? l.style.maxWidth = "" : l.style.maxHeight = "";
      const {
        onAfterLeave: s
      } = e;
      s && s();
    }
    function a(l) {
      if (l.style.transition = "none", e.width) {
        const s = l.offsetWidth;
        l.style.maxWidth = "0", l.offsetWidth, l.style.transition = "", l.style.maxWidth = `${s}px`;
      } else if (e.reverse)
        l.style.maxHeight = `${l.offsetHeight}px`, l.offsetHeight, l.style.transition = "", l.style.maxHeight = "0";
      else {
        const s = l.offsetHeight;
        l.style.maxHeight = "0", l.offsetWidth, l.style.transition = "", l.style.maxHeight = `${s}px`;
      }
      l.offsetWidth;
    }
    function i(l) {
      var s;
      e.width ? l.style.maxWidth = "" : e.reverse || (l.style.maxHeight = ""), (s = e.onAfterEnter) === null || s === void 0 || s.call(e);
    }
    return () => {
      const {
        group: l,
        width: s,
        appear: d,
        mode: u
      } = e, f = l ? Xd : $r, m = {
        name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: d,
        onEnter: a,
        onAfterEnter: i,
        onBeforeLeave: t,
        onLeave: n,
        onAfterLeave: o
      };
      return l || (m.mode = u), c(f, m, r);
    };
  }
}), Vr = Ce({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(e) {
    return () => c("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: e.onFocus,
      onBlur: e.onBlur
    });
  }
}), Wv = $([$("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), oe("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [B("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [wo()]), B("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [wo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), B("container", `
 animation: rotator 3s linear infinite both;
 `, [B("icon", `
 height: 1em;
 width: 1em;
 `)])])]), na = "1.6s", Nv = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Ns = Ce({
  name: "BaseLoading",
  props: Object.assign({
    clsPrefix: {
      type: String,
      required: !0
    },
    show: {
      type: Boolean,
      default: !0
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    }
  }, Nv),
  setup(e) {
    Kn("-base-loading", Wv, Ge(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: r,
      strokeWidth: t,
      stroke: n,
      scale: o
    } = this, a = r / o;
    return c("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, c(ei, null, {
      default: () => this.show ? c("div", {
        key: "icon",
        class: `${e}-base-loading__transition-wrapper`
      }, c("div", {
        class: `${e}-base-loading__container`
      }, c("svg", {
        class: `${e}-base-loading__icon`,
        viewBox: `0 0 ${2 * a} ${2 * a}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: n
        }
      }, c("g", null, c("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};270 ${a} ${a}`,
        begin: "0s",
        dur: na,
        fill: "freeze",
        repeatCount: "indefinite"
      }), c("circle", {
        class: `${e}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": t,
        "stroke-linecap": "round",
        cx: a,
        cy: a,
        r: r - t / 2,
        "stroke-dasharray": 5.67 * r,
        "stroke-dashoffset": 18.48 * r
      }, c("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,
        begin: "0s",
        dur: na,
        fill: "freeze",
        repeatCount: "indefinite"
      }), c("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * r};${1.42 * r};${5.67 * r}`,
        begin: "0s",
        dur: na,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : c("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: ll
} = Lr;
function Bv({
  name: e = "fade-in",
  enterDuration: r = "0.2s",
  leaveDuration: t = "0.2s",
  enterCubicBezier: n = ll,
  leaveCubicBezier: o = ll
} = {}) {
  return [$(`&.${e}-transition-enter-active`, {
    transition: `all ${r} ${n}!important`
  }), $(`&.${e}-transition-leave-active`, {
    transition: `all ${t} ${o}!important`
  }), $(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), $(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const X = {
  neutralBase: "#000",
  neutralInvertBase: "#fff",
  neutralTextBase: "#fff",
  neutralPopover: "rgb(72, 72, 78)",
  neutralCard: "rgb(24, 24, 28)",
  neutralModal: "rgb(44, 44, 50)",
  neutralBody: "rgb(16, 16, 20)",
  alpha1: "0.9",
  alpha2: "0.82",
  alpha3: "0.52",
  alpha4: "0.38",
  alpha5: "0.28",
  alphaClose: "0.52",
  alphaDisabled: "0.38",
  alphaDisabledInput: "0.06",
  alphaPending: "0.09",
  alphaTablePending: "0.06",
  alphaTableStriped: "0.05",
  alphaPressed: "0.05",
  alphaAvatar: "0.18",
  alphaRail: "0.2",
  alphaProgressRail: "0.12",
  alphaBorder: "0.24",
  alphaDivider: "0.09",
  alphaInput: "0.1",
  alphaAction: "0.06",
  alphaTab: "0.04",
  alphaScrollbar: "0.2",
  alphaScrollbarHover: "0.3",
  alphaCode: "0.12",
  alphaTag: "0.2",
  // primary
  primaryHover: "#7fe7c4",
  primaryDefault: "#63e2b7",
  primaryActive: "#5acea7",
  primarySuppl: "rgb(42, 148, 125)",
  // info
  infoHover: "#8acbec",
  infoDefault: "#70c0e8",
  infoActive: "#66afd3",
  infoSuppl: "rgb(56, 137, 197)",
  // error
  errorHover: "#e98b8b",
  errorDefault: "#e88080",
  errorActive: "#e57272",
  errorSuppl: "rgb(208, 58, 82)",
  // warning
  warningHover: "#f5d599",
  warningDefault: "#f2c97d",
  warningActive: "#e6c260",
  warningSuppl: "rgb(240, 138, 0)",
  // success
  successHover: "#7fe7c4",
  successDefault: "#63e2b7",
  successActive: "#5acea7",
  successSuppl: "rgb(42, 148, 125)"
}, Lv = cr(X.neutralBase), Bs = cr(X.neutralInvertBase), Vv = `rgba(${Bs.slice(0, 3).join(", ")}, `;
function Re(e) {
  return `${Vv + String(e)})`;
}
function jv(e) {
  const r = Array.from(Bs);
  return r[3] = Number(e), re(Lv, r);
}
const W = Object.assign(Object.assign({
  name: "common"
}, Lr), {
  baseColor: X.neutralBase,
  // primary color
  primaryColor: X.primaryDefault,
  primaryColorHover: X.primaryHover,
  primaryColorPressed: X.primaryActive,
  primaryColorSuppl: X.primarySuppl,
  // info color
  infoColor: X.infoDefault,
  infoColorHover: X.infoHover,
  infoColorPressed: X.infoActive,
  infoColorSuppl: X.infoSuppl,
  // success color
  successColor: X.successDefault,
  successColorHover: X.successHover,
  successColorPressed: X.successActive,
  successColorSuppl: X.successSuppl,
  // warning color
  warningColor: X.warningDefault,
  warningColorHover: X.warningHover,
  warningColorPressed: X.warningActive,
  warningColorSuppl: X.warningSuppl,
  // error color
  errorColor: X.errorDefault,
  errorColorHover: X.errorHover,
  errorColorPressed: X.errorActive,
  errorColorSuppl: X.errorSuppl,
  // text color
  textColorBase: X.neutralTextBase,
  textColor1: Re(X.alpha1),
  textColor2: Re(X.alpha2),
  textColor3: Re(X.alpha3),
  // textColor4: overlay(base.alpha4), // disabled, placeholder, icon
  // textColor5: overlay(base.alpha5),
  textColorDisabled: Re(X.alpha4),
  placeholderColor: Re(X.alpha4),
  placeholderColorDisabled: Re(X.alpha5),
  iconColor: Re(X.alpha4),
  iconColorDisabled: Re(X.alpha5),
  iconColorHover: Re(Number(X.alpha4) * 1.25),
  iconColorPressed: Re(Number(X.alpha4) * 0.8),
  opacity1: X.alpha1,
  opacity2: X.alpha2,
  opacity3: X.alpha3,
  opacity4: X.alpha4,
  opacity5: X.alpha5,
  dividerColor: Re(X.alphaDivider),
  borderColor: Re(X.alphaBorder),
  // close
  closeIconColorHover: Re(Number(X.alphaClose)),
  closeIconColor: Re(Number(X.alphaClose)),
  closeIconColorPressed: Re(Number(X.alphaClose)),
  closeColorHover: "rgba(255, 255, 255, .12)",
  closeColorPressed: "rgba(255, 255, 255, .08)",
  // clear
  clearColor: Re(X.alpha4),
  clearColorHover: st(Re(X.alpha4), {
    alpha: 1.25
  }),
  clearColorPressed: st(Re(X.alpha4), {
    alpha: 0.8
  }),
  scrollbarColor: Re(X.alphaScrollbar),
  scrollbarColorHover: Re(X.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Re(X.alphaProgressRail),
  railColor: Re(X.alphaRail),
  popoverColor: X.neutralPopover,
  tableColor: X.neutralCard,
  cardColor: X.neutralCard,
  modalColor: X.neutralModal,
  bodyColor: X.neutralBody,
  tagColor: jv(X.alphaTag),
  avatarColor: Re(X.alphaAvatar),
  invertedColor: X.neutralBase,
  inputColor: Re(X.alphaInput),
  codeColor: Re(X.alphaCode),
  tabColor: Re(X.alphaTab),
  actionColor: Re(X.alphaAction),
  tableHeaderColor: Re(X.alphaAction),
  hoverColor: Re(X.alphaPending),
  tableColorHover: Re(X.alphaTablePending),
  tableColorStriped: Re(X.alphaTableStriped),
  pressedColor: Re(X.alphaPressed),
  opacityDisabled: X.alphaDisabled,
  inputColorDisabled: Re(X.alphaDisabledInput),
  buttonColor2: "rgba(255, 255, 255, .08)",
  buttonColor2Hover: "rgba(255, 255, 255, .12)",
  buttonColor2Pressed: "rgba(255, 255, 255, .08)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), ce = {
  neutralBase: "#FFF",
  neutralInvertBase: "#000",
  neutralTextBase: "#000",
  neutralPopover: "#fff",
  neutralCard: "#fff",
  neutralModal: "#fff",
  neutralBody: "#fff",
  alpha1: "0.82",
  alpha2: "0.72",
  alpha3: "0.38",
  alpha4: "0.24",
  // disabled text, placeholder, icon
  alpha5: "0.18",
  // disabled placeholder
  alphaClose: "0.6",
  alphaDisabled: "0.5",
  alphaDisabledInput: "0.02",
  alphaPending: "0.05",
  alphaTablePending: "0.02",
  alphaPressed: "0.07",
  alphaAvatar: "0.2",
  alphaRail: "0.14",
  alphaProgressRail: ".08",
  alphaBorder: "0.12",
  alphaDivider: "0.06",
  alphaInput: "0",
  alphaAction: "0.02",
  alphaTab: "0.04",
  alphaScrollbar: "0.25",
  alphaScrollbarHover: "0.4",
  alphaCode: "0.05",
  alphaTag: "0.02",
  // primary
  primaryHover: "#36ad6a",
  primaryDefault: "#18a058",
  primaryActive: "#0c7a43",
  primarySuppl: "#36ad6a",
  // info
  infoHover: "#4098fc",
  infoDefault: "#2080f0",
  infoActive: "#1060c9",
  infoSuppl: "#4098fc",
  // error
  errorHover: "#de576d",
  errorDefault: "#d03050",
  errorActive: "#ab1f3f",
  errorSuppl: "#de576d",
  // warning
  warningHover: "#fcb040",
  warningDefault: "#f0a020",
  warningActive: "#c97c10",
  warningSuppl: "#fcb040",
  // success
  successHover: "#36ad6a",
  successDefault: "#18a058",
  successActive: "#0c7a43",
  successSuppl: "#36ad6a"
}, Uv = cr(ce.neutralBase), Ls = cr(ce.neutralInvertBase), Yv = `rgba(${Ls.slice(0, 3).join(", ")}, `;
function sl(e) {
  return `${Yv + String(e)})`;
}
function yt(e) {
  const r = Array.from(Ls);
  return r[3] = Number(e), re(Uv, r);
}
const Sn = Object.assign(Object.assign({
  name: "common"
}, Lr), {
  baseColor: ce.neutralBase,
  // primary color
  primaryColor: ce.primaryDefault,
  primaryColorHover: ce.primaryHover,
  primaryColorPressed: ce.primaryActive,
  primaryColorSuppl: ce.primarySuppl,
  // info color
  infoColor: ce.infoDefault,
  infoColorHover: ce.infoHover,
  infoColorPressed: ce.infoActive,
  infoColorSuppl: ce.infoSuppl,
  // success color
  successColor: ce.successDefault,
  successColorHover: ce.successHover,
  successColorPressed: ce.successActive,
  successColorSuppl: ce.successSuppl,
  // warning color
  warningColor: ce.warningDefault,
  warningColorHover: ce.warningHover,
  warningColorPressed: ce.warningActive,
  warningColorSuppl: ce.warningSuppl,
  // error color
  errorColor: ce.errorDefault,
  errorColorHover: ce.errorHover,
  errorColorPressed: ce.errorActive,
  errorColorSuppl: ce.errorSuppl,
  // text color
  textColorBase: ce.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: yt(ce.alpha4),
  placeholderColor: yt(ce.alpha4),
  placeholderColorDisabled: yt(ce.alpha5),
  iconColor: yt(ce.alpha4),
  iconColorHover: st(yt(ce.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: st(yt(ce.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: yt(ce.alpha5),
  opacity1: ce.alpha1,
  opacity2: ce.alpha2,
  opacity3: ce.alpha3,
  opacity4: ce.alpha4,
  opacity5: ce.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: yt(Number(ce.alphaClose)),
  closeIconColorHover: yt(Number(ce.alphaClose)),
  closeIconColorPressed: yt(Number(ce.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: yt(ce.alpha4),
  clearColorHover: st(yt(ce.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: st(yt(ce.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: sl(ce.alphaScrollbar),
  scrollbarColorHover: sl(ce.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: yt(ce.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ce.neutralPopover,
  tableColor: ce.neutralCard,
  cardColor: ce.neutralCard,
  modalColor: ce.neutralModal,
  bodyColor: ce.neutralBody,
  tagColor: "#eee",
  avatarColor: yt(ce.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: yt(ce.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: ce.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Gv = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Vs(e) {
  const {
    scrollbarColor: r,
    scrollbarColorHover: t,
    scrollbarHeight: n,
    scrollbarWidth: o,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Gv), {
    height: n,
    width: o,
    borderRadius: a,
    color: r,
    colorHover: t
  });
}
const ti = {
  name: "Scrollbar",
  common: Sn,
  self: Vs
}, $t = {
  name: "Scrollbar",
  common: W,
  self: Vs
}, qv = oe("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [$(">", [oe("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [$("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), $(">", [
  // We can't set overflow hidden since it affects positioning.
  oe("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), $(">, +", [oe("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [ae("horizontal", `
 height: var(--n-scrollbar-height);
 `, [$(">", [B("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), ae("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), ae("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), ae("vertical", `
 width: var(--n-scrollbar-width);
 `, [$(">", [B("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), ae("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), ae("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), ae("disabled", [$(">", [B("scrollbar", "pointer-events: none;")])]), $(">", [B("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Bv(), $("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Kv = Object.assign(Object.assign({}, Jt.props), {
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: !0
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean,
  yPlacement: {
    type: String,
    default: "right"
  },
  xPlacement: {
    type: String,
    default: "bottom"
  }
}), Xt = Ce({
  name: "Scrollbar",
  props: Kv,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: t,
      mergedRtlRef: n
    } = Yn(e), o = Za("Scrollbar", n, r), a = F(null), i = F(null), l = F(null), s = F(null), d = F(null), u = F(null), f = F(null), m = F(null), g = F(null), h = F(null), C = F(null), y = F(0), b = F(0), _ = F(!1), E = F(!1);
    let O = !1, N = !1, V, p, T = 0, I = 0, U = 0, Y = 0;
    const H = Tf(), S = Jt("Scrollbar", "-scrollbar", qv, ti, e, r), A = P(() => {
      const {
        value: k
      } = m, {
        value: Z
      } = u, {
        value: le
      } = h;
      return k === null || Z === null || le === null ? 0 : Math.min(k, le * k / Z + Co(S.value.self.width) * 1.5);
    }), J = P(() => `${A.value}px`), ne = P(() => {
      const {
        value: k
      } = g, {
        value: Z
      } = f, {
        value: le
      } = C;
      return k === null || Z === null || le === null ? 0 : le * k / Z + Co(S.value.self.height) * 1.5;
    }), K = P(() => `${ne.value}px`), he = P(() => {
      const {
        value: k
      } = m, {
        value: Z
      } = y, {
        value: le
      } = u, {
        value: Oe
      } = h;
      if (k === null || le === null || Oe === null)
        return 0;
      {
        const Ie = le - k;
        return Ie ? Z / Ie * (Oe - A.value) : 0;
      }
    }), ve = P(() => `${he.value}px`), de = P(() => {
      const {
        value: k
      } = g, {
        value: Z
      } = b, {
        value: le
      } = f, {
        value: Oe
      } = C;
      if (k === null || le === null || Oe === null)
        return 0;
      {
        const Ie = le - k;
        return Ie ? Z / Ie * (Oe - ne.value) : 0;
      }
    }), Te = P(() => `${de.value}px`), Fe = P(() => {
      const {
        value: k
      } = m, {
        value: Z
      } = u;
      return k !== null && Z !== null && Z > k;
    }), et = P(() => {
      const {
        value: k
      } = g, {
        value: Z
      } = f;
      return k !== null && Z !== null && Z > k;
    }), be = P(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || _.value;
    }), we = P(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || E.value;
    }), pe = P(() => {
      const {
        container: k
      } = e;
      return k ? k() : i.value;
    }), Be = P(() => {
      const {
        content: k
      } = e;
      return k ? k() : l.value;
    }), nt = (k, Z) => {
      if (!e.scrollable) return;
      if (typeof k == "number") {
        at(k, Z ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: le,
        top: Oe,
        index: Ie,
        elSize: w,
        position: G,
        behavior: te,
        el: fe,
        debounce: Ke = !0
      } = k;
      (le !== void 0 || Oe !== void 0) && at(le ?? 0, Oe ?? 0, 0, !1, te), fe !== void 0 ? at(0, fe.offsetTop, fe.offsetHeight, Ke, te) : Ie !== void 0 && w !== void 0 ? at(0, Ie * w, w, Ke, te) : G === "bottom" ? at(0, Number.MAX_SAFE_INTEGER, 0, !1, te) : G === "top" && at(0, 0, 0, !1, te);
    }, me = Fm(() => {
      e.container || nt({
        top: y.value,
        left: b.value
      });
    }), bt = () => {
      me.isDeactivated || it();
    }, ye = (k) => {
      if (me.isDeactivated) return;
      const {
        onResize: Z
      } = e;
      Z && Z(k), it();
    }, ot = (k, Z) => {
      if (!e.scrollable) return;
      const {
        value: le
      } = pe;
      le && (typeof k == "object" ? le.scrollBy(k) : le.scrollBy(k, Z || 0));
    };
    function at(k, Z, le, Oe, Ie) {
      const {
        value: w
      } = pe;
      if (w) {
        if (Oe) {
          const {
            scrollTop: G,
            offsetHeight: te
          } = w;
          if (Z > G) {
            Z + le <= G + te || w.scrollTo({
              left: k,
              top: Z + le - te,
              behavior: Ie
            });
            return;
          }
        }
        w.scrollTo({
          left: k,
          top: Z,
          behavior: Ie
        });
      }
    }
    function It() {
      Nt(), Me(), it();
    }
    function Ht() {
      Dt();
    }
    function Dt() {
      Wt(), xt();
    }
    function Wt() {
      p !== void 0 && window.clearTimeout(p), p = window.setTimeout(() => {
        E.value = !1;
      }, e.duration);
    }
    function xt() {
      V !== void 0 && window.clearTimeout(V), V = window.setTimeout(() => {
        _.value = !1;
      }, e.duration);
    }
    function Nt() {
      V !== void 0 && window.clearTimeout(V), _.value = !0;
    }
    function Me() {
      p !== void 0 && window.clearTimeout(p), E.value = !0;
    }
    function He(k) {
      const {
        onScroll: Z
      } = e;
      Z && Z(k), tt();
    }
    function tt() {
      const {
        value: k
      } = pe;
      k && (y.value = k.scrollTop, b.value = k.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function Kt() {
      const {
        value: k
      } = Be;
      k && (u.value = k.offsetHeight, f.value = k.offsetWidth);
      const {
        value: Z
      } = pe;
      Z && (m.value = Z.offsetHeight, g.value = Z.offsetWidth);
      const {
        value: le
      } = d, {
        value: Oe
      } = s;
      le && (C.value = le.offsetWidth), Oe && (h.value = Oe.offsetHeight);
    }
    function _t() {
      const {
        value: k
      } = pe;
      k && (y.value = k.scrollTop, b.value = k.scrollLeft * (o != null && o.value ? -1 : 1), m.value = k.offsetHeight, g.value = k.offsetWidth, u.value = k.scrollHeight, f.value = k.scrollWidth);
      const {
        value: Z
      } = d, {
        value: le
      } = s;
      Z && (C.value = Z.offsetWidth), le && (h.value = le.offsetHeight);
    }
    function it() {
      e.scrollable && (e.useUnifiedContainer ? _t() : (Kt(), tt()));
    }
    function ht(k) {
      var Z;
      return !(!((Z = a.value) === null || Z === void 0) && Z.contains(Oo(k)));
    }
    function M(k) {
      k.preventDefault(), k.stopPropagation(), N = !0, Rt("mousemove", window, ue, !0), Rt("mouseup", window, Ee, !0), I = b.value, U = o != null && o.value ? window.innerWidth - k.clientX : k.clientX;
    }
    function ue(k) {
      if (!N) return;
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p);
      const {
        value: Z
      } = g, {
        value: le
      } = f, {
        value: Oe
      } = ne;
      if (Z === null || le === null) return;
      const w = (o != null && o.value ? window.innerWidth - k.clientX - U : k.clientX - U) * (le - Z) / (Z - Oe), G = le - Z;
      let te = I + w;
      te = Math.min(G, te), te = Math.max(te, 0);
      const {
        value: fe
      } = pe;
      if (fe) {
        fe.scrollLeft = te * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Ke
        } = e;
        Ke && Ke(te);
      }
    }
    function Ee(k) {
      k.preventDefault(), k.stopPropagation(), pt("mousemove", window, ue, !0), pt("mouseup", window, Ee, !0), N = !1, it(), ht(k) && Dt();
    }
    function ir(k) {
      k.preventDefault(), k.stopPropagation(), O = !0, Rt("mousemove", window, Bt, !0), Rt("mouseup", window, qe, !0), T = y.value, Y = k.clientY;
    }
    function Bt(k) {
      if (!O) return;
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p);
      const {
        value: Z
      } = m, {
        value: le
      } = u, {
        value: Oe
      } = A;
      if (Z === null || le === null) return;
      const w = (k.clientY - Y) * (le - Z) / (Z - Oe), G = le - Z;
      let te = T + w;
      te = Math.min(G, te), te = Math.max(te, 0);
      const {
        value: fe
      } = pe;
      fe && (fe.scrollTop = te);
    }
    function qe(k) {
      k.preventDefault(), k.stopPropagation(), pt("mousemove", window, Bt, !0), pt("mouseup", window, qe, !0), O = !1, it(), ht(k) && Dt();
    }
    At(() => {
      const {
        value: k
      } = et, {
        value: Z
      } = Fe, {
        value: le
      } = r, {
        value: Oe
      } = d, {
        value: Ie
      } = s;
      Oe && (k ? Oe.classList.remove(`${le}-scrollbar-rail--disabled`) : Oe.classList.add(`${le}-scrollbar-rail--disabled`)), Ie && (Z ? Ie.classList.remove(`${le}-scrollbar-rail--disabled`) : Ie.classList.add(`${le}-scrollbar-rail--disabled`));
    }), ar(() => {
      e.container || it();
    }), fr(() => {
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p), pt("mousemove", window, Bt, !0), pt("mouseup", window, qe, !0);
    });
    const gt = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: k
        },
        self: {
          color: Z,
          colorHover: le,
          height: Oe,
          width: Ie,
          borderRadius: w,
          railInsetHorizontalTop: G,
          railInsetHorizontalBottom: te,
          railInsetVerticalRight: fe,
          railInsetVerticalLeft: Ke,
          railColor: lt
        }
      } = S.value, {
        top: D,
        right: z,
        bottom: q,
        left: xe
      } = Zr(G), {
        top: Je,
        right: Le,
        bottom: Ae,
        left: v
      } = Zr(te), {
        top: R,
        right: ie,
        bottom: De,
        left: ze
      } = Zr(o != null && o.value ? Ni(fe) : fe), {
        top: _e,
        right: Tt,
        bottom: Lt,
        left: ut
      } = Zr(o != null && o.value ? Ni(Ke) : Ke);
      return {
        "--n-scrollbar-bezier": k,
        "--n-scrollbar-color": Z,
        "--n-scrollbar-color-hover": le,
        "--n-scrollbar-border-radius": w,
        "--n-scrollbar-width": Ie,
        "--n-scrollbar-height": Oe,
        "--n-scrollbar-rail-top-horizontal-top": D,
        "--n-scrollbar-rail-right-horizontal-top": z,
        "--n-scrollbar-rail-bottom-horizontal-top": q,
        "--n-scrollbar-rail-left-horizontal-top": xe,
        "--n-scrollbar-rail-top-horizontal-bottom": Je,
        "--n-scrollbar-rail-right-horizontal-bottom": Le,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ae,
        "--n-scrollbar-rail-left-horizontal-bottom": v,
        "--n-scrollbar-rail-top-vertical-right": R,
        "--n-scrollbar-rail-right-vertical-right": ie,
        "--n-scrollbar-rail-bottom-vertical-right": De,
        "--n-scrollbar-rail-left-vertical-right": ze,
        "--n-scrollbar-rail-top-vertical-left": _e,
        "--n-scrollbar-rail-right-vertical-left": Tt,
        "--n-scrollbar-rail-bottom-vertical-left": Lt,
        "--n-scrollbar-rail-left-vertical-left": ut,
        "--n-scrollbar-rail-color": lt
      };
    }), St = t ? zr("scrollbar", void 0, gt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: nt,
      scrollBy: ot,
      sync: it,
      syncUnifiedContainer: _t,
      handleMouseEnterWrapper: It,
      handleMouseLeaveWrapper: Ht
    }), {
      mergedClsPrefix: r,
      rtlEnabled: o,
      containerScrollTop: y,
      wrapperRef: a,
      containerRef: i,
      contentRef: l,
      yRailRef: s,
      xRailRef: d,
      needYBar: Fe,
      needXBar: et,
      yBarSizePx: J,
      xBarSizePx: K,
      yBarTopPx: ve,
      xBarLeftPx: Te,
      isShowXBar: be,
      isShowYBar: we,
      isIos: H,
      handleScroll: He,
      handleContentResize: bt,
      handleContainerResize: ye,
      handleYScrollMouseDown: ir,
      handleXScrollMouseDown: M,
      cssVars: t ? void 0 : gt,
      themeClass: St == null ? void 0 : St.themeClass,
      onRender: St == null ? void 0 : St.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: r,
      mergedClsPrefix: t,
      triggerDisplayManually: n,
      rtlEnabled: o,
      internalHoistYRail: a,
      yPlacement: i,
      xPlacement: l,
      xScrollable: s
    } = this;
    if (!this.scrollable) return (e = r.default) === null || e === void 0 ? void 0 : e.call(r);
    const d = this.trigger === "none", u = (g, h) => c("div", {
      ref: "yRailRef",
      class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${i}`, g],
      "data-scrollbar-rail": !0,
      style: [h || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, c(d ? Vi : $r, d ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? c("div", {
        class: `${t}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), f = () => {
      var g, h;
      return (g = this.onRender) === null || g === void 0 || g.call(this), c("div", $a(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${t}-scrollbar`, this.themeClass, o && `${t}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: n ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: n ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (h = r.default) === null || h === void 0 ? void 0 : h.call(r) : c("div", {
        role: "none",
        ref: "containerRef",
        class: [`${t}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, c(Wn, {
        onResize: this.handleContentResize
      }, {
        default: () => c("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${t}-scrollbar-content`, this.contentClass]
        }, r)
      })), a ? null : u(void 0, void 0), s && c("div", {
        ref: "xRailRef",
        class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--horizontal`, `${t}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, c(d ? Vi : $r, d ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? c("div", {
          class: `${t}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, m = this.container ? f() : c(Wn, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? c(To, null, m, u(this.themeClass, this.cssVars)) : m;
  }
}), Xv = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function js(e) {
  const {
    textColorDisabled: r,
    iconColor: t,
    textColor2: n,
    fontSizeTiny: o,
    fontSizeSmall: a,
    fontSizeMedium: i,
    fontSizeLarge: l,
    fontSizeHuge: s
  } = e;
  return Object.assign(Object.assign({}, Xv), {
    fontSizeTiny: o,
    fontSizeSmall: a,
    fontSizeMedium: i,
    fontSizeLarge: l,
    fontSizeHuge: s,
    textColor: r,
    iconColor: t,
    extraTextColor: n
  });
}
const Qv = {
  name: "Empty",
  common: Sn,
  self: js
}, jr = {
  name: "Empty",
  common: W,
  self: js
}, Jv = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingTiny: "4px 0",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingTiny: "0 12px",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
function Zv(e) {
  const {
    borderRadius: r,
    popoverColor: t,
    textColor3: n,
    dividerColor: o,
    textColor2: a,
    primaryColorPressed: i,
    textColorDisabled: l,
    primaryColor: s,
    opacityDisabled: d,
    hoverColor: u,
    fontSizeTiny: f,
    fontSizeSmall: m,
    fontSizeMedium: g,
    fontSizeLarge: h,
    fontSizeHuge: C,
    heightTiny: y,
    heightSmall: b,
    heightMedium: _,
    heightLarge: E,
    heightHuge: O
  } = e;
  return Object.assign(Object.assign({}, Jv), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: m,
    optionFontSizeMedium: g,
    optionFontSizeLarge: h,
    optionFontSizeHuge: C,
    optionHeightTiny: y,
    optionHeightSmall: b,
    optionHeightMedium: _,
    optionHeightLarge: E,
    optionHeightHuge: O,
    borderRadius: r,
    color: t,
    groupHeaderTextColor: n,
    actionDividerColor: o,
    optionTextColor: a,
    optionTextColorPressed: i,
    optionTextColorDisabled: l,
    optionTextColorActive: s,
    optionOpacityDisabled: d,
    optionCheckColor: s,
    optionColorPending: u,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: u,
    actionTextColor: a,
    loadingColor: s
  });
}
const Xn = {
  name: "InternalSelectMenu",
  common: W,
  peers: {
    Scrollbar: $t,
    Empty: jr
  },
  self: Zv
}, {
  cubicBezierEaseIn: dl,
  cubicBezierEaseOut: cl
} = Lr;
function Us({
  transformOrigin: e = "inherit",
  duration: r = ".2s",
  enterScale: t = ".9",
  originalTransform: n = "",
  originalTransition: o = ""
} = {}) {
  return [$("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${r} ${dl}, transform ${r} ${dl} ${o && `,${o}`}`
  }), $("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${r} ${cl}, transform ${r} ${cl} ${o && `,${o}`}`
  }), $("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${n} scale(${t})`
  }), $("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${n} scale(1)`
  })];
}
const eC = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function tC(e) {
  const {
    boxShadow2: r,
    popoverColor: t,
    textColor2: n,
    borderRadius: o,
    fontSize: a,
    dividerColor: i
  } = e;
  return Object.assign(Object.assign({}, eC), {
    fontSize: a,
    borderRadius: o,
    color: t,
    dividerColor: i,
    textColor: n,
    boxShadow: r
  });
}
const Ur = {
  name: "Popover",
  common: W,
  self: tC
}, rC = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px"
}, Ys = {
  name: "Tag",
  common: W,
  self(e) {
    const {
      textColor2: r,
      primaryColorHover: t,
      primaryColorPressed: n,
      primaryColor: o,
      infoColor: a,
      successColor: i,
      warningColor: l,
      errorColor: s,
      baseColor: d,
      borderColor: u,
      tagColor: f,
      opacityDisabled: m,
      closeIconColor: g,
      closeIconColorHover: h,
      closeIconColorPressed: C,
      closeColorHover: y,
      closeColorPressed: b,
      borderRadiusSmall: _,
      fontSizeMini: E,
      fontSizeTiny: O,
      fontSizeSmall: N,
      fontSizeMedium: V,
      heightMini: p,
      heightTiny: T,
      heightSmall: I,
      heightMedium: U,
      buttonColor2Hover: Y,
      buttonColor2Pressed: H,
      fontWeightStrong: S
    } = e;
    return Object.assign(Object.assign({}, rC), {
      closeBorderRadius: _,
      heightTiny: p,
      heightSmall: T,
      heightMedium: I,
      heightLarge: U,
      borderRadius: _,
      opacityDisabled: m,
      fontSizeTiny: E,
      fontSizeSmall: O,
      fontSizeMedium: N,
      fontSizeLarge: V,
      fontWeightStrong: S,
      // checked
      textColorCheckable: r,
      textColorHoverCheckable: r,
      textColorPressedCheckable: r,
      textColorChecked: d,
      colorCheckable: "#0000",
      colorHoverCheckable: Y,
      colorPressedCheckable: H,
      colorChecked: o,
      colorCheckedHover: t,
      colorCheckedPressed: n,
      // default
      border: `1px solid ${u}`,
      textColor: r,
      color: f,
      colorBordered: "#0000",
      closeIconColor: g,
      closeIconColorHover: h,
      closeIconColorPressed: C,
      closeColorHover: y,
      closeColorPressed: b,
      borderPrimary: `1px solid ${Q(o, {
        alpha: 0.3
      })}`,
      textColorPrimary: o,
      colorPrimary: Q(o, {
        alpha: 0.16
      }),
      colorBorderedPrimary: "#0000",
      closeIconColorPrimary: st(o, {
        lightness: 0.7
      }),
      closeIconColorHoverPrimary: st(o, {
        lightness: 0.7
      }),
      closeIconColorPressedPrimary: st(o, {
        lightness: 0.7
      }),
      closeColorHoverPrimary: Q(o, {
        alpha: 0.16
      }),
      closeColorPressedPrimary: Q(o, {
        alpha: 0.12
      }),
      borderInfo: `1px solid ${Q(a, {
        alpha: 0.3
      })}`,
      textColorInfo: a,
      colorInfo: Q(a, {
        alpha: 0.16
      }),
      colorBorderedInfo: "#0000",
      closeIconColorInfo: st(a, {
        alpha: 0.7
      }),
      closeIconColorHoverInfo: st(a, {
        alpha: 0.7
      }),
      closeIconColorPressedInfo: st(a, {
        alpha: 0.7
      }),
      closeColorHoverInfo: Q(a, {
        alpha: 0.16
      }),
      closeColorPressedInfo: Q(a, {
        alpha: 0.12
      }),
      borderSuccess: `1px solid ${Q(i, {
        alpha: 0.3
      })}`,
      textColorSuccess: i,
      colorSuccess: Q(i, {
        alpha: 0.16
      }),
      colorBorderedSuccess: "#0000",
      closeIconColorSuccess: st(i, {
        alpha: 0.7
      }),
      closeIconColorHoverSuccess: st(i, {
        alpha: 0.7
      }),
      closeIconColorPressedSuccess: st(i, {
        alpha: 0.7
      }),
      closeColorHoverSuccess: Q(i, {
        alpha: 0.16
      }),
      closeColorPressedSuccess: Q(i, {
        alpha: 0.12
      }),
      borderWarning: `1px solid ${Q(l, {
        alpha: 0.3
      })}`,
      textColorWarning: l,
      colorWarning: Q(l, {
        alpha: 0.16
      }),
      colorBorderedWarning: "#0000",
      closeIconColorWarning: st(l, {
        alpha: 0.7
      }),
      closeIconColorHoverWarning: st(l, {
        alpha: 0.7
      }),
      closeIconColorPressedWarning: st(l, {
        alpha: 0.7
      }),
      closeColorHoverWarning: Q(l, {
        alpha: 0.16
      }),
      closeColorPressedWarning: Q(l, {
        alpha: 0.11
      }),
      borderError: `1px solid ${Q(s, {
        alpha: 0.3
      })}`,
      textColorError: s,
      colorError: Q(s, {
        alpha: 0.16
      }),
      colorBorderedError: "#0000",
      closeIconColorError: st(s, {
        alpha: 0.7
      }),
      closeIconColorHoverError: st(s, {
        alpha: 0.7
      }),
      closeIconColorPressedError: st(s, {
        alpha: 0.7
      }),
      closeColorHoverError: Q(s, {
        alpha: 0.16
      }),
      closeColorPressedError: Q(s, {
        alpha: 0.12
      })
    });
  }
}, nC = Ce({
  name: "InternalSelectionSuffix",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showClear: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    onClear: Function
  },
  setup(e, {
    slots: r
  }) {
    return () => {
      const {
        clsPrefix: t
      } = e;
      return c(Ns, {
        clsPrefix: t,
        class: `${t}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? c(Ma, {
          clsPrefix: t,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => c(xr, {
            clsPrefix: t,
            class: `${t}-base-suffix__arrow`
          }, {
            default: () => ke(r.default, () => [c(Rv, null)])
          })
        }) : null
      });
    };
  }
}), oC = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
}, ri = {
  name: "InternalSelection",
  common: W,
  peers: {
    Popover: Ur
  },
  self(e) {
    const {
      borderRadius: r,
      textColor2: t,
      textColorDisabled: n,
      inputColor: o,
      inputColorDisabled: a,
      primaryColor: i,
      primaryColorHover: l,
      warningColor: s,
      warningColorHover: d,
      errorColor: u,
      errorColorHover: f,
      iconColor: m,
      iconColorDisabled: g,
      clearColor: h,
      clearColorHover: C,
      clearColorPressed: y,
      placeholderColor: b,
      placeholderColorDisabled: _,
      fontSizeTiny: E,
      fontSizeSmall: O,
      fontSizeMedium: N,
      fontSizeLarge: V,
      heightTiny: p,
      heightSmall: T,
      heightMedium: I,
      heightLarge: U,
      fontWeight: Y
    } = e;
    return Object.assign(Object.assign({}, oC), {
      fontWeight: Y,
      fontSizeTiny: E,
      fontSizeSmall: O,
      fontSizeMedium: N,
      fontSizeLarge: V,
      heightTiny: p,
      heightSmall: T,
      heightMedium: I,
      heightLarge: U,
      borderRadius: r,
      // default
      textColor: t,
      textColorDisabled: n,
      placeholderColor: b,
      placeholderColorDisabled: _,
      color: o,
      colorDisabled: a,
      colorActive: Q(i, {
        alpha: 0.1
      }),
      border: "1px solid #0000",
      borderHover: `1px solid ${l}`,
      borderActive: `1px solid ${i}`,
      borderFocus: `1px solid ${l}`,
      boxShadowHover: "none",
      boxShadowActive: `0 0 8px 0 ${Q(i, {
        alpha: 0.4
      })}`,
      boxShadowFocus: `0 0 8px 0 ${Q(i, {
        alpha: 0.4
      })}`,
      caretColor: i,
      arrowColor: m,
      arrowColorDisabled: g,
      loadingColor: i,
      // warning
      borderWarning: `1px solid ${s}`,
      borderHoverWarning: `1px solid ${d}`,
      borderActiveWarning: `1px solid ${s}`,
      borderFocusWarning: `1px solid ${d}`,
      boxShadowHoverWarning: "none",
      boxShadowActiveWarning: `0 0 8px 0 ${Q(s, {
        alpha: 0.4
      })}`,
      boxShadowFocusWarning: `0 0 8px 0 ${Q(s, {
        alpha: 0.4
      })}`,
      colorActiveWarning: Q(s, {
        alpha: 0.1
      }),
      caretColorWarning: s,
      // error
      borderError: `1px solid ${u}`,
      borderHoverError: `1px solid ${f}`,
      borderActiveError: `1px solid ${u}`,
      borderFocusError: `1px solid ${f}`,
      boxShadowHoverError: "none",
      boxShadowActiveError: `0 0 8px 0 ${Q(u, {
        alpha: 0.4
      })}`,
      boxShadowFocusError: `0 0 8px 0 ${Q(u, {
        alpha: 0.4
      })}`,
      colorActiveError: Q(u, {
        alpha: 0.1
      }),
      caretColorError: u,
      clearColor: h,
      clearColorHover: C,
      clearColorPressed: y
    });
  }
}, {
  cubicBezierEaseInOut: gr
} = Lr;
function aC({
  duration: e = ".2s",
  delay: r = ".1s"
} = {}) {
  return [$("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), $("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), $("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${gr},
 max-width ${e} ${gr} ${r},
 margin-left ${e} ${gr} ${r},
 margin-right ${e} ${gr} ${r};
 `), $("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${gr} ${r},
 max-width ${e} ${gr},
 margin-left ${e} ${gr},
 margin-right ${e} ${gr};
 `)];
}
const iC = oe("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), lC = Ce({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Kn("-base-wave", iC, Ge(e, "clsPrefix"));
    const r = F(null), t = F(!1);
    let n = null;
    return fr(() => {
      n !== null && window.clearTimeout(n);
    }), {
      active: t,
      selfRef: r,
      play() {
        n !== null && (window.clearTimeout(n), t.value = !1, n = null), br(() => {
          var o;
          (o = r.value) === null || o === void 0 || o.offsetHeight, t.value = !0, n = window.setTimeout(() => {
            t.value = !1, n = null;
          }, 1e3);
        });
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return c("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`]
    });
  }
}), sC = Eo && "chrome" in window;
Eo && navigator.userAgent.includes("Firefox");
const Gs = Eo && navigator.userAgent.includes("Safari") && !sC, qs = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
}, qt = {
  name: "Input",
  common: W,
  self(e) {
    const {
      textColor2: r,
      textColor3: t,
      textColorDisabled: n,
      primaryColor: o,
      primaryColorHover: a,
      inputColor: i,
      inputColorDisabled: l,
      warningColor: s,
      warningColorHover: d,
      errorColor: u,
      errorColorHover: f,
      borderRadius: m,
      lineHeight: g,
      fontSizeTiny: h,
      fontSizeSmall: C,
      fontSizeMedium: y,
      fontSizeLarge: b,
      heightTiny: _,
      heightSmall: E,
      heightMedium: O,
      heightLarge: N,
      clearColor: V,
      clearColorHover: p,
      clearColorPressed: T,
      placeholderColor: I,
      placeholderColorDisabled: U,
      iconColor: Y,
      iconColorDisabled: H,
      iconColorHover: S,
      iconColorPressed: A,
      fontWeight: J
    } = e;
    return Object.assign(Object.assign({}, qs), {
      fontWeight: J,
      countTextColorDisabled: n,
      countTextColor: t,
      heightTiny: _,
      heightSmall: E,
      heightMedium: O,
      heightLarge: N,
      fontSizeTiny: h,
      fontSizeSmall: C,
      fontSizeMedium: y,
      fontSizeLarge: b,
      lineHeight: g,
      lineHeightTextarea: g,
      borderRadius: m,
      iconSize: "16px",
      groupLabelColor: i,
      textColor: r,
      textColorDisabled: n,
      textDecorationColor: r,
      groupLabelTextColor: r,
      caretColor: o,
      placeholderColor: I,
      placeholderColorDisabled: U,
      color: i,
      colorDisabled: l,
      colorFocus: Q(o, {
        alpha: 0.1
      }),
      groupLabelBorder: "1px solid #0000",
      border: "1px solid #0000",
      borderHover: `1px solid ${a}`,
      borderDisabled: "1px solid #0000",
      borderFocus: `1px solid ${a}`,
      boxShadowFocus: `0 0 8px 0 ${Q(o, {
        alpha: 0.3
      })}`,
      loadingColor: o,
      // warning
      loadingColorWarning: s,
      borderWarning: `1px solid ${s}`,
      borderHoverWarning: `1px solid ${d}`,
      colorFocusWarning: Q(s, {
        alpha: 0.1
      }),
      borderFocusWarning: `1px solid ${d}`,
      boxShadowFocusWarning: `0 0 8px 0 ${Q(s, {
        alpha: 0.3
      })}`,
      caretColorWarning: s,
      // error
      loadingColorError: u,
      borderError: `1px solid ${u}`,
      borderHoverError: `1px solid ${f}`,
      colorFocusError: Q(u, {
        alpha: 0.1
      }),
      borderFocusError: `1px solid ${f}`,
      boxShadowFocusError: `0 0 8px 0 ${Q(u, {
        alpha: 0.3
      })}`,
      caretColorError: u,
      clearColor: V,
      clearColorHover: p,
      clearColorPressed: T,
      iconColor: Y,
      iconColorDisabled: H,
      iconColorHover: S,
      iconColorPressed: A,
      suffixTextColor: r
    });
  }
};
function dC(e) {
  const {
    textColor2: r,
    textColor3: t,
    textColorDisabled: n,
    primaryColor: o,
    primaryColorHover: a,
    inputColor: i,
    inputColorDisabled: l,
    borderColor: s,
    warningColor: d,
    warningColorHover: u,
    errorColor: f,
    errorColorHover: m,
    borderRadius: g,
    lineHeight: h,
    fontSizeTiny: C,
    fontSizeSmall: y,
    fontSizeMedium: b,
    fontSizeLarge: _,
    heightTiny: E,
    heightSmall: O,
    heightMedium: N,
    heightLarge: V,
    actionColor: p,
    clearColor: T,
    clearColorHover: I,
    clearColorPressed: U,
    placeholderColor: Y,
    placeholderColorDisabled: H,
    iconColor: S,
    iconColorDisabled: A,
    iconColorHover: J,
    iconColorPressed: ne,
    fontWeight: K
  } = e;
  return Object.assign(Object.assign({}, qs), {
    fontWeight: K,
    countTextColorDisabled: n,
    countTextColor: t,
    heightTiny: E,
    heightSmall: O,
    heightMedium: N,
    heightLarge: V,
    fontSizeTiny: C,
    fontSizeSmall: y,
    fontSizeMedium: b,
    fontSizeLarge: _,
    lineHeight: h,
    lineHeightTextarea: h,
    borderRadius: g,
    iconSize: "16px",
    groupLabelColor: p,
    groupLabelTextColor: r,
    textColor: r,
    textColorDisabled: n,
    textDecorationColor: r,
    caretColor: o,
    placeholderColor: Y,
    placeholderColorDisabled: H,
    color: i,
    colorDisabled: l,
    colorFocus: i,
    groupLabelBorder: `1px solid ${s}`,
    border: `1px solid ${s}`,
    borderHover: `1px solid ${a}`,
    borderDisabled: `1px solid ${s}`,
    borderFocus: `1px solid ${a}`,
    boxShadowFocus: `0 0 0 2px ${Q(o, {
      alpha: 0.2
    })}`,
    loadingColor: o,
    // warning
    loadingColorWarning: d,
    borderWarning: `1px solid ${d}`,
    borderHoverWarning: `1px solid ${u}`,
    colorFocusWarning: i,
    borderFocusWarning: `1px solid ${u}`,
    boxShadowFocusWarning: `0 0 0 2px ${Q(d, {
      alpha: 0.2
    })}`,
    caretColorWarning: d,
    // error
    loadingColorError: f,
    borderError: `1px solid ${f}`,
    borderHoverError: `1px solid ${m}`,
    colorFocusError: i,
    borderFocusError: `1px solid ${m}`,
    boxShadowFocusError: `0 0 0 2px ${Q(f, {
      alpha: 0.2
    })}`,
    caretColorError: f,
    clearColor: T,
    clearColorHover: I,
    clearColorPressed: U,
    iconColor: S,
    iconColorDisabled: A,
    iconColorHover: J,
    iconColorPressed: ne,
    suffixTextColor: r
  });
}
const ni = {
  name: "Input",
  common: Sn,
  self: dC
}, Ks = "n-input", cC = oe("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  B("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  B("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),
  B("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [$("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), $("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), $("&:-webkit-autofill ~", [B("placeholder", "display: none;")])]),
  ae("round", [Vt("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  B("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [$("span", `
 width: 100%;
 display: inline-block;
 `)]),
  ae("textarea", [B("placeholder", "overflow: visible;")]),
  Vt("autosize", "width: 100%;"),
  ae("autosize", [B("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  oe("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  B("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  B("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [$("&[type=password]::-ms-reveal", "display: none;"), $("+", [B("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Vt("textarea", [B("placeholder", "white-space: nowrap;")]),
  B("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  ae("textarea", "width: 100%;", [oe("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), ae("resizable", [oe("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), B("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), B("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  ae("pair", [B("input-el, placeholder", "text-align: center;"), B("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [oe("icon", `
 color: var(--n-icon-color);
 `), oe("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  ae("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [B("border", "border: var(--n-border-disabled);"), B("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), B("placeholder", "color: var(--n-placeholder-color-disabled);"), B("separator", "color: var(--n-text-color-disabled);", [oe("icon", `
 color: var(--n-icon-color-disabled);
 `), oe("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), oe("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), B("suffix, prefix", "color: var(--n-text-color-disabled);", [oe("icon", `
 color: var(--n-icon-color-disabled);
 `), oe("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Vt("disabled", [B("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [$("&:hover", `
 color: var(--n-icon-color-hover);
 `), $("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), $("&:hover", [B("state-border", "border: var(--n-border-hover);")]), ae("focus", "background-color: var(--n-color-focus);", [B("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  B("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),
  B("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  B("prefix", "margin-right: 4px;"),
  B("suffix", `
 margin-left: 4px;
 `),
  B("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [oe("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), oe("base-clear", `
 font-size: var(--n-icon-size);
 `, [B("placeholder", [oe("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), $(">", [oe("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), oe("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  oe("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => ae(`${e}-status`, [Vt("disabled", [oe("base-loading", `
 color: var(--n-loading-color-${e})
 `), B("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), B("state-border", `
 border: var(--n-border-${e});
 `), $("&:hover", [B("state-border", `
 border: var(--n-border-hover-${e});
 `)]), $("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [B("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), ae("focus", `
 background-color: var(--n-color-focus-${e});
 `, [B("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), uC = oe("input", [ae("disabled", [B("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function fC(e) {
  let r = 0;
  for (const t of e)
    r++;
  return r;
}
function oo(e) {
  return e === "" || e == null;
}
function mC(e) {
  const r = F(null);
  function t() {
    const {
      value: a
    } = e;
    if (!(a != null && a.focus)) {
      o();
      return;
    }
    const {
      selectionStart: i,
      selectionEnd: l,
      value: s
    } = a;
    if (i == null || l == null) {
      o();
      return;
    }
    r.value = {
      start: i,
      end: l,
      beforeText: s.slice(0, i),
      afterText: s.slice(l)
    };
  }
  function n() {
    var a;
    const {
      value: i
    } = r, {
      value: l
    } = e;
    if (!i || !l)
      return;
    const {
      value: s
    } = l, {
      start: d,
      beforeText: u,
      afterText: f
    } = i;
    let m = s.length;
    if (s.endsWith(f))
      m = s.length - f.length;
    else if (s.startsWith(u))
      m = u.length;
    else {
      const g = u[d - 1], h = s.indexOf(g, d - 1);
      h !== -1 && (m = h + 1);
    }
    (a = l.setSelectionRange) === null || a === void 0 || a.call(l, m, m);
  }
  function o() {
    r.value = null;
  }
  return mt(e, o), {
    recordCursor: t,
    restoreCursor: n
  };
}
const ul = Ce({
  name: "InputWordCount",
  setup(e, {
    slots: r
  }) {
    const {
      mergedValueRef: t,
      maxlengthRef: n,
      mergedClsPrefixRef: o,
      countGraphemesRef: a
    } = Qe(Ks), i = P(() => {
      const {
        value: l
      } = t;
      return l === null || Array.isArray(l) ? 0 : (a.value || fC)(l);
    });
    return () => {
      const {
        value: l
      } = n, {
        value: s
      } = t;
      return c("span", {
        class: `${o.value}-input-word-count`
      }, Et(r.default, {
        value: s === null || Array.isArray(s) ? "" : s
      }, () => [l === void 0 ? i.value : `${i.value} / ${l}`]));
    };
  }
});
var hC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const pC = Object.assign(Object.assign({}, Jt.props), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: !1
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: !1
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: !0
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: !0
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: void 0
  },
  allowInput: Function,
  renderCount: Function,
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: [Function, Array],
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  countGraphemes: Function,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  internalLoadingBeforeSuffix: {
    type: Boolean,
    default: !0
  },
  /** deprecated */
  showPasswordToggle: Boolean
}), un = Ce({
  name: "Input",
  props: pC,
  slots: Object,
  setup(e) {
    hC.NODE_ENV !== "production" && At(() => {
      e.showPasswordToggle && wr("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: r,
      mergedBorderedRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: o
    } = Yn(e), a = Jt("Input", "-input", cC, ni, e, r);
    Gs && Kn("-input-safari", uC, r);
    const i = F(null), l = F(null), s = F(null), d = F(null), u = F(null), f = F(null), m = F(null), g = mC(m), h = F(null), {
      localeRef: C
    } = qn("Input"), y = F(e.defaultValue), b = Ge(e, "value"), _ = bo(b, y), E = Io(e), {
      mergedSizeRef: O,
      mergedDisabledRef: N,
      mergedStatusRef: V
    } = E, p = F(!1), T = F(!1), I = F(!1), U = F(!1);
    let Y = null;
    const H = P(() => {
      const {
        placeholder: v,
        pair: R
      } = e;
      return R ? Array.isArray(v) ? v : v === void 0 ? ["", ""] : [v, v] : v === void 0 ? [C.value.placeholder] : [v];
    }), S = P(() => {
      const {
        value: v
      } = I, {
        value: R
      } = _, {
        value: ie
      } = H;
      return !v && (oo(R) || Array.isArray(R) && oo(R[0])) && ie[0];
    }), A = P(() => {
      const {
        value: v
      } = I, {
        value: R
      } = _, {
        value: ie
      } = H;
      return !v && ie[1] && (oo(R) || Array.isArray(R) && oo(R[1]));
    }), J = Gt(() => e.internalForceFocus || p.value), ne = Gt(() => {
      if (N.value || e.readonly || !e.clearable || !J.value && !T.value)
        return !1;
      const {
        value: v
      } = _, {
        value: R
      } = J;
      return e.pair ? !!(Array.isArray(v) && (v[0] || v[1])) && (T.value || R) : !!v && (T.value || R);
    }), K = P(() => {
      const {
        showPasswordOn: v
      } = e;
      if (v)
        return v;
      if (e.showPasswordToggle) return "click";
    }), he = F(!1), ve = P(() => {
      const {
        textDecoration: v
      } = e;
      return v ? Array.isArray(v) ? v.map((R) => ({
        textDecoration: R
      })) : [{
        textDecoration: v
      }] : ["", ""];
    }), de = F(void 0), Te = () => {
      var v, R;
      if (e.type === "textarea") {
        const {
          autosize: ie
        } = e;
        if (ie && (de.value = (R = (v = h.value) === null || v === void 0 ? void 0 : v.$el) === null || R === void 0 ? void 0 : R.offsetWidth), !l.value || typeof ie == "boolean") return;
        const {
          paddingTop: De,
          paddingBottom: ze,
          lineHeight: _e
        } = window.getComputedStyle(l.value), Tt = Number(De.slice(0, -2)), Lt = Number(ze.slice(0, -2)), ut = Number(_e.slice(0, -2)), {
          value: lr
        } = s;
        if (!lr) return;
        if (ie.minRows) {
          const sr = Math.max(ie.minRows, 1), Pr = `${Tt + Lt + ut * sr}px`;
          lr.style.minHeight = Pr;
        }
        if (ie.maxRows) {
          const sr = `${Tt + Lt + ut * ie.maxRows}px`;
          lr.style.maxHeight = sr;
        }
      }
    }, Fe = P(() => {
      const {
        maxlength: v
      } = e;
      return v === void 0 ? void 0 : Number(v);
    });
    ar(() => {
      const {
        value: v
      } = _;
      Array.isArray(v) || fe(v);
    });
    const et = Do().proxy;
    function be(v, R) {
      const {
        onUpdateValue: ie,
        "onUpdate:value": De,
        onInput: ze
      } = e, {
        nTriggerFormInput: _e
      } = E;
      ie && Pe(ie, v, R), De && Pe(De, v, R), ze && Pe(ze, v, R), y.value = v, _e();
    }
    function we(v, R) {
      const {
        onChange: ie
      } = e, {
        nTriggerFormChange: De
      } = E;
      ie && Pe(ie, v, R), y.value = v, De();
    }
    function pe(v) {
      const {
        onBlur: R
      } = e, {
        nTriggerFormBlur: ie
      } = E;
      R && Pe(R, v), ie();
    }
    function Be(v) {
      const {
        onFocus: R
      } = e, {
        nTriggerFormFocus: ie
      } = E;
      R && Pe(R, v), ie();
    }
    function nt(v) {
      const {
        onClear: R
      } = e;
      R && Pe(R, v);
    }
    function me(v) {
      const {
        onInputBlur: R
      } = e;
      R && Pe(R, v);
    }
    function bt(v) {
      const {
        onInputFocus: R
      } = e;
      R && Pe(R, v);
    }
    function ye() {
      const {
        onDeactivate: v
      } = e;
      v && Pe(v);
    }
    function ot() {
      const {
        onActivate: v
      } = e;
      v && Pe(v);
    }
    function at(v) {
      const {
        onClick: R
      } = e;
      R && Pe(R, v);
    }
    function It(v) {
      const {
        onWrapperFocus: R
      } = e;
      R && Pe(R, v);
    }
    function Ht(v) {
      const {
        onWrapperBlur: R
      } = e;
      R && Pe(R, v);
    }
    function Dt() {
      I.value = !0;
    }
    function Wt(v) {
      I.value = !1, v.target === f.value ? xt(v, 1) : xt(v, 0);
    }
    function xt(v, R = 0, ie = "input") {
      const De = v.target.value;
      if (fe(De), v instanceof InputEvent && !v.isComposing && (I.value = !1), e.type === "textarea") {
        const {
          value: _e
        } = h;
        _e && _e.syncUnifiedContainer();
      }
      if (Y = De, I.value) return;
      g.recordCursor();
      const ze = Nt(De);
      if (ze)
        if (!e.pair)
          ie === "input" ? be(De, {
            source: R
          }) : we(De, {
            source: R
          });
        else {
          let {
            value: _e
          } = _;
          Array.isArray(_e) ? _e = [_e[0], _e[1]] : _e = ["", ""], _e[R] = De, ie === "input" ? be(_e, {
            source: R
          }) : we(_e, {
            source: R
          });
        }
      et.$forceUpdate(), ze || br(g.restoreCursor);
    }
    function Nt(v) {
      const {
        countGraphemes: R,
        maxlength: ie,
        minlength: De
      } = e;
      if (R) {
        let _e;
        if (ie !== void 0 && (_e === void 0 && (_e = R(v)), _e > Number(ie)) || De !== void 0 && (_e === void 0 && (_e = R(v)), _e < Number(ie)))
          return !1;
      }
      const {
        allowInput: ze
      } = e;
      return typeof ze == "function" ? ze(v) : !0;
    }
    function Me(v) {
      me(v), v.relatedTarget === i.value && ye(), v.relatedTarget !== null && (v.relatedTarget === u.value || v.relatedTarget === f.value || v.relatedTarget === l.value) || (U.value = !1), _t(v, "blur"), m.value = null;
    }
    function He(v, R) {
      bt(v), p.value = !0, U.value = !0, ot(), _t(v, "focus"), R === 0 ? m.value = u.value : R === 1 ? m.value = f.value : R === 2 && (m.value = l.value);
    }
    function tt(v) {
      e.passivelyActivated && (Ht(v), _t(v, "blur"));
    }
    function Kt(v) {
      e.passivelyActivated && (p.value = !0, It(v), _t(v, "focus"));
    }
    function _t(v, R) {
      v.relatedTarget !== null && (v.relatedTarget === u.value || v.relatedTarget === f.value || v.relatedTarget === l.value || v.relatedTarget === i.value) || (R === "focus" ? (Be(v), p.value = !0) : R === "blur" && (pe(v), p.value = !1));
    }
    function it(v, R) {
      xt(v, R, "change");
    }
    function ht(v) {
      at(v);
    }
    function M(v) {
      nt(v), ue();
    }
    function ue() {
      e.pair ? (be(["", ""], {
        source: "clear"
      }), we(["", ""], {
        source: "clear"
      })) : (be("", {
        source: "clear"
      }), we("", {
        source: "clear"
      }));
    }
    function Ee(v) {
      const {
        onMousedown: R
      } = e;
      R && R(v);
      const {
        tagName: ie
      } = v.target;
      if (ie !== "INPUT" && ie !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: De
          } = i;
          if (De) {
            const {
              left: ze,
              top: _e,
              width: Tt,
              height: Lt
            } = De.getBoundingClientRect(), ut = 14;
            if (ze + Tt - ut < v.clientX && v.clientX < ze + Tt && _e + Lt - ut < v.clientY && v.clientY < _e + Lt)
              return;
          }
        }
        v.preventDefault(), p.value || le();
      }
    }
    function ir() {
      var v;
      T.value = !0, e.type === "textarea" && ((v = h.value) === null || v === void 0 || v.handleMouseEnterWrapper());
    }
    function Bt() {
      var v;
      T.value = !1, e.type === "textarea" && ((v = h.value) === null || v === void 0 || v.handleMouseLeaveWrapper());
    }
    function qe() {
      N.value || K.value === "click" && (he.value = !he.value);
    }
    function gt(v) {
      if (N.value) return;
      v.preventDefault();
      const R = (De) => {
        De.preventDefault(), pt("mouseup", document, R);
      };
      if (Rt("mouseup", document, R), K.value !== "mousedown") return;
      he.value = !0;
      const ie = () => {
        he.value = !1, pt("mouseup", document, ie);
      };
      Rt("mouseup", document, ie);
    }
    function St(v) {
      e.onKeyup && Pe(e.onKeyup, v);
    }
    function Zt(v) {
      switch (e.onKeydown && Pe(e.onKeydown, v), v.key) {
        case "Escape":
          Z();
          break;
        case "Enter":
          k(v);
          break;
      }
    }
    function k(v) {
      var R, ie;
      if (e.passivelyActivated) {
        const {
          value: De
        } = U;
        if (De) {
          e.internalDeactivateOnEnter && Z();
          return;
        }
        v.preventDefault(), e.type === "textarea" ? (R = l.value) === null || R === void 0 || R.focus() : (ie = u.value) === null || ie === void 0 || ie.focus();
      }
    }
    function Z() {
      e.passivelyActivated && (U.value = !1, br(() => {
        var v;
        (v = i.value) === null || v === void 0 || v.focus();
      }));
    }
    function le() {
      var v, R, ie;
      N.value || (e.passivelyActivated ? (v = i.value) === null || v === void 0 || v.focus() : ((R = l.value) === null || R === void 0 || R.focus(), (ie = u.value) === null || ie === void 0 || ie.focus()));
    }
    function Oe() {
      var v;
      !((v = i.value) === null || v === void 0) && v.contains(document.activeElement) && document.activeElement.blur();
    }
    function Ie() {
      var v, R;
      (v = l.value) === null || v === void 0 || v.select(), (R = u.value) === null || R === void 0 || R.select();
    }
    function w() {
      N.value || (l.value ? l.value.focus() : u.value && u.value.focus());
    }
    function G() {
      const {
        value: v
      } = i;
      v != null && v.contains(document.activeElement) && v !== document.activeElement && Z();
    }
    function te(v) {
      if (e.type === "textarea") {
        const {
          value: R
        } = l;
        R == null || R.scrollTo(v);
      } else {
        const {
          value: R
        } = u;
        R == null || R.scrollTo(v);
      }
    }
    function fe(v) {
      const {
        type: R,
        pair: ie,
        autosize: De
      } = e;
      if (!ie && De)
        if (R === "textarea") {
          const {
            value: ze
          } = s;
          ze && (ze.textContent = `${v ?? ""}\r
`);
        } else {
          const {
            value: ze
          } = d;
          ze && (v ? ze.textContent = v : ze.innerHTML = "&nbsp;");
        }
    }
    function Ke() {
      Te();
    }
    const lt = F({
      top: "0"
    });
    function D(v) {
      var R;
      const {
        scrollTop: ie
      } = v.target;
      lt.value.top = `${-ie}px`, (R = h.value) === null || R === void 0 || R.syncUnifiedContainer();
    }
    let z = null;
    At(() => {
      const {
        autosize: v,
        type: R
      } = e;
      v && R === "textarea" ? z = mt(_, (ie) => {
        !Array.isArray(ie) && ie !== Y && fe(ie);
      }) : z == null || z();
    });
    let q = null;
    At(() => {
      e.type === "textarea" ? q = mt(_, (v) => {
        var R;
        !Array.isArray(v) && v !== Y && ((R = h.value) === null || R === void 0 || R.syncUnifiedContainer());
      }) : q == null || q();
    }), Nr(Ks, {
      mergedValueRef: _,
      maxlengthRef: Fe,
      mergedClsPrefixRef: r,
      countGraphemesRef: Ge(e, "countGraphemes")
    });
    const xe = {
      wrapperElRef: i,
      inputElRef: u,
      textareaElRef: l,
      isCompositing: I,
      clear: ue,
      focus: le,
      blur: Oe,
      select: Ie,
      deactivate: G,
      activate: w,
      scrollTo: te
    }, Je = Za("Input", o, r), Le = P(() => {
      const {
        value: v
      } = O, {
        common: {
          cubicBezierEaseInOut: R
        },
        self: {
          color: ie,
          borderRadius: De,
          textColor: ze,
          caretColor: _e,
          caretColorError: Tt,
          caretColorWarning: Lt,
          textDecorationColor: ut,
          border: lr,
          borderDisabled: sr,
          borderHover: Pr,
          borderFocus: wn,
          placeholderColor: Pn,
          placeholderColorDisabled: Dn,
          lineHeightTextarea: x,
          colorDisabled: L,
          colorFocus: se,
          textColorDisabled: ft,
          boxShadowFocus: jt,
          iconSize: Ue,
          colorFocusWarning: Dr,
          boxShadowFocusWarning: Yr,
          borderWarning: _r,
          borderFocusWarning: Wo,
          borderHoverWarning: No,
          colorFocusError: Bo,
          boxShadowFocusError: Lo,
          borderError: Vo,
          borderFocusError: jo,
          borderHoverError: Uo,
          clearSize: wd,
          clearColor: Pd,
          clearColorHover: Dd,
          clearColorPressed: _d,
          iconColor: Td,
          iconColorDisabled: Od,
          suffixTextColor: Md,
          countTextColor: Rd,
          countTextColorDisabled: Ed,
          iconColorHover: Id,
          iconColorPressed: kd,
          loadingColor: Fd,
          loadingColorError: Ad,
          loadingColorWarning: $d,
          fontWeight: zd,
          [Se("padding", v)]: Hd,
          [Se("fontSize", v)]: Wd,
          [Se("height", v)]: Nd
        }
      } = a.value, {
        left: Bd,
        right: Ld
      } = Zr(Hd);
      return {
        "--n-bezier": R,
        "--n-count-text-color": Rd,
        "--n-count-text-color-disabled": Ed,
        "--n-color": ie,
        "--n-font-size": Wd,
        "--n-font-weight": zd,
        "--n-border-radius": De,
        "--n-height": Nd,
        "--n-padding-left": Bd,
        "--n-padding-right": Ld,
        "--n-text-color": ze,
        "--n-caret-color": _e,
        "--n-text-decoration-color": ut,
        "--n-border": lr,
        "--n-border-disabled": sr,
        "--n-border-hover": Pr,
        "--n-border-focus": wn,
        "--n-placeholder-color": Pn,
        "--n-placeholder-color-disabled": Dn,
        "--n-icon-size": Ue,
        "--n-line-height-textarea": x,
        "--n-color-disabled": L,
        "--n-color-focus": se,
        "--n-text-color-disabled": ft,
        "--n-box-shadow-focus": jt,
        "--n-loading-color": Fd,
        // form warning
        "--n-caret-color-warning": Lt,
        "--n-color-focus-warning": Dr,
        "--n-box-shadow-focus-warning": Yr,
        "--n-border-warning": _r,
        "--n-border-focus-warning": Wo,
        "--n-border-hover-warning": No,
        "--n-loading-color-warning": $d,
        // form error
        "--n-caret-color-error": Tt,
        "--n-color-focus-error": Bo,
        "--n-box-shadow-focus-error": Lo,
        "--n-border-error": Vo,
        "--n-border-focus-error": jo,
        "--n-border-hover-error": Uo,
        "--n-loading-color-error": Ad,
        // clear-button
        "--n-clear-color": Pd,
        "--n-clear-size": wd,
        "--n-clear-color-hover": Dd,
        "--n-clear-color-pressed": _d,
        "--n-icon-color": Td,
        "--n-icon-color-hover": Id,
        "--n-icon-color-pressed": kd,
        "--n-icon-color-disabled": Od,
        "--n-suffix-text-color": Md
      };
    }), Ae = n ? zr("input", P(() => {
      const {
        value: v
      } = O;
      return v[0];
    }), Le, e) : void 0;
    return Object.assign(Object.assign({}, xe), {
      // DOM ref
      wrapperElRef: i,
      inputElRef: u,
      inputMirrorElRef: d,
      inputEl2Ref: f,
      textareaElRef: l,
      textareaMirrorElRef: s,
      textareaScrollbarInstRef: h,
      // value
      rtlEnabled: Je,
      uncontrolledValue: y,
      mergedValue: _,
      passwordVisible: he,
      mergedPlaceholder: H,
      showPlaceholder1: S,
      showPlaceholder2: A,
      mergedFocus: J,
      isComposing: I,
      activated: U,
      showClearButton: ne,
      mergedSize: O,
      mergedDisabled: N,
      textDecorationStyle: ve,
      mergedClsPrefix: r,
      mergedBordered: t,
      mergedShowPasswordOn: K,
      placeholderStyle: lt,
      mergedStatus: V,
      textAreaScrollContainerWidth: de,
      // methods
      handleTextAreaScroll: D,
      handleCompositionStart: Dt,
      handleCompositionEnd: Wt,
      handleInput: xt,
      handleInputBlur: Me,
      handleInputFocus: He,
      handleWrapperBlur: tt,
      handleWrapperFocus: Kt,
      handleMouseEnter: ir,
      handleMouseLeave: Bt,
      handleMouseDown: Ee,
      handleChange: it,
      handleClick: ht,
      handleClear: M,
      handlePasswordToggleClick: qe,
      handlePasswordToggleMousedown: gt,
      handleWrapperKeydown: Zt,
      handleWrapperKeyup: St,
      handleTextAreaMirrorResize: Ke,
      getTextareaScrollContainer: () => l.value,
      mergedTheme: a,
      cssVars: n ? void 0 : Le,
      themeClass: Ae == null ? void 0 : Ae.themeClass,
      onRender: Ae == null ? void 0 : Ae.onRender
    });
  },
  render() {
    var e, r;
    const {
      mergedClsPrefix: t,
      mergedStatus: n,
      themeClass: o,
      type: a,
      countGraphemes: i,
      onRender: l
    } = this, s = this.$slots;
    return l == null || l(), c("div", {
      ref: "wrapperElRef",
      class: [`${t}-input`, o, n && `${t}-input--${n}-status`, {
        [`${t}-input--rtl`]: this.rtlEnabled,
        [`${t}-input--disabled`]: this.mergedDisabled,
        [`${t}-input--textarea`]: a === "textarea",
        [`${t}-input--resizable`]: this.resizable && !this.autosize,
        [`${t}-input--autosize`]: this.autosize,
        [`${t}-input--round`]: this.round && a !== "textarea",
        [`${t}-input--pair`]: this.pair,
        [`${t}-input--focus`]: this.mergedFocus,
        [`${t}-input--stateful`]: this.stateful
      }],
      style: this.cssVars,
      tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0,
      onFocus: this.handleWrapperFocus,
      onBlur: this.handleWrapperBlur,
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onCompositionstart: this.handleCompositionStart,
      onCompositionend: this.handleCompositionEnd,
      onKeyup: this.handleWrapperKeyup,
      onKeydown: this.handleWrapperKeydown
    }, c("div", {
      class: `${t}-input-wrapper`
    }, Cr(s.prefix, (d) => d && c("div", {
      class: `${t}-input__prefix`
    }, d)), a === "textarea" ? c(Xt, {
      ref: "textareaScrollbarInstRef",
      class: `${t}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var d, u;
        const {
          textAreaScrollContainerWidth: f
        } = this, m = {
          width: this.autosize && f && `${f}px`
        };
        return c(To, null, c("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${t}-input__textarea-el`, (d = this.inputProps) === null || d === void 0 ? void 0 : d.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: i ? void 0 : this.maxlength,
          minlength: i ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (u = this.inputProps) === null || u === void 0 ? void 0 : u.style, m],
          onBlur: this.handleInputBlur,
          onFocus: (g) => {
            this.handleInputFocus(g, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? c("div", {
          class: `${t}-input__placeholder`,
          style: [this.placeholderStyle, m],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? c(Wn, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => c("div", {
            ref: "textareaMirrorElRef",
            class: `${t}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : c("div", {
      class: `${t}-input__input`
    }, c("input", Object.assign({
      type: a === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : a
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${t}-input__input-el`, (e = this.inputProps) === null || e === void 0 ? void 0 : e.class],
      style: [this.textDecorationStyle[0], (r = this.inputProps) === null || r === void 0 ? void 0 : r.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: i ? void 0 : this.maxlength,
      minlength: i ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
      readonly: this.readonly,
      autofocus: this.autofocus,
      size: this.attrSize,
      onBlur: this.handleInputBlur,
      onFocus: (d) => {
        this.handleInputFocus(d, 0);
      },
      onInput: (d) => {
        this.handleInput(d, 0);
      },
      onChange: (d) => {
        this.handleChange(d, 0);
      }
    })), this.showPlaceholder1 ? c("div", {
      class: `${t}-input__placeholder`
    }, c("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? c("div", {
      class: `${t}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && Cr(s.suffix, (d) => d || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? c("div", {
      class: `${t}-input__suffix`
    }, [Cr(s["clear-icon-placeholder"], (u) => (this.clearable || u) && c(Ma, {
      clsPrefix: t,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => u,
      icon: () => {
        var f, m;
        return (m = (f = this.$slots)["clear-icon"]) === null || m === void 0 ? void 0 : m.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? c(nC, {
      clsPrefix: t,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? c(ul, null, {
      default: (u) => {
        var f;
        const {
          renderCount: m
        } = this;
        return m ? m(u) : (f = s.count) === null || f === void 0 ? void 0 : f.call(s, u);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? c("div", {
      class: `${t}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? ke(s["password-visible-icon"], () => [c(xr, {
      clsPrefix: t
    }, {
      default: () => c(Iv, null)
    })]) : ke(s["password-invisible-icon"], () => [c(xr, {
      clsPrefix: t
    }, {
      default: () => c(kv, null)
    })])) : null]) : null)), this.pair ? c("span", {
      class: `${t}-input__separator`
    }, ke(s.separator, () => [this.separator])) : null, this.pair ? c("div", {
      class: `${t}-input-wrapper`
    }, c("div", {
      class: `${t}-input__input`
    }, c("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${t}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: i ? void 0 : this.maxlength,
      minlength: i ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: (d) => {
        this.handleInputFocus(d, 1);
      },
      onInput: (d) => {
        this.handleInput(d, 1);
      },
      onChange: (d) => {
        this.handleChange(d, 1);
      }
    }), this.showPlaceholder2 ? c("div", {
      class: `${t}-input__placeholder`
    }, c("span", null, this.mergedPlaceholder[1])) : null), Cr(s.suffix, (d) => (this.clearable || d) && c("div", {
      class: `${t}-input__suffix`
    }, [this.clearable && c(Ma, {
      clsPrefix: t,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var u;
        return (u = s["clear-icon"]) === null || u === void 0 ? void 0 : u.call(s);
      },
      placeholder: () => {
        var u;
        return (u = s["clear-icon-placeholder"]) === null || u === void 0 ? void 0 : u.call(s);
      }
    }), d]))) : null, this.mergedBordered ? c("div", {
      class: `${t}-input__border`
    }) : null, this.mergedBordered ? c("div", {
      class: `${t}-input__state-border`
    }) : null, this.showCount && a === "textarea" ? c(ul, null, {
      default: (d) => {
        var u;
        const {
          renderCount: f
        } = this;
        return f ? f(d) : (u = s.count) === null || u === void 0 ? void 0 : u.call(s, d);
      }
    }) : null);
  }
}), gC = {
  paddingTiny: "0 6px",
  paddingSmall: "0 10px",
  paddingMedium: "0 14px",
  paddingLarge: "0 18px",
  paddingRoundTiny: "0 10px",
  paddingRoundSmall: "0 14px",
  paddingRoundMedium: "0 18px",
  paddingRoundLarge: "0 22px",
  iconMarginTiny: "6px",
  iconMarginSmall: "6px",
  iconMarginMedium: "6px",
  iconMarginLarge: "6px",
  iconSizeTiny: "14px",
  iconSizeSmall: "18px",
  iconSizeMedium: "18px",
  iconSizeLarge: "20px",
  rippleDuration: ".6s"
};
function Xs(e) {
  const {
    heightTiny: r,
    heightSmall: t,
    heightMedium: n,
    heightLarge: o,
    borderRadius: a,
    fontSizeTiny: i,
    fontSizeSmall: l,
    fontSizeMedium: s,
    fontSizeLarge: d,
    opacityDisabled: u,
    textColor2: f,
    textColor3: m,
    primaryColorHover: g,
    primaryColorPressed: h,
    borderColor: C,
    primaryColor: y,
    baseColor: b,
    infoColor: _,
    infoColorHover: E,
    infoColorPressed: O,
    successColor: N,
    successColorHover: V,
    successColorPressed: p,
    warningColor: T,
    warningColorHover: I,
    warningColorPressed: U,
    errorColor: Y,
    errorColorHover: H,
    errorColorPressed: S,
    fontWeight: A,
    buttonColor2: J,
    buttonColor2Hover: ne,
    buttonColor2Pressed: K,
    fontWeightStrong: he
  } = e;
  return Object.assign(Object.assign({}, gC), {
    heightTiny: r,
    heightSmall: t,
    heightMedium: n,
    heightLarge: o,
    borderRadiusTiny: a,
    borderRadiusSmall: a,
    borderRadiusMedium: a,
    borderRadiusLarge: a,
    fontSizeTiny: i,
    fontSizeSmall: l,
    fontSizeMedium: s,
    fontSizeLarge: d,
    opacityDisabled: u,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: J,
    colorSecondaryHover: ne,
    colorSecondaryPressed: K,
    // tertiary
    colorTertiary: J,
    colorTertiaryHover: ne,
    colorTertiaryPressed: K,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: ne,
    colorQuaternaryPressed: K,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: f,
    textColorTertiary: m,
    textColorHover: g,
    textColorPressed: h,
    textColorFocus: g,
    textColorDisabled: f,
    textColorText: f,
    textColorTextHover: g,
    textColorTextPressed: h,
    textColorTextFocus: g,
    textColorTextDisabled: f,
    textColorGhost: f,
    textColorGhostHover: g,
    textColorGhostPressed: h,
    textColorGhostFocus: g,
    textColorGhostDisabled: f,
    border: `1px solid ${C}`,
    borderHover: `1px solid ${g}`,
    borderPressed: `1px solid ${h}`,
    borderFocus: `1px solid ${g}`,
    borderDisabled: `1px solid ${C}`,
    rippleColor: y,
    // primary
    colorPrimary: y,
    colorHoverPrimary: g,
    colorPressedPrimary: h,
    colorFocusPrimary: g,
    colorDisabledPrimary: y,
    textColorPrimary: b,
    textColorHoverPrimary: b,
    textColorPressedPrimary: b,
    textColorFocusPrimary: b,
    textColorDisabledPrimary: b,
    textColorTextPrimary: y,
    textColorTextHoverPrimary: g,
    textColorTextPressedPrimary: h,
    textColorTextFocusPrimary: g,
    textColorTextDisabledPrimary: f,
    textColorGhostPrimary: y,
    textColorGhostHoverPrimary: g,
    textColorGhostPressedPrimary: h,
    textColorGhostFocusPrimary: g,
    textColorGhostDisabledPrimary: y,
    borderPrimary: `1px solid ${y}`,
    borderHoverPrimary: `1px solid ${g}`,
    borderPressedPrimary: `1px solid ${h}`,
    borderFocusPrimary: `1px solid ${g}`,
    borderDisabledPrimary: `1px solid ${y}`,
    rippleColorPrimary: y,
    // info
    colorInfo: _,
    colorHoverInfo: E,
    colorPressedInfo: O,
    colorFocusInfo: E,
    colorDisabledInfo: _,
    textColorInfo: b,
    textColorHoverInfo: b,
    textColorPressedInfo: b,
    textColorFocusInfo: b,
    textColorDisabledInfo: b,
    textColorTextInfo: _,
    textColorTextHoverInfo: E,
    textColorTextPressedInfo: O,
    textColorTextFocusInfo: E,
    textColorTextDisabledInfo: f,
    textColorGhostInfo: _,
    textColorGhostHoverInfo: E,
    textColorGhostPressedInfo: O,
    textColorGhostFocusInfo: E,
    textColorGhostDisabledInfo: _,
    borderInfo: `1px solid ${_}`,
    borderHoverInfo: `1px solid ${E}`,
    borderPressedInfo: `1px solid ${O}`,
    borderFocusInfo: `1px solid ${E}`,
    borderDisabledInfo: `1px solid ${_}`,
    rippleColorInfo: _,
    // success
    colorSuccess: N,
    colorHoverSuccess: V,
    colorPressedSuccess: p,
    colorFocusSuccess: V,
    colorDisabledSuccess: N,
    textColorSuccess: b,
    textColorHoverSuccess: b,
    textColorPressedSuccess: b,
    textColorFocusSuccess: b,
    textColorDisabledSuccess: b,
    textColorTextSuccess: N,
    textColorTextHoverSuccess: V,
    textColorTextPressedSuccess: p,
    textColorTextFocusSuccess: V,
    textColorTextDisabledSuccess: f,
    textColorGhostSuccess: N,
    textColorGhostHoverSuccess: V,
    textColorGhostPressedSuccess: p,
    textColorGhostFocusSuccess: V,
    textColorGhostDisabledSuccess: N,
    borderSuccess: `1px solid ${N}`,
    borderHoverSuccess: `1px solid ${V}`,
    borderPressedSuccess: `1px solid ${p}`,
    borderFocusSuccess: `1px solid ${V}`,
    borderDisabledSuccess: `1px solid ${N}`,
    rippleColorSuccess: N,
    // warning
    colorWarning: T,
    colorHoverWarning: I,
    colorPressedWarning: U,
    colorFocusWarning: I,
    colorDisabledWarning: T,
    textColorWarning: b,
    textColorHoverWarning: b,
    textColorPressedWarning: b,
    textColorFocusWarning: b,
    textColorDisabledWarning: b,
    textColorTextWarning: T,
    textColorTextHoverWarning: I,
    textColorTextPressedWarning: U,
    textColorTextFocusWarning: I,
    textColorTextDisabledWarning: f,
    textColorGhostWarning: T,
    textColorGhostHoverWarning: I,
    textColorGhostPressedWarning: U,
    textColorGhostFocusWarning: I,
    textColorGhostDisabledWarning: T,
    borderWarning: `1px solid ${T}`,
    borderHoverWarning: `1px solid ${I}`,
    borderPressedWarning: `1px solid ${U}`,
    borderFocusWarning: `1px solid ${I}`,
    borderDisabledWarning: `1px solid ${T}`,
    rippleColorWarning: T,
    // error
    colorError: Y,
    colorHoverError: H,
    colorPressedError: S,
    colorFocusError: H,
    colorDisabledError: Y,
    textColorError: b,
    textColorHoverError: b,
    textColorPressedError: b,
    textColorFocusError: b,
    textColorDisabledError: b,
    textColorTextError: Y,
    textColorTextHoverError: H,
    textColorTextPressedError: S,
    textColorTextFocusError: H,
    textColorTextDisabledError: f,
    textColorGhostError: Y,
    textColorGhostHoverError: H,
    textColorGhostPressedError: S,
    textColorGhostFocusError: H,
    textColorGhostDisabledError: Y,
    borderError: `1px solid ${Y}`,
    borderHoverError: `1px solid ${H}`,
    borderPressedError: `1px solid ${S}`,
    borderFocusError: `1px solid ${H}`,
    borderDisabledError: `1px solid ${Y}`,
    rippleColorError: Y,
    waveOpacity: "0.6",
    fontWeight: A,
    fontWeightStrong: he
  });
}
const oi = {
  name: "Button",
  common: Sn,
  self: Xs
}, zt = {
  name: "Button",
  common: W,
  self(e) {
    const r = Xs(e);
    return r.waveOpacity = "0.8", r.colorOpacitySecondary = "0.16", r.colorOpacitySecondaryHover = "0.2", r.colorOpacitySecondaryPressed = "0.12", r;
  }
}, vC = {
  itemFontSize: "12px",
  itemHeight: "36px",
  itemWidth: "52px",
  panelActionPadding: "8px 0"
};
function Qs(e) {
  const {
    popoverColor: r,
    textColor2: t,
    primaryColor: n,
    hoverColor: o,
    dividerColor: a,
    opacityDisabled: i,
    boxShadow2: l,
    borderRadius: s,
    iconColor: d,
    iconColorDisabled: u
  } = e;
  return Object.assign(Object.assign({}, vC), {
    panelColor: r,
    panelBoxShadow: l,
    panelDividerColor: a,
    itemTextColor: t,
    itemTextColorActive: n,
    itemColorHover: o,
    itemOpacityDisabled: i,
    itemBorderRadius: s,
    borderRadius: s,
    iconColor: d,
    iconColorDisabled: u
  });
}
const Js = {
  name: "TimePicker",
  common: Sn,
  peers: {
    Scrollbar: ti,
    Button: oi,
    Input: ni
  },
  self: Qs
}, Zs = {
  name: "TimePicker",
  common: W,
  peers: {
    Scrollbar: $t,
    Button: zt,
    Input: qt
  },
  self: Qs
}, CC = {
  itemSize: "24px",
  itemCellWidth: "38px",
  itemCellHeight: "32px",
  scrollItemWidth: "80px",
  scrollItemHeight: "40px",
  panelExtraFooterPadding: "8px 12px",
  panelActionPadding: "8px 12px",
  calendarTitlePadding: "0",
  calendarTitleHeight: "28px",
  arrowSize: "14px",
  panelHeaderPadding: "8px 12px",
  calendarDaysHeight: "32px",
  calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
  // type
  calendarLeftPaddingDate: "6px 12px 4px 12px",
  calendarLeftPaddingDatetime: "4px 12px",
  calendarLeftPaddingDaterange: "6px 12px 4px 12px",
  calendarLeftPaddingDatetimerange: "4px 12px",
  calendarLeftPaddingMonth: "0",
  // TODO: make it actually effective
  calendarLeftPaddingYear: "0",
  calendarLeftPaddingQuarter: "0",
  calendarLeftPaddingMonthrange: "0",
  calendarLeftPaddingQuarterrange: "0",
  calendarLeftPaddingYearrange: "0",
  calendarLeftPaddingWeek: "6px 12px 4px 12px",
  calendarRightPaddingDate: "6px 12px 4px 12px",
  calendarRightPaddingDatetime: "4px 12px",
  calendarRightPaddingDaterange: "6px 12px 4px 12px",
  calendarRightPaddingDatetimerange: "4px 12px",
  calendarRightPaddingMonth: "0",
  calendarRightPaddingYear: "0",
  calendarRightPaddingQuarter: "0",
  calendarRightPaddingMonthrange: "0",
  calendarRightPaddingQuarterrange: "0",
  calendarRightPaddingYearrange: "0",
  calendarRightPaddingWeek: "0"
};
function ed(e) {
  const {
    hoverColor: r,
    fontSize: t,
    textColor2: n,
    textColorDisabled: o,
    popoverColor: a,
    primaryColor: i,
    borderRadiusSmall: l,
    iconColor: s,
    iconColorDisabled: d,
    textColor1: u,
    dividerColor: f,
    boxShadow2: m,
    borderRadius: g,
    fontWeightStrong: h
  } = e;
  return Object.assign(Object.assign({}, CC), {
    itemFontSize: t,
    calendarDaysFontSize: t,
    calendarTitleFontSize: t,
    itemTextColor: n,
    itemTextColorDisabled: o,
    itemTextColorActive: a,
    itemTextColorCurrent: i,
    itemColorIncluded: Q(i, {
      alpha: 0.1
    }),
    itemColorHover: r,
    itemColorDisabled: r,
    itemColorActive: i,
    itemBorderRadius: l,
    panelColor: a,
    panelTextColor: n,
    arrowColor: s,
    calendarTitleTextColor: u,
    calendarTitleColorHover: r,
    calendarDaysTextColor: n,
    panelHeaderDividerColor: f,
    calendarDaysDividerColor: f,
    calendarDividerColor: f,
    panelActionDividerColor: f,
    panelBoxShadow: m,
    panelBorderRadius: g,
    calendarTitleFontWeight: h,
    scrollItemBorderRadius: g,
    iconColor: s,
    iconColorDisabled: d
  });
}
const bC = {
  name: "DatePicker",
  common: Sn,
  peers: {
    Input: ni,
    Button: oi,
    TimePicker: Js,
    Scrollbar: ti
  },
  self: ed
}, xC = {
  name: "DatePicker",
  common: W,
  peers: {
    Input: qt,
    Button: zt,
    TimePicker: Zs,
    Scrollbar: $t
  },
  self(e) {
    const {
      popoverColor: r,
      hoverColor: t,
      primaryColor: n
    } = e, o = ed(e);
    return o.itemColorDisabled = re(r, t), o.itemColorIncluded = Q(n, {
      alpha: 0.15
    }), o.itemColorHover = re(r, t), o;
  }
}, zo = "n-date-picker";
function Or(e) {
  return re(e, [255, 255, 255, 0.16]);
}
function ao(e) {
  return re(e, [0, 0, 0, 0.12]);
}
const SC = "n-button-group", yC = $([oe("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [ae("color", [B("border", {
  borderColor: "var(--n-border-color)"
}), ae("disabled", [B("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Vt("disabled", [$("&:focus", [B("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), $("&:hover", [B("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), $("&:active", [B("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), ae("pressed", [B("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), ae("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [B("border", {
  border: "var(--n-border-disabled)"
})]), Vt("disabled", [$("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [B("state-border", {
  border: "var(--n-border-focus)"
})]), $("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [B("state-border", {
  border: "var(--n-border-hover)"
})]), $("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [B("state-border", {
  border: "var(--n-border-pressed)"
})]), ae("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [B("state-border", {
  border: "var(--n-border-pressed)"
})])]), ae("loading", "cursor: wait;"), oe("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [ae("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), Eo && "MozBoxSizing" in document.createElement("div").style ? $("&::moz-focus-inner", {
  border: 0
}) : null, B("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), B("border", {
  border: "var(--n-border)"
}), B("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), B("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [oe("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [wo({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), aC()]), B("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [$("~", [B("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), ae("block", `
 display: flex;
 width: 100%;
 `), ae("dashed", [B("border, state-border", {
  borderStyle: "dashed !important"
})]), ae("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), $("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), $("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]);
var wC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const PC = Object.assign(Object.assign({}, Jt.props), {
  color: String,
  textColor: String,
  text: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  size: String,
  ghost: Boolean,
  round: Boolean,
  secondary: Boolean,
  tertiary: Boolean,
  quaternary: Boolean,
  strong: Boolean,
  focusable: {
    type: Boolean,
    default: !0
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  tag: {
    type: String,
    default: "button"
  },
  type: {
    type: String,
    default: "default"
  },
  dashed: Boolean,
  renderIcon: Function,
  iconPlacement: {
    type: String,
    default: "left"
  },
  attrType: {
    type: String,
    default: "button"
  },
  bordered: {
    type: Boolean,
    default: !0
  },
  onClick: [Function, Array],
  nativeFocusBehavior: {
    type: Boolean,
    default: !Gs
  }
}), Pt = Ce({
  name: "Button",
  props: PC,
  slots: Object,
  setup(e) {
    wC.NODE_ENV !== "production" && At(() => {
      const {
        dashed: O,
        ghost: N,
        text: V,
        secondary: p,
        tertiary: T,
        quaternary: I
      } = e;
      (O || N || V) && (p || T || I) && wr("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const r = F(null), t = F(null), n = F(!1), o = Gt(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = Qe(SC, {}), {
      mergedSizeRef: i
    } = Io({}, {
      defaultSize: "medium",
      mergedSize: (O) => {
        const {
          size: N
        } = e;
        if (N) return N;
        const {
          size: V
        } = a;
        if (V) return V;
        const {
          mergedSize: p
        } = O || {};
        return p ? p.value : "medium";
      }
    }), l = P(() => e.focusable && !e.disabled), s = (O) => {
      var N;
      l.value || O.preventDefault(), !e.nativeFocusBehavior && (O.preventDefault(), !e.disabled && l.value && ((N = r.value) === null || N === void 0 || N.focus({
        preventScroll: !0
      })));
    }, d = (O) => {
      var N;
      if (!e.disabled && !e.loading) {
        const {
          onClick: V
        } = e;
        V && Pe(V, O), e.text || (N = t.value) === null || N === void 0 || N.play();
      }
    }, u = (O) => {
      switch (O.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          n.value = !1;
      }
    }, f = (O) => {
      switch (O.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            O.preventDefault();
            return;
          }
          n.value = !0;
      }
    }, m = () => {
      n.value = !1;
    }, {
      inlineThemeDisabled: g,
      mergedClsPrefixRef: h,
      mergedRtlRef: C
    } = Yn(e), y = Jt("Button", "-button", yC, oi, e, h), b = Za("Button", C, h), _ = P(() => {
      const O = y.value, {
        common: {
          cubicBezierEaseInOut: N,
          cubicBezierEaseOut: V
        },
        self: p
      } = O, {
        rippleDuration: T,
        opacityDisabled: I,
        fontWeight: U,
        fontWeightStrong: Y
      } = p, H = i.value, {
        dashed: S,
        type: A,
        ghost: J,
        text: ne,
        color: K,
        round: he,
        circle: ve,
        textColor: de,
        secondary: Te,
        tertiary: Fe,
        quaternary: et,
        strong: be
      } = e, we = {
        "--n-font-weight": be ? Y : U
      };
      let pe = {
        "--n-color": "initial",
        "--n-color-hover": "initial",
        "--n-color-pressed": "initial",
        "--n-color-focus": "initial",
        "--n-color-disabled": "initial",
        "--n-ripple-color": "initial",
        "--n-text-color": "initial",
        "--n-text-color-hover": "initial",
        "--n-text-color-pressed": "initial",
        "--n-text-color-focus": "initial",
        "--n-text-color-disabled": "initial"
      };
      const Be = A === "tertiary", nt = A === "default", me = Be ? "default" : A;
      if (ne) {
        const Me = de || K;
        pe = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Me || p[Se("textColorText", me)],
          "--n-text-color-hover": Me ? Or(Me) : p[Se("textColorTextHover", me)],
          "--n-text-color-pressed": Me ? ao(Me) : p[Se("textColorTextPressed", me)],
          "--n-text-color-focus": Me ? Or(Me) : p[Se("textColorTextHover", me)],
          "--n-text-color-disabled": Me || p[Se("textColorTextDisabled", me)]
        };
      } else if (J || S) {
        const Me = de || K;
        pe = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": K || p[Se("rippleColor", me)],
          "--n-text-color": Me || p[Se("textColorGhost", me)],
          "--n-text-color-hover": Me ? Or(Me) : p[Se("textColorGhostHover", me)],
          "--n-text-color-pressed": Me ? ao(Me) : p[Se("textColorGhostPressed", me)],
          "--n-text-color-focus": Me ? Or(Me) : p[Se("textColorGhostHover", me)],
          "--n-text-color-disabled": Me || p[Se("textColorGhostDisabled", me)]
        };
      } else if (Te) {
        const Me = nt ? p.textColor : Be ? p.textColorTertiary : p[Se("color", me)], He = K || Me, tt = A !== "default" && A !== "tertiary";
        pe = {
          "--n-color": tt ? Q(He, {
            alpha: Number(p.colorOpacitySecondary)
          }) : p.colorSecondary,
          "--n-color-hover": tt ? Q(He, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-pressed": tt ? Q(He, {
            alpha: Number(p.colorOpacitySecondaryPressed)
          }) : p.colorSecondaryPressed,
          "--n-color-focus": tt ? Q(He, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-disabled": p.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": He,
          "--n-text-color-hover": He,
          "--n-text-color-pressed": He,
          "--n-text-color-focus": He,
          "--n-text-color-disabled": He
        };
      } else if (Fe || et) {
        const Me = nt ? p.textColor : Be ? p.textColorTertiary : p[Se("color", me)], He = K || Me;
        Fe ? (pe["--n-color"] = p.colorTertiary, pe["--n-color-hover"] = p.colorTertiaryHover, pe["--n-color-pressed"] = p.colorTertiaryPressed, pe["--n-color-focus"] = p.colorSecondaryHover, pe["--n-color-disabled"] = p.colorTertiary) : (pe["--n-color"] = p.colorQuaternary, pe["--n-color-hover"] = p.colorQuaternaryHover, pe["--n-color-pressed"] = p.colorQuaternaryPressed, pe["--n-color-focus"] = p.colorQuaternaryHover, pe["--n-color-disabled"] = p.colorQuaternary), pe["--n-ripple-color"] = "#0000", pe["--n-text-color"] = He, pe["--n-text-color-hover"] = He, pe["--n-text-color-pressed"] = He, pe["--n-text-color-focus"] = He, pe["--n-text-color-disabled"] = He;
      } else
        pe = {
          "--n-color": K || p[Se("color", me)],
          "--n-color-hover": K ? Or(K) : p[Se("colorHover", me)],
          "--n-color-pressed": K ? ao(K) : p[Se("colorPressed", me)],
          "--n-color-focus": K ? Or(K) : p[Se("colorFocus", me)],
          "--n-color-disabled": K || p[Se("colorDisabled", me)],
          "--n-ripple-color": K || p[Se("rippleColor", me)],
          "--n-text-color": de || (K ? p.textColorPrimary : Be ? p.textColorTertiary : p[Se("textColor", me)]),
          "--n-text-color-hover": de || (K ? p.textColorHoverPrimary : p[Se("textColorHover", me)]),
          "--n-text-color-pressed": de || (K ? p.textColorPressedPrimary : p[Se("textColorPressed", me)]),
          "--n-text-color-focus": de || (K ? p.textColorFocusPrimary : p[Se("textColorFocus", me)]),
          "--n-text-color-disabled": de || (K ? p.textColorDisabledPrimary : p[Se("textColorDisabled", me)])
        };
      let bt = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      ne ? bt = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : bt = {
        "--n-border": p[Se("border", me)],
        "--n-border-hover": p[Se("borderHover", me)],
        "--n-border-pressed": p[Se("borderPressed", me)],
        "--n-border-focus": p[Se("borderFocus", me)],
        "--n-border-disabled": p[Se("borderDisabled", me)]
      };
      const {
        [Se("height", H)]: ye,
        [Se("fontSize", H)]: ot,
        [Se("padding", H)]: at,
        [Se("paddingRound", H)]: It,
        [Se("iconSize", H)]: Ht,
        [Se("borderRadius", H)]: Dt,
        [Se("iconMargin", H)]: Wt,
        waveOpacity: xt
      } = p, Nt = {
        "--n-width": ve && !ne ? ye : "initial",
        "--n-height": ne ? "initial" : ye,
        "--n-font-size": ot,
        "--n-padding": ve || ne ? "initial" : he ? It : at,
        "--n-icon-size": Ht,
        "--n-icon-margin": Wt,
        "--n-border-radius": ne ? "initial" : ve || he ? ye : Dt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": N,
        "--n-bezier-ease-out": V,
        "--n-ripple-duration": T,
        "--n-opacity-disabled": I,
        "--n-wave-opacity": xt
      }, we), pe), bt), Nt);
    }), E = g ? zr("button", P(() => {
      let O = "";
      const {
        dashed: N,
        type: V,
        ghost: p,
        text: T,
        color: I,
        round: U,
        circle: Y,
        textColor: H,
        secondary: S,
        tertiary: A,
        quaternary: J,
        strong: ne
      } = e;
      N && (O += "a"), p && (O += "b"), T && (O += "c"), U && (O += "d"), Y && (O += "e"), S && (O += "f"), A && (O += "g"), J && (O += "h"), ne && (O += "i"), I && (O += `j${Wi(I)}`), H && (O += `k${Wi(H)}`);
      const {
        value: K
      } = i;
      return O += `l${K[0]}`, O += `m${V[0]}`, O;
    }), _, e) : void 0;
    return {
      selfElRef: r,
      waveElRef: t,
      mergedClsPrefix: h,
      mergedFocusable: l,
      mergedSize: i,
      showBorder: o,
      enterPressed: n,
      rtlEnabled: b,
      handleMousedown: s,
      handleKeydown: f,
      handleBlur: m,
      handleKeyup: u,
      handleClick: d,
      customColorCssVars: P(() => {
        const {
          color: O
        } = e;
        if (!O) return null;
        const N = Or(O);
        return {
          "--n-border-color": O,
          "--n-border-color-hover": N,
          "--n-border-color-pressed": ao(O),
          "--n-border-color-focus": N,
          "--n-border-color-disabled": O
        };
      }),
      cssVars: g ? void 0 : _,
      themeClass: E == null ? void 0 : E.themeClass,
      onRender: E == null ? void 0 : E.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      tag: r,
      onRender: t
    } = this;
    t == null || t();
    const n = Cr(this.$slots.default, (o) => o && c("span", {
      class: `${e}-button__content`
    }, o));
    return c(r, {
      ref: "selfElRef",
      class: [
        this.themeClass,
        `${e}-button`,
        `${e}-button--${this.type}-type`,
        `${e}-button--${this.mergedSize}-type`,
        this.rtlEnabled && `${e}-button--rtl`,
        this.disabled && `${e}-button--disabled`,
        this.block && `${e}-button--block`,
        this.enterPressed && `${e}-button--pressed`,
        !this.text && this.dashed && `${e}-button--dashed`,
        this.color && `${e}-button--color`,
        this.secondary && `${e}-button--secondary`,
        this.loading && `${e}-button--loading`,
        this.ghost && `${e}-button--ghost`
        // required for button group border collapse
      ],
      tabindex: this.mergedFocusable ? 0 : -1,
      type: this.attrType,
      style: this.cssVars,
      disabled: this.disabled,
      onClick: this.handleClick,
      onBlur: this.handleBlur,
      onMousedown: this.handleMousedown,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, this.iconPlacement === "right" && n, c(Hv, {
      width: !0
    }, {
      default: () => Cr(this.$slots.icon, (o) => (this.loading || this.renderIcon || o) && c("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Bm(this.$slots.default) ? "0" : ""
        }
      }, c(ei, null, {
        default: () => this.loading ? c(Ns, {
          clsPrefix: e,
          key: "loading",
          class: `${e}-icon-slot`,
          strokeWidth: 20
        }) : c("div", {
          key: "icon",
          class: `${e}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : o)
      })))
    }), this.iconPlacement === "left" && n, this.text ? null : c(lC, {
      ref: "waveElRef",
      clsPrefix: e
    }), this.showBorder ? c("div", {
      "aria-hidden": !0,
      class: `${e}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? c("div", {
      "aria-hidden": !0,
      class: `${e}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), Sr = Pt, Wr = 40, DC = {
  date: sc,
  month: jn,
  year: Vl,
  quarter: Ll
};
function _C(e) {
  return (r, t) => {
    const n = (e + 1) % 7;
    return Bl(r, t, {
      weekStartsOn: n
    });
  };
}
function Ot(e, r, t, n = 0) {
  return (t === "week" ? _C(n) : DC[t])(e, r);
}
function oa(e, r, t, n, o, a) {
  return o === "date" ? TC(e, r, t, n) : OC(e, r, t, n, a);
}
function TC(e, r, t, n) {
  let o = !1, a = !1, i = !1;
  Array.isArray(t) && (t[0] < e && e < t[1] && (o = !0), Ot(t[0], e, "date") && (a = !0), Ot(t[1], e, "date") && (i = !0));
  const l = t !== null && (Array.isArray(t) ? Ot(t[0], e, "date") || Ot(t[1], e, "date") : Ot(t, e, "date"));
  return {
    type: "date",
    dateObject: {
      date: Ut(e),
      month: je(e),
      year: Xe(e)
    },
    inCurrentMonth: jn(e, r),
    isCurrentDate: Ot(n, e, "date"),
    inSpan: o,
    inSelectedWeek: !1,
    startOfSpan: a,
    endOfSpan: i,
    selected: l,
    ts: j(e)
  };
}
function td(e, r, t) {
  const n = new Date(2e3, e, 1).getTime();
  return Ne(n, r, {
    locale: t
  });
}
function rd(e, r, t) {
  const n = new Date(e, 1, 1).getTime();
  return Ne(n, r, {
    locale: t
  });
}
function nd(e, r, t) {
  const n = new Date(2e3, e * 3 - 2, 1).getTime();
  return Ne(n, r, {
    locale: t
  });
}
function OC(e, r, t, n, o) {
  let a = !1, i = !1, l = !1;
  Array.isArray(t) && (t[0] < e && e < t[1] && (a = !0), Ot(t[0], e, "week", o) && (i = !0), Ot(t[1], e, "week", o) && (l = !0));
  const s = t !== null && (Array.isArray(t) ? Ot(t[0], e, "week", o) || Ot(t[1], e, "week", o) : Ot(t, e, "week", o));
  return {
    type: "date",
    dateObject: {
      date: Ut(e),
      month: je(e),
      year: Xe(e)
    },
    inCurrentMonth: jn(e, r),
    isCurrentDate: Ot(n, e, "date"),
    inSpan: a,
    startOfSpan: i,
    endOfSpan: l,
    selected: !1,
    inSelectedWeek: s,
    ts: j(e)
  };
}
function MC(e, r, t, {
  monthFormat: n
}) {
  return {
    type: "month",
    monthFormat: n,
    dateObject: {
      month: je(e),
      year: Xe(e)
    },
    isCurrent: jn(t, e),
    selected: r !== null && Ot(r, e, "month"),
    ts: j(e)
  };
}
function RC(e, r, t, {
  yearFormat: n
}) {
  return {
    type: "year",
    yearFormat: n,
    dateObject: {
      year: Xe(e)
    },
    isCurrent: Vl(t, e),
    selected: r !== null && Ot(r, e, "year"),
    ts: j(e)
  };
}
function EC(e, r, t, {
  quarterFormat: n
}) {
  return {
    type: "quarter",
    quarterFormat: n,
    dateObject: {
      quarter: cc(e),
      year: Xe(e)
    },
    isCurrent: Ll(t, e),
    selected: r !== null && Ot(r, e, "quarter"),
    ts: j(e)
  };
}
function Ra(e, r, t, n, o = !1, a = !1) {
  const i = a ? "week" : "date", l = je(e);
  let s = j(dr(e)), d = j(Jr(s, -1));
  const u = [];
  let f = !o;
  for (; ru(d) !== n || f; )
    u.unshift(oa(d, e, r, t, i, n)), d = j(Jr(d, -1)), f = !1;
  for (; je(s) === l; )
    u.push(oa(s, e, r, t, i, n)), s = j(Jr(s, 1));
  const m = o ? u.length <= 28 ? 28 : u.length <= 35 ? 35 : 42 : 42;
  for (; u.length < m; )
    u.push(oa(s, e, r, t, i, n)), s = j(Jr(s, 1));
  return u;
}
function Ea(e, r, t, n) {
  const o = [], a = Vn(e);
  for (let i = 0; i < 12; i++)
    o.push(MC(j(vt(a, i)), r, t, n));
  return o;
}
function Ia(e, r, t, n) {
  const o = [], a = Vn(e);
  for (let i = 0; i < 4; i++)
    o.push(EC(j(lc(a, i)), r, t, n));
  return o;
}
function ka(e, r, t, n) {
  const o = n.value, a = [], i = Vn(ga(/* @__PURE__ */ new Date(), o[0]));
  for (let l = 0; l < o[1] - o[0]; l++)
    a.push(RC(j(ma(i, l)), e, r, t));
  return a;
}
function Ft(e, r, t, n) {
  const o = Zu(e, r, t, n);
  return Yt(o) ? Ne(o, r, n) === e ? o : new Date(Number.NaN) : o;
}
function uo(e) {
  if (e === void 0)
    return;
  if (typeof e == "number")
    return e;
  const [r, t, n] = e.split(":");
  return {
    hours: Number(r),
    minutes: Number(t),
    seconds: Number(n)
  };
}
function Xr(e, r) {
  return Array.isArray(e) ? e[r === "start" ? 0 : 1] : null;
}
const IC = "HH:mm:ss", od = {
  active: Boolean,
  dateFormat: String,
  calendarDayFormat: String,
  calendarHeaderYearFormat: String,
  calendarHeaderMonthFormat: String,
  calendarHeaderMonthYearSeparator: {
    type: String,
    required: !0
  },
  calendarHeaderMonthBeforeYear: {
    type: Boolean,
    default: void 0
  },
  timerPickerFormat: {
    type: String,
    value: IC
  },
  value: {
    type: [Array, Number],
    default: null
  },
  shortcuts: Object,
  defaultTime: [Number, String, Array],
  inputReadonly: Boolean,
  onClear: Function,
  onConfirm: Function,
  onClose: Function,
  onTabOut: Function,
  onKeydown: Function,
  actions: Array,
  onUpdateValue: {
    type: Function,
    required: !0
  },
  themeClass: String,
  onRender: Function,
  panel: Boolean,
  onNextMonth: Function,
  onPrevMonth: Function,
  onNextYear: Function,
  onPrevYear: Function
};
function ad(e) {
  const {
    dateLocaleRef: r,
    timePickerSizeRef: t,
    timePickerPropsRef: n,
    localeRef: o,
    mergedClsPrefixRef: a,
    mergedThemeRef: i
  } = Qe(zo), l = P(() => ({
    locale: r.value.locale
  })), s = F(null), d = ql();
  function u() {
    const {
      onClear: H
    } = e;
    H && H();
  }
  function f() {
    const {
      onConfirm: H,
      value: S
    } = e;
    H && H(S);
  }
  function m(H, S) {
    const {
      onUpdateValue: A
    } = e;
    A(H, S);
  }
  function g(H = !1) {
    const {
      onClose: S
    } = e;
    S && S(H);
  }
  function h() {
    const {
      onTabOut: H
    } = e;
    H && H();
  }
  function C() {
    m(null, !0), g(!0), u();
  }
  function y() {
    h();
  }
  function b() {
    (e.active || e.panel) && br(() => {
      const {
        value: H
      } = s;
      if (!H) return;
      const S = H.querySelectorAll("[data-n-date]");
      S.forEach((A) => {
        A.classList.add("transition-disabled");
      }), H.offsetWidth, S.forEach((A) => {
        A.classList.remove("transition-disabled");
      });
    });
  }
  function _(H) {
    H.key === "Tab" && H.target === s.value && d.shift && (H.preventDefault(), h());
  }
  function E(H) {
    const {
      value: S
    } = s;
    d.tab && H.target === S && (S != null && S.contains(H.relatedTarget)) && h();
  }
  let O = null, N = !1;
  function V() {
    O = e.value, N = !0;
  }
  function p() {
    N = !1;
  }
  function T() {
    N && (m(O, !1), N = !1);
  }
  function I(H) {
    return typeof H == "function" ? H() : H;
  }
  const U = F(!1);
  function Y() {
    U.value = !U.value;
  }
  return {
    mergedTheme: i,
    mergedClsPrefix: a,
    dateFnsOptions: l,
    timePickerSize: t,
    timePickerProps: n,
    selfRef: s,
    locale: o,
    doConfirm: f,
    doClose: g,
    doUpdateValue: m,
    doTabOut: h,
    handleClearClick: C,
    handleFocusDetectorFocus: y,
    disableTransitionOneTick: b,
    handlePanelKeyDown: _,
    handlePanelFocus: E,
    cachePendingValue: V,
    clearPendingValue: p,
    restorePendingValue: T,
    getShortcutValue: I,
    handleShortcutMouseleave: T,
    showMonthYearPanel: U,
    handleOpenQuickSelectMonthPanel: Y
  };
}
const ai = Object.assign(Object.assign({}, od), {
  defaultCalendarStartTime: Number,
  actions: {
    type: Array,
    default: () => ["now", "clear", "confirm"]
  }
});
function ii(e, r) {
  var t;
  const n = ad(e), {
    isValueInvalidRef: o,
    isDateDisabledRef: a,
    isDateInvalidRef: i,
    isTimeInvalidRef: l,
    isDateTimeInvalidRef: s,
    isHourDisabledRef: d,
    isMinuteDisabledRef: u,
    isSecondDisabledRef: f,
    localeRef: m,
    firstDayOfWeekRef: g,
    datePickerSlots: h,
    yearFormatRef: C,
    monthFormatRef: y,
    quarterFormatRef: b,
    yearRangeRef: _
  } = Qe(zo), E = {
    isValueInvalid: o,
    isDateDisabled: a,
    isDateInvalid: i,
    isTimeInvalid: l,
    isDateTimeInvalid: s,
    isHourDisabled: d,
    isMinuteDisabled: u,
    isSecondDisabled: f
  }, O = P(() => e.dateFormat || m.value.dateFormat), N = P(() => e.calendarDayFormat || m.value.dayFormat), V = F(e.value === null || Array.isArray(e.value) ? "" : Ne(e.value, O.value)), p = F(e.value === null || Array.isArray(e.value) ? (t = e.defaultCalendarStartTime) !== null && t !== void 0 ? t : Date.now() : e.value), T = F(null), I = F(null), U = F(null), Y = F(Date.now()), H = P(() => {
    var M;
    return Ra(p.value, e.value, Y.value, (M = g.value) !== null && M !== void 0 ? M : m.value.firstDayOfWeek, !1, r === "week");
  }), S = P(() => {
    const {
      value: M
    } = e;
    return Ea(p.value, Array.isArray(M) ? null : M, Y.value, {
      monthFormat: y.value
    });
  }), A = P(() => {
    const {
      value: M
    } = e;
    return ka(Array.isArray(M) ? null : M, Y.value, {
      yearFormat: C.value
    }, _);
  }), J = P(() => {
    const {
      value: M
    } = e;
    return Ia(p.value, Array.isArray(M) ? null : M, Y.value, {
      quarterFormat: b.value
    });
  }), ne = P(() => H.value.slice(0, 7).map((M) => {
    const {
      ts: ue
    } = M;
    return Ne(ue, N.value, n.dateFnsOptions.value);
  })), K = P(() => Ne(p.value, e.calendarHeaderMonthFormat || m.value.monthFormat, n.dateFnsOptions.value)), he = P(() => Ne(p.value, e.calendarHeaderYearFormat || m.value.yearFormat, n.dateFnsOptions.value)), ve = P(() => {
    var M;
    return (M = e.calendarHeaderMonthBeforeYear) !== null && M !== void 0 ? M : m.value.monthBeforeYear;
  });
  mt(p, (M, ue) => {
    (r === "date" || r === "datetime") && (jn(M, ue) || n.disableTransitionOneTick());
  }), mt(P(() => e.value), (M) => {
    M !== null && !Array.isArray(M) ? (V.value = Ne(M, O.value, n.dateFnsOptions.value), p.value = M) : V.value = "";
  });
  function de(M) {
    var ue;
    if (r === "datetime") return j(Ba(M));
    if (r === "month") return j(dr(M));
    if (r === "year") return j(Vn(M));
    if (r === "quarter") return j($n(M));
    if (r === "week") {
      const Ee = (((ue = g.value) !== null && ue !== void 0 ? ue : m.value.firstDayOfWeek) + 1) % 7;
      return j(Qt(M, {
        weekStartsOn: Ee
      }));
    }
    return j(on(M));
  }
  function Te(M, ue) {
    const {
      isDateDisabled: {
        value: Ee
      }
    } = E;
    return Ee ? Ee(M, ue) : !1;
  }
  function Fe(M) {
    const ue = Ft(M, O.value, /* @__PURE__ */ new Date(), n.dateFnsOptions.value);
    if (Yt(ue)) {
      if (e.value === null)
        n.doUpdateValue(j(de(Date.now())), e.panel);
      else if (!Array.isArray(e.value)) {
        const Ee = Ct(e.value, {
          year: Xe(ue),
          month: je(ue),
          date: Ut(ue)
        });
        n.doUpdateValue(j(de(j(Ee))), e.panel);
      }
    } else
      V.value = M;
  }
  function et() {
    const M = Ft(V.value, O.value, /* @__PURE__ */ new Date(), n.dateFnsOptions.value);
    if (Yt(M)) {
      if (e.value === null)
        n.doUpdateValue(j(de(Date.now())), !1);
      else if (!Array.isArray(e.value)) {
        const ue = Ct(e.value, {
          year: Xe(M),
          month: je(M),
          date: Ut(M)
        });
        n.doUpdateValue(j(de(j(ue))), !1);
      }
    } else
      ot();
  }
  function be() {
    n.doUpdateValue(null, !0), V.value = "", n.doClose(!0), n.handleClearClick();
  }
  function we() {
    n.doUpdateValue(j(de(Date.now())), !0);
    const M = Date.now();
    p.value = M, n.doClose(!0), e.panel && (r === "month" || r === "quarter" || r === "year") && (n.disableTransitionOneTick(), it(M));
  }
  const pe = F(null);
  function Be(M) {
    M.type === "date" && r === "week" && (pe.value = de(j(M.ts)));
  }
  function nt(M) {
    return M.type === "date" && r === "week" ? de(j(M.ts)) === pe.value : !1;
  }
  function me(M) {
    if (Te(M.ts, M.type === "date" ? {
      type: "date",
      year: M.dateObject.year,
      month: M.dateObject.month,
      date: M.dateObject.date
    } : M.type === "month" ? {
      type: "month",
      year: M.dateObject.year,
      month: M.dateObject.month
    } : M.type === "year" ? {
      type: "year",
      year: M.dateObject.year
    } : {
      type: "quarter",
      year: M.dateObject.year,
      quarter: M.dateObject.quarter
    }))
      return;
    let ue;
    if (e.value !== null && !Array.isArray(e.value) ? ue = e.value : ue = Date.now(), r === "datetime" && e.defaultTime !== null && !Array.isArray(e.defaultTime)) {
      const Ee = uo(e.defaultTime);
      Ee && (ue = j(Ct(ue, Ee)));
    }
    switch (ue = j(M.type === "quarter" && M.dateObject.quarter ? rf(ga(ue, M.dateObject.year), M.dateObject.quarter) : Ct(ue, M.dateObject)), n.doUpdateValue(de(ue), e.panel || r === "date" || r === "week" || r === "year"), r) {
      case "date":
      case "week":
        n.doClose();
        break;
      case "year":
        e.panel && n.disableTransitionOneTick(), n.doClose();
        break;
      case "month":
        n.disableTransitionOneTick(), it(ue);
        break;
      case "quarter":
        n.disableTransitionOneTick(), it(ue);
        break;
    }
  }
  function bt(M, ue) {
    let Ee;
    e.value !== null && !Array.isArray(e.value) ? Ee = e.value : Ee = Date.now(), Ee = j(M.type === "month" ? La(Ee, M.dateObject.month) : ga(Ee, M.dateObject.year)), ue(Ee), it(Ee);
  }
  function ye(M) {
    p.value = M;
  }
  function ot(M) {
    if (e.value === null || Array.isArray(e.value)) {
      V.value = "";
      return;
    }
    M === void 0 && (M = e.value), V.value = Ne(M, O.value, n.dateFnsOptions.value);
  }
  function at() {
    E.isDateInvalid.value || E.isTimeInvalid.value || (n.doConfirm(), It());
  }
  function It() {
    e.active && n.doClose();
  }
  function Ht() {
    var M;
    p.value = j(ma(p.value, 1)), (M = e.onNextYear) === null || M === void 0 || M.call(e);
  }
  function Dt() {
    var M;
    p.value = j(ma(p.value, -1)), (M = e.onPrevYear) === null || M === void 0 || M.call(e);
  }
  function Wt() {
    var M;
    p.value = j(vt(p.value, 1)), (M = e.onNextMonth) === null || M === void 0 || M.call(e);
  }
  function xt() {
    var M;
    p.value = j(vt(p.value, -1)), (M = e.onPrevMonth) === null || M === void 0 || M.call(e);
  }
  function Nt() {
    const {
      value: M
    } = T;
    return (M == null ? void 0 : M.listElRef) || null;
  }
  function Me() {
    const {
      value: M
    } = T;
    return (M == null ? void 0 : M.itemsElRef) || null;
  }
  function He() {
    var M;
    (M = I.value) === null || M === void 0 || M.sync();
  }
  function tt(M) {
    M !== null && n.doUpdateValue(M, e.panel);
  }
  function Kt(M) {
    n.cachePendingValue();
    const ue = n.getShortcutValue(M);
    typeof ue == "number" && n.doUpdateValue(ue, !1);
  }
  function _t(M) {
    const ue = n.getShortcutValue(M);
    typeof ue == "number" && (n.doUpdateValue(ue, e.panel), n.clearPendingValue(), at());
  }
  function it(M) {
    const {
      value: ue
    } = e;
    if (U.value) {
      const Ee = je(M === void 0 ? ue === null ? Date.now() : ue : M);
      U.value.scrollTo({
        top: Ee * Wr
      });
    }
    if (T.value) {
      const Ee = Xe(M === void 0 ? ue === null ? Date.now() : ue : M) - _.value[0];
      T.value.scrollTo({
        top: Ee * Wr
      });
    }
  }
  const ht = {
    monthScrollbarRef: U,
    yearScrollbarRef: I,
    yearVlRef: T
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    dateArray: H,
    monthArray: S,
    yearArray: A,
    quarterArray: J,
    calendarYear: he,
    calendarMonth: K,
    weekdays: ne,
    calendarMonthBeforeYear: ve,
    mergedIsDateDisabled: Te,
    nextYear: Ht,
    prevYear: Dt,
    nextMonth: Wt,
    prevMonth: xt,
    handleNowClick: we,
    handleConfirmClick: at,
    handleSingleShortcutMouseenter: Kt,
    handleSingleShortcutClick: _t
  }, E), n), ht), {
    // datetime only
    handleDateClick: me,
    handleDateInputBlur: et,
    handleDateInput: Fe,
    handleDateMouseEnter: Be,
    isWeekHovered: nt,
    handleTimePickerChange: tt,
    clearSelectedDateTime: be,
    virtualListContainer: Nt,
    virtualListContent: Me,
    handleVirtualListScroll: He,
    timePickerSize: n.timePickerSize,
    dateInputValue: V,
    datePickerSlots: h,
    handleQuickMonthClick: bt,
    justifyColumnsScrollState: it,
    calendarValue: p,
    onUpdateCalendarValue: ye
  });
}
const id = Ce({
  name: "MonthPanel",
  props: Object.assign(Object.assign({}, ai), {
    type: {
      type: String,
      required: !0
    },
    // panelHeader prop
    useAsQuickJump: Boolean
  }),
  setup(e) {
    const r = ii(e, e.type), {
      dateLocaleRef: t
    } = qn("DatePicker"), n = (i) => {
      switch (i.type) {
        case "year":
          return rd(i.dateObject.year, i.yearFormat, t.value.locale);
        case "month":
          return td(i.dateObject.month, i.monthFormat, t.value.locale);
        case "quarter":
          return nd(i.dateObject.quarter, i.quarterFormat, t.value.locale);
      }
    }, {
      useAsQuickJump: o
    } = e, a = (i, l, s) => {
      const {
        mergedIsDateDisabled: d,
        handleDateClick: u,
        handleQuickMonthClick: f
      } = r;
      return c("div", {
        "data-n-date": !0,
        key: l,
        class: [`${s}-date-panel-month-calendar__picker-col-item`, i.isCurrent && `${s}-date-panel-month-calendar__picker-col-item--current`, i.selected && `${s}-date-panel-month-calendar__picker-col-item--selected`, !o && d(i.ts, i.type === "year" ? {
          type: "year",
          year: i.dateObject.year
        } : i.type === "month" ? {
          type: "month",
          year: i.dateObject.year,
          month: i.dateObject.month
        } : i.type === "quarter" ? {
          type: "month",
          year: i.dateObject.year,
          month: i.dateObject.quarter
        } : null) && `${s}-date-panel-month-calendar__picker-col-item--disabled`],
        onClick: () => {
          o ? f(i, (m) => {
            e.onUpdateValue(m, !1);
          }) : u(i);
        }
      }, n(i));
    };
    return ar(() => {
      r.justifyColumnsScrollState();
    }), Object.assign(Object.assign({}, r), {
      renderItem: a
    });
  },
  render() {
    const {
      mergedClsPrefix: e,
      mergedTheme: r,
      shortcuts: t,
      actions: n,
      renderItem: o,
      type: a,
      onRender: i
    } = this;
    return i == null || i(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${e}-date-panel`, `${e}-date-panel--month`, !this.panel && `${e}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, c("div", {
      class: `${e}-date-panel-month-calendar`
    }, c(Xt, {
      ref: "yearScrollbarRef",
      class: `${e}-date-panel-month-calendar__picker-col`,
      theme: r.peers.Scrollbar,
      themeOverrides: r.peerOverrides.Scrollbar,
      container: this.virtualListContainer,
      content: this.virtualListContent,
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => c(ya, {
        ref: "yearVlRef",
        items: this.yearArray,
        itemSize: Wr,
        showScrollbar: !1,
        keyField: "ts",
        onScroll: this.handleVirtualListScroll,
        paddingBottom: 4
      }, {
        default: ({
          item: l,
          index: s
        }) => o(l, s, e)
      })
    }), a === "month" || a === "quarter" ? c("div", {
      class: `${e}-date-panel-month-calendar__picker-col`
    }, c(Xt, {
      ref: "monthScrollbarRef",
      theme: r.peers.Scrollbar,
      themeOverrides: r.peerOverrides.Scrollbar
    }, {
      default: () => [(a === "month" ? this.monthArray : this.quarterArray).map((l, s) => o(l, s, e)), c("div", {
        class: `${e}-date-panel-${a}-calendar__padding`
      })]
    })) : null), Cr(this.datePickerSlots.footer, (l) => l ? c("div", {
      class: `${e}-date-panel-footer`
    }, l) : null), n != null && n.length || t ? c("div", {
      class: `${e}-date-panel-actions`
    }, c("div", {
      class: `${e}-date-panel-actions__prefix`
    }, t && Object.keys(t).map((l) => {
      const s = t[l];
      return Array.isArray(s) ? null : c(Sr, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(s);
        },
        onClick: () => {
          this.handleSingleShortcutClick(s);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => l
      });
    })), c("div", {
      class: `${e}-date-panel-actions__suffix`
    }, n != null && n.includes("clear") ? Et(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(Pt, {
      theme: r.peers.Button,
      themeOverrides: r.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, n != null && n.includes("now") ? Et(this.datePickerSlots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(Pt, {
      theme: r.peers.Button,
      themeOverrides: r.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, n != null && n.includes("confirm") ? Et(this.datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [c(Pt, {
      theme: r.peers.Button,
      themeOverrides: r.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Vr, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), fn = Ce({
  props: {
    mergedClsPrefix: {
      type: String,
      required: !0
    },
    value: Number,
    monthBeforeYear: {
      type: Boolean,
      required: !0
    },
    monthYearSeparator: {
      type: String,
      required: !0
    },
    calendarMonth: {
      type: String,
      required: !0
    },
    calendarYear: {
      type: String,
      required: !0
    },
    onUpdateValue: {
      type: Function,
      required: !0
    }
  },
  setup() {
    const e = F(null), r = F(null), t = F(!1);
    function n(a) {
      var i;
      t.value && !(!((i = e.value) === null || i === void 0) && i.contains(Oo(a))) && (t.value = !1);
    }
    function o() {
      t.value = !t.value;
    }
    return {
      show: t,
      triggerRef: e,
      monthPanelRef: r,
      handleHeaderClick: o,
      handleClickOutside: n
    };
  },
  render() {
    const {
      handleClickOutside: e,
      mergedClsPrefix: r
    } = this;
    return c("div", {
      class: `${r}-date-panel-month__month-year`,
      ref: "triggerRef"
    }, c(ja, null, {
      default: () => [c(Ua, null, {
        default: () => c("div", {
          class: [`${r}-date-panel-month__text`, this.show && `${r}-date-panel-month__text--active`],
          onClick: this.handleHeaderClick
        }, this.monthBeforeYear ? [this.calendarMonth, this.monthYearSeparator, this.calendarYear] : [this.calendarYear, this.monthYearSeparator, this.calendarMonth])
      }), c(Ya, {
        show: this.show,
        teleportDisabled: !0
      }, {
        default: () => c($r, {
          name: "fade-in-scale-up-transition",
          appear: !0
        }, {
          default: () => this.show ? Ln(c(id, {
            ref: "monthPanelRef",
            onUpdateValue: this.onUpdateValue,
            actions: [],
            calendarHeaderMonthYearSeparator: this.monthYearSeparator,
            // month and year click show month type
            type: "month",
            key: "month",
            useAsQuickJump: !0,
            value: this.value
          }), [[Va, e, void 0, {
            capture: !0
          }]]) : null
        })
      })]
    }));
  }
});
var kC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const FC = Ce({
  name: "DatePanel",
  props: Object.assign(Object.assign({}, ai), {
    type: {
      type: String,
      required: !0
    }
  }),
  setup(e) {
    return kC.NODE_ENV !== "production" && At(() => {
      var r;
      !((r = e.actions) === null || r === void 0) && r.includes("confirm") && wr("date-picker", "The `confirm` action is not supported for n-date-picker of `date` type");
    }), ii(e, e.type);
  },
  render() {
    var e, r, t;
    const {
      mergedClsPrefix: n,
      mergedTheme: o,
      shortcuts: a,
      onRender: i,
      datePickerSlots: l,
      type: s
    } = this;
    return i == null || i(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${n}-date-panel`, `${n}-date-panel--${s}`, !this.panel && `${n}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, c("div", {
      class: `${n}-date-panel-calendar`
    }, c("div", {
      class: `${n}-date-panel-month`
    }, c("div", {
      class: `${n}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, ke(l["prev-year"], () => [c(sn, null)])), c("div", {
      class: `${n}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, ke(l["prev-month"], () => [c(ln, null)])), c(fn, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix: n,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), c("div", {
      class: `${n}-date-panel-month__next`,
      onClick: this.nextMonth
    }, ke(l["next-month"], () => [c(cn, null)])), c("div", {
      class: `${n}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, ke(l["next-year"], () => [c(dn, null)]))), c("div", {
      class: `${n}-date-panel-weekdays`
    }, this.weekdays.map((d) => c("div", {
      key: d,
      class: `${n}-date-panel-weekdays__day`
    }, d))), c("div", {
      class: `${n}-date-panel-dates`
    }, this.dateArray.map((d, u) => c("div", {
      "data-n-date": !0,
      key: u,
      class: [`${n}-date-panel-date`, {
        [`${n}-date-panel-date--current`]: d.isCurrentDate,
        [`${n}-date-panel-date--selected`]: d.selected,
        [`${n}-date-panel-date--excluded`]: !d.inCurrentMonth,
        [`${n}-date-panel-date--disabled`]: this.mergedIsDateDisabled(d.ts, {
          type: "date",
          year: d.dateObject.year,
          month: d.dateObject.month,
          date: d.dateObject.date
        }),
        [`${n}-date-panel-date--week-hovered`]: this.isWeekHovered(d),
        [`${n}-date-panel-date--week-selected`]: d.inSelectedWeek
      }],
      onClick: () => {
        this.handleDateClick(d);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(d);
      }
    }, c("div", {
      class: `${n}-date-panel-date__trigger`
    }), d.dateObject.date, d.isCurrentDate ? c("div", {
      class: `${n}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? c("div", {
      class: `${n}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${n}-date-panel-actions`
    }, c("div", {
      class: `${n}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) ? null : c(Sr, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(u);
        },
        onClick: () => {
          this.handleSingleShortcutClick(u);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => d
      });
    })), c("div", {
      class: `${n}-date-panel-actions__suffix`
    }, !((r = this.actions) === null || r === void 0) && r.includes("clear") ? Et(this.$slots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(Pt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("now") ? Et(this.$slots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(Pt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null)) : null, c(Vr, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), li = Object.assign(Object.assign({}, od), {
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  actions: {
    type: Array,
    default: () => ["clear", "confirm"]
  }
});
function si(e, r) {
  var t, n;
  const {
    isDateDisabledRef: o,
    isStartHourDisabledRef: a,
    isEndHourDisabledRef: i,
    isStartMinuteDisabledRef: l,
    isEndMinuteDisabledRef: s,
    isStartSecondDisabledRef: d,
    isEndSecondDisabledRef: u,
    isStartDateInvalidRef: f,
    isEndDateInvalidRef: m,
    isStartTimeInvalidRef: g,
    isEndTimeInvalidRef: h,
    isStartValueInvalidRef: C,
    isEndValueInvalidRef: y,
    isRangeInvalidRef: b,
    localeRef: _,
    rangesRef: E,
    closeOnSelectRef: O,
    updateValueOnCloseRef: N,
    firstDayOfWeekRef: V,
    datePickerSlots: p,
    monthFormatRef: T,
    yearFormatRef: I,
    quarterFormatRef: U,
    yearRangeRef: Y
  } = Qe(zo), H = {
    isDateDisabled: o,
    isStartHourDisabled: a,
    isEndHourDisabled: i,
    isStartMinuteDisabled: l,
    isEndMinuteDisabled: s,
    isStartSecondDisabled: d,
    isEndSecondDisabled: u,
    isStartDateInvalid: f,
    isEndDateInvalid: m,
    isStartTimeInvalid: g,
    isEndTimeInvalid: h,
    isStartValueInvalid: C,
    isEndValueInvalid: y,
    isRangeInvalid: b
  }, S = ad(e), A = F(null), J = F(null), ne = F(null), K = F(null), he = F(null), ve = F(null), de = F(null), Te = F(null), {
    value: Fe
  } = e, et = (t = e.defaultCalendarStartTime) !== null && t !== void 0 ? t : Array.isArray(Fe) && typeof Fe[0] == "number" ? Fe[0] : Date.now(), be = F(et), we = F((n = e.defaultCalendarEndTime) !== null && n !== void 0 ? n : Array.isArray(Fe) && typeof Fe[1] == "number" ? Fe[1] : j(vt(et, 1)));
  qe(!0);
  const pe = F(Date.now()), Be = F(!1), nt = F(0), me = P(() => e.dateFormat || _.value.dateFormat), bt = P(() => e.calendarDayFormat || _.value.dayFormat), ye = F(Array.isArray(Fe) ? Ne(Fe[0], me.value, S.dateFnsOptions.value) : ""), ot = F(Array.isArray(Fe) ? Ne(Fe[1], me.value, S.dateFnsOptions.value) : ""), at = P(() => Be.value ? "end" : "start"), It = P(() => {
    var x;
    return Ra(be.value, e.value, pe.value, (x = V.value) !== null && x !== void 0 ? x : _.value.firstDayOfWeek);
  }), Ht = P(() => {
    var x;
    return Ra(we.value, e.value, pe.value, (x = V.value) !== null && x !== void 0 ? x : _.value.firstDayOfWeek);
  }), Dt = P(() => It.value.slice(0, 7).map((x) => {
    const {
      ts: L
    } = x;
    return Ne(L, bt.value, S.dateFnsOptions.value);
  })), Wt = P(() => Ne(be.value, e.calendarHeaderMonthFormat || _.value.monthFormat, S.dateFnsOptions.value)), xt = P(() => Ne(we.value, e.calendarHeaderMonthFormat || _.value.monthFormat, S.dateFnsOptions.value)), Nt = P(() => Ne(be.value, e.calendarHeaderYearFormat || _.value.yearFormat, S.dateFnsOptions.value)), Me = P(() => Ne(we.value, e.calendarHeaderYearFormat || _.value.yearFormat, S.dateFnsOptions.value)), He = P(() => {
    const {
      value: x
    } = e;
    return Array.isArray(x) ? x[0] : null;
  }), tt = P(() => {
    const {
      value: x
    } = e;
    return Array.isArray(x) ? x[1] : null;
  }), Kt = P(() => {
    const {
      shortcuts: x
    } = e;
    return x || E.value;
  }), _t = P(() => ka(Xr(e.value, "start"), pe.value, {
    yearFormat: I.value
  }, Y)), it = P(() => ka(Xr(e.value, "end"), pe.value, {
    yearFormat: I.value
  }, Y)), ht = P(() => {
    const x = Xr(e.value, "start");
    return Ia(x ?? Date.now(), x, pe.value, {
      quarterFormat: U.value
    });
  }), M = P(() => {
    const x = Xr(e.value, "end");
    return Ia(x ?? Date.now(), x, pe.value, {
      quarterFormat: U.value
    });
  }), ue = P(() => {
    const x = Xr(e.value, "start");
    return Ea(x ?? Date.now(), x, pe.value, {
      monthFormat: T.value
    });
  }), Ee = P(() => {
    const x = Xr(e.value, "end");
    return Ea(x ?? Date.now(), x, pe.value, {
      monthFormat: T.value
    });
  }), ir = P(() => {
    var x;
    return (x = e.calendarHeaderMonthBeforeYear) !== null && x !== void 0 ? x : _.value.monthBeforeYear;
  });
  mt(P(() => e.value), (x) => {
    if (x !== null && Array.isArray(x)) {
      const [L, se] = x;
      ye.value = Ne(L, me.value, S.dateFnsOptions.value), ot.value = Ne(se, me.value, S.dateFnsOptions.value), Be.value || fe(x);
    } else
      ye.value = "", ot.value = "";
  });
  function Bt(x, L) {
    (r === "daterange" || r === "datetimerange") && (Xe(x) !== Xe(L) || je(x) !== je(L)) && S.disableTransitionOneTick();
  }
  mt(be, Bt), mt(we, Bt);
  function qe(x) {
    const L = dr(be.value), se = dr(we.value);
    (e.bindCalendarMonths || L >= se) && (x ? we.value = j(vt(L, 1)) : be.value = j(vt(se, -1)));
  }
  function gt() {
    be.value = j(vt(be.value, 12)), qe(!0);
  }
  function St() {
    be.value = j(vt(be.value, -12)), qe(!0);
  }
  function Zt() {
    be.value = j(vt(be.value, 1)), qe(!0);
  }
  function k() {
    be.value = j(vt(be.value, -1)), qe(!0);
  }
  function Z() {
    we.value = j(vt(we.value, 12)), qe(!1);
  }
  function le() {
    we.value = j(vt(we.value, -12)), qe(!1);
  }
  function Oe() {
    we.value = j(vt(we.value, 1)), qe(!1);
  }
  function Ie() {
    we.value = j(vt(we.value, -1)), qe(!1);
  }
  function w(x) {
    be.value = x, qe(!0);
  }
  function G(x) {
    we.value = x, qe(!1);
  }
  function te(x) {
    const L = o.value;
    if (!L) return !1;
    if (!Array.isArray(e.value) || at.value === "start")
      return L(x, "start", null);
    {
      const {
        value: se
      } = nt;
      return x < nt.value ? L(x, "start", [se, se]) : L(x, "end", [se, se]);
    }
  }
  function fe(x) {
    if (x === null) return;
    const [L, se] = x;
    be.value = L, dr(se) <= dr(L) ? we.value = j(dr(vt(L, 1))) : we.value = j(dr(se));
  }
  function Ke(x) {
    if (!Be.value)
      Be.value = !0, nt.value = x.ts, Je(x.ts, x.ts, "done");
    else {
      Be.value = !1;
      const {
        value: L
      } = e;
      e.panel && Array.isArray(L) ? Je(L[0], L[1], "done") : O.value && r === "daterange" && (N.value ? z() : D());
    }
  }
  function lt(x) {
    if (Be.value) {
      if (te(x.ts)) return;
      x.ts >= nt.value ? Je(nt.value, x.ts, "wipPreview") : Je(x.ts, nt.value, "wipPreview");
    }
  }
  function D() {
    b.value || (S.doConfirm(), z());
  }
  function z() {
    Be.value = !1, e.active && S.doClose();
  }
  function q(x) {
    typeof x != "number" && (x = j(x)), e.value === null ? S.doUpdateValue([x, x], e.panel) : Array.isArray(e.value) && S.doUpdateValue([x, Math.max(e.value[1], x)], e.panel);
  }
  function xe(x) {
    typeof x != "number" && (x = j(x)), e.value === null ? S.doUpdateValue([x, x], e.panel) : Array.isArray(e.value) && S.doUpdateValue([Math.min(e.value[0], x), x], e.panel);
  }
  function Je(x, L, se) {
    if (typeof x != "number" && (x = j(x)), se !== "shortcutPreview") {
      let ft, jt;
      if (r === "datetimerange") {
        const {
          defaultTime: Ue
        } = e;
        Array.isArray(Ue) ? (ft = uo(Ue[0]), jt = uo(Ue[1])) : (ft = uo(Ue), jt = ft);
      }
      ft && (x = j(Ct(x, ft))), jt && (L = j(Ct(L, jt)));
    }
    S.doUpdateValue([x, L], e.panel && se === "done");
  }
  function Le(x) {
    return j(r === "datetimerange" ? Ba(x) : r === "monthrange" ? dr(x) : on(x));
  }
  function Ae(x) {
    const L = Ft(x, me.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value);
    if (Yt(L))
      if (e.value) {
        if (Array.isArray(e.value)) {
          const se = Ct(e.value[0], {
            year: Xe(L),
            month: je(L),
            date: Ut(L)
          });
          q(Le(j(se)));
        }
      } else {
        const se = Ct(/* @__PURE__ */ new Date(), {
          year: Xe(L),
          month: je(L),
          date: Ut(L)
        });
        q(Le(j(se)));
      }
    else
      ye.value = x;
  }
  function v(x) {
    const L = Ft(x, me.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value);
    if (Yt(L)) {
      if (e.value === null) {
        const se = Ct(/* @__PURE__ */ new Date(), {
          year: Xe(L),
          month: je(L),
          date: Ut(L)
        });
        xe(Le(j(se)));
      } else if (Array.isArray(e.value)) {
        const se = Ct(e.value[1], {
          year: Xe(L),
          month: je(L),
          date: Ut(L)
        });
        xe(Le(j(se)));
      }
    } else
      ot.value = x;
  }
  function R() {
    const x = Ft(ye.value, me.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value), {
      value: L
    } = e;
    if (Yt(x)) {
      if (L === null) {
        const se = Ct(/* @__PURE__ */ new Date(), {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        q(Le(j(se)));
      } else if (Array.isArray(L)) {
        const se = Ct(L[0], {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        q(Le(j(se)));
      }
    } else
      De();
  }
  function ie() {
    const x = Ft(ot.value, me.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value), {
      value: L
    } = e;
    if (Yt(x)) {
      if (L === null) {
        const se = Ct(/* @__PURE__ */ new Date(), {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        xe(Le(j(se)));
      } else if (Array.isArray(L)) {
        const se = Ct(L[1], {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        xe(Le(j(se)));
      }
    } else
      De();
  }
  function De(x) {
    const {
      value: L
    } = e;
    if (L === null || !Array.isArray(L)) {
      ye.value = "", ot.value = "";
      return;
    }
    x === void 0 && (x = L), ye.value = Ne(x[0], me.value, S.dateFnsOptions.value), ot.value = Ne(x[1], me.value, S.dateFnsOptions.value);
  }
  function ze(x) {
    x !== null && q(x);
  }
  function _e(x) {
    x !== null && xe(x);
  }
  function Tt(x) {
    S.cachePendingValue();
    const L = S.getShortcutValue(x);
    Array.isArray(L) && Je(L[0], L[1], "shortcutPreview");
  }
  function Lt(x) {
    const L = S.getShortcutValue(x);
    Array.isArray(L) && (Je(L[0], L[1], "done"), S.clearPendingValue(), D());
  }
  function ut(x, L) {
    const se = x === void 0 ? e.value : x;
    if (x === void 0 || L === "start") {
      if (de.value) {
        const ft = Array.isArray(se) ? je(se[0]) : je(Date.now());
        de.value.scrollTo({
          debounce: !1,
          index: ft,
          elSize: Wr
        });
      }
      if (he.value) {
        const ft = (Array.isArray(se) ? Xe(se[0]) : Xe(Date.now())) - Y.value[0];
        he.value.scrollTo({
          index: ft,
          debounce: !1
        });
      }
    }
    if (x === void 0 || L === "end") {
      if (Te.value) {
        const ft = Array.isArray(se) ? je(se[1]) : je(Date.now());
        Te.value.scrollTo({
          debounce: !1,
          index: ft,
          elSize: Wr
        });
      }
      if (ve.value) {
        const ft = (Array.isArray(se) ? Xe(se[1]) : Xe(Date.now())) - Y.value[0];
        ve.value.scrollTo({
          index: ft,
          debounce: !1
        });
      }
    }
  }
  function lr(x, L) {
    const {
      value: se
    } = e, ft = !Array.isArray(se), jt = x.type === "year" && r !== "yearrange" ? ft ? Ct(x.ts, {
      month: je(r === "quarterrange" ? $n(/* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date())
    }).valueOf() : Ct(x.ts, {
      month: je(r === "quarterrange" ? $n(se[L === "start" ? 0 : 1]) : se[L === "start" ? 0 : 1])
    }).valueOf() : x.ts;
    if (ft) {
      const Yr = Le(jt), _r = [Yr, Yr];
      S.doUpdateValue(_r, e.panel), ut(_r, "start"), ut(_r, "end"), S.disableTransitionOneTick();
      return;
    }
    const Ue = [se[0], se[1]];
    let Dr = !1;
    switch (L === "start" ? (Ue[0] = Le(jt), Ue[0] > Ue[1] && (Ue[1] = Ue[0], Dr = !0)) : (Ue[1] = Le(jt), Ue[0] > Ue[1] && (Ue[0] = Ue[1], Dr = !0)), S.doUpdateValue(Ue, e.panel), r) {
      case "monthrange":
      case "quarterrange":
        S.disableTransitionOneTick(), Dr ? (ut(Ue, "start"), ut(Ue, "end")) : ut(Ue, L);
        break;
      case "yearrange":
        S.disableTransitionOneTick(), ut(Ue, "start"), ut(Ue, "end");
    }
  }
  function sr() {
    var x;
    (x = ne.value) === null || x === void 0 || x.sync();
  }
  function Pr() {
    var x;
    (x = K.value) === null || x === void 0 || x.sync();
  }
  function wn(x) {
    var L, se;
    return x === "start" ? ((L = he.value) === null || L === void 0 ? void 0 : L.listElRef) || null : ((se = ve.value) === null || se === void 0 ? void 0 : se.listElRef) || null;
  }
  function Pn(x) {
    var L, se;
    return x === "start" ? ((L = he.value) === null || L === void 0 ? void 0 : L.itemsElRef) || null : ((se = ve.value) === null || se === void 0 ? void 0 : se.itemsElRef) || null;
  }
  const Dn = {
    startYearVlRef: he,
    endYearVlRef: ve,
    startMonthScrollbarRef: de,
    endMonthScrollbarRef: Te,
    startYearScrollbarRef: ne,
    endYearScrollbarRef: K
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    startDatesElRef: A,
    endDatesElRef: J,
    handleDateClick: Ke,
    handleColItemClick: lr,
    handleDateMouseEnter: lt,
    handleConfirmClick: D,
    startCalendarPrevYear: St,
    startCalendarPrevMonth: k,
    startCalendarNextYear: gt,
    startCalendarNextMonth: Zt,
    endCalendarPrevYear: le,
    endCalendarPrevMonth: Ie,
    endCalendarNextMonth: Oe,
    endCalendarNextYear: Z,
    mergedIsDateDisabled: te,
    changeStartEndTime: Je,
    ranges: E,
    calendarMonthBeforeYear: ir,
    startCalendarMonth: Wt,
    startCalendarYear: Nt,
    endCalendarMonth: xt,
    endCalendarYear: Me,
    weekdays: Dt,
    startDateArray: It,
    endDateArray: Ht,
    startYearArray: _t,
    startMonthArray: ue,
    startQuarterArray: ht,
    endYearArray: it,
    endMonthArray: Ee,
    endQuarterArray: M,
    isSelecting: Be,
    handleRangeShortcutMouseenter: Tt,
    handleRangeShortcutClick: Lt
  }, S), H), Dn), {
    // datetimerangeonly
    startDateDisplayString: ye,
    endDateInput: ot,
    timePickerSize: S.timePickerSize,
    startTimeValue: He,
    endTimeValue: tt,
    datePickerSlots: p,
    shortcuts: Kt,
    startCalendarDateTime: be,
    endCalendarDateTime: we,
    justifyColumnsScrollState: ut,
    handleFocusDetectorFocus: S.handleFocusDetectorFocus,
    handleStartTimePickerChange: ze,
    handleEndTimePickerChange: _e,
    handleStartDateInput: Ae,
    handleStartDateInputBlur: R,
    handleEndDateInput: v,
    handleEndDateInputBlur: ie,
    handleStartYearVlScroll: sr,
    handleEndYearVlScroll: Pr,
    virtualListContainer: wn,
    virtualListContent: Pn,
    onUpdateStartCalendarValue: w,
    onUpdateEndCalendarValue: G
  });
}
var AC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const $C = Ce({
  name: "DateRangePanel",
  props: li,
  setup(e) {
    return AC.NODE_ENV !== "production" && At(() => {
      var r;
      !((r = e.actions) === null || r === void 0) && r.includes("now") && wr("date-picker", "The `now` action is not supported for n-date-picker of `daterange` type");
    }), si(e, "daterange");
  },
  render() {
    var e, r, t;
    const {
      mergedClsPrefix: n,
      mergedTheme: o,
      shortcuts: a,
      onRender: i,
      datePickerSlots: l
    } = this;
    return i == null || i(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${n}-date-panel`, `${n}-date-panel--daterange`, !this.panel && `${n}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      ref: "startDatesElRef",
      class: `${n}-date-panel-calendar ${n}-date-panel-calendar--start`
    }, c("div", {
      class: `${n}-date-panel-month`
    }, c("div", {
      class: `${n}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, ke(l["prev-year"], () => [c(sn, null)])), c("div", {
      class: `${n}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, ke(l["prev-month"], () => [c(ln, null)])), c(fn, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix: n,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), c("div", {
      class: `${n}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, ke(l["next-month"], () => [c(cn, null)])), c("div", {
      class: `${n}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, ke(l["next-year"], () => [c(dn, null)]))), c("div", {
      class: `${n}-date-panel-weekdays`
    }, this.weekdays.map((s) => c("div", {
      key: s,
      class: `${n}-date-panel-weekdays__day`
    }, s))), c("div", {
      class: `${n}-date-panel__divider`
    }), c("div", {
      class: `${n}-date-panel-dates`
    }, this.startDateArray.map((s, d) => c("div", {
      "data-n-date": !0,
      key: d,
      class: [`${n}-date-panel-date`, {
        [`${n}-date-panel-date--excluded`]: !s.inCurrentMonth,
        [`${n}-date-panel-date--current`]: s.isCurrentDate,
        [`${n}-date-panel-date--selected`]: s.selected,
        [`${n}-date-panel-date--covered`]: s.inSpan,
        [`${n}-date-panel-date--start`]: s.startOfSpan,
        [`${n}-date-panel-date--end`]: s.endOfSpan,
        [`${n}-date-panel-date--disabled`]: this.mergedIsDateDisabled(s.ts)
      }],
      onClick: () => {
        this.handleDateClick(s);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(s);
      }
    }, c("div", {
      class: `${n}-date-panel-date__trigger`
    }), s.dateObject.date, s.isCurrentDate ? c("div", {
      class: `${n}-date-panel-date__sup`
    }) : null)))), c("div", {
      class: `${n}-date-panel__vertical-divider`
    }), c("div", {
      ref: "endDatesElRef",
      class: `${n}-date-panel-calendar ${n}-date-panel-calendar--end`
    }, c("div", {
      class: `${n}-date-panel-month`
    }, c("div", {
      class: `${n}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, ke(l["prev-year"], () => [c(sn, null)])), c("div", {
      class: `${n}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, ke(l["prev-month"], () => [c(ln, null)])), c(fn, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix: n,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), c("div", {
      class: `${n}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, ke(l["next-month"], () => [c(cn, null)])), c("div", {
      class: `${n}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, ke(l["next-year"], () => [c(dn, null)]))), c("div", {
      class: `${n}-date-panel-weekdays`
    }, this.weekdays.map((s) => c("div", {
      key: s,
      class: `${n}-date-panel-weekdays__day`
    }, s))), c("div", {
      class: `${n}-date-panel__divider`
    }), c("div", {
      class: `${n}-date-panel-dates`
    }, this.endDateArray.map((s, d) => c("div", {
      "data-n-date": !0,
      key: d,
      class: [`${n}-date-panel-date`, {
        [`${n}-date-panel-date--excluded`]: !s.inCurrentMonth,
        [`${n}-date-panel-date--current`]: s.isCurrentDate,
        [`${n}-date-panel-date--selected`]: s.selected,
        [`${n}-date-panel-date--covered`]: s.inSpan,
        [`${n}-date-panel-date--start`]: s.startOfSpan,
        [`${n}-date-panel-date--end`]: s.endOfSpan,
        [`${n}-date-panel-date--disabled`]: this.mergedIsDateDisabled(s.ts)
      }],
      onClick: () => {
        this.handleDateClick(s);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(s);
      }
    }, c("div", {
      class: `${n}-date-panel-date__trigger`
    }), s.dateObject.date, s.isCurrentDate ? c("div", {
      class: `${n}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? c("div", {
      class: `${n}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${n}-date-panel-actions`
    }, c("div", {
      class: `${n}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((s) => {
      const d = a[s];
      return Array.isArray(d) || typeof d == "function" ? c(Sr, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(d);
        },
        onClick: () => {
          this.handleRangeShortcutClick(d);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => s
      }) : null;
    })), c("div", {
      class: `${n}-date-panel-actions__suffix`
    }, !((r = this.actions) === null || r === void 0) && r.includes("clear") ? Et(l.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(Pt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("confirm") ? Et(l.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isRangeInvalid || this.isSelecting,
      text: this.locale.confirm
    }, () => [c(Pt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Vr, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
function fl(e, r, t) {
  const n = $l(), o = WC(e, t.timeZone, t.locale ?? n.locale);
  return "formatToParts" in o ? zC(o, r) : HC(o, r);
}
function zC(e, r) {
  const t = e.formatToParts(r);
  for (let n = t.length - 1; n >= 0; --n)
    if (t[n].type === "timeZoneName")
      return t[n].value;
}
function HC(e, r) {
  const t = e.format(r).replace(/\u200E/g, ""), n = / [\w-+ ]+$/.exec(t);
  return n ? n[0].substr(1) : "";
}
function WC(e, r, t) {
  return new Intl.DateTimeFormat(t ? [t.code, "en-US"] : void 0, {
    timeZone: r,
    timeZoneName: e
  });
}
function NC(e, r) {
  const t = UC(r);
  return "formatToParts" in t ? LC(t, e) : VC(t, e);
}
const BC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function LC(e, r) {
  try {
    const t = e.formatToParts(r), n = [];
    for (let o = 0; o < t.length; o++) {
      const a = BC[t[o].type];
      a !== void 0 && (n[a] = parseInt(t[o].value, 10));
    }
    return n;
  } catch (t) {
    if (t instanceof RangeError)
      return [NaN];
    throw t;
  }
}
function VC(e, r) {
  const t = e.format(r), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);
  return [
    parseInt(n[3], 10),
    parseInt(n[1], 10),
    parseInt(n[2], 10),
    parseInt(n[4], 10),
    parseInt(n[5], 10),
    parseInt(n[6], 10)
  ];
}
const aa = {}, ml = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), jC = ml === "06/25/2014, 00:00:00" || ml === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function UC(e) {
  return aa[e] || (aa[e] = jC ? new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }) : new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), aa[e];
}
function ld(e, r, t, n, o, a, i) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, r, t), l.setUTCHours(n, o, a, i), l;
}
const hl = 36e5, YC = 6e4, ia = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function di(e, r, t) {
  if (!e)
    return 0;
  let n = ia.timezoneZ.exec(e);
  if (n)
    return 0;
  let o, a;
  if (n = ia.timezoneHH.exec(e), n)
    return o = parseInt(n[1], 10), pl(o) ? -(o * hl) : NaN;
  if (n = ia.timezoneHHMM.exec(e), n) {
    o = parseInt(n[2], 10);
    const i = parseInt(n[3], 10);
    return pl(o, i) ? (a = Math.abs(o) * hl + i * YC, n[1] === "+" ? -a : a) : NaN;
  }
  if (KC(e)) {
    r = new Date(r || Date.now());
    const i = t ? r : GC(r), l = Fa(i, e);
    return -(t ? l : qC(r, l, e));
  }
  return NaN;
}
function GC(e) {
  return ld(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Fa(e, r) {
  const t = NC(e, r), n = ld(t[0], t[1] - 1, t[2], t[3] % 24, t[4], t[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, n - o;
}
function qC(e, r, t) {
  let o = e.getTime() - r;
  const a = Fa(new Date(o), t);
  if (r === a)
    return r;
  o -= a - r;
  const i = Fa(new Date(o), t);
  return a === i ? a : Math.max(a, i);
}
function pl(e, r) {
  return -23 <= e && e <= 23 && (r == null || 0 <= r && r <= 59);
}
const gl = {};
function KC(e) {
  if (gl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), gl[e] = !0, !0;
  } catch {
    return !1;
  }
}
const XC = 60 * 1e3, QC = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = la(t.timeZone, e);
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return vl(n);
      case "XXXX":
      case "XX":
        return Qr(n);
      case "XXXXX":
      case "XXX":
      default:
        return Qr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = la(t.timeZone, e);
    switch (r) {
      case "x":
        return vl(n);
      case "xxxx":
      case "xx":
        return Qr(n);
      case "xxxxx":
      case "xxx":
      default:
        return Qr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = la(t.timeZone, e);
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + JC(n, ":");
      case "OOOO":
      default:
        return "GMT" + Qr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return fl("short", e, t);
      case "zzzz":
      default:
        return fl("long", e, t);
    }
  }
};
function la(e, r) {
  const t = e ? di(e, r, !0) / XC : (r == null ? void 0 : r.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(t))
    throw new RangeError("Invalid time zone specified: " + e);
  return t;
}
function Po(e, r) {
  const t = e < 0 ? "-" : "";
  let n = Math.abs(e).toString();
  for (; n.length < r; )
    n = "0" + n;
  return t + n;
}
function Qr(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), o = Po(Math.floor(n / 60), 2), a = Po(Math.floor(n % 60), 2);
  return t + o + r + a;
}
function vl(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Po(Math.abs(e) / 60, 2) : Qr(e, r);
}
function JC(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), a = n % 60;
  return a === 0 ? t + String(o) : t + String(o) + r + Po(a, 2);
}
function Cl(e) {
  const r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), +e - +r;
}
const ZC = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, sa = 36e5, bl = 6e4, eb = 2, Mt = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: ZC
};
function sd(e, r = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const t = r.additionalDigits == null ? eb : Number(r.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const n = tb(e), { year: o, restDateString: a } = rb(n.date, t), i = nb(a, o);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const l = i.getTime();
    let s = 0, d;
    if (n.time && (s = ob(n.time), s === null || isNaN(s)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || r.timeZone) {
      if (d = di(n.timeZone || r.timeZone, new Date(l + s)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = Cl(new Date(l + s)), d = Cl(new Date(l + s + d));
    return new Date(l + s + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function tb(e) {
  const r = {};
  let t = Mt.dateTimePattern.exec(e), n;
  if (t ? (r.date = t[1], n = t[3]) : (t = Mt.datePattern.exec(e), t ? (r.date = t[1], n = t[2]) : (r.date = null, n = e)), n) {
    const o = Mt.timeZone.exec(n);
    o ? (r.time = n.replace(o[1], ""), r.timeZone = o[1].trim()) : r.time = n;
  }
  return r;
}
function rb(e, r) {
  if (e) {
    const t = Mt.YYY[r], n = Mt.YYYYY[r];
    let o = Mt.YYYY.exec(e) || n.exec(e);
    if (o) {
      const a = o[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (o = Mt.YY.exec(e) || t.exec(e), o) {
      const a = o[1];
      return {
        year: parseInt(a, 10) * 100,
        restDateString: e.slice(a.length)
      };
    }
  }
  return {
    year: null
  };
}
function nb(e, r) {
  if (r === null)
    return null;
  let t, n, o;
  if (!e || !e.length)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(r), t;
  let a = Mt.MM.exec(e);
  if (a)
    return t = /* @__PURE__ */ new Date(0), n = parseInt(a[1], 10) - 1, Sl(r, n) ? (t.setUTCFullYear(r, n), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Mt.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    const i = parseInt(a[1], 10);
    return lb(r, i) ? (t.setUTCFullYear(r, 0, i), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Mt.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), n = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10);
    return Sl(r, n, i) ? (t.setUTCFullYear(r, n, i), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Mt.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, yl(o) ? xl(r, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Mt.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10) - 1;
    return yl(o, i) ? xl(r, o, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function ob(e) {
  let r, t, n = Mt.HH.exec(e);
  if (n)
    return r = parseFloat(n[1].replace(",", ".")), da(r) ? r % 24 * sa : NaN;
  if (n = Mt.HHMM.exec(e), n)
    return r = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), da(r, t) ? r % 24 * sa + t * bl : NaN;
  if (n = Mt.HHMMSS.exec(e), n) {
    r = parseInt(n[1], 10), t = parseInt(n[2], 10);
    const o = parseFloat(n[3].replace(",", "."));
    return da(r, t, o) ? r % 24 * sa + t * bl + o * 1e3 : NaN;
  }
  return null;
}
function xl(e, r, t) {
  r = r || 0, t = t || 0;
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const o = n.getUTCDay() || 7, a = r * 7 + t + 1 - o;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
const ab = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ib = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function dd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Sl(e, r, t) {
  if (r < 0 || r > 11)
    return !1;
  if (t != null) {
    if (t < 1)
      return !1;
    const n = dd(e);
    if (n && t > ib[r] || !n && t > ab[r])
      return !1;
  }
  return !0;
}
function lb(e, r) {
  if (r < 1)
    return !1;
  const t = dd(e);
  return !(t && r > 366 || !t && r > 365);
}
function yl(e, r) {
  return !(e < 0 || e > 52 || r != null && (r < 0 || r > 6));
}
function da(e, r, t) {
  return !(e < 0 || e >= 25 || r != null && (r < 0 || r >= 60) || t != null && (t < 0 || t >= 60));
}
const sb = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function db(e, r, t = {}) {
  r = String(r);
  const n = r.match(sb);
  if (n) {
    const o = sd(t.originalDate || e, t);
    r = n.reduce(function(a, i) {
      if (i[0] === "'")
        return a;
      const l = a.indexOf(i), s = a[l - 1] === "'", d = a.replace(i, "'" + QC[i[0]](o, i, t) + "'");
      return s ? d.substring(0, l - 1) + d.substring(l + 1) : d;
    }, r);
  }
  return Ne(e, r, t);
}
function cb(e, r, t) {
  e = sd(e, t);
  const n = di(r, e, !0), o = new Date(e.getTime() - n), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
function ub(e, r, t, n) {
  return n = {
    ...n,
    timeZone: r,
    originalDate: e
  }, db(cb(e, r, { timeZone: n.timeZone }), t, n);
}
const cd = "n-time-picker", io = Ce({
  name: "TimePickerPanelCol",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    activeValue: {
      type: [Number, String],
      default: null
    },
    // It should be required but vue's type seems to have bugs
    onItemClick: Function
  },
  render() {
    const {
      activeValue: e,
      onItemClick: r,
      clsPrefix: t
    } = this;
    return this.data.map((n) => {
      const {
        label: o,
        disabled: a,
        value: i
      } = n, l = e === i;
      return c("div", {
        key: o,
        "data-active": l ? "" : null,
        class: [`${t}-time-picker-col__item`, l && `${t}-time-picker-col__item--active`, a && `${t}-time-picker-col__item--disabled`],
        onClick: r && !a ? () => {
          r(i);
        } : void 0
      }, o);
    });
  }
}), Rn = {
  amHours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  pmHours: ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  minutes: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  seconds: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  period: ["AM", "PM"]
};
function ca(e) {
  return `00${e}`.slice(-2);
}
function En(e, r, t) {
  return Array.isArray(r) ? (t === "am" ? r.filter((n) => n < 12) : t === "pm" ? r.filter((n) => n >= 12).map((n) => n === 12 ? 12 : n - 12) : r).map((n) => ca(n)) : typeof r == "number" ? t === "am" ? e.filter((n) => {
    const o = Number(n);
    return o < 12 && o % r === 0;
  }) : t === "pm" ? e.filter((n) => {
    const o = Number(n);
    return o >= 12 && o % r === 0;
  }).map((n) => {
    const o = Number(n);
    return ca(o === 12 ? 12 : o - 12);
  }) : e.filter((n) => Number(n) % r === 0) : t === "am" ? e.filter((n) => Number(n) < 12) : t === "pm" ? e.map((n) => Number(n)).filter((n) => Number(n) >= 12).map((n) => ca(n === 12 ? 12 : n - 12)) : e;
}
function lo(e, r, t) {
  return t ? typeof t == "number" ? e % t === 0 : t.includes(e) : !0;
}
function fb(e, r, t) {
  const n = En(Rn[r], t).map(Number);
  let o, a;
  for (let i = 0; i < n.length; ++i) {
    const l = n[i];
    if (l === e)
      return l;
    if (l > e) {
      a = l;
      break;
    }
    o = l;
  }
  return o === void 0 ? (a || qa("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props"), a) : a === void 0 || a - e > e - o ? o : a;
}
function mb(e) {
  return vr(e) < 12 ? "am" : "pm";
}
const hb = {
  actions: {
    type: Array,
    default: () => ["now", "confirm"]
  },
  showHour: {
    type: Boolean,
    default: !0
  },
  showMinute: {
    type: Boolean,
    default: !0
  },
  showSecond: {
    type: Boolean,
    default: !0
  },
  showPeriod: {
    type: Boolean,
    default: !0
  },
  isHourInvalid: Boolean,
  isMinuteInvalid: Boolean,
  isSecondInvalid: Boolean,
  isAmPmInvalid: Boolean,
  isValueInvalid: Boolean,
  hourValue: {
    type: Number,
    default: null
  },
  minuteValue: {
    type: Number,
    default: null
  },
  secondValue: {
    type: Number,
    default: null
  },
  amPmValue: {
    type: String,
    default: null
  },
  isHourDisabled: Function,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  onHourClick: {
    type: Function,
    required: !0
  },
  onMinuteClick: {
    type: Function,
    required: !0
  },
  onSecondClick: {
    type: Function,
    required: !0
  },
  onAmPmClick: {
    type: Function,
    required: !0
  },
  onNowClick: Function,
  clearText: String,
  nowText: String,
  confirmText: String,
  transitionDisabled: Boolean,
  onClearClick: Function,
  onConfirmClick: Function,
  onFocusin: Function,
  onFocusout: Function,
  onFocusDetectorFocus: Function,
  onKeydown: Function,
  hours: [Number, Array],
  minutes: [Number, Array],
  seconds: [Number, Array],
  use12Hours: Boolean
}, pb = Ce({
  name: "TimePickerPanel",
  props: hb,
  setup(e) {
    const {
      mergedThemeRef: r,
      mergedClsPrefixRef: t
    } = Qe(cd), n = P(() => {
      const {
        isHourDisabled: l,
        hours: s,
        use12Hours: d,
        amPmValue: u
      } = e;
      if (d) {
        const f = u ?? mb(Date.now());
        return En(Rn.hours, s, f).map((m) => {
          const g = Number(m), h = f === "pm" && g !== 12 ? g + 12 : g;
          return {
            label: m,
            value: h,
            disabled: l ? l(h) : !1
          };
        });
      } else
        return En(Rn.hours, s).map((f) => ({
          label: f,
          value: Number(f),
          disabled: l ? l(Number(f)) : !1
        }));
    }), o = P(() => {
      const {
        isMinuteDisabled: l,
        minutes: s
      } = e;
      return En(Rn.minutes, s).map((d) => ({
        label: d,
        value: Number(d),
        disabled: l ? l(Number(d), e.hourValue) : !1
      }));
    }), a = P(() => {
      const {
        isSecondDisabled: l,
        seconds: s
      } = e;
      return En(Rn.seconds, s).map((d) => ({
        label: d,
        value: Number(d),
        disabled: l ? l(Number(d), e.minuteValue, e.hourValue) : !1
      }));
    }), i = P(() => {
      const {
        isHourDisabled: l
      } = e;
      let s = !0, d = !0;
      for (let u = 0; u < 12; ++u)
        if (!(l != null && l(u))) {
          s = !1;
          break;
        }
      for (let u = 12; u < 24; ++u)
        if (!(l != null && l(u))) {
          d = !1;
          break;
        }
      return [{
        label: "AM",
        value: "am",
        disabled: s
      }, {
        label: "PM",
        value: "pm",
        disabled: d
      }];
    });
    return {
      mergedTheme: r,
      mergedClsPrefix: t,
      hours: n,
      minutes: o,
      seconds: a,
      amPm: i,
      hourScrollRef: F(null),
      minuteScrollRef: F(null),
      secondScrollRef: F(null),
      amPmScrollRef: F(null)
    };
  },
  render() {
    var e, r, t, n;
    const {
      mergedClsPrefix: o,
      mergedTheme: a
    } = this;
    return c("div", {
      tabindex: 0,
      class: `${o}-time-picker-panel`,
      onFocusin: this.onFocusin,
      onFocusout: this.onFocusout,
      onKeydown: this.onKeydown
    }, c("div", {
      class: `${o}-time-picker-cols`
    }, this.showHour ? c("div", {
      class: [`${o}-time-picker-col`, this.isHourInvalid && `${o}-time-picker-col--invalid`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`]
    }, c(Xt, {
      ref: "hourScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(io, {
        clsPrefix: o,
        data: this.hours,
        activeValue: this.hourValue,
        onItemClick: this.onHourClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null, this.showMinute ? c("div", {
      class: [`${o}-time-picker-col`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`, this.isMinuteInvalid && `${o}-time-picker-col--invalid`]
    }, c(Xt, {
      ref: "minuteScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(io, {
        clsPrefix: o,
        data: this.minutes,
        activeValue: this.minuteValue,
        onItemClick: this.onMinuteClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null, this.showSecond ? c("div", {
      class: [`${o}-time-picker-col`, this.isSecondInvalid && `${o}-time-picker-col--invalid`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`]
    }, c(Xt, {
      ref: "secondScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(io, {
        clsPrefix: o,
        data: this.seconds,
        activeValue: this.secondValue,
        onItemClick: this.onSecondClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null, this.use12Hours ? c("div", {
      class: [`${o}-time-picker-col`, this.isAmPmInvalid && `${o}-time-picker-col--invalid`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`]
    }, c(Xt, {
      ref: "amPmScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(io, {
        clsPrefix: o,
        data: this.amPm,
        activeValue: this.amPmValue,
        onItemClick: this.onAmPmClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null), !((e = this.actions) === null || e === void 0) && e.length ? c("div", {
      class: `${o}-time-picker-actions`
    }, !((r = this.actions) === null || r === void 0) && r.includes("clear") ? c(Pt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      onClick: this.onClearClick
    }, {
      default: () => this.clearText
    }) : null, !((t = this.actions) === null || t === void 0) && t.includes("now") ? c(Pt, {
      size: "tiny",
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      onClick: this.onNowClick
    }, {
      default: () => this.nowText
    }) : null, !((n = this.actions) === null || n === void 0) && n.includes("confirm") ? c(Pt, {
      size: "tiny",
      type: "primary",
      class: `${o}-time-picker-actions__confirm`,
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      disabled: this.isValueInvalid,
      onClick: this.onConfirmClick
    }, {
      default: () => this.confirmText
    }) : null) : null, c(Vr, {
      onFocus: this.onFocusDetectorFocus
    }));
  }
}), gb = $([oe("time-picker", `
 z-index: auto;
 position: relative;
 `, [oe("time-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), ae("disabled", [oe("time-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), oe("time-picker-panel", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-border-radius);
 margin: 4px 0;
 min-width: 104px;
 overflow: hidden;
 background-color: var(--n-panel-color);
 box-shadow: var(--n-panel-box-shadow);
 `, [Us(), oe("time-picker-actions", `
 padding: var(--n-panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `), oe("time-picker-cols", `
 height: calc(var(--n-item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-panel-divider-color);
 `), oe("time-picker-col", `
 flex-grow: 1;
 min-width: var(--n-item-width);
 height: calc(var(--n-item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--n-bezier);
 `, [ae("transition-disabled", [B("item", "transition: none;", [$("&::before", "transition: none;")])]), B("padding", `
 height: calc(var(--n-item-height) * 5);
 `), $("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [B("item", [$("&::before", "left: 4px;")])]), B("item", `
 cursor: pointer;
 height: var(--n-item-height);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 background: #0000;
 text-decoration-color: #0000;
 color: var(--n-item-text-color);
 z-index: 0;
 box-sizing: border-box;
 padding-top: 4px;
 position: relative;
 `, [$("&::before", `
 content: "";
 transition: background-color .3s var(--n-bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-item-border-radius);
 `), Vt("disabled", [$("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]), ae("active", `
 color: var(--n-item-text-color-active);
 `, [$("&::before", `
 background-color: var(--n-item-color-hover);
 `)]), ae("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)]), ae("invalid", [B("item", [ae("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])])])]);
var vb = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function ua(e, r) {
  return e === void 0 ? !0 : Array.isArray(e) ? e.every((t) => t >= 0 && t <= r) : e >= 0 && e <= r;
}
const Cb = Object.assign(Object.assign({}, Jt.props), {
  to: yr.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  actions: Array,
  defaultValue: {
    type: Number,
    default: null
  },
  defaultFormattedValue: String,
  placeholder: String,
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: Number,
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  valueFormat: String,
  formattedValue: String,
  isHourDisabled: Function,
  size: String,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  inputReadonly: Boolean,
  clearable: Boolean,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onBlur: [Function, Array],
  onConfirm: [Function, Array],
  onClear: Function,
  onFocus: [Function, Array],
  // https://www.iana.org/time-zones
  timeZone: String,
  showIcon: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  hours: {
    type: [Number, Array],
    validator: (e) => ua(e, 23)
  },
  minutes: {
    type: [Number, Array],
    validator: (e) => ua(e, 59)
  },
  seconds: {
    type: [Number, Array],
    validator: (e) => ua(e, 59)
  },
  use12Hours: Boolean,
  // private
  stateful: {
    type: Boolean,
    default: !0
  },
  // deprecated
  onChange: [Function, Array]
}), Aa = Ce({
  name: "TimePicker",
  props: Cb,
  setup(e) {
    vb.NODE_ENV !== "production" && At(() => {
      e.onChange !== void 0 && wr("time-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: t,
      namespaceRef: n,
      inlineThemeDisabled: o
    } = Yn(e), {
      localeRef: a,
      dateLocaleRef: i
    } = qn("TimePicker"), l = Io(e), {
      mergedSizeRef: s,
      mergedDisabledRef: d,
      mergedStatusRef: u
    } = l, f = Jt("TimePicker", "-time-picker", gb, Js, e, t), m = ql(), g = F(null), h = F(null), C = P(() => ({
      locale: i.value.locale
    }));
    function y(D) {
      return D === null ? null : Ft(D, e.valueFormat || e.format, /* @__PURE__ */ new Date(), C.value).getTime();
    }
    const {
      defaultValue: b,
      defaultFormattedValue: _
    } = e, E = F(_ !== void 0 ? y(_) : b), O = P(() => {
      const {
        formattedValue: D
      } = e;
      if (D !== void 0)
        return y(D);
      const {
        value: z
      } = e;
      return z !== void 0 ? z : E.value;
    }), N = P(() => {
      const {
        timeZone: D
      } = e;
      return D ? (z, q, xe) => ub(z, D, q, xe) : (z, q, xe) => Ne(z, q, xe);
    }), V = F("");
    mt(() => e.timeZone, () => {
      const D = O.value;
      V.value = D === null ? "" : N.value(D, e.format, C.value);
    }, {
      immediate: !0
    });
    const p = F(!1), T = Ge(e, "show"), I = bo(T, p), U = F(O.value), Y = F(!1), H = P(() => a.value.clear), S = P(() => a.value.now), A = P(() => e.placeholder !== void 0 ? e.placeholder : a.value.placeholder), J = P(() => a.value.negativeText), ne = P(() => a.value.positiveText), K = P(() => /H|h|K|k/.test(e.format)), he = P(() => e.format.includes("m")), ve = P(() => e.format.includes("s")), de = P(() => {
      const {
        value: D
      } = O;
      return D === null ? null : Number(N.value(D, "HH", C.value));
    }), Te = P(() => {
      const {
        value: D
      } = O;
      return D === null ? null : Number(N.value(D, "mm", C.value));
    }), Fe = P(() => {
      const {
        value: D
      } = O;
      return D === null ? null : Number(N.value(D, "ss", C.value));
    }), et = P(() => {
      const {
        isHourDisabled: D
      } = e;
      return de.value === null ? !1 : lo(de.value, "hours", e.hours) ? D ? D(de.value) : !1 : !0;
    }), be = P(() => {
      const {
        value: D
      } = Te, {
        value: z
      } = de;
      if (D === null || z === null) return !1;
      if (!lo(D, "minutes", e.minutes)) return !0;
      const {
        isMinuteDisabled: q
      } = e;
      return q ? q(D, z) : !1;
    }), we = P(() => {
      const {
        value: D
      } = Te, {
        value: z
      } = de, {
        value: q
      } = Fe;
      if (q === null || D === null || z === null)
        return !1;
      if (!lo(q, "seconds", e.seconds)) return !0;
      const {
        isSecondDisabled: xe
      } = e;
      return xe ? xe(q, D, z) : !1;
    }), pe = P(() => et.value || be.value || we.value), Be = P(() => e.format.length + 4), nt = P(() => {
      const {
        value: D
      } = O;
      return D === null ? null : vr(D) < 12 ? "am" : "pm";
    });
    function me(D, z) {
      const {
        onUpdateFormattedValue: q,
        "onUpdate:formattedValue": xe
      } = e;
      q && Pe(q, D, z), xe && Pe(xe, D, z);
    }
    function bt(D) {
      return D === null ? null : N.value(D, e.valueFormat || e.format);
    }
    function ye(D) {
      const {
        onUpdateValue: z,
        "onUpdate:value": q,
        onChange: xe
      } = e, {
        nTriggerFormChange: Je,
        nTriggerFormInput: Le
      } = l, Ae = bt(D);
      z && Pe(z, D, Ae), q && Pe(q, D, Ae), xe && Pe(xe, D, Ae), me(Ae, D), E.value = D, Je(), Le();
    }
    function ot(D) {
      const {
        onFocus: z
      } = e, {
        nTriggerFormFocus: q
      } = l;
      z && Pe(z, D), q();
    }
    function at(D) {
      const {
        onBlur: z
      } = e, {
        nTriggerFormBlur: q
      } = l;
      z && Pe(z, D), q();
    }
    function It() {
      const {
        onConfirm: D
      } = e;
      D && Pe(D, O.value, bt(O.value));
    }
    function Ht(D) {
      var z;
      D.stopPropagation(), ye(null), ht(null), (z = e.onClear) === null || z === void 0 || z.call(e);
    }
    function Dt() {
      k({
        returnFocus: !0
      });
    }
    function Wt() {
      ye(null), ht(null), k({
        returnFocus: !0
      });
    }
    function xt(D) {
      D.key === "Escape" && I.value && xo(D);
    }
    function Nt(D) {
      var z;
      switch (D.key) {
        case "Escape":
          I.value && (xo(D), k({
            returnFocus: !0
          }));
          break;
        case "Tab":
          m.shift && D.target === ((z = h.value) === null || z === void 0 ? void 0 : z.$el) && (D.preventDefault(), k({
            returnFocus: !0
          }));
          break;
      }
    }
    function Me() {
      Y.value = !0, br(() => {
        Y.value = !1;
      });
    }
    function He(D) {
      d.value || Yl(D, "clear") || I.value || St();
    }
    function tt(D) {
      typeof D != "string" && (O.value === null ? ye(j(Tr(tf(/* @__PURE__ */ new Date()), D))) : ye(j(Tr(O.value, D))));
    }
    function Kt(D) {
      typeof D != "string" && (O.value === null ? ye(j(Yo(uc(/* @__PURE__ */ new Date()), D))) : ye(j(Yo(O.value, D))));
    }
    function _t(D) {
      typeof D != "string" && (O.value === null ? ye(j(Go(Ba(/* @__PURE__ */ new Date()), D))) : ye(j(Go(O.value, D))));
    }
    function it(D) {
      const {
        value: z
      } = O;
      if (z === null) {
        const q = /* @__PURE__ */ new Date(), xe = vr(q);
        D === "pm" && xe < 12 ? ye(j(Tr(q, xe + 12))) : D === "am" && xe >= 12 && ye(j(Tr(q, xe - 12))), ye(j(q));
      } else {
        const q = vr(z);
        D === "pm" && q < 12 ? ye(j(Tr(z, q + 12))) : D === "am" && q >= 12 && ye(j(Tr(z, q - 12)));
      }
    }
    function ht(D) {
      D === void 0 && (D = O.value), D === null ? V.value = "" : V.value = N.value(D, e.format, C.value);
    }
    function M(D) {
      gt(D) || ot(D);
    }
    function ue(D) {
      var z;
      if (!gt(D))
        if (I.value) {
          const q = (z = h.value) === null || z === void 0 ? void 0 : z.$el;
          q != null && q.contains(D.relatedTarget) || (ht(), at(D), k({
            returnFocus: !1
          }));
        } else
          ht(), at(D);
    }
    function Ee() {
      d.value || I.value || St();
    }
    function ir() {
      d.value || (ht(), k({
        returnFocus: !1
      }));
    }
    function Bt() {
      if (!h.value) return;
      const {
        hourScrollRef: D,
        minuteScrollRef: z,
        secondScrollRef: q,
        amPmScrollRef: xe
      } = h.value;
      [D, z, q, xe].forEach((Je) => {
        var Le;
        if (!Je) return;
        const Ae = (Le = Je.contentRef) === null || Le === void 0 ? void 0 : Le.querySelector("[data-active]");
        Ae && Je.scrollTo({
          top: Ae.offsetTop
        });
      });
    }
    function qe(D) {
      p.value = D;
      const {
        onUpdateShow: z,
        "onUpdate:show": q
      } = e;
      z && Pe(z, D), q && Pe(q, D);
    }
    function gt(D) {
      var z, q, xe;
      return !!(!((q = (z = g.value) === null || z === void 0 ? void 0 : z.wrapperElRef) === null || q === void 0) && q.contains(D.relatedTarget) || !((xe = h.value) === null || xe === void 0) && xe.$el.contains(D.relatedTarget));
    }
    function St() {
      U.value = O.value, qe(!0), br(Bt);
    }
    function Zt(D) {
      var z, q;
      I.value && !(!((q = (z = g.value) === null || z === void 0 ? void 0 : z.wrapperElRef) === null || q === void 0) && q.contains(Oo(D))) && k({
        returnFocus: !1
      });
    }
    function k({
      returnFocus: D
    }) {
      var z;
      I.value && (qe(!1), D && ((z = g.value) === null || z === void 0 || z.focus()));
    }
    function Z(D) {
      if (D === "") {
        ye(null);
        return;
      }
      const z = Ft(D, e.format, /* @__PURE__ */ new Date(), C.value);
      if (V.value = D, Yt(z)) {
        const {
          value: q
        } = O;
        if (q !== null) {
          const xe = Ct(q, {
            hours: vr(z),
            minutes: ho(z),
            seconds: po(z),
            milliseconds: au(z)
          });
          ye(j(xe));
        } else
          ye(j(z));
      }
    }
    function le() {
      ye(U.value), qe(!1);
    }
    function Oe() {
      const D = /* @__PURE__ */ new Date(), z = {
        hours: vr,
        minutes: ho,
        seconds: po
      }, [q, xe, Je] = ["hours", "minutes", "seconds"].map((Ae) => !e[Ae] || lo(z[Ae](D), Ae, e[Ae]) ? z[Ae](D) : fb(z[Ae](D), Ae, e[Ae])), Le = Go(Yo(Tr(O.value ? O.value : j(D), q), xe), Je);
      ye(j(Le));
    }
    function Ie() {
      ht(), It(), k({
        returnFocus: !0
      });
    }
    function w(D) {
      gt(D) || (ht(), at(D), k({
        returnFocus: !1
      }));
    }
    mt(O, (D) => {
      ht(D), Me(), br(Bt);
    }), mt(I, () => {
      pe.value && ye(U.value);
    }), Nr(cd, {
      mergedThemeRef: f,
      mergedClsPrefixRef: t
    });
    const G = {
      focus: () => {
        var D;
        (D = g.value) === null || D === void 0 || D.focus();
      },
      blur: () => {
        var D;
        (D = g.value) === null || D === void 0 || D.blur();
      }
    }, te = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: D
        },
        self: {
          iconColor: z,
          iconColorDisabled: q
        }
      } = f.value;
      return {
        "--n-icon-color-override": z,
        "--n-icon-color-disabled-override": q,
        "--n-bezier": D
      };
    }), fe = o ? zr("time-picker-trigger", void 0, te, e) : void 0, Ke = P(() => {
      const {
        self: {
          panelColor: D,
          itemTextColor: z,
          itemTextColorActive: q,
          itemColorHover: xe,
          panelDividerColor: Je,
          panelBoxShadow: Le,
          itemOpacityDisabled: Ae,
          borderRadius: v,
          itemFontSize: R,
          itemWidth: ie,
          itemHeight: De,
          panelActionPadding: ze,
          itemBorderRadius: _e
        },
        common: {
          cubicBezierEaseInOut: Tt
        }
      } = f.value;
      return {
        "--n-bezier": Tt,
        "--n-border-radius": v,
        "--n-item-color-hover": xe,
        "--n-item-font-size": R,
        "--n-item-height": De,
        "--n-item-opacity-disabled": Ae,
        "--n-item-text-color": z,
        "--n-item-text-color-active": q,
        "--n-item-width": ie,
        "--n-panel-action-padding": ze,
        "--n-panel-box-shadow": Le,
        "--n-panel-color": D,
        "--n-panel-divider-color": Je,
        "--n-item-border-radius": _e
      };
    }), lt = o ? zr("time-picker", void 0, Ke, e) : void 0;
    return {
      focus: G.focus,
      blur: G.blur,
      mergedStatus: u,
      mergedBordered: r,
      mergedClsPrefix: t,
      namespace: n,
      uncontrolledValue: E,
      mergedValue: O,
      isMounted: Mo(),
      inputInstRef: g,
      panelInstRef: h,
      adjustedTo: yr(e),
      mergedShow: I,
      localizedClear: H,
      localizedNow: S,
      localizedPlaceholder: A,
      localizedNegativeText: J,
      localizedPositiveText: ne,
      hourInFormat: K,
      minuteInFormat: he,
      secondInFormat: ve,
      mergedAttrSize: Be,
      displayTimeString: V,
      mergedSize: s,
      mergedDisabled: d,
      isValueInvalid: pe,
      isHourInvalid: et,
      isMinuteInvalid: be,
      isSecondInvalid: we,
      transitionDisabled: Y,
      hourValue: de,
      minuteValue: Te,
      secondValue: Fe,
      amPmValue: nt,
      handleInputKeydown: xt,
      handleTimeInputFocus: M,
      handleTimeInputBlur: ue,
      handleNowClick: Oe,
      handleConfirmClick: Ie,
      handleTimeInputUpdateValue: Z,
      handleMenuFocusOut: w,
      handleCancelClick: le,
      handleClickOutside: Zt,
      handleTimeInputActivate: Ee,
      handleTimeInputDeactivate: ir,
      handleHourClick: tt,
      handleMinuteClick: Kt,
      handleSecondClick: _t,
      handleAmPmClick: it,
      handleTimeInputClear: Ht,
      handleFocusDetectorFocus: Dt,
      handleMenuKeydown: Nt,
      handleTriggerClick: He,
      mergedTheme: f,
      triggerCssVars: o ? void 0 : te,
      triggerThemeClass: fe == null ? void 0 : fe.themeClass,
      triggerOnRender: fe == null ? void 0 : fe.onRender,
      cssVars: o ? void 0 : Ke,
      themeClass: lt == null ? void 0 : lt.themeClass,
      onRender: lt == null ? void 0 : lt.onRender,
      clearSelectedValue: Wt
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      $slots: r,
      triggerOnRender: t
    } = this;
    return t == null || t(), c("div", {
      class: [`${e}-time-picker`, this.triggerThemeClass],
      style: this.triggerCssVars
    }, c(ja, null, {
      default: () => [c(Ua, null, {
        default: () => c(un, {
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTimeString,
          bordered: this.mergedBordered,
          passivelyActivated: !0,
          attrSize: this.mergedAttrSize,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          stateful: this.stateful,
          size: this.mergedSize,
          placeholder: this.localizedPlaceholder,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          textDecoration: this.isValueInvalid ? "line-through" : void 0,
          onFocus: this.handleTimeInputFocus,
          onBlur: this.handleTimeInputBlur,
          onActivate: this.handleTimeInputActivate,
          onDeactivate: this.handleTimeInputDeactivate,
          onUpdateValue: this.handleTimeInputUpdateValue,
          onClear: this.handleTimeInputClear,
          internalDeactivateOnEnter: !0,
          internalForceFocus: this.mergedShow,
          readonly: this.inputReadonly || this.mergedDisabled,
          onClick: this.handleTriggerClick,
          onKeydown: this.handleInputKeydown
        }, this.showIcon ? {
          [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => c(xr, {
            clsPrefix: e,
            class: `${e}-time-picker-icon`
          }, {
            default: () => r.icon ? r.icon() : c(Fv, null)
          })
        } : null)
      }), c(Ya, {
        teleportDisabled: this.adjustedTo === yr.tdkey,
        show: this.mergedShow,
        to: this.adjustedTo,
        containerClass: this.namespace,
        placement: this.placement
      }, {
        default: () => c($r, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var n;
            return this.mergedShow ? ((n = this.onRender) === null || n === void 0 || n.call(this), Ln(c(pb, {
              ref: "panelInstRef",
              actions: this.actions,
              class: this.themeClass,
              style: this.cssVars,
              seconds: this.seconds,
              minutes: this.minutes,
              hours: this.hours,
              transitionDisabled: this.transitionDisabled,
              hourValue: this.hourValue,
              showHour: this.hourInFormat,
              isHourInvalid: this.isHourInvalid,
              isHourDisabled: this.isHourDisabled,
              minuteValue: this.minuteValue,
              showMinute: this.minuteInFormat,
              isMinuteInvalid: this.isMinuteInvalid,
              isMinuteDisabled: this.isMinuteDisabled,
              secondValue: this.secondValue,
              amPmValue: this.amPmValue,
              showSecond: this.secondInFormat,
              isSecondInvalid: this.isSecondInvalid,
              isSecondDisabled: this.isSecondDisabled,
              isValueInvalid: this.isValueInvalid,
              clearText: this.localizedClear,
              nowText: this.localizedNow,
              confirmText: this.localizedPositiveText,
              use12Hours: this.use12Hours,
              onFocusout: this.handleMenuFocusOut,
              onKeydown: this.handleMenuKeydown,
              onHourClick: this.handleHourClick,
              onMinuteClick: this.handleMinuteClick,
              onSecondClick: this.handleSecondClick,
              onAmPmClick: this.handleAmPmClick,
              onNowClick: this.handleNowClick,
              onConfirmClick: this.handleConfirmClick,
              onClearClick: this.clearSelectedValue,
              onFocusDetectorFocus: this.handleFocusDetectorFocus
            }), [[Va, this.handleClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), bb = Ce({
  name: "DateTimePanel",
  props: ai,
  setup(e) {
    return ii(e, "datetime");
  },
  render() {
    var e, r, t, n;
    const {
      mergedClsPrefix: o,
      mergedTheme: a,
      shortcuts: i,
      timePickerProps: l,
      datePickerSlots: s,
      onRender: d
    } = this;
    return d == null || d(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${o}-date-panel`, `${o}-date-panel--datetime`, !this.panel && `${o}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      class: `${o}-date-panel-header`
    }, c(un, {
      value: this.dateInputValue,
      theme: a.peers.Input,
      themeOverrides: a.peerOverrides.Input,
      stateful: !1,
      size: this.timePickerSize,
      readonly: this.inputReadonly,
      class: `${o}-date-panel-date-input`,
      textDecoration: this.isDateInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleDateInputBlur,
      onUpdateValue: this.handleDateInput
    }), c(Aa, Object.assign({
      size: this.timePickerSize,
      placeholder: this.locale.selectTime,
      format: this.timerPickerFormat
    }, Array.isArray(l) ? void 0 : l, {
      showIcon: !1,
      to: !1,
      theme: a.peers.TimePicker,
      themeOverrides: a.peerOverrides.TimePicker,
      value: Array.isArray(this.value) ? null : this.value,
      isHourDisabled: this.isHourDisabled,
      isMinuteDisabled: this.isMinuteDisabled,
      isSecondDisabled: this.isSecondDisabled,
      onUpdateValue: this.handleTimePickerChange,
      stateful: !1
    }))), c("div", {
      class: `${o}-date-panel-calendar`
    }, c("div", {
      class: `${o}-date-panel-month`
    }, c("div", {
      class: `${o}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, ke(s["prev-year"], () => [c(sn, null)])), c("div", {
      class: `${o}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, ke(s["prev-month"], () => [c(ln, null)])), c(fn, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix: o,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), c("div", {
      class: `${o}-date-panel-month__next`,
      onClick: this.nextMonth
    }, ke(s["next-month"], () => [c(cn, null)])), c("div", {
      class: `${o}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, ke(s["next-year"], () => [c(dn, null)]))), c("div", {
      class: `${o}-date-panel-weekdays`
    }, this.weekdays.map((u) => c("div", {
      key: u,
      class: `${o}-date-panel-weekdays__day`
    }, u))), c("div", {
      class: `${o}-date-panel-dates`
    }, this.dateArray.map((u, f) => c("div", {
      "data-n-date": !0,
      key: f,
      class: [`${o}-date-panel-date`, {
        [`${o}-date-panel-date--current`]: u.isCurrentDate,
        [`${o}-date-panel-date--selected`]: u.selected,
        [`${o}-date-panel-date--excluded`]: !u.inCurrentMonth,
        [`${o}-date-panel-date--disabled`]: this.mergedIsDateDisabled(u.ts, {
          type: "date",
          year: u.dateObject.year,
          month: u.dateObject.month,
          date: u.dateObject.date
        })
      }],
      onClick: () => {
        this.handleDateClick(u);
      }
    }, c("div", {
      class: `${o}-date-panel-date__trigger`
    }), u.dateObject.date, u.isCurrentDate ? c("div", {
      class: `${o}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? c("div", {
      class: `${o}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || i ? c("div", {
      class: `${o}-date-panel-actions`
    }, c("div", {
      class: `${o}-date-panel-actions__prefix`
    }, i && Object.keys(i).map((u) => {
      const f = i[u];
      return Array.isArray(f) ? null : c(Sr, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(f);
        },
        onClick: () => {
          this.handleSingleShortcutClick(f);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => u
      });
    })), c("div", {
      class: `${o}-date-panel-actions__suffix`
    }, !((r = this.actions) === null || r === void 0) && r.includes("clear") ? Et(this.datePickerSlots.clear, {
      onClear: this.clearSelectedDateTime,
      text: this.locale.clear
    }, () => [c(Pt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      onClick: this.clearSelectedDateTime
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("now") ? Et(s.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(Pt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, !((n = this.actions) === null || n === void 0) && n.includes("confirm") ? Et(s.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [c(Pt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Vr, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
var xb = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const Sb = Ce({
  name: "DateTimeRangePanel",
  props: li,
  setup(e) {
    return xb.NODE_ENV !== "production" && At(() => {
      var r;
      !((r = e.actions) === null || r === void 0) && r.includes("now") && wr("date-picker", "The `now` action is not supported for n-date-picker of `datetimerange` type");
    }), si(e, "datetimerange");
  },
  render() {
    var e, r, t;
    const {
      mergedClsPrefix: n,
      mergedTheme: o,
      shortcuts: a,
      timePickerProps: i,
      onRender: l,
      datePickerSlots: s
    } = this;
    return l == null || l(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${n}-date-panel`, `${n}-date-panel--datetimerange`, !this.panel && `${n}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      class: `${n}-date-panel-header`
    }, c(un, {
      value: this.startDateDisplayString,
      theme: o.peers.Input,
      themeOverrides: o.peerOverrides.Input,
      size: this.timePickerSize,
      stateful: !1,
      readonly: this.inputReadonly,
      class: `${n}-date-panel-date-input`,
      textDecoration: this.isStartValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleStartDateInputBlur,
      onUpdateValue: this.handleStartDateInput
    }), c(Aa, Object.assign({
      placeholder: this.locale.selectTime,
      format: this.timerPickerFormat,
      size: this.timePickerSize
    }, Array.isArray(i) ? i[0] : i, {
      value: this.startTimeValue,
      to: !1,
      showIcon: !1,
      disabled: this.isSelecting,
      theme: o.peers.TimePicker,
      themeOverrides: o.peerOverrides.TimePicker,
      stateful: !1,
      isHourDisabled: this.isStartHourDisabled,
      isMinuteDisabled: this.isStartMinuteDisabled,
      isSecondDisabled: this.isStartSecondDisabled,
      onUpdateValue: this.handleStartTimePickerChange
    })), c(un, {
      value: this.endDateInput,
      theme: o.peers.Input,
      themeOverrides: o.peerOverrides.Input,
      stateful: !1,
      size: this.timePickerSize,
      readonly: this.inputReadonly,
      class: `${n}-date-panel-date-input`,
      textDecoration: this.isEndValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleEndDateInputBlur,
      onUpdateValue: this.handleEndDateInput
    }), c(Aa, Object.assign({
      placeholder: this.locale.selectTime,
      format: this.timerPickerFormat,
      size: this.timePickerSize
    }, Array.isArray(i) ? i[1] : i, {
      disabled: this.isSelecting,
      showIcon: !1,
      theme: o.peers.TimePicker,
      themeOverrides: o.peerOverrides.TimePicker,
      to: !1,
      stateful: !1,
      value: this.endTimeValue,
      isHourDisabled: this.isEndHourDisabled,
      isMinuteDisabled: this.isEndMinuteDisabled,
      isSecondDisabled: this.isEndSecondDisabled,
      onUpdateValue: this.handleEndTimePickerChange
    }))), c("div", {
      ref: "startDatesElRef",
      class: `${n}-date-panel-calendar ${n}-date-panel-calendar--start`
    }, c("div", {
      class: `${n}-date-panel-month`
    }, c("div", {
      class: `${n}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, ke(s["prev-year"], () => [c(sn, null)])), c("div", {
      class: `${n}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, ke(s["prev-month"], () => [c(ln, null)])), c(fn, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix: n,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), c("div", {
      class: `${n}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, ke(s["next-month"], () => [c(cn, null)])), c("div", {
      class: `${n}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, ke(s["next-year"], () => [c(dn, null)]))), c("div", {
      class: `${n}-date-panel-weekdays`
    }, this.weekdays.map((d) => c("div", {
      key: d,
      class: `${n}-date-panel-weekdays__day`
    }, d))), c("div", {
      class: `${n}-date-panel__divider`
    }), c("div", {
      class: `${n}-date-panel-dates`
    }, this.startDateArray.map((d, u) => {
      const f = this.mergedIsDateDisabled(d.ts);
      return c("div", {
        "data-n-date": !0,
        key: u,
        class: [`${n}-date-panel-date`, {
          [`${n}-date-panel-date--excluded`]: !d.inCurrentMonth,
          [`${n}-date-panel-date--current`]: d.isCurrentDate,
          [`${n}-date-panel-date--selected`]: d.selected,
          [`${n}-date-panel-date--covered`]: d.inSpan,
          [`${n}-date-panel-date--start`]: d.startOfSpan,
          [`${n}-date-panel-date--end`]: d.endOfSpan,
          [`${n}-date-panel-date--disabled`]: f
        }],
        onClick: f ? void 0 : () => {
          this.handleDateClick(d);
        },
        onMouseenter: f ? void 0 : () => {
          this.handleDateMouseEnter(d);
        }
      }, c("div", {
        class: `${n}-date-panel-date__trigger`
      }), d.dateObject.date, d.isCurrentDate ? c("div", {
        class: `${n}-date-panel-date__sup`
      }) : null);
    }))), c("div", {
      class: `${n}-date-panel__vertical-divider`
    }), c("div", {
      ref: "endDatesElRef",
      class: `${n}-date-panel-calendar ${n}-date-panel-calendar--end`
    }, c("div", {
      class: `${n}-date-panel-month`
    }, c("div", {
      class: `${n}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, ke(s["prev-year"], () => [c(sn, null)])), c("div", {
      class: `${n}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, ke(s["prev-month"], () => [c(ln, null)])), c(fn, {
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix: n,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), c("div", {
      class: `${n}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, ke(s["next-month"], () => [c(cn, null)])), c("div", {
      class: `${n}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, ke(s["next-year"], () => [c(dn, null)]))), c("div", {
      class: `${n}-date-panel-weekdays`
    }, this.weekdays.map((d) => c("div", {
      key: d,
      class: `${n}-date-panel-weekdays__day`
    }, d))), c("div", {
      class: `${n}-date-panel__divider`
    }), c("div", {
      class: `${n}-date-panel-dates`
    }, this.endDateArray.map((d, u) => {
      const f = this.mergedIsDateDisabled(d.ts);
      return c("div", {
        "data-n-date": !0,
        key: u,
        class: [`${n}-date-panel-date`, {
          [`${n}-date-panel-date--excluded`]: !d.inCurrentMonth,
          [`${n}-date-panel-date--current`]: d.isCurrentDate,
          [`${n}-date-panel-date--selected`]: d.selected,
          [`${n}-date-panel-date--covered`]: d.inSpan,
          [`${n}-date-panel-date--start`]: d.startOfSpan,
          [`${n}-date-panel-date--end`]: d.endOfSpan,
          [`${n}-date-panel-date--disabled`]: f
        }],
        onClick: f ? void 0 : () => {
          this.handleDateClick(d);
        },
        onMouseenter: f ? void 0 : () => {
          this.handleDateMouseEnter(d);
        }
      }, c("div", {
        class: `${n}-date-panel-date__trigger`
      }), d.dateObject.date, d.isCurrentDate ? c("div", {
        class: `${n}-date-panel-date__sup`
      }) : null);
    }))), this.datePickerSlots.footer ? c("div", {
      class: `${n}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${n}-date-panel-actions`
    }, c("div", {
      class: `${n}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) || typeof u == "function" ? c(Sr, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(u);
        },
        onClick: () => {
          this.handleRangeShortcutClick(u);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => d
      }) : null;
    })), c("div", {
      class: `${n}-date-panel-actions__suffix`
    }, !((r = this.actions) === null || r === void 0) && r.includes("clear") ? Et(s.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(Pt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("confirm") ? Et(s.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isRangeInvalid || this.isSelecting,
      text: this.locale.confirm
    }, () => [c(Pt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Vr, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
var yb = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const wb = Ce({
  name: "MonthRangePanel",
  props: Object.assign(Object.assign({}, li), {
    type: {
      type: String,
      required: !0
    }
  }),
  setup(e) {
    yb.NODE_ENV !== "production" && At(() => {
      var o;
      !((o = e.actions) === null || o === void 0) && o.includes("now") && wr("date-picker", `The \`now\` action is not supported for n-date-picker of ${e.type}type`);
    });
    const r = si(e, e.type), {
      dateLocaleRef: t
    } = qn("DatePicker"), n = (o, a, i, l) => {
      const {
        handleColItemClick: s
      } = r;
      return c("div", {
        "data-n-date": !0,
        key: a,
        class: [`${i}-date-panel-month-calendar__picker-col-item`, o.isCurrent && `${i}-date-panel-month-calendar__picker-col-item--current`, o.selected && `${i}-date-panel-month-calendar__picker-col-item--selected`, !1],
        onClick: () => {
          s(o, l);
        }
      }, o.type === "month" ? td(o.dateObject.month, o.monthFormat, t.value.locale) : o.type === "quarter" ? nd(o.dateObject.quarter, o.quarterFormat, t.value.locale) : rd(o.dateObject.year, o.yearFormat, t.value.locale));
    };
    return ar(() => {
      r.justifyColumnsScrollState();
    }), Object.assign(Object.assign({}, r), {
      renderItem: n
    });
  },
  render() {
    var e, r, t;
    const {
      mergedClsPrefix: n,
      mergedTheme: o,
      shortcuts: a,
      type: i,
      renderItem: l,
      onRender: s
    } = this;
    return s == null || s(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${n}-date-panel`, `${n}-date-panel--daterange`, !this.panel && `${n}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      ref: "startDatesElRef",
      class: `${n}-date-panel-calendar ${n}-date-panel-calendar--start`
    }, c("div", {
      class: `${n}-date-panel-month-calendar`
    }, c(Xt, {
      ref: "startYearScrollbarRef",
      class: `${n}-date-panel-month-calendar__picker-col`,
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      container: () => this.virtualListContainer("start"),
      content: () => this.virtualListContent("start"),
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => c(ya, {
        ref: "startYearVlRef",
        items: this.startYearArray,
        itemSize: Wr,
        showScrollbar: !1,
        keyField: "ts",
        onScroll: this.handleStartYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item: d,
          index: u
        }) => l(d, u, n, "start")
      })
    }), i === "monthrange" || i === "quarterrange" ? c("div", {
      class: `${n}-date-panel-month-calendar__picker-col`
    }, c(Xt, {
      ref: "startMonthScrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar
    }, {
      default: () => [(i === "monthrange" ? this.startMonthArray : this.startQuarterArray).map((d, u) => l(d, u, n, "start")), i === "monthrange" && c("div", {
        class: `${n}-date-panel-month-calendar__padding`
      })]
    })) : null)), c("div", {
      class: `${n}-date-panel__vertical-divider`
    }), c("div", {
      ref: "endDatesElRef",
      class: `${n}-date-panel-calendar ${n}-date-panel-calendar--end`
    }, c("div", {
      class: `${n}-date-panel-month-calendar`
    }, c(Xt, {
      ref: "endYearScrollbarRef",
      class: `${n}-date-panel-month-calendar__picker-col`,
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      container: () => this.virtualListContainer("end"),
      content: () => this.virtualListContent("end"),
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => c(ya, {
        ref: "endYearVlRef",
        items: this.endYearArray,
        itemSize: Wr,
        showScrollbar: !1,
        keyField: "ts",
        onScroll: this.handleEndYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item: d,
          index: u
        }) => l(d, u, n, "end")
      })
    }), i === "monthrange" || i === "quarterrange" ? c("div", {
      class: `${n}-date-panel-month-calendar__picker-col`
    }, c(Xt, {
      ref: "endMonthScrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar
    }, {
      default: () => [(i === "monthrange" ? this.endMonthArray : this.endQuarterArray).map((d, u) => l(d, u, n, "end")), i === "monthrange" && c("div", {
        class: `${n}-date-panel-month-calendar__padding`
      })]
    })) : null)), Cr(this.datePickerSlots.footer, (d) => d ? c("div", {
      class: `${n}-date-panel-footer`
    }, d) : null), !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${n}-date-panel-actions`
    }, c("div", {
      class: `${n}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) || typeof u == "function" ? c(Sr, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(u);
        },
        onClick: () => {
          this.handleRangeShortcutClick(u);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => d
      }) : null;
    })), c("div", {
      class: `${n}-date-panel-actions__suffix`
    }, !((r = this.actions) === null || r === void 0) && r.includes("clear") ? Et(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(Sr, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("confirm") ? Et(this.datePickerSlots.confirm, {
      disabled: this.isRangeInvalid,
      onConfirm: this.handleConfirmClick,
      text: this.locale.confirm
    }, () => [c(Sr, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Vr, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), Pb = Object.assign(Object.assign({}, Jt.props), {
  to: yr.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  updateValueOnClose: Boolean,
  calendarDayFormat: String,
  calendarHeaderYearFormat: String,
  calendarHeaderMonthFormat: String,
  calendarHeaderMonthYearSeparator: {
    type: String,
    default: " "
  },
  calendarHeaderMonthBeforeYear: {
    type: Boolean,
    default: void 0
  },
  defaultValue: [Number, Array],
  defaultFormattedValue: [String, Array],
  defaultTime: [Number, String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: [Number, Array],
  formattedValue: [String, Array],
  size: String,
  type: {
    type: String,
    default: "date"
  },
  valueFormat: String,
  separator: String,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  format: String,
  dateFormat: String,
  timerPickerFormat: String,
  actions: Array,
  shortcuts: Object,
  isDateDisabled: Function,
  isTimeDisabled: Function,
  show: {
    type: Boolean,
    default: void 0
  },
  panel: Boolean,
  ranges: Object,
  firstDayOfWeek: Number,
  inputReadonly: Boolean,
  closeOnSelect: Boolean,
  status: String,
  timePickerProps: [Object, Array],
  onClear: Function,
  onConfirm: Function,
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  monthFormat: {
    type: String,
    default: "M"
  },
  yearFormat: {
    type: String,
    default: "y"
  },
  quarterFormat: {
    type: String,
    default: "'Q'Q"
  },
  yearRange: {
    type: Array,
    default: () => [1901, 2100]
  },
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onNextMonth: Function,
  onPrevMonth: Function,
  onNextYear: Function,
  onPrevYear: Function,
  // deprecated
  onChange: [Function, Array]
}), Db = $([oe("date-picker", `
 position: relative;
 z-index: auto;
 `, [oe("date-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), oe("icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), ae("disabled", [oe("date-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `), oe("icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), oe("date-panel", `
 width: fit-content;
 outline: none;
 margin: 4px 0;
 display: grid;
 grid-template-columns: 0fr;
 border-radius: var(--n-panel-border-radius);
 background-color: var(--n-panel-color);
 color: var(--n-panel-text-color);
 user-select: none;
 `, [Us(), ae("shadow", `
 box-shadow: var(--n-panel-box-shadow);
 `), oe("date-panel-calendar", {
  padding: "var(--n-calendar-left-padding)",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridArea: "left-calendar"
}, [ae("end", {
  padding: "var(--n-calendar-right-padding)",
  gridArea: "right-calendar"
})]), oe("date-panel-month-calendar", {
  display: "flex",
  gridArea: "left-calendar"
}, [B("picker-col", `
 min-width: var(--n-scroll-item-width);
 height: calc(var(--n-scroll-item-height) * 6);
 user-select: none;
 -webkit-user-select: none;
 `, [$("&:first-child", `
 min-width: calc(var(--n-scroll-item-width) + 4px);
 `, [B("picker-col-item", [$("&::before", "left: 4px;")])]), B("padding", `
 height: calc(var(--n-scroll-item-height) * 5)
 `)]), B("picker-col-item", `
 z-index: 0;
 cursor: pointer;
 height: var(--n-scroll-item-height);
 box-sizing: border-box;
 padding-top: 4px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background: #0000;
 color: var(--n-item-text-color);
 `, [$("&::before", `
 z-index: -1;
 content: "";
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-scroll-item-border-radius);
 transition: 
 background-color .3s var(--n-bezier);
 `), Vt("disabled", [$("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `), ae("selected", `
 color: var(--n-item-color-active);
 `, [$("&::before", "background-color: var(--n-item-color-hover);")])]), ae("disabled", `
 color: var(--n-item-text-color-disabled);
 cursor: not-allowed;
 `, [ae("selected", [$("&::before", `
 background-color: var(--n-item-color-disabled);
 `)])])])]), ae("date", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), ae("week", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), ae("daterange", {
  gridTemplateAreas: `
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), ae("datetime", {
  gridTemplateAreas: `
 "header"
 "left-calendar"
 "footer"
 "action"
 `
}), ae("datetimerange", {
  gridTemplateAreas: `
 "header header header"
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), ae("month", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), oe("date-panel-footer", {
  gridArea: "footer"
}), oe("date-panel-actions", {
  gridArea: "action"
}), oe("date-panel-header", {
  gridArea: "header"
}), oe("date-panel-header", `
 box-sizing: border-box;
 width: 100%;
 align-items: center;
 padding: var(--n-panel-header-padding);
 display: flex;
 justify-content: space-between;
 border-bottom: 1px solid var(--n-panel-header-divider-color);
 `, [$(">", [$("*:not(:last-child)", {
  marginRight: "10px"
}), $("*", {
  flex: 1,
  width: 0
}), oe("time-picker", {
  zIndex: 1
})])]), oe("date-panel-month", `
 box-sizing: border-box;
 display: grid;
 grid-template-columns: var(--n-calendar-title-grid-template-columns);
 align-items: center;
 justify-items: center;
 padding: var(--n-calendar-title-padding);
 height: var(--n-calendar-title-height);
 `, [B("prev, next, fast-prev, fast-next", `
 line-height: 0;
 cursor: pointer;
 width: var(--n-arrow-size);
 height: var(--n-arrow-size);
 color: var(--n-arrow-color);
 `), B("month-year", `
 user-select: none;
 -webkit-user-select: none;
 flex-grow: 1;
 position: relative;
 `, [B("text", `
 font-size: var(--n-calendar-title-font-size);
 line-height: var(--n-calendar-title-font-size);
 font-weight: var(--n-calendar-title-font-weight);
 padding: 6px 8px;
 text-align: center;
 color: var(--n-calendar-title-text-color);
 cursor: pointer;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-panel-border-radius);
 `, [ae("active", `
 background-color: var(--n-calendar-title-color-hover);
 `), $("&:hover", `
 background-color: var(--n-calendar-title-color-hover);
 `)])])]), oe("date-panel-weekdays", `
 display: grid;
 margin: auto;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(1, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 margin-bottom: 4px;
 border-bottom: 1px solid var(--n-calendar-days-divider-color);
 `, [B("day", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 line-height: 15px;
 width: var(--n-item-size);
 text-align: center;
 font-size: var(--n-calendar-days-font-size);
 color: var(--n-item-text-color);
 display: flex;
 align-items: center;
 justify-content: center;
 `)]), oe("date-panel-dates", `
 margin: auto;
 display: grid;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(6, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 flex-wrap: wrap;
 `, [oe("date-panel-date", `
 user-select: none;
 -webkit-user-select: none;
 position: relative;
 width: var(--n-item-size);
 height: var(--n-item-size);
 line-height: var(--n-item-size);
 text-align: center;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-item-border-radius);
 z-index: 0;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color .2s var(--n-bezier);
 `, [B("trigger", `
 position: absolute;
 left: calc(var(--n-item-size) / 2 - var(--n-item-cell-width) / 2);
 top: calc(var(--n-item-size) / 2 - var(--n-item-cell-height) / 2);
 width: var(--n-item-cell-width);
 height: var(--n-item-cell-height);
 `), ae("current", [B("sup", `
 position: absolute;
 top: 2px;
 right: 2px;
 content: "";
 height: 4px;
 width: 4px;
 border-radius: 2px;
 background-color: var(--n-item-color-active);
 transition:
 background-color .2s var(--n-bezier);
 `)]), $("&::after", `
 content: "";
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 transition: background-color .3s var(--n-bezier);
 `), ae("covered, start, end", [Vt("excluded", [$("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 background-color: var(--n-item-color-included);
 `), $("&:nth-child(7n + 1)::before", {
  borderTopLeftRadius: "var(--n-item-border-radius)",
  borderBottomLeftRadius: "var(--n-item-border-radius)"
}), $("&:nth-child(7n + 7)::before", {
  borderTopRightRadius: "var(--n-item-border-radius)",
  borderBottomRightRadius: "var(--n-item-border-radius)"
})])]), ae("selected", {
  color: "var(--n-item-text-color-active)"
}, [$("&::after", {
  backgroundColor: "var(--n-item-color-active)"
}), ae("start", [$("&::before", {
  left: "50%"
})]), ae("end", [$("&::before", {
  right: "50%"
})]), B("sup", {
  backgroundColor: "var(--n-panel-color)"
})]), ae("excluded", {
  color: "var(--n-item-text-color-disabled)"
}, [ae("selected", [$("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), ae("disabled", {
  cursor: "not-allowed",
  color: "var(--n-item-text-color-disabled)"
}, [ae("covered", [$("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
})]), ae("selected", [$("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
}), $("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), ae("week-hovered", [$("&::before", `
 background-color: var(--n-item-color-included);
 `), $("&:nth-child(7n + 1)::before", `
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 `), $("&:nth-child(7n + 7)::before", `
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 `)]), ae("week-selected", `
 color: var(--n-item-text-color-active)
 `, [$("&::before", `
 background-color: var(--n-item-color-active);
 `), $("&:nth-child(7n + 1)::before", `
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 `), $("&:nth-child(7n + 7)::before", `
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 `)])])]), Vt("week", [oe("date-panel-dates", [oe("date-panel-date", [Vt("disabled", [Vt("selected", [$("&:hover", `
 background-color: var(--n-item-color-hover);
 `)])])])])]), ae("week", [oe("date-panel-dates", [oe("date-panel-date", [$("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 transition: background-color .3s var(--n-bezier);
 `)])])]), B("vertical-divider", `
 grid-area: divider;
 height: 100%;
 width: 1px;
 background-color: var(--n-calendar-divider-color);
 `), oe("date-panel-footer", `
 border-top: 1px solid var(--n-panel-action-divider-color);
 padding: var(--n-panel-extra-footer-padding);
 `), oe("date-panel-actions", `
 flex: 1;
 padding: var(--n-panel-action-padding);
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-top: 1px solid var(--n-panel-action-divider-color);
 `, [B("prefix, suffix", `
 display: flex;
 margin-bottom: -8px;
 `), B("suffix", `
 align-self: flex-end;
 `), B("prefix", `
 flex-wrap: wrap;
 `), oe("button", `
 margin-bottom: 8px;
 `, [$("&:not(:last-child)", `
 margin-right: 8px;
 `)])])]), $("[data-n-date].transition-disabled", {
  transition: "none !important"
}, [$("&::before, &::after", {
  transition: "none !important"
})])]);
function _b(e, r) {
  const t = P(() => {
    const {
      isTimeDisabled: u
    } = e, {
      value: f
    } = r;
    if (!(f === null || Array.isArray(f)))
      return u == null ? void 0 : u(f);
  }), n = P(() => {
    var u;
    return (u = t.value) === null || u === void 0 ? void 0 : u.isHourDisabled;
  }), o = P(() => {
    var u;
    return (u = t.value) === null || u === void 0 ? void 0 : u.isMinuteDisabled;
  }), a = P(() => {
    var u;
    return (u = t.value) === null || u === void 0 ? void 0 : u.isSecondDisabled;
  }), i = P(() => {
    const {
      type: u,
      isDateDisabled: f
    } = e, {
      value: m
    } = r;
    return m === null || Array.isArray(m) || !["date", "datetime"].includes(u) || !f ? !1 : f(m, {
      type: "input"
    });
  }), l = P(() => {
    const {
      type: u
    } = e, {
      value: f
    } = r;
    if (f === null || u === "datetime" || Array.isArray(f))
      return !1;
    const m = new Date(f), g = m.getHours(), h = m.getMinutes(), C = m.getMinutes();
    return (n.value ? n.value(g) : !1) || (o.value ? o.value(h, g) : !1) || (a.value ? a.value(C, h, g) : !1);
  }), s = P(() => i.value || l.value);
  return {
    // date & datetime
    isValueInvalidRef: P(() => {
      const {
        type: u
      } = e;
      return u === "date" ? i.value : u === "datetime" ? s.value : !1;
    }),
    isDateInvalidRef: i,
    // datetime only
    isTimeInvalidRef: l,
    isDateTimeInvalidRef: s,
    isHourDisabledRef: n,
    isMinuteDisabledRef: o,
    isSecondDisabledRef: a
  };
}
function Tb(e, r) {
  const t = P(() => {
    const {
      isTimeDisabled: f
    } = e, {
      value: m
    } = r;
    return !Array.isArray(m) || !f ? [void 0, void 0] : [f == null ? void 0 : f(m[0], "start", m), f == null ? void 0 : f(m[1], "end", m)];
  }), n = {
    isStartHourDisabledRef: P(() => {
      var f;
      return (f = t.value[0]) === null || f === void 0 ? void 0 : f.isHourDisabled;
    }),
    isEndHourDisabledRef: P(() => {
      var f;
      return (f = t.value[1]) === null || f === void 0 ? void 0 : f.isHourDisabled;
    }),
    isStartMinuteDisabledRef: P(() => {
      var f;
      return (f = t.value[0]) === null || f === void 0 ? void 0 : f.isMinuteDisabled;
    }),
    isEndMinuteDisabledRef: P(() => {
      var f;
      return (f = t.value[1]) === null || f === void 0 ? void 0 : f.isMinuteDisabled;
    }),
    isStartSecondDisabledRef: P(() => {
      var f;
      return (f = t.value[0]) === null || f === void 0 ? void 0 : f.isSecondDisabled;
    }),
    isEndSecondDisabledRef: P(() => {
      var f;
      return (f = t.value[1]) === null || f === void 0 ? void 0 : f.isSecondDisabled;
    })
  }, o = P(() => {
    const {
      type: f,
      isDateDisabled: m
    } = e, {
      value: g
    } = r;
    return g === null || !Array.isArray(g) || !["daterange", "datetimerange"].includes(f) || !m ? !1 : m(g[0], "start", g);
  }), a = P(() => {
    const {
      type: f,
      isDateDisabled: m
    } = e, {
      value: g
    } = r;
    return g === null || !Array.isArray(g) || !["daterange", "datetimerange"].includes(f) || !m ? !1 : m(g[1], "end", g);
  }), i = P(() => {
    const {
      type: f
    } = e, {
      value: m
    } = r;
    if (m === null || !Array.isArray(m) || f !== "datetimerange")
      return !1;
    const g = vr(m[0]), h = ho(m[0]), C = po(m[0]), {
      isStartHourDisabledRef: y,
      isStartMinuteDisabledRef: b,
      isStartSecondDisabledRef: _
    } = n;
    return (y.value ? y.value(g) : !1) || (b.value ? b.value(h, g) : !1) || (_.value ? _.value(C, h, g) : !1);
  }), l = P(() => {
    const {
      type: f
    } = e, {
      value: m
    } = r;
    if (m === null || !Array.isArray(m) || f !== "datetimerange")
      return !1;
    const g = vr(m[1]), h = ho(m[1]), C = po(m[1]), {
      isEndHourDisabledRef: y,
      isEndMinuteDisabledRef: b,
      isEndSecondDisabledRef: _
    } = n;
    return (y.value ? y.value(g) : !1) || (b.value ? b.value(h, g) : !1) || (_.value ? _.value(C, h, g) : !1);
  }), s = P(() => o.value || i.value), d = P(() => a.value || l.value), u = P(() => s.value || d.value);
  return Object.assign(Object.assign({}, n), {
    isStartDateInvalidRef: o,
    isEndDateInvalidRef: a,
    isStartTimeInvalidRef: i,
    isEndTimeInvalidRef: l,
    isStartValueInvalidRef: s,
    isEndValueInvalidRef: d,
    isRangeInvalidRef: u
  });
}
var Ob = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const Mb = Ce({
  name: "DatePicker",
  props: Pb,
  slots: Object,
  setup(e, {
    slots: r
  }) {
    var t;
    Ob.NODE_ENV !== "production" && At(() => {
      e.onChange !== void 0 && wr("date-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      localeRef: n,
      dateLocaleRef: o
    } = qn("DatePicker"), a = Io(e), {
      mergedSizeRef: i,
      mergedDisabledRef: l,
      mergedStatusRef: s
    } = a, {
      mergedComponentPropsRef: d,
      mergedClsPrefixRef: u,
      mergedBorderedRef: f,
      namespaceRef: m,
      inlineThemeDisabled: g
    } = Yn(e), h = F(null), C = F(null), y = F(null), b = F(!1), _ = Ge(e, "show"), E = bo(_, b), O = P(() => ({
      locale: o.value.locale,
      useAdditionalWeekYearTokens: !0
    })), N = P(() => {
      const {
        format: w
      } = e;
      if (w) return w;
      switch (e.type) {
        case "date":
        case "daterange":
          return n.value.dateFormat;
        case "datetime":
        case "datetimerange":
          return n.value.dateTimeFormat;
        case "year":
        case "yearrange":
          return n.value.yearTypeFormat;
        case "month":
        case "monthrange":
          return n.value.monthTypeFormat;
        case "quarter":
        case "quarterrange":
          return n.value.quarterFormat;
        case "week":
          return n.value.weekFormat;
      }
    }), V = P(() => {
      var w;
      return (w = e.valueFormat) !== null && w !== void 0 ? w : N.value;
    });
    function p(w) {
      if (w === null) return null;
      const {
        value: G
      } = V, {
        value: te
      } = O;
      return Array.isArray(w) ? [Ft(w[0], G, /* @__PURE__ */ new Date(), te).getTime(), Ft(w[1], G, /* @__PURE__ */ new Date(), te).getTime()] : Ft(w, G, /* @__PURE__ */ new Date(), te).getTime();
    }
    const {
      defaultFormattedValue: T,
      defaultValue: I
    } = e, U = F((t = T !== void 0 ? p(T) : I) !== null && t !== void 0 ? t : null), Y = P(() => {
      const {
        formattedValue: w
      } = e;
      return w !== void 0 ? p(w) : e.value;
    }), H = bo(Y, U), S = F(null);
    At(() => {
      S.value = H.value;
    });
    const A = F(""), J = F(""), ne = F(""), K = Jt("DatePicker", "-date-picker", Db, bC, e, u), he = P(() => {
      var w, G;
      return ((G = (w = d == null ? void 0 : d.value) === null || w === void 0 ? void 0 : w.DatePicker) === null || G === void 0 ? void 0 : G.timePickerSize) || "small";
    }), ve = P(() => ["daterange", "datetimerange", "monthrange", "quarterrange", "yearrange"].includes(e.type)), de = P(() => {
      const {
        placeholder: w
      } = e;
      if (w === void 0) {
        const {
          type: G
        } = e;
        switch (G) {
          case "date":
            return n.value.datePlaceholder;
          case "datetime":
            return n.value.datetimePlaceholder;
          case "month":
            return n.value.monthPlaceholder;
          case "year":
            return n.value.yearPlaceholder;
          case "quarter":
            return n.value.quarterPlaceholder;
          case "week":
            return n.value.weekPlaceholder;
          default:
            return "";
        }
      } else
        return w;
    }), Te = P(() => e.startPlaceholder === void 0 ? e.type === "daterange" ? n.value.startDatePlaceholder : e.type === "datetimerange" ? n.value.startDatetimePlaceholder : e.type === "monthrange" ? n.value.startMonthPlaceholder : "" : e.startPlaceholder), Fe = P(() => e.endPlaceholder === void 0 ? e.type === "daterange" ? n.value.endDatePlaceholder : e.type === "datetimerange" ? n.value.endDatetimePlaceholder : e.type === "monthrange" ? n.value.endMonthPlaceholder : "" : e.endPlaceholder), et = P(() => {
      const {
        actions: w,
        type: G,
        clearable: te
      } = e;
      if (w === null) return [];
      if (w !== void 0) return w;
      const fe = te ? ["clear"] : [];
      switch (G) {
        case "date":
        case "week":
          return fe.push("now"), fe;
        case "datetime":
          return fe.push("now", "confirm"), fe;
        case "daterange":
          return fe.push("confirm"), fe;
        case "datetimerange":
          return fe.push("confirm"), fe;
        case "month":
          return fe.push("now", "confirm"), fe;
        case "year":
          return fe.push("now"), fe;
        case "quarter":
          return fe.push("now", "confirm"), fe;
        case "monthrange":
        case "yearrange":
        case "quarterrange":
          return fe.push("confirm"), fe;
        default: {
          ms("date-picker", "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`.");
          break;
        }
      }
    });
    function be(w) {
      if (w === null) return null;
      if (Array.isArray(w)) {
        const {
          value: G
        } = V, {
          value: te
        } = O;
        return [Ne(w[0], G, te), Ne(w[1], G, O.value)];
      } else
        return Ne(w, V.value, O.value);
    }
    function we(w) {
      S.value = w;
    }
    function pe(w, G) {
      const {
        "onUpdate:formattedValue": te,
        onUpdateFormattedValue: fe
      } = e;
      te && Pe(te, w, G), fe && Pe(fe, w, G);
    }
    function Be(w, G) {
      const {
        "onUpdate:value": te,
        onUpdateValue: fe,
        onChange: Ke
      } = e, {
        nTriggerFormChange: lt,
        nTriggerFormInput: D
      } = a, z = be(w);
      G.doConfirm && me(w, z), fe && Pe(fe, w, z), te && Pe(te, w, z), Ke && Pe(Ke, w, z), U.value = w, pe(z, w), lt(), D();
    }
    function nt() {
      const {
        onClear: w
      } = e;
      w == null || w();
    }
    function me(w, G) {
      const {
        onConfirm: te
      } = e;
      te && te(w, G);
    }
    function bt(w) {
      const {
        onFocus: G
      } = e, {
        nTriggerFormFocus: te
      } = a;
      G && Pe(G, w), te();
    }
    function ye(w) {
      const {
        onBlur: G
      } = e, {
        nTriggerFormBlur: te
      } = a;
      G && Pe(G, w), te();
    }
    function ot(w) {
      const {
        "onUpdate:show": G,
        onUpdateShow: te
      } = e;
      G && Pe(G, w), te && Pe(te, w), b.value = w;
    }
    function at(w) {
      w.key === "Escape" && E.value && (xo(w), gt({
        returnFocus: !0
      }));
    }
    function It(w) {
      w.key === "Escape" && E.value && xo(w);
    }
    function Ht() {
      var w;
      ot(!1), (w = y.value) === null || w === void 0 || w.deactivate(), nt();
    }
    function Dt() {
      var w;
      (w = y.value) === null || w === void 0 || w.deactivate(), nt();
    }
    function Wt() {
      gt({
        returnFocus: !0
      });
    }
    function xt(w) {
      var G;
      E.value && !(!((G = C.value) === null || G === void 0) && G.contains(Oo(w))) && gt({
        returnFocus: !1
      });
    }
    function Nt(w) {
      gt({
        returnFocus: !0,
        disableUpdateOnClose: w
      });
    }
    function Me(w, G) {
      G ? Be(w, {
        doConfirm: !1
      }) : we(w);
    }
    function He() {
      const w = S.value;
      Be(Array.isArray(w) ? [w[0], w[1]] : w, {
        doConfirm: !0
      });
    }
    function tt() {
      const {
        value: w
      } = S;
      ve.value ? (Array.isArray(w) || w === null) && _t(w) : Array.isArray(w) || Kt(w);
    }
    function Kt(w) {
      w === null ? A.value = "" : A.value = Ne(w, N.value, O.value);
    }
    function _t(w) {
      if (w === null)
        J.value = "", ne.value = "";
      else {
        const G = O.value;
        J.value = Ne(w[0], N.value, G), ne.value = Ne(w[1], N.value, G);
      }
    }
    function it() {
      E.value || qe();
    }
    function ht(w) {
      var G;
      !((G = h.value) === null || G === void 0) && G.$el.contains(w.relatedTarget) || (ye(w), tt(), gt({
        returnFocus: !1
      }));
    }
    function M() {
      l.value || (tt(), gt({
        returnFocus: !1
      }));
    }
    function ue(w) {
      if (w === "") {
        Be(null, {
          doConfirm: !1
        }), S.value = null, A.value = "";
        return;
      }
      const G = Ft(w, N.value, /* @__PURE__ */ new Date(), O.value);
      Yt(G) ? (Be(j(G), {
        doConfirm: !1
      }), tt()) : A.value = w;
    }
    function Ee(w, {
      source: G
    }) {
      if (w[0] === "" && w[1] === "") {
        Be(null, {
          doConfirm: !1
        }), S.value = null, J.value = "", ne.value = "";
        return;
      }
      const [te, fe] = w, Ke = Ft(te, N.value, /* @__PURE__ */ new Date(), O.value), lt = Ft(fe, N.value, /* @__PURE__ */ new Date(), O.value);
      if (Yt(Ke) && Yt(lt)) {
        let D = j(Ke), z = j(lt);
        lt < Ke && (G === 0 ? z = D : D = z), Be([D, z], {
          doConfirm: !1
        }), tt();
      } else
        [J.value, ne.value] = w;
    }
    function ir(w) {
      l.value || Yl(w, "clear") || E.value || qe();
    }
    function Bt(w) {
      l.value || bt(w);
    }
    function qe() {
      l.value || E.value || ot(!0);
    }
    function gt({
      returnFocus: w,
      disableUpdateOnClose: G
    }) {
      var te;
      E.value && (ot(!1), e.type !== "date" && e.updateValueOnClose && !G && He(), w && ((te = y.value) === null || te === void 0 || te.focus()));
    }
    mt(S, () => {
      tt();
    }), tt(), mt(E, (w) => {
      w || (S.value = H.value);
    });
    const St = _b(e, S), Zt = Tb(e, S);
    Nr(zo, Object.assign(Object.assign(Object.assign({
      mergedClsPrefixRef: u,
      mergedThemeRef: K,
      timePickerSizeRef: he,
      localeRef: n,
      dateLocaleRef: o,
      firstDayOfWeekRef: Ge(e, "firstDayOfWeek"),
      isDateDisabledRef: Ge(e, "isDateDisabled"),
      rangesRef: Ge(e, "ranges"),
      timePickerPropsRef: Ge(e, "timePickerProps"),
      closeOnSelectRef: Ge(e, "closeOnSelect"),
      updateValueOnCloseRef: Ge(e, "updateValueOnClose"),
      monthFormatRef: Ge(e, "monthFormat"),
      yearFormatRef: Ge(e, "yearFormat"),
      quarterFormatRef: Ge(e, "quarterFormat"),
      yearRangeRef: Ge(e, "yearRange")
    }, St), Zt), {
      datePickerSlots: r
    }));
    const k = {
      focus: () => {
        var w;
        (w = y.value) === null || w === void 0 || w.focus();
      },
      blur: () => {
        var w;
        (w = y.value) === null || w === void 0 || w.blur();
      }
    }, Z = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: w
        },
        self: {
          iconColor: G,
          iconColorDisabled: te
        }
      } = K.value;
      return {
        "--n-bezier": w,
        "--n-icon-color-override": G,
        "--n-icon-color-disabled-override": te
      };
    }), le = g ? zr("date-picker-trigger", void 0, Z, e) : void 0, Oe = P(() => {
      const {
        type: w
      } = e, {
        common: {
          cubicBezierEaseInOut: G
        },
        self: {
          calendarTitleFontSize: te,
          calendarDaysFontSize: fe,
          itemFontSize: Ke,
          itemTextColor: lt,
          itemColorDisabled: D,
          itemColorIncluded: z,
          itemColorHover: q,
          itemColorActive: xe,
          itemBorderRadius: Je,
          itemTextColorDisabled: Le,
          itemTextColorActive: Ae,
          panelColor: v,
          panelTextColor: R,
          arrowColor: ie,
          calendarTitleTextColor: De,
          panelActionDividerColor: ze,
          panelHeaderDividerColor: _e,
          calendarDaysDividerColor: Tt,
          panelBoxShadow: Lt,
          panelBorderRadius: ut,
          calendarTitleFontWeight: lr,
          panelExtraFooterPadding: sr,
          panelActionPadding: Pr,
          itemSize: wn,
          itemCellWidth: Pn,
          itemCellHeight: Dn,
          scrollItemWidth: x,
          scrollItemHeight: L,
          calendarTitlePadding: se,
          calendarTitleHeight: ft,
          calendarDaysHeight: jt,
          calendarDaysTextColor: Ue,
          arrowSize: Dr,
          panelHeaderPadding: Yr,
          calendarDividerColor: _r,
          calendarTitleGridTempateColumns: Wo,
          iconColor: No,
          iconColorDisabled: Bo,
          scrollItemBorderRadius: Lo,
          calendarTitleColorHover: Vo,
          [Se("calendarLeftPadding", w)]: jo,
          [Se("calendarRightPadding", w)]: Uo
        }
      } = K.value;
      return {
        "--n-bezier": G,
        "--n-panel-border-radius": ut,
        "--n-panel-color": v,
        "--n-panel-box-shadow": Lt,
        "--n-panel-text-color": R,
        // panel header
        "--n-panel-header-padding": Yr,
        "--n-panel-header-divider-color": _e,
        // panel calendar
        "--n-calendar-left-padding": jo,
        "--n-calendar-right-padding": Uo,
        "--n-calendar-title-color-hover": Vo,
        "--n-calendar-title-height": ft,
        "--n-calendar-title-padding": se,
        "--n-calendar-title-font-size": te,
        "--n-calendar-title-font-weight": lr,
        "--n-calendar-title-text-color": De,
        "--n-calendar-title-grid-template-columns": Wo,
        "--n-calendar-days-height": jt,
        "--n-calendar-days-divider-color": Tt,
        "--n-calendar-days-font-size": fe,
        "--n-calendar-days-text-color": Ue,
        "--n-calendar-divider-color": _r,
        // panel action
        "--n-panel-action-padding": Pr,
        "--n-panel-extra-footer-padding": sr,
        "--n-panel-action-divider-color": ze,
        // panel item
        "--n-item-font-size": Ke,
        "--n-item-border-radius": Je,
        "--n-item-size": wn,
        "--n-item-cell-width": Pn,
        "--n-item-cell-height": Dn,
        "--n-item-text-color": lt,
        "--n-item-color-included": z,
        "--n-item-color-disabled": D,
        "--n-item-color-hover": q,
        "--n-item-color-active": xe,
        "--n-item-text-color-disabled": Le,
        "--n-item-text-color-active": Ae,
        // scroll item
        "--n-scroll-item-width": x,
        "--n-scroll-item-height": L,
        "--n-scroll-item-border-radius": Lo,
        // panel arrow
        "--n-arrow-size": Dr,
        "--n-arrow-color": ie,
        // icon in trigger
        "--n-icon-color": No,
        "--n-icon-color-disabled": Bo
      };
    }), Ie = g ? zr("date-picker", P(() => e.type), Oe, e) : void 0;
    return Object.assign(Object.assign({}, k), {
      mergedStatus: s,
      mergedClsPrefix: u,
      mergedBordered: f,
      namespace: m,
      uncontrolledValue: U,
      pendingValue: S,
      panelInstRef: h,
      triggerElRef: C,
      inputInstRef: y,
      isMounted: Mo(),
      displayTime: A,
      displayStartTime: J,
      displayEndTime: ne,
      mergedShow: E,
      adjustedTo: yr(e),
      isRange: ve,
      localizedStartPlaceholder: Te,
      localizedEndPlaceholder: Fe,
      mergedSize: i,
      mergedDisabled: l,
      localizedPlacehoder: de,
      isValueInvalid: St.isValueInvalidRef,
      isStartValueInvalid: Zt.isStartValueInvalidRef,
      isEndValueInvalid: Zt.isEndValueInvalidRef,
      handleInputKeydown: It,
      handleClickOutside: xt,
      handleKeydown: at,
      handleClear: Ht,
      handlePanelClear: Dt,
      handleTriggerClick: ir,
      handleInputActivate: it,
      handleInputDeactivate: M,
      handleInputFocus: Bt,
      handleInputBlur: ht,
      handlePanelTabOut: Wt,
      handlePanelClose: Nt,
      handleRangeUpdateValue: Ee,
      handleSingleUpdateValue: ue,
      handlePanelUpdateValue: Me,
      handlePanelConfirm: He,
      mergedTheme: K,
      actions: et,
      triggerCssVars: g ? void 0 : Z,
      triggerThemeClass: le == null ? void 0 : le.themeClass,
      triggerOnRender: le == null ? void 0 : le.onRender,
      cssVars: g ? void 0 : Oe,
      themeClass: Ie == null ? void 0 : Ie.themeClass,
      onRender: Ie == null ? void 0 : Ie.onRender,
      onNextMonth: e.onNextMonth,
      onPrevMonth: e.onPrevMonth,
      onNextYear: e.onNextYear,
      onPrevYear: e.onPrevYear
    });
  },
  render() {
    const {
      clearable: e,
      triggerOnRender: r,
      mergedClsPrefix: t,
      $slots: n
    } = this, o = {
      onUpdateValue: this.handlePanelUpdateValue,
      onTabOut: this.handlePanelTabOut,
      onClose: this.handlePanelClose,
      onClear: this.handlePanelClear,
      onKeydown: this.handleKeydown,
      onConfirm: this.handlePanelConfirm,
      ref: "panelInstRef",
      value: this.pendingValue,
      active: this.mergedShow,
      actions: this.actions,
      shortcuts: this.shortcuts,
      style: this.cssVars,
      defaultTime: this.defaultTime,
      themeClass: this.themeClass,
      panel: this.panel,
      inputReadonly: this.inputReadonly || this.mergedDisabled,
      onRender: this.onRender,
      onNextMonth: this.onNextMonth,
      onPrevMonth: this.onPrevMonth,
      onNextYear: this.onNextYear,
      onPrevYear: this.onPrevYear,
      timerPickerFormat: this.timerPickerFormat,
      dateFormat: this.dateFormat,
      calendarDayFormat: this.calendarDayFormat,
      calendarHeaderYearFormat: this.calendarHeaderYearFormat,
      calendarHeaderMonthFormat: this.calendarHeaderMonthFormat,
      calendarHeaderMonthYearSeparator: this.calendarHeaderMonthYearSeparator,
      calendarHeaderMonthBeforeYear: this.calendarHeaderMonthBeforeYear
    }, a = () => {
      const {
        type: l
      } = this;
      return l === "datetime" ? c(bb, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), n) : l === "daterange" ? c($C, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), n) : l === "datetimerange" ? c(Sb, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), n) : l === "month" || l === "year" || l === "quarter" ? c(id, Object.assign({}, o, {
        type: l,
        key: l
      })) : l === "monthrange" || l === "yearrange" || l === "quarterrange" ? c(wb, Object.assign({}, o, {
        type: l
      })) : c(FC, Object.assign({}, o, {
        type: l,
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), n);
    };
    if (this.panel)
      return a();
    r == null || r();
    const i = {
      bordered: this.mergedBordered,
      size: this.mergedSize,
      passivelyActivated: !0,
      disabled: this.mergedDisabled,
      readonly: this.inputReadonly || this.mergedDisabled,
      clearable: e,
      onClear: this.handleClear,
      onClick: this.handleTriggerClick,
      onKeydown: this.handleInputKeydown,
      onActivate: this.handleInputActivate,
      onDeactivate: this.handleInputDeactivate,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur
    };
    return c("div", {
      ref: "triggerElRef",
      class: [`${t}-date-picker`, this.mergedDisabled && `${t}-date-picker--disabled`, this.isRange && `${t}-date-picker--range`, this.triggerThemeClass],
      style: this.triggerCssVars,
      onKeydown: this.handleKeydown
    }, c(ja, null, {
      default: () => [c(Ua, null, {
        default: () => this.isRange ? c(un, Object.assign({
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: [this.displayStartTime, this.displayEndTime],
          placeholder: [this.localizedStartPlaceholder, this.localizedEndPlaceholder],
          textDecoration: [this.isStartValueInvalid ? "line-through" : "", this.isEndValueInvalid ? "line-through" : ""],
          pair: !0,
          onUpdateValue: this.handleRangeUpdateValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          internalForceFocus: this.mergedShow,
          internalDeactivateOnEnter: !0
        }, i), {
          separator: () => this.separator === void 0 ? ke(n.separator, () => [c(xr, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => c(Av, null)
          })]) : this.separator,
          [e ? "clear-icon-placeholder" : "suffix"]: () => ke(n["date-icon"], () => [c(xr, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => c(il, null)
          })])
        }) : c(un, Object.assign({
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTime,
          placeholder: this.localizedPlacehoder,
          textDecoration: this.isValueInvalid && !this.isRange ? "line-through" : "",
          onUpdateValue: this.handleSingleUpdateValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          internalForceFocus: this.mergedShow,
          internalDeactivateOnEnter: !0
        }, i), {
          [e ? "clear-icon-placeholder" : "suffix"]: () => c(xr, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => ke(n["date-icon"], () => [c(il, null)])
          })
        })
      }), c(Ya, {
        show: this.mergedShow,
        containerClass: this.namespace,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === yr.tdkey,
        placement: this.placement
      }, {
        default: () => c($r, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? Ln(a(), [[Va, this.handleClickOutside, void 0, {
            capture: !0
          }]]) : null
        })
      })]
    }));
  }
}), Rb = {
  abstract: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clsPrefix: String,
  locale: Object,
  dateLocale: Object,
  namespace: String,
  rtl: Array,
  tag: {
    type: String,
    default: "div"
  },
  hljs: Object,
  katex: Object,
  theme: Object,
  themeOverrides: Object,
  componentOptions: Object,
  icons: Object,
  breakpoints: Object,
  preflightStyleDisabled: Boolean,
  styleMountTarget: Object,
  inlineThemeDisabled: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  as: {
    type: String,
    validator: () => (ms("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Eb = Ce({
  name: "ConfigProvider",
  alias: ["App"],
  props: Rb,
  setup(e) {
    const r = Qe(ur, null), t = P(() => {
      const {
        theme: C
      } = e;
      if (C === null) return;
      const y = r == null ? void 0 : r.mergedThemeRef.value;
      return C === void 0 ? y : y === void 0 ? C : Object.assign({}, y, C);
    }), n = P(() => {
      const {
        themeOverrides: C
      } = e;
      if (C !== null) {
        if (C === void 0)
          return r == null ? void 0 : r.mergedThemeOverridesRef.value;
        {
          const y = r == null ? void 0 : r.mergedThemeOverridesRef.value;
          return y === void 0 ? C : Mn({}, y, C);
        }
      }
    }), o = Gt(() => {
      const {
        namespace: C
      } = e;
      return C === void 0 ? r == null ? void 0 : r.mergedNamespaceRef.value : C;
    }), a = Gt(() => {
      const {
        bordered: C
      } = e;
      return C === void 0 ? r == null ? void 0 : r.mergedBorderedRef.value : C;
    }), i = P(() => {
      const {
        icons: C
      } = e;
      return C === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : C;
    }), l = P(() => {
      const {
        componentOptions: C
      } = e;
      return C !== void 0 ? C : r == null ? void 0 : r.mergedComponentPropsRef.value;
    }), s = P(() => {
      const {
        clsPrefix: C
      } = e;
      return C !== void 0 ? C : r ? r.mergedClsPrefixRef.value : wa;
    }), d = P(() => {
      var C;
      const {
        rtl: y
      } = e;
      if (y === void 0)
        return r == null ? void 0 : r.mergedRtlRef.value;
      const b = {};
      for (const _ of y)
        b[_.name] = ui(_), (C = _.peers) === null || C === void 0 || C.forEach((E) => {
          E.name in b || (b[E.name] = ui(E));
        });
      return b;
    }), u = P(() => e.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), m = e.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), g = e.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), h = P(() => {
      const {
        value: C
      } = t, {
        value: y
      } = n, b = y && Object.keys(y).length !== 0, _ = C == null ? void 0 : C.name;
      return _ ? b ? `${_}-${zn(JSON.stringify(n.value))}` : _ : b ? zn(JSON.stringify(n.value)) : "";
    });
    return Nr(ur, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: u,
      mergedRtlRef: d,
      mergedIconsRef: i,
      mergedComponentPropsRef: l,
      mergedBorderedRef: a,
      mergedNamespaceRef: o,
      mergedClsPrefixRef: s,
      mergedLocaleRef: P(() => {
        const {
          locale: C
        } = e;
        if (C !== null)
          return C === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : C;
      }),
      mergedDateLocaleRef: P(() => {
        const {
          dateLocale: C
        } = e;
        if (C !== null)
          return C === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : C;
      }),
      mergedHljsRef: P(() => {
        const {
          hljs: C
        } = e;
        return C === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : C;
      }),
      mergedKatexRef: P(() => {
        const {
          katex: C
        } = e;
        return C === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : C;
      }),
      mergedThemeRef: t,
      mergedThemeOverridesRef: n,
      inlineThemeDisabled: f || !1,
      preflightStyleDisabled: m || !1,
      styleMountTarget: g
    }), {
      mergedClsPrefix: s,
      mergedBordered: a,
      mergedNamespace: o,
      mergedTheme: t,
      mergedThemeOverrides: n
    };
  },
  render() {
    var e, r, t, n;
    return this.abstract ? (n = (t = this.$slots).default) === null || n === void 0 ? void 0 : n.call(t) : c(this.as || this.tag, {
      class: `${this.mergedClsPrefix || wa}-config-provider`
    }, (r = (e = this.$slots).default) === null || r === void 0 ? void 0 : r.call(e));
  }
}), Ib = {
  iconMargin: "11px 8px 0 12px",
  iconMarginRtl: "11px 12px 0 8px",
  iconSize: "24px",
  closeIconSize: "16px",
  closeSize: "20px",
  closeMargin: "13px 14px 0 0",
  closeMarginRtl: "13px 0 0 14px",
  padding: "13px"
}, kb = {
  name: "Alert",
  common: W,
  self(e) {
    const {
      lineHeight: r,
      borderRadius: t,
      fontWeightStrong: n,
      dividerColor: o,
      inputColor: a,
      textColor1: i,
      textColor2: l,
      closeColorHover: s,
      closeColorPressed: d,
      closeIconColor: u,
      closeIconColorHover: f,
      closeIconColorPressed: m,
      infoColorSuppl: g,
      successColorSuppl: h,
      warningColorSuppl: C,
      errorColorSuppl: y,
      fontSize: b
    } = e;
    return Object.assign(Object.assign({}, Ib), {
      fontSize: b,
      lineHeight: r,
      titleFontWeight: n,
      borderRadius: t,
      border: `1px solid ${o}`,
      color: a,
      titleTextColor: i,
      iconColor: l,
      contentTextColor: l,
      closeBorderRadius: t,
      closeColorHover: s,
      closeColorPressed: d,
      closeIconColor: u,
      closeIconColorHover: f,
      closeIconColorPressed: m,
      borderInfo: `1px solid ${Q(g, {
        alpha: 0.35
      })}`,
      colorInfo: Q(g, {
        alpha: 0.25
      }),
      titleTextColorInfo: i,
      iconColorInfo: g,
      contentTextColorInfo: l,
      closeColorHoverInfo: s,
      closeColorPressedInfo: d,
      closeIconColorInfo: u,
      closeIconColorHoverInfo: f,
      closeIconColorPressedInfo: m,
      borderSuccess: `1px solid ${Q(h, {
        alpha: 0.35
      })}`,
      colorSuccess: Q(h, {
        alpha: 0.25
      }),
      titleTextColorSuccess: i,
      iconColorSuccess: h,
      contentTextColorSuccess: l,
      closeColorHoverSuccess: s,
      closeColorPressedSuccess: d,
      closeIconColorSuccess: u,
      closeIconColorHoverSuccess: f,
      closeIconColorPressedSuccess: m,
      borderWarning: `1px solid ${Q(C, {
        alpha: 0.35
      })}`,
      colorWarning: Q(C, {
        alpha: 0.25
      }),
      titleTextColorWarning: i,
      iconColorWarning: C,
      contentTextColorWarning: l,
      closeColorHoverWarning: s,
      closeColorPressedWarning: d,
      closeIconColorWarning: u,
      closeIconColorHoverWarning: f,
      closeIconColorPressedWarning: m,
      borderError: `1px solid ${Q(y, {
        alpha: 0.35
      })}`,
      colorError: Q(y, {
        alpha: 0.25
      }),
      titleTextColorError: i,
      iconColorError: y,
      contentTextColorError: l,
      closeColorHoverError: s,
      closeColorPressedError: d,
      closeIconColorError: u,
      closeIconColorHoverError: f,
      closeIconColorPressedError: m
    });
  }
}, Fb = {
  linkFontSize: "13px",
  linkPadding: "0 0 0 16px",
  railWidth: "4px"
};
function Ab(e) {
  const {
    borderRadius: r,
    railColor: t,
    primaryColor: n,
    primaryColorHover: o,
    primaryColorPressed: a,
    textColor2: i
  } = e;
  return Object.assign(Object.assign({}, Fb), {
    borderRadius: r,
    railColor: t,
    railColorActive: n,
    linkColor: Q(n, {
      alpha: 0.15
    }),
    linkTextColor: i,
    linkTextColorHover: o,
    linkTextColorPressed: a,
    linkTextColorActive: n
  });
}
const $b = {
  name: "Anchor",
  common: W,
  self: Ab
};
function zb(e) {
  const {
    boxShadow2: r
  } = e;
  return {
    menuBoxShadow: r
  };
}
const Hb = {
  name: "AutoComplete",
  common: W,
  peers: {
    InternalSelectMenu: Xn,
    Input: qt
  },
  self: zb
};
function Wb(e) {
  const {
    borderRadius: r,
    avatarColor: t,
    cardColor: n,
    fontSize: o,
    heightTiny: a,
    heightSmall: i,
    heightMedium: l,
    heightLarge: s,
    heightHuge: d,
    modalColor: u,
    popoverColor: f
  } = e;
  return {
    borderRadius: r,
    fontSize: o,
    border: `2px solid ${n}`,
    heightTiny: a,
    heightSmall: i,
    heightMedium: l,
    heightLarge: s,
    heightHuge: d,
    color: re(n, t),
    colorModal: re(u, t),
    colorPopover: re(f, t)
  };
}
const ud = {
  name: "Avatar",
  common: W,
  self: Wb
};
function Nb() {
  return {
    gap: "-12px"
  };
}
const Bb = {
  name: "AvatarGroup",
  common: W,
  peers: {
    Avatar: ud
  },
  self: Nb
}, Lb = {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  iconSize: "26px"
}, Vb = {
  name: "BackTop",
  common: W,
  self(e) {
    const {
      popoverColor: r,
      textColor2: t,
      primaryColorHover: n,
      primaryColorPressed: o
    } = e;
    return Object.assign(Object.assign({}, Lb), {
      color: r,
      textColor: t,
      iconColor: t,
      iconColorHover: n,
      iconColorPressed: o,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
    });
  }
}, jb = {
  name: "Badge",
  common: W,
  self(e) {
    const {
      errorColorSuppl: r,
      infoColorSuppl: t,
      successColorSuppl: n,
      warningColorSuppl: o,
      fontFamily: a
    } = e;
    return {
      color: r,
      colorInfo: t,
      colorSuccess: n,
      colorError: r,
      colorWarning: o,
      fontSize: "12px",
      fontFamily: a
    };
  }
}, Ub = {
  fontWeightActive: "400"
};
function Yb(e) {
  const {
    fontSize: r,
    textColor3: t,
    textColor2: n,
    borderRadius: o,
    buttonColor2Hover: a,
    buttonColor2Pressed: i
  } = e;
  return Object.assign(Object.assign({}, Ub), {
    fontSize: r,
    itemLineHeight: "1.25",
    itemTextColor: t,
    itemTextColorHover: n,
    itemTextColorPressed: n,
    itemTextColorActive: n,
    itemBorderRadius: o,
    itemColorHover: a,
    itemColorPressed: i,
    separatorColor: t
  });
}
const Gb = {
  name: "Breadcrumb",
  common: W,
  self: Yb
}, qb = {
  name: "ButtonGroup",
  common: W
}, Kb = {
  titleFontSize: "22px"
};
function Xb(e) {
  const {
    borderRadius: r,
    fontSize: t,
    lineHeight: n,
    textColor2: o,
    textColor1: a,
    textColorDisabled: i,
    dividerColor: l,
    fontWeightStrong: s,
    primaryColor: d,
    baseColor: u,
    hoverColor: f,
    cardColor: m,
    modalColor: g,
    popoverColor: h
  } = e;
  return Object.assign(Object.assign({}, Kb), {
    borderRadius: r,
    borderColor: re(m, l),
    borderColorModal: re(g, l),
    borderColorPopover: re(h, l),
    textColor: o,
    titleFontWeight: s,
    titleTextColor: a,
    dayTextColor: i,
    fontSize: t,
    lineHeight: n,
    dateColorCurrent: d,
    dateTextColorCurrent: u,
    cellColorHover: re(m, f),
    cellColorHoverModal: re(g, f),
    cellColorHoverPopover: re(h, f),
    cellColor: m,
    cellColorModal: g,
    cellColorPopover: h,
    barColor: d
  });
}
const Qb = {
  name: "Calendar",
  common: W,
  peers: {
    Button: zt
  },
  self: Xb
}, Jb = {
  paddingSmall: "12px 16px 12px",
  paddingMedium: "19px 24px 20px",
  paddingLarge: "23px 32px 24px",
  paddingHuge: "27px 40px 28px",
  titleFontSizeSmall: "16px",
  titleFontSizeMedium: "18px",
  titleFontSizeLarge: "18px",
  titleFontSizeHuge: "18px",
  closeIconSize: "18px",
  closeSize: "22px"
};
function Zb(e) {
  const {
    primaryColor: r,
    borderRadius: t,
    lineHeight: n,
    fontSize: o,
    cardColor: a,
    textColor2: i,
    textColor1: l,
    dividerColor: s,
    fontWeightStrong: d,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: m,
    closeColorHover: g,
    closeColorPressed: h,
    modalColor: C,
    boxShadow1: y,
    popoverColor: b,
    actionColor: _
  } = e;
  return Object.assign(Object.assign({}, Jb), {
    lineHeight: n,
    color: a,
    colorModal: C,
    colorPopover: b,
    colorTarget: r,
    colorEmbedded: _,
    colorEmbeddedModal: _,
    colorEmbeddedPopover: _,
    textColor: i,
    titleTextColor: l,
    borderColor: s,
    actionColor: _,
    titleFontWeight: d,
    closeColorHover: g,
    closeColorPressed: h,
    closeBorderRadius: t,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: m,
    fontSizeSmall: o,
    fontSizeMedium: o,
    fontSizeLarge: o,
    fontSizeHuge: o,
    boxShadow: y,
    borderRadius: t
  });
}
const fd = {
  name: "Card",
  common: W,
  self(e) {
    const r = Zb(e), {
      cardColor: t,
      modalColor: n,
      popoverColor: o
    } = e;
    return r.colorEmbedded = t, r.colorEmbeddedModal = n, r.colorEmbeddedPopover = o, r;
  }
};
function e0() {
  return {
    dotSize: "8px",
    dotColor: "rgba(255, 255, 255, .3)",
    dotColorActive: "rgba(255, 255, 255, 1)",
    dotColorFocus: "rgba(255, 255, 255, .5)",
    dotLineWidth: "16px",
    dotLineWidthActive: "24px",
    arrowColor: "#eee"
  };
}
const t0 = {
  name: "Carousel",
  common: W,
  self: e0
}, r0 = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function n0(e) {
  const {
    baseColor: r,
    inputColorDisabled: t,
    cardColor: n,
    modalColor: o,
    popoverColor: a,
    textColorDisabled: i,
    borderColor: l,
    primaryColor: s,
    textColor2: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: m,
    borderRadiusSmall: g,
    lineHeight: h
  } = e;
  return Object.assign(Object.assign({}, r0), {
    labelLineHeight: h,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: m,
    borderRadius: g,
    color: r,
    colorChecked: s,
    colorDisabled: t,
    colorDisabledChecked: t,
    colorTableHeader: n,
    colorTableHeaderModal: o,
    colorTableHeaderPopover: a,
    checkMarkColor: r,
    checkMarkColorDisabled: i,
    checkMarkColorDisabledChecked: i,
    border: `1px solid ${l}`,
    borderDisabled: `1px solid ${l}`,
    borderDisabledChecked: `1px solid ${l}`,
    borderChecked: `1px solid ${s}`,
    borderFocus: `1px solid ${s}`,
    boxShadowFocus: `0 0 0 2px ${Q(s, {
      alpha: 0.3
    })}`,
    textColor: d,
    textColorDisabled: i
  });
}
const yn = {
  name: "Checkbox",
  common: W,
  self(e) {
    const {
      cardColor: r
    } = e, t = n0(e);
    return t.color = "#0000", t.checkMarkColor = r, t;
  }
};
function o0(e) {
  const {
    borderRadius: r,
    boxShadow2: t,
    popoverColor: n,
    textColor2: o,
    textColor3: a,
    primaryColor: i,
    textColorDisabled: l,
    dividerColor: s,
    hoverColor: d,
    fontSizeMedium: u,
    heightMedium: f
  } = e;
  return {
    menuBorderRadius: r,
    menuColor: n,
    menuBoxShadow: t,
    menuDividerColor: s,
    menuHeight: "calc(var(--n-option-height) * 6.6)",
    optionArrowColor: a,
    optionHeight: f,
    optionFontSize: u,
    optionColorHover: d,
    optionTextColor: o,
    optionTextColorActive: i,
    optionTextColorDisabled: l,
    optionCheckMarkColor: i,
    loadingColor: i,
    columnWidth: "180px"
  };
}
const a0 = {
  name: "Cascader",
  common: W,
  peers: {
    InternalSelectMenu: Xn,
    InternalSelection: ri,
    Scrollbar: $t,
    Checkbox: yn,
    Empty: Qv
  },
  self: o0
}, md = {
  name: "Code",
  common: W,
  self(e) {
    const {
      textColor2: r,
      fontSize: t,
      fontWeightStrong: n,
      textColor3: o
    } = e;
    return {
      textColor: r,
      fontSize: t,
      fontWeightStrong: n,
      // extracted from hljs atom-one-dark.scss
      "mono-3": "#5c6370",
      "hue-1": "#56b6c2",
      "hue-2": "#61aeee",
      "hue-3": "#c678dd",
      "hue-4": "#98c379",
      "hue-5": "#e06c75",
      "hue-5-2": "#be5046",
      "hue-6": "#d19a66",
      "hue-6-2": "#e6c07b",
      // line-number styles
      lineNumberTextColor: o
    };
  }
};
function i0(e) {
  const {
    cubicBezierEaseInOut: r
  } = e;
  return {
    bezier: r
  };
}
const l0 = {
  name: "CollapseTransition",
  common: W,
  self: i0
};
function s0(e) {
  const {
    fontWeight: r,
    textColor1: t,
    textColor2: n,
    textColorDisabled: o,
    dividerColor: a,
    fontSize: i
  } = e;
  return {
    titleFontSize: i,
    titleFontWeight: r,
    dividerColor: a,
    titleTextColor: t,
    titleTextColorDisabled: o,
    fontSize: i,
    textColor: n,
    arrowColor: n,
    arrowColorDisabled: o,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
}
const d0 = {
  name: "Collapse",
  common: W,
  self: s0
};
function c0(e) {
  const {
    fontSize: r,
    boxShadow2: t,
    popoverColor: n,
    textColor2: o,
    borderRadius: a,
    borderColor: i,
    heightSmall: l,
    heightMedium: s,
    heightLarge: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: m,
    dividerColor: g
  } = e;
  return {
    panelFontSize: r,
    boxShadow: t,
    color: n,
    textColor: o,
    borderRadius: a,
    border: `1px solid ${i}`,
    heightSmall: l,
    heightMedium: s,
    heightLarge: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: m,
    dividerColor: g
  };
}
const u0 = {
  name: "ColorPicker",
  common: W,
  peers: {
    Input: qt,
    Button: zt
  },
  self: c0
}, f0 = {
  padding: "4px 0",
  optionIconSizeSmall: "14px",
  optionIconSizeMedium: "16px",
  optionIconSizeLarge: "16px",
  optionIconSizeHuge: "18px",
  optionSuffixWidthSmall: "14px",
  optionSuffixWidthMedium: "14px",
  optionSuffixWidthLarge: "16px",
  optionSuffixWidthHuge: "16px",
  optionIconSuffixWidthSmall: "32px",
  optionIconSuffixWidthMedium: "32px",
  optionIconSuffixWidthLarge: "36px",
  optionIconSuffixWidthHuge: "36px",
  optionPrefixWidthSmall: "14px",
  optionPrefixWidthMedium: "14px",
  optionPrefixWidthLarge: "16px",
  optionPrefixWidthHuge: "16px",
  optionIconPrefixWidthSmall: "36px",
  optionIconPrefixWidthMedium: "36px",
  optionIconPrefixWidthLarge: "40px",
  optionIconPrefixWidthHuge: "40px"
};
function m0(e) {
  const {
    primaryColor: r,
    textColor2: t,
    dividerColor: n,
    hoverColor: o,
    popoverColor: a,
    invertedColor: i,
    borderRadius: l,
    fontSizeSmall: s,
    fontSizeMedium: d,
    fontSizeLarge: u,
    fontSizeHuge: f,
    heightSmall: m,
    heightMedium: g,
    heightLarge: h,
    heightHuge: C,
    textColor3: y,
    opacityDisabled: b
  } = e;
  return Object.assign(Object.assign({}, f0), {
    optionHeightSmall: m,
    optionHeightMedium: g,
    optionHeightLarge: h,
    optionHeightHuge: C,
    borderRadius: l,
    fontSizeSmall: s,
    fontSizeMedium: d,
    fontSizeLarge: u,
    fontSizeHuge: f,
    // non-inverted
    optionTextColor: t,
    optionTextColorHover: t,
    optionTextColorActive: r,
    optionTextColorChildActive: r,
    color: a,
    dividerColor: n,
    suffixColor: t,
    prefixColor: t,
    optionColorHover: o,
    optionColorActive: Q(r, {
      alpha: 0.1
    }),
    groupHeaderTextColor: y,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: i,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: r,
    optionColorActiveInverted: r,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: b
  });
}
const ci = {
  name: "Dropdown",
  common: W,
  peers: {
    Popover: Ur
  },
  self(e) {
    const {
      primaryColorSuppl: r,
      primaryColor: t,
      popoverColor: n
    } = e, o = m0(e);
    return o.colorInverted = n, o.optionColorActive = Q(t, {
      alpha: 0.15
    }), o.optionColorActiveInverted = r, o.optionColorHoverInverted = r, o;
  }
}, h0 = {
  padding: "8px 14px"
}, Ho = {
  name: "Tooltip",
  common: W,
  peers: {
    Popover: Ur
  },
  self(e) {
    const {
      borderRadius: r,
      boxShadow2: t,
      popoverColor: n,
      textColor2: o
    } = e;
    return Object.assign(Object.assign({}, h0), {
      borderRadius: r,
      boxShadow: t,
      color: n,
      textColor: o
    });
  }
}, hd = {
  name: "Ellipsis",
  common: W,
  peers: {
    Tooltip: Ho
  }
}, pd = {
  name: "Popselect",
  common: W,
  peers: {
    Popover: Ur,
    InternalSelectMenu: Xn
  }
};
function p0(e) {
  const {
    boxShadow2: r
  } = e;
  return {
    menuBoxShadow: r
  };
}
const gd = {
  name: "Select",
  common: W,
  peers: {
    InternalSelection: ri,
    InternalSelectMenu: Xn
  },
  self: p0
}, g0 = {
  itemPaddingSmall: "0 4px",
  itemMarginSmall: "0 0 0 8px",
  itemMarginSmallRtl: "0 8px 0 0",
  itemPaddingMedium: "0 4px",
  itemMarginMedium: "0 0 0 8px",
  itemMarginMediumRtl: "0 8px 0 0",
  itemPaddingLarge: "0 4px",
  itemMarginLarge: "0 0 0 8px",
  itemMarginLargeRtl: "0 8px 0 0",
  buttonIconSizeSmall: "14px",
  buttonIconSizeMedium: "16px",
  buttonIconSizeLarge: "18px",
  inputWidthSmall: "60px",
  selectWidthSmall: "unset",
  inputMarginSmall: "0 0 0 8px",
  inputMarginSmallRtl: "0 8px 0 0",
  selectMarginSmall: "0 0 0 8px",
  prefixMarginSmall: "0 8px 0 0",
  suffixMarginSmall: "0 0 0 8px",
  inputWidthMedium: "60px",
  selectWidthMedium: "unset",
  inputMarginMedium: "0 0 0 8px",
  inputMarginMediumRtl: "0 8px 0 0",
  selectMarginMedium: "0 0 0 8px",
  prefixMarginMedium: "0 8px 0 0",
  suffixMarginMedium: "0 0 0 8px",
  inputWidthLarge: "60px",
  selectWidthLarge: "unset",
  inputMarginLarge: "0 0 0 8px",
  inputMarginLargeRtl: "0 8px 0 0",
  selectMarginLarge: "0 0 0 8px",
  prefixMarginLarge: "0 8px 0 0",
  suffixMarginLarge: "0 0 0 8px"
};
function v0(e) {
  const {
    textColor2: r,
    primaryColor: t,
    primaryColorHover: n,
    primaryColorPressed: o,
    inputColorDisabled: a,
    textColorDisabled: i,
    borderColor: l,
    borderRadius: s,
    // item font size
    fontSizeTiny: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    // item size
    heightTiny: m,
    heightSmall: g,
    heightMedium: h
  } = e;
  return Object.assign(Object.assign({}, g0), {
    buttonColor: "#0000",
    buttonColorHover: "#0000",
    buttonColorPressed: "#0000",
    buttonBorder: `1px solid ${l}`,
    buttonBorderHover: `1px solid ${l}`,
    buttonBorderPressed: `1px solid ${l}`,
    buttonIconColor: r,
    buttonIconColorHover: r,
    buttonIconColorPressed: r,
    itemTextColor: r,
    itemTextColorHover: n,
    itemTextColorPressed: o,
    itemTextColorActive: t,
    itemTextColorDisabled: i,
    itemColor: "#0000",
    itemColorHover: "#0000",
    itemColorPressed: "#0000",
    itemColorActive: "#0000",
    itemColorActiveHover: "#0000",
    itemColorDisabled: a,
    itemBorder: "1px solid #0000",
    itemBorderHover: "1px solid #0000",
    itemBorderPressed: "1px solid #0000",
    itemBorderActive: `1px solid ${t}`,
    itemBorderDisabled: `1px solid ${l}`,
    itemBorderRadius: s,
    itemSizeSmall: m,
    itemSizeMedium: g,
    itemSizeLarge: h,
    itemFontSizeSmall: d,
    itemFontSizeMedium: u,
    itemFontSizeLarge: f,
    jumperFontSizeSmall: d,
    jumperFontSizeMedium: u,
    jumperFontSizeLarge: f,
    jumperTextColor: r,
    jumperTextColorDisabled: i
  });
}
const vd = {
  name: "Pagination",
  common: W,
  peers: {
    Select: gd,
    Input: qt,
    Popselect: pd
  },
  self(e) {
    const {
      primaryColor: r,
      opacity3: t
    } = e, n = Q(r, {
      alpha: Number(t)
    }), o = v0(e);
    return o.itemBorderActive = `1px solid ${n}`, o.itemBorderDisabled = "1px solid #0000", o;
  }
}, C0 = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
}, Cd = {
  name: "Radio",
  common: W,
  self(e) {
    const {
      borderColor: r,
      primaryColor: t,
      baseColor: n,
      textColorDisabled: o,
      inputColorDisabled: a,
      textColor2: i,
      opacityDisabled: l,
      borderRadius: s,
      fontSizeSmall: d,
      fontSizeMedium: u,
      fontSizeLarge: f,
      heightSmall: m,
      heightMedium: g,
      heightLarge: h,
      lineHeight: C
    } = e;
    return Object.assign(Object.assign({}, C0), {
      labelLineHeight: C,
      buttonHeightSmall: m,
      buttonHeightMedium: g,
      buttonHeightLarge: h,
      fontSizeSmall: d,
      fontSizeMedium: u,
      fontSizeLarge: f,
      boxShadow: `inset 0 0 0 1px ${r}`,
      boxShadowActive: `inset 0 0 0 1px ${t}`,
      boxShadowFocus: `inset 0 0 0 1px ${t}, 0 0 0 2px ${Q(t, {
        alpha: 0.3
      })}`,
      boxShadowHover: `inset 0 0 0 1px ${t}`,
      boxShadowDisabled: `inset 0 0 0 1px ${r}`,
      color: "#0000",
      colorDisabled: a,
      colorActive: "#0000",
      textColor: i,
      textColorDisabled: o,
      dotColorActive: t,
      dotColorDisabled: r,
      buttonBorderColor: r,
      buttonBorderColorActive: t,
      buttonBorderColorHover: t,
      buttonColor: "#0000",
      buttonColorActive: t,
      buttonTextColor: i,
      buttonTextColorActive: n,
      buttonTextColorHover: t,
      opacityDisabled: l,
      buttonBoxShadowFocus: `inset 0 0 0 1px ${t}, 0 0 0 2px ${Q(t, {
        alpha: 0.3
      })}`,
      buttonBoxShadowHover: `inset 0 0 0 1px ${t}`,
      buttonBoxShadow: "inset 0 0 0 1px #0000",
      buttonBorderRadius: s
    });
  }
}, b0 = {
  thPaddingSmall: "8px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "8px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px",
  sorterSize: "15px",
  resizableContainerSize: "8px",
  resizableSize: "2px",
  filterSize: "15px",
  paginationMargin: "12px 0 0 0",
  emptyPadding: "48px 0",
  actionPadding: "8px 12px",
  actionButtonMargin: "0 8px 0 0"
};
function x0(e) {
  const {
    cardColor: r,
    modalColor: t,
    popoverColor: n,
    textColor2: o,
    textColor1: a,
    tableHeaderColor: i,
    tableColorHover: l,
    iconColor: s,
    primaryColor: d,
    fontWeightStrong: u,
    borderRadius: f,
    lineHeight: m,
    fontSizeSmall: g,
    fontSizeMedium: h,
    fontSizeLarge: C,
    dividerColor: y,
    heightSmall: b,
    opacityDisabled: _,
    tableColorStriped: E
  } = e;
  return Object.assign(Object.assign({}, b0), {
    actionDividerColor: y,
    lineHeight: m,
    borderRadius: f,
    fontSizeSmall: g,
    fontSizeMedium: h,
    fontSizeLarge: C,
    borderColor: re(r, y),
    tdColorHover: re(r, l),
    tdColorSorting: re(r, l),
    tdColorStriped: re(r, E),
    thColor: re(r, i),
    thColorHover: re(re(r, i), l),
    thColorSorting: re(re(r, i), l),
    tdColor: r,
    tdTextColor: o,
    thTextColor: a,
    thFontWeight: u,
    thButtonColorHover: l,
    thIconColor: s,
    thIconColorActive: d,
    // modal
    borderColorModal: re(t, y),
    tdColorHoverModal: re(t, l),
    tdColorSortingModal: re(t, l),
    tdColorStripedModal: re(t, E),
    thColorModal: re(t, i),
    thColorHoverModal: re(re(t, i), l),
    thColorSortingModal: re(re(t, i), l),
    tdColorModal: t,
    // popover
    borderColorPopover: re(n, y),
    tdColorHoverPopover: re(n, l),
    tdColorSortingPopover: re(n, l),
    tdColorStripedPopover: re(n, E),
    thColorPopover: re(n, i),
    thColorHoverPopover: re(re(n, i), l),
    thColorSortingPopover: re(re(n, i), l),
    tdColorPopover: n,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: d,
    loadingSize: b,
    opacityLoading: _
  });
}
const S0 = {
  name: "DataTable",
  common: W,
  peers: {
    Button: zt,
    Checkbox: yn,
    Radio: Cd,
    Pagination: vd,
    Scrollbar: $t,
    Empty: jr,
    Popover: Ur,
    Ellipsis: hd,
    Dropdown: ci
  },
  self(e) {
    const r = x0(e);
    return r.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", r.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", r;
  }
}, y0 = {
  thPaddingBorderedSmall: "8px 12px",
  thPaddingBorderedMedium: "12px 16px",
  thPaddingBorderedLarge: "16px 24px",
  thPaddingSmall: "0",
  thPaddingMedium: "0",
  thPaddingLarge: "0",
  tdPaddingBorderedSmall: "8px 12px",
  tdPaddingBorderedMedium: "12px 16px",
  tdPaddingBorderedLarge: "16px 24px",
  tdPaddingSmall: "0 0 8px 0",
  tdPaddingMedium: "0 0 12px 0",
  tdPaddingLarge: "0 0 16px 0"
};
function w0(e) {
  const {
    tableHeaderColor: r,
    textColor2: t,
    textColor1: n,
    cardColor: o,
    modalColor: a,
    popoverColor: i,
    dividerColor: l,
    borderRadius: s,
    fontWeightStrong: d,
    lineHeight: u,
    fontSizeSmall: f,
    fontSizeMedium: m,
    fontSizeLarge: g
  } = e;
  return Object.assign(Object.assign({}, y0), {
    lineHeight: u,
    fontSizeSmall: f,
    fontSizeMedium: m,
    fontSizeLarge: g,
    titleTextColor: n,
    thColor: re(o, r),
    thColorModal: re(a, r),
    thColorPopover: re(i, r),
    thTextColor: n,
    thFontWeight: d,
    tdTextColor: t,
    tdColor: o,
    tdColorModal: a,
    tdColorPopover: i,
    borderColor: re(o, l),
    borderColorModal: re(a, l),
    borderColorPopover: re(i, l),
    borderRadius: s
  });
}
const P0 = {
  name: "Descriptions",
  common: W,
  self: w0
}, D0 = {
  titleFontSize: "18px",
  padding: "16px 28px 20px 28px",
  iconSize: "28px",
  actionSpace: "12px",
  contentMargin: "8px 0 16px 0",
  iconMargin: "0 4px 0 0",
  iconMarginIconTop: "4px 0 8px 0",
  closeSize: "22px",
  closeIconSize: "18px",
  closeMargin: "20px 26px 0 0",
  closeMarginIconTop: "10px 16px 0 0"
};
function _0(e) {
  const {
    textColor1: r,
    textColor2: t,
    modalColor: n,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeColorHover: l,
    closeColorPressed: s,
    infoColor: d,
    successColor: u,
    warningColor: f,
    errorColor: m,
    primaryColor: g,
    dividerColor: h,
    borderRadius: C,
    fontWeightStrong: y,
    lineHeight: b,
    fontSize: _
  } = e;
  return Object.assign(Object.assign({}, D0), {
    fontSize: _,
    lineHeight: b,
    border: `1px solid ${h}`,
    titleTextColor: r,
    textColor: t,
    color: n,
    closeColorHover: l,
    closeColorPressed: s,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeBorderRadius: C,
    iconColor: g,
    iconColorInfo: d,
    iconColorSuccess: u,
    iconColorWarning: f,
    iconColorError: m,
    borderRadius: C,
    titleFontWeight: y
  });
}
const bd = {
  name: "Dialog",
  common: W,
  peers: {
    Button: zt
  },
  self: _0
};
function T0(e) {
  const {
    textColor1: r,
    dividerColor: t,
    fontWeightStrong: n
  } = e;
  return {
    textColor: r,
    color: t,
    fontWeight: n
  };
}
const O0 = {
  name: "Divider",
  common: W,
  self: T0
};
function M0(e) {
  const {
    modalColor: r,
    textColor1: t,
    textColor2: n,
    boxShadow3: o,
    lineHeight: a,
    fontWeightStrong: i,
    dividerColor: l,
    closeColorHover: s,
    closeColorPressed: d,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: m,
    borderRadius: g,
    primaryColorHover: h
  } = e;
  return {
    bodyPadding: "16px 24px",
    borderRadius: g,
    headerPadding: "16px 24px",
    footerPadding: "16px 24px",
    color: r,
    textColor: n,
    titleTextColor: t,
    titleFontSize: "18px",
    titleFontWeight: i,
    boxShadow: o,
    lineHeight: a,
    headerBorderBottom: `1px solid ${l}`,
    footerBorderTop: `1px solid ${l}`,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: m,
    closeSize: "22px",
    closeIconSize: "18px",
    closeColorHover: s,
    closeColorPressed: d,
    closeBorderRadius: g,
    resizableTriggerColorHover: h
  };
}
const R0 = {
  name: "Drawer",
  common: W,
  peers: {
    Scrollbar: $t
  },
  self: M0
}, E0 = {
  actionMargin: "0 0 0 20px",
  actionMarginRtl: "0 20px 0 0"
}, I0 = {
  name: "DynamicInput",
  common: W,
  peers: {
    Input: qt,
    Button: zt
  },
  self() {
    return E0;
  }
}, k0 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
}, xd = {
  name: "Space",
  self() {
    return k0;
  }
}, F0 = {
  name: "DynamicTags",
  common: W,
  peers: {
    Input: qt,
    Button: zt,
    Tag: Ys,
    Space: xd
  },
  self() {
    return {
      inputWidth: "64px"
    };
  }
}, A0 = {
  name: "Element",
  common: W
}, $0 = () => ({}), z0 = {
  name: "Equation",
  common: W,
  self: $0
}, H0 = {
  name: "FloatButtonGroup",
  common: W,
  self(e) {
    const {
      popoverColor: r,
      dividerColor: t,
      borderRadius: n
    } = e;
    return {
      color: r,
      buttonBorderColor: t,
      borderRadiusSquare: n,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
    };
  }
}, W0 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
}, N0 = {
  name: "Flex",
  self() {
    return W0;
  }
}, B0 = {
  feedbackPadding: "4px 0 0 2px",
  feedbackHeightSmall: "24px",
  feedbackHeightMedium: "24px",
  feedbackHeightLarge: "26px",
  feedbackFontSizeSmall: "13px",
  feedbackFontSizeMedium: "14px",
  feedbackFontSizeLarge: "14px",
  labelFontSizeLeftSmall: "14px",
  labelFontSizeLeftMedium: "14px",
  labelFontSizeLeftLarge: "15px",
  labelFontSizeTopSmall: "13px",
  labelFontSizeTopMedium: "14px",
  labelFontSizeTopLarge: "14px",
  labelHeightSmall: "24px",
  labelHeightMedium: "26px",
  labelHeightLarge: "28px",
  labelPaddingVertical: "0 0 6px 2px",
  labelPaddingHorizontal: "0 12px 0 0",
  labelTextAlignVertical: "left",
  labelTextAlignHorizontal: "right",
  labelFontWeight: "400"
};
function L0(e) {
  const {
    heightSmall: r,
    heightMedium: t,
    heightLarge: n,
    textColor1: o,
    errorColor: a,
    warningColor: i,
    lineHeight: l,
    textColor3: s
  } = e;
  return Object.assign(Object.assign({}, B0), {
    blankHeightSmall: r,
    blankHeightMedium: t,
    blankHeightLarge: n,
    lineHeight: l,
    labelTextColor: o,
    asteriskColor: a,
    feedbackTextColorError: a,
    feedbackTextColorWarning: i,
    feedbackTextColor: s
  });
}
const V0 = {
  name: "Form",
  common: W,
  self: L0
}, j0 = {
  name: "GradientText",
  common: W,
  self(e) {
    const {
      primaryColor: r,
      successColor: t,
      warningColor: n,
      errorColor: o,
      infoColor: a,
      primaryColorSuppl: i,
      successColorSuppl: l,
      warningColorSuppl: s,
      errorColorSuppl: d,
      infoColorSuppl: u,
      fontWeightStrong: f
    } = e;
    return {
      fontWeight: f,
      rotate: "252deg",
      colorStartPrimary: r,
      colorEndPrimary: i,
      colorStartInfo: a,
      colorEndInfo: u,
      colorStartWarning: n,
      colorEndWarning: s,
      colorStartError: o,
      colorEndError: d,
      colorStartSuccess: t,
      colorEndSuccess: l
    };
  }
};
function U0(e) {
  const {
    textColorBase: r,
    opacity1: t,
    opacity2: n,
    opacity3: o,
    opacity4: a,
    opacity5: i
  } = e;
  return {
    color: r,
    opacity1Depth: t,
    opacity2Depth: n,
    opacity3Depth: o,
    opacity4Depth: a,
    opacity5Depth: i
  };
}
const Y0 = {
  name: "Icon",
  common: W,
  self: U0
}, G0 = {
  name: "InputNumber",
  common: W,
  peers: {
    Button: zt,
    Input: qt
  },
  self(e) {
    const {
      textColorDisabled: r
    } = e;
    return {
      iconColorDisabled: r
    };
  }
}, q0 = {
  name: "Layout",
  common: W,
  peers: {
    Scrollbar: $t
  },
  self(e) {
    const {
      textColor2: r,
      bodyColor: t,
      popoverColor: n,
      cardColor: o,
      dividerColor: a,
      scrollbarColor: i,
      scrollbarColorHover: l
    } = e;
    return {
      textColor: r,
      textColorInverted: r,
      color: t,
      colorEmbedded: t,
      headerColor: o,
      headerColorInverted: o,
      footerColor: o,
      footerColorInverted: o,
      headerBorderColor: a,
      headerBorderColorInverted: a,
      footerBorderColor: a,
      footerBorderColorInverted: a,
      siderBorderColor: a,
      siderBorderColorInverted: a,
      siderColor: o,
      siderColorInverted: o,
      siderToggleButtonBorder: "1px solid transparent",
      siderToggleButtonColor: n,
      siderToggleButtonIconColor: r,
      siderToggleButtonIconColorInverted: r,
      siderToggleBarColor: re(t, i),
      siderToggleBarColorHover: re(t, l),
      __invertScrollbar: "false"
    };
  }
}, K0 = {
  name: "Row",
  common: W
};
function X0(e) {
  const {
    textColor2: r,
    cardColor: t,
    modalColor: n,
    popoverColor: o,
    dividerColor: a,
    borderRadius: i,
    fontSize: l,
    hoverColor: s
  } = e;
  return {
    textColor: r,
    color: t,
    colorHover: s,
    colorModal: n,
    colorHoverModal: re(n, s),
    colorPopover: o,
    colorHoverPopover: re(o, s),
    borderColor: a,
    borderColorModal: re(n, a),
    borderColorPopover: re(o, a),
    borderRadius: i,
    fontSize: l
  };
}
const Q0 = {
  name: "List",
  common: W,
  self: X0
}, J0 = {
  name: "LoadingBar",
  common: W,
  self(e) {
    const {
      primaryColor: r
    } = e;
    return {
      colorError: "red",
      colorLoading: r,
      height: "2px"
    };
  }
}, Z0 = {
  name: "Log",
  common: W,
  peers: {
    Scrollbar: $t,
    Code: md
  },
  self(e) {
    const {
      textColor2: r,
      inputColor: t,
      fontSize: n,
      primaryColor: o
    } = e;
    return {
      loaderFontSize: n,
      loaderTextColor: r,
      loaderColor: t,
      loaderBorder: "1px solid #0000",
      loadingColor: o
    };
  }
}, ex = {
  name: "Mention",
  common: W,
  peers: {
    InternalSelectMenu: Xn,
    Input: qt
  },
  self(e) {
    const {
      boxShadow2: r
    } = e;
    return {
      menuBoxShadow: r
    };
  }
};
function tx(e, r, t, n) {
  return {
    itemColorHoverInverted: "#0000",
    itemColorActiveInverted: r,
    itemColorActiveHoverInverted: r,
    itemColorActiveCollapsedInverted: r,
    itemTextColorInverted: e,
    itemTextColorHoverInverted: t,
    itemTextColorChildActiveInverted: t,
    itemTextColorChildActiveHoverInverted: t,
    itemTextColorActiveInverted: t,
    itemTextColorActiveHoverInverted: t,
    itemTextColorHorizontalInverted: e,
    itemTextColorHoverHorizontalInverted: t,
    itemTextColorChildActiveHorizontalInverted: t,
    itemTextColorChildActiveHoverHorizontalInverted: t,
    itemTextColorActiveHorizontalInverted: t,
    itemTextColorActiveHoverHorizontalInverted: t,
    itemIconColorInverted: e,
    itemIconColorHoverInverted: t,
    itemIconColorActiveInverted: t,
    itemIconColorActiveHoverInverted: t,
    itemIconColorChildActiveInverted: t,
    itemIconColorChildActiveHoverInverted: t,
    itemIconColorCollapsedInverted: e,
    itemIconColorHorizontalInverted: e,
    itemIconColorHoverHorizontalInverted: t,
    itemIconColorActiveHorizontalInverted: t,
    itemIconColorActiveHoverHorizontalInverted: t,
    itemIconColorChildActiveHorizontalInverted: t,
    itemIconColorChildActiveHoverHorizontalInverted: t,
    arrowColorInverted: e,
    arrowColorHoverInverted: t,
    arrowColorActiveInverted: t,
    arrowColorActiveHoverInverted: t,
    arrowColorChildActiveInverted: t,
    arrowColorChildActiveHoverInverted: t,
    groupTextColorInverted: n
  };
}
function rx(e) {
  const {
    borderRadius: r,
    textColor3: t,
    primaryColor: n,
    textColor2: o,
    textColor1: a,
    fontSize: i,
    dividerColor: l,
    hoverColor: s,
    primaryColorHover: d
  } = e;
  return Object.assign({
    borderRadius: r,
    color: "#0000",
    groupTextColor: t,
    itemColorHover: s,
    itemColorActive: Q(n, {
      alpha: 0.1
    }),
    itemColorActiveHover: Q(n, {
      alpha: 0.1
    }),
    itemColorActiveCollapsed: Q(n, {
      alpha: 0.1
    }),
    itemTextColor: o,
    itemTextColorHover: o,
    itemTextColorActive: n,
    itemTextColorActiveHover: n,
    itemTextColorChildActive: n,
    itemTextColorChildActiveHover: n,
    itemTextColorHorizontal: o,
    itemTextColorHoverHorizontal: d,
    itemTextColorActiveHorizontal: n,
    itemTextColorActiveHoverHorizontal: n,
    itemTextColorChildActiveHorizontal: n,
    itemTextColorChildActiveHoverHorizontal: n,
    itemIconColor: a,
    itemIconColorHover: a,
    itemIconColorActive: n,
    itemIconColorActiveHover: n,
    itemIconColorChildActive: n,
    itemIconColorChildActiveHover: n,
    itemIconColorCollapsed: a,
    itemIconColorHorizontal: a,
    itemIconColorHoverHorizontal: d,
    itemIconColorActiveHorizontal: n,
    itemIconColorActiveHoverHorizontal: n,
    itemIconColorChildActiveHorizontal: n,
    itemIconColorChildActiveHoverHorizontal: n,
    itemHeight: "42px",
    arrowColor: o,
    arrowColorHover: o,
    arrowColorActive: n,
    arrowColorActiveHover: n,
    arrowColorChildActive: n,
    arrowColorChildActiveHover: n,
    colorInverted: "#0000",
    borderColorHorizontal: "#0000",
    fontSize: i,
    dividerColor: l
  }, tx("#BBB", n, "#FFF", "#AAA"));
}
const nx = {
  name: "Menu",
  common: W,
  peers: {
    Tooltip: Ho,
    Dropdown: ci
  },
  self(e) {
    const {
      primaryColor: r,
      primaryColorSuppl: t
    } = e, n = rx(e);
    return n.itemColorActive = Q(r, {
      alpha: 0.15
    }), n.itemColorActiveHover = Q(r, {
      alpha: 0.15
    }), n.itemColorActiveCollapsed = Q(r, {
      alpha: 0.15
    }), n.itemColorActiveInverted = t, n.itemColorActiveHoverInverted = t, n.itemColorActiveCollapsedInverted = t, n;
  }
}, ox = {
  margin: "0 0 8px 0",
  padding: "10px 20px",
  maxWidth: "720px",
  minWidth: "420px",
  iconMargin: "0 10px 0 0",
  closeMargin: "0 0 0 10px",
  closeSize: "20px",
  closeIconSize: "16px",
  iconSize: "20px",
  fontSize: "14px"
};
function ax(e) {
  const {
    textColor2: r,
    closeIconColor: t,
    closeIconColorHover: n,
    closeIconColorPressed: o,
    infoColor: a,
    successColor: i,
    errorColor: l,
    warningColor: s,
    popoverColor: d,
    boxShadow2: u,
    primaryColor: f,
    lineHeight: m,
    borderRadius: g,
    closeColorHover: h,
    closeColorPressed: C
  } = e;
  return Object.assign(Object.assign({}, ox), {
    closeBorderRadius: g,
    textColor: r,
    textColorInfo: r,
    textColorSuccess: r,
    textColorError: r,
    textColorWarning: r,
    textColorLoading: r,
    color: d,
    colorInfo: d,
    colorSuccess: d,
    colorError: d,
    colorWarning: d,
    colorLoading: d,
    boxShadow: u,
    boxShadowInfo: u,
    boxShadowSuccess: u,
    boxShadowError: u,
    boxShadowWarning: u,
    boxShadowLoading: u,
    iconColor: r,
    iconColorInfo: a,
    iconColorSuccess: i,
    iconColorWarning: s,
    iconColorError: l,
    iconColorLoading: f,
    closeColorHover: h,
    closeColorPressed: C,
    closeIconColor: t,
    closeIconColorHover: n,
    closeIconColorPressed: o,
    closeColorHoverInfo: h,
    closeColorPressedInfo: C,
    closeIconColorInfo: t,
    closeIconColorHoverInfo: n,
    closeIconColorPressedInfo: o,
    closeColorHoverSuccess: h,
    closeColorPressedSuccess: C,
    closeIconColorSuccess: t,
    closeIconColorHoverSuccess: n,
    closeIconColorPressedSuccess: o,
    closeColorHoverError: h,
    closeColorPressedError: C,
    closeIconColorError: t,
    closeIconColorHoverError: n,
    closeIconColorPressedError: o,
    closeColorHoverWarning: h,
    closeColorPressedWarning: C,
    closeIconColorWarning: t,
    closeIconColorHoverWarning: n,
    closeIconColorPressedWarning: o,
    closeColorHoverLoading: h,
    closeColorPressedLoading: C,
    closeIconColorLoading: t,
    closeIconColorHoverLoading: n,
    closeIconColorPressedLoading: o,
    loadingColor: f,
    lineHeight: m,
    borderRadius: g
  });
}
const ix = {
  name: "Message",
  common: W,
  self: ax
};
function lx(e) {
  const {
    modalColor: r,
    textColor2: t,
    boxShadow3: n
  } = e;
  return {
    color: r,
    textColor: t,
    boxShadow: n
  };
}
const sx = {
  name: "Modal",
  common: W,
  peers: {
    Scrollbar: $t,
    Dialog: bd,
    Card: fd
  },
  self: lx
}, dx = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function cx(e) {
  const {
    textColor2: r,
    successColor: t,
    infoColor: n,
    warningColor: o,
    errorColor: a,
    popoverColor: i,
    closeIconColor: l,
    closeIconColorHover: s,
    closeIconColorPressed: d,
    closeColorHover: u,
    closeColorPressed: f,
    textColor1: m,
    textColor3: g,
    borderRadius: h,
    fontWeightStrong: C,
    boxShadow2: y,
    lineHeight: b,
    fontSize: _
  } = e;
  return Object.assign(Object.assign({}, dx), {
    borderRadius: h,
    lineHeight: b,
    fontSize: _,
    headerFontWeight: C,
    iconColor: r,
    iconColorSuccess: t,
    iconColorInfo: n,
    iconColorWarning: o,
    iconColorError: a,
    color: i,
    textColor: r,
    closeIconColor: l,
    closeIconColorHover: s,
    closeIconColorPressed: d,
    closeBorderRadius: h,
    closeColorHover: u,
    closeColorPressed: f,
    headerTextColor: m,
    descriptionTextColor: g,
    actionTextColor: r,
    boxShadow: y
  });
}
const ux = {
  name: "Notification",
  common: W,
  peers: {
    Scrollbar: $t
  },
  self: cx
}, fx = {
  titleFontSize: "18px",
  backSize: "22px"
};
function mx(e) {
  const {
    textColor1: r,
    textColor2: t,
    textColor3: n,
    fontSize: o,
    fontWeightStrong: a,
    primaryColorHover: i,
    primaryColorPressed: l
  } = e;
  return Object.assign(Object.assign({}, fx), {
    titleFontWeight: a,
    fontSize: o,
    titleTextColor: r,
    backColor: t,
    backColorHover: i,
    backColorPressed: l,
    subtitleTextColor: n
  });
}
const hx = {
  name: "PageHeader",
  common: W,
  self: mx
}, px = {
  iconSize: "22px"
};
function gx(e) {
  const {
    fontSize: r,
    warningColor: t
  } = e;
  return Object.assign(Object.assign({}, px), {
    fontSize: r,
    iconColor: t
  });
}
const vx = {
  name: "Popconfirm",
  common: W,
  peers: {
    Button: zt,
    Popover: Ur
  },
  self: gx
};
function Cx(e) {
  const {
    infoColor: r,
    successColor: t,
    warningColor: n,
    errorColor: o,
    textColor2: a,
    progressRailColor: i,
    fontSize: l,
    fontWeight: s
  } = e;
  return {
    fontSize: l,
    fontSizeCircle: "28px",
    fontWeightCircle: s,
    railColor: i,
    railHeight: "8px",
    iconSizeCircle: "36px",
    iconSizeLine: "18px",
    iconColor: r,
    iconColorInfo: r,
    iconColorSuccess: t,
    iconColorWarning: n,
    iconColorError: o,
    textColorCircle: a,
    textColorLineInner: "rgb(255, 255, 255)",
    textColorLineOuter: a,
    fillColor: r,
    fillColorInfo: r,
    fillColorSuccess: t,
    fillColorWarning: n,
    fillColorError: o,
    lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
  };
}
const Sd = {
  name: "Progress",
  common: W,
  self(e) {
    const r = Cx(e);
    return r.textColorLineInner = "rgb(0, 0, 0)", r.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", r;
  }
}, bx = {
  name: "Rate",
  common: W,
  self(e) {
    const {
      railColor: r
    } = e;
    return {
      itemColor: r,
      itemColorActive: "#CCAA33",
      itemSize: "20px",
      sizeSmall: "16px",
      sizeMedium: "20px",
      sizeLarge: "24px"
    };
  }
}, xx = {
  titleFontSizeSmall: "26px",
  titleFontSizeMedium: "32px",
  titleFontSizeLarge: "40px",
  titleFontSizeHuge: "48px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  iconSizeSmall: "64px",
  iconSizeMedium: "80px",
  iconSizeLarge: "100px",
  iconSizeHuge: "125px",
  iconColor418: void 0,
  iconColor404: void 0,
  iconColor403: void 0,
  iconColor500: void 0
};
function Sx(e) {
  const {
    textColor2: r,
    textColor1: t,
    errorColor: n,
    successColor: o,
    infoColor: a,
    warningColor: i,
    lineHeight: l,
    fontWeightStrong: s
  } = e;
  return Object.assign(Object.assign({}, xx), {
    lineHeight: l,
    titleFontWeight: s,
    titleTextColor: t,
    textColor: r,
    iconColorError: n,
    iconColorSuccess: o,
    iconColorInfo: a,
    iconColorWarning: i
  });
}
const yx = {
  name: "Result",
  common: W,
  self: Sx
}, wx = {
  railHeight: "4px",
  railWidthVertical: "4px",
  handleSize: "18px",
  dotHeight: "8px",
  dotWidth: "8px",
  dotBorderRadius: "4px"
}, Px = {
  name: "Slider",
  common: W,
  self(e) {
    const r = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", {
      railColor: t,
      modalColor: n,
      primaryColorSuppl: o,
      popoverColor: a,
      textColor2: i,
      cardColor: l,
      borderRadius: s,
      fontSize: d,
      opacityDisabled: u
    } = e;
    return Object.assign(Object.assign({}, wx), {
      fontSize: d,
      markFontSize: d,
      railColor: t,
      railColorHover: t,
      fillColor: o,
      fillColorHover: o,
      opacityDisabled: u,
      handleColor: "#FFF",
      dotColor: l,
      dotColorModal: n,
      dotColorPopover: a,
      handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      indicatorColor: a,
      indicatorBoxShadow: r,
      indicatorTextColor: i,
      indicatorBorderRadius: s,
      dotBorder: `2px solid ${t}`,
      dotBorderActive: `2px solid ${o}`,
      dotBoxShadow: ""
    });
  }
};
function Dx(e) {
  const {
    opacityDisabled: r,
    heightTiny: t,
    heightSmall: n,
    heightMedium: o,
    heightLarge: a,
    heightHuge: i,
    primaryColor: l,
    fontSize: s
  } = e;
  return {
    fontSize: s,
    textColor: l,
    sizeTiny: t,
    sizeSmall: n,
    sizeMedium: o,
    sizeLarge: a,
    sizeHuge: i,
    color: l,
    opacitySpinning: r
  };
}
const _x = {
  name: "Spin",
  common: W,
  self: Dx
};
function Tx(e) {
  const {
    textColor2: r,
    textColor3: t,
    fontSize: n,
    fontWeight: o
  } = e;
  return {
    labelFontSize: n,
    labelFontWeight: o,
    valueFontWeight: o,
    valueFontSize: "24px",
    labelTextColor: t,
    valuePrefixTextColor: r,
    valueSuffixTextColor: r,
    valueTextColor: r
  };
}
const Ox = {
  name: "Statistic",
  common: W,
  self: Tx
}, Mx = {
  stepHeaderFontSizeSmall: "14px",
  stepHeaderFontSizeMedium: "16px",
  indicatorIndexFontSizeSmall: "14px",
  indicatorIndexFontSizeMedium: "16px",
  indicatorSizeSmall: "22px",
  indicatorSizeMedium: "28px",
  indicatorIconSizeSmall: "14px",
  indicatorIconSizeMedium: "18px"
};
function Rx(e) {
  const {
    fontWeightStrong: r,
    baseColor: t,
    textColorDisabled: n,
    primaryColor: o,
    errorColor: a,
    textColor1: i,
    textColor2: l
  } = e;
  return Object.assign(Object.assign({}, Mx), {
    stepHeaderFontWeight: r,
    indicatorTextColorProcess: t,
    indicatorTextColorWait: n,
    indicatorTextColorFinish: o,
    indicatorTextColorError: a,
    indicatorBorderColorProcess: o,
    indicatorBorderColorWait: n,
    indicatorBorderColorFinish: o,
    indicatorBorderColorError: a,
    indicatorColorProcess: o,
    indicatorColorWait: "#0000",
    indicatorColorFinish: "#0000",
    indicatorColorError: "#0000",
    splitorColorProcess: n,
    splitorColorWait: n,
    splitorColorFinish: o,
    splitorColorError: n,
    headerTextColorProcess: i,
    headerTextColorWait: n,
    headerTextColorFinish: n,
    headerTextColorError: a,
    descriptionTextColorProcess: l,
    descriptionTextColorWait: n,
    descriptionTextColorFinish: n,
    descriptionTextColorError: a
  });
}
const Ex = {
  name: "Steps",
  common: W,
  self: Rx
}, Ix = {
  buttonHeightSmall: "14px",
  buttonHeightMedium: "18px",
  buttonHeightLarge: "22px",
  buttonWidthSmall: "14px",
  buttonWidthMedium: "18px",
  buttonWidthLarge: "22px",
  buttonWidthPressedSmall: "20px",
  buttonWidthPressedMedium: "24px",
  buttonWidthPressedLarge: "28px",
  railHeightSmall: "18px",
  railHeightMedium: "22px",
  railHeightLarge: "26px",
  railWidthSmall: "32px",
  railWidthMedium: "40px",
  railWidthLarge: "48px"
}, kx = {
  name: "Switch",
  common: W,
  self(e) {
    const {
      primaryColorSuppl: r,
      opacityDisabled: t,
      borderRadius: n,
      primaryColor: o,
      textColor2: a,
      baseColor: i
    } = e;
    return Object.assign(Object.assign({}, Ix), {
      iconColor: i,
      textColor: a,
      loadingColor: r,
      opacityDisabled: t,
      railColor: "rgba(255, 255, 255, .20)",
      railColorActive: r,
      buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      buttonColor: "#FFF",
      railBorderRadiusSmall: n,
      railBorderRadiusMedium: n,
      railBorderRadiusLarge: n,
      buttonBorderRadiusSmall: n,
      buttonBorderRadiusMedium: n,
      buttonBorderRadiusLarge: n,
      boxShadowFocus: `0 0 8px 0 ${Q(o, {
        alpha: 0.3
      })}`
    });
  }
}, Fx = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function Ax(e) {
  const {
    dividerColor: r,
    cardColor: t,
    modalColor: n,
    popoverColor: o,
    tableHeaderColor: a,
    tableColorStriped: i,
    textColor1: l,
    textColor2: s,
    borderRadius: d,
    fontWeightStrong: u,
    lineHeight: f,
    fontSizeSmall: m,
    fontSizeMedium: g,
    fontSizeLarge: h
  } = e;
  return Object.assign(Object.assign({}, Fx), {
    fontSizeSmall: m,
    fontSizeMedium: g,
    fontSizeLarge: h,
    lineHeight: f,
    borderRadius: d,
    borderColor: re(t, r),
    borderColorModal: re(n, r),
    borderColorPopover: re(o, r),
    tdColor: t,
    tdColorModal: n,
    tdColorPopover: o,
    tdColorStriped: re(t, i),
    tdColorStripedModal: re(n, i),
    tdColorStripedPopover: re(o, i),
    thColor: re(t, a),
    thColorModal: re(n, a),
    thColorPopover: re(o, a),
    thTextColor: l,
    tdTextColor: s,
    thFontWeight: u
  });
}
const $x = {
  name: "Table",
  common: W,
  self: Ax
}, zx = {
  tabFontSizeSmall: "14px",
  tabFontSizeMedium: "14px",
  tabFontSizeLarge: "16px",
  tabGapSmallLine: "36px",
  tabGapMediumLine: "36px",
  tabGapLargeLine: "36px",
  tabGapSmallLineVertical: "8px",
  tabGapMediumLineVertical: "8px",
  tabGapLargeLineVertical: "8px",
  tabPaddingSmallLine: "6px 0",
  tabPaddingMediumLine: "10px 0",
  tabPaddingLargeLine: "14px 0",
  tabPaddingVerticalSmallLine: "6px 12px",
  tabPaddingVerticalMediumLine: "8px 16px",
  tabPaddingVerticalLargeLine: "10px 20px",
  tabGapSmallBar: "36px",
  tabGapMediumBar: "36px",
  tabGapLargeBar: "36px",
  tabGapSmallBarVertical: "8px",
  tabGapMediumBarVertical: "8px",
  tabGapLargeBarVertical: "8px",
  tabPaddingSmallBar: "4px 0",
  tabPaddingMediumBar: "6px 0",
  tabPaddingLargeBar: "10px 0",
  tabPaddingVerticalSmallBar: "6px 12px",
  tabPaddingVerticalMediumBar: "8px 16px",
  tabPaddingVerticalLargeBar: "10px 20px",
  tabGapSmallCard: "4px",
  tabGapMediumCard: "4px",
  tabGapLargeCard: "4px",
  tabGapSmallCardVertical: "4px",
  tabGapMediumCardVertical: "4px",
  tabGapLargeCardVertical: "4px",
  tabPaddingSmallCard: "8px 16px",
  tabPaddingMediumCard: "10px 20px",
  tabPaddingLargeCard: "12px 24px",
  tabPaddingSmallSegment: "4px 0",
  tabPaddingMediumSegment: "6px 0",
  tabPaddingLargeSegment: "8px 0",
  tabPaddingVerticalLargeSegment: "0 8px",
  tabPaddingVerticalSmallCard: "8px 12px",
  tabPaddingVerticalMediumCard: "10px 16px",
  tabPaddingVerticalLargeCard: "12px 20px",
  tabPaddingVerticalSmallSegment: "0 4px",
  tabPaddingVerticalMediumSegment: "0 6px",
  tabGapSmallSegment: "0",
  tabGapMediumSegment: "0",
  tabGapLargeSegment: "0",
  tabGapSmallSegmentVertical: "0",
  tabGapMediumSegmentVertical: "0",
  tabGapLargeSegmentVertical: "0",
  panePaddingSmall: "8px 0 0 0",
  panePaddingMedium: "12px 0 0 0",
  panePaddingLarge: "16px 0 0 0",
  closeSize: "18px",
  closeIconSize: "14px"
};
function Hx(e) {
  const {
    textColor2: r,
    primaryColor: t,
    textColorDisabled: n,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeColorHover: l,
    closeColorPressed: s,
    tabColor: d,
    baseColor: u,
    dividerColor: f,
    fontWeight: m,
    textColor1: g,
    borderRadius: h,
    fontSize: C,
    fontWeightStrong: y
  } = e;
  return Object.assign(Object.assign({}, zx), {
    colorSegment: d,
    tabFontSizeCard: C,
    tabTextColorLine: g,
    tabTextColorActiveLine: t,
    tabTextColorHoverLine: t,
    tabTextColorDisabledLine: n,
    tabTextColorSegment: g,
    tabTextColorActiveSegment: r,
    tabTextColorHoverSegment: r,
    tabTextColorDisabledSegment: n,
    tabTextColorBar: g,
    tabTextColorActiveBar: t,
    tabTextColorHoverBar: t,
    tabTextColorDisabledBar: n,
    tabTextColorCard: g,
    tabTextColorHoverCard: g,
    tabTextColorActiveCard: t,
    tabTextColorDisabledCard: n,
    barColor: t,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeColorHover: l,
    closeColorPressed: s,
    closeBorderRadius: h,
    tabColor: d,
    tabColorSegment: u,
    tabBorderColor: f,
    tabFontWeightActive: m,
    tabFontWeight: m,
    tabBorderRadius: h,
    paneTextColor: r,
    fontWeightStrong: y
  });
}
const Wx = {
  name: "Tabs",
  common: W,
  self(e) {
    const r = Hx(e), {
      inputColor: t
    } = e;
    return r.colorSegment = t, r.tabColorSegment = t, r;
  }
};
function Nx(e) {
  const {
    textColor1: r,
    textColor2: t,
    fontWeightStrong: n,
    fontSize: o
  } = e;
  return {
    fontSize: o,
    titleTextColor: r,
    textColor: t,
    titleFontWeight: n
  };
}
const Bx = {
  name: "Thing",
  common: W,
  self: Nx
}, Lx = {
  titleMarginMedium: "0 0 6px 0",
  titleMarginLarge: "-2px 0 6px 0",
  titleFontSizeMedium: "14px",
  titleFontSizeLarge: "16px",
  iconSizeMedium: "14px",
  iconSizeLarge: "14px"
}, Vx = {
  name: "Timeline",
  common: W,
  self(e) {
    const {
      textColor3: r,
      infoColorSuppl: t,
      errorColorSuppl: n,
      successColorSuppl: o,
      warningColorSuppl: a,
      textColor1: i,
      textColor2: l,
      railColor: s,
      fontWeightStrong: d,
      fontSize: u
    } = e;
    return Object.assign(Object.assign({}, Lx), {
      contentFontSize: u,
      titleFontWeight: d,
      circleBorder: `2px solid ${r}`,
      circleBorderInfo: `2px solid ${t}`,
      circleBorderError: `2px solid ${n}`,
      circleBorderSuccess: `2px solid ${o}`,
      circleBorderWarning: `2px solid ${a}`,
      iconColor: r,
      iconColorInfo: t,
      iconColorError: n,
      iconColorSuccess: o,
      iconColorWarning: a,
      titleTextColor: i,
      contentTextColor: l,
      metaTextColor: r,
      lineColor: s
    });
  }
}, jx = {
  extraFontSizeSmall: "12px",
  extraFontSizeMedium: "12px",
  extraFontSizeLarge: "14px",
  titleFontSizeSmall: "14px",
  titleFontSizeMedium: "16px",
  titleFontSizeLarge: "16px",
  closeSize: "20px",
  closeIconSize: "16px",
  headerHeightSmall: "44px",
  headerHeightMedium: "44px",
  headerHeightLarge: "50px"
}, Ux = {
  name: "Transfer",
  common: W,
  peers: {
    Checkbox: yn,
    Scrollbar: $t,
    Input: qt,
    Empty: jr,
    Button: zt
  },
  self(e) {
    const {
      fontWeight: r,
      fontSizeLarge: t,
      fontSizeMedium: n,
      fontSizeSmall: o,
      heightLarge: a,
      heightMedium: i,
      borderRadius: l,
      inputColor: s,
      tableHeaderColor: d,
      textColor1: u,
      textColorDisabled: f,
      textColor2: m,
      textColor3: g,
      hoverColor: h,
      closeColorHover: C,
      closeColorPressed: y,
      closeIconColor: b,
      closeIconColorHover: _,
      closeIconColorPressed: E,
      dividerColor: O
    } = e;
    return Object.assign(Object.assign({}, jx), {
      itemHeightSmall: i,
      itemHeightMedium: i,
      itemHeightLarge: a,
      fontSizeSmall: o,
      fontSizeMedium: n,
      fontSizeLarge: t,
      borderRadius: l,
      dividerColor: O,
      borderColor: "#0000",
      listColor: s,
      headerColor: d,
      titleTextColor: u,
      titleTextColorDisabled: f,
      extraTextColor: g,
      extraTextColorDisabled: f,
      itemTextColor: m,
      itemTextColorDisabled: f,
      itemColorPending: h,
      titleFontWeight: r,
      closeColorHover: C,
      closeColorPressed: y,
      closeIconColor: b,
      closeIconColorHover: _,
      closeIconColorPressed: E
    });
  }
};
function Yx(e) {
  const {
    borderRadiusSmall: r,
    dividerColor: t,
    hoverColor: n,
    pressedColor: o,
    primaryColor: a,
    textColor3: i,
    textColor2: l,
    textColorDisabled: s,
    fontSize: d
  } = e;
  return {
    fontSize: d,
    lineHeight: "1.5",
    nodeHeight: "30px",
    nodeWrapperPadding: "3px 0",
    nodeBorderRadius: r,
    nodeColorHover: n,
    nodeColorPressed: o,
    nodeColorActive: Q(a, {
      alpha: 0.1
    }),
    arrowColor: i,
    nodeTextColor: l,
    nodeTextColorDisabled: s,
    loadingColor: a,
    dropMarkColor: a,
    lineColor: t
  };
}
const yd = {
  name: "Tree",
  common: W,
  peers: {
    Checkbox: yn,
    Scrollbar: $t,
    Empty: jr
  },
  self(e) {
    const {
      primaryColor: r
    } = e, t = Yx(e);
    return t.nodeColorActive = Q(r, {
      alpha: 0.15
    }), t;
  }
}, Gx = {
  name: "TreeSelect",
  common: W,
  peers: {
    Tree: yd,
    Empty: jr,
    InternalSelection: ri
  }
}, qx = {
  headerFontSize1: "30px",
  headerFontSize2: "22px",
  headerFontSize3: "18px",
  headerFontSize4: "16px",
  headerFontSize5: "16px",
  headerFontSize6: "16px",
  headerMargin1: "28px 0 20px 0",
  headerMargin2: "28px 0 20px 0",
  headerMargin3: "28px 0 20px 0",
  headerMargin4: "28px 0 18px 0",
  headerMargin5: "28px 0 18px 0",
  headerMargin6: "28px 0 18px 0",
  headerPrefixWidth1: "16px",
  headerPrefixWidth2: "16px",
  headerPrefixWidth3: "12px",
  headerPrefixWidth4: "12px",
  headerPrefixWidth5: "12px",
  headerPrefixWidth6: "12px",
  headerBarWidth1: "4px",
  headerBarWidth2: "4px",
  headerBarWidth3: "3px",
  headerBarWidth4: "3px",
  headerBarWidth5: "3px",
  headerBarWidth6: "3px",
  pMargin: "16px 0 16px 0",
  liMargin: ".25em 0 0 0",
  olPadding: "0 0 0 2em",
  ulPadding: "0 0 0 2em"
};
function Kx(e) {
  const {
    primaryColor: r,
    textColor2: t,
    borderColor: n,
    lineHeight: o,
    fontSize: a,
    borderRadiusSmall: i,
    dividerColor: l,
    fontWeightStrong: s,
    textColor1: d,
    textColor3: u,
    infoColor: f,
    warningColor: m,
    errorColor: g,
    successColor: h,
    codeColor: C
  } = e;
  return Object.assign(Object.assign({}, qx), {
    aTextColor: r,
    blockquoteTextColor: t,
    blockquotePrefixColor: n,
    blockquoteLineHeight: o,
    blockquoteFontSize: a,
    codeBorderRadius: i,
    liTextColor: t,
    liLineHeight: o,
    liFontSize: a,
    hrColor: l,
    headerFontWeight: s,
    headerTextColor: d,
    pTextColor: t,
    pTextColor1Depth: d,
    pTextColor2Depth: t,
    pTextColor3Depth: u,
    pLineHeight: o,
    pFontSize: a,
    headerBarColor: r,
    headerBarColorPrimary: r,
    headerBarColorInfo: f,
    headerBarColorError: g,
    headerBarColorWarning: m,
    headerBarColorSuccess: h,
    textColor: t,
    textColor1Depth: d,
    textColor2Depth: t,
    textColor3Depth: u,
    textColorPrimary: r,
    textColorInfo: f,
    textColorSuccess: h,
    textColorWarning: m,
    textColorError: g,
    codeTextColor: t,
    codeColor: C,
    codeBorder: "1px solid #0000"
  });
}
const Xx = {
  name: "Typography",
  common: W,
  self: Kx
};
function Qx(e) {
  const {
    iconColor: r,
    primaryColor: t,
    errorColor: n,
    textColor2: o,
    successColor: a,
    opacityDisabled: i,
    actionColor: l,
    borderColor: s,
    hoverColor: d,
    lineHeight: u,
    borderRadius: f,
    fontSize: m
  } = e;
  return {
    fontSize: m,
    lineHeight: u,
    borderRadius: f,
    draggerColor: l,
    draggerBorder: `1px dashed ${s}`,
    draggerBorderHover: `1px dashed ${t}`,
    itemColorHover: d,
    itemColorHoverError: Q(n, {
      alpha: 0.06
    }),
    itemTextColor: o,
    itemTextColorError: n,
    itemTextColorSuccess: a,
    itemIconColor: r,
    itemDisabledOpacity: i,
    itemBorderImageCardError: `1px solid ${n}`,
    itemBorderImageCard: `1px solid ${s}`
  };
}
const Jx = {
  name: "Upload",
  common: W,
  peers: {
    Button: zt,
    Progress: Sd
  },
  self(e) {
    const {
      errorColor: r
    } = e, t = Qx(e);
    return t.itemColorHoverError = Q(r, {
      alpha: 0.09
    }), t;
  }
}, Zx = {
  name: "Watermark",
  common: W,
  self(e) {
    const {
      fontFamily: r
    } = e;
    return {
      fontFamily: r
    };
  }
}, eS = {
  name: "FloatButton",
  common: W,
  self(e) {
    const {
      popoverColor: r,
      textColor2: t,
      buttonColor2Hover: n,
      buttonColor2Pressed: o,
      primaryColor: a,
      primaryColorHover: i,
      primaryColorPressed: l,
      baseColor: s,
      borderRadius: d
    } = e;
    return {
      color: r,
      textColor: t,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      colorHover: n,
      colorPressed: o,
      colorPrimary: a,
      colorPrimaryHover: i,
      colorPrimaryPressed: l,
      textColorPrimary: s,
      borderRadiusSquare: d
    };
  }
};
function tS(e) {
  const {
    primaryColor: r,
    baseColor: t
  } = e;
  return {
    color: r,
    iconColor: t
  };
}
const rS = {
  name: "IconWrapper",
  common: W,
  self: tS
}, nS = {
  name: "Image",
  common: W,
  peers: {
    Tooltip: Ho
  },
  self: (e) => {
    const {
      textColor2: r
    } = e;
    return {
      toolbarIconColor: r,
      toolbarColor: "rgba(0, 0, 0, .35)",
      toolbarBoxShadow: "none",
      toolbarBorderRadius: "24px"
    };
  }
}, oS = {
  extraFontSize: "12px",
  width: "440px"
}, aS = {
  name: "Transfer",
  common: W,
  peers: {
    Checkbox: yn,
    Scrollbar: $t,
    Input: qt,
    Empty: jr,
    Button: zt
  },
  self(e) {
    const {
      iconColorDisabled: r,
      iconColor: t,
      fontWeight: n,
      fontSizeLarge: o,
      fontSizeMedium: a,
      fontSizeSmall: i,
      heightLarge: l,
      heightMedium: s,
      heightSmall: d,
      borderRadius: u,
      inputColor: f,
      tableHeaderColor: m,
      textColor1: g,
      textColorDisabled: h,
      textColor2: C,
      hoverColor: y
    } = e;
    return Object.assign(Object.assign({}, oS), {
      itemHeightSmall: d,
      itemHeightMedium: s,
      itemHeightLarge: l,
      fontSizeSmall: i,
      fontSizeMedium: a,
      fontSizeLarge: o,
      borderRadius: u,
      borderColor: "#0000",
      listColor: f,
      headerColor: m,
      titleTextColor: g,
      titleTextColorDisabled: h,
      extraTextColor: C,
      filterDividerColor: "#0000",
      itemTextColor: C,
      itemTextColorDisabled: h,
      itemColorPending: y,
      titleFontWeight: n,
      iconColor: t,
      iconColorDisabled: r
    });
  }
};
function iS() {
  return {};
}
const lS = {
  name: "Marquee",
  common: W,
  self: iS
}, sS = {
  name: "QrCode",
  common: W,
  self: (e) => ({
    borderRadius: e.borderRadius
  })
}, dS = {
  name: "Skeleton",
  common: W,
  self(e) {
    const {
      heightSmall: r,
      heightMedium: t,
      heightLarge: n,
      borderRadius: o
    } = e;
    return {
      color: "rgba(255, 255, 255, 0.12)",
      colorEnd: "rgba(255, 255, 255, 0.18)",
      borderRadius: o,
      heightSmall: r,
      heightMedium: t,
      heightLarge: n
    };
  }
}, cS = {
  name: "Split",
  common: W
}, uS = {
  name: "dark",
  common: W,
  Alert: kb,
  Anchor: $b,
  AutoComplete: Hb,
  Avatar: ud,
  AvatarGroup: Bb,
  BackTop: Vb,
  Badge: jb,
  Breadcrumb: Gb,
  Button: zt,
  ButtonGroup: qb,
  Calendar: Qb,
  Card: fd,
  Carousel: t0,
  Cascader: a0,
  Checkbox: yn,
  Code: md,
  Collapse: d0,
  CollapseTransition: l0,
  ColorPicker: u0,
  DataTable: S0,
  DatePicker: xC,
  Descriptions: P0,
  Dialog: bd,
  Divider: O0,
  Drawer: R0,
  Dropdown: ci,
  DynamicInput: I0,
  DynamicTags: F0,
  Element: A0,
  Empty: jr,
  Ellipsis: hd,
  Equation: z0,
  Flex: N0,
  Form: V0,
  GradientText: j0,
  Icon: Y0,
  IconWrapper: rS,
  Image: nS,
  Input: qt,
  InputNumber: G0,
  LegacyTransfer: aS,
  Layout: q0,
  List: Q0,
  LoadingBar: J0,
  Log: Z0,
  Menu: nx,
  Mention: ex,
  Message: ix,
  Modal: sx,
  Notification: ux,
  PageHeader: hx,
  Pagination: vd,
  Popconfirm: vx,
  Popover: Ur,
  Popselect: pd,
  Progress: Sd,
  QrCode: sS,
  Radio: Cd,
  Rate: bx,
  Result: yx,
  Row: K0,
  Scrollbar: $t,
  Select: gd,
  Skeleton: dS,
  Slider: Px,
  Space: xd,
  Spin: _x,
  Statistic: Ox,
  Steps: Ex,
  Switch: kx,
  Table: $x,
  Tabs: Wx,
  Tag: Ys,
  Thing: Bx,
  TimePicker: Zs,
  Timeline: Vx,
  Tooltip: Ho,
  Transfer: Ux,
  Tree: yd,
  TreeSelect: Gx,
  Typography: Xx,
  Upload: Jx,
  Watermark: Zx,
  Split: cS,
  FloatButton: eS,
  FloatButtonGroup: H0,
  Marquee: lS
}, fS = /* @__PURE__ */ Ce({
  __name: "index",
  setup(e) {
    return (r, t) => (Tl(), Qd(On(Eb), {
      "date-locale": On(Sh),
      locale: On(Vm),
      theme: On(uS)
    }, {
      default: fa(() => [
        Pl(r.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["date-locale", "locale", "theme"]));
  }
}), mS = { class: "lc-date-picker" }, hS = /* @__PURE__ */ Ce({
  __name: "datePicker",
  setup(e) {
    return (r, t) => (Tl(), Jd("div", mS, [
      fi(fS, null, {
        default: fa(() => [
          fi(
            On(Mb),
            $a({
              type: "daterange",
              to: !1
            }, r.$attrs),
            {
              separator: fa(() => t[0] || (t[0] = [
                Zd(
                  "span",
                  { class: "color-white" },
                  "-",
                  -1
                  /* HOISTED */
                )
              ])),
              _: 1
              /* STABLE */
            },
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), pS = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of r)
    t[n] = o;
  return t;
}, bS = /* @__PURE__ */ pS(hS, [["__scopeId", "data-v-86ecf069"]]);
export {
  bS as LcDatePicker
};
