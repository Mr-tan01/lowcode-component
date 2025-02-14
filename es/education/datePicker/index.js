// css 
 import './css/index.css';
 // # end css mapping css/index.css 

var Os = Object.defineProperty;
var Rs = (e, n, t) => n in e ? Os(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var ee = (e, n, t) => Rs(e, typeof n != "symbol" ? n + "" : n, t);
import { ref as F, readonly as Zr, watch as ft, computed as P, getCurrentInstance as co, onMounted as on, onBeforeUnmount as fn, reactive as Es, onBeforeMount as uo, createTextVNode as Is, Fragment as fo, Comment as Fi, defineComponent as Ce, provide as zn, inject as Xe, withDirectives as Rr, toRef as Ye, h as c, Teleport as ks, nextTick as Cn, renderSlot as Ai, onActivated as $i, onDeactivated as Hi, mergeProps as ua, isVNode as Fs, shallowRef as As, watchEffect as Ft, Transition as An, TransitionGroup as $s, markRaw as $a, openBlock as zi, createBlock as Hs, unref as Cr, withCtx as Yo, createElementBlock as zs, createVNode as Ha, createElementVNode as Bs } from "vue";
import { merge as br, upperFirst as Ls } from "lodash-es";
function ge(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ve(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
function Kn(e, n) {
  const t = ge(e);
  return isNaN(n) ? Ve(e, NaN) : (n && t.setDate(t.getDate() + n), t);
}
function gt(e, n) {
  const t = ge(e);
  if (isNaN(n)) return Ve(e, NaN);
  if (!n)
    return t;
  const r = t.getDate(), o = Ve(e, t.getTime());
  o.setMonth(t.getMonth() + n + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (t.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), t);
}
const Bi = 6048e5, Ns = 864e5, Ws = 6e4, Vs = 36e5, js = 1e3;
let Us = {};
function sr() {
  return Us;
}
function Xt(e, n) {
  var l, s, d, u;
  const t = sr(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((s = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ?? t.weekStartsOn ?? ((u = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function er(e) {
  return Xt(e, { weekStartsOn: 1 });
}
function Li(e) {
  const n = ge(e), t = n.getFullYear(), r = Ve(e, 0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = er(r), a = Ve(e, 0);
  a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0);
  const i = er(a);
  return n.getTime() >= o.getTime() ? t + 1 : n.getTime() >= i.getTime() ? t : t - 1;
}
function tr(e) {
  const n = ge(e);
  return n.setHours(0, 0, 0, 0), n;
}
function Jr(e) {
  const n = ge(e), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +e - +t;
}
function Ys(e, n) {
  const t = tr(e), r = tr(n), o = +t - Jr(t), a = +r - Jr(r);
  return Math.round((o - a) / Ns);
}
function Gs(e) {
  const n = Li(e), t = Ve(e, 0);
  return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), er(t);
}
function qs(e, n) {
  const t = n * 3;
  return gt(e, t);
}
function Go(e, n) {
  return gt(e, n * 12);
}
function Ks(e, n) {
  const t = tr(e), r = tr(n);
  return +t == +r;
}
function Xs(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ut(e) {
  if (!Xs(e) && typeof e != "number")
    return !1;
  const n = ge(e);
  return !isNaN(Number(n));
}
function Qs(e) {
  const n = ge(e);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function Zs(e) {
  const n = ge(e);
  return n.setSeconds(0, 0), n;
}
function _r(e) {
  const n = ge(e), t = n.getMonth(), r = t - t % 3;
  return n.setMonth(r, 1), n.setHours(0, 0, 0, 0), n;
}
function dn(e) {
  const n = ge(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Er(e) {
  const n = ge(e), t = Ve(e, 0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Js = {
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
}, ed = (e, n, t) => {
  let r;
  const o = Js[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Qn(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const td = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, nd = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, rd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, od = {
  date: Qn({
    formats: td,
    defaultWidth: "full"
  }),
  time: Qn({
    formats: nd,
    defaultWidth: "full"
  }),
  dateTime: Qn({
    formats: rd,
    defaultWidth: "full"
  })
}, ad = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, id = (e, n, t, r) => ad[e];
function en(e) {
  return (n, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : i;
      o = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      o = e.values[l] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[a];
  };
}
const ld = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, dd = {
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
}, cd = {
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
}, ud = {
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
}, fd = {
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
}, hd = (e, n) => {
  const t = Number(e), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, md = {
  ordinalNumber: hd,
  era: en({
    values: ld,
    defaultWidth: "wide"
  }),
  quarter: en({
    values: sd,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: en({
    values: dd,
    defaultWidth: "wide"
  }),
  day: en({
    values: cd,
    defaultWidth: "wide"
  }),
  dayPeriod: en({
    values: ud,
    defaultWidth: "wide",
    formattingValues: fd,
    defaultFormattingWidth: "wide"
  })
};
function tn(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(o);
    if (!a)
      return null;
    const i = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? gd(l, (f) => f.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      pd(l, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(s) : s, d = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(d)
    ) : d;
    const u = n.slice(i.length);
    return { value: d, rest: u };
  };
}
function pd(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function gd(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Ni(e) {
  return (n, t = {}) => {
    const r = n.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = n.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const l = n.slice(o.length);
    return { value: i, rest: l };
  };
}
const vd = /^(\d+)(th|st|nd|rd)?/i, Cd = /\d+/i, bd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xd = {
  any: [/^b/i, /^(a|c)/i]
}, Sd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Pd = {
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
}, _d = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Dd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Td = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Md = {
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
}, Od = {
  ordinalNumber: Ni({
    matchPattern: vd,
    parsePattern: Cd,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: tn({
    matchPatterns: bd,
    defaultMatchWidth: "wide",
    parsePatterns: xd,
    defaultParseWidth: "any"
  }),
  quarter: tn({
    matchPatterns: Sd,
    defaultMatchWidth: "wide",
    parsePatterns: yd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: tn({
    matchPatterns: wd,
    defaultMatchWidth: "wide",
    parsePatterns: Pd,
    defaultParseWidth: "any"
  }),
  day: tn({
    matchPatterns: _d,
    defaultMatchWidth: "wide",
    parsePatterns: Dd,
    defaultParseWidth: "any"
  }),
  dayPeriod: tn({
    matchPatterns: Td,
    defaultMatchWidth: "any",
    parsePatterns: Md,
    defaultParseWidth: "any"
  })
}, fa = {
  code: "en-US",
  formatDistance: ed,
  formatLong: od,
  formatRelative: id,
  localize: md,
  match: Od,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Rd(e) {
  const n = ge(e);
  return Ys(n, Er(n)) + 1;
}
function Wi(e) {
  const n = ge(e), t = +er(n) - +Gs(n);
  return Math.round(t / Bi) + 1;
}
function ha(e, n) {
  var u, f, h, g;
  const t = ge(e), r = t.getFullYear(), o = sr(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = Ve(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const l = Xt(i, n), s = Ve(e, 0);
  s.setFullYear(r, 0, a), s.setHours(0, 0, 0, 0);
  const d = Xt(s, n);
  return t.getTime() >= l.getTime() ? r + 1 : t.getTime() >= d.getTime() ? r : r - 1;
}
function Ed(e, n) {
  var l, s, d, u;
  const t = sr(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((s = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : s.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = ha(e, n), a = Ve(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Xt(a, n);
}
function Vi(e, n) {
  const t = ge(e), r = +Xt(t, n) - +Ed(t, n);
  return Math.round(r / Bi) + 1;
}
function Be(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const hn = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return Be(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : Be(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return Be(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  h(e, n) {
    return Be(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return Be(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return Be(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return Be(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return Be(o, n.length);
  }
}, jn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, za = {
  // Era
  G: function(e, n, t) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(r, { width: "abbreviated" });
      case "GGGGG":
        return t.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, t) {
    if (n === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return t.ordinalNumber(o, { unit: "year" });
    }
    return hn.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const o = ha(e, r), a = o > 0 ? o : 1 - o;
    if (n === "YY") {
      const i = a % 100;
      return Be(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : Be(a, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = Li(e);
    return Be(t, n.length);
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
  u: function(e, n) {
    const t = e.getFullYear();
    return Be(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return Be(r, 2);
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(r);
      case "qq":
        return Be(r, 2);
      case "qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return t.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return hn.M(e, n);
      case "Mo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return t.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "L":
        return String(r + 1);
      case "LL":
        return Be(r + 1, 2);
      case "Lo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return t.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, t, r) {
    const o = Vi(e, r);
    return n === "wo" ? t.ordinalNumber(o, { unit: "week" }) : Be(o, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = Wi(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : Be(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : hn.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = Rd(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : Be(r, n.length);
  },
  // Day of week
  E: function(e, n, t) {
    const r = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, t, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(a);
      case "ee":
        return Be(a, 2);
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
  c: function(e, n, t, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(a);
      case "cc":
        return Be(a, n.length);
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
  i: function(e, n, t) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (n) {
      case "i":
        return String(o);
      case "ii":
        return Be(o, n.length);
      case "io":
        return t.ordinalNumber(o, { unit: "day" });
      case "iii":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, t) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  b: function(e, n, t) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = jn.noon : r === 0 ? o = jn.midnight : o = r / 12 >= 1 ? "pm" : "am", n) {
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
  B: function(e, n, t) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = jn.evening : r >= 12 ? o = jn.afternoon : r >= 4 ? o = jn.morning : o = jn.night, n) {
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
  h: function(e, n, t) {
    if (n === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
    }
    return hn.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : hn.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : Be(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : Be(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : hn.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : hn.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return hn.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return La(r);
      case "XXXX":
      case "XX":
        return Mn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Mn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return La(r);
      case "xxxx":
      case "xx":
        return Mn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Mn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ba(r, ":");
      case "OOOO":
      default:
        return "GMT" + Mn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ba(r, ":");
      case "zzzz":
      default:
        return "GMT" + Mn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Be(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    const r = e.getTime();
    return Be(r, n.length);
  }
};
function Ba(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + Be(a, 2);
}
function La(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Be(Math.abs(e) / 60, 2) : Mn(e, n);
}
function Mn(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Be(Math.trunc(r / 60), 2), a = Be(r % 60, 2);
  return t + o + n + a;
}
const Na = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, ji = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, Id = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], o = t[2];
  if (!o)
    return Na(e, n);
  let a;
  switch (r) {
    case "P":
      a = n.dateTime({ width: "short" });
      break;
    case "PP":
      a = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = n.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Na(r, n)).replace("{{time}}", ji(o, n));
}, qo = {
  p: ji,
  P: Id
}, kd = /^D+$/, Fd = /^Y+$/, Ad = ["D", "DD", "YY", "YYYY"];
function Ui(e) {
  return kd.test(e);
}
function Yi(e) {
  return Fd.test(e);
}
function Ko(e, n, t) {
  const r = $d(e, n, t);
  if (console.warn(r), Ad.includes(e)) throw new RangeError(r);
}
function $d(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Hd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Bd = /^'([^]*?)'?$/, Ld = /''/g, Nd = /[a-zA-Z]/;
function Le(e, n, t) {
  var u, f, h, g, m, C, y, b;
  const r = sr(), o = (t == null ? void 0 : t.locale) ?? r.locale ?? fa, a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((C = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : C.weekStartsOn) ?? r.weekStartsOn ?? ((b = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, l = ge(e);
  if (!Ut(l))
    throw new RangeError("Invalid time value");
  let s = n.match(zd).map((D) => {
    const E = D[0];
    if (E === "p" || E === "P") {
      const M = qo[E];
      return M(D, o.formatLong);
    }
    return D;
  }).join("").match(Hd).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const E = D[0];
    if (E === "'")
      return { isToken: !1, value: Wd(D) };
    if (za[E])
      return { isToken: !0, value: D };
    if (E.match(Nd))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + E + "`"
      );
    return { isToken: !1, value: D };
  });
  o.localize.preprocessor && (s = o.localize.preprocessor(l, s));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return s.map((D) => {
    if (!D.isToken) return D.value;
    const E = D.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Yi(E) || !(t != null && t.useAdditionalDayOfYearTokens) && Ui(E)) && Ko(E, n, String(e));
    const M = za[E[0]];
    return M(l, E, o.localize, d);
  }).join("");
}
function Wd(e) {
  const n = e.match(Bd);
  return n ? n[1].replace(Ld, "'") : e;
}
function jt(e) {
  return ge(e).getDate();
}
function Vd(e) {
  return ge(e).getDay();
}
function jd(e) {
  const n = ge(e), t = n.getFullYear(), r = n.getMonth(), o = Ve(e, 0);
  return o.setFullYear(t, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Gi() {
  return Object.assign({}, sr());
}
function gn(e) {
  return ge(e).getHours();
}
function Ud(e) {
  let t = ge(e).getDay();
  return t === 0 && (t = 7), t;
}
function Yd(e) {
  return ge(e).getMilliseconds();
}
function eo(e) {
  return ge(e).getMinutes();
}
function je(e) {
  return ge(e).getMonth();
}
function to(e) {
  return ge(e).getSeconds();
}
function j(e) {
  return ge(e).getTime();
}
function Ke(e) {
  return ge(e).getFullYear();
}
function Gd(e, n) {
  const t = n instanceof Date ? Ve(n, 0) : new n(0);
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
const qd = 10;
class qi {
  constructor() {
    ee(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class Kd extends qi {
  constructor(n, t, r, o, a) {
    super(), this.value = n, this.validateValue = t, this.setValue = r, this.priority = o, a && (this.subPriority = a);
  }
  validate(n, t) {
    return this.validateValue(n, this.value, t);
  }
  set(n, t, r) {
    return this.setValue(n, t, this.value, r);
  }
}
class Xd extends qi {
  constructor() {
    super(...arguments);
    ee(this, "priority", qd);
    ee(this, "subPriority", -1);
  }
  set(t, r) {
    return r.timestampIsSet ? t : Ve(t, Gd(t, Date));
  }
}
class $e {
  run(n, t, r, o) {
    const a = this.parse(n, t, r, o);
    return a ? {
      setter: new Kd(
        a.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a.rest
    } : null;
  }
  validate(n, t, r) {
    return !0;
  }
}
class Qd extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 140);
    ee(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
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
  set(t, r, o) {
    return r.era = o, t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const st = {
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
}, nn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function dt(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function Ze(e, n) {
  const t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function rn(e, n) {
  const t = n.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const r = t[1] === "+" ? 1 : -1, o = t[2] ? parseInt(t[2], 10) : 0, a = t[3] ? parseInt(t[3], 10) : 0, i = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: r * (o * Vs + a * Ws + i * js),
    rest: n.slice(t[0].length)
  };
}
function Ki(e) {
  return Ze(st.anyDigitsSigned, e);
}
function tt(e, n) {
  switch (e) {
    case 1:
      return Ze(st.singleDigit, n);
    case 2:
      return Ze(st.twoDigits, n);
    case 3:
      return Ze(st.threeDigits, n);
    case 4:
      return Ze(st.fourDigits, n);
    default:
      return Ze(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function no(e, n) {
  switch (e) {
    case 1:
      return Ze(st.singleDigitSigned, n);
    case 2:
      return Ze(st.twoDigitsSigned, n);
    case 3:
      return Ze(st.threeDigitsSigned, n);
    case 4:
      return Ze(st.fourDigitsSigned, n);
    default:
      return Ze(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function ma(e) {
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
function Xi(e, n) {
  const t = n > 0, r = t ? n : 1 - n;
  let o;
  if (r <= 50)
    o = e || 100;
  else {
    const a = r + 50, i = Math.trunc(a / 100) * 100, l = e >= a % 100;
    o = e + i - (l ? 100 : 0);
  }
  return t ? o : 1 - o;
}
function Qi(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class Zd extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, r, o) {
    const a = (i) => ({
      year: i,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return dt(tt(4, t), a);
      case "yo":
        return dt(
          o.ordinalNumber(t, {
            unit: "year"
          }),
          a
        );
      default:
        return dt(tt(r.length, t), a);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, o) {
    const a = t.getFullYear();
    if (o.isTwoDigitYear) {
      const l = Xi(
        o.year,
        a
      );
      return t.setFullYear(l, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Jd extends $e {
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
  parse(t, r, o) {
    const a = (i) => ({
      year: i,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return dt(tt(4, t), a);
      case "Yo":
        return dt(
          o.ordinalNumber(t, {
            unit: "year"
          }),
          a
        );
      default:
        return dt(tt(r.length, t), a);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, o, a) {
    const i = ha(t, a);
    if (o.isTwoDigitYear) {
      const s = Xi(
        o.year,
        i
      );
      return t.setFullYear(
        s,
        0,
        a.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Xt(t, a);
    }
    const l = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return t.setFullYear(l, 0, a.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Xt(t, a);
  }
}
class ec extends $e {
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
  parse(t, r) {
    return no(r === "R" ? 4 : r.length, t);
  }
  set(t, r, o) {
    const a = Ve(t, 0);
    return a.setFullYear(o, 0, 4), a.setHours(0, 0, 0, 0), er(a);
  }
}
class tc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, r) {
    return no(r === "u" ? 4 : r.length, t);
  }
  set(t, r, o) {
    return t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class nc extends $e {
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
  parse(t, r, o) {
    switch (r) {
      case "Q":
      case "QQ":
        return tt(r.length, t);
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
  validate(t, r) {
    return r >= 1 && r <= 4;
  }
  set(t, r, o) {
    return t.setMonth((o - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class rc extends $e {
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
  parse(t, r, o) {
    switch (r) {
      case "q":
      case "qq":
        return tt(r.length, t);
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
  validate(t, r) {
    return r >= 1 && r <= 4;
  }
  set(t, r, o) {
    return t.setMonth((o - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class oc extends $e {
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
  parse(t, r, o) {
    const a = (i) => i - 1;
    switch (r) {
      case "M":
        return dt(
          Ze(st.month, t),
          a
        );
      case "MM":
        return dt(tt(2, t), a);
      case "Mo":
        return dt(
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
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, o) {
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ac extends $e {
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
  parse(t, r, o) {
    const a = (i) => i - 1;
    switch (r) {
      case "L":
        return dt(
          Ze(st.month, t),
          a
        );
      case "LL":
        return dt(tt(2, t), a);
      case "Lo":
        return dt(
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
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, o) {
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function ic(e, n, t) {
  const r = ge(e), o = Vi(r, t) - n;
  return r.setDate(r.getDate() - o * 7), r;
}
class lc extends $e {
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
  parse(t, r, o) {
    switch (r) {
      case "w":
        return Ze(st.week, t);
      case "wo":
        return o.ordinalNumber(t, { unit: "week" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, o, a) {
    return Xt(ic(t, o, a), a);
  }
}
function sc(e, n) {
  const t = ge(e), r = Wi(t) - n;
  return t.setDate(t.getDate() - r * 7), t;
}
class dc extends $e {
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
  parse(t, r, o) {
    switch (r) {
      case "I":
        return Ze(st.week, t);
      case "Io":
        return o.ordinalNumber(t, { unit: "week" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, o) {
    return er(sc(t, o));
  }
}
const cc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], uc = [
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
class fc extends $e {
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
  parse(t, r, o) {
    switch (r) {
      case "d":
        return Ze(st.date, t);
      case "do":
        return o.ordinalNumber(t, { unit: "date" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    const o = t.getFullYear(), a = Qi(o), i = t.getMonth();
    return a ? r >= 1 && r <= uc[i] : r >= 1 && r <= cc[i];
  }
  set(t, r, o) {
    return t.setDate(o), t.setHours(0, 0, 0, 0), t;
  }
}
class hc extends $e {
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
  parse(t, r, o) {
    switch (r) {
      case "D":
      case "DD":
        return Ze(st.dayOfYear, t);
      case "Do":
        return o.ordinalNumber(t, { unit: "date" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    const o = t.getFullYear();
    return Qi(o) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(t, r, o) {
    return t.setMonth(0, o), t.setHours(0, 0, 0, 0), t;
  }
}
function pa(e, n, t) {
  var f, h, g, m;
  const r = sr(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((m = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : m.weekStartsOn) ?? 0, a = ge(e), i = a.getDay(), s = (n % 7 + 7) % 7, d = 7 - o, u = n < 0 || n > 6 ? n - (i + d) % 7 : (s + d) % 7 - (i + d) % 7;
  return Kn(a, u);
}
class mc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 90);
    ee(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
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
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, o, a) {
    return t = pa(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
class pc extends $e {
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
  parse(t, r, o, a) {
    const i = (l) => {
      const s = Math.floor((l - 1) / 7) * 7;
      return (l + a.weekStartsOn + 6) % 7 + s;
    };
    switch (r) {
      case "e":
      case "ee":
        return dt(tt(r.length, t), i);
      case "eo":
        return dt(
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
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, o, a) {
    return t = pa(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
class gc extends $e {
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
  parse(t, r, o, a) {
    const i = (l) => {
      const s = Math.floor((l - 1) / 7) * 7;
      return (l + a.weekStartsOn + 6) % 7 + s;
    };
    switch (r) {
      case "c":
      case "cc":
        return dt(tt(r.length, t), i);
      case "co":
        return dt(
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
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, o, a) {
    return t = pa(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
function vc(e, n) {
  const t = ge(e), r = Ud(t), o = n - r;
  return Kn(t, o);
}
class Cc extends $e {
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
  parse(t, r, o) {
    const a = (i) => i === 0 ? 7 : i;
    switch (r) {
      case "i":
      case "ii":
        return tt(r.length, t);
      case "io":
        return o.ordinalNumber(t, { unit: "day" });
      case "iii":
        return dt(
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
        return dt(
          o.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return dt(
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
        return dt(
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
  validate(t, r) {
    return r >= 1 && r <= 7;
  }
  set(t, r, o) {
    return t = vc(t, o), t.setHours(0, 0, 0, 0), t;
  }
}
class bc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 80);
    ee(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
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
  set(t, r, o) {
    return t.setHours(ma(o), 0, 0, 0), t;
  }
}
class xc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 80);
    ee(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
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
  set(t, r, o) {
    return t.setHours(ma(o), 0, 0, 0), t;
  }
}
class Sc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 80);
    ee(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
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
  set(t, r, o) {
    return t.setHours(ma(o), 0, 0, 0), t;
  }
}
class yc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "h":
        return Ze(st.hour12h, t);
      case "ho":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 12;
  }
  set(t, r, o) {
    const a = t.getHours() >= 12;
    return a && o < 12 ? t.setHours(o + 12, 0, 0, 0) : !a && o === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(o, 0, 0, 0), t;
  }
}
class wc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "H":
        return Ze(st.hour23h, t);
      case "Ho":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 23;
  }
  set(t, r, o) {
    return t.setHours(o, 0, 0, 0), t;
  }
}
class Pc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "K":
        return Ze(st.hour11h, t);
      case "Ko":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, o) {
    return t.getHours() >= 12 && o < 12 ? t.setHours(o + 12, 0, 0, 0) : t.setHours(o, 0, 0, 0), t;
  }
}
class _c extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "k":
        return Ze(st.hour24h, t);
      case "ko":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 24;
  }
  set(t, r, o) {
    const a = o <= 24 ? o % 24 : o;
    return t.setHours(a, 0, 0, 0), t;
  }
}
class Dc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 60);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "m":
        return Ze(st.minute, t);
      case "mo":
        return o.ordinalNumber(t, { unit: "minute" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, o) {
    return t.setMinutes(o, 0, 0), t;
  }
}
class Tc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 50);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "s":
        return Ze(st.second, t);
      case "so":
        return o.ordinalNumber(t, { unit: "second" });
      default:
        return tt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, o) {
    return t.setSeconds(o, 0), t;
  }
}
class Mc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 30);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r) {
    const o = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return dt(tt(r.length, t), o);
  }
  set(t, r, o) {
    return t.setMilliseconds(o), t;
  }
}
class Oc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 10);
    ee(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, r) {
    switch (r) {
      case "X":
        return rn(
          nn.basicOptionalMinutes,
          t
        );
      case "XX":
        return rn(nn.basic, t);
      case "XXXX":
        return rn(
          nn.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return rn(
          nn.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return rn(nn.extended, t);
    }
  }
  set(t, r, o) {
    return r.timestampIsSet ? t : Ve(
      t,
      t.getTime() - Jr(t) - o
    );
  }
}
class Rc extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 10);
    ee(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, r) {
    switch (r) {
      case "x":
        return rn(
          nn.basicOptionalMinutes,
          t
        );
      case "xx":
        return rn(nn.basic, t);
      case "xxxx":
        return rn(
          nn.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return rn(
          nn.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return rn(nn.extended, t);
    }
  }
  set(t, r, o) {
    return r.timestampIsSet ? t : Ve(
      t,
      t.getTime() - Jr(t) - o
    );
  }
}
class Ec extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 40);
    ee(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ki(t);
  }
  set(t, r, o) {
    return [Ve(t, o * 1e3), { timestampIsSet: !0 }];
  }
}
class Ic extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 20);
    ee(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ki(t);
  }
  set(t, r, o) {
    return [Ve(t, o), { timestampIsSet: !0 }];
  }
}
const kc = {
  G: new Qd(),
  y: new Zd(),
  Y: new Jd(),
  R: new ec(),
  u: new tc(),
  Q: new nc(),
  q: new rc(),
  M: new oc(),
  L: new ac(),
  w: new lc(),
  I: new dc(),
  d: new fc(),
  D: new hc(),
  E: new mc(),
  e: new pc(),
  c: new gc(),
  i: new Cc(),
  a: new bc(),
  b: new xc(),
  B: new Sc(),
  h: new yc(),
  H: new wc(),
  K: new Pc(),
  k: new _c(),
  m: new Dc(),
  s: new Tc(),
  S: new Mc(),
  X: new Oc(),
  x: new Rc(),
  t: new Ec(),
  T: new Ic()
}, Fc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ac = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $c = /^'([^]*?)'?$/, Hc = /''/g, zc = /\S/, Bc = /[a-zA-Z]/;
function Lc(e, n, t, r) {
  var C, y, b, D, E, M, L, V;
  const o = Gi(), a = (r == null ? void 0 : r.locale) ?? o.locale ?? fa, i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((y = (C = r == null ? void 0 : r.locale) == null ? void 0 : C.options) == null ? void 0 : y.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((D = (b = o.locale) == null ? void 0 : b.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, l = (r == null ? void 0 : r.weekStartsOn) ?? ((M = (E = r == null ? void 0 : r.locale) == null ? void 0 : E.options) == null ? void 0 : M.weekStartsOn) ?? o.weekStartsOn ?? ((V = (L = o.locale) == null ? void 0 : L.options) == null ? void 0 : V.weekStartsOn) ?? 0;
  if (n === "")
    return e === "" ? ge(t) : Ve(t, NaN);
  const s = {
    firstWeekContainsDate: i,
    weekStartsOn: l,
    locale: a
  }, d = [new Xd()], u = n.match(Ac).map((p) => {
    const T = p[0];
    if (T in qo) {
      const I = qo[T];
      return I(p, a.formatLong);
    }
    return p;
  }).join("").match(Fc), f = [];
  for (let p of u) {
    !(r != null && r.useAdditionalWeekYearTokens) && Yi(p) && Ko(p, n, e), !(r != null && r.useAdditionalDayOfYearTokens) && Ui(p) && Ko(p, n, e);
    const T = p[0], I = kc[T];
    if (I) {
      const { incompatibleTokens: U } = I;
      if (Array.isArray(U)) {
        const z = f.find(
          (S) => U.includes(S.token) || S.token === T
        );
        if (z)
          throw new RangeError(
            `The format string mustn't contain \`${z.fullToken}\` and \`${p}\` at the same time`
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
      if (T.match(Bc))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + T + "`"
        );
      if (p === "''" ? p = "'" : T === "'" && (p = Nc(p)), e.indexOf(p) === 0)
        e = e.slice(p.length);
      else
        return Ve(t, NaN);
    }
  }
  if (e.length > 0 && zc.test(e))
    return Ve(t, NaN);
  const h = d.map((p) => p.priority).sort((p, T) => T - p).filter((p, T, I) => I.indexOf(p) === T).map(
    (p) => d.filter((T) => T.priority === p).sort((T, I) => I.subPriority - T.subPriority)
  ).map((p) => p[0]);
  let g = ge(t);
  if (isNaN(g.getTime()))
    return Ve(t, NaN);
  const m = {};
  for (const p of h) {
    if (!p.validate(g, s))
      return Ve(t, NaN);
    const T = p.set(g, m, s);
    Array.isArray(T) ? (g = T[0], Object.assign(m, T[1])) : g = T;
  }
  return Ve(t, g);
}
function Nc(e) {
  return e.match($c)[1].replace(Hc, "'");
}
function Wc(e) {
  const n = ge(e);
  return n.setMinutes(0, 0, 0), n;
}
function Zi(e, n, t) {
  const r = Xt(e, t), o = Xt(n, t);
  return +r == +o;
}
function Ir(e, n) {
  const t = ge(e), r = ge(n);
  return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth();
}
function Ji(e, n) {
  const t = _r(e), r = _r(n);
  return +t == +r;
}
function ga(e) {
  const n = ge(e);
  return n.setMilliseconds(0), n;
}
function el(e, n) {
  const t = ge(e), r = ge(n);
  return t.getFullYear() === r.getFullYear();
}
function va(e, n) {
  const t = ge(e), r = t.getFullYear(), o = t.getDate(), a = Ve(e, 0);
  a.setFullYear(r, n, 15), a.setHours(0, 0, 0, 0);
  const i = jd(a);
  return t.setMonth(n, Math.min(o, i)), t;
}
function vt(e, n) {
  let t = ge(e);
  return isNaN(+t) ? Ve(e, NaN) : (n.year != null && t.setFullYear(n.year), n.month != null && (t = va(t, n.month)), n.date != null && t.setDate(n.date), n.hours != null && t.setHours(n.hours), n.minutes != null && t.setMinutes(n.minutes), n.seconds != null && t.setSeconds(n.seconds), n.milliseconds != null && t.setMilliseconds(n.milliseconds), t);
}
function Dn(e, n) {
  const t = ge(e);
  return t.setHours(n), t;
}
function Mo(e, n) {
  const t = ge(e);
  return t.setMinutes(n), t;
}
function Vc(e, n) {
  const t = ge(e), r = Math.trunc(t.getMonth() / 3) + 1, o = n - r;
  return va(t, t.getMonth() + o * 3);
}
function Oo(e, n) {
  const t = ge(e);
  return t.setSeconds(n), t;
}
function Xo(e, n) {
  const t = ge(e);
  return isNaN(+t) ? Ve(e, NaN) : (t.setFullYear(n), t);
}
let ro = [];
const tl = /* @__PURE__ */ new WeakMap();
function jc() {
  ro.forEach((e) => e(...tl.get(e))), ro = [];
}
function nl(e, ...n) {
  tl.set(e, n), !ro.includes(e) && ro.push(e) === 1 && requestAnimationFrame(jc);
}
function rl(e, n) {
  let { target: t } = e;
  for (; t; ) {
    if (t.dataset && t.dataset[n] !== void 0)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function ho(e) {
  return e.composedPath()[0] || null;
}
function oo(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function vr(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Xn(e, n) {
  const t = e.trim().split(/\s+/g), r = {
    top: t[0]
  };
  switch (t.length) {
    case 1:
      r.right = t[0], r.bottom = t[0], r.left = t[0];
      break;
    case 2:
      r.right = t[1], r.left = t[1], r.bottom = t[0];
      break;
    case 3:
      r.right = t[1], r.bottom = t[2], r.left = t[1];
      break;
    case 4:
      r.right = t[1], r.bottom = t[2], r.left = t[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return r;
}
const Wa = {
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
}, dr = "^\\s*", cr = "\\s*$", On = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Rn = "([0-9A-Fa-f])", En = "([0-9A-Fa-f]{2})", Uc = new RegExp(`${dr}rgb\\s*\\(${On},${On},${On}\\)${cr}`), Yc = new RegExp(`${dr}rgba\\s*\\(${On},${On},${On},${On}\\)${cr}`), Gc = new RegExp(`${dr}#${Rn}${Rn}${Rn}${cr}`), qc = new RegExp(`${dr}#${En}${En}${En}${cr}`), Kc = new RegExp(`${dr}#${Rn}${Rn}${Rn}${Rn}${cr}`), Xc = new RegExp(`${dr}#${En}${En}${En}${En}${cr}`);
function It(e) {
  return parseInt(e, 16);
}
function cn(e) {
  try {
    let n;
    if (n = qc.exec(e))
      return [It(n[1]), It(n[2]), It(n[3]), 1];
    if (n = Uc.exec(e))
      return [yt(n[1]), yt(n[5]), yt(n[9]), 1];
    if (n = Yc.exec(e))
      return [
        yt(n[1]),
        yt(n[5]),
        yt(n[9]),
        yr(n[13])
      ];
    if (n = Gc.exec(e))
      return [
        It(n[1] + n[1]),
        It(n[2] + n[2]),
        It(n[3] + n[3]),
        1
      ];
    if (n = Xc.exec(e))
      return [
        It(n[1]),
        It(n[2]),
        It(n[3]),
        yr(It(n[4]) / 255)
      ];
    if (n = Kc.exec(e))
      return [
        It(n[1] + n[1]),
        It(n[2] + n[2]),
        It(n[3] + n[3]),
        yr(It(n[4] + n[4]) / 255)
      ];
    if (e in Wa)
      return cn(Wa[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function Qc(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Qo(e, n, t, r) {
  return `rgba(${yt(e)}, ${yt(n)}, ${yt(t)}, ${Qc(r)})`;
}
function Ro(e, n, t, r, o) {
  return yt((e * n * (1 - r) + t * r) / o);
}
function ne(e, n) {
  Array.isArray(e) || (e = cn(e)), Array.isArray(n) || (n = cn(n));
  const t = e[3], r = n[3], o = yr(t + r - t * r);
  return Qo(Ro(e[0], t, n[0], r, o), Ro(e[1], t, n[1], r, o), Ro(e[2], t, n[2], r, o), o);
}
function Q(e, n) {
  const [t, r, o, a = 1] = Array.isArray(e) ? e : cn(e);
  return n.alpha ? Qo(t, r, o, n.alpha) : Qo(t, r, o, a);
}
function lt(e, n) {
  const [t, r, o, a = 1] = Array.isArray(e) ? e : cn(e), { lightness: i = 1, alpha: l = 1 } = n;
  return Zc([t * i, r * i, o * i, a * l]);
}
function yr(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function yt(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function Zc(e) {
  const [n, t, r] = e;
  return 3 in e ? `rgba(${yt(n)}, ${yt(t)}, ${yt(r)}, ${yr(e[3])})` : `rgba(${yt(n)}, ${yt(t)}, ${yt(r)}, 1)`;
}
function Kr(e) {
  return e.composedPath()[0];
}
const Jc = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function eu(e, n, t) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      n.contains(Kr(o)) || t(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (i) => {
      r = !n.contains(Kr(i));
    }, a = (i) => {
      r && (n.contains(Kr(i)) || t(i));
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
function ol(e, n, t) {
  const r = Jc[e];
  let o = r.get(n);
  o === void 0 && r.set(n, o = /* @__PURE__ */ new WeakMap());
  let a = o.get(t);
  return a === void 0 && o.set(t, a = eu(e, n, t)), a;
}
function tu(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = ol(e, n, t);
    return Object.keys(o).forEach((a) => {
      Ot(a, document, o[a], r);
    }), !0;
  }
  return !1;
}
function nu(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = ol(e, n, t);
    return Object.keys(o).forEach((a) => {
      mt(a, document, o[a], r);
    }), !0;
  }
  return !1;
}
function ru() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  function t() {
    e.set(this, !0);
  }
  function r() {
    e.set(this, !0), n.set(this, !0);
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
  function h() {
    const p = function(T) {
      const { type: I, eventPhase: U, bubbles: Y } = T, z = Kr(T);
      if (U === 2)
        return;
      const S = U === 1 ? "capture" : "bubble";
      let A = z;
      const Z = [];
      for (; A === null && (A = window), Z.push(A), A !== window; )
        A = A.parentNode || null;
      const re = u.capture[I], K = u.bubble[I];
      if (o(T, "stopPropagation", t), o(T, "stopImmediatePropagation", r), d(T, s), S === "capture") {
        if (re === void 0)
          return;
        for (let me = Z.length - 1; me >= 0 && !e.has(T); --me) {
          const ve = Z[me], de = re.get(ve);
          if (de !== void 0) {
            i.set(T, ve);
            for (const Te of de) {
              if (n.has(T))
                break;
              Te(T);
            }
          }
          if (me === 0 && !Y && K !== void 0) {
            const Te = K.get(ve);
            if (Te !== void 0)
              for (const Fe of Te) {
                if (n.has(T))
                  break;
                Fe(T);
              }
          }
        }
      } else if (S === "bubble") {
        if (K === void 0)
          return;
        for (let me = 0; me < Z.length && !e.has(T); ++me) {
          const ve = Z[me], de = K.get(ve);
          if (de !== void 0) {
            i.set(T, ve);
            for (const Te of de) {
              if (n.has(T))
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
      Y !== void 0 && Y.forEach((z) => z(T));
    };
    return p.displayName = "evtdUnifiedWindowEventHandler", p;
  }
  const m = h(), C = g();
  function y(p, T) {
    const I = u[p];
    return I[T] === void 0 && (I[T] = /* @__PURE__ */ new Map(), window.addEventListener(T, m, p === "capture")), I[T];
  }
  function b(p) {
    return f[p] === void 0 && (f[p] = /* @__PURE__ */ new Set(), window.addEventListener(p, C)), f[p];
  }
  function D(p, T) {
    let I = p.get(T);
    return I === void 0 && p.set(T, I = /* @__PURE__ */ new Set()), I;
  }
  function E(p, T, I, U) {
    const Y = u[T][I];
    if (Y !== void 0) {
      const z = Y.get(p);
      if (z !== void 0 && z.has(U))
        return !0;
    }
    return !1;
  }
  function M(p, T) {
    const I = f[p];
    return !!(I !== void 0 && I.has(T));
  }
  function L(p, T, I, U) {
    let Y;
    if (typeof U == "object" && U.once === !0 ? Y = (re) => {
      V(p, T, Y, U), I(re);
    } : Y = I, tu(p, T, Y, U))
      return;
    const S = U === !0 || typeof U == "object" && U.capture === !0 ? "capture" : "bubble", A = y(S, p), Z = D(A, T);
    if (Z.has(Y) || Z.add(Y), T === window) {
      const re = b(p);
      re.has(Y) || re.add(Y);
    }
  }
  function V(p, T, I, U) {
    if (nu(p, T, I, U))
      return;
    const z = U === !0 || typeof U == "object" && U.capture === !0, S = z ? "capture" : "bubble", A = y(S, p), Z = D(A, T);
    if (T === window && !E(T, z ? "bubble" : "capture", p, I) && M(p, I)) {
      const K = f[p];
      K.delete(I), K.size === 0 && (window.removeEventListener(p, C), f[p] = void 0);
    }
    Z.has(I) && Z.delete(I), Z.size === 0 && A.delete(T), A.size === 0 && (window.removeEventListener(p, m, S === "capture"), u[S][p] = void 0);
  }
  return {
    on: L,
    off: V
  };
}
const { on: Ot, off: mt } = ru(), Un = "@@coContext", Ca = {
  mounted(e, { value: n, modifiers: t }) {
    e[Un] = {
      handler: void 0
    }, typeof n == "function" && (e[Un].handler = n, Ot("clickoutside", e, n, {
      capture: t.capture
    }));
  },
  updated(e, { value: n, modifiers: t }) {
    const r = e[Un];
    typeof n == "function" ? r.handler ? r.handler !== n && (mt("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = n, Ot("clickoutside", e, n, {
      capture: t.capture
    })) : (e[Un].handler = n, Ot("clickoutside", e, n, {
      capture: t.capture
    })) : r.handler && (mt("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: t } = e[Un];
    t && mt("clickoutside", e, t, {
      capture: n.capture
    }), e[Un].handler = void 0;
  }
};
function ou(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class au {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(n, t) {
    const { elementZIndex: r } = this;
    if (t !== void 0) {
      n.style.zIndex = `${t}`, r.delete(n);
      return;
    }
    const { nextZIndex: o } = this;
    r.has(n) && r.get(n) + 1 === this.nextZIndex || (n.style.zIndex = `${o}`, r.set(n, o), this.nextZIndex = o + 1, this.squashState());
  }
  unregister(n, t) {
    const { elementZIndex: r } = this;
    r.has(n) ? r.delete(n) : t === void 0 && ou("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: n } = this;
    n || (this.nextZIndex = 2e3), this.nextZIndex - n > 2500 && this.rearrange();
  }
  rearrange() {
    const n = Array.from(this.elementZIndex.entries());
    n.sort((t, r) => t[1] - r[1]), this.nextZIndex = 2e3, n.forEach((t) => {
      const r = t[0], o = this.nextZIndex++;
      `${o}` !== r.style.zIndex && (r.style.zIndex = `${o}`);
    });
  }
}
const Eo = new au(), Yn = "@@ziContext", iu = {
  mounted(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t;
    e[Yn] = {
      enabled: !!o,
      initialized: !1
    }, o && (Eo.ensureZIndex(e, r), e[Yn].initialized = !0);
  },
  updated(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t, a = e[Yn].enabled;
    o && !a && (Eo.ensureZIndex(e, r), e[Yn].initialized = !0), e[Yn].enabled = !!o;
  },
  unmounted(e, n) {
    if (!e[Yn].initialized)
      return;
    const { value: t = {} } = n, { zIndex: r } = t;
    Eo.unregister(e, r);
  }
};
function lu(e) {
  const n = F(!!e.value);
  if (n.value)
    return Zr(n);
  const t = ft(e, (r) => {
    r && (n.value = !0, t());
  });
  return Zr(n);
}
function Yt(e) {
  const n = P(e), t = F(n.value);
  return ft(n, (r) => {
    t.value = r;
  }), typeof e == "function" ? t : {
    __v_isRef: !0,
    get value() {
      return t.value;
    },
    set value(r) {
      e.set(r);
    }
  };
}
function su() {
  return co() !== null;
}
const du = typeof window < "u";
let Zn, wr;
const cu = () => {
  var e, n;
  Zn = du ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, wr = !1, Zn !== void 0 ? Zn.then(() => {
    wr = !0;
  }) : wr = !0;
};
cu();
function uu(e) {
  if (wr)
    return;
  let n = !1;
  on(() => {
    wr || Zn == null || Zn.then(() => {
      n || e();
    });
  }), fn(() => {
    n = !0;
  });
}
function ao(e, n) {
  return ft(e, (t) => {
    t !== void 0 && (n.value = t);
  }), P(() => e.value === void 0 ? n.value : e.value);
}
function mo() {
  const e = F(!1);
  return on(() => {
    e.value = !0;
  }), Zr(e);
}
const fu = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function hu() {
  return fu;
}
function al(e = {}, n) {
  const t = Es({
    ctrl: !1,
    command: !1,
    win: !1,
    shift: !1,
    tab: !1
  }), { keydown: r, keyup: o } = e, a = (s) => {
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
    r !== void 0 && Object.keys(r).forEach((d) => {
      if (d !== s.key)
        return;
      const u = r[d];
      if (typeof u == "function")
        u(s);
      else {
        const { stop: f = !1, prevent: h = !1 } = u;
        f && s.stopPropagation(), h && s.preventDefault(), u.handler(s);
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
        const { stop: f = !1, prevent: h = !1 } = u;
        f && s.stopPropagation(), h && s.preventDefault(), u.handler(s);
      }
    });
  }, l = () => {
    Ot("keydown", document, a), Ot("keyup", document, i);
  };
  return su() ? (uo(l), fn(() => {
    mt("keydown", document, a), mt("keyup", document, i);
  })) : l(), Zr(t);
}
function Zo(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return r();
}
function Jo(e, n = !0, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(Is(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Jo(r, n, t);
        return;
      }
      if (r.type === fo) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && Jo(r.children, n, t);
      } else r.type !== Fi && t.push(r);
    }
  }), t;
}
function Va(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const o = Jo(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`);
}
let mn = null;
function il() {
  if (mn === null && (mn = document.getElementById("v-binder-view-measurer"), mn === null)) {
    mn = document.createElement("div"), mn.id = "v-binder-view-measurer";
    const { style: e } = mn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(mn);
  }
  return mn.getBoundingClientRect();
}
function mu(e, n) {
  const t = il();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: t.width - e,
    bottom: t.height - n
  };
}
function Io(e) {
  const n = e.getBoundingClientRect(), t = il();
  return {
    left: n.left - t.left,
    top: n.top - t.top,
    bottom: t.height + t.top - n.bottom,
    right: t.width + t.left - n.right,
    width: n.width,
    height: n.height
  };
}
function pu(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function ll(e) {
  if (e === null)
    return null;
  const n = pu(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: t, overflowX: r, overflowY: o } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(t + o + r))
      return n;
  }
  return ll(n);
}
const ba = Ce({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    var n;
    zn("VBinder", (n = co()) === null || n === void 0 ? void 0 : n.proxy);
    const t = Xe("VBinder", null), r = F(null), o = (b) => {
      r.value = b, t && e.syncTargetWithParent && t.setTargetRef(b);
    };
    let a = [];
    const i = () => {
      let b = r.value;
      for (; b = ll(b), b !== null; )
        a.push(b);
      for (const D of a)
        Ot("scroll", D, f, !0);
    }, l = () => {
      for (const b of a)
        mt("scroll", b, f, !0);
      a = [];
    }, s = /* @__PURE__ */ new Set(), d = (b) => {
      s.size === 0 && i(), s.has(b) || s.add(b);
    }, u = (b) => {
      s.has(b) && s.delete(b), s.size === 0 && l();
    }, f = () => {
      nl(h);
    }, h = () => {
      s.forEach((b) => b());
    }, g = /* @__PURE__ */ new Set(), m = (b) => {
      g.size === 0 && Ot("resize", window, y), g.has(b) || g.add(b);
    }, C = (b) => {
      g.has(b) && g.delete(b), g.size === 0 && mt("resize", window, y);
    }, y = () => {
      g.forEach((b) => b());
    };
    return fn(() => {
      mt("resize", window, y), l();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: d,
      removeScrollListener: u,
      addResizeListener: m,
      removeResizeListener: C
    };
  },
  render() {
    return Zo("binder", this.$slots);
  }
}), xa = Ce({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = Xe("VBinder");
    return {
      syncTarget: n,
      setTargetDirective: {
        mounted: e,
        updated: e
      }
    };
  },
  render() {
    const { syncTarget: e, setTargetDirective: n } = this;
    return e ? Rr(Va("follower", this.$slots), [
      [n]
    ]) : Va("follower", this.$slots);
  }
}), gu = "@css-render/vue3-ssr";
function vu(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function Cu(e, n, t) {
  const { styles: r, ids: o } = t;
  o.has(e) || r !== null && (o.add(e), r.push(vu(e, n)));
}
const bu = typeof document < "u";
function ur() {
  if (bu)
    return;
  const e = Xe(gu, null);
  if (e !== null)
    return {
      adapter: (n, t) => Cu(n, t, e),
      context: e
    };
}
function ja(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
function xu(e) {
  let n = 0;
  for (let t = 0; t < e.length; ++t)
    e[t] === "&" && ++n;
  return n;
}
const sl = /\s*,(?![^(]*\))\s*/g, Su = /\s+/g;
function yu(e, n) {
  const t = [];
  return n.split(sl).forEach((r) => {
    let o = xu(r);
    if (o) {
      if (o === 1) {
        e.forEach((i) => {
          t.push(r.replace("&", i));
        });
        return;
      }
    } else {
      e.forEach((i) => {
        t.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (i && i + " ") + r
        );
      });
      return;
    }
    let a = [
      r
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
function wu(e, n) {
  const t = [];
  return n.split(sl).forEach((r) => {
    e.forEach((o) => {
      t.push((o && o + " ") + r);
    });
  }), t;
}
function Pu(e) {
  let n = [""];
  return e.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? n = yu(n, t) : n = wu(n, t));
  }), n.join(", ").replace(Su, " ");
}
function Ua(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function po(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function _u(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function zr(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Du = /[A-Z]/g;
function dl(e) {
  return e.replace(Du, (n) => "-" + n.toLowerCase());
}
function Tu(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => n + `  ${dl(t[0])}: ${t[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function Mu(e, n, t) {
  return typeof e == "function" ? e({
    context: n.context,
    props: t
  }) : e;
}
function Ya(e, n, t, r) {
  if (!n)
    return "";
  const o = Mu(n, t, r);
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
    l = dl(l), s != null && i.push(`  ${l}${Tu(s)}`);
  }), e && i.push("}"), i.join(`
`);
}
function ea(e, n, t) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      ea(r, n, t);
    else if (typeof r == "function") {
      const o = r(n);
      Array.isArray(o) ? ea(o, n, t) : o && t(o);
    } else r && t(r);
  });
}
function cl(e, n, t, r, o) {
  const a = e.$;
  let i = "";
  if (!a || typeof a == "string")
    zr(a) ? i = a : n.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: r.context,
      props: o
    });
    zr(d) ? i = d : n.push(d);
  } else if (a.before && a.before(r.context), !a.$ || typeof a.$ == "string")
    zr(a.$) ? i = a.$ : n.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: r.context,
      props: o
    });
    zr(d) ? i = d : n.push(d);
  }
  const l = Pu(n), s = Ya(l, e.props, r, o);
  i ? t.push(`${i} {`) : s.length && t.push(s), e.children && ea(e.children, {
    context: r.context,
    props: o
  }, (d) => {
    if (typeof d == "string") {
      const u = Ya(l, { raw: d }, r, o);
      t.push(u);
    } else
      cl(d, n, t, r, o);
  }), n.pop(), i && t.push("}"), a && a.after && a.after(r.context);
}
function Ou(e, n, t) {
  const r = [];
  return cl(e, [], r, n, t), r.join(`

`);
}
function Dr(e) {
  for (var n = 0, t, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, n = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      n ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(r) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Ru(e, n, t, r) {
  const { els: o } = n;
  if (t === void 0)
    o.forEach(Ua), n.els = [];
  else {
    const a = po(t, r);
    a && o.includes(a) && (Ua(a), n.els = o.filter((i) => i !== a));
  }
}
function Ga(e, n) {
  e.push(n);
}
function Eu(e, n, t, r, o, a, i, l, s) {
  let d;
  if (t === void 0 && (d = n.render(r), t = Dr(d)), s) {
    s.adapter(t, d ?? n.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const u = po(t, l);
  if (u !== null && !a)
    return u;
  const f = u ?? _u(t);
  if (d === void 0 && (d = n.render(r)), f.textContent = d, u !== null)
    return u;
  if (i) {
    const h = l.querySelector(`meta[name="${i}"]`);
    if (h)
      return l.insertBefore(f, h), Ga(n.els, f), f;
  }
  return o ? l.insertBefore(f, l.querySelector("style, link")) : l.appendChild(f), Ga(n.els, f), f;
}
function Iu(e) {
  return Ou(this, this.instance, e);
}
function ku(e = {}) {
  const { id: n, ssr: t, props: r, head: o = !1, force: a = !1, anchorMetaName: i, parent: l } = e;
  return Eu(this.instance, this, n, r, o, a, i, l, t);
}
function Fu(e = {}) {
  const { id: n, parent: t } = e;
  Ru(this.instance, this, n, t);
}
const Br = function(e, n, t, r) {
  return {
    instance: e,
    $: n,
    props: t,
    children: r,
    els: [],
    render: Iu,
    mount: ku,
    unmount: Fu
  };
}, Au = function(e, n, t, r) {
  return Array.isArray(n) ? Br(e, { $: null }, null, n) : Array.isArray(t) ? Br(e, n, null, t) : Array.isArray(r) ? Br(e, n, t, r) : Br(e, n, t, null);
};
function ul(e = {}) {
  const n = {
    c: (...t) => Au(n, ...t),
    use: (t, ...r) => t.install(n, ...r),
    find: po,
    context: {},
    config: e
  };
  return n;
}
function $u(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: t } } = n;
    return t.has(e);
  }
  return po(e) !== null;
}
const { c: In } = ul(), fl = "vueuc-style";
function qa(e) {
  return e & -e;
}
class hl {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(n, t) {
    this.l = n, this.min = t;
    const r = new Array(n + 1);
    for (let o = 0; o < n + 1; ++o)
      r[o] = 0;
    this.ft = r;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(n, t) {
    if (t === 0)
      return;
    const { l: r, ft: o } = this;
    for (n += 1; n <= r; )
      o[n] += t, n += qa(n);
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(n) {
    return this.sum(n + 1) - this.sum(n);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(n) {
    if (n === void 0 && (n = this.l), n <= 0)
      return 0;
    const { ft: t, min: r, l: o } = this;
    if (n > o)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let a = n * r;
    for (; n > 0; )
      a += t[n], n -= qa(n);
    return a;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(n) {
    let t = 0, r = this.l;
    for (; r > t; ) {
      const o = Math.floor((t + r) / 2), a = this.sum(o);
      if (a > n) {
        r = o;
        continue;
      } else if (a < n) {
        if (t === o)
          return this.sum(t + 1) <= n ? t + 1 : o;
        t = o;
      } else
        return o;
    }
    return t;
  }
}
const Hu = Ce({
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
      showTeleport: lu(Ye(e, "show")),
      mergedTo: P(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Zo("lazy-teleport", this.$slots) : c(ks, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Zo("lazy-teleport", this.$slots)) : null;
  }
}), Lr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ka = {
  start: "end",
  center: "center",
  end: "start"
}, ko = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, zu = {
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
}, Bu = {
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
}, Lu = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Xa = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Qa = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Nu(e, n, t, r, o, a) {
  if (!o || a)
    return { placement: e, top: 0, left: 0 };
  const [i, l] = e.split("-");
  let s = l ?? "center", d = {
    top: 0,
    left: 0
  };
  const u = (g, m, C) => {
    let y = 0, b = 0;
    const D = t[g] - n[m] - n[g];
    return D > 0 && r && (C ? b = Xa[m] ? D : -D : y = Xa[m] ? D : -D), {
      left: y,
      top: b
    };
  }, f = i === "left" || i === "right";
  if (s !== "center") {
    const g = Lu[e], m = Lr[g], C = ko[g];
    if (t[C] > n[C]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[g] + n[C] < t[C]
      ) {
        const y = (t[C] - n[C]) / 2;
        n[g] < y || n[m] < y ? n[g] < n[m] ? (s = Ka[l], d = u(C, m, f)) : d = u(C, g, f) : s = "center";
      }
    } else t[C] < n[C] && n[m] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[g] > n[m] && (s = Ka[l]);
  } else {
    const g = i === "bottom" || i === "top" ? "left" : "top", m = Lr[g], C = ko[g], y = (t[C] - n[C]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[g] < y || n[m] < y) && (n[g] > n[m] ? (s = Qa[g], d = u(C, g, f)) : (s = Qa[m], d = u(C, m, f)));
  }
  let h = i;
  return (
    // space is not enough
    n[i] < t[ko[i]] && // opposite position's space is larger
    n[i] < n[Lr[i]] && (h = Lr[i]), {
      placement: s !== "center" ? `${h}-${s}` : h,
      left: d.left,
      top: d.top
    }
  );
}
function Wu(e, n) {
  return n ? Bu[e] : zu[e];
}
function Vu(e, n, t, r, o, a) {
  if (a)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left + t.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(t.top - n.top + t.height / 2)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(t.top - n.top + t.height / 2)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left + t.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + t.width / 2 + o)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(t.top - n.top + t.height / 2 + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(t.top - n.top + t.height / 2 + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + t.width / 2 + o)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const ju = In([
  In(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  In(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    In("> *", {
      pointerEvents: "all"
    })
  ])
]), Sa = Ce({
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
    const n = Xe("VBinder"), t = Yt(() => e.enabled !== void 0 ? e.enabled : e.show), r = F(null), o = F(null), a = () => {
      const { syncTrigger: h } = e;
      h.includes("scroll") && n.addScrollListener(s), h.includes("resize") && n.addResizeListener(s);
    }, i = () => {
      n.removeScrollListener(s), n.removeResizeListener(s);
    };
    on(() => {
      t.value && (s(), a());
    });
    const l = ur();
    ju.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: fl,
      ssr: l
    }), fn(() => {
      i();
    }), uu(() => {
      t.value && s();
    });
    const s = () => {
      if (!t.value)
        return;
      const h = r.value;
      if (h === null)
        return;
      const g = n.targetRef, { x: m, y: C, overlap: y } = e, b = m !== void 0 && C !== void 0 ? mu(m, C) : Io(g);
      h.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(b.height)}px`);
      const { width: D, minWidth: E, placement: M, internalShift: L, flip: V } = e;
      h.setAttribute("v-placement", M), y ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
      const { style: p } = h;
      D === "target" ? p.width = `${b.width}px` : D !== void 0 ? p.width = D : p.width = "", E === "target" ? p.minWidth = `${b.width}px` : E !== void 0 ? p.minWidth = E : p.minWidth = "";
      const T = Io(h), I = Io(o.value), { left: U, top: Y, placement: z } = Nu(M, b, T, L, V, y), S = Wu(z, y), { left: A, top: Z, transform: re } = Vu(z, I, b, Y, U, y);
      h.setAttribute("v-placement", z), h.style.setProperty("--v-offset-left", `${Math.round(U)}px`), h.style.setProperty("--v-offset-top", `${Math.round(Y)}px`), h.style.transform = `translateX(${A}) translateY(${Z}) ${re}`, h.style.setProperty("--v-transform-origin", S), h.style.transformOrigin = S;
    };
    ft(t, (h) => {
      h ? (a(), d()) : i();
    });
    const d = () => {
      Cn().then(s).catch((h) => console.error(h));
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
    ].forEach((h) => {
      ft(Ye(e, h), s);
    }), ["teleportDisabled"].forEach((h) => {
      ft(Ye(e, h), d);
    }), ft(Ye(e, "syncTrigger"), (h) => {
      h.includes("resize") ? n.addResizeListener(s) : n.removeResizeListener(s), h.includes("scroll") ? n.addScrollListener(s) : n.removeScrollListener(s);
    });
    const u = mo(), f = Yt(() => {
      const { to: h } = e;
      if (h !== void 0)
        return h;
      u.value;
    });
    return {
      VBinder: n,
      mergedEnabled: t,
      offsetContainerRef: o,
      followerRef: r,
      mergedTo: f,
      syncPosition: s
    };
  },
  render() {
    return c(Hu, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, n;
        const t = c("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          c("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e))
        ]);
        return this.zindexable ? Rr(t, [
          [
            iu,
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
var kn = [], Uu = function() {
  return kn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Yu = function() {
  return kn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Za = "ResizeObserver loop completed with undelivered notifications.", Gu = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Za
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Za), window.dispatchEvent(e);
}, Tr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Tr || (Tr = {}));
var Fn = function(e) {
  return Object.freeze(e);
}, qu = /* @__PURE__ */ function() {
  function e(n, t) {
    this.inlineSize = n, this.blockSize = t, Fn(this);
  }
  return e;
}(), ml = function() {
  function e(n, t, r, o) {
    return this.x = n, this.y = t, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Fn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, t = n.x, r = n.y, o = n.top, a = n.right, i = n.bottom, l = n.left, s = n.width, d = n.height;
    return { x: t, y: r, top: o, right: a, bottom: i, left: l, width: s, height: d };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), ya = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, pl = function(e) {
  if (ya(e)) {
    var n = e.getBBox(), t = n.width, r = n.height;
    return !t && !r;
  }
  var o = e, a = o.offsetWidth, i = o.offsetHeight;
  return !(a || i || e.getClientRects().length);
}, Ja = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var t = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(t && e instanceof t.Element);
}, Ku = function(e) {
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
}, Pr = typeof window < "u" ? window : {}, Nr = /* @__PURE__ */ new WeakMap(), ei = /auto|scroll/, Xu = /^tb|vertical/, Qu = /msie|trident/i.test(Pr.navigator && Pr.navigator.userAgent), Jt = function(e) {
  return parseFloat(e || "0");
}, Jn = function(e, n, t) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = !1), new qu((t ? n : e) || 0, (t ? e : n) || 0);
}, ti = Fn({
  devicePixelContentBoxSize: Jn(),
  borderBoxSize: Jn(),
  contentBoxSize: Jn(),
  contentRect: new ml(0, 0, 0, 0)
}), gl = function(e, n) {
  if (n === void 0 && (n = !1), Nr.has(e) && !n)
    return Nr.get(e);
  if (pl(e))
    return Nr.set(e, ti), ti;
  var t = getComputedStyle(e), r = ya(e) && e.ownerSVGElement && e.getBBox(), o = !Qu && t.boxSizing === "border-box", a = Xu.test(t.writingMode || ""), i = !r && ei.test(t.overflowY || ""), l = !r && ei.test(t.overflowX || ""), s = r ? 0 : Jt(t.paddingTop), d = r ? 0 : Jt(t.paddingRight), u = r ? 0 : Jt(t.paddingBottom), f = r ? 0 : Jt(t.paddingLeft), h = r ? 0 : Jt(t.borderTopWidth), g = r ? 0 : Jt(t.borderRightWidth), m = r ? 0 : Jt(t.borderBottomWidth), C = r ? 0 : Jt(t.borderLeftWidth), y = f + d, b = s + u, D = C + g, E = h + m, M = l ? e.offsetHeight - E - e.clientHeight : 0, L = i ? e.offsetWidth - D - e.clientWidth : 0, V = o ? y + D : 0, p = o ? b + E : 0, T = r ? r.width : Jt(t.width) - V - L, I = r ? r.height : Jt(t.height) - p - M, U = T + y + L + D, Y = I + b + M + E, z = Fn({
    devicePixelContentBoxSize: Jn(Math.round(T * devicePixelRatio), Math.round(I * devicePixelRatio), a),
    borderBoxSize: Jn(U, Y, a),
    contentBoxSize: Jn(T, I, a),
    contentRect: new ml(f, s, T, I)
  });
  return Nr.set(e, z), z;
}, vl = function(e, n, t) {
  var r = gl(e, t), o = r.borderBoxSize, a = r.contentBoxSize, i = r.devicePixelContentBoxSize;
  switch (n) {
    case Tr.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case Tr.BORDER_BOX:
      return o;
    default:
      return a;
  }
}, Zu = /* @__PURE__ */ function() {
  function e(n) {
    var t = gl(n);
    this.target = n, this.contentRect = t.contentRect, this.borderBoxSize = Fn([t.borderBoxSize]), this.contentBoxSize = Fn([t.contentBoxSize]), this.devicePixelContentBoxSize = Fn([t.devicePixelContentBoxSize]);
  }
  return e;
}(), Cl = function(e) {
  if (pl(e))
    return 1 / 0;
  for (var n = 0, t = e.parentNode; t; )
    n += 1, t = t.parentNode;
  return n;
}, Ju = function() {
  var e = 1 / 0, n = [];
  kn.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var l = [];
      i.activeTargets.forEach(function(d) {
        var u = new Zu(d.target), f = Cl(d.target);
        l.push(u), d.lastReportedSize = vl(d.target, d.observedBox), f < e && (e = f);
      }), n.push(function() {
        i.callback.call(i.observer, l, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var t = 0, r = n; t < r.length; t++) {
    var o = r[t];
    o();
  }
  return e;
}, ni = function(e) {
  kn.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(o) {
      o.isActive() && (Cl(o.target) > e ? t.activeTargets.push(o) : t.skippedTargets.push(o));
    });
  });
}, ef = function() {
  var e = 0;
  for (ni(e); Uu(); )
    e = Ju(), ni(e);
  return Yu() && Gu(), e > 0;
}, Fo, bl = [], tf = function() {
  return bl.splice(0).forEach(function(e) {
    return e();
  });
}, nf = function(e) {
  if (!Fo) {
    var n = 0, t = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return tf();
    }).observe(t, r), Fo = function() {
      t.textContent = "".concat(n ? n-- : n++);
    };
  }
  bl.push(e), Fo();
}, rf = function(e) {
  nf(function() {
    requestAnimationFrame(e);
  });
}, Xr = 0, of = function() {
  return !!Xr;
}, af = 250, lf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ri = [
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
], oi = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Ao = !1, sf = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var t = this;
    if (n === void 0 && (n = af), !Ao) {
      Ao = !0;
      var r = oi(n);
      rf(function() {
        var o = !1;
        try {
          o = ef();
        } finally {
          if (Ao = !1, n = r - oi(), !of())
            return;
          o ? t.run(1e3) : n > 0 ? t.run(n) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, t = function() {
      return n.observer && n.observer.observe(document.body, lf);
    };
    document.body ? t() : Pr.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ri.forEach(function(t) {
      return Pr.addEventListener(t, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), ri.forEach(function(t) {
      return Pr.removeEventListener(t, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ta = new sf(), ai = function(e) {
  !Xr && e > 0 && ta.start(), Xr += e, !Xr && ta.stop();
}, df = function(e) {
  return !ya(e) && !Ku(e) && getComputedStyle(e).display === "inline";
}, cf = function() {
  function e(n, t) {
    this.target = n, this.observedBox = t || Tr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = vl(this.target, this.observedBox, !0);
    return df(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), uf = /* @__PURE__ */ function() {
  function e(n, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = t;
  }
  return e;
}(), Wr = /* @__PURE__ */ new WeakMap(), ii = function(e, n) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === n)
      return t;
  return -1;
}, Vr = function() {
  function e() {
  }
  return e.connect = function(n, t) {
    var r = new uf(n, t);
    Wr.set(n, r);
  }, e.observe = function(n, t, r) {
    var o = Wr.get(n), a = o.observationTargets.length === 0;
    ii(o.observationTargets, t) < 0 && (a && kn.push(o), o.observationTargets.push(new cf(t, r && r.box)), ai(1), ta.schedule());
  }, e.unobserve = function(n, t) {
    var r = Wr.get(n), o = ii(r.observationTargets, t), a = r.observationTargets.length === 1;
    o >= 0 && (a && kn.splice(kn.indexOf(r), 1), r.observationTargets.splice(o, 1), ai(-1));
  }, e.disconnect = function(n) {
    var t = this, r = Wr.get(n);
    r.observationTargets.slice().forEach(function(o) {
      return t.unobserve(n, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), ff = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Vr.connect(this, n);
  }
  return e.prototype.observe = function(n, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ja(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Vr.observe(this, n, t);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ja(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Vr.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    Vr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class hf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || ff)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(n) {
    for (const t of n) {
      const r = this.elHandlersMap.get(t.target);
      r !== void 0 && r(t);
    }
  }
  registerHandler(n, t) {
    this.elHandlersMap.set(n, t), this.observer.observe(n);
  }
  unregisterHandler(n) {
    this.elHandlersMap.has(n) && (this.elHandlersMap.delete(n), this.observer.unobserve(n));
  }
}
const li = new hf(), Mr = Ce({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const t = co().proxy;
    function r(o) {
      const { onResize: a } = e;
      a !== void 0 && a(o);
    }
    on(() => {
      const o = t.$el;
      if (o === void 0) {
        ja("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        ja("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (li.registerHandler(o.nextElementSibling, r), n = !0);
    }), fn(() => {
      n && li.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return Ai(this.$slots, "default");
  }
});
let jr;
function mf() {
  return typeof document > "u" ? !1 : (jr === void 0 && ("matchMedia" in window ? jr = window.matchMedia("(pointer:coarse)").matches : jr = !1), jr);
}
let $o;
function si() {
  return typeof document > "u" ? 1 : ($o === void 0 && ($o = "chrome" in window ? window.devicePixelRatio : 1), $o);
}
const xl = "VVirtualListXScroll";
function pf({ columnsRef: e, renderColRef: n, renderItemWithColsRef: t }) {
  const r = F(0), o = F(0), a = P(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const u = new hl(d.length, 0);
    return d.forEach((f, h) => {
      u.add(h, f.width);
    }), u;
  }), i = Yt(() => {
    const d = a.value;
    return d !== null ? Math.max(d.getBound(o.value) - 1, 0) : 0;
  }), l = (d) => {
    const u = a.value;
    return u !== null ? u.sum(d) : 0;
  }, s = Yt(() => {
    const d = a.value;
    return d !== null ? Math.min(d.getBound(o.value + r.value) + 1, e.value.length - 1) : 0;
  });
  return zn(xl, {
    startIndexRef: i,
    endIndexRef: s,
    columnsRef: e,
    renderColRef: n,
    renderItemWithColsRef: t,
    getLeft: l
  }), {
    listWidthRef: r,
    scrollLeftRef: o
  };
}
const di = Ce({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: !0 },
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const { startIndexRef: e, endIndexRef: n, columnsRef: t, getLeft: r, renderColRef: o, renderItemWithColsRef: a } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Xe(xl)
    );
    return {
      startIndex: e,
      endIndex: n,
      columns: t,
      renderCol: o,
      renderItemWithCols: a,
      getLeft: r
    };
  },
  render() {
    const { startIndex: e, endIndex: n, columns: t, renderCol: r, renderItemWithCols: o, getLeft: a, item: i } = this;
    if (o != null)
      return o({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: n,
        allColumns: t,
        item: i,
        getLeft: a
      });
    if (r != null) {
      const l = [];
      for (let s = e; s <= n; ++s) {
        const d = t[s];
        l.push(r({ column: d, left: a(s), item: i }));
      }
      return l;
    }
    return null;
  }
}), gf = In(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  In("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    In("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), na = Ce({
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
    const n = ur();
    gf.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: fl,
      ssr: n
    }), on(() => {
      const { defaultScrollIndex: S, defaultScrollKey: A } = e;
      S != null ? y({ index: S }) : A != null && y({ key: A });
    });
    let t = !1, r = !1;
    $i(() => {
      if (t = !1, !r) {
        r = !0;
        return;
      }
      y({ top: g.value, left: i.value });
    }), Hi(() => {
      t = !0, r || (r = !0);
    });
    const o = Yt(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let S = 0;
      return e.columns.forEach((A) => {
        S += A.width;
      }), S;
    }), a = P(() => {
      const S = /* @__PURE__ */ new Map(), { keyField: A } = e;
      return e.items.forEach((Z, re) => {
        S.set(Z[A], re);
      }), S;
    }), { scrollLeftRef: i, listWidthRef: l } = pf({
      columnsRef: Ye(e, "columns"),
      renderColRef: Ye(e, "renderCol"),
      renderItemWithColsRef: Ye(e, "renderItemWithCols")
    }), s = F(null), d = F(void 0), u = /* @__PURE__ */ new Map(), f = P(() => {
      const { items: S, itemSize: A, keyField: Z } = e, re = new hl(S.length, A);
      return S.forEach((K, me) => {
        const ve = K[Z], de = u.get(ve);
        de !== void 0 && re.add(me, de);
      }), re;
    }), h = F(0), g = F(0), m = Yt(() => Math.max(f.value.getBound(g.value - oo(e.paddingTop)) - 1, 0)), C = P(() => {
      const { value: S } = d;
      if (S === void 0)
        return [];
      const { items: A, itemSize: Z } = e, re = m.value, K = Math.min(re + Math.ceil(S / Z + 1), A.length - 1), me = [];
      for (let ve = re; ve <= K; ++ve)
        me.push(A[ve]);
      return me;
    }), y = (S, A) => {
      if (typeof S == "number") {
        M(S, A, "auto");
        return;
      }
      const { left: Z, top: re, index: K, key: me, position: ve, behavior: de, debounce: Te = !0 } = S;
      if (Z !== void 0 || re !== void 0)
        M(Z, re, de);
      else if (K !== void 0)
        E(K, de, Te);
      else if (me !== void 0) {
        const Fe = a.value.get(me);
        Fe !== void 0 && E(Fe, de, Te);
      } else ve === "bottom" ? M(0, Number.MAX_SAFE_INTEGER, de) : ve === "top" && M(0, 0, de);
    };
    let b, D = null;
    function E(S, A, Z) {
      const { value: re } = f, K = re.sum(S) + oo(e.paddingTop);
      if (!Z)
        s.value.scrollTo({
          left: 0,
          top: K,
          behavior: A
        });
      else {
        b = S, D !== null && window.clearTimeout(D), D = window.setTimeout(() => {
          b = void 0, D = null;
        }, 16);
        const { scrollTop: me, offsetHeight: ve } = s.value;
        if (K > me) {
          const de = re.get(S);
          K + de <= me + ve || s.value.scrollTo({
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
    function M(S, A, Z) {
      s.value.scrollTo({
        left: S,
        top: A,
        behavior: Z
      });
    }
    function L(S, A) {
      var Z, re, K;
      if (t || e.ignoreItemResize || z(A.target))
        return;
      const { value: me } = f, ve = a.value.get(S), de = me.get(ve), Te = (K = (re = (Z = A.borderBoxSize) === null || Z === void 0 ? void 0 : Z[0]) === null || re === void 0 ? void 0 : re.blockSize) !== null && K !== void 0 ? K : A.contentRect.height;
      if (Te === de)
        return;
      Te - e.itemSize === 0 ? u.delete(S) : u.set(S, Te - e.itemSize);
      const Je = Te - de;
      if (Je === 0)
        return;
      me.add(ve, Je);
      const be = s.value;
      if (be != null) {
        if (b === void 0) {
          const we = me.sum(ve);
          be.scrollTop > we && be.scrollBy(0, Je);
        } else if (ve < b)
          be.scrollBy(0, Je);
        else if (ve === b) {
          const we = me.sum(ve);
          Te + we > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          be.scrollTop + be.offsetHeight && be.scrollBy(0, Je);
        }
        Y();
      }
      h.value++;
    }
    const V = !mf();
    let p = !1;
    function T(S) {
      var A;
      (A = e.onScroll) === null || A === void 0 || A.call(e, S), (!V || !p) && Y();
    }
    function I(S) {
      var A;
      if ((A = e.onWheel) === null || A === void 0 || A.call(e, S), V) {
        const Z = s.value;
        if (Z != null) {
          if (S.deltaX === 0 && (Z.scrollTop === 0 && S.deltaY <= 0 || Z.scrollTop + Z.offsetHeight >= Z.scrollHeight && S.deltaY >= 0))
            return;
          S.preventDefault(), Z.scrollTop += S.deltaY / si(), Z.scrollLeft += S.deltaX / si(), Y(), p = !0, nl(() => {
            p = !1;
          });
        }
      }
    }
    function U(S) {
      if (t || z(S.target))
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
    function z(S) {
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
        const { itemResizable: S } = e, A = vr(f.value.sum());
        return h.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: vr(o.value),
            height: S ? "" : A,
            minHeight: S ? A : "",
            paddingTop: vr(e.paddingTop),
            paddingBottom: vr(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: P(() => (h.value, {
        transform: `translateY(${vr(f.value.sum(m.value))})`
      })),
      viewportItems: C,
      listElRef: s,
      itemsElRef: F(null),
      scrollTo: y,
      handleListResize: U,
      handleListScroll: T,
      handleListWheel: I,
      handleItemResize: L
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: t, visibleItemsTag: r } = this;
    return c(Mr, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var o, a;
        return c("div", ua(this.$attrs, {
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
            c(r, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: i, renderItemWithCols: l } = this;
                return this.viewportItems.map((s) => {
                  const d = s[n], u = t.get(d), f = i != null ? c(di, {
                    index: u,
                    item: s
                  }) : void 0, h = l != null ? c(di, {
                    index: u,
                    item: s
                  }) : void 0, g = this.$slots.default({
                    item: s,
                    renderedCols: f,
                    renderedItemWithCols: h,
                    index: u
                  })[0];
                  return e ? c(Mr, {
                    key: d,
                    onResize: (m) => this.handleItemResize(d, m)
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
const vf = "n-internal-select-menu-body", Cf = "n-drawer-body", bf = "n-modal-body", xf = "n-popover-body", Sl = "__disabled__";
function Sn(e) {
  const n = Xe(bf, null), t = Xe(Cf, null), r = Xe(xf, null), o = Xe(vf, null), a = F();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const i = () => {
      a.value = document.fullscreenElement;
    };
    on(() => {
      Ot("fullscreenchange", document, i);
    }), fn(() => {
      mt("fullscreenchange", document, i);
    });
  }
  return Yt(() => {
    var i;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? Sl : l === !0 ? a.value || "body" : l : n != null && n.value ? (i = n.value.$el) !== null && i !== void 0 ? i : n.value : t != null && t.value ? t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : l ?? (a.value || "body");
  });
}
Sn.tdkey = Sl;
Sn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
const go = typeof document < "u" && typeof window < "u";
function Sf(e) {
  const n = {
    isDeactivated: !1
  };
  let t = !1;
  return $i(() => {
    if (n.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), Hi(() => {
    n.isDeactivated = !0, t || (t = !0);
  }), n;
}
function ci(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function ui(e) {
  const {
    left: n,
    right: t,
    top: r,
    bottom: o
  } = Xn(e);
  return `${r} ${n} ${o} ${t}`;
}
var fi = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function yf(e) {
  let n = ".", t = "__", r = "--", o;
  {
    let m = e.blockPrefix;
    m && (n = m), m = e.elementPrefix, m && (t = m), m = e.modifierPrefix, m && (r = m);
  }
  const a = {
    install(m) {
      o = m.c;
      const C = m.context;
      C.bem = {}, C.bem.b = null, C.bem.els = null;
    }
  };
  function i(m) {
    let C, y;
    return {
      before(b) {
        C = b.bem.b, y = b.bem.els, b.bem.els = null;
      },
      after(b) {
        b.bem.b = C, b.bem.els = y;
      },
      $({ context: b, props: D }) {
        return m = typeof m == "string" ? m : m({ context: b, props: D }), b.bem.b = m, `${(D == null ? void 0 : D.bPrefix) || n}${b.bem.b}`;
      }
    };
  }
  function l(m) {
    let C;
    return {
      before(y) {
        C = y.bem.els;
      },
      after(y) {
        y.bem.els = C;
      },
      $({ context: y, props: b }) {
        return m = typeof m == "string" ? m : m({ context: y, props: b }), y.bem.els = m.split(",").map((D) => D.trim()), y.bem.els.map((D) => `${(b == null ? void 0 : b.bPrefix) || n}${y.bem.b}${t}${D}`).join(", ");
      }
    };
  }
  function s(m) {
    return {
      $({ context: C, props: y }) {
        m = typeof m == "string" ? m : m({ context: C, props: y });
        const b = m.split(",").map((M) => M.trim());
        function D(M) {
          return b.map((L) => `&${(y == null ? void 0 : y.bPrefix) || n}${C.bem.b}${M !== void 0 ? `${t}${M}` : ""}${r}${L}`).join(", ");
        }
        const E = C.bem.els;
        if (E !== null) {
          if (fi.NODE_ENV !== "production" && E.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${m}) is invalid, using modifier inside multiple elements is not allowed`);
          return D(E[0]);
        } else
          return D();
      }
    };
  }
  function d(m) {
    return {
      $({ context: C, props: y }) {
        m = typeof m == "string" ? m : m({ context: C, props: y });
        const b = C.bem.els;
        if (fi.NODE_ENV !== "production" && b !== null && b.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${m}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(y == null ? void 0 : y.bPrefix) || n}${C.bem.b}${b !== null && b.length > 0 ? `${t}${b[0]}` : ""}${r}${m})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...m) => o(i(m[0]), m[1], m[2]),
    cE: (...m) => o(l(m[0]), m[1], m[2]),
    cM: (...m) => o(s(m[0]), m[1], m[2]),
    cNotM: (...m) => o(d(m[0]), m[1], m[2])
  }), a;
}
const wf = "n", Pf = `.${wf}-`, _f = "__", Df = "--", yl = ul(), wl = yf({
  blockPrefix: Pf,
  elementPrefix: _f,
  modifierPrefix: Df
});
yl.use(wl);
const {
  c: $,
  find: rC
} = yl, {
  cB: oe,
  cE: N,
  cM: ae,
  cNotM: Wt
} = wl;
function Se(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
const Tf = /* @__PURE__ */ new WeakSet();
function io(e) {
  Tf.add(e);
}
const hi = /* @__PURE__ */ new Set();
function yn(e, n) {
  const t = `[naive/${e}]: ${n}`;
  hi.has(t) || (hi.add(t), console.error(t));
}
function Pl(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function wa(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function Pe(e, ...n) {
  if (Array.isArray(e))
    e.forEach((t) => Pe(t, ...n));
  else
    return e(...n);
}
function kr(e) {
  return e.some((n) => Fs(n) ? !(n.type === Fi || n.type === fo && !kr(n.children)) : !0) ? e : null;
}
function ke(e, n) {
  return e && kr(e()) || n();
}
function Rt(e, n, t) {
  return e && kr(e(n)) || t(n);
}
function vn(e, n) {
  const t = e && kr(e());
  return n(t || null);
}
function Mf(e) {
  return !(e && kr(e()));
}
const mi = Ce({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), un = "n-config-provider", ra = "n";
function Fr(e = {}, n = {
  defaultBordered: !0
}) {
  const t = Xe(un, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: t == null ? void 0 : t.inlineThemeDisabled,
    mergedRtlRef: t == null ? void 0 : t.mergedRtlRef,
    mergedComponentPropsRef: t == null ? void 0 : t.mergedComponentPropsRef,
    mergedBreakpointsRef: t == null ? void 0 : t.mergedBreakpointsRef,
    mergedBorderedRef: P(() => {
      var r, o;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (o = (r = t == null ? void 0 : t.mergedBorderedRef.value) !== null && r !== void 0 ? r : n.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : As(ra),
    namespaceRef: P(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function $n(e, n, t, r) {
  t || wa("useThemeClass", "cssVarsRef is not passed");
  const o = Xe(un, null), a = o == null ? void 0 : o.mergedThemeHashRef, i = o == null ? void 0 : o.styleMountTarget, l = F(""), s = ur();
  let d;
  const u = `__${e}`, f = () => {
    let h = u;
    const g = n ? n.value : void 0, m = a == null ? void 0 : a.value;
    m && (h += `-${m}`), g && (h += `-${g}`);
    const {
      themeOverrides: C,
      builtinThemeOverrides: y
    } = r;
    C && (h += `-${Dr(JSON.stringify(C))}`), y && (h += `-${Dr(JSON.stringify(y))}`), l.value = h, d = () => {
      const b = t.value;
      let D = "";
      for (const E in b)
        D += `${E}: ${b[E]};`;
      $(`.${h}`, D).mount({
        id: h,
        ssr: s,
        parent: i
      }), d = void 0;
    };
  };
  return Ft(() => {
    f();
  }), {
    themeClass: l,
    onRender: () => {
      d == null || d();
    }
  };
}
const pi = "n-form-item";
function vo(e, {
  defaultSize: n = "medium",
  mergedSize: t,
  mergedDisabled: r
} = {}) {
  const o = Xe(pi, null);
  zn(pi, null);
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
    return n;
  }), i = P(r ? () => r(o) : () => {
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
  return fn(() => {
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
const Of = {
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
}, Rf = {
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
}, Ef = {
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
}, If = (e, n, t) => {
  let r;
  const o = Ef[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", String(n)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? r + "内" : r + "前" : r;
}, kf = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Ff = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Af = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, $f = {
  date: Qn({
    formats: kf,
    defaultWidth: "full"
  }),
  time: Qn({
    formats: Ff,
    defaultWidth: "full"
  }),
  dateTime: Qn({
    formats: Af,
    defaultWidth: "full"
  })
};
function gi(e, n, t) {
  const r = "eeee p";
  return Zi(e, n, t) ? r : e.getTime() > n.getTime() ? "'下个'" + r : "'上个'" + r;
}
const Hf = {
  lastWeek: gi,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: gi,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, zf = (e, n, t, r) => {
  const o = Hf[e];
  return typeof o == "function" ? o(n, t, r) : o;
}, Bf = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Lf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Nf = {
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
}, Wf = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Vf = {
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
}, jf = {
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
}, Uf = (e, n) => {
  const t = Number(e);
  switch (n == null ? void 0 : n.unit) {
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
}, Yf = {
  ordinalNumber: Uf,
  era: en({
    values: Bf,
    defaultWidth: "wide"
  }),
  quarter: en({
    values: Lf,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: en({
    values: Nf,
    defaultWidth: "wide"
  }),
  day: en({
    values: Wf,
    defaultWidth: "wide"
  }),
  dayPeriod: en({
    values: Vf,
    defaultWidth: "wide",
    formattingValues: jf,
    defaultFormattingWidth: "wide"
  })
}, Gf = /^(第\s*)?\d+(日|时|分|秒)?/i, qf = /\d+/i, Kf = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Xf = {
  any: [/^(前)/i, /^(公元)/i]
}, Qf = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Zf = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Jf = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, eh = {
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
}, th = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, nh = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, rh = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, oh = {
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
}, ah = {
  ordinalNumber: Ni({
    matchPattern: Gf,
    parsePattern: qf,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: tn({
    matchPatterns: Kf,
    defaultMatchWidth: "wide",
    parsePatterns: Xf,
    defaultParseWidth: "any"
  }),
  quarter: tn({
    matchPatterns: Qf,
    defaultMatchWidth: "wide",
    parsePatterns: Zf,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: tn({
    matchPatterns: Jf,
    defaultMatchWidth: "wide",
    parsePatterns: eh,
    defaultParseWidth: "any"
  }),
  day: tn({
    matchPatterns: th,
    defaultMatchWidth: "wide",
    parsePatterns: nh,
    defaultParseWidth: "any"
  }),
  dayPeriod: tn({
    matchPatterns: rh,
    defaultMatchWidth: "any",
    parsePatterns: oh,
    defaultParseWidth: "any"
  })
}, ih = {
  code: "zh-CN",
  formatDistance: If,
  formatLong: $f,
  formatRelative: zf,
  localize: Yf,
  match: ah,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, lh = {
  name: "en-US",
  locale: fa
}, sh = {
  name: "zh-CN",
  locale: ih
};
function Ar(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: t
  } = Xe(un, null) || {}, r = P(() => {
    var a, i;
    return (i = (a = n == null ? void 0 : n.value) === null || a === void 0 ? void 0 : a[e]) !== null && i !== void 0 ? i : Of[e];
  });
  return {
    dateLocaleRef: P(() => {
      var a;
      return (a = t == null ? void 0 : t.value) !== null && a !== void 0 ? a : lh;
    }),
    localeRef: r
  };
}
const Or = "naive-ui-style";
function Pa(e, n, t) {
  if (!n) return;
  const r = ur(), o = P(() => {
    const {
      value: l
    } = n;
    if (!l)
      return;
    const s = l[e];
    if (s)
      return s;
  }), a = Xe(un, null), i = () => {
    Ft(() => {
      const {
        value: l
      } = t, s = `${l}${e}Rtl`;
      if ($u(s, r)) return;
      const {
        value: d
      } = o;
      d && d.style.mount({
        id: s,
        head: !0,
        anchorMetaName: Or,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: r,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return r ? i() : uo(i), o;
}
const Bn = {
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
  fontSize: dh,
  fontFamily: ch,
  lineHeight: uh
} = Bn, _l = $("body", `
 margin: 0;
 font-size: ${dh};
 font-family: ${ch};
 line-height: ${uh};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [$("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var fh = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function $r(e, n, t) {
  if (!n) {
    fh.NODE_ENV !== "production" && wa("use-style", "No style is specified.");
    return;
  }
  const r = ur(), o = Xe(un, null), a = () => {
    const i = t.value;
    n.mount({
      id: i === void 0 ? e : i + e,
      head: !0,
      anchorMetaName: Or,
      props: {
        bPrefix: i ? `.${i}-` : void 0
      },
      ssr: r,
      parent: o == null ? void 0 : o.styleMountTarget
    }), o != null && o.preflightStyleDisabled || _l.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Or,
      ssr: r,
      parent: o == null ? void 0 : o.styleMountTarget
    });
  };
  r ? a() : uo(a);
}
function Qt(e, n, t, r, o, a) {
  const i = ur(), l = Xe(un, null);
  if (t) {
    const d = () => {
      const u = a == null ? void 0 : a.value;
      t.mount({
        id: u === void 0 ? n : u + n,
        head: !0,
        props: {
          bPrefix: u ? `.${u}-` : void 0
        },
        anchorMetaName: Or,
        ssr: i,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || _l.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Or,
        ssr: i,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    i ? d() : uo(d);
  }
  return P(() => {
    var d;
    const {
      theme: {
        common: u,
        self: f,
        peers: h = {}
      } = {},
      themeOverrides: g = {},
      builtinThemeOverrides: m = {}
    } = o, {
      common: C,
      peers: y
    } = g, {
      common: b = void 0,
      [e]: {
        common: D = void 0,
        self: E = void 0,
        peers: M = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: L = void 0,
      [e]: V = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: p,
      peers: T = {}
    } = V, I = br({}, u || D || b || r.common, L, p, C), U = br(
      // {}, executed every time, no need for empty obj
      (d = f || E || r.self) === null || d === void 0 ? void 0 : d(I),
      m,
      V,
      g
    );
    return {
      common: I,
      self: U,
      peers: br({}, r.peers, M, h),
      peerOverrides: br({}, m.peers, T, y)
    };
  });
}
Qt.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const hh = oe("base-icon", `
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
 `)]), bn = Ce({
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
    $r("-base-icon", hh, Ye(e, "clsPrefix"));
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
}), _a = Ce({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const t = mo();
    return () => c(An, {
      name: "icon-switch-transition",
      appear: t.value
    }, n);
  }
});
function Co(e, n) {
  const t = Ce({
    render() {
      return n();
    }
  });
  return Ce({
    name: Ls(e),
    setup() {
      var r;
      const o = (r = Xe(un, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var a;
        const i = (a = o == null ? void 0 : o.value) === null || a === void 0 ? void 0 : a[e];
        return i ? i() : c(t, null);
      };
    }
  });
}
const nr = Ce({
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
}), mh = Ce({
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
}), ph = Co("clear", () => c("svg", {
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
}))))), vi = Co("date", () => c("svg", {
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
}))))), gh = Ce({
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
}), vh = Ce({
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
}), rr = Ce({
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
}), or = Ce({
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
}), ar = Ce({
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
}), Ch = Co("time", () => c("svg", {
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
}))), bh = Co("to", () => c("svg", {
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
  cubicBezierEaseInOut: xh
} = Bn;
function lo({
  originalTransform: e = "",
  left: n = 0,
  top: t = 0,
  transition: r = `all .3s ${xh} !important`
} = {}) {
  return [$("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: n,
    top: t,
    opacity: 0
  }), $("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: n,
    top: t,
    opacity: 1
  }), $("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: n,
    top: t,
    transition: r
  })];
}
const Sh = oe("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [$(">", [N("clear", `
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
 `)]), N("placeholder", `
 display: flex;
 `), N("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [lo({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), oa = Ce({
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
    return $r("-base-clear", Sh, Ye(e, "clsPrefix")), {
      handleMouseDown(n) {
        n.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return c("div", {
      class: `${e}-base-clear`
    }, c(_a, null, {
      default: () => {
        var n, t;
        return this.show ? c("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, ke(this.$slots.icon, () => [c(bn, {
          clsPrefix: e
        }, {
          default: () => c(ph, null)
        })])) : c("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (t = (n = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(n));
      }
    }));
  }
}), yh = Ce({
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
    slots: n
  }) {
    function t(l) {
      e.width ? l.style.maxWidth = `${l.offsetWidth}px` : l.style.maxHeight = `${l.offsetHeight}px`, l.offsetWidth;
    }
    function r(l) {
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
      } = e, f = l ? $s : An, h = {
        name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: d,
        onEnter: a,
        onAfterEnter: i,
        onBeforeLeave: t,
        onLeave: r,
        onAfterLeave: o
      };
      return l || (h.mode = u), c(f, h, n);
    };
  }
}), Ln = Ce({
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
}), wh = $([$("@keyframes rotator", `
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
 `, [N("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [lo()]), N("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [lo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), N("container", `
 animation: rotator 3s linear infinite both;
 `, [N("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Ho = "1.6s", Ph = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Dl = Ce({
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
  }, Ph),
  setup(e) {
    $r("-base-loading", wh, Ye(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: n,
      strokeWidth: t,
      stroke: r,
      scale: o
    } = this, a = n / o;
    return c("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, c(_a, null, {
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
          color: r
        }
      }, c("g", null, c("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};270 ${a} ${a}`,
        begin: "0s",
        dur: Ho,
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
        r: n - t / 2,
        "stroke-dasharray": 5.67 * n,
        "stroke-dashoffset": 18.48 * n
      }, c("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,
        begin: "0s",
        dur: Ho,
        fill: "freeze",
        repeatCount: "indefinite"
      }), c("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: Ho,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : c("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Ci
} = Bn;
function _h({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: t = "0.2s",
  enterCubicBezier: r = Ci,
  leaveCubicBezier: o = Ci
} = {}) {
  return [$(`&.${e}-transition-enter-active`, {
    transition: `all ${n} ${r}!important`
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
}, Dh = cn(X.neutralBase), Tl = cn(X.neutralInvertBase), Th = `rgba(${Tl.slice(0, 3).join(", ")}, `;
function Re(e) {
  return `${Th + String(e)})`;
}
function Mh(e) {
  const n = Array.from(Tl);
  return n[3] = Number(e), ne(Dh, n);
}
const B = Object.assign(Object.assign({
  name: "common"
}, Bn), {
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
  clearColorHover: lt(Re(X.alpha4), {
    alpha: 1.25
  }),
  clearColorPressed: lt(Re(X.alpha4), {
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
  tagColor: Mh(X.alphaTag),
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
}, Oh = cn(ce.neutralBase), Ml = cn(ce.neutralInvertBase), Rh = `rgba(${Ml.slice(0, 3).join(", ")}, `;
function bi(e) {
  return `${Rh + String(e)})`;
}
function St(e) {
  const n = Array.from(Ml);
  return n[3] = Number(e), ne(Oh, n);
}
const fr = Object.assign(Object.assign({
  name: "common"
}, Bn), {
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
  textColorDisabled: St(ce.alpha4),
  placeholderColor: St(ce.alpha4),
  placeholderColorDisabled: St(ce.alpha5),
  iconColor: St(ce.alpha4),
  iconColorHover: lt(St(ce.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: lt(St(ce.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: St(ce.alpha5),
  opacity1: ce.alpha1,
  opacity2: ce.alpha2,
  opacity3: ce.alpha3,
  opacity4: ce.alpha4,
  opacity5: ce.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: St(Number(ce.alphaClose)),
  closeIconColorHover: St(Number(ce.alphaClose)),
  closeIconColorPressed: St(Number(ce.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: St(ce.alpha4),
  clearColorHover: lt(St(ce.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: lt(St(ce.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: bi(ce.alphaScrollbar),
  scrollbarColorHover: bi(ce.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: St(ce.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ce.neutralPopover,
  tableColor: ce.neutralCard,
  cardColor: ce.neutralCard,
  modalColor: ce.neutralModal,
  bodyColor: ce.neutralBody,
  tagColor: "#eee",
  avatarColor: St(ce.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: St(ce.alphaInput),
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
}), Eh = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Ol(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: t,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Eh), {
    height: r,
    width: o,
    borderRadius: a,
    color: n,
    colorHover: t
  });
}
const Da = {
  name: "Scrollbar",
  common: fr,
  self: Ol
}, At = {
  name: "Scrollbar",
  common: B,
  self: Ol
}, Ih = oe("scrollbar", `
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
 `, [$(">", [N("scrollbar", `
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
 `, [$(">", [N("scrollbar", `
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
 `), ae("disabled", [$(">", [N("scrollbar", "pointer-events: none;")])]), $(">", [N("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [_h(), $("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), kh = Object.assign(Object.assign({}, Qt.props), {
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
}), Kt = Ce({
  name: "Scrollbar",
  props: kh,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Fr(e), o = Pa("Scrollbar", r, n), a = F(null), i = F(null), l = F(null), s = F(null), d = F(null), u = F(null), f = F(null), h = F(null), g = F(null), m = F(null), C = F(null), y = F(0), b = F(0), D = F(!1), E = F(!1);
    let M = !1, L = !1, V, p, T = 0, I = 0, U = 0, Y = 0;
    const z = hu(), S = Qt("Scrollbar", "-scrollbar", Ih, Da, e, n), A = P(() => {
      const {
        value: k
      } = h, {
        value: J
      } = u, {
        value: le
      } = m;
      return k === null || J === null || le === null ? 0 : Math.min(k, le * k / J + oo(S.value.self.width) * 1.5);
    }), Z = P(() => `${A.value}px`), re = P(() => {
      const {
        value: k
      } = g, {
        value: J
      } = f, {
        value: le
      } = C;
      return k === null || J === null || le === null ? 0 : le * k / J + oo(S.value.self.height) * 1.5;
    }), K = P(() => `${re.value}px`), me = P(() => {
      const {
        value: k
      } = h, {
        value: J
      } = y, {
        value: le
      } = u, {
        value: Me
      } = m;
      if (k === null || le === null || Me === null)
        return 0;
      {
        const Ie = le - k;
        return Ie ? J / Ie * (Me - A.value) : 0;
      }
    }), ve = P(() => `${me.value}px`), de = P(() => {
      const {
        value: k
      } = g, {
        value: J
      } = b, {
        value: le
      } = f, {
        value: Me
      } = C;
      if (k === null || le === null || Me === null)
        return 0;
      {
        const Ie = le - k;
        return Ie ? J / Ie * (Me - re.value) : 0;
      }
    }), Te = P(() => `${de.value}px`), Fe = P(() => {
      const {
        value: k
      } = h, {
        value: J
      } = u;
      return k !== null && J !== null && J > k;
    }), Je = P(() => {
      const {
        value: k
      } = g, {
        value: J
      } = f;
      return k !== null && J !== null && J > k;
    }), be = P(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || D.value;
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
    }), Ne = P(() => {
      const {
        content: k
      } = e;
      return k ? k() : l.value;
    }), nt = (k, J) => {
      if (!e.scrollable) return;
      if (typeof k == "number") {
        ot(k, J ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: le,
        top: Me,
        index: Ie,
        elSize: w,
        position: G,
        behavior: te,
        el: fe,
        debounce: qe = !0
      } = k;
      (le !== void 0 || Me !== void 0) && ot(le ?? 0, Me ?? 0, 0, !1, te), fe !== void 0 ? ot(0, fe.offsetTop, fe.offsetHeight, qe, te) : Ie !== void 0 && w !== void 0 ? ot(0, Ie * w, w, qe, te) : G === "bottom" ? ot(0, Number.MAX_SAFE_INTEGER, 0, !1, te) : G === "top" && ot(0, 0, 0, !1, te);
    }, he = Sf(() => {
      e.container || nt({
        top: y.value,
        left: b.value
      });
    }), Ct = () => {
      he.isDeactivated || at();
    }, ye = (k) => {
      if (he.isDeactivated) return;
      const {
        onResize: J
      } = e;
      J && J(k), at();
    }, rt = (k, J) => {
      if (!e.scrollable) return;
      const {
        value: le
      } = pe;
      le && (typeof k == "object" ? le.scrollBy(k) : le.scrollBy(k, J || 0));
    };
    function ot(k, J, le, Me, Ie) {
      const {
        value: w
      } = pe;
      if (w) {
        if (Me) {
          const {
            scrollTop: G,
            offsetHeight: te
          } = w;
          if (J > G) {
            J + le <= G + te || w.scrollTo({
              left: k,
              top: J + le - te,
              behavior: Ie
            });
            return;
          }
        }
        w.scrollTo({
          left: k,
          top: J,
          behavior: Ie
        });
      }
    }
    function Et() {
      Bt(), Oe(), at();
    }
    function Ht() {
      Pt();
    }
    function Pt() {
      zt(), bt();
    }
    function zt() {
      p !== void 0 && window.clearTimeout(p), p = window.setTimeout(() => {
        E.value = !1;
      }, e.duration);
    }
    function bt() {
      V !== void 0 && window.clearTimeout(V), V = window.setTimeout(() => {
        D.value = !1;
      }, e.duration);
    }
    function Bt() {
      V !== void 0 && window.clearTimeout(V), D.value = !0;
    }
    function Oe() {
      p !== void 0 && window.clearTimeout(p), E.value = !0;
    }
    function ze(k) {
      const {
        onScroll: J
      } = e;
      J && J(k), et();
    }
    function et() {
      const {
        value: k
      } = pe;
      k && (y.value = k.scrollTop, b.value = k.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function qt() {
      const {
        value: k
      } = Ne;
      k && (u.value = k.offsetHeight, f.value = k.offsetWidth);
      const {
        value: J
      } = pe;
      J && (h.value = J.offsetHeight, g.value = J.offsetWidth);
      const {
        value: le
      } = d, {
        value: Me
      } = s;
      le && (C.value = le.offsetWidth), Me && (m.value = Me.offsetHeight);
    }
    function _t() {
      const {
        value: k
      } = pe;
      k && (y.value = k.scrollTop, b.value = k.scrollLeft * (o != null && o.value ? -1 : 1), h.value = k.offsetHeight, g.value = k.offsetWidth, u.value = k.scrollHeight, f.value = k.scrollWidth);
      const {
        value: J
      } = d, {
        value: le
      } = s;
      J && (C.value = J.offsetWidth), le && (m.value = le.offsetHeight);
    }
    function at() {
      e.scrollable && (e.useUnifiedContainer ? _t() : (qt(), et()));
    }
    function ht(k) {
      var J;
      return !(!((J = a.value) === null || J === void 0) && J.contains(ho(k)));
    }
    function O(k) {
      k.preventDefault(), k.stopPropagation(), L = !0, Ot("mousemove", window, ue, !0), Ot("mouseup", window, Ee, !0), I = b.value, U = o != null && o.value ? window.innerWidth - k.clientX : k.clientX;
    }
    function ue(k) {
      if (!L) return;
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p);
      const {
        value: J
      } = g, {
        value: le
      } = f, {
        value: Me
      } = re;
      if (J === null || le === null) return;
      const w = (o != null && o.value ? window.innerWidth - k.clientX - U : k.clientX - U) * (le - J) / (J - Me), G = le - J;
      let te = I + w;
      te = Math.min(G, te), te = Math.max(te, 0);
      const {
        value: fe
      } = pe;
      if (fe) {
        fe.scrollLeft = te * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: qe
        } = e;
        qe && qe(te);
      }
    }
    function Ee(k) {
      k.preventDefault(), k.stopPropagation(), mt("mousemove", window, ue, !0), mt("mouseup", window, Ee, !0), L = !1, at(), ht(k) && Pt();
    }
    function an(k) {
      k.preventDefault(), k.stopPropagation(), M = !0, Ot("mousemove", window, Lt, !0), Ot("mouseup", window, Ge, !0), T = y.value, Y = k.clientY;
    }
    function Lt(k) {
      if (!M) return;
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p);
      const {
        value: J
      } = h, {
        value: le
      } = u, {
        value: Me
      } = A;
      if (J === null || le === null) return;
      const w = (k.clientY - Y) * (le - J) / (J - Me), G = le - J;
      let te = T + w;
      te = Math.min(G, te), te = Math.max(te, 0);
      const {
        value: fe
      } = pe;
      fe && (fe.scrollTop = te);
    }
    function Ge(k) {
      k.preventDefault(), k.stopPropagation(), mt("mousemove", window, Lt, !0), mt("mouseup", window, Ge, !0), M = !1, at(), ht(k) && Pt();
    }
    Ft(() => {
      const {
        value: k
      } = Je, {
        value: J
      } = Fe, {
        value: le
      } = n, {
        value: Me
      } = d, {
        value: Ie
      } = s;
      Me && (k ? Me.classList.remove(`${le}-scrollbar-rail--disabled`) : Me.classList.add(`${le}-scrollbar-rail--disabled`)), Ie && (J ? Ie.classList.remove(`${le}-scrollbar-rail--disabled`) : Ie.classList.add(`${le}-scrollbar-rail--disabled`));
    }), on(() => {
      e.container || at();
    }), fn(() => {
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p), mt("mousemove", window, Lt, !0), mt("mouseup", window, Ge, !0);
    });
    const pt = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: k
        },
        self: {
          color: J,
          colorHover: le,
          height: Me,
          width: Ie,
          borderRadius: w,
          railInsetHorizontalTop: G,
          railInsetHorizontalBottom: te,
          railInsetVerticalRight: fe,
          railInsetVerticalLeft: qe,
          railColor: it
        }
      } = S.value, {
        top: _,
        right: H,
        bottom: q,
        left: xe
      } = Xn(G), {
        top: Qe,
        right: We,
        bottom: Ae,
        left: v
      } = Xn(te), {
        top: R,
        right: ie,
        bottom: _e,
        left: He
      } = Xn(o != null && o.value ? ui(fe) : fe), {
        top: De,
        right: Dt,
        bottom: Nt,
        left: ct
      } = Xn(o != null && o.value ? ui(qe) : qe);
      return {
        "--n-scrollbar-bezier": k,
        "--n-scrollbar-color": J,
        "--n-scrollbar-color-hover": le,
        "--n-scrollbar-border-radius": w,
        "--n-scrollbar-width": Ie,
        "--n-scrollbar-height": Me,
        "--n-scrollbar-rail-top-horizontal-top": _,
        "--n-scrollbar-rail-right-horizontal-top": H,
        "--n-scrollbar-rail-bottom-horizontal-top": q,
        "--n-scrollbar-rail-left-horizontal-top": xe,
        "--n-scrollbar-rail-top-horizontal-bottom": Qe,
        "--n-scrollbar-rail-right-horizontal-bottom": We,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ae,
        "--n-scrollbar-rail-left-horizontal-bottom": v,
        "--n-scrollbar-rail-top-vertical-right": R,
        "--n-scrollbar-rail-right-vertical-right": ie,
        "--n-scrollbar-rail-bottom-vertical-right": _e,
        "--n-scrollbar-rail-left-vertical-right": He,
        "--n-scrollbar-rail-top-vertical-left": De,
        "--n-scrollbar-rail-right-vertical-left": Dt,
        "--n-scrollbar-rail-bottom-vertical-left": Nt,
        "--n-scrollbar-rail-left-vertical-left": ct,
        "--n-scrollbar-rail-color": it
      };
    }), xt = t ? $n("scrollbar", void 0, pt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: nt,
      scrollBy: rt,
      sync: at,
      syncUnifiedContainer: _t,
      handleMouseEnterWrapper: Et,
      handleMouseLeaveWrapper: Ht
    }), {
      mergedClsPrefix: n,
      rtlEnabled: o,
      containerScrollTop: y,
      wrapperRef: a,
      containerRef: i,
      contentRef: l,
      yRailRef: s,
      xRailRef: d,
      needYBar: Fe,
      needXBar: Je,
      yBarSizePx: Z,
      xBarSizePx: K,
      yBarTopPx: ve,
      xBarLeftPx: Te,
      isShowXBar: be,
      isShowYBar: we,
      isIos: z,
      handleScroll: ze,
      handleContentResize: Ct,
      handleContainerResize: ye,
      handleYScrollMouseDown: an,
      handleXScrollMouseDown: O,
      cssVars: t ? void 0 : pt,
      themeClass: xt == null ? void 0 : xt.themeClass,
      onRender: xt == null ? void 0 : xt.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: n,
      mergedClsPrefix: t,
      triggerDisplayManually: r,
      rtlEnabled: o,
      internalHoistYRail: a,
      yPlacement: i,
      xPlacement: l,
      xScrollable: s
    } = this;
    if (!this.scrollable) return (e = n.default) === null || e === void 0 ? void 0 : e.call(n);
    const d = this.trigger === "none", u = (g, m) => c("div", {
      ref: "yRailRef",
      class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${i}`, g],
      "data-scrollbar-rail": !0,
      style: [m || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, c(d ? mi : An, d ? null : {
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
      var g, m;
      return (g = this.onRender) === null || g === void 0 || g.call(this), c("div", ua(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${t}-scrollbar`, this.themeClass, o && `${t}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (m = n.default) === null || m === void 0 ? void 0 : m.call(n) : c("div", {
        role: "none",
        ref: "containerRef",
        class: [`${t}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, c(Mr, {
        onResize: this.handleContentResize
      }, {
        default: () => c("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${t}-scrollbar-content`, this.contentClass]
        }, n)
      })), a ? null : u(void 0, void 0), s && c("div", {
        ref: "xRailRef",
        class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--horizontal`, `${t}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, c(d ? mi : An, d ? null : {
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
    }, h = this.container ? f() : c(Mr, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? c(fo, null, h, u(this.themeClass, this.cssVars)) : h;
  }
}), Fh = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function Rl(e) {
  const {
    textColorDisabled: n,
    iconColor: t,
    textColor2: r,
    fontSizeTiny: o,
    fontSizeSmall: a,
    fontSizeMedium: i,
    fontSizeLarge: l,
    fontSizeHuge: s
  } = e;
  return Object.assign(Object.assign({}, Fh), {
    fontSizeTiny: o,
    fontSizeSmall: a,
    fontSizeMedium: i,
    fontSizeLarge: l,
    fontSizeHuge: s,
    textColor: n,
    iconColor: t,
    extraTextColor: r
  });
}
const Ah = {
  name: "Empty",
  common: fr,
  self: Rl
}, Nn = {
  name: "Empty",
  common: B,
  self: Rl
}, $h = {
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
function Hh(e) {
  const {
    borderRadius: n,
    popoverColor: t,
    textColor3: r,
    dividerColor: o,
    textColor2: a,
    primaryColorPressed: i,
    textColorDisabled: l,
    primaryColor: s,
    opacityDisabled: d,
    hoverColor: u,
    fontSizeTiny: f,
    fontSizeSmall: h,
    fontSizeMedium: g,
    fontSizeLarge: m,
    fontSizeHuge: C,
    heightTiny: y,
    heightSmall: b,
    heightMedium: D,
    heightLarge: E,
    heightHuge: M
  } = e;
  return Object.assign(Object.assign({}, $h), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: h,
    optionFontSizeMedium: g,
    optionFontSizeLarge: m,
    optionFontSizeHuge: C,
    optionHeightTiny: y,
    optionHeightSmall: b,
    optionHeightMedium: D,
    optionHeightLarge: E,
    optionHeightHuge: M,
    borderRadius: n,
    color: t,
    groupHeaderTextColor: r,
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
const Hr = {
  name: "InternalSelectMenu",
  common: B,
  peers: {
    Scrollbar: At,
    Empty: Nn
  },
  self: Hh
}, {
  cubicBezierEaseIn: xi,
  cubicBezierEaseOut: Si
} = Bn;
function El({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: t = ".9",
  originalTransform: r = "",
  originalTransition: o = ""
} = {}) {
  return [$("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${xi}, transform ${n} ${xi} ${o && `,${o}`}`
  }), $("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Si}, transform ${n} ${Si} ${o && `,${o}`}`
  }), $("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${r} scale(${t})`
  }), $("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${r} scale(1)`
  })];
}
const zh = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Bh(e) {
  const {
    boxShadow2: n,
    popoverColor: t,
    textColor2: r,
    borderRadius: o,
    fontSize: a,
    dividerColor: i
  } = e;
  return Object.assign(Object.assign({}, zh), {
    fontSize: a,
    borderRadius: o,
    color: t,
    dividerColor: i,
    textColor: r,
    boxShadow: n
  });
}
const Wn = {
  name: "Popover",
  common: B,
  self: Bh
}, Lh = {
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
}, Il = {
  name: "Tag",
  common: B,
  self(e) {
    const {
      textColor2: n,
      primaryColorHover: t,
      primaryColorPressed: r,
      primaryColor: o,
      infoColor: a,
      successColor: i,
      warningColor: l,
      errorColor: s,
      baseColor: d,
      borderColor: u,
      tagColor: f,
      opacityDisabled: h,
      closeIconColor: g,
      closeIconColorHover: m,
      closeIconColorPressed: C,
      closeColorHover: y,
      closeColorPressed: b,
      borderRadiusSmall: D,
      fontSizeMini: E,
      fontSizeTiny: M,
      fontSizeSmall: L,
      fontSizeMedium: V,
      heightMini: p,
      heightTiny: T,
      heightSmall: I,
      heightMedium: U,
      buttonColor2Hover: Y,
      buttonColor2Pressed: z,
      fontWeightStrong: S
    } = e;
    return Object.assign(Object.assign({}, Lh), {
      closeBorderRadius: D,
      heightTiny: p,
      heightSmall: T,
      heightMedium: I,
      heightLarge: U,
      borderRadius: D,
      opacityDisabled: h,
      fontSizeTiny: E,
      fontSizeSmall: M,
      fontSizeMedium: L,
      fontSizeLarge: V,
      fontWeightStrong: S,
      // checked
      textColorCheckable: n,
      textColorHoverCheckable: n,
      textColorPressedCheckable: n,
      textColorChecked: d,
      colorCheckable: "#0000",
      colorHoverCheckable: Y,
      colorPressedCheckable: z,
      colorChecked: o,
      colorCheckedHover: t,
      colorCheckedPressed: r,
      // default
      border: `1px solid ${u}`,
      textColor: n,
      color: f,
      colorBordered: "#0000",
      closeIconColor: g,
      closeIconColorHover: m,
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
      closeIconColorPrimary: lt(o, {
        lightness: 0.7
      }),
      closeIconColorHoverPrimary: lt(o, {
        lightness: 0.7
      }),
      closeIconColorPressedPrimary: lt(o, {
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
      closeIconColorInfo: lt(a, {
        alpha: 0.7
      }),
      closeIconColorHoverInfo: lt(a, {
        alpha: 0.7
      }),
      closeIconColorPressedInfo: lt(a, {
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
      closeIconColorSuccess: lt(i, {
        alpha: 0.7
      }),
      closeIconColorHoverSuccess: lt(i, {
        alpha: 0.7
      }),
      closeIconColorPressedSuccess: lt(i, {
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
      closeIconColorWarning: lt(l, {
        alpha: 0.7
      }),
      closeIconColorHoverWarning: lt(l, {
        alpha: 0.7
      }),
      closeIconColorPressedWarning: lt(l, {
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
      closeIconColorError: lt(s, {
        alpha: 0.7
      }),
      closeIconColorHoverError: lt(s, {
        alpha: 0.7
      }),
      closeIconColorPressedError: lt(s, {
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
}, Nh = Ce({
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
    slots: n
  }) {
    return () => {
      const {
        clsPrefix: t
      } = e;
      return c(Dl, {
        clsPrefix: t,
        class: `${t}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? c(oa, {
          clsPrefix: t,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => c(bn, {
            clsPrefix: t,
            class: `${t}-base-suffix__arrow`
          }, {
            default: () => ke(n.default, () => [c(mh, null)])
          })
        }) : null
      });
    };
  }
}), Wh = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
}, Ta = {
  name: "InternalSelection",
  common: B,
  peers: {
    Popover: Wn
  },
  self(e) {
    const {
      borderRadius: n,
      textColor2: t,
      textColorDisabled: r,
      inputColor: o,
      inputColorDisabled: a,
      primaryColor: i,
      primaryColorHover: l,
      warningColor: s,
      warningColorHover: d,
      errorColor: u,
      errorColorHover: f,
      iconColor: h,
      iconColorDisabled: g,
      clearColor: m,
      clearColorHover: C,
      clearColorPressed: y,
      placeholderColor: b,
      placeholderColorDisabled: D,
      fontSizeTiny: E,
      fontSizeSmall: M,
      fontSizeMedium: L,
      fontSizeLarge: V,
      heightTiny: p,
      heightSmall: T,
      heightMedium: I,
      heightLarge: U,
      fontWeight: Y
    } = e;
    return Object.assign(Object.assign({}, Wh), {
      fontWeight: Y,
      fontSizeTiny: E,
      fontSizeSmall: M,
      fontSizeMedium: L,
      fontSizeLarge: V,
      heightTiny: p,
      heightSmall: T,
      heightMedium: I,
      heightLarge: U,
      borderRadius: n,
      // default
      textColor: t,
      textColorDisabled: r,
      placeholderColor: b,
      placeholderColorDisabled: D,
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
      arrowColor: h,
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
      clearColor: m,
      clearColorHover: C,
      clearColorPressed: y
    });
  }
}, {
  cubicBezierEaseInOut: pn
} = Bn;
function Vh({
  duration: e = ".2s",
  delay: n = ".1s"
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
 opacity ${e} ${pn},
 max-width ${e} ${pn} ${n},
 margin-left ${e} ${pn} ${n},
 margin-right ${e} ${pn} ${n};
 `), $("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${pn} ${n},
 max-width ${e} ${pn},
 margin-left ${e} ${pn},
 margin-right ${e} ${pn};
 `)];
}
const jh = oe("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Uh = Ce({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    $r("-base-wave", jh, Ye(e, "clsPrefix"));
    const n = F(null), t = F(!1);
    let r = null;
    return fn(() => {
      r !== null && window.clearTimeout(r);
    }), {
      active: t,
      selfRef: n,
      play() {
        r !== null && (window.clearTimeout(r), t.value = !1, r = null), Cn(() => {
          var o;
          (o = n.value) === null || o === void 0 || o.offsetHeight, t.value = !0, r = window.setTimeout(() => {
            t.value = !1, r = null;
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
}), Yh = go && "chrome" in window;
go && navigator.userAgent.includes("Firefox");
const kl = go && navigator.userAgent.includes("Safari") && !Yh, Fl = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
}, Gt = {
  name: "Input",
  common: B,
  self(e) {
    const {
      textColor2: n,
      textColor3: t,
      textColorDisabled: r,
      primaryColor: o,
      primaryColorHover: a,
      inputColor: i,
      inputColorDisabled: l,
      warningColor: s,
      warningColorHover: d,
      errorColor: u,
      errorColorHover: f,
      borderRadius: h,
      lineHeight: g,
      fontSizeTiny: m,
      fontSizeSmall: C,
      fontSizeMedium: y,
      fontSizeLarge: b,
      heightTiny: D,
      heightSmall: E,
      heightMedium: M,
      heightLarge: L,
      clearColor: V,
      clearColorHover: p,
      clearColorPressed: T,
      placeholderColor: I,
      placeholderColorDisabled: U,
      iconColor: Y,
      iconColorDisabled: z,
      iconColorHover: S,
      iconColorPressed: A,
      fontWeight: Z
    } = e;
    return Object.assign(Object.assign({}, Fl), {
      fontWeight: Z,
      countTextColorDisabled: r,
      countTextColor: t,
      heightTiny: D,
      heightSmall: E,
      heightMedium: M,
      heightLarge: L,
      fontSizeTiny: m,
      fontSizeSmall: C,
      fontSizeMedium: y,
      fontSizeLarge: b,
      lineHeight: g,
      lineHeightTextarea: g,
      borderRadius: h,
      iconSize: "16px",
      groupLabelColor: i,
      textColor: n,
      textColorDisabled: r,
      textDecorationColor: n,
      groupLabelTextColor: n,
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
      iconColorDisabled: z,
      iconColorHover: S,
      iconColorPressed: A,
      suffixTextColor: n
    });
  }
};
function Gh(e) {
  const {
    textColor2: n,
    textColor3: t,
    textColorDisabled: r,
    primaryColor: o,
    primaryColorHover: a,
    inputColor: i,
    inputColorDisabled: l,
    borderColor: s,
    warningColor: d,
    warningColorHover: u,
    errorColor: f,
    errorColorHover: h,
    borderRadius: g,
    lineHeight: m,
    fontSizeTiny: C,
    fontSizeSmall: y,
    fontSizeMedium: b,
    fontSizeLarge: D,
    heightTiny: E,
    heightSmall: M,
    heightMedium: L,
    heightLarge: V,
    actionColor: p,
    clearColor: T,
    clearColorHover: I,
    clearColorPressed: U,
    placeholderColor: Y,
    placeholderColorDisabled: z,
    iconColor: S,
    iconColorDisabled: A,
    iconColorHover: Z,
    iconColorPressed: re,
    fontWeight: K
  } = e;
  return Object.assign(Object.assign({}, Fl), {
    fontWeight: K,
    countTextColorDisabled: r,
    countTextColor: t,
    heightTiny: E,
    heightSmall: M,
    heightMedium: L,
    heightLarge: V,
    fontSizeTiny: C,
    fontSizeSmall: y,
    fontSizeMedium: b,
    fontSizeLarge: D,
    lineHeight: m,
    lineHeightTextarea: m,
    borderRadius: g,
    iconSize: "16px",
    groupLabelColor: p,
    groupLabelTextColor: n,
    textColor: n,
    textColorDisabled: r,
    textDecorationColor: n,
    caretColor: o,
    placeholderColor: Y,
    placeholderColorDisabled: z,
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
    borderHoverError: `1px solid ${h}`,
    colorFocusError: i,
    borderFocusError: `1px solid ${h}`,
    boxShadowFocusError: `0 0 0 2px ${Q(f, {
      alpha: 0.2
    })}`,
    caretColorError: f,
    clearColor: T,
    clearColorHover: I,
    clearColorPressed: U,
    iconColor: S,
    iconColorDisabled: A,
    iconColorHover: Z,
    iconColorPressed: re,
    suffixTextColor: n
  });
}
const Ma = {
  name: "Input",
  common: fr,
  self: Gh
}, Al = "n-input", qh = oe("input", `
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
  N("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  N("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  N("input-el, textarea-el", `
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
 `), $("&:-webkit-autofill ~", [N("placeholder", "display: none;")])]),
  ae("round", [Wt("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  N("placeholder", `
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
  ae("textarea", [N("placeholder", "overflow: visible;")]),
  Wt("autosize", "width: 100%;"),
  ae("autosize", [N("textarea-el, input-el", `
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
  N("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  N("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [$("&[type=password]::-ms-reveal", "display: none;"), $("+", [N("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Wt("textarea", [N("placeholder", "white-space: nowrap;")]),
  N("eye", `
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
 `)]), N("textarea-el, textarea-mirror, placeholder", `
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
 `), N("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  ae("pair", [N("input-el, placeholder", "text-align: center;"), N("separator", `
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
 `, [N("border", "border: var(--n-border-disabled);"), N("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), N("placeholder", "color: var(--n-placeholder-color-disabled);"), N("separator", "color: var(--n-text-color-disabled);", [oe("icon", `
 color: var(--n-icon-color-disabled);
 `), oe("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), oe("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), N("suffix, prefix", "color: var(--n-text-color-disabled);", [oe("icon", `
 color: var(--n-icon-color-disabled);
 `), oe("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Wt("disabled", [N("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [$("&:hover", `
 color: var(--n-icon-color-hover);
 `), $("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), $("&:hover", [N("state-border", "border: var(--n-border-hover);")]), ae("focus", "background-color: var(--n-color-focus);", [N("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  N("border, state-border", `
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
  N("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  N("prefix", "margin-right: 4px;"),
  N("suffix", `
 margin-left: 4px;
 `),
  N("suffix, prefix", `
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
 `, [N("placeholder", [oe("base-icon", `
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
  ["warning", "error"].map((e) => ae(`${e}-status`, [Wt("disabled", [oe("base-loading", `
 color: var(--n-loading-color-${e})
 `), N("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), N("state-border", `
 border: var(--n-border-${e});
 `), $("&:hover", [N("state-border", `
 border: var(--n-border-hover-${e});
 `)]), $("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [N("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), ae("focus", `
 background-color: var(--n-color-focus-${e});
 `, [N("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), Kh = oe("input", [ae("disabled", [N("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function Xh(e) {
  let n = 0;
  for (const t of e)
    n++;
  return n;
}
function Ur(e) {
  return e === "" || e == null;
}
function Qh(e) {
  const n = F(null);
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
    n.value = {
      start: i,
      end: l,
      beforeText: s.slice(0, i),
      afterText: s.slice(l)
    };
  }
  function r() {
    var a;
    const {
      value: i
    } = n, {
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
    let h = s.length;
    if (s.endsWith(f))
      h = s.length - f.length;
    else if (s.startsWith(u))
      h = u.length;
    else {
      const g = u[d - 1], m = s.indexOf(g, d - 1);
      m !== -1 && (h = m + 1);
    }
    (a = l.setSelectionRange) === null || a === void 0 || a.call(l, h, h);
  }
  function o() {
    n.value = null;
  }
  return ft(e, o), {
    recordCursor: t,
    restoreCursor: r
  };
}
const yi = Ce({
  name: "InputWordCount",
  setup(e, {
    slots: n
  }) {
    const {
      mergedValueRef: t,
      maxlengthRef: r,
      mergedClsPrefixRef: o,
      countGraphemesRef: a
    } = Xe(Al), i = P(() => {
      const {
        value: l
      } = t;
      return l === null || Array.isArray(l) ? 0 : (a.value || Xh)(l);
    });
    return () => {
      const {
        value: l
      } = r, {
        value: s
      } = t;
      return c("span", {
        class: `${o.value}-input-word-count`
      }, Rt(n.default, {
        value: s === null || Array.isArray(s) ? "" : s
      }, () => [l === void 0 ? i.value : `${i.value} / ${l}`]));
    };
  }
});
var Zh = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Jh = Object.assign(Object.assign({}, Qt.props), {
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
}), ir = Ce({
  name: "Input",
  props: Jh,
  slots: Object,
  setup(e) {
    Zh.NODE_ENV !== "production" && Ft(() => {
      e.showPasswordToggle && yn("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Fr(e), a = Qt("Input", "-input", qh, Ma, e, n);
    kl && $r("-input-safari", Kh, n);
    const i = F(null), l = F(null), s = F(null), d = F(null), u = F(null), f = F(null), h = F(null), g = Qh(h), m = F(null), {
      localeRef: C
    } = Ar("Input"), y = F(e.defaultValue), b = Ye(e, "value"), D = ao(b, y), E = vo(e), {
      mergedSizeRef: M,
      mergedDisabledRef: L,
      mergedStatusRef: V
    } = E, p = F(!1), T = F(!1), I = F(!1), U = F(!1);
    let Y = null;
    const z = P(() => {
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
      } = D, {
        value: ie
      } = z;
      return !v && (Ur(R) || Array.isArray(R) && Ur(R[0])) && ie[0];
    }), A = P(() => {
      const {
        value: v
      } = I, {
        value: R
      } = D, {
        value: ie
      } = z;
      return !v && ie[1] && (Ur(R) || Array.isArray(R) && Ur(R[1]));
    }), Z = Yt(() => e.internalForceFocus || p.value), re = Yt(() => {
      if (L.value || e.readonly || !e.clearable || !Z.value && !T.value)
        return !1;
      const {
        value: v
      } = D, {
        value: R
      } = Z;
      return e.pair ? !!(Array.isArray(v) && (v[0] || v[1])) && (T.value || R) : !!v && (T.value || R);
    }), K = P(() => {
      const {
        showPasswordOn: v
      } = e;
      if (v)
        return v;
      if (e.showPasswordToggle) return "click";
    }), me = F(!1), ve = P(() => {
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
        if (ie && (de.value = (R = (v = m.value) === null || v === void 0 ? void 0 : v.$el) === null || R === void 0 ? void 0 : R.offsetWidth), !l.value || typeof ie == "boolean") return;
        const {
          paddingTop: _e,
          paddingBottom: He,
          lineHeight: De
        } = window.getComputedStyle(l.value), Dt = Number(_e.slice(0, -2)), Nt = Number(He.slice(0, -2)), ct = Number(De.slice(0, -2)), {
          value: ln
        } = s;
        if (!ln) return;
        if (ie.minRows) {
          const sn = Math.max(ie.minRows, 1), wn = `${Dt + Nt + ct * sn}px`;
          ln.style.minHeight = wn;
        }
        if (ie.maxRows) {
          const sn = `${Dt + Nt + ct * ie.maxRows}px`;
          ln.style.maxHeight = sn;
        }
      }
    }, Fe = P(() => {
      const {
        maxlength: v
      } = e;
      return v === void 0 ? void 0 : Number(v);
    });
    on(() => {
      const {
        value: v
      } = D;
      Array.isArray(v) || fe(v);
    });
    const Je = co().proxy;
    function be(v, R) {
      const {
        onUpdateValue: ie,
        "onUpdate:value": _e,
        onInput: He
      } = e, {
        nTriggerFormInput: De
      } = E;
      ie && Pe(ie, v, R), _e && Pe(_e, v, R), He && Pe(He, v, R), y.value = v, De();
    }
    function we(v, R) {
      const {
        onChange: ie
      } = e, {
        nTriggerFormChange: _e
      } = E;
      ie && Pe(ie, v, R), y.value = v, _e();
    }
    function pe(v) {
      const {
        onBlur: R
      } = e, {
        nTriggerFormBlur: ie
      } = E;
      R && Pe(R, v), ie();
    }
    function Ne(v) {
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
    function he(v) {
      const {
        onInputBlur: R
      } = e;
      R && Pe(R, v);
    }
    function Ct(v) {
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
    function rt() {
      const {
        onActivate: v
      } = e;
      v && Pe(v);
    }
    function ot(v) {
      const {
        onClick: R
      } = e;
      R && Pe(R, v);
    }
    function Et(v) {
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
    function Pt() {
      I.value = !0;
    }
    function zt(v) {
      I.value = !1, v.target === f.value ? bt(v, 1) : bt(v, 0);
    }
    function bt(v, R = 0, ie = "input") {
      const _e = v.target.value;
      if (fe(_e), v instanceof InputEvent && !v.isComposing && (I.value = !1), e.type === "textarea") {
        const {
          value: De
        } = m;
        De && De.syncUnifiedContainer();
      }
      if (Y = _e, I.value) return;
      g.recordCursor();
      const He = Bt(_e);
      if (He)
        if (!e.pair)
          ie === "input" ? be(_e, {
            source: R
          }) : we(_e, {
            source: R
          });
        else {
          let {
            value: De
          } = D;
          Array.isArray(De) ? De = [De[0], De[1]] : De = ["", ""], De[R] = _e, ie === "input" ? be(De, {
            source: R
          }) : we(De, {
            source: R
          });
        }
      Je.$forceUpdate(), He || Cn(g.restoreCursor);
    }
    function Bt(v) {
      const {
        countGraphemes: R,
        maxlength: ie,
        minlength: _e
      } = e;
      if (R) {
        let De;
        if (ie !== void 0 && (De === void 0 && (De = R(v)), De > Number(ie)) || _e !== void 0 && (De === void 0 && (De = R(v)), De < Number(ie)))
          return !1;
      }
      const {
        allowInput: He
      } = e;
      return typeof He == "function" ? He(v) : !0;
    }
    function Oe(v) {
      he(v), v.relatedTarget === i.value && ye(), v.relatedTarget !== null && (v.relatedTarget === u.value || v.relatedTarget === f.value || v.relatedTarget === l.value) || (U.value = !1), _t(v, "blur"), h.value = null;
    }
    function ze(v, R) {
      Ct(v), p.value = !0, U.value = !0, rt(), _t(v, "focus"), R === 0 ? h.value = u.value : R === 1 ? h.value = f.value : R === 2 && (h.value = l.value);
    }
    function et(v) {
      e.passivelyActivated && (Ht(v), _t(v, "blur"));
    }
    function qt(v) {
      e.passivelyActivated && (p.value = !0, Et(v), _t(v, "focus"));
    }
    function _t(v, R) {
      v.relatedTarget !== null && (v.relatedTarget === u.value || v.relatedTarget === f.value || v.relatedTarget === l.value || v.relatedTarget === i.value) || (R === "focus" ? (Ne(v), p.value = !0) : R === "blur" && (pe(v), p.value = !1));
    }
    function at(v, R) {
      bt(v, R, "change");
    }
    function ht(v) {
      ot(v);
    }
    function O(v) {
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
            value: _e
          } = i;
          if (_e) {
            const {
              left: He,
              top: De,
              width: Dt,
              height: Nt
            } = _e.getBoundingClientRect(), ct = 14;
            if (He + Dt - ct < v.clientX && v.clientX < He + Dt && De + Nt - ct < v.clientY && v.clientY < De + Nt)
              return;
          }
        }
        v.preventDefault(), p.value || le();
      }
    }
    function an() {
      var v;
      T.value = !0, e.type === "textarea" && ((v = m.value) === null || v === void 0 || v.handleMouseEnterWrapper());
    }
    function Lt() {
      var v;
      T.value = !1, e.type === "textarea" && ((v = m.value) === null || v === void 0 || v.handleMouseLeaveWrapper());
    }
    function Ge() {
      L.value || K.value === "click" && (me.value = !me.value);
    }
    function pt(v) {
      if (L.value) return;
      v.preventDefault();
      const R = (_e) => {
        _e.preventDefault(), mt("mouseup", document, R);
      };
      if (Ot("mouseup", document, R), K.value !== "mousedown") return;
      me.value = !0;
      const ie = () => {
        me.value = !1, mt("mouseup", document, ie);
      };
      Ot("mouseup", document, ie);
    }
    function xt(v) {
      e.onKeyup && Pe(e.onKeyup, v);
    }
    function Zt(v) {
      switch (e.onKeydown && Pe(e.onKeydown, v), v.key) {
        case "Escape":
          J();
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
          value: _e
        } = U;
        if (_e) {
          e.internalDeactivateOnEnter && J();
          return;
        }
        v.preventDefault(), e.type === "textarea" ? (R = l.value) === null || R === void 0 || R.focus() : (ie = u.value) === null || ie === void 0 || ie.focus();
      }
    }
    function J() {
      e.passivelyActivated && (U.value = !1, Cn(() => {
        var v;
        (v = i.value) === null || v === void 0 || v.focus();
      }));
    }
    function le() {
      var v, R, ie;
      L.value || (e.passivelyActivated ? (v = i.value) === null || v === void 0 || v.focus() : ((R = l.value) === null || R === void 0 || R.focus(), (ie = u.value) === null || ie === void 0 || ie.focus()));
    }
    function Me() {
      var v;
      !((v = i.value) === null || v === void 0) && v.contains(document.activeElement) && document.activeElement.blur();
    }
    function Ie() {
      var v, R;
      (v = l.value) === null || v === void 0 || v.select(), (R = u.value) === null || R === void 0 || R.select();
    }
    function w() {
      L.value || (l.value ? l.value.focus() : u.value && u.value.focus());
    }
    function G() {
      const {
        value: v
      } = i;
      v != null && v.contains(document.activeElement) && v !== document.activeElement && J();
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
        autosize: _e
      } = e;
      if (!ie && _e)
        if (R === "textarea") {
          const {
            value: He
          } = s;
          He && (He.textContent = `${v ?? ""}\r
`);
        } else {
          const {
            value: He
          } = d;
          He && (v ? He.textContent = v : He.innerHTML = "&nbsp;");
        }
    }
    function qe() {
      Te();
    }
    const it = F({
      top: "0"
    });
    function _(v) {
      var R;
      const {
        scrollTop: ie
      } = v.target;
      it.value.top = `${-ie}px`, (R = m.value) === null || R === void 0 || R.syncUnifiedContainer();
    }
    let H = null;
    Ft(() => {
      const {
        autosize: v,
        type: R
      } = e;
      v && R === "textarea" ? H = ft(D, (ie) => {
        !Array.isArray(ie) && ie !== Y && fe(ie);
      }) : H == null || H();
    });
    let q = null;
    Ft(() => {
      e.type === "textarea" ? q = ft(D, (v) => {
        var R;
        !Array.isArray(v) && v !== Y && ((R = m.value) === null || R === void 0 || R.syncUnifiedContainer());
      }) : q == null || q();
    }), zn(Al, {
      mergedValueRef: D,
      maxlengthRef: Fe,
      mergedClsPrefixRef: n,
      countGraphemesRef: Ye(e, "countGraphemes")
    });
    const xe = {
      wrapperElRef: i,
      inputElRef: u,
      textareaElRef: l,
      isCompositing: I,
      clear: ue,
      focus: le,
      blur: Me,
      select: Ie,
      deactivate: G,
      activate: w,
      scrollTo: te
    }, Qe = Pa("Input", o, n), We = P(() => {
      const {
        value: v
      } = M, {
        common: {
          cubicBezierEaseInOut: R
        },
        self: {
          color: ie,
          borderRadius: _e,
          textColor: He,
          caretColor: De,
          caretColorError: Dt,
          caretColorWarning: Nt,
          textDecorationColor: ct,
          border: ln,
          borderDisabled: sn,
          borderHover: wn,
          borderFocus: mr,
          placeholderColor: pr,
          placeholderColorDisabled: gr,
          lineHeightTextarea: x,
          colorDisabled: W,
          colorFocus: se,
          textColorDisabled: ut,
          boxShadowFocus: Vt,
          iconSize: Ue,
          colorFocusWarning: Pn,
          boxShadowFocusWarning: Vn,
          borderWarning: _n,
          borderFocusWarning: So,
          borderHoverWarning: yo,
          colorFocusError: wo,
          boxShadowFocusError: Po,
          borderError: _o,
          borderFocusError: Do,
          borderHoverError: To,
          clearSize: ds,
          clearColor: cs,
          clearColorHover: us,
          clearColorPressed: fs,
          iconColor: hs,
          iconColorDisabled: ms,
          suffixTextColor: ps,
          countTextColor: gs,
          countTextColorDisabled: vs,
          iconColorHover: Cs,
          iconColorPressed: bs,
          loadingColor: xs,
          loadingColorError: Ss,
          loadingColorWarning: ys,
          fontWeight: ws,
          [Se("padding", v)]: Ps,
          [Se("fontSize", v)]: _s,
          [Se("height", v)]: Ds
        }
      } = a.value, {
        left: Ts,
        right: Ms
      } = Xn(Ps);
      return {
        "--n-bezier": R,
        "--n-count-text-color": gs,
        "--n-count-text-color-disabled": vs,
        "--n-color": ie,
        "--n-font-size": _s,
        "--n-font-weight": ws,
        "--n-border-radius": _e,
        "--n-height": Ds,
        "--n-padding-left": Ts,
        "--n-padding-right": Ms,
        "--n-text-color": He,
        "--n-caret-color": De,
        "--n-text-decoration-color": ct,
        "--n-border": ln,
        "--n-border-disabled": sn,
        "--n-border-hover": wn,
        "--n-border-focus": mr,
        "--n-placeholder-color": pr,
        "--n-placeholder-color-disabled": gr,
        "--n-icon-size": Ue,
        "--n-line-height-textarea": x,
        "--n-color-disabled": W,
        "--n-color-focus": se,
        "--n-text-color-disabled": ut,
        "--n-box-shadow-focus": Vt,
        "--n-loading-color": xs,
        // form warning
        "--n-caret-color-warning": Nt,
        "--n-color-focus-warning": Pn,
        "--n-box-shadow-focus-warning": Vn,
        "--n-border-warning": _n,
        "--n-border-focus-warning": So,
        "--n-border-hover-warning": yo,
        "--n-loading-color-warning": ys,
        // form error
        "--n-caret-color-error": Dt,
        "--n-color-focus-error": wo,
        "--n-box-shadow-focus-error": Po,
        "--n-border-error": _o,
        "--n-border-focus-error": Do,
        "--n-border-hover-error": To,
        "--n-loading-color-error": Ss,
        // clear-button
        "--n-clear-color": cs,
        "--n-clear-size": ds,
        "--n-clear-color-hover": us,
        "--n-clear-color-pressed": fs,
        "--n-icon-color": hs,
        "--n-icon-color-hover": Cs,
        "--n-icon-color-pressed": bs,
        "--n-icon-color-disabled": ms,
        "--n-suffix-text-color": ps
      };
    }), Ae = r ? $n("input", P(() => {
      const {
        value: v
      } = M;
      return v[0];
    }), We, e) : void 0;
    return Object.assign(Object.assign({}, xe), {
      // DOM ref
      wrapperElRef: i,
      inputElRef: u,
      inputMirrorElRef: d,
      inputEl2Ref: f,
      textareaElRef: l,
      textareaMirrorElRef: s,
      textareaScrollbarInstRef: m,
      // value
      rtlEnabled: Qe,
      uncontrolledValue: y,
      mergedValue: D,
      passwordVisible: me,
      mergedPlaceholder: z,
      showPlaceholder1: S,
      showPlaceholder2: A,
      mergedFocus: Z,
      isComposing: I,
      activated: U,
      showClearButton: re,
      mergedSize: M,
      mergedDisabled: L,
      textDecorationStyle: ve,
      mergedClsPrefix: n,
      mergedBordered: t,
      mergedShowPasswordOn: K,
      placeholderStyle: it,
      mergedStatus: V,
      textAreaScrollContainerWidth: de,
      // methods
      handleTextAreaScroll: _,
      handleCompositionStart: Pt,
      handleCompositionEnd: zt,
      handleInput: bt,
      handleInputBlur: Oe,
      handleInputFocus: ze,
      handleWrapperBlur: et,
      handleWrapperFocus: qt,
      handleMouseEnter: an,
      handleMouseLeave: Lt,
      handleMouseDown: Ee,
      handleChange: at,
      handleClick: ht,
      handleClear: O,
      handlePasswordToggleClick: Ge,
      handlePasswordToggleMousedown: pt,
      handleWrapperKeydown: Zt,
      handleWrapperKeyup: xt,
      handleTextAreaMirrorResize: qe,
      getTextareaScrollContainer: () => l.value,
      mergedTheme: a,
      cssVars: r ? void 0 : We,
      themeClass: Ae == null ? void 0 : Ae.themeClass,
      onRender: Ae == null ? void 0 : Ae.onRender
    });
  },
  render() {
    var e, n;
    const {
      mergedClsPrefix: t,
      mergedStatus: r,
      themeClass: o,
      type: a,
      countGraphemes: i,
      onRender: l
    } = this, s = this.$slots;
    return l == null || l(), c("div", {
      ref: "wrapperElRef",
      class: [`${t}-input`, o, r && `${t}-input--${r}-status`, {
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
    }, vn(s.prefix, (d) => d && c("div", {
      class: `${t}-input__prefix`
    }, d)), a === "textarea" ? c(Kt, {
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
        } = this, h = {
          width: this.autosize && f && `${f}px`
        };
        return c(fo, null, c("textarea", Object.assign({}, this.inputProps, {
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
          style: [this.textDecorationStyle[0], (u = this.inputProps) === null || u === void 0 ? void 0 : u.style, h],
          onBlur: this.handleInputBlur,
          onFocus: (g) => {
            this.handleInputFocus(g, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? c("div", {
          class: `${t}-input__placeholder`,
          style: [this.placeholderStyle, h],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? c(Mr, {
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
      style: [this.textDecorationStyle[0], (n = this.inputProps) === null || n === void 0 ? void 0 : n.style],
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
    }, " ") : null), !this.pair && vn(s.suffix, (d) => d || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? c("div", {
      class: `${t}-input__suffix`
    }, [vn(s["clear-icon-placeholder"], (u) => (this.clearable || u) && c(oa, {
      clsPrefix: t,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => u,
      icon: () => {
        var f, h;
        return (h = (f = this.$slots)["clear-icon"]) === null || h === void 0 ? void 0 : h.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? c(Nh, {
      clsPrefix: t,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? c(yi, null, {
      default: (u) => {
        var f;
        const {
          renderCount: h
        } = this;
        return h ? h(u) : (f = s.count) === null || f === void 0 ? void 0 : f.call(s, u);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? c("div", {
      class: `${t}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? ke(s["password-visible-icon"], () => [c(bn, {
      clsPrefix: t
    }, {
      default: () => c(gh, null)
    })]) : ke(s["password-invisible-icon"], () => [c(bn, {
      clsPrefix: t
    }, {
      default: () => c(vh, null)
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
    }, c("span", null, this.mergedPlaceholder[1])) : null), vn(s.suffix, (d) => (this.clearable || d) && c("div", {
      class: `${t}-input__suffix`
    }, [this.clearable && c(oa, {
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
    }) : null, this.showCount && a === "textarea" ? c(yi, null, {
      default: (d) => {
        var u;
        const {
          renderCount: f
        } = this;
        return f ? f(d) : (u = s.count) === null || u === void 0 ? void 0 : u.call(s, d);
      }
    }) : null);
  }
}), em = {
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
function $l(e) {
  const {
    heightTiny: n,
    heightSmall: t,
    heightMedium: r,
    heightLarge: o,
    borderRadius: a,
    fontSizeTiny: i,
    fontSizeSmall: l,
    fontSizeMedium: s,
    fontSizeLarge: d,
    opacityDisabled: u,
    textColor2: f,
    textColor3: h,
    primaryColorHover: g,
    primaryColorPressed: m,
    borderColor: C,
    primaryColor: y,
    baseColor: b,
    infoColor: D,
    infoColorHover: E,
    infoColorPressed: M,
    successColor: L,
    successColorHover: V,
    successColorPressed: p,
    warningColor: T,
    warningColorHover: I,
    warningColorPressed: U,
    errorColor: Y,
    errorColorHover: z,
    errorColorPressed: S,
    fontWeight: A,
    buttonColor2: Z,
    buttonColor2Hover: re,
    buttonColor2Pressed: K,
    fontWeightStrong: me
  } = e;
  return Object.assign(Object.assign({}, em), {
    heightTiny: n,
    heightSmall: t,
    heightMedium: r,
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
    colorSecondary: Z,
    colorSecondaryHover: re,
    colorSecondaryPressed: K,
    // tertiary
    colorTertiary: Z,
    colorTertiaryHover: re,
    colorTertiaryPressed: K,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: re,
    colorQuaternaryPressed: K,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: f,
    textColorTertiary: h,
    textColorHover: g,
    textColorPressed: m,
    textColorFocus: g,
    textColorDisabled: f,
    textColorText: f,
    textColorTextHover: g,
    textColorTextPressed: m,
    textColorTextFocus: g,
    textColorTextDisabled: f,
    textColorGhost: f,
    textColorGhostHover: g,
    textColorGhostPressed: m,
    textColorGhostFocus: g,
    textColorGhostDisabled: f,
    border: `1px solid ${C}`,
    borderHover: `1px solid ${g}`,
    borderPressed: `1px solid ${m}`,
    borderFocus: `1px solid ${g}`,
    borderDisabled: `1px solid ${C}`,
    rippleColor: y,
    // primary
    colorPrimary: y,
    colorHoverPrimary: g,
    colorPressedPrimary: m,
    colorFocusPrimary: g,
    colorDisabledPrimary: y,
    textColorPrimary: b,
    textColorHoverPrimary: b,
    textColorPressedPrimary: b,
    textColorFocusPrimary: b,
    textColorDisabledPrimary: b,
    textColorTextPrimary: y,
    textColorTextHoverPrimary: g,
    textColorTextPressedPrimary: m,
    textColorTextFocusPrimary: g,
    textColorTextDisabledPrimary: f,
    textColorGhostPrimary: y,
    textColorGhostHoverPrimary: g,
    textColorGhostPressedPrimary: m,
    textColorGhostFocusPrimary: g,
    textColorGhostDisabledPrimary: y,
    borderPrimary: `1px solid ${y}`,
    borderHoverPrimary: `1px solid ${g}`,
    borderPressedPrimary: `1px solid ${m}`,
    borderFocusPrimary: `1px solid ${g}`,
    borderDisabledPrimary: `1px solid ${y}`,
    rippleColorPrimary: y,
    // info
    colorInfo: D,
    colorHoverInfo: E,
    colorPressedInfo: M,
    colorFocusInfo: E,
    colorDisabledInfo: D,
    textColorInfo: b,
    textColorHoverInfo: b,
    textColorPressedInfo: b,
    textColorFocusInfo: b,
    textColorDisabledInfo: b,
    textColorTextInfo: D,
    textColorTextHoverInfo: E,
    textColorTextPressedInfo: M,
    textColorTextFocusInfo: E,
    textColorTextDisabledInfo: f,
    textColorGhostInfo: D,
    textColorGhostHoverInfo: E,
    textColorGhostPressedInfo: M,
    textColorGhostFocusInfo: E,
    textColorGhostDisabledInfo: D,
    borderInfo: `1px solid ${D}`,
    borderHoverInfo: `1px solid ${E}`,
    borderPressedInfo: `1px solid ${M}`,
    borderFocusInfo: `1px solid ${E}`,
    borderDisabledInfo: `1px solid ${D}`,
    rippleColorInfo: D,
    // success
    colorSuccess: L,
    colorHoverSuccess: V,
    colorPressedSuccess: p,
    colorFocusSuccess: V,
    colorDisabledSuccess: L,
    textColorSuccess: b,
    textColorHoverSuccess: b,
    textColorPressedSuccess: b,
    textColorFocusSuccess: b,
    textColorDisabledSuccess: b,
    textColorTextSuccess: L,
    textColorTextHoverSuccess: V,
    textColorTextPressedSuccess: p,
    textColorTextFocusSuccess: V,
    textColorTextDisabledSuccess: f,
    textColorGhostSuccess: L,
    textColorGhostHoverSuccess: V,
    textColorGhostPressedSuccess: p,
    textColorGhostFocusSuccess: V,
    textColorGhostDisabledSuccess: L,
    borderSuccess: `1px solid ${L}`,
    borderHoverSuccess: `1px solid ${V}`,
    borderPressedSuccess: `1px solid ${p}`,
    borderFocusSuccess: `1px solid ${V}`,
    borderDisabledSuccess: `1px solid ${L}`,
    rippleColorSuccess: L,
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
    colorHoverError: z,
    colorPressedError: S,
    colorFocusError: z,
    colorDisabledError: Y,
    textColorError: b,
    textColorHoverError: b,
    textColorPressedError: b,
    textColorFocusError: b,
    textColorDisabledError: b,
    textColorTextError: Y,
    textColorTextHoverError: z,
    textColorTextPressedError: S,
    textColorTextFocusError: z,
    textColorTextDisabledError: f,
    textColorGhostError: Y,
    textColorGhostHoverError: z,
    textColorGhostPressedError: S,
    textColorGhostFocusError: z,
    textColorGhostDisabledError: Y,
    borderError: `1px solid ${Y}`,
    borderHoverError: `1px solid ${z}`,
    borderPressedError: `1px solid ${S}`,
    borderFocusError: `1px solid ${z}`,
    borderDisabledError: `1px solid ${Y}`,
    rippleColorError: Y,
    waveOpacity: "0.6",
    fontWeight: A,
    fontWeightStrong: me
  });
}
const Oa = {
  name: "Button",
  common: fr,
  self: $l
}, $t = {
  name: "Button",
  common: B,
  self(e) {
    const n = $l(e);
    return n.waveOpacity = "0.8", n.colorOpacitySecondary = "0.16", n.colorOpacitySecondaryHover = "0.2", n.colorOpacitySecondaryPressed = "0.12", n;
  }
}, tm = {
  itemFontSize: "12px",
  itemHeight: "36px",
  itemWidth: "52px",
  panelActionPadding: "8px 0"
};
function Hl(e) {
  const {
    popoverColor: n,
    textColor2: t,
    primaryColor: r,
    hoverColor: o,
    dividerColor: a,
    opacityDisabled: i,
    boxShadow2: l,
    borderRadius: s,
    iconColor: d,
    iconColorDisabled: u
  } = e;
  return Object.assign(Object.assign({}, tm), {
    panelColor: n,
    panelBoxShadow: l,
    panelDividerColor: a,
    itemTextColor: t,
    itemTextColorActive: r,
    itemColorHover: o,
    itemOpacityDisabled: i,
    itemBorderRadius: s,
    borderRadius: s,
    iconColor: d,
    iconColorDisabled: u
  });
}
const zl = {
  name: "TimePicker",
  common: fr,
  peers: {
    Scrollbar: Da,
    Button: Oa,
    Input: Ma
  },
  self: Hl
}, Bl = {
  name: "TimePicker",
  common: B,
  peers: {
    Scrollbar: At,
    Button: $t,
    Input: Gt
  },
  self: Hl
}, nm = {
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
function Ll(e) {
  const {
    hoverColor: n,
    fontSize: t,
    textColor2: r,
    textColorDisabled: o,
    popoverColor: a,
    primaryColor: i,
    borderRadiusSmall: l,
    iconColor: s,
    iconColorDisabled: d,
    textColor1: u,
    dividerColor: f,
    boxShadow2: h,
    borderRadius: g,
    fontWeightStrong: m
  } = e;
  return Object.assign(Object.assign({}, nm), {
    itemFontSize: t,
    calendarDaysFontSize: t,
    calendarTitleFontSize: t,
    itemTextColor: r,
    itemTextColorDisabled: o,
    itemTextColorActive: a,
    itemTextColorCurrent: i,
    itemColorIncluded: Q(i, {
      alpha: 0.1
    }),
    itemColorHover: n,
    itemColorDisabled: n,
    itemColorActive: i,
    itemBorderRadius: l,
    panelColor: a,
    panelTextColor: r,
    arrowColor: s,
    calendarTitleTextColor: u,
    calendarTitleColorHover: n,
    calendarDaysTextColor: r,
    panelHeaderDividerColor: f,
    calendarDaysDividerColor: f,
    calendarDividerColor: f,
    panelActionDividerColor: f,
    panelBoxShadow: h,
    panelBorderRadius: g,
    calendarTitleFontWeight: m,
    scrollItemBorderRadius: g,
    iconColor: s,
    iconColorDisabled: d
  });
}
const rm = {
  name: "DatePicker",
  common: fr,
  peers: {
    Input: Ma,
    Button: Oa,
    TimePicker: zl,
    Scrollbar: Da
  },
  self: Ll
}, om = {
  name: "DatePicker",
  common: B,
  peers: {
    Input: Gt,
    Button: $t,
    TimePicker: Bl,
    Scrollbar: At
  },
  self(e) {
    const {
      popoverColor: n,
      hoverColor: t,
      primaryColor: r
    } = e, o = Ll(e);
    return o.itemColorDisabled = ne(n, t), o.itemColorIncluded = Q(r, {
      alpha: 0.15
    }), o.itemColorHover = ne(n, t), o;
  }
}, bo = "n-date-picker";
function Tn(e) {
  return ne(e, [255, 255, 255, 0.16]);
}
function Yr(e) {
  return ne(e, [0, 0, 0, 0.12]);
}
const am = "n-button-group", im = $([oe("button", `
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
 `, [ae("color", [N("border", {
  borderColor: "var(--n-border-color)"
}), ae("disabled", [N("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Wt("disabled", [$("&:focus", [N("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), $("&:hover", [N("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), $("&:active", [N("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), ae("pressed", [N("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), ae("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [N("border", {
  border: "var(--n-border-disabled)"
})]), Wt("disabled", [$("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [N("state-border", {
  border: "var(--n-border-focus)"
})]), $("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [N("state-border", {
  border: "var(--n-border-hover)"
})]), $("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [N("state-border", {
  border: "var(--n-border-pressed)"
})]), ae("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [N("state-border", {
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
})]), go && "MozBoxSizing" in document.createElement("div").style ? $("&::moz-focus-inner", {
  border: 0
}) : null, N("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), N("border", {
  border: "var(--n-border)"
}), N("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), N("icon", `
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
 `, [lo({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), Vh()]), N("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [$("~", [N("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), ae("block", `
 display: flex;
 width: 100%;
 `), ae("dashed", [N("border, state-border", {
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
var lm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const sm = Object.assign(Object.assign({}, Qt.props), {
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
    default: !kl
  }
}), wt = Ce({
  name: "Button",
  props: sm,
  slots: Object,
  setup(e) {
    lm.NODE_ENV !== "production" && Ft(() => {
      const {
        dashed: M,
        ghost: L,
        text: V,
        secondary: p,
        tertiary: T,
        quaternary: I
      } = e;
      (M || L || V) && (p || T || I) && yn("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const n = F(null), t = F(null), r = F(!1), o = Yt(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = Xe(am, {}), {
      mergedSizeRef: i
    } = vo({}, {
      defaultSize: "medium",
      mergedSize: (M) => {
        const {
          size: L
        } = e;
        if (L) return L;
        const {
          size: V
        } = a;
        if (V) return V;
        const {
          mergedSize: p
        } = M || {};
        return p ? p.value : "medium";
      }
    }), l = P(() => e.focusable && !e.disabled), s = (M) => {
      var L;
      l.value || M.preventDefault(), !e.nativeFocusBehavior && (M.preventDefault(), !e.disabled && l.value && ((L = n.value) === null || L === void 0 || L.focus({
        preventScroll: !0
      })));
    }, d = (M) => {
      var L;
      if (!e.disabled && !e.loading) {
        const {
          onClick: V
        } = e;
        V && Pe(V, M), e.text || (L = t.value) === null || L === void 0 || L.play();
      }
    }, u = (M) => {
      switch (M.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          r.value = !1;
      }
    }, f = (M) => {
      switch (M.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            M.preventDefault();
            return;
          }
          r.value = !0;
      }
    }, h = () => {
      r.value = !1;
    }, {
      inlineThemeDisabled: g,
      mergedClsPrefixRef: m,
      mergedRtlRef: C
    } = Fr(e), y = Qt("Button", "-button", im, Oa, e, m), b = Pa("Button", C, m), D = P(() => {
      const M = y.value, {
        common: {
          cubicBezierEaseInOut: L,
          cubicBezierEaseOut: V
        },
        self: p
      } = M, {
        rippleDuration: T,
        opacityDisabled: I,
        fontWeight: U,
        fontWeightStrong: Y
      } = p, z = i.value, {
        dashed: S,
        type: A,
        ghost: Z,
        text: re,
        color: K,
        round: me,
        circle: ve,
        textColor: de,
        secondary: Te,
        tertiary: Fe,
        quaternary: Je,
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
      const Ne = A === "tertiary", nt = A === "default", he = Ne ? "default" : A;
      if (re) {
        const Oe = de || K;
        pe = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Oe || p[Se("textColorText", he)],
          "--n-text-color-hover": Oe ? Tn(Oe) : p[Se("textColorTextHover", he)],
          "--n-text-color-pressed": Oe ? Yr(Oe) : p[Se("textColorTextPressed", he)],
          "--n-text-color-focus": Oe ? Tn(Oe) : p[Se("textColorTextHover", he)],
          "--n-text-color-disabled": Oe || p[Se("textColorTextDisabled", he)]
        };
      } else if (Z || S) {
        const Oe = de || K;
        pe = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": K || p[Se("rippleColor", he)],
          "--n-text-color": Oe || p[Se("textColorGhost", he)],
          "--n-text-color-hover": Oe ? Tn(Oe) : p[Se("textColorGhostHover", he)],
          "--n-text-color-pressed": Oe ? Yr(Oe) : p[Se("textColorGhostPressed", he)],
          "--n-text-color-focus": Oe ? Tn(Oe) : p[Se("textColorGhostHover", he)],
          "--n-text-color-disabled": Oe || p[Se("textColorGhostDisabled", he)]
        };
      } else if (Te) {
        const Oe = nt ? p.textColor : Ne ? p.textColorTertiary : p[Se("color", he)], ze = K || Oe, et = A !== "default" && A !== "tertiary";
        pe = {
          "--n-color": et ? Q(ze, {
            alpha: Number(p.colorOpacitySecondary)
          }) : p.colorSecondary,
          "--n-color-hover": et ? Q(ze, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-pressed": et ? Q(ze, {
            alpha: Number(p.colorOpacitySecondaryPressed)
          }) : p.colorSecondaryPressed,
          "--n-color-focus": et ? Q(ze, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-disabled": p.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": ze,
          "--n-text-color-hover": ze,
          "--n-text-color-pressed": ze,
          "--n-text-color-focus": ze,
          "--n-text-color-disabled": ze
        };
      } else if (Fe || Je) {
        const Oe = nt ? p.textColor : Ne ? p.textColorTertiary : p[Se("color", he)], ze = K || Oe;
        Fe ? (pe["--n-color"] = p.colorTertiary, pe["--n-color-hover"] = p.colorTertiaryHover, pe["--n-color-pressed"] = p.colorTertiaryPressed, pe["--n-color-focus"] = p.colorSecondaryHover, pe["--n-color-disabled"] = p.colorTertiary) : (pe["--n-color"] = p.colorQuaternary, pe["--n-color-hover"] = p.colorQuaternaryHover, pe["--n-color-pressed"] = p.colorQuaternaryPressed, pe["--n-color-focus"] = p.colorQuaternaryHover, pe["--n-color-disabled"] = p.colorQuaternary), pe["--n-ripple-color"] = "#0000", pe["--n-text-color"] = ze, pe["--n-text-color-hover"] = ze, pe["--n-text-color-pressed"] = ze, pe["--n-text-color-focus"] = ze, pe["--n-text-color-disabled"] = ze;
      } else
        pe = {
          "--n-color": K || p[Se("color", he)],
          "--n-color-hover": K ? Tn(K) : p[Se("colorHover", he)],
          "--n-color-pressed": K ? Yr(K) : p[Se("colorPressed", he)],
          "--n-color-focus": K ? Tn(K) : p[Se("colorFocus", he)],
          "--n-color-disabled": K || p[Se("colorDisabled", he)],
          "--n-ripple-color": K || p[Se("rippleColor", he)],
          "--n-text-color": de || (K ? p.textColorPrimary : Ne ? p.textColorTertiary : p[Se("textColor", he)]),
          "--n-text-color-hover": de || (K ? p.textColorHoverPrimary : p[Se("textColorHover", he)]),
          "--n-text-color-pressed": de || (K ? p.textColorPressedPrimary : p[Se("textColorPressed", he)]),
          "--n-text-color-focus": de || (K ? p.textColorFocusPrimary : p[Se("textColorFocus", he)]),
          "--n-text-color-disabled": de || (K ? p.textColorDisabledPrimary : p[Se("textColorDisabled", he)])
        };
      let Ct = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      re ? Ct = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : Ct = {
        "--n-border": p[Se("border", he)],
        "--n-border-hover": p[Se("borderHover", he)],
        "--n-border-pressed": p[Se("borderPressed", he)],
        "--n-border-focus": p[Se("borderFocus", he)],
        "--n-border-disabled": p[Se("borderDisabled", he)]
      };
      const {
        [Se("height", z)]: ye,
        [Se("fontSize", z)]: rt,
        [Se("padding", z)]: ot,
        [Se("paddingRound", z)]: Et,
        [Se("iconSize", z)]: Ht,
        [Se("borderRadius", z)]: Pt,
        [Se("iconMargin", z)]: zt,
        waveOpacity: bt
      } = p, Bt = {
        "--n-width": ve && !re ? ye : "initial",
        "--n-height": re ? "initial" : ye,
        "--n-font-size": rt,
        "--n-padding": ve || re ? "initial" : me ? Et : ot,
        "--n-icon-size": Ht,
        "--n-icon-margin": zt,
        "--n-border-radius": re ? "initial" : ve || me ? ye : Pt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": L,
        "--n-bezier-ease-out": V,
        "--n-ripple-duration": T,
        "--n-opacity-disabled": I,
        "--n-wave-opacity": bt
      }, we), pe), Ct), Bt);
    }), E = g ? $n("button", P(() => {
      let M = "";
      const {
        dashed: L,
        type: V,
        ghost: p,
        text: T,
        color: I,
        round: U,
        circle: Y,
        textColor: z,
        secondary: S,
        tertiary: A,
        quaternary: Z,
        strong: re
      } = e;
      L && (M += "a"), p && (M += "b"), T && (M += "c"), U && (M += "d"), Y && (M += "e"), S && (M += "f"), A && (M += "g"), Z && (M += "h"), re && (M += "i"), I && (M += `j${ci(I)}`), z && (M += `k${ci(z)}`);
      const {
        value: K
      } = i;
      return M += `l${K[0]}`, M += `m${V[0]}`, M;
    }), D, e) : void 0;
    return {
      selfElRef: n,
      waveElRef: t,
      mergedClsPrefix: m,
      mergedFocusable: l,
      mergedSize: i,
      showBorder: o,
      enterPressed: r,
      rtlEnabled: b,
      handleMousedown: s,
      handleKeydown: f,
      handleBlur: h,
      handleKeyup: u,
      handleClick: d,
      customColorCssVars: P(() => {
        const {
          color: M
        } = e;
        if (!M) return null;
        const L = Tn(M);
        return {
          "--n-border-color": M,
          "--n-border-color-hover": L,
          "--n-border-color-pressed": Yr(M),
          "--n-border-color-focus": L,
          "--n-border-color-disabled": M
        };
      }),
      cssVars: g ? void 0 : D,
      themeClass: E == null ? void 0 : E.themeClass,
      onRender: E == null ? void 0 : E.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      tag: n,
      onRender: t
    } = this;
    t == null || t();
    const r = vn(this.$slots.default, (o) => o && c("span", {
      class: `${e}-button__content`
    }, o));
    return c(n, {
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
    }, this.iconPlacement === "right" && r, c(yh, {
      width: !0
    }, {
      default: () => vn(this.$slots.icon, (o) => (this.loading || this.renderIcon || o) && c("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Mf(this.$slots.default) ? "0" : ""
        }
      }, c(_a, null, {
        default: () => this.loading ? c(Dl, {
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
    }), this.iconPlacement === "left" && r, this.text ? null : c(Uh, {
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
}), xn = wt, Hn = 40, dm = {
  date: Ks,
  month: Ir,
  year: el,
  quarter: Ji
};
function cm(e) {
  return (n, t) => {
    const r = (e + 1) % 7;
    return Zi(n, t, {
      weekStartsOn: r
    });
  };
}
function Tt(e, n, t, r = 0) {
  return (t === "week" ? cm(r) : dm[t])(e, n);
}
function zo(e, n, t, r, o, a) {
  return o === "date" ? um(e, n, t, r) : fm(e, n, t, r, a);
}
function um(e, n, t, r) {
  let o = !1, a = !1, i = !1;
  Array.isArray(t) && (t[0] < e && e < t[1] && (o = !0), Tt(t[0], e, "date") && (a = !0), Tt(t[1], e, "date") && (i = !0));
  const l = t !== null && (Array.isArray(t) ? Tt(t[0], e, "date") || Tt(t[1], e, "date") : Tt(t, e, "date"));
  return {
    type: "date",
    dateObject: {
      date: jt(e),
      month: je(e),
      year: Ke(e)
    },
    inCurrentMonth: Ir(e, n),
    isCurrentDate: Tt(r, e, "date"),
    inSpan: o,
    inSelectedWeek: !1,
    startOfSpan: a,
    endOfSpan: i,
    selected: l,
    ts: j(e)
  };
}
function Nl(e, n, t) {
  const r = new Date(2e3, e, 1).getTime();
  return Le(r, n, {
    locale: t
  });
}
function Wl(e, n, t) {
  const r = new Date(e, 1, 1).getTime();
  return Le(r, n, {
    locale: t
  });
}
function Vl(e, n, t) {
  const r = new Date(2e3, e * 3 - 2, 1).getTime();
  return Le(r, n, {
    locale: t
  });
}
function fm(e, n, t, r, o) {
  let a = !1, i = !1, l = !1;
  Array.isArray(t) && (t[0] < e && e < t[1] && (a = !0), Tt(t[0], e, "week", o) && (i = !0), Tt(t[1], e, "week", o) && (l = !0));
  const s = t !== null && (Array.isArray(t) ? Tt(t[0], e, "week", o) || Tt(t[1], e, "week", o) : Tt(t, e, "week", o));
  return {
    type: "date",
    dateObject: {
      date: jt(e),
      month: je(e),
      year: Ke(e)
    },
    inCurrentMonth: Ir(e, n),
    isCurrentDate: Tt(r, e, "date"),
    inSpan: a,
    startOfSpan: i,
    endOfSpan: l,
    selected: !1,
    inSelectedWeek: s,
    ts: j(e)
  };
}
function hm(e, n, t, {
  monthFormat: r
}) {
  return {
    type: "month",
    monthFormat: r,
    dateObject: {
      month: je(e),
      year: Ke(e)
    },
    isCurrent: Ir(t, e),
    selected: n !== null && Tt(n, e, "month"),
    ts: j(e)
  };
}
function mm(e, n, t, {
  yearFormat: r
}) {
  return {
    type: "year",
    yearFormat: r,
    dateObject: {
      year: Ke(e)
    },
    isCurrent: el(t, e),
    selected: n !== null && Tt(n, e, "year"),
    ts: j(e)
  };
}
function pm(e, n, t, {
  quarterFormat: r
}) {
  return {
    type: "quarter",
    quarterFormat: r,
    dateObject: {
      quarter: Qs(e),
      year: Ke(e)
    },
    isCurrent: Ji(t, e),
    selected: n !== null && Tt(n, e, "quarter"),
    ts: j(e)
  };
}
function aa(e, n, t, r, o = !1, a = !1) {
  const i = a ? "week" : "date", l = je(e);
  let s = j(dn(e)), d = j(Kn(s, -1));
  const u = [];
  let f = !o;
  for (; Vd(d) !== r || f; )
    u.unshift(zo(d, e, n, t, i, r)), d = j(Kn(d, -1)), f = !1;
  for (; je(s) === l; )
    u.push(zo(s, e, n, t, i, r)), s = j(Kn(s, 1));
  const h = o ? u.length <= 28 ? 28 : u.length <= 35 ? 35 : 42 : 42;
  for (; u.length < h; )
    u.push(zo(s, e, n, t, i, r)), s = j(Kn(s, 1));
  return u;
}
function ia(e, n, t, r) {
  const o = [], a = Er(e);
  for (let i = 0; i < 12; i++)
    o.push(hm(j(gt(a, i)), n, t, r));
  return o;
}
function la(e, n, t, r) {
  const o = [], a = Er(e);
  for (let i = 0; i < 4; i++)
    o.push(pm(j(qs(a, i)), n, t, r));
  return o;
}
function sa(e, n, t, r) {
  const o = r.value, a = [], i = Er(Xo(/* @__PURE__ */ new Date(), o[0]));
  for (let l = 0; l < o[1] - o[0]; l++)
    a.push(mm(j(Go(i, l)), e, n, t));
  return a;
}
function kt(e, n, t, r) {
  const o = Lc(e, n, t, r);
  return Ut(o) ? Le(o, n, r) === e ? o : new Date(Number.NaN) : o;
}
function Qr(e) {
  if (e === void 0)
    return;
  if (typeof e == "number")
    return e;
  const [n, t, r] = e.split(":");
  return {
    hours: Number(n),
    minutes: Number(t),
    seconds: Number(r)
  };
}
function Gn(e, n) {
  return Array.isArray(e) ? e[n === "start" ? 0 : 1] : null;
}
const gm = "HH:mm:ss", jl = {
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
    value: gm
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
function Ul(e) {
  const {
    dateLocaleRef: n,
    timePickerSizeRef: t,
    timePickerPropsRef: r,
    localeRef: o,
    mergedClsPrefixRef: a,
    mergedThemeRef: i
  } = Xe(bo), l = P(() => ({
    locale: n.value.locale
  })), s = F(null), d = al();
  function u() {
    const {
      onClear: z
    } = e;
    z && z();
  }
  function f() {
    const {
      onConfirm: z,
      value: S
    } = e;
    z && z(S);
  }
  function h(z, S) {
    const {
      onUpdateValue: A
    } = e;
    A(z, S);
  }
  function g(z = !1) {
    const {
      onClose: S
    } = e;
    S && S(z);
  }
  function m() {
    const {
      onTabOut: z
    } = e;
    z && z();
  }
  function C() {
    h(null, !0), g(!0), u();
  }
  function y() {
    m();
  }
  function b() {
    (e.active || e.panel) && Cn(() => {
      const {
        value: z
      } = s;
      if (!z) return;
      const S = z.querySelectorAll("[data-n-date]");
      S.forEach((A) => {
        A.classList.add("transition-disabled");
      }), z.offsetWidth, S.forEach((A) => {
        A.classList.remove("transition-disabled");
      });
    });
  }
  function D(z) {
    z.key === "Tab" && z.target === s.value && d.shift && (z.preventDefault(), m());
  }
  function E(z) {
    const {
      value: S
    } = s;
    d.tab && z.target === S && (S != null && S.contains(z.relatedTarget)) && m();
  }
  let M = null, L = !1;
  function V() {
    M = e.value, L = !0;
  }
  function p() {
    L = !1;
  }
  function T() {
    L && (h(M, !1), L = !1);
  }
  function I(z) {
    return typeof z == "function" ? z() : z;
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
    timePickerProps: r,
    selfRef: s,
    locale: o,
    doConfirm: f,
    doClose: g,
    doUpdateValue: h,
    doTabOut: m,
    handleClearClick: C,
    handleFocusDetectorFocus: y,
    disableTransitionOneTick: b,
    handlePanelKeyDown: D,
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
const Ra = Object.assign(Object.assign({}, jl), {
  defaultCalendarStartTime: Number,
  actions: {
    type: Array,
    default: () => ["now", "clear", "confirm"]
  }
});
function Ea(e, n) {
  var t;
  const r = Ul(e), {
    isValueInvalidRef: o,
    isDateDisabledRef: a,
    isDateInvalidRef: i,
    isTimeInvalidRef: l,
    isDateTimeInvalidRef: s,
    isHourDisabledRef: d,
    isMinuteDisabledRef: u,
    isSecondDisabledRef: f,
    localeRef: h,
    firstDayOfWeekRef: g,
    datePickerSlots: m,
    yearFormatRef: C,
    monthFormatRef: y,
    quarterFormatRef: b,
    yearRangeRef: D
  } = Xe(bo), E = {
    isValueInvalid: o,
    isDateDisabled: a,
    isDateInvalid: i,
    isTimeInvalid: l,
    isDateTimeInvalid: s,
    isHourDisabled: d,
    isMinuteDisabled: u,
    isSecondDisabled: f
  }, M = P(() => e.dateFormat || h.value.dateFormat), L = P(() => e.calendarDayFormat || h.value.dayFormat), V = F(e.value === null || Array.isArray(e.value) ? "" : Le(e.value, M.value)), p = F(e.value === null || Array.isArray(e.value) ? (t = e.defaultCalendarStartTime) !== null && t !== void 0 ? t : Date.now() : e.value), T = F(null), I = F(null), U = F(null), Y = F(Date.now()), z = P(() => {
    var O;
    return aa(p.value, e.value, Y.value, (O = g.value) !== null && O !== void 0 ? O : h.value.firstDayOfWeek, !1, n === "week");
  }), S = P(() => {
    const {
      value: O
    } = e;
    return ia(p.value, Array.isArray(O) ? null : O, Y.value, {
      monthFormat: y.value
    });
  }), A = P(() => {
    const {
      value: O
    } = e;
    return sa(Array.isArray(O) ? null : O, Y.value, {
      yearFormat: C.value
    }, D);
  }), Z = P(() => {
    const {
      value: O
    } = e;
    return la(p.value, Array.isArray(O) ? null : O, Y.value, {
      quarterFormat: b.value
    });
  }), re = P(() => z.value.slice(0, 7).map((O) => {
    const {
      ts: ue
    } = O;
    return Le(ue, L.value, r.dateFnsOptions.value);
  })), K = P(() => Le(p.value, e.calendarHeaderMonthFormat || h.value.monthFormat, r.dateFnsOptions.value)), me = P(() => Le(p.value, e.calendarHeaderYearFormat || h.value.yearFormat, r.dateFnsOptions.value)), ve = P(() => {
    var O;
    return (O = e.calendarHeaderMonthBeforeYear) !== null && O !== void 0 ? O : h.value.monthBeforeYear;
  });
  ft(p, (O, ue) => {
    (n === "date" || n === "datetime") && (Ir(O, ue) || r.disableTransitionOneTick());
  }), ft(P(() => e.value), (O) => {
    O !== null && !Array.isArray(O) ? (V.value = Le(O, M.value, r.dateFnsOptions.value), p.value = O) : V.value = "";
  });
  function de(O) {
    var ue;
    if (n === "datetime") return j(ga(O));
    if (n === "month") return j(dn(O));
    if (n === "year") return j(Er(O));
    if (n === "quarter") return j(_r(O));
    if (n === "week") {
      const Ee = (((ue = g.value) !== null && ue !== void 0 ? ue : h.value.firstDayOfWeek) + 1) % 7;
      return j(Xt(O, {
        weekStartsOn: Ee
      }));
    }
    return j(tr(O));
  }
  function Te(O, ue) {
    const {
      isDateDisabled: {
        value: Ee
      }
    } = E;
    return Ee ? Ee(O, ue) : !1;
  }
  function Fe(O) {
    const ue = kt(O, M.value, /* @__PURE__ */ new Date(), r.dateFnsOptions.value);
    if (Ut(ue)) {
      if (e.value === null)
        r.doUpdateValue(j(de(Date.now())), e.panel);
      else if (!Array.isArray(e.value)) {
        const Ee = vt(e.value, {
          year: Ke(ue),
          month: je(ue),
          date: jt(ue)
        });
        r.doUpdateValue(j(de(j(Ee))), e.panel);
      }
    } else
      V.value = O;
  }
  function Je() {
    const O = kt(V.value, M.value, /* @__PURE__ */ new Date(), r.dateFnsOptions.value);
    if (Ut(O)) {
      if (e.value === null)
        r.doUpdateValue(j(de(Date.now())), !1);
      else if (!Array.isArray(e.value)) {
        const ue = vt(e.value, {
          year: Ke(O),
          month: je(O),
          date: jt(O)
        });
        r.doUpdateValue(j(de(j(ue))), !1);
      }
    } else
      rt();
  }
  function be() {
    r.doUpdateValue(null, !0), V.value = "", r.doClose(!0), r.handleClearClick();
  }
  function we() {
    r.doUpdateValue(j(de(Date.now())), !0);
    const O = Date.now();
    p.value = O, r.doClose(!0), e.panel && (n === "month" || n === "quarter" || n === "year") && (r.disableTransitionOneTick(), at(O));
  }
  const pe = F(null);
  function Ne(O) {
    O.type === "date" && n === "week" && (pe.value = de(j(O.ts)));
  }
  function nt(O) {
    return O.type === "date" && n === "week" ? de(j(O.ts)) === pe.value : !1;
  }
  function he(O) {
    if (Te(O.ts, O.type === "date" ? {
      type: "date",
      year: O.dateObject.year,
      month: O.dateObject.month,
      date: O.dateObject.date
    } : O.type === "month" ? {
      type: "month",
      year: O.dateObject.year,
      month: O.dateObject.month
    } : O.type === "year" ? {
      type: "year",
      year: O.dateObject.year
    } : {
      type: "quarter",
      year: O.dateObject.year,
      quarter: O.dateObject.quarter
    }))
      return;
    let ue;
    if (e.value !== null && !Array.isArray(e.value) ? ue = e.value : ue = Date.now(), n === "datetime" && e.defaultTime !== null && !Array.isArray(e.defaultTime)) {
      const Ee = Qr(e.defaultTime);
      Ee && (ue = j(vt(ue, Ee)));
    }
    switch (ue = j(O.type === "quarter" && O.dateObject.quarter ? Vc(Xo(ue, O.dateObject.year), O.dateObject.quarter) : vt(ue, O.dateObject)), r.doUpdateValue(de(ue), e.panel || n === "date" || n === "week" || n === "year"), n) {
      case "date":
      case "week":
        r.doClose();
        break;
      case "year":
        e.panel && r.disableTransitionOneTick(), r.doClose();
        break;
      case "month":
        r.disableTransitionOneTick(), at(ue);
        break;
      case "quarter":
        r.disableTransitionOneTick(), at(ue);
        break;
    }
  }
  function Ct(O, ue) {
    let Ee;
    e.value !== null && !Array.isArray(e.value) ? Ee = e.value : Ee = Date.now(), Ee = j(O.type === "month" ? va(Ee, O.dateObject.month) : Xo(Ee, O.dateObject.year)), ue(Ee), at(Ee);
  }
  function ye(O) {
    p.value = O;
  }
  function rt(O) {
    if (e.value === null || Array.isArray(e.value)) {
      V.value = "";
      return;
    }
    O === void 0 && (O = e.value), V.value = Le(O, M.value, r.dateFnsOptions.value);
  }
  function ot() {
    E.isDateInvalid.value || E.isTimeInvalid.value || (r.doConfirm(), Et());
  }
  function Et() {
    e.active && r.doClose();
  }
  function Ht() {
    var O;
    p.value = j(Go(p.value, 1)), (O = e.onNextYear) === null || O === void 0 || O.call(e);
  }
  function Pt() {
    var O;
    p.value = j(Go(p.value, -1)), (O = e.onPrevYear) === null || O === void 0 || O.call(e);
  }
  function zt() {
    var O;
    p.value = j(gt(p.value, 1)), (O = e.onNextMonth) === null || O === void 0 || O.call(e);
  }
  function bt() {
    var O;
    p.value = j(gt(p.value, -1)), (O = e.onPrevMonth) === null || O === void 0 || O.call(e);
  }
  function Bt() {
    const {
      value: O
    } = T;
    return (O == null ? void 0 : O.listElRef) || null;
  }
  function Oe() {
    const {
      value: O
    } = T;
    return (O == null ? void 0 : O.itemsElRef) || null;
  }
  function ze() {
    var O;
    (O = I.value) === null || O === void 0 || O.sync();
  }
  function et(O) {
    O !== null && r.doUpdateValue(O, e.panel);
  }
  function qt(O) {
    r.cachePendingValue();
    const ue = r.getShortcutValue(O);
    typeof ue == "number" && r.doUpdateValue(ue, !1);
  }
  function _t(O) {
    const ue = r.getShortcutValue(O);
    typeof ue == "number" && (r.doUpdateValue(ue, e.panel), r.clearPendingValue(), ot());
  }
  function at(O) {
    const {
      value: ue
    } = e;
    if (U.value) {
      const Ee = je(O === void 0 ? ue === null ? Date.now() : ue : O);
      U.value.scrollTo({
        top: Ee * Hn
      });
    }
    if (T.value) {
      const Ee = Ke(O === void 0 ? ue === null ? Date.now() : ue : O) - D.value[0];
      T.value.scrollTo({
        top: Ee * Hn
      });
    }
  }
  const ht = {
    monthScrollbarRef: U,
    yearScrollbarRef: I,
    yearVlRef: T
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    dateArray: z,
    monthArray: S,
    yearArray: A,
    quarterArray: Z,
    calendarYear: me,
    calendarMonth: K,
    weekdays: re,
    calendarMonthBeforeYear: ve,
    mergedIsDateDisabled: Te,
    nextYear: Ht,
    prevYear: Pt,
    nextMonth: zt,
    prevMonth: bt,
    handleNowClick: we,
    handleConfirmClick: ot,
    handleSingleShortcutMouseenter: qt,
    handleSingleShortcutClick: _t
  }, E), r), ht), {
    // datetime only
    handleDateClick: he,
    handleDateInputBlur: Je,
    handleDateInput: Fe,
    handleDateMouseEnter: Ne,
    isWeekHovered: nt,
    handleTimePickerChange: et,
    clearSelectedDateTime: be,
    virtualListContainer: Bt,
    virtualListContent: Oe,
    handleVirtualListScroll: ze,
    timePickerSize: r.timePickerSize,
    dateInputValue: V,
    datePickerSlots: m,
    handleQuickMonthClick: Ct,
    justifyColumnsScrollState: at,
    calendarValue: p,
    onUpdateCalendarValue: ye
  });
}
const Yl = Ce({
  name: "MonthPanel",
  props: Object.assign(Object.assign({}, Ra), {
    type: {
      type: String,
      required: !0
    },
    // panelHeader prop
    useAsQuickJump: Boolean
  }),
  setup(e) {
    const n = Ea(e, e.type), {
      dateLocaleRef: t
    } = Ar("DatePicker"), r = (i) => {
      switch (i.type) {
        case "year":
          return Wl(i.dateObject.year, i.yearFormat, t.value.locale);
        case "month":
          return Nl(i.dateObject.month, i.monthFormat, t.value.locale);
        case "quarter":
          return Vl(i.dateObject.quarter, i.quarterFormat, t.value.locale);
      }
    }, {
      useAsQuickJump: o
    } = e, a = (i, l, s) => {
      const {
        mergedIsDateDisabled: d,
        handleDateClick: u,
        handleQuickMonthClick: f
      } = n;
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
          o ? f(i, (h) => {
            e.onUpdateValue(h, !1);
          }) : u(i);
        }
      }, r(i));
    };
    return on(() => {
      n.justifyColumnsScrollState();
    }), Object.assign(Object.assign({}, n), {
      renderItem: a
    });
  },
  render() {
    const {
      mergedClsPrefix: e,
      mergedTheme: n,
      shortcuts: t,
      actions: r,
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
    }, c(Kt, {
      ref: "yearScrollbarRef",
      class: `${e}-date-panel-month-calendar__picker-col`,
      theme: n.peers.Scrollbar,
      themeOverrides: n.peerOverrides.Scrollbar,
      container: this.virtualListContainer,
      content: this.virtualListContent,
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => c(na, {
        ref: "yearVlRef",
        items: this.yearArray,
        itemSize: Hn,
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
    }, c(Kt, {
      ref: "monthScrollbarRef",
      theme: n.peers.Scrollbar,
      themeOverrides: n.peerOverrides.Scrollbar
    }, {
      default: () => [(a === "month" ? this.monthArray : this.quarterArray).map((l, s) => o(l, s, e)), c("div", {
        class: `${e}-date-panel-${a}-calendar__padding`
      })]
    })) : null), vn(this.datePickerSlots.footer, (l) => l ? c("div", {
      class: `${e}-date-panel-footer`
    }, l) : null), r != null && r.length || t ? c("div", {
      class: `${e}-date-panel-actions`
    }, c("div", {
      class: `${e}-date-panel-actions__prefix`
    }, t && Object.keys(t).map((l) => {
      const s = t[l];
      return Array.isArray(s) ? null : c(xn, {
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
    }, r != null && r.includes("clear") ? Rt(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(wt, {
      theme: n.peers.Button,
      themeOverrides: n.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, r != null && r.includes("now") ? Rt(this.datePickerSlots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(wt, {
      theme: n.peers.Button,
      themeOverrides: n.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, r != null && r.includes("confirm") ? Rt(this.datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [c(wt, {
      theme: n.peers.Button,
      themeOverrides: n.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Ln, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), lr = Ce({
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
    const e = F(null), n = F(null), t = F(!1);
    function r(a) {
      var i;
      t.value && !(!((i = e.value) === null || i === void 0) && i.contains(ho(a))) && (t.value = !1);
    }
    function o() {
      t.value = !t.value;
    }
    return {
      show: t,
      triggerRef: e,
      monthPanelRef: n,
      handleHeaderClick: o,
      handleClickOutside: r
    };
  },
  render() {
    const {
      handleClickOutside: e,
      mergedClsPrefix: n
    } = this;
    return c("div", {
      class: `${n}-date-panel-month__month-year`,
      ref: "triggerRef"
    }, c(ba, null, {
      default: () => [c(xa, null, {
        default: () => c("div", {
          class: [`${n}-date-panel-month__text`, this.show && `${n}-date-panel-month__text--active`],
          onClick: this.handleHeaderClick
        }, this.monthBeforeYear ? [this.calendarMonth, this.monthYearSeparator, this.calendarYear] : [this.calendarYear, this.monthYearSeparator, this.calendarMonth])
      }), c(Sa, {
        show: this.show,
        teleportDisabled: !0
      }, {
        default: () => c(An, {
          name: "fade-in-scale-up-transition",
          appear: !0
        }, {
          default: () => this.show ? Rr(c(Yl, {
            ref: "monthPanelRef",
            onUpdateValue: this.onUpdateValue,
            actions: [],
            calendarHeaderMonthYearSeparator: this.monthYearSeparator,
            // month and year click show month type
            type: "month",
            key: "month",
            useAsQuickJump: !0,
            value: this.value
          }), [[Ca, e, void 0, {
            capture: !0
          }]]) : null
        })
      })]
    }));
  }
});
var vm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Cm = Ce({
  name: "DatePanel",
  props: Object.assign(Object.assign({}, Ra), {
    type: {
      type: String,
      required: !0
    }
  }),
  setup(e) {
    return vm.NODE_ENV !== "production" && Ft(() => {
      var n;
      !((n = e.actions) === null || n === void 0) && n.includes("confirm") && yn("date-picker", "The `confirm` action is not supported for n-date-picker of `date` type");
    }), Ea(e, e.type);
  },
  render() {
    var e, n, t;
    const {
      mergedClsPrefix: r,
      mergedTheme: o,
      shortcuts: a,
      onRender: i,
      datePickerSlots: l,
      type: s
    } = this;
    return i == null || i(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${r}-date-panel`, `${r}-date-panel--${s}`, !this.panel && `${r}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, c("div", {
      class: `${r}-date-panel-calendar`
    }, c("div", {
      class: `${r}-date-panel-month`
    }, c("div", {
      class: `${r}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, ke(l["prev-year"], () => [c(rr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, ke(l["prev-month"], () => [c(nr, null)])), c(lr, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix: r,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), c("div", {
      class: `${r}-date-panel-month__next`,
      onClick: this.nextMonth
    }, ke(l["next-month"], () => [c(ar, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, ke(l["next-year"], () => [c(or, null)]))), c("div", {
      class: `${r}-date-panel-weekdays`
    }, this.weekdays.map((d) => c("div", {
      key: d,
      class: `${r}-date-panel-weekdays__day`
    }, d))), c("div", {
      class: `${r}-date-panel-dates`
    }, this.dateArray.map((d, u) => c("div", {
      "data-n-date": !0,
      key: u,
      class: [`${r}-date-panel-date`, {
        [`${r}-date-panel-date--current`]: d.isCurrentDate,
        [`${r}-date-panel-date--selected`]: d.selected,
        [`${r}-date-panel-date--excluded`]: !d.inCurrentMonth,
        [`${r}-date-panel-date--disabled`]: this.mergedIsDateDisabled(d.ts, {
          type: "date",
          year: d.dateObject.year,
          month: d.dateObject.month,
          date: d.dateObject.date
        }),
        [`${r}-date-panel-date--week-hovered`]: this.isWeekHovered(d),
        [`${r}-date-panel-date--week-selected`]: d.inSelectedWeek
      }],
      onClick: () => {
        this.handleDateClick(d);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(d);
      }
    }, c("div", {
      class: `${r}-date-panel-date__trigger`
    }), d.dateObject.date, d.isCurrentDate ? c("div", {
      class: `${r}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? c("div", {
      class: `${r}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${r}-date-panel-actions`
    }, c("div", {
      class: `${r}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) ? null : c(xn, {
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
      class: `${r}-date-panel-actions__suffix`
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Rt(this.$slots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(wt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("now") ? Rt(this.$slots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(wt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null)) : null, c(Ln, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), Ia = Object.assign(Object.assign({}, jl), {
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  actions: {
    type: Array,
    default: () => ["clear", "confirm"]
  }
});
function ka(e, n) {
  var t, r;
  const {
    isDateDisabledRef: o,
    isStartHourDisabledRef: a,
    isEndHourDisabledRef: i,
    isStartMinuteDisabledRef: l,
    isEndMinuteDisabledRef: s,
    isStartSecondDisabledRef: d,
    isEndSecondDisabledRef: u,
    isStartDateInvalidRef: f,
    isEndDateInvalidRef: h,
    isStartTimeInvalidRef: g,
    isEndTimeInvalidRef: m,
    isStartValueInvalidRef: C,
    isEndValueInvalidRef: y,
    isRangeInvalidRef: b,
    localeRef: D,
    rangesRef: E,
    closeOnSelectRef: M,
    updateValueOnCloseRef: L,
    firstDayOfWeekRef: V,
    datePickerSlots: p,
    monthFormatRef: T,
    yearFormatRef: I,
    quarterFormatRef: U,
    yearRangeRef: Y
  } = Xe(bo), z = {
    isDateDisabled: o,
    isStartHourDisabled: a,
    isEndHourDisabled: i,
    isStartMinuteDisabled: l,
    isEndMinuteDisabled: s,
    isStartSecondDisabled: d,
    isEndSecondDisabled: u,
    isStartDateInvalid: f,
    isEndDateInvalid: h,
    isStartTimeInvalid: g,
    isEndTimeInvalid: m,
    isStartValueInvalid: C,
    isEndValueInvalid: y,
    isRangeInvalid: b
  }, S = Ul(e), A = F(null), Z = F(null), re = F(null), K = F(null), me = F(null), ve = F(null), de = F(null), Te = F(null), {
    value: Fe
  } = e, Je = (t = e.defaultCalendarStartTime) !== null && t !== void 0 ? t : Array.isArray(Fe) && typeof Fe[0] == "number" ? Fe[0] : Date.now(), be = F(Je), we = F((r = e.defaultCalendarEndTime) !== null && r !== void 0 ? r : Array.isArray(Fe) && typeof Fe[1] == "number" ? Fe[1] : j(gt(Je, 1)));
  Ge(!0);
  const pe = F(Date.now()), Ne = F(!1), nt = F(0), he = P(() => e.dateFormat || D.value.dateFormat), Ct = P(() => e.calendarDayFormat || D.value.dayFormat), ye = F(Array.isArray(Fe) ? Le(Fe[0], he.value, S.dateFnsOptions.value) : ""), rt = F(Array.isArray(Fe) ? Le(Fe[1], he.value, S.dateFnsOptions.value) : ""), ot = P(() => Ne.value ? "end" : "start"), Et = P(() => {
    var x;
    return aa(be.value, e.value, pe.value, (x = V.value) !== null && x !== void 0 ? x : D.value.firstDayOfWeek);
  }), Ht = P(() => {
    var x;
    return aa(we.value, e.value, pe.value, (x = V.value) !== null && x !== void 0 ? x : D.value.firstDayOfWeek);
  }), Pt = P(() => Et.value.slice(0, 7).map((x) => {
    const {
      ts: W
    } = x;
    return Le(W, Ct.value, S.dateFnsOptions.value);
  })), zt = P(() => Le(be.value, e.calendarHeaderMonthFormat || D.value.monthFormat, S.dateFnsOptions.value)), bt = P(() => Le(we.value, e.calendarHeaderMonthFormat || D.value.monthFormat, S.dateFnsOptions.value)), Bt = P(() => Le(be.value, e.calendarHeaderYearFormat || D.value.yearFormat, S.dateFnsOptions.value)), Oe = P(() => Le(we.value, e.calendarHeaderYearFormat || D.value.yearFormat, S.dateFnsOptions.value)), ze = P(() => {
    const {
      value: x
    } = e;
    return Array.isArray(x) ? x[0] : null;
  }), et = P(() => {
    const {
      value: x
    } = e;
    return Array.isArray(x) ? x[1] : null;
  }), qt = P(() => {
    const {
      shortcuts: x
    } = e;
    return x || E.value;
  }), _t = P(() => sa(Gn(e.value, "start"), pe.value, {
    yearFormat: I.value
  }, Y)), at = P(() => sa(Gn(e.value, "end"), pe.value, {
    yearFormat: I.value
  }, Y)), ht = P(() => {
    const x = Gn(e.value, "start");
    return la(x ?? Date.now(), x, pe.value, {
      quarterFormat: U.value
    });
  }), O = P(() => {
    const x = Gn(e.value, "end");
    return la(x ?? Date.now(), x, pe.value, {
      quarterFormat: U.value
    });
  }), ue = P(() => {
    const x = Gn(e.value, "start");
    return ia(x ?? Date.now(), x, pe.value, {
      monthFormat: T.value
    });
  }), Ee = P(() => {
    const x = Gn(e.value, "end");
    return ia(x ?? Date.now(), x, pe.value, {
      monthFormat: T.value
    });
  }), an = P(() => {
    var x;
    return (x = e.calendarHeaderMonthBeforeYear) !== null && x !== void 0 ? x : D.value.monthBeforeYear;
  });
  ft(P(() => e.value), (x) => {
    if (x !== null && Array.isArray(x)) {
      const [W, se] = x;
      ye.value = Le(W, he.value, S.dateFnsOptions.value), rt.value = Le(se, he.value, S.dateFnsOptions.value), Ne.value || fe(x);
    } else
      ye.value = "", rt.value = "";
  });
  function Lt(x, W) {
    (n === "daterange" || n === "datetimerange") && (Ke(x) !== Ke(W) || je(x) !== je(W)) && S.disableTransitionOneTick();
  }
  ft(be, Lt), ft(we, Lt);
  function Ge(x) {
    const W = dn(be.value), se = dn(we.value);
    (e.bindCalendarMonths || W >= se) && (x ? we.value = j(gt(W, 1)) : be.value = j(gt(se, -1)));
  }
  function pt() {
    be.value = j(gt(be.value, 12)), Ge(!0);
  }
  function xt() {
    be.value = j(gt(be.value, -12)), Ge(!0);
  }
  function Zt() {
    be.value = j(gt(be.value, 1)), Ge(!0);
  }
  function k() {
    be.value = j(gt(be.value, -1)), Ge(!0);
  }
  function J() {
    we.value = j(gt(we.value, 12)), Ge(!1);
  }
  function le() {
    we.value = j(gt(we.value, -12)), Ge(!1);
  }
  function Me() {
    we.value = j(gt(we.value, 1)), Ge(!1);
  }
  function Ie() {
    we.value = j(gt(we.value, -1)), Ge(!1);
  }
  function w(x) {
    be.value = x, Ge(!0);
  }
  function G(x) {
    we.value = x, Ge(!1);
  }
  function te(x) {
    const W = o.value;
    if (!W) return !1;
    if (!Array.isArray(e.value) || ot.value === "start")
      return W(x, "start", null);
    {
      const {
        value: se
      } = nt;
      return x < nt.value ? W(x, "start", [se, se]) : W(x, "end", [se, se]);
    }
  }
  function fe(x) {
    if (x === null) return;
    const [W, se] = x;
    be.value = W, dn(se) <= dn(W) ? we.value = j(dn(gt(W, 1))) : we.value = j(dn(se));
  }
  function qe(x) {
    if (!Ne.value)
      Ne.value = !0, nt.value = x.ts, Qe(x.ts, x.ts, "done");
    else {
      Ne.value = !1;
      const {
        value: W
      } = e;
      e.panel && Array.isArray(W) ? Qe(W[0], W[1], "done") : M.value && n === "daterange" && (L.value ? H() : _());
    }
  }
  function it(x) {
    if (Ne.value) {
      if (te(x.ts)) return;
      x.ts >= nt.value ? Qe(nt.value, x.ts, "wipPreview") : Qe(x.ts, nt.value, "wipPreview");
    }
  }
  function _() {
    b.value || (S.doConfirm(), H());
  }
  function H() {
    Ne.value = !1, e.active && S.doClose();
  }
  function q(x) {
    typeof x != "number" && (x = j(x)), e.value === null ? S.doUpdateValue([x, x], e.panel) : Array.isArray(e.value) && S.doUpdateValue([x, Math.max(e.value[1], x)], e.panel);
  }
  function xe(x) {
    typeof x != "number" && (x = j(x)), e.value === null ? S.doUpdateValue([x, x], e.panel) : Array.isArray(e.value) && S.doUpdateValue([Math.min(e.value[0], x), x], e.panel);
  }
  function Qe(x, W, se) {
    if (typeof x != "number" && (x = j(x)), se !== "shortcutPreview") {
      let ut, Vt;
      if (n === "datetimerange") {
        const {
          defaultTime: Ue
        } = e;
        Array.isArray(Ue) ? (ut = Qr(Ue[0]), Vt = Qr(Ue[1])) : (ut = Qr(Ue), Vt = ut);
      }
      ut && (x = j(vt(x, ut))), Vt && (W = j(vt(W, Vt)));
    }
    S.doUpdateValue([x, W], e.panel && se === "done");
  }
  function We(x) {
    return j(n === "datetimerange" ? ga(x) : n === "monthrange" ? dn(x) : tr(x));
  }
  function Ae(x) {
    const W = kt(x, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value);
    if (Ut(W))
      if (e.value) {
        if (Array.isArray(e.value)) {
          const se = vt(e.value[0], {
            year: Ke(W),
            month: je(W),
            date: jt(W)
          });
          q(We(j(se)));
        }
      } else {
        const se = vt(/* @__PURE__ */ new Date(), {
          year: Ke(W),
          month: je(W),
          date: jt(W)
        });
        q(We(j(se)));
      }
    else
      ye.value = x;
  }
  function v(x) {
    const W = kt(x, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value);
    if (Ut(W)) {
      if (e.value === null) {
        const se = vt(/* @__PURE__ */ new Date(), {
          year: Ke(W),
          month: je(W),
          date: jt(W)
        });
        xe(We(j(se)));
      } else if (Array.isArray(e.value)) {
        const se = vt(e.value[1], {
          year: Ke(W),
          month: je(W),
          date: jt(W)
        });
        xe(We(j(se)));
      }
    } else
      rt.value = x;
  }
  function R() {
    const x = kt(ye.value, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value), {
      value: W
    } = e;
    if (Ut(x)) {
      if (W === null) {
        const se = vt(/* @__PURE__ */ new Date(), {
          year: Ke(x),
          month: je(x),
          date: jt(x)
        });
        q(We(j(se)));
      } else if (Array.isArray(W)) {
        const se = vt(W[0], {
          year: Ke(x),
          month: je(x),
          date: jt(x)
        });
        q(We(j(se)));
      }
    } else
      _e();
  }
  function ie() {
    const x = kt(rt.value, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value), {
      value: W
    } = e;
    if (Ut(x)) {
      if (W === null) {
        const se = vt(/* @__PURE__ */ new Date(), {
          year: Ke(x),
          month: je(x),
          date: jt(x)
        });
        xe(We(j(se)));
      } else if (Array.isArray(W)) {
        const se = vt(W[1], {
          year: Ke(x),
          month: je(x),
          date: jt(x)
        });
        xe(We(j(se)));
      }
    } else
      _e();
  }
  function _e(x) {
    const {
      value: W
    } = e;
    if (W === null || !Array.isArray(W)) {
      ye.value = "", rt.value = "";
      return;
    }
    x === void 0 && (x = W), ye.value = Le(x[0], he.value, S.dateFnsOptions.value), rt.value = Le(x[1], he.value, S.dateFnsOptions.value);
  }
  function He(x) {
    x !== null && q(x);
  }
  function De(x) {
    x !== null && xe(x);
  }
  function Dt(x) {
    S.cachePendingValue();
    const W = S.getShortcutValue(x);
    Array.isArray(W) && Qe(W[0], W[1], "shortcutPreview");
  }
  function Nt(x) {
    const W = S.getShortcutValue(x);
    Array.isArray(W) && (Qe(W[0], W[1], "done"), S.clearPendingValue(), _());
  }
  function ct(x, W) {
    const se = x === void 0 ? e.value : x;
    if (x === void 0 || W === "start") {
      if (de.value) {
        const ut = Array.isArray(se) ? je(se[0]) : je(Date.now());
        de.value.scrollTo({
          debounce: !1,
          index: ut,
          elSize: Hn
        });
      }
      if (me.value) {
        const ut = (Array.isArray(se) ? Ke(se[0]) : Ke(Date.now())) - Y.value[0];
        me.value.scrollTo({
          index: ut,
          debounce: !1
        });
      }
    }
    if (x === void 0 || W === "end") {
      if (Te.value) {
        const ut = Array.isArray(se) ? je(se[1]) : je(Date.now());
        Te.value.scrollTo({
          debounce: !1,
          index: ut,
          elSize: Hn
        });
      }
      if (ve.value) {
        const ut = (Array.isArray(se) ? Ke(se[1]) : Ke(Date.now())) - Y.value[0];
        ve.value.scrollTo({
          index: ut,
          debounce: !1
        });
      }
    }
  }
  function ln(x, W) {
    const {
      value: se
    } = e, ut = !Array.isArray(se), Vt = x.type === "year" && n !== "yearrange" ? ut ? vt(x.ts, {
      month: je(n === "quarterrange" ? _r(/* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date())
    }).valueOf() : vt(x.ts, {
      month: je(n === "quarterrange" ? _r(se[W === "start" ? 0 : 1]) : se[W === "start" ? 0 : 1])
    }).valueOf() : x.ts;
    if (ut) {
      const Vn = We(Vt), _n = [Vn, Vn];
      S.doUpdateValue(_n, e.panel), ct(_n, "start"), ct(_n, "end"), S.disableTransitionOneTick();
      return;
    }
    const Ue = [se[0], se[1]];
    let Pn = !1;
    switch (W === "start" ? (Ue[0] = We(Vt), Ue[0] > Ue[1] && (Ue[1] = Ue[0], Pn = !0)) : (Ue[1] = We(Vt), Ue[0] > Ue[1] && (Ue[0] = Ue[1], Pn = !0)), S.doUpdateValue(Ue, e.panel), n) {
      case "monthrange":
      case "quarterrange":
        S.disableTransitionOneTick(), Pn ? (ct(Ue, "start"), ct(Ue, "end")) : ct(Ue, W);
        break;
      case "yearrange":
        S.disableTransitionOneTick(), ct(Ue, "start"), ct(Ue, "end");
    }
  }
  function sn() {
    var x;
    (x = re.value) === null || x === void 0 || x.sync();
  }
  function wn() {
    var x;
    (x = K.value) === null || x === void 0 || x.sync();
  }
  function mr(x) {
    var W, se;
    return x === "start" ? ((W = me.value) === null || W === void 0 ? void 0 : W.listElRef) || null : ((se = ve.value) === null || se === void 0 ? void 0 : se.listElRef) || null;
  }
  function pr(x) {
    var W, se;
    return x === "start" ? ((W = me.value) === null || W === void 0 ? void 0 : W.itemsElRef) || null : ((se = ve.value) === null || se === void 0 ? void 0 : se.itemsElRef) || null;
  }
  const gr = {
    startYearVlRef: me,
    endYearVlRef: ve,
    startMonthScrollbarRef: de,
    endMonthScrollbarRef: Te,
    startYearScrollbarRef: re,
    endYearScrollbarRef: K
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    startDatesElRef: A,
    endDatesElRef: Z,
    handleDateClick: qe,
    handleColItemClick: ln,
    handleDateMouseEnter: it,
    handleConfirmClick: _,
    startCalendarPrevYear: xt,
    startCalendarPrevMonth: k,
    startCalendarNextYear: pt,
    startCalendarNextMonth: Zt,
    endCalendarPrevYear: le,
    endCalendarPrevMonth: Ie,
    endCalendarNextMonth: Me,
    endCalendarNextYear: J,
    mergedIsDateDisabled: te,
    changeStartEndTime: Qe,
    ranges: E,
    calendarMonthBeforeYear: an,
    startCalendarMonth: zt,
    startCalendarYear: Bt,
    endCalendarMonth: bt,
    endCalendarYear: Oe,
    weekdays: Pt,
    startDateArray: Et,
    endDateArray: Ht,
    startYearArray: _t,
    startMonthArray: ue,
    startQuarterArray: ht,
    endYearArray: at,
    endMonthArray: Ee,
    endQuarterArray: O,
    isSelecting: Ne,
    handleRangeShortcutMouseenter: Dt,
    handleRangeShortcutClick: Nt
  }, S), z), gr), {
    // datetimerangeonly
    startDateDisplayString: ye,
    endDateInput: rt,
    timePickerSize: S.timePickerSize,
    startTimeValue: ze,
    endTimeValue: et,
    datePickerSlots: p,
    shortcuts: qt,
    startCalendarDateTime: be,
    endCalendarDateTime: we,
    justifyColumnsScrollState: ct,
    handleFocusDetectorFocus: S.handleFocusDetectorFocus,
    handleStartTimePickerChange: He,
    handleEndTimePickerChange: De,
    handleStartDateInput: Ae,
    handleStartDateInputBlur: R,
    handleEndDateInput: v,
    handleEndDateInputBlur: ie,
    handleStartYearVlScroll: sn,
    handleEndYearVlScroll: wn,
    virtualListContainer: mr,
    virtualListContent: pr,
    onUpdateStartCalendarValue: w,
    onUpdateEndCalendarValue: G
  });
}
var bm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const xm = Ce({
  name: "DateRangePanel",
  props: Ia,
  setup(e) {
    return bm.NODE_ENV !== "production" && Ft(() => {
      var n;
      !((n = e.actions) === null || n === void 0) && n.includes("now") && yn("date-picker", "The `now` action is not supported for n-date-picker of `daterange` type");
    }), ka(e, "daterange");
  },
  render() {
    var e, n, t;
    const {
      mergedClsPrefix: r,
      mergedTheme: o,
      shortcuts: a,
      onRender: i,
      datePickerSlots: l
    } = this;
    return i == null || i(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${r}-date-panel`, `${r}-date-panel--daterange`, !this.panel && `${r}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      ref: "startDatesElRef",
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start`
    }, c("div", {
      class: `${r}-date-panel-month`
    }, c("div", {
      class: `${r}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, ke(l["prev-year"], () => [c(rr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, ke(l["prev-month"], () => [c(nr, null)])), c(lr, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix: r,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), c("div", {
      class: `${r}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, ke(l["next-month"], () => [c(ar, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, ke(l["next-year"], () => [c(or, null)]))), c("div", {
      class: `${r}-date-panel-weekdays`
    }, this.weekdays.map((s) => c("div", {
      key: s,
      class: `${r}-date-panel-weekdays__day`
    }, s))), c("div", {
      class: `${r}-date-panel__divider`
    }), c("div", {
      class: `${r}-date-panel-dates`
    }, this.startDateArray.map((s, d) => c("div", {
      "data-n-date": !0,
      key: d,
      class: [`${r}-date-panel-date`, {
        [`${r}-date-panel-date--excluded`]: !s.inCurrentMonth,
        [`${r}-date-panel-date--current`]: s.isCurrentDate,
        [`${r}-date-panel-date--selected`]: s.selected,
        [`${r}-date-panel-date--covered`]: s.inSpan,
        [`${r}-date-panel-date--start`]: s.startOfSpan,
        [`${r}-date-panel-date--end`]: s.endOfSpan,
        [`${r}-date-panel-date--disabled`]: this.mergedIsDateDisabled(s.ts)
      }],
      onClick: () => {
        this.handleDateClick(s);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(s);
      }
    }, c("div", {
      class: `${r}-date-panel-date__trigger`
    }), s.dateObject.date, s.isCurrentDate ? c("div", {
      class: `${r}-date-panel-date__sup`
    }) : null)))), c("div", {
      class: `${r}-date-panel__vertical-divider`
    }), c("div", {
      ref: "endDatesElRef",
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--end`
    }, c("div", {
      class: `${r}-date-panel-month`
    }, c("div", {
      class: `${r}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, ke(l["prev-year"], () => [c(rr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, ke(l["prev-month"], () => [c(nr, null)])), c(lr, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix: r,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), c("div", {
      class: `${r}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, ke(l["next-month"], () => [c(ar, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, ke(l["next-year"], () => [c(or, null)]))), c("div", {
      class: `${r}-date-panel-weekdays`
    }, this.weekdays.map((s) => c("div", {
      key: s,
      class: `${r}-date-panel-weekdays__day`
    }, s))), c("div", {
      class: `${r}-date-panel__divider`
    }), c("div", {
      class: `${r}-date-panel-dates`
    }, this.endDateArray.map((s, d) => c("div", {
      "data-n-date": !0,
      key: d,
      class: [`${r}-date-panel-date`, {
        [`${r}-date-panel-date--excluded`]: !s.inCurrentMonth,
        [`${r}-date-panel-date--current`]: s.isCurrentDate,
        [`${r}-date-panel-date--selected`]: s.selected,
        [`${r}-date-panel-date--covered`]: s.inSpan,
        [`${r}-date-panel-date--start`]: s.startOfSpan,
        [`${r}-date-panel-date--end`]: s.endOfSpan,
        [`${r}-date-panel-date--disabled`]: this.mergedIsDateDisabled(s.ts)
      }],
      onClick: () => {
        this.handleDateClick(s);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(s);
      }
    }, c("div", {
      class: `${r}-date-panel-date__trigger`
    }), s.dateObject.date, s.isCurrentDate ? c("div", {
      class: `${r}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? c("div", {
      class: `${r}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${r}-date-panel-actions`
    }, c("div", {
      class: `${r}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((s) => {
      const d = a[s];
      return Array.isArray(d) || typeof d == "function" ? c(xn, {
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
      class: `${r}-date-panel-actions__suffix`
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Rt(l.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(wt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("confirm") ? Rt(l.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isRangeInvalid || this.isSelecting,
      text: this.locale.confirm
    }, () => [c(wt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Ln, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
function wi(e, n, t) {
  const r = Gi(), o = wm(e, t.timeZone, t.locale ?? r.locale);
  return "formatToParts" in o ? Sm(o, n) : ym(o, n);
}
function Sm(e, n) {
  const t = e.formatToParts(n);
  for (let r = t.length - 1; r >= 0; --r)
    if (t[r].type === "timeZoneName")
      return t[r].value;
}
function ym(e, n) {
  const t = e.format(n).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(t);
  return r ? r[0].substr(1) : "";
}
function wm(e, n, t) {
  return new Intl.DateTimeFormat(t ? [t.code, "en-US"] : void 0, {
    timeZone: n,
    timeZoneName: e
  });
}
function Pm(e, n) {
  const t = Om(n);
  return "formatToParts" in t ? Dm(t, e) : Tm(t, e);
}
const _m = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Dm(e, n) {
  try {
    const t = e.formatToParts(n), r = [];
    for (let o = 0; o < t.length; o++) {
      const a = _m[t[o].type];
      a !== void 0 && (r[a] = parseInt(t[o].value, 10));
    }
    return r;
  } catch (t) {
    if (t instanceof RangeError)
      return [NaN];
    throw t;
  }
}
function Tm(e, n) {
  const t = e.format(n), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);
  return [
    parseInt(r[3], 10),
    parseInt(r[1], 10),
    parseInt(r[2], 10),
    parseInt(r[4], 10),
    parseInt(r[5], 10),
    parseInt(r[6], 10)
  ];
}
const Bo = {}, Pi = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Mm = Pi === "06/25/2014, 00:00:00" || Pi === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Om(e) {
  return Bo[e] || (Bo[e] = Mm ? new Intl.DateTimeFormat("en-US", {
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
  })), Bo[e];
}
function Gl(e, n, t, r, o, a, i) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, n, t), l.setUTCHours(r, o, a, i), l;
}
const _i = 36e5, Rm = 6e4, Lo = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Fa(e, n, t) {
  if (!e)
    return 0;
  let r = Lo.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, a;
  if (r = Lo.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), Di(o) ? -(o * _i) : NaN;
  if (r = Lo.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const i = parseInt(r[3], 10);
    return Di(o, i) ? (a = Math.abs(o) * _i + i * Rm, r[1] === "+" ? -a : a) : NaN;
  }
  if (km(e)) {
    n = new Date(n || Date.now());
    const i = t ? n : Em(n), l = da(i, e);
    return -(t ? l : Im(n, l, e));
  }
  return NaN;
}
function Em(e) {
  return Gl(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function da(e, n) {
  const t = Pm(e, n), r = Gl(t[0], t[1] - 1, t[2], t[3] % 24, t[4], t[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, r - o;
}
function Im(e, n, t) {
  let o = e.getTime() - n;
  const a = da(new Date(o), t);
  if (n === a)
    return n;
  o -= a - n;
  const i = da(new Date(o), t);
  return a === i ? a : Math.max(a, i);
}
function Di(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
const Ti = {};
function km(e) {
  if (Ti[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Ti[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Fm = 60 * 1e3, Am = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = No(t.timeZone, e);
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return Mi(r);
      case "XXXX":
      case "XX":
        return qn(r);
      case "XXXXX":
      case "XXX":
      default:
        return qn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = No(t.timeZone, e);
    switch (n) {
      case "x":
        return Mi(r);
      case "xxxx":
      case "xx":
        return qn(r);
      case "xxxxx":
      case "xxx":
      default:
        return qn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = No(t.timeZone, e);
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + $m(r, ":");
      case "OOOO":
      default:
        return "GMT" + qn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return wi("short", e, t);
      case "zzzz":
      default:
        return wi("long", e, t);
    }
  }
};
function No(e, n) {
  const t = e ? Fa(e, n, !0) / Fm : (n == null ? void 0 : n.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(t))
    throw new RangeError("Invalid time zone specified: " + e);
  return t;
}
function so(e, n) {
  const t = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < n; )
    r = "0" + r;
  return t + r;
}
function qn(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = so(Math.floor(r / 60), 2), a = so(Math.floor(r % 60), 2);
  return t + o + n + a;
}
function Mi(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + so(Math.abs(e) / 60, 2) : qn(e, n);
}
function $m(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + so(a, 2);
}
function Oi(e) {
  const n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), +e - +n;
}
const Hm = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Wo = 36e5, Ri = 6e4, zm = 2, Mt = {
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
  timeZone: Hm
};
function ql(e, n = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const t = n.additionalDigits == null ? zm : Number(n.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = Bm(e), { year: o, restDateString: a } = Lm(r.date, t), i = Nm(a, o);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const l = i.getTime();
    let s = 0, d;
    if (r.time && (s = Wm(r.time), s === null || isNaN(s)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || n.timeZone) {
      if (d = Fa(r.timeZone || n.timeZone, new Date(l + s)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = Oi(new Date(l + s)), d = Oi(new Date(l + s + d));
    return new Date(l + s + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Bm(e) {
  const n = {};
  let t = Mt.dateTimePattern.exec(e), r;
  if (t ? (n.date = t[1], r = t[3]) : (t = Mt.datePattern.exec(e), t ? (n.date = t[1], r = t[2]) : (n.date = null, r = e)), r) {
    const o = Mt.timeZone.exec(r);
    o ? (n.time = r.replace(o[1], ""), n.timeZone = o[1].trim()) : n.time = r;
  }
  return n;
}
function Lm(e, n) {
  if (e) {
    const t = Mt.YYY[n], r = Mt.YYYYY[n];
    let o = Mt.YYYY.exec(e) || r.exec(e);
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
function Nm(e, n) {
  if (n === null)
    return null;
  let t, r, o;
  if (!e || !e.length)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  let a = Mt.MM.exec(e);
  if (a)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Ii(n, r) ? (t.setUTCFullYear(n, r), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Mt.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    const i = parseInt(a[1], 10);
    return Um(n, i) ? (t.setUTCFullYear(n, 0, i), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Mt.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10);
    return Ii(n, r, i) ? (t.setUTCFullYear(n, r, i), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Mt.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, ki(o) ? Ei(n, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Mt.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10) - 1;
    return ki(o, i) ? Ei(n, o, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Wm(e) {
  let n, t, r = Mt.HH.exec(e);
  if (r)
    return n = parseFloat(r[1].replace(",", ".")), Vo(n) ? n % 24 * Wo : NaN;
  if (r = Mt.HHMM.exec(e), r)
    return n = parseInt(r[1], 10), t = parseFloat(r[2].replace(",", ".")), Vo(n, t) ? n % 24 * Wo + t * Ri : NaN;
  if (r = Mt.HHMMSS.exec(e), r) {
    n = parseInt(r[1], 10), t = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return Vo(n, t, o) ? n % 24 * Wo + t * Ri + o * 1e3 : NaN;
  }
  return null;
}
function Ei(e, n, t) {
  n = n || 0, t = t || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = n * 7 + t + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const Vm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], jm = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Kl(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Ii(e, n, t) {
  if (n < 0 || n > 11)
    return !1;
  if (t != null) {
    if (t < 1)
      return !1;
    const r = Kl(e);
    if (r && t > jm[n] || !r && t > Vm[n])
      return !1;
  }
  return !0;
}
function Um(e, n) {
  if (n < 1)
    return !1;
  const t = Kl(e);
  return !(t && n > 366 || !t && n > 365);
}
function ki(e, n) {
  return !(e < 0 || e > 52 || n != null && (n < 0 || n > 6));
}
function Vo(e, n, t) {
  return !(e < 0 || e >= 25 || n != null && (n < 0 || n >= 60) || t != null && (t < 0 || t >= 60));
}
const Ym = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function Gm(e, n, t = {}) {
  n = String(n);
  const r = n.match(Ym);
  if (r) {
    const o = ql(t.originalDate || e, t);
    n = r.reduce(function(a, i) {
      if (i[0] === "'")
        return a;
      const l = a.indexOf(i), s = a[l - 1] === "'", d = a.replace(i, "'" + Am[i[0]](o, i, t) + "'");
      return s ? d.substring(0, l - 1) + d.substring(l + 1) : d;
    }, n);
  }
  return Le(e, n, t);
}
function qm(e, n, t) {
  e = ql(e, t);
  const r = Fa(n, e, !0), o = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
function Km(e, n, t, r) {
  return r = {
    ...r,
    timeZone: n,
    originalDate: e
  }, Gm(qm(e, n, { timeZone: r.timeZone }), t, r);
}
const Xl = "n-time-picker", Gr = Ce({
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
      onItemClick: n,
      clsPrefix: t
    } = this;
    return this.data.map((r) => {
      const {
        label: o,
        disabled: a,
        value: i
      } = r, l = e === i;
      return c("div", {
        key: o,
        "data-active": l ? "" : null,
        class: [`${t}-time-picker-col__item`, l && `${t}-time-picker-col__item--active`, a && `${t}-time-picker-col__item--disabled`],
        onClick: n && !a ? () => {
          n(i);
        } : void 0
      }, o);
    });
  }
}), xr = {
  amHours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  pmHours: ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  minutes: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  seconds: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  period: ["AM", "PM"]
};
function jo(e) {
  return `00${e}`.slice(-2);
}
function Sr(e, n, t) {
  return Array.isArray(n) ? (t === "am" ? n.filter((r) => r < 12) : t === "pm" ? n.filter((r) => r >= 12).map((r) => r === 12 ? 12 : r - 12) : n).map((r) => jo(r)) : typeof n == "number" ? t === "am" ? e.filter((r) => {
    const o = Number(r);
    return o < 12 && o % n === 0;
  }) : t === "pm" ? e.filter((r) => {
    const o = Number(r);
    return o >= 12 && o % n === 0;
  }).map((r) => {
    const o = Number(r);
    return jo(o === 12 ? 12 : o - 12);
  }) : e.filter((r) => Number(r) % n === 0) : t === "am" ? e.filter((r) => Number(r) < 12) : t === "pm" ? e.map((r) => Number(r)).filter((r) => Number(r) >= 12).map((r) => jo(r === 12 ? 12 : r - 12)) : e;
}
function qr(e, n, t) {
  return t ? typeof t == "number" ? e % t === 0 : t.includes(e) : !0;
}
function Xm(e, n, t) {
  const r = Sr(xr[n], t).map(Number);
  let o, a;
  for (let i = 0; i < r.length; ++i) {
    const l = r[i];
    if (l === e)
      return l;
    if (l > e) {
      a = l;
      break;
    }
    o = l;
  }
  return o === void 0 ? (a || wa("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props"), a) : a === void 0 || a - e > e - o ? o : a;
}
function Qm(e) {
  return gn(e) < 12 ? "am" : "pm";
}
const Zm = {
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
}, Jm = Ce({
  name: "TimePickerPanel",
  props: Zm,
  setup(e) {
    const {
      mergedThemeRef: n,
      mergedClsPrefixRef: t
    } = Xe(Xl), r = P(() => {
      const {
        isHourDisabled: l,
        hours: s,
        use12Hours: d,
        amPmValue: u
      } = e;
      if (d) {
        const f = u ?? Qm(Date.now());
        return Sr(xr.hours, s, f).map((h) => {
          const g = Number(h), m = f === "pm" && g !== 12 ? g + 12 : g;
          return {
            label: h,
            value: m,
            disabled: l ? l(m) : !1
          };
        });
      } else
        return Sr(xr.hours, s).map((f) => ({
          label: f,
          value: Number(f),
          disabled: l ? l(Number(f)) : !1
        }));
    }), o = P(() => {
      const {
        isMinuteDisabled: l,
        minutes: s
      } = e;
      return Sr(xr.minutes, s).map((d) => ({
        label: d,
        value: Number(d),
        disabled: l ? l(Number(d), e.hourValue) : !1
      }));
    }), a = P(() => {
      const {
        isSecondDisabled: l,
        seconds: s
      } = e;
      return Sr(xr.seconds, s).map((d) => ({
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
      mergedTheme: n,
      mergedClsPrefix: t,
      hours: r,
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
    var e, n, t, r;
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
    }, c(Kt, {
      ref: "hourScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(Gr, {
        clsPrefix: o,
        data: this.hours,
        activeValue: this.hourValue,
        onItemClick: this.onHourClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null, this.showMinute ? c("div", {
      class: [`${o}-time-picker-col`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`, this.isMinuteInvalid && `${o}-time-picker-col--invalid`]
    }, c(Kt, {
      ref: "minuteScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(Gr, {
        clsPrefix: o,
        data: this.minutes,
        activeValue: this.minuteValue,
        onItemClick: this.onMinuteClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null, this.showSecond ? c("div", {
      class: [`${o}-time-picker-col`, this.isSecondInvalid && `${o}-time-picker-col--invalid`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`]
    }, c(Kt, {
      ref: "secondScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(Gr, {
        clsPrefix: o,
        data: this.seconds,
        activeValue: this.secondValue,
        onItemClick: this.onSecondClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null, this.use12Hours ? c("div", {
      class: [`${o}-time-picker-col`, this.isAmPmInvalid && `${o}-time-picker-col--invalid`, this.transitionDisabled && `${o}-time-picker-col--transition-disabled`]
    }, c(Kt, {
      ref: "amPmScrollRef",
      theme: a.peers.Scrollbar,
      themeOverrides: a.peerOverrides.Scrollbar
    }, {
      default: () => [c(Gr, {
        clsPrefix: o,
        data: this.amPm,
        activeValue: this.amPmValue,
        onItemClick: this.onAmPmClick
      }), c("div", {
        class: `${o}-time-picker-col__padding`
      })]
    })) : null), !((e = this.actions) === null || e === void 0) && e.length ? c("div", {
      class: `${o}-time-picker-actions`
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? c(wt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      onClick: this.onClearClick
    }, {
      default: () => this.clearText
    }) : null, !((t = this.actions) === null || t === void 0) && t.includes("now") ? c(wt, {
      size: "tiny",
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      onClick: this.onNowClick
    }, {
      default: () => this.nowText
    }) : null, !((r = this.actions) === null || r === void 0) && r.includes("confirm") ? c(wt, {
      size: "tiny",
      type: "primary",
      class: `${o}-time-picker-actions__confirm`,
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      disabled: this.isValueInvalid,
      onClick: this.onConfirmClick
    }, {
      default: () => this.confirmText
    }) : null) : null, c(Ln, {
      onFocus: this.onFocusDetectorFocus
    }));
  }
}), ep = $([oe("time-picker", `
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
 `, [El(), oe("time-picker-actions", `
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
 `, [ae("transition-disabled", [N("item", "transition: none;", [$("&::before", "transition: none;")])]), N("padding", `
 height: calc(var(--n-item-height) * 5);
 `), $("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [N("item", [$("&::before", "left: 4px;")])]), N("item", `
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
 `), Wt("disabled", [$("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]), ae("active", `
 color: var(--n-item-text-color-active);
 `, [$("&::before", `
 background-color: var(--n-item-color-hover);
 `)]), ae("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)]), ae("invalid", [N("item", [ae("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])])])]);
var tp = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Uo(e, n) {
  return e === void 0 ? !0 : Array.isArray(e) ? e.every((t) => t >= 0 && t <= n) : e >= 0 && e <= n;
}
const np = Object.assign(Object.assign({}, Qt.props), {
  to: Sn.propTo,
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
    validator: (e) => Uo(e, 23)
  },
  minutes: {
    type: [Number, Array],
    validator: (e) => Uo(e, 59)
  },
  seconds: {
    type: [Number, Array],
    validator: (e) => Uo(e, 59)
  },
  use12Hours: Boolean,
  // private
  stateful: {
    type: Boolean,
    default: !0
  },
  // deprecated
  onChange: [Function, Array]
}), ca = Ce({
  name: "TimePicker",
  props: np,
  setup(e) {
    tp.NODE_ENV !== "production" && Ft(() => {
      e.onChange !== void 0 && yn("time-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedBorderedRef: n,
      mergedClsPrefixRef: t,
      namespaceRef: r,
      inlineThemeDisabled: o
    } = Fr(e), {
      localeRef: a,
      dateLocaleRef: i
    } = Ar("TimePicker"), l = vo(e), {
      mergedSizeRef: s,
      mergedDisabledRef: d,
      mergedStatusRef: u
    } = l, f = Qt("TimePicker", "-time-picker", ep, zl, e, t), h = al(), g = F(null), m = F(null), C = P(() => ({
      locale: i.value.locale
    }));
    function y(_) {
      return _ === null ? null : kt(_, e.valueFormat || e.format, /* @__PURE__ */ new Date(), C.value).getTime();
    }
    const {
      defaultValue: b,
      defaultFormattedValue: D
    } = e, E = F(D !== void 0 ? y(D) : b), M = P(() => {
      const {
        formattedValue: _
      } = e;
      if (_ !== void 0)
        return y(_);
      const {
        value: H
      } = e;
      return H !== void 0 ? H : E.value;
    }), L = P(() => {
      const {
        timeZone: _
      } = e;
      return _ ? (H, q, xe) => Km(H, _, q, xe) : (H, q, xe) => Le(H, q, xe);
    }), V = F("");
    ft(() => e.timeZone, () => {
      const _ = M.value;
      V.value = _ === null ? "" : L.value(_, e.format, C.value);
    }, {
      immediate: !0
    });
    const p = F(!1), T = Ye(e, "show"), I = ao(T, p), U = F(M.value), Y = F(!1), z = P(() => a.value.clear), S = P(() => a.value.now), A = P(() => e.placeholder !== void 0 ? e.placeholder : a.value.placeholder), Z = P(() => a.value.negativeText), re = P(() => a.value.positiveText), K = P(() => /H|h|K|k/.test(e.format)), me = P(() => e.format.includes("m")), ve = P(() => e.format.includes("s")), de = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : Number(L.value(_, "HH", C.value));
    }), Te = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : Number(L.value(_, "mm", C.value));
    }), Fe = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : Number(L.value(_, "ss", C.value));
    }), Je = P(() => {
      const {
        isHourDisabled: _
      } = e;
      return de.value === null ? !1 : qr(de.value, "hours", e.hours) ? _ ? _(de.value) : !1 : !0;
    }), be = P(() => {
      const {
        value: _
      } = Te, {
        value: H
      } = de;
      if (_ === null || H === null) return !1;
      if (!qr(_, "minutes", e.minutes)) return !0;
      const {
        isMinuteDisabled: q
      } = e;
      return q ? q(_, H) : !1;
    }), we = P(() => {
      const {
        value: _
      } = Te, {
        value: H
      } = de, {
        value: q
      } = Fe;
      if (q === null || _ === null || H === null)
        return !1;
      if (!qr(q, "seconds", e.seconds)) return !0;
      const {
        isSecondDisabled: xe
      } = e;
      return xe ? xe(q, _, H) : !1;
    }), pe = P(() => Je.value || be.value || we.value), Ne = P(() => e.format.length + 4), nt = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : gn(_) < 12 ? "am" : "pm";
    });
    function he(_, H) {
      const {
        onUpdateFormattedValue: q,
        "onUpdate:formattedValue": xe
      } = e;
      q && Pe(q, _, H), xe && Pe(xe, _, H);
    }
    function Ct(_) {
      return _ === null ? null : L.value(_, e.valueFormat || e.format);
    }
    function ye(_) {
      const {
        onUpdateValue: H,
        "onUpdate:value": q,
        onChange: xe
      } = e, {
        nTriggerFormChange: Qe,
        nTriggerFormInput: We
      } = l, Ae = Ct(_);
      H && Pe(H, _, Ae), q && Pe(q, _, Ae), xe && Pe(xe, _, Ae), he(Ae, _), E.value = _, Qe(), We();
    }
    function rt(_) {
      const {
        onFocus: H
      } = e, {
        nTriggerFormFocus: q
      } = l;
      H && Pe(H, _), q();
    }
    function ot(_) {
      const {
        onBlur: H
      } = e, {
        nTriggerFormBlur: q
      } = l;
      H && Pe(H, _), q();
    }
    function Et() {
      const {
        onConfirm: _
      } = e;
      _ && Pe(_, M.value, Ct(M.value));
    }
    function Ht(_) {
      var H;
      _.stopPropagation(), ye(null), ht(null), (H = e.onClear) === null || H === void 0 || H.call(e);
    }
    function Pt() {
      k({
        returnFocus: !0
      });
    }
    function zt() {
      ye(null), ht(null), k({
        returnFocus: !0
      });
    }
    function bt(_) {
      _.key === "Escape" && I.value && io(_);
    }
    function Bt(_) {
      var H;
      switch (_.key) {
        case "Escape":
          I.value && (io(_), k({
            returnFocus: !0
          }));
          break;
        case "Tab":
          h.shift && _.target === ((H = m.value) === null || H === void 0 ? void 0 : H.$el) && (_.preventDefault(), k({
            returnFocus: !0
          }));
          break;
      }
    }
    function Oe() {
      Y.value = !0, Cn(() => {
        Y.value = !1;
      });
    }
    function ze(_) {
      d.value || rl(_, "clear") || I.value || xt();
    }
    function et(_) {
      typeof _ != "string" && (M.value === null ? ye(j(Dn(Wc(/* @__PURE__ */ new Date()), _))) : ye(j(Dn(M.value, _))));
    }
    function qt(_) {
      typeof _ != "string" && (M.value === null ? ye(j(Mo(Zs(/* @__PURE__ */ new Date()), _))) : ye(j(Mo(M.value, _))));
    }
    function _t(_) {
      typeof _ != "string" && (M.value === null ? ye(j(Oo(ga(/* @__PURE__ */ new Date()), _))) : ye(j(Oo(M.value, _))));
    }
    function at(_) {
      const {
        value: H
      } = M;
      if (H === null) {
        const q = /* @__PURE__ */ new Date(), xe = gn(q);
        _ === "pm" && xe < 12 ? ye(j(Dn(q, xe + 12))) : _ === "am" && xe >= 12 && ye(j(Dn(q, xe - 12))), ye(j(q));
      } else {
        const q = gn(H);
        _ === "pm" && q < 12 ? ye(j(Dn(H, q + 12))) : _ === "am" && q >= 12 && ye(j(Dn(H, q - 12)));
      }
    }
    function ht(_) {
      _ === void 0 && (_ = M.value), _ === null ? V.value = "" : V.value = L.value(_, e.format, C.value);
    }
    function O(_) {
      pt(_) || rt(_);
    }
    function ue(_) {
      var H;
      if (!pt(_))
        if (I.value) {
          const q = (H = m.value) === null || H === void 0 ? void 0 : H.$el;
          q != null && q.contains(_.relatedTarget) || (ht(), ot(_), k({
            returnFocus: !1
          }));
        } else
          ht(), ot(_);
    }
    function Ee() {
      d.value || I.value || xt();
    }
    function an() {
      d.value || (ht(), k({
        returnFocus: !1
      }));
    }
    function Lt() {
      if (!m.value) return;
      const {
        hourScrollRef: _,
        minuteScrollRef: H,
        secondScrollRef: q,
        amPmScrollRef: xe
      } = m.value;
      [_, H, q, xe].forEach((Qe) => {
        var We;
        if (!Qe) return;
        const Ae = (We = Qe.contentRef) === null || We === void 0 ? void 0 : We.querySelector("[data-active]");
        Ae && Qe.scrollTo({
          top: Ae.offsetTop
        });
      });
    }
    function Ge(_) {
      p.value = _;
      const {
        onUpdateShow: H,
        "onUpdate:show": q
      } = e;
      H && Pe(H, _), q && Pe(q, _);
    }
    function pt(_) {
      var H, q, xe;
      return !!(!((q = (H = g.value) === null || H === void 0 ? void 0 : H.wrapperElRef) === null || q === void 0) && q.contains(_.relatedTarget) || !((xe = m.value) === null || xe === void 0) && xe.$el.contains(_.relatedTarget));
    }
    function xt() {
      U.value = M.value, Ge(!0), Cn(Lt);
    }
    function Zt(_) {
      var H, q;
      I.value && !(!((q = (H = g.value) === null || H === void 0 ? void 0 : H.wrapperElRef) === null || q === void 0) && q.contains(ho(_))) && k({
        returnFocus: !1
      });
    }
    function k({
      returnFocus: _
    }) {
      var H;
      I.value && (Ge(!1), _ && ((H = g.value) === null || H === void 0 || H.focus()));
    }
    function J(_) {
      if (_ === "") {
        ye(null);
        return;
      }
      const H = kt(_, e.format, /* @__PURE__ */ new Date(), C.value);
      if (V.value = _, Ut(H)) {
        const {
          value: q
        } = M;
        if (q !== null) {
          const xe = vt(q, {
            hours: gn(H),
            minutes: eo(H),
            seconds: to(H),
            milliseconds: Yd(H)
          });
          ye(j(xe));
        } else
          ye(j(H));
      }
    }
    function le() {
      ye(U.value), Ge(!1);
    }
    function Me() {
      const _ = /* @__PURE__ */ new Date(), H = {
        hours: gn,
        minutes: eo,
        seconds: to
      }, [q, xe, Qe] = ["hours", "minutes", "seconds"].map((Ae) => !e[Ae] || qr(H[Ae](_), Ae, e[Ae]) ? H[Ae](_) : Xm(H[Ae](_), Ae, e[Ae])), We = Oo(Mo(Dn(M.value ? M.value : j(_), q), xe), Qe);
      ye(j(We));
    }
    function Ie() {
      ht(), Et(), k({
        returnFocus: !0
      });
    }
    function w(_) {
      pt(_) || (ht(), ot(_), k({
        returnFocus: !1
      }));
    }
    ft(M, (_) => {
      ht(_), Oe(), Cn(Lt);
    }), ft(I, () => {
      pe.value && ye(U.value);
    }), zn(Xl, {
      mergedThemeRef: f,
      mergedClsPrefixRef: t
    });
    const G = {
      focus: () => {
        var _;
        (_ = g.value) === null || _ === void 0 || _.focus();
      },
      blur: () => {
        var _;
        (_ = g.value) === null || _ === void 0 || _.blur();
      }
    }, te = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: _
        },
        self: {
          iconColor: H,
          iconColorDisabled: q
        }
      } = f.value;
      return {
        "--n-icon-color-override": H,
        "--n-icon-color-disabled-override": q,
        "--n-bezier": _
      };
    }), fe = o ? $n("time-picker-trigger", void 0, te, e) : void 0, qe = P(() => {
      const {
        self: {
          panelColor: _,
          itemTextColor: H,
          itemTextColorActive: q,
          itemColorHover: xe,
          panelDividerColor: Qe,
          panelBoxShadow: We,
          itemOpacityDisabled: Ae,
          borderRadius: v,
          itemFontSize: R,
          itemWidth: ie,
          itemHeight: _e,
          panelActionPadding: He,
          itemBorderRadius: De
        },
        common: {
          cubicBezierEaseInOut: Dt
        }
      } = f.value;
      return {
        "--n-bezier": Dt,
        "--n-border-radius": v,
        "--n-item-color-hover": xe,
        "--n-item-font-size": R,
        "--n-item-height": _e,
        "--n-item-opacity-disabled": Ae,
        "--n-item-text-color": H,
        "--n-item-text-color-active": q,
        "--n-item-width": ie,
        "--n-panel-action-padding": He,
        "--n-panel-box-shadow": We,
        "--n-panel-color": _,
        "--n-panel-divider-color": Qe,
        "--n-item-border-radius": De
      };
    }), it = o ? $n("time-picker", void 0, qe, e) : void 0;
    return {
      focus: G.focus,
      blur: G.blur,
      mergedStatus: u,
      mergedBordered: n,
      mergedClsPrefix: t,
      namespace: r,
      uncontrolledValue: E,
      mergedValue: M,
      isMounted: mo(),
      inputInstRef: g,
      panelInstRef: m,
      adjustedTo: Sn(e),
      mergedShow: I,
      localizedClear: z,
      localizedNow: S,
      localizedPlaceholder: A,
      localizedNegativeText: Z,
      localizedPositiveText: re,
      hourInFormat: K,
      minuteInFormat: me,
      secondInFormat: ve,
      mergedAttrSize: Ne,
      displayTimeString: V,
      mergedSize: s,
      mergedDisabled: d,
      isValueInvalid: pe,
      isHourInvalid: Je,
      isMinuteInvalid: be,
      isSecondInvalid: we,
      transitionDisabled: Y,
      hourValue: de,
      minuteValue: Te,
      secondValue: Fe,
      amPmValue: nt,
      handleInputKeydown: bt,
      handleTimeInputFocus: O,
      handleTimeInputBlur: ue,
      handleNowClick: Me,
      handleConfirmClick: Ie,
      handleTimeInputUpdateValue: J,
      handleMenuFocusOut: w,
      handleCancelClick: le,
      handleClickOutside: Zt,
      handleTimeInputActivate: Ee,
      handleTimeInputDeactivate: an,
      handleHourClick: et,
      handleMinuteClick: qt,
      handleSecondClick: _t,
      handleAmPmClick: at,
      handleTimeInputClear: Ht,
      handleFocusDetectorFocus: Pt,
      handleMenuKeydown: Bt,
      handleTriggerClick: ze,
      mergedTheme: f,
      triggerCssVars: o ? void 0 : te,
      triggerThemeClass: fe == null ? void 0 : fe.themeClass,
      triggerOnRender: fe == null ? void 0 : fe.onRender,
      cssVars: o ? void 0 : qe,
      themeClass: it == null ? void 0 : it.themeClass,
      onRender: it == null ? void 0 : it.onRender,
      clearSelectedValue: zt
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      $slots: n,
      triggerOnRender: t
    } = this;
    return t == null || t(), c("div", {
      class: [`${e}-time-picker`, this.triggerThemeClass],
      style: this.triggerCssVars
    }, c(ba, null, {
      default: () => [c(xa, null, {
        default: () => c(ir, {
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
          [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => c(bn, {
            clsPrefix: e,
            class: `${e}-time-picker-icon`
          }, {
            default: () => n.icon ? n.icon() : c(Ch, null)
          })
        } : null)
      }), c(Sa, {
        teleportDisabled: this.adjustedTo === Sn.tdkey,
        show: this.mergedShow,
        to: this.adjustedTo,
        containerClass: this.namespace,
        placement: this.placement
      }, {
        default: () => c(An, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var r;
            return this.mergedShow ? ((r = this.onRender) === null || r === void 0 || r.call(this), Rr(c(Jm, {
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
            }), [[Ca, this.handleClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), rp = Ce({
  name: "DateTimePanel",
  props: Ra,
  setup(e) {
    return Ea(e, "datetime");
  },
  render() {
    var e, n, t, r;
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
    }, c(ir, {
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
    }), c(ca, Object.assign({
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
    }, ke(s["prev-year"], () => [c(rr, null)])), c("div", {
      class: `${o}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, ke(s["prev-month"], () => [c(nr, null)])), c(lr, {
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
    }, ke(s["next-month"], () => [c(ar, null)])), c("div", {
      class: `${o}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, ke(s["next-year"], () => [c(or, null)]))), c("div", {
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
      return Array.isArray(f) ? null : c(xn, {
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Rt(this.datePickerSlots.clear, {
      onClear: this.clearSelectedDateTime,
      text: this.locale.clear
    }, () => [c(wt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      onClick: this.clearSelectedDateTime
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("now") ? Rt(s.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(wt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, !((r = this.actions) === null || r === void 0) && r.includes("confirm") ? Rt(s.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [c(wt, {
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Ln, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
var op = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const ap = Ce({
  name: "DateTimeRangePanel",
  props: Ia,
  setup(e) {
    return op.NODE_ENV !== "production" && Ft(() => {
      var n;
      !((n = e.actions) === null || n === void 0) && n.includes("now") && yn("date-picker", "The `now` action is not supported for n-date-picker of `datetimerange` type");
    }), ka(e, "datetimerange");
  },
  render() {
    var e, n, t;
    const {
      mergedClsPrefix: r,
      mergedTheme: o,
      shortcuts: a,
      timePickerProps: i,
      onRender: l,
      datePickerSlots: s
    } = this;
    return l == null || l(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${r}-date-panel`, `${r}-date-panel--datetimerange`, !this.panel && `${r}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      class: `${r}-date-panel-header`
    }, c(ir, {
      value: this.startDateDisplayString,
      theme: o.peers.Input,
      themeOverrides: o.peerOverrides.Input,
      size: this.timePickerSize,
      stateful: !1,
      readonly: this.inputReadonly,
      class: `${r}-date-panel-date-input`,
      textDecoration: this.isStartValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleStartDateInputBlur,
      onUpdateValue: this.handleStartDateInput
    }), c(ca, Object.assign({
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
    })), c(ir, {
      value: this.endDateInput,
      theme: o.peers.Input,
      themeOverrides: o.peerOverrides.Input,
      stateful: !1,
      size: this.timePickerSize,
      readonly: this.inputReadonly,
      class: `${r}-date-panel-date-input`,
      textDecoration: this.isEndValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleEndDateInputBlur,
      onUpdateValue: this.handleEndDateInput
    }), c(ca, Object.assign({
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
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start`
    }, c("div", {
      class: `${r}-date-panel-month`
    }, c("div", {
      class: `${r}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, ke(s["prev-year"], () => [c(rr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, ke(s["prev-month"], () => [c(nr, null)])), c(lr, {
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix: r,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), c("div", {
      class: `${r}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, ke(s["next-month"], () => [c(ar, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, ke(s["next-year"], () => [c(or, null)]))), c("div", {
      class: `${r}-date-panel-weekdays`
    }, this.weekdays.map((d) => c("div", {
      key: d,
      class: `${r}-date-panel-weekdays__day`
    }, d))), c("div", {
      class: `${r}-date-panel__divider`
    }), c("div", {
      class: `${r}-date-panel-dates`
    }, this.startDateArray.map((d, u) => {
      const f = this.mergedIsDateDisabled(d.ts);
      return c("div", {
        "data-n-date": !0,
        key: u,
        class: [`${r}-date-panel-date`, {
          [`${r}-date-panel-date--excluded`]: !d.inCurrentMonth,
          [`${r}-date-panel-date--current`]: d.isCurrentDate,
          [`${r}-date-panel-date--selected`]: d.selected,
          [`${r}-date-panel-date--covered`]: d.inSpan,
          [`${r}-date-panel-date--start`]: d.startOfSpan,
          [`${r}-date-panel-date--end`]: d.endOfSpan,
          [`${r}-date-panel-date--disabled`]: f
        }],
        onClick: f ? void 0 : () => {
          this.handleDateClick(d);
        },
        onMouseenter: f ? void 0 : () => {
          this.handleDateMouseEnter(d);
        }
      }, c("div", {
        class: `${r}-date-panel-date__trigger`
      }), d.dateObject.date, d.isCurrentDate ? c("div", {
        class: `${r}-date-panel-date__sup`
      }) : null);
    }))), c("div", {
      class: `${r}-date-panel__vertical-divider`
    }), c("div", {
      ref: "endDatesElRef",
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--end`
    }, c("div", {
      class: `${r}-date-panel-month`
    }, c("div", {
      class: `${r}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, ke(s["prev-year"], () => [c(rr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, ke(s["prev-month"], () => [c(nr, null)])), c(lr, {
      monthBeforeYear: this.calendarMonthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix: r,
      monthYearSeparator: this.calendarHeaderMonthYearSeparator,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), c("div", {
      class: `${r}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, ke(s["next-month"], () => [c(ar, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, ke(s["next-year"], () => [c(or, null)]))), c("div", {
      class: `${r}-date-panel-weekdays`
    }, this.weekdays.map((d) => c("div", {
      key: d,
      class: `${r}-date-panel-weekdays__day`
    }, d))), c("div", {
      class: `${r}-date-panel__divider`
    }), c("div", {
      class: `${r}-date-panel-dates`
    }, this.endDateArray.map((d, u) => {
      const f = this.mergedIsDateDisabled(d.ts);
      return c("div", {
        "data-n-date": !0,
        key: u,
        class: [`${r}-date-panel-date`, {
          [`${r}-date-panel-date--excluded`]: !d.inCurrentMonth,
          [`${r}-date-panel-date--current`]: d.isCurrentDate,
          [`${r}-date-panel-date--selected`]: d.selected,
          [`${r}-date-panel-date--covered`]: d.inSpan,
          [`${r}-date-panel-date--start`]: d.startOfSpan,
          [`${r}-date-panel-date--end`]: d.endOfSpan,
          [`${r}-date-panel-date--disabled`]: f
        }],
        onClick: f ? void 0 : () => {
          this.handleDateClick(d);
        },
        onMouseenter: f ? void 0 : () => {
          this.handleDateMouseEnter(d);
        }
      }, c("div", {
        class: `${r}-date-panel-date__trigger`
      }), d.dateObject.date, d.isCurrentDate ? c("div", {
        class: `${r}-date-panel-date__sup`
      }) : null);
    }))), this.datePickerSlots.footer ? c("div", {
      class: `${r}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${r}-date-panel-actions`
    }, c("div", {
      class: `${r}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) || typeof u == "function" ? c(xn, {
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
      class: `${r}-date-panel-actions__suffix`
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Rt(s.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(wt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("confirm") ? Rt(s.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isRangeInvalid || this.isSelecting,
      text: this.locale.confirm
    }, () => [c(wt, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Ln, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
var ip = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const lp = Ce({
  name: "MonthRangePanel",
  props: Object.assign(Object.assign({}, Ia), {
    type: {
      type: String,
      required: !0
    }
  }),
  setup(e) {
    ip.NODE_ENV !== "production" && Ft(() => {
      var o;
      !((o = e.actions) === null || o === void 0) && o.includes("now") && yn("date-picker", `The \`now\` action is not supported for n-date-picker of ${e.type}type`);
    });
    const n = ka(e, e.type), {
      dateLocaleRef: t
    } = Ar("DatePicker"), r = (o, a, i, l) => {
      const {
        handleColItemClick: s
      } = n;
      return c("div", {
        "data-n-date": !0,
        key: a,
        class: [`${i}-date-panel-month-calendar__picker-col-item`, o.isCurrent && `${i}-date-panel-month-calendar__picker-col-item--current`, o.selected && `${i}-date-panel-month-calendar__picker-col-item--selected`, !1],
        onClick: () => {
          s(o, l);
        }
      }, o.type === "month" ? Nl(o.dateObject.month, o.monthFormat, t.value.locale) : o.type === "quarter" ? Vl(o.dateObject.quarter, o.quarterFormat, t.value.locale) : Wl(o.dateObject.year, o.yearFormat, t.value.locale));
    };
    return on(() => {
      n.justifyColumnsScrollState();
    }), Object.assign(Object.assign({}, n), {
      renderItem: r
    });
  },
  render() {
    var e, n, t;
    const {
      mergedClsPrefix: r,
      mergedTheme: o,
      shortcuts: a,
      type: i,
      renderItem: l,
      onRender: s
    } = this;
    return s == null || s(), c("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${r}-date-panel`, `${r}-date-panel--daterange`, !this.panel && `${r}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, c("div", {
      ref: "startDatesElRef",
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start`
    }, c("div", {
      class: `${r}-date-panel-month-calendar`
    }, c(Kt, {
      ref: "startYearScrollbarRef",
      class: `${r}-date-panel-month-calendar__picker-col`,
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
      default: () => c(na, {
        ref: "startYearVlRef",
        items: this.startYearArray,
        itemSize: Hn,
        showScrollbar: !1,
        keyField: "ts",
        onScroll: this.handleStartYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item: d,
          index: u
        }) => l(d, u, r, "start")
      })
    }), i === "monthrange" || i === "quarterrange" ? c("div", {
      class: `${r}-date-panel-month-calendar__picker-col`
    }, c(Kt, {
      ref: "startMonthScrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar
    }, {
      default: () => [(i === "monthrange" ? this.startMonthArray : this.startQuarterArray).map((d, u) => l(d, u, r, "start")), i === "monthrange" && c("div", {
        class: `${r}-date-panel-month-calendar__padding`
      })]
    })) : null)), c("div", {
      class: `${r}-date-panel__vertical-divider`
    }), c("div", {
      ref: "endDatesElRef",
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--end`
    }, c("div", {
      class: `${r}-date-panel-month-calendar`
    }, c(Kt, {
      ref: "endYearScrollbarRef",
      class: `${r}-date-panel-month-calendar__picker-col`,
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
      default: () => c(na, {
        ref: "endYearVlRef",
        items: this.endYearArray,
        itemSize: Hn,
        showScrollbar: !1,
        keyField: "ts",
        onScroll: this.handleEndYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item: d,
          index: u
        }) => l(d, u, r, "end")
      })
    }), i === "monthrange" || i === "quarterrange" ? c("div", {
      class: `${r}-date-panel-month-calendar__picker-col`
    }, c(Kt, {
      ref: "endMonthScrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar
    }, {
      default: () => [(i === "monthrange" ? this.endMonthArray : this.endQuarterArray).map((d, u) => l(d, u, r, "end")), i === "monthrange" && c("div", {
        class: `${r}-date-panel-month-calendar__padding`
      })]
    })) : null)), vn(this.datePickerSlots.footer, (d) => d ? c("div", {
      class: `${r}-date-panel-footer`
    }, d) : null), !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${r}-date-panel-actions`
    }, c("div", {
      class: `${r}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) || typeof u == "function" ? c(xn, {
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
      class: `${r}-date-panel-actions__suffix`
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Rt(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(xn, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, !((t = this.actions) === null || t === void 0) && t.includes("confirm") ? Rt(this.datePickerSlots.confirm, {
      disabled: this.isRangeInvalid,
      onConfirm: this.handleConfirmClick,
      text: this.locale.confirm
    }, () => [c(xn, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(Ln, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), sp = Object.assign(Object.assign({}, Qt.props), {
  to: Sn.propTo,
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
}), dp = $([oe("date-picker", `
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
 `, [El(), ae("shadow", `
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
}, [N("picker-col", `
 min-width: var(--n-scroll-item-width);
 height: calc(var(--n-scroll-item-height) * 6);
 user-select: none;
 -webkit-user-select: none;
 `, [$("&:first-child", `
 min-width: calc(var(--n-scroll-item-width) + 4px);
 `, [N("picker-col-item", [$("&::before", "left: 4px;")])]), N("padding", `
 height: calc(var(--n-scroll-item-height) * 5)
 `)]), N("picker-col-item", `
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
 `), Wt("disabled", [$("&:hover::before", `
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
 `, [N("prev, next, fast-prev, fast-next", `
 line-height: 0;
 cursor: pointer;
 width: var(--n-arrow-size);
 height: var(--n-arrow-size);
 color: var(--n-arrow-color);
 `), N("month-year", `
 user-select: none;
 -webkit-user-select: none;
 flex-grow: 1;
 position: relative;
 `, [N("text", `
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
 `, [N("day", `
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
 `, [N("trigger", `
 position: absolute;
 left: calc(var(--n-item-size) / 2 - var(--n-item-cell-width) / 2);
 top: calc(var(--n-item-size) / 2 - var(--n-item-cell-height) / 2);
 width: var(--n-item-cell-width);
 height: var(--n-item-cell-height);
 `), ae("current", [N("sup", `
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
 `), ae("covered, start, end", [Wt("excluded", [$("&::before", `
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
})]), N("sup", {
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
 `)])])]), Wt("week", [oe("date-panel-dates", [oe("date-panel-date", [Wt("disabled", [Wt("selected", [$("&:hover", `
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
 `)])])]), N("vertical-divider", `
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
 `, [N("prefix, suffix", `
 display: flex;
 margin-bottom: -8px;
 `), N("suffix", `
 align-self: flex-end;
 `), N("prefix", `
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
function cp(e, n) {
  const t = P(() => {
    const {
      isTimeDisabled: u
    } = e, {
      value: f
    } = n;
    if (!(f === null || Array.isArray(f)))
      return u == null ? void 0 : u(f);
  }), r = P(() => {
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
      value: h
    } = n;
    return h === null || Array.isArray(h) || !["date", "datetime"].includes(u) || !f ? !1 : f(h, {
      type: "input"
    });
  }), l = P(() => {
    const {
      type: u
    } = e, {
      value: f
    } = n;
    if (f === null || u === "datetime" || Array.isArray(f))
      return !1;
    const h = new Date(f), g = h.getHours(), m = h.getMinutes(), C = h.getMinutes();
    return (r.value ? r.value(g) : !1) || (o.value ? o.value(m, g) : !1) || (a.value ? a.value(C, m, g) : !1);
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
    isHourDisabledRef: r,
    isMinuteDisabledRef: o,
    isSecondDisabledRef: a
  };
}
function up(e, n) {
  const t = P(() => {
    const {
      isTimeDisabled: f
    } = e, {
      value: h
    } = n;
    return !Array.isArray(h) || !f ? [void 0, void 0] : [f == null ? void 0 : f(h[0], "start", h), f == null ? void 0 : f(h[1], "end", h)];
  }), r = {
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
      isDateDisabled: h
    } = e, {
      value: g
    } = n;
    return g === null || !Array.isArray(g) || !["daterange", "datetimerange"].includes(f) || !h ? !1 : h(g[0], "start", g);
  }), a = P(() => {
    const {
      type: f,
      isDateDisabled: h
    } = e, {
      value: g
    } = n;
    return g === null || !Array.isArray(g) || !["daterange", "datetimerange"].includes(f) || !h ? !1 : h(g[1], "end", g);
  }), i = P(() => {
    const {
      type: f
    } = e, {
      value: h
    } = n;
    if (h === null || !Array.isArray(h) || f !== "datetimerange")
      return !1;
    const g = gn(h[0]), m = eo(h[0]), C = to(h[0]), {
      isStartHourDisabledRef: y,
      isStartMinuteDisabledRef: b,
      isStartSecondDisabledRef: D
    } = r;
    return (y.value ? y.value(g) : !1) || (b.value ? b.value(m, g) : !1) || (D.value ? D.value(C, m, g) : !1);
  }), l = P(() => {
    const {
      type: f
    } = e, {
      value: h
    } = n;
    if (h === null || !Array.isArray(h) || f !== "datetimerange")
      return !1;
    const g = gn(h[1]), m = eo(h[1]), C = to(h[1]), {
      isEndHourDisabledRef: y,
      isEndMinuteDisabledRef: b,
      isEndSecondDisabledRef: D
    } = r;
    return (y.value ? y.value(g) : !1) || (b.value ? b.value(m, g) : !1) || (D.value ? D.value(C, m, g) : !1);
  }), s = P(() => o.value || i.value), d = P(() => a.value || l.value), u = P(() => s.value || d.value);
  return Object.assign(Object.assign({}, r), {
    isStartDateInvalidRef: o,
    isEndDateInvalidRef: a,
    isStartTimeInvalidRef: i,
    isEndTimeInvalidRef: l,
    isStartValueInvalidRef: s,
    isEndValueInvalidRef: d,
    isRangeInvalidRef: u
  });
}
var fp = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_5880_KFZDRTDRKYIEMKZW", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const hp = Ce({
  name: "DatePicker",
  props: sp,
  slots: Object,
  setup(e, {
    slots: n
  }) {
    var t;
    fp.NODE_ENV !== "production" && Ft(() => {
      e.onChange !== void 0 && yn("date-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      localeRef: r,
      dateLocaleRef: o
    } = Ar("DatePicker"), a = vo(e), {
      mergedSizeRef: i,
      mergedDisabledRef: l,
      mergedStatusRef: s
    } = a, {
      mergedComponentPropsRef: d,
      mergedClsPrefixRef: u,
      mergedBorderedRef: f,
      namespaceRef: h,
      inlineThemeDisabled: g
    } = Fr(e), m = F(null), C = F(null), y = F(null), b = F(!1), D = Ye(e, "show"), E = ao(D, b), M = P(() => ({
      locale: o.value.locale,
      useAdditionalWeekYearTokens: !0
    })), L = P(() => {
      const {
        format: w
      } = e;
      if (w) return w;
      switch (e.type) {
        case "date":
        case "daterange":
          return r.value.dateFormat;
        case "datetime":
        case "datetimerange":
          return r.value.dateTimeFormat;
        case "year":
        case "yearrange":
          return r.value.yearTypeFormat;
        case "month":
        case "monthrange":
          return r.value.monthTypeFormat;
        case "quarter":
        case "quarterrange":
          return r.value.quarterFormat;
        case "week":
          return r.value.weekFormat;
      }
    }), V = P(() => {
      var w;
      return (w = e.valueFormat) !== null && w !== void 0 ? w : L.value;
    });
    function p(w) {
      if (w === null) return null;
      const {
        value: G
      } = V, {
        value: te
      } = M;
      return Array.isArray(w) ? [kt(w[0], G, /* @__PURE__ */ new Date(), te).getTime(), kt(w[1], G, /* @__PURE__ */ new Date(), te).getTime()] : kt(w, G, /* @__PURE__ */ new Date(), te).getTime();
    }
    const {
      defaultFormattedValue: T,
      defaultValue: I
    } = e, U = F((t = T !== void 0 ? p(T) : I) !== null && t !== void 0 ? t : null), Y = P(() => {
      const {
        formattedValue: w
      } = e;
      return w !== void 0 ? p(w) : e.value;
    }), z = ao(Y, U), S = F(null);
    Ft(() => {
      S.value = z.value;
    });
    const A = F(""), Z = F(""), re = F(""), K = Qt("DatePicker", "-date-picker", dp, rm, e, u), me = P(() => {
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
            return r.value.datePlaceholder;
          case "datetime":
            return r.value.datetimePlaceholder;
          case "month":
            return r.value.monthPlaceholder;
          case "year":
            return r.value.yearPlaceholder;
          case "quarter":
            return r.value.quarterPlaceholder;
          case "week":
            return r.value.weekPlaceholder;
          default:
            return "";
        }
      } else
        return w;
    }), Te = P(() => e.startPlaceholder === void 0 ? e.type === "daterange" ? r.value.startDatePlaceholder : e.type === "datetimerange" ? r.value.startDatetimePlaceholder : e.type === "monthrange" ? r.value.startMonthPlaceholder : "" : e.startPlaceholder), Fe = P(() => e.endPlaceholder === void 0 ? e.type === "daterange" ? r.value.endDatePlaceholder : e.type === "datetimerange" ? r.value.endDatetimePlaceholder : e.type === "monthrange" ? r.value.endMonthPlaceholder : "" : e.endPlaceholder), Je = P(() => {
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
          Pl("date-picker", "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`.");
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
        } = M;
        return [Le(w[0], G, te), Le(w[1], G, M.value)];
      } else
        return Le(w, V.value, M.value);
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
    function Ne(w, G) {
      const {
        "onUpdate:value": te,
        onUpdateValue: fe,
        onChange: qe
      } = e, {
        nTriggerFormChange: it,
        nTriggerFormInput: _
      } = a, H = be(w);
      G.doConfirm && he(w, H), fe && Pe(fe, w, H), te && Pe(te, w, H), qe && Pe(qe, w, H), U.value = w, pe(H, w), it(), _();
    }
    function nt() {
      const {
        onClear: w
      } = e;
      w == null || w();
    }
    function he(w, G) {
      const {
        onConfirm: te
      } = e;
      te && te(w, G);
    }
    function Ct(w) {
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
    function rt(w) {
      const {
        "onUpdate:show": G,
        onUpdateShow: te
      } = e;
      G && Pe(G, w), te && Pe(te, w), b.value = w;
    }
    function ot(w) {
      w.key === "Escape" && E.value && (io(w), pt({
        returnFocus: !0
      }));
    }
    function Et(w) {
      w.key === "Escape" && E.value && io(w);
    }
    function Ht() {
      var w;
      rt(!1), (w = y.value) === null || w === void 0 || w.deactivate(), nt();
    }
    function Pt() {
      var w;
      (w = y.value) === null || w === void 0 || w.deactivate(), nt();
    }
    function zt() {
      pt({
        returnFocus: !0
      });
    }
    function bt(w) {
      var G;
      E.value && !(!((G = C.value) === null || G === void 0) && G.contains(ho(w))) && pt({
        returnFocus: !1
      });
    }
    function Bt(w) {
      pt({
        returnFocus: !0,
        disableUpdateOnClose: w
      });
    }
    function Oe(w, G) {
      G ? Ne(w, {
        doConfirm: !1
      }) : we(w);
    }
    function ze() {
      const w = S.value;
      Ne(Array.isArray(w) ? [w[0], w[1]] : w, {
        doConfirm: !0
      });
    }
    function et() {
      const {
        value: w
      } = S;
      ve.value ? (Array.isArray(w) || w === null) && _t(w) : Array.isArray(w) || qt(w);
    }
    function qt(w) {
      w === null ? A.value = "" : A.value = Le(w, L.value, M.value);
    }
    function _t(w) {
      if (w === null)
        Z.value = "", re.value = "";
      else {
        const G = M.value;
        Z.value = Le(w[0], L.value, G), re.value = Le(w[1], L.value, G);
      }
    }
    function at() {
      E.value || Ge();
    }
    function ht(w) {
      var G;
      !((G = m.value) === null || G === void 0) && G.$el.contains(w.relatedTarget) || (ye(w), et(), pt({
        returnFocus: !1
      }));
    }
    function O() {
      l.value || (et(), pt({
        returnFocus: !1
      }));
    }
    function ue(w) {
      if (w === "") {
        Ne(null, {
          doConfirm: !1
        }), S.value = null, A.value = "";
        return;
      }
      const G = kt(w, L.value, /* @__PURE__ */ new Date(), M.value);
      Ut(G) ? (Ne(j(G), {
        doConfirm: !1
      }), et()) : A.value = w;
    }
    function Ee(w, {
      source: G
    }) {
      if (w[0] === "" && w[1] === "") {
        Ne(null, {
          doConfirm: !1
        }), S.value = null, Z.value = "", re.value = "";
        return;
      }
      const [te, fe] = w, qe = kt(te, L.value, /* @__PURE__ */ new Date(), M.value), it = kt(fe, L.value, /* @__PURE__ */ new Date(), M.value);
      if (Ut(qe) && Ut(it)) {
        let _ = j(qe), H = j(it);
        it < qe && (G === 0 ? H = _ : _ = H), Ne([_, H], {
          doConfirm: !1
        }), et();
      } else
        [Z.value, re.value] = w;
    }
    function an(w) {
      l.value || rl(w, "clear") || E.value || Ge();
    }
    function Lt(w) {
      l.value || Ct(w);
    }
    function Ge() {
      l.value || E.value || rt(!0);
    }
    function pt({
      returnFocus: w,
      disableUpdateOnClose: G
    }) {
      var te;
      E.value && (rt(!1), e.type !== "date" && e.updateValueOnClose && !G && ze(), w && ((te = y.value) === null || te === void 0 || te.focus()));
    }
    ft(S, () => {
      et();
    }), et(), ft(E, (w) => {
      w || (S.value = z.value);
    });
    const xt = cp(e, S), Zt = up(e, S);
    zn(bo, Object.assign(Object.assign(Object.assign({
      mergedClsPrefixRef: u,
      mergedThemeRef: K,
      timePickerSizeRef: me,
      localeRef: r,
      dateLocaleRef: o,
      firstDayOfWeekRef: Ye(e, "firstDayOfWeek"),
      isDateDisabledRef: Ye(e, "isDateDisabled"),
      rangesRef: Ye(e, "ranges"),
      timePickerPropsRef: Ye(e, "timePickerProps"),
      closeOnSelectRef: Ye(e, "closeOnSelect"),
      updateValueOnCloseRef: Ye(e, "updateValueOnClose"),
      monthFormatRef: Ye(e, "monthFormat"),
      yearFormatRef: Ye(e, "yearFormat"),
      quarterFormatRef: Ye(e, "quarterFormat"),
      yearRangeRef: Ye(e, "yearRange")
    }, xt), Zt), {
      datePickerSlots: n
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
    }, J = P(() => {
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
    }), le = g ? $n("date-picker-trigger", void 0, J, e) : void 0, Me = P(() => {
      const {
        type: w
      } = e, {
        common: {
          cubicBezierEaseInOut: G
        },
        self: {
          calendarTitleFontSize: te,
          calendarDaysFontSize: fe,
          itemFontSize: qe,
          itemTextColor: it,
          itemColorDisabled: _,
          itemColorIncluded: H,
          itemColorHover: q,
          itemColorActive: xe,
          itemBorderRadius: Qe,
          itemTextColorDisabled: We,
          itemTextColorActive: Ae,
          panelColor: v,
          panelTextColor: R,
          arrowColor: ie,
          calendarTitleTextColor: _e,
          panelActionDividerColor: He,
          panelHeaderDividerColor: De,
          calendarDaysDividerColor: Dt,
          panelBoxShadow: Nt,
          panelBorderRadius: ct,
          calendarTitleFontWeight: ln,
          panelExtraFooterPadding: sn,
          panelActionPadding: wn,
          itemSize: mr,
          itemCellWidth: pr,
          itemCellHeight: gr,
          scrollItemWidth: x,
          scrollItemHeight: W,
          calendarTitlePadding: se,
          calendarTitleHeight: ut,
          calendarDaysHeight: Vt,
          calendarDaysTextColor: Ue,
          arrowSize: Pn,
          panelHeaderPadding: Vn,
          calendarDividerColor: _n,
          calendarTitleGridTempateColumns: So,
          iconColor: yo,
          iconColorDisabled: wo,
          scrollItemBorderRadius: Po,
          calendarTitleColorHover: _o,
          [Se("calendarLeftPadding", w)]: Do,
          [Se("calendarRightPadding", w)]: To
        }
      } = K.value;
      return {
        "--n-bezier": G,
        "--n-panel-border-radius": ct,
        "--n-panel-color": v,
        "--n-panel-box-shadow": Nt,
        "--n-panel-text-color": R,
        // panel header
        "--n-panel-header-padding": Vn,
        "--n-panel-header-divider-color": De,
        // panel calendar
        "--n-calendar-left-padding": Do,
        "--n-calendar-right-padding": To,
        "--n-calendar-title-color-hover": _o,
        "--n-calendar-title-height": ut,
        "--n-calendar-title-padding": se,
        "--n-calendar-title-font-size": te,
        "--n-calendar-title-font-weight": ln,
        "--n-calendar-title-text-color": _e,
        "--n-calendar-title-grid-template-columns": So,
        "--n-calendar-days-height": Vt,
        "--n-calendar-days-divider-color": Dt,
        "--n-calendar-days-font-size": fe,
        "--n-calendar-days-text-color": Ue,
        "--n-calendar-divider-color": _n,
        // panel action
        "--n-panel-action-padding": wn,
        "--n-panel-extra-footer-padding": sn,
        "--n-panel-action-divider-color": He,
        // panel item
        "--n-item-font-size": qe,
        "--n-item-border-radius": Qe,
        "--n-item-size": mr,
        "--n-item-cell-width": pr,
        "--n-item-cell-height": gr,
        "--n-item-text-color": it,
        "--n-item-color-included": H,
        "--n-item-color-disabled": _,
        "--n-item-color-hover": q,
        "--n-item-color-active": xe,
        "--n-item-text-color-disabled": We,
        "--n-item-text-color-active": Ae,
        // scroll item
        "--n-scroll-item-width": x,
        "--n-scroll-item-height": W,
        "--n-scroll-item-border-radius": Po,
        // panel arrow
        "--n-arrow-size": Pn,
        "--n-arrow-color": ie,
        // icon in trigger
        "--n-icon-color": yo,
        "--n-icon-color-disabled": wo
      };
    }), Ie = g ? $n("date-picker", P(() => e.type), Me, e) : void 0;
    return Object.assign(Object.assign({}, k), {
      mergedStatus: s,
      mergedClsPrefix: u,
      mergedBordered: f,
      namespace: h,
      uncontrolledValue: U,
      pendingValue: S,
      panelInstRef: m,
      triggerElRef: C,
      inputInstRef: y,
      isMounted: mo(),
      displayTime: A,
      displayStartTime: Z,
      displayEndTime: re,
      mergedShow: E,
      adjustedTo: Sn(e),
      isRange: ve,
      localizedStartPlaceholder: Te,
      localizedEndPlaceholder: Fe,
      mergedSize: i,
      mergedDisabled: l,
      localizedPlacehoder: de,
      isValueInvalid: xt.isValueInvalidRef,
      isStartValueInvalid: Zt.isStartValueInvalidRef,
      isEndValueInvalid: Zt.isEndValueInvalidRef,
      handleInputKeydown: Et,
      handleClickOutside: bt,
      handleKeydown: ot,
      handleClear: Ht,
      handlePanelClear: Pt,
      handleTriggerClick: an,
      handleInputActivate: at,
      handleInputDeactivate: O,
      handleInputFocus: Lt,
      handleInputBlur: ht,
      handlePanelTabOut: zt,
      handlePanelClose: Bt,
      handleRangeUpdateValue: Ee,
      handleSingleUpdateValue: ue,
      handlePanelUpdateValue: Oe,
      handlePanelConfirm: ze,
      mergedTheme: K,
      actions: Je,
      triggerCssVars: g ? void 0 : J,
      triggerThemeClass: le == null ? void 0 : le.themeClass,
      triggerOnRender: le == null ? void 0 : le.onRender,
      cssVars: g ? void 0 : Me,
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
      triggerOnRender: n,
      mergedClsPrefix: t,
      $slots: r
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
      return l === "datetime" ? c(rp, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), r) : l === "daterange" ? c(xm, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), r) : l === "datetimerange" ? c(ap, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), r) : l === "month" || l === "year" || l === "quarter" ? c(Yl, Object.assign({}, o, {
        type: l,
        key: l
      })) : l === "monthrange" || l === "yearrange" || l === "quarterrange" ? c(lp, Object.assign({}, o, {
        type: l
      })) : c(Cm, Object.assign({}, o, {
        type: l,
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), r);
    };
    if (this.panel)
      return a();
    n == null || n();
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
    }, c(ba, null, {
      default: () => [c(xa, null, {
        default: () => this.isRange ? c(ir, Object.assign({
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
          separator: () => this.separator === void 0 ? ke(r.separator, () => [c(bn, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => c(bh, null)
          })]) : this.separator,
          [e ? "clear-icon-placeholder" : "suffix"]: () => ke(r["date-icon"], () => [c(bn, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => c(vi, null)
          })])
        }) : c(ir, Object.assign({
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
          [e ? "clear-icon-placeholder" : "suffix"]: () => c(bn, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => ke(r["date-icon"], () => [c(vi, null)])
          })
        })
      }), c(Sa, {
        show: this.mergedShow,
        containerClass: this.namespace,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === Sn.tdkey,
        placement: this.placement
      }, {
        default: () => c(An, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? Rr(a(), [[Ca, this.handleClickOutside, void 0, {
            capture: !0
          }]]) : null
        })
      })]
    }));
  }
}), mp = {
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
    validator: () => (Pl("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, pp = Ce({
  name: "ConfigProvider",
  alias: ["App"],
  props: mp,
  setup(e) {
    const n = Xe(un, null), t = P(() => {
      const {
        theme: C
      } = e;
      if (C === null) return;
      const y = n == null ? void 0 : n.mergedThemeRef.value;
      return C === void 0 ? y : y === void 0 ? C : Object.assign({}, y, C);
    }), r = P(() => {
      const {
        themeOverrides: C
      } = e;
      if (C !== null) {
        if (C === void 0)
          return n == null ? void 0 : n.mergedThemeOverridesRef.value;
        {
          const y = n == null ? void 0 : n.mergedThemeOverridesRef.value;
          return y === void 0 ? C : br({}, y, C);
        }
      }
    }), o = Yt(() => {
      const {
        namespace: C
      } = e;
      return C === void 0 ? n == null ? void 0 : n.mergedNamespaceRef.value : C;
    }), a = Yt(() => {
      const {
        bordered: C
      } = e;
      return C === void 0 ? n == null ? void 0 : n.mergedBorderedRef.value : C;
    }), i = P(() => {
      const {
        icons: C
      } = e;
      return C === void 0 ? n == null ? void 0 : n.mergedIconsRef.value : C;
    }), l = P(() => {
      const {
        componentOptions: C
      } = e;
      return C !== void 0 ? C : n == null ? void 0 : n.mergedComponentPropsRef.value;
    }), s = P(() => {
      const {
        clsPrefix: C
      } = e;
      return C !== void 0 ? C : n ? n.mergedClsPrefixRef.value : ra;
    }), d = P(() => {
      var C;
      const {
        rtl: y
      } = e;
      if (y === void 0)
        return n == null ? void 0 : n.mergedRtlRef.value;
      const b = {};
      for (const D of y)
        b[D.name] = $a(D), (C = D.peers) === null || C === void 0 || C.forEach((E) => {
          E.name in b || (b[E.name] = $a(E));
        });
      return b;
    }), u = P(() => e.breakpoints || (n == null ? void 0 : n.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (n == null ? void 0 : n.inlineThemeDisabled), h = e.preflightStyleDisabled || (n == null ? void 0 : n.preflightStyleDisabled), g = e.styleMountTarget || (n == null ? void 0 : n.styleMountTarget), m = P(() => {
      const {
        value: C
      } = t, {
        value: y
      } = r, b = y && Object.keys(y).length !== 0, D = C == null ? void 0 : C.name;
      return D ? b ? `${D}-${Dr(JSON.stringify(r.value))}` : D : b ? Dr(JSON.stringify(r.value)) : "";
    });
    return zn(un, {
      mergedThemeHashRef: m,
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
          return C === void 0 ? n == null ? void 0 : n.mergedLocaleRef.value : C;
      }),
      mergedDateLocaleRef: P(() => {
        const {
          dateLocale: C
        } = e;
        if (C !== null)
          return C === void 0 ? n == null ? void 0 : n.mergedDateLocaleRef.value : C;
      }),
      mergedHljsRef: P(() => {
        const {
          hljs: C
        } = e;
        return C === void 0 ? n == null ? void 0 : n.mergedHljsRef.value : C;
      }),
      mergedKatexRef: P(() => {
        const {
          katex: C
        } = e;
        return C === void 0 ? n == null ? void 0 : n.mergedKatexRef.value : C;
      }),
      mergedThemeRef: t,
      mergedThemeOverridesRef: r,
      inlineThemeDisabled: f || !1,
      preflightStyleDisabled: h || !1,
      styleMountTarget: g
    }), {
      mergedClsPrefix: s,
      mergedBordered: a,
      mergedNamespace: o,
      mergedTheme: t,
      mergedThemeOverrides: r
    };
  },
  render() {
    var e, n, t, r;
    return this.abstract ? (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t) : c(this.as || this.tag, {
      class: `${this.mergedClsPrefix || ra}-config-provider`
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
}), gp = {
  iconMargin: "11px 8px 0 12px",
  iconMarginRtl: "11px 12px 0 8px",
  iconSize: "24px",
  closeIconSize: "16px",
  closeSize: "20px",
  closeMargin: "13px 14px 0 0",
  closeMarginRtl: "13px 0 0 14px",
  padding: "13px"
}, vp = {
  name: "Alert",
  common: B,
  self(e) {
    const {
      lineHeight: n,
      borderRadius: t,
      fontWeightStrong: r,
      dividerColor: o,
      inputColor: a,
      textColor1: i,
      textColor2: l,
      closeColorHover: s,
      closeColorPressed: d,
      closeIconColor: u,
      closeIconColorHover: f,
      closeIconColorPressed: h,
      infoColorSuppl: g,
      successColorSuppl: m,
      warningColorSuppl: C,
      errorColorSuppl: y,
      fontSize: b
    } = e;
    return Object.assign(Object.assign({}, gp), {
      fontSize: b,
      lineHeight: n,
      titleFontWeight: r,
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
      closeIconColorPressed: h,
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
      closeIconColorPressedInfo: h,
      borderSuccess: `1px solid ${Q(m, {
        alpha: 0.35
      })}`,
      colorSuccess: Q(m, {
        alpha: 0.25
      }),
      titleTextColorSuccess: i,
      iconColorSuccess: m,
      contentTextColorSuccess: l,
      closeColorHoverSuccess: s,
      closeColorPressedSuccess: d,
      closeIconColorSuccess: u,
      closeIconColorHoverSuccess: f,
      closeIconColorPressedSuccess: h,
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
      closeIconColorPressedWarning: h,
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
      closeIconColorPressedError: h
    });
  }
}, Cp = {
  linkFontSize: "13px",
  linkPadding: "0 0 0 16px",
  railWidth: "4px"
};
function bp(e) {
  const {
    borderRadius: n,
    railColor: t,
    primaryColor: r,
    primaryColorHover: o,
    primaryColorPressed: a,
    textColor2: i
  } = e;
  return Object.assign(Object.assign({}, Cp), {
    borderRadius: n,
    railColor: t,
    railColorActive: r,
    linkColor: Q(r, {
      alpha: 0.15
    }),
    linkTextColor: i,
    linkTextColorHover: o,
    linkTextColorPressed: a,
    linkTextColorActive: r
  });
}
const xp = {
  name: "Anchor",
  common: B,
  self: bp
};
function Sp(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const yp = {
  name: "AutoComplete",
  common: B,
  peers: {
    InternalSelectMenu: Hr,
    Input: Gt
  },
  self: Sp
};
function wp(e) {
  const {
    borderRadius: n,
    avatarColor: t,
    cardColor: r,
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
    borderRadius: n,
    fontSize: o,
    border: `2px solid ${r}`,
    heightTiny: a,
    heightSmall: i,
    heightMedium: l,
    heightLarge: s,
    heightHuge: d,
    color: ne(r, t),
    colorModal: ne(u, t),
    colorPopover: ne(f, t)
  };
}
const Ql = {
  name: "Avatar",
  common: B,
  self: wp
};
function Pp() {
  return {
    gap: "-12px"
  };
}
const _p = {
  name: "AvatarGroup",
  common: B,
  peers: {
    Avatar: Ql
  },
  self: Pp
}, Dp = {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  iconSize: "26px"
}, Tp = {
  name: "BackTop",
  common: B,
  self(e) {
    const {
      popoverColor: n,
      textColor2: t,
      primaryColorHover: r,
      primaryColorPressed: o
    } = e;
    return Object.assign(Object.assign({}, Dp), {
      color: n,
      textColor: t,
      iconColor: t,
      iconColorHover: r,
      iconColorPressed: o,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
    });
  }
}, Mp = {
  name: "Badge",
  common: B,
  self(e) {
    const {
      errorColorSuppl: n,
      infoColorSuppl: t,
      successColorSuppl: r,
      warningColorSuppl: o,
      fontFamily: a
    } = e;
    return {
      color: n,
      colorInfo: t,
      colorSuccess: r,
      colorError: n,
      colorWarning: o,
      fontSize: "12px",
      fontFamily: a
    };
  }
}, Op = {
  fontWeightActive: "400"
};
function Rp(e) {
  const {
    fontSize: n,
    textColor3: t,
    textColor2: r,
    borderRadius: o,
    buttonColor2Hover: a,
    buttonColor2Pressed: i
  } = e;
  return Object.assign(Object.assign({}, Op), {
    fontSize: n,
    itemLineHeight: "1.25",
    itemTextColor: t,
    itemTextColorHover: r,
    itemTextColorPressed: r,
    itemTextColorActive: r,
    itemBorderRadius: o,
    itemColorHover: a,
    itemColorPressed: i,
    separatorColor: t
  });
}
const Ep = {
  name: "Breadcrumb",
  common: B,
  self: Rp
}, Ip = {
  name: "ButtonGroup",
  common: B
}, kp = {
  titleFontSize: "22px"
};
function Fp(e) {
  const {
    borderRadius: n,
    fontSize: t,
    lineHeight: r,
    textColor2: o,
    textColor1: a,
    textColorDisabled: i,
    dividerColor: l,
    fontWeightStrong: s,
    primaryColor: d,
    baseColor: u,
    hoverColor: f,
    cardColor: h,
    modalColor: g,
    popoverColor: m
  } = e;
  return Object.assign(Object.assign({}, kp), {
    borderRadius: n,
    borderColor: ne(h, l),
    borderColorModal: ne(g, l),
    borderColorPopover: ne(m, l),
    textColor: o,
    titleFontWeight: s,
    titleTextColor: a,
    dayTextColor: i,
    fontSize: t,
    lineHeight: r,
    dateColorCurrent: d,
    dateTextColorCurrent: u,
    cellColorHover: ne(h, f),
    cellColorHoverModal: ne(g, f),
    cellColorHoverPopover: ne(m, f),
    cellColor: h,
    cellColorModal: g,
    cellColorPopover: m,
    barColor: d
  });
}
const Ap = {
  name: "Calendar",
  common: B,
  peers: {
    Button: $t
  },
  self: Fp
}, $p = {
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
function Hp(e) {
  const {
    primaryColor: n,
    borderRadius: t,
    lineHeight: r,
    fontSize: o,
    cardColor: a,
    textColor2: i,
    textColor1: l,
    dividerColor: s,
    fontWeightStrong: d,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: h,
    closeColorHover: g,
    closeColorPressed: m,
    modalColor: C,
    boxShadow1: y,
    popoverColor: b,
    actionColor: D
  } = e;
  return Object.assign(Object.assign({}, $p), {
    lineHeight: r,
    color: a,
    colorModal: C,
    colorPopover: b,
    colorTarget: n,
    colorEmbedded: D,
    colorEmbeddedModal: D,
    colorEmbeddedPopover: D,
    textColor: i,
    titleTextColor: l,
    borderColor: s,
    actionColor: D,
    titleFontWeight: d,
    closeColorHover: g,
    closeColorPressed: m,
    closeBorderRadius: t,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: h,
    fontSizeSmall: o,
    fontSizeMedium: o,
    fontSizeLarge: o,
    fontSizeHuge: o,
    boxShadow: y,
    borderRadius: t
  });
}
const Zl = {
  name: "Card",
  common: B,
  self(e) {
    const n = Hp(e), {
      cardColor: t,
      modalColor: r,
      popoverColor: o
    } = e;
    return n.colorEmbedded = t, n.colorEmbeddedModal = r, n.colorEmbeddedPopover = o, n;
  }
};
function zp() {
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
const Bp = {
  name: "Carousel",
  common: B,
  self: zp
}, Lp = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function Np(e) {
  const {
    baseColor: n,
    inputColorDisabled: t,
    cardColor: r,
    modalColor: o,
    popoverColor: a,
    textColorDisabled: i,
    borderColor: l,
    primaryColor: s,
    textColor2: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: h,
    borderRadiusSmall: g,
    lineHeight: m
  } = e;
  return Object.assign(Object.assign({}, Lp), {
    labelLineHeight: m,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: h,
    borderRadius: g,
    color: n,
    colorChecked: s,
    colorDisabled: t,
    colorDisabledChecked: t,
    colorTableHeader: r,
    colorTableHeaderModal: o,
    colorTableHeaderPopover: a,
    checkMarkColor: n,
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
const hr = {
  name: "Checkbox",
  common: B,
  self(e) {
    const {
      cardColor: n
    } = e, t = Np(e);
    return t.color = "#0000", t.checkMarkColor = n, t;
  }
};
function Wp(e) {
  const {
    borderRadius: n,
    boxShadow2: t,
    popoverColor: r,
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
    menuBorderRadius: n,
    menuColor: r,
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
const Vp = {
  name: "Cascader",
  common: B,
  peers: {
    InternalSelectMenu: Hr,
    InternalSelection: Ta,
    Scrollbar: At,
    Checkbox: hr,
    Empty: Ah
  },
  self: Wp
}, Jl = {
  name: "Code",
  common: B,
  self(e) {
    const {
      textColor2: n,
      fontSize: t,
      fontWeightStrong: r,
      textColor3: o
    } = e;
    return {
      textColor: n,
      fontSize: t,
      fontWeightStrong: r,
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
function jp(e) {
  const {
    cubicBezierEaseInOut: n
  } = e;
  return {
    bezier: n
  };
}
const Up = {
  name: "CollapseTransition",
  common: B,
  self: jp
};
function Yp(e) {
  const {
    fontWeight: n,
    textColor1: t,
    textColor2: r,
    textColorDisabled: o,
    dividerColor: a,
    fontSize: i
  } = e;
  return {
    titleFontSize: i,
    titleFontWeight: n,
    dividerColor: a,
    titleTextColor: t,
    titleTextColorDisabled: o,
    fontSize: i,
    textColor: r,
    arrowColor: r,
    arrowColorDisabled: o,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
}
const Gp = {
  name: "Collapse",
  common: B,
  self: Yp
};
function qp(e) {
  const {
    fontSize: n,
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: a,
    borderColor: i,
    heightSmall: l,
    heightMedium: s,
    heightLarge: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: h,
    dividerColor: g
  } = e;
  return {
    panelFontSize: n,
    boxShadow: t,
    color: r,
    textColor: o,
    borderRadius: a,
    border: `1px solid ${i}`,
    heightSmall: l,
    heightMedium: s,
    heightLarge: d,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: h,
    dividerColor: g
  };
}
const Kp = {
  name: "ColorPicker",
  common: B,
  peers: {
    Input: Gt,
    Button: $t
  },
  self: qp
}, Xp = {
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
function Qp(e) {
  const {
    primaryColor: n,
    textColor2: t,
    dividerColor: r,
    hoverColor: o,
    popoverColor: a,
    invertedColor: i,
    borderRadius: l,
    fontSizeSmall: s,
    fontSizeMedium: d,
    fontSizeLarge: u,
    fontSizeHuge: f,
    heightSmall: h,
    heightMedium: g,
    heightLarge: m,
    heightHuge: C,
    textColor3: y,
    opacityDisabled: b
  } = e;
  return Object.assign(Object.assign({}, Xp), {
    optionHeightSmall: h,
    optionHeightMedium: g,
    optionHeightLarge: m,
    optionHeightHuge: C,
    borderRadius: l,
    fontSizeSmall: s,
    fontSizeMedium: d,
    fontSizeLarge: u,
    fontSizeHuge: f,
    // non-inverted
    optionTextColor: t,
    optionTextColorHover: t,
    optionTextColorActive: n,
    optionTextColorChildActive: n,
    color: a,
    dividerColor: r,
    suffixColor: t,
    prefixColor: t,
    optionColorHover: o,
    optionColorActive: Q(n, {
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
    optionColorHoverInverted: n,
    optionColorActiveInverted: n,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: b
  });
}
const Aa = {
  name: "Dropdown",
  common: B,
  peers: {
    Popover: Wn
  },
  self(e) {
    const {
      primaryColorSuppl: n,
      primaryColor: t,
      popoverColor: r
    } = e, o = Qp(e);
    return o.colorInverted = r, o.optionColorActive = Q(t, {
      alpha: 0.15
    }), o.optionColorActiveInverted = n, o.optionColorHoverInverted = n, o;
  }
}, Zp = {
  padding: "8px 14px"
}, xo = {
  name: "Tooltip",
  common: B,
  peers: {
    Popover: Wn
  },
  self(e) {
    const {
      borderRadius: n,
      boxShadow2: t,
      popoverColor: r,
      textColor2: o
    } = e;
    return Object.assign(Object.assign({}, Zp), {
      borderRadius: n,
      boxShadow: t,
      color: r,
      textColor: o
    });
  }
}, es = {
  name: "Ellipsis",
  common: B,
  peers: {
    Tooltip: xo
  }
}, ts = {
  name: "Popselect",
  common: B,
  peers: {
    Popover: Wn,
    InternalSelectMenu: Hr
  }
};
function Jp(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const ns = {
  name: "Select",
  common: B,
  peers: {
    InternalSelection: Ta,
    InternalSelectMenu: Hr
  },
  self: Jp
}, eg = {
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
function tg(e) {
  const {
    textColor2: n,
    primaryColor: t,
    primaryColorHover: r,
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
    heightTiny: h,
    heightSmall: g,
    heightMedium: m
  } = e;
  return Object.assign(Object.assign({}, eg), {
    buttonColor: "#0000",
    buttonColorHover: "#0000",
    buttonColorPressed: "#0000",
    buttonBorder: `1px solid ${l}`,
    buttonBorderHover: `1px solid ${l}`,
    buttonBorderPressed: `1px solid ${l}`,
    buttonIconColor: n,
    buttonIconColorHover: n,
    buttonIconColorPressed: n,
    itemTextColor: n,
    itemTextColorHover: r,
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
    itemSizeSmall: h,
    itemSizeMedium: g,
    itemSizeLarge: m,
    itemFontSizeSmall: d,
    itemFontSizeMedium: u,
    itemFontSizeLarge: f,
    jumperFontSizeSmall: d,
    jumperFontSizeMedium: u,
    jumperFontSizeLarge: f,
    jumperTextColor: n,
    jumperTextColorDisabled: i
  });
}
const rs = {
  name: "Pagination",
  common: B,
  peers: {
    Select: ns,
    Input: Gt,
    Popselect: ts
  },
  self(e) {
    const {
      primaryColor: n,
      opacity3: t
    } = e, r = Q(n, {
      alpha: Number(t)
    }), o = tg(e);
    return o.itemBorderActive = `1px solid ${r}`, o.itemBorderDisabled = "1px solid #0000", o;
  }
}, ng = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
}, os = {
  name: "Radio",
  common: B,
  self(e) {
    const {
      borderColor: n,
      primaryColor: t,
      baseColor: r,
      textColorDisabled: o,
      inputColorDisabled: a,
      textColor2: i,
      opacityDisabled: l,
      borderRadius: s,
      fontSizeSmall: d,
      fontSizeMedium: u,
      fontSizeLarge: f,
      heightSmall: h,
      heightMedium: g,
      heightLarge: m,
      lineHeight: C
    } = e;
    return Object.assign(Object.assign({}, ng), {
      labelLineHeight: C,
      buttonHeightSmall: h,
      buttonHeightMedium: g,
      buttonHeightLarge: m,
      fontSizeSmall: d,
      fontSizeMedium: u,
      fontSizeLarge: f,
      boxShadow: `inset 0 0 0 1px ${n}`,
      boxShadowActive: `inset 0 0 0 1px ${t}`,
      boxShadowFocus: `inset 0 0 0 1px ${t}, 0 0 0 2px ${Q(t, {
        alpha: 0.3
      })}`,
      boxShadowHover: `inset 0 0 0 1px ${t}`,
      boxShadowDisabled: `inset 0 0 0 1px ${n}`,
      color: "#0000",
      colorDisabled: a,
      colorActive: "#0000",
      textColor: i,
      textColorDisabled: o,
      dotColorActive: t,
      dotColorDisabled: n,
      buttonBorderColor: n,
      buttonBorderColorActive: t,
      buttonBorderColorHover: t,
      buttonColor: "#0000",
      buttonColorActive: t,
      buttonTextColor: i,
      buttonTextColorActive: r,
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
}, rg = {
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
function og(e) {
  const {
    cardColor: n,
    modalColor: t,
    popoverColor: r,
    textColor2: o,
    textColor1: a,
    tableHeaderColor: i,
    tableColorHover: l,
    iconColor: s,
    primaryColor: d,
    fontWeightStrong: u,
    borderRadius: f,
    lineHeight: h,
    fontSizeSmall: g,
    fontSizeMedium: m,
    fontSizeLarge: C,
    dividerColor: y,
    heightSmall: b,
    opacityDisabled: D,
    tableColorStriped: E
  } = e;
  return Object.assign(Object.assign({}, rg), {
    actionDividerColor: y,
    lineHeight: h,
    borderRadius: f,
    fontSizeSmall: g,
    fontSizeMedium: m,
    fontSizeLarge: C,
    borderColor: ne(n, y),
    tdColorHover: ne(n, l),
    tdColorSorting: ne(n, l),
    tdColorStriped: ne(n, E),
    thColor: ne(n, i),
    thColorHover: ne(ne(n, i), l),
    thColorSorting: ne(ne(n, i), l),
    tdColor: n,
    tdTextColor: o,
    thTextColor: a,
    thFontWeight: u,
    thButtonColorHover: l,
    thIconColor: s,
    thIconColorActive: d,
    // modal
    borderColorModal: ne(t, y),
    tdColorHoverModal: ne(t, l),
    tdColorSortingModal: ne(t, l),
    tdColorStripedModal: ne(t, E),
    thColorModal: ne(t, i),
    thColorHoverModal: ne(ne(t, i), l),
    thColorSortingModal: ne(ne(t, i), l),
    tdColorModal: t,
    // popover
    borderColorPopover: ne(r, y),
    tdColorHoverPopover: ne(r, l),
    tdColorSortingPopover: ne(r, l),
    tdColorStripedPopover: ne(r, E),
    thColorPopover: ne(r, i),
    thColorHoverPopover: ne(ne(r, i), l),
    thColorSortingPopover: ne(ne(r, i), l),
    tdColorPopover: r,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: d,
    loadingSize: b,
    opacityLoading: D
  });
}
const ag = {
  name: "DataTable",
  common: B,
  peers: {
    Button: $t,
    Checkbox: hr,
    Radio: os,
    Pagination: rs,
    Scrollbar: At,
    Empty: Nn,
    Popover: Wn,
    Ellipsis: es,
    Dropdown: Aa
  },
  self(e) {
    const n = og(e);
    return n.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", n.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", n;
  }
}, ig = {
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
function lg(e) {
  const {
    tableHeaderColor: n,
    textColor2: t,
    textColor1: r,
    cardColor: o,
    modalColor: a,
    popoverColor: i,
    dividerColor: l,
    borderRadius: s,
    fontWeightStrong: d,
    lineHeight: u,
    fontSizeSmall: f,
    fontSizeMedium: h,
    fontSizeLarge: g
  } = e;
  return Object.assign(Object.assign({}, ig), {
    lineHeight: u,
    fontSizeSmall: f,
    fontSizeMedium: h,
    fontSizeLarge: g,
    titleTextColor: r,
    thColor: ne(o, n),
    thColorModal: ne(a, n),
    thColorPopover: ne(i, n),
    thTextColor: r,
    thFontWeight: d,
    tdTextColor: t,
    tdColor: o,
    tdColorModal: a,
    tdColorPopover: i,
    borderColor: ne(o, l),
    borderColorModal: ne(a, l),
    borderColorPopover: ne(i, l),
    borderRadius: s
  });
}
const sg = {
  name: "Descriptions",
  common: B,
  self: lg
}, dg = {
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
function cg(e) {
  const {
    textColor1: n,
    textColor2: t,
    modalColor: r,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeColorHover: l,
    closeColorPressed: s,
    infoColor: d,
    successColor: u,
    warningColor: f,
    errorColor: h,
    primaryColor: g,
    dividerColor: m,
    borderRadius: C,
    fontWeightStrong: y,
    lineHeight: b,
    fontSize: D
  } = e;
  return Object.assign(Object.assign({}, dg), {
    fontSize: D,
    lineHeight: b,
    border: `1px solid ${m}`,
    titleTextColor: n,
    textColor: t,
    color: r,
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
    iconColorError: h,
    borderRadius: C,
    titleFontWeight: y
  });
}
const as = {
  name: "Dialog",
  common: B,
  peers: {
    Button: $t
  },
  self: cg
};
function ug(e) {
  const {
    textColor1: n,
    dividerColor: t,
    fontWeightStrong: r
  } = e;
  return {
    textColor: n,
    color: t,
    fontWeight: r
  };
}
const fg = {
  name: "Divider",
  common: B,
  self: ug
};
function hg(e) {
  const {
    modalColor: n,
    textColor1: t,
    textColor2: r,
    boxShadow3: o,
    lineHeight: a,
    fontWeightStrong: i,
    dividerColor: l,
    closeColorHover: s,
    closeColorPressed: d,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: h,
    borderRadius: g,
    primaryColorHover: m
  } = e;
  return {
    bodyPadding: "16px 24px",
    borderRadius: g,
    headerPadding: "16px 24px",
    footerPadding: "16px 24px",
    color: n,
    textColor: r,
    titleTextColor: t,
    titleFontSize: "18px",
    titleFontWeight: i,
    boxShadow: o,
    lineHeight: a,
    headerBorderBottom: `1px solid ${l}`,
    footerBorderTop: `1px solid ${l}`,
    closeIconColor: u,
    closeIconColorHover: f,
    closeIconColorPressed: h,
    closeSize: "22px",
    closeIconSize: "18px",
    closeColorHover: s,
    closeColorPressed: d,
    closeBorderRadius: g,
    resizableTriggerColorHover: m
  };
}
const mg = {
  name: "Drawer",
  common: B,
  peers: {
    Scrollbar: At
  },
  self: hg
}, pg = {
  actionMargin: "0 0 0 20px",
  actionMarginRtl: "0 20px 0 0"
}, gg = {
  name: "DynamicInput",
  common: B,
  peers: {
    Input: Gt,
    Button: $t
  },
  self() {
    return pg;
  }
}, vg = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
}, is = {
  name: "Space",
  self() {
    return vg;
  }
}, Cg = {
  name: "DynamicTags",
  common: B,
  peers: {
    Input: Gt,
    Button: $t,
    Tag: Il,
    Space: is
  },
  self() {
    return {
      inputWidth: "64px"
    };
  }
}, bg = {
  name: "Element",
  common: B
}, xg = () => ({}), Sg = {
  name: "Equation",
  common: B,
  self: xg
}, yg = {
  name: "FloatButtonGroup",
  common: B,
  self(e) {
    const {
      popoverColor: n,
      dividerColor: t,
      borderRadius: r
    } = e;
    return {
      color: n,
      buttonBorderColor: t,
      borderRadiusSquare: r,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
    };
  }
}, wg = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
}, Pg = {
  name: "Flex",
  self() {
    return wg;
  }
}, _g = {
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
function Dg(e) {
  const {
    heightSmall: n,
    heightMedium: t,
    heightLarge: r,
    textColor1: o,
    errorColor: a,
    warningColor: i,
    lineHeight: l,
    textColor3: s
  } = e;
  return Object.assign(Object.assign({}, _g), {
    blankHeightSmall: n,
    blankHeightMedium: t,
    blankHeightLarge: r,
    lineHeight: l,
    labelTextColor: o,
    asteriskColor: a,
    feedbackTextColorError: a,
    feedbackTextColorWarning: i,
    feedbackTextColor: s
  });
}
const Tg = {
  name: "Form",
  common: B,
  self: Dg
}, Mg = {
  name: "GradientText",
  common: B,
  self(e) {
    const {
      primaryColor: n,
      successColor: t,
      warningColor: r,
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
      colorStartPrimary: n,
      colorEndPrimary: i,
      colorStartInfo: a,
      colorEndInfo: u,
      colorStartWarning: r,
      colorEndWarning: s,
      colorStartError: o,
      colorEndError: d,
      colorStartSuccess: t,
      colorEndSuccess: l
    };
  }
};
function Og(e) {
  const {
    textColorBase: n,
    opacity1: t,
    opacity2: r,
    opacity3: o,
    opacity4: a,
    opacity5: i
  } = e;
  return {
    color: n,
    opacity1Depth: t,
    opacity2Depth: r,
    opacity3Depth: o,
    opacity4Depth: a,
    opacity5Depth: i
  };
}
const Rg = {
  name: "Icon",
  common: B,
  self: Og
}, Eg = {
  name: "InputNumber",
  common: B,
  peers: {
    Button: $t,
    Input: Gt
  },
  self(e) {
    const {
      textColorDisabled: n
    } = e;
    return {
      iconColorDisabled: n
    };
  }
}, Ig = {
  name: "Layout",
  common: B,
  peers: {
    Scrollbar: At
  },
  self(e) {
    const {
      textColor2: n,
      bodyColor: t,
      popoverColor: r,
      cardColor: o,
      dividerColor: a,
      scrollbarColor: i,
      scrollbarColorHover: l
    } = e;
    return {
      textColor: n,
      textColorInverted: n,
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
      siderToggleButtonColor: r,
      siderToggleButtonIconColor: n,
      siderToggleButtonIconColorInverted: n,
      siderToggleBarColor: ne(t, i),
      siderToggleBarColorHover: ne(t, l),
      __invertScrollbar: "false"
    };
  }
}, kg = {
  name: "Row",
  common: B
};
function Fg(e) {
  const {
    textColor2: n,
    cardColor: t,
    modalColor: r,
    popoverColor: o,
    dividerColor: a,
    borderRadius: i,
    fontSize: l,
    hoverColor: s
  } = e;
  return {
    textColor: n,
    color: t,
    colorHover: s,
    colorModal: r,
    colorHoverModal: ne(r, s),
    colorPopover: o,
    colorHoverPopover: ne(o, s),
    borderColor: a,
    borderColorModal: ne(r, a),
    borderColorPopover: ne(o, a),
    borderRadius: i,
    fontSize: l
  };
}
const Ag = {
  name: "List",
  common: B,
  self: Fg
}, $g = {
  name: "LoadingBar",
  common: B,
  self(e) {
    const {
      primaryColor: n
    } = e;
    return {
      colorError: "red",
      colorLoading: n,
      height: "2px"
    };
  }
}, Hg = {
  name: "Log",
  common: B,
  peers: {
    Scrollbar: At,
    Code: Jl
  },
  self(e) {
    const {
      textColor2: n,
      inputColor: t,
      fontSize: r,
      primaryColor: o
    } = e;
    return {
      loaderFontSize: r,
      loaderTextColor: n,
      loaderColor: t,
      loaderBorder: "1px solid #0000",
      loadingColor: o
    };
  }
}, zg = {
  name: "Mention",
  common: B,
  peers: {
    InternalSelectMenu: Hr,
    Input: Gt
  },
  self(e) {
    const {
      boxShadow2: n
    } = e;
    return {
      menuBoxShadow: n
    };
  }
};
function Bg(e, n, t, r) {
  return {
    itemColorHoverInverted: "#0000",
    itemColorActiveInverted: n,
    itemColorActiveHoverInverted: n,
    itemColorActiveCollapsedInverted: n,
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
    groupTextColorInverted: r
  };
}
function Lg(e) {
  const {
    borderRadius: n,
    textColor3: t,
    primaryColor: r,
    textColor2: o,
    textColor1: a,
    fontSize: i,
    dividerColor: l,
    hoverColor: s,
    primaryColorHover: d
  } = e;
  return Object.assign({
    borderRadius: n,
    color: "#0000",
    groupTextColor: t,
    itemColorHover: s,
    itemColorActive: Q(r, {
      alpha: 0.1
    }),
    itemColorActiveHover: Q(r, {
      alpha: 0.1
    }),
    itemColorActiveCollapsed: Q(r, {
      alpha: 0.1
    }),
    itemTextColor: o,
    itemTextColorHover: o,
    itemTextColorActive: r,
    itemTextColorActiveHover: r,
    itemTextColorChildActive: r,
    itemTextColorChildActiveHover: r,
    itemTextColorHorizontal: o,
    itemTextColorHoverHorizontal: d,
    itemTextColorActiveHorizontal: r,
    itemTextColorActiveHoverHorizontal: r,
    itemTextColorChildActiveHorizontal: r,
    itemTextColorChildActiveHoverHorizontal: r,
    itemIconColor: a,
    itemIconColorHover: a,
    itemIconColorActive: r,
    itemIconColorActiveHover: r,
    itemIconColorChildActive: r,
    itemIconColorChildActiveHover: r,
    itemIconColorCollapsed: a,
    itemIconColorHorizontal: a,
    itemIconColorHoverHorizontal: d,
    itemIconColorActiveHorizontal: r,
    itemIconColorActiveHoverHorizontal: r,
    itemIconColorChildActiveHorizontal: r,
    itemIconColorChildActiveHoverHorizontal: r,
    itemHeight: "42px",
    arrowColor: o,
    arrowColorHover: o,
    arrowColorActive: r,
    arrowColorActiveHover: r,
    arrowColorChildActive: r,
    arrowColorChildActiveHover: r,
    colorInverted: "#0000",
    borderColorHorizontal: "#0000",
    fontSize: i,
    dividerColor: l
  }, Bg("#BBB", r, "#FFF", "#AAA"));
}
const Ng = {
  name: "Menu",
  common: B,
  peers: {
    Tooltip: xo,
    Dropdown: Aa
  },
  self(e) {
    const {
      primaryColor: n,
      primaryColorSuppl: t
    } = e, r = Lg(e);
    return r.itemColorActive = Q(n, {
      alpha: 0.15
    }), r.itemColorActiveHover = Q(n, {
      alpha: 0.15
    }), r.itemColorActiveCollapsed = Q(n, {
      alpha: 0.15
    }), r.itemColorActiveInverted = t, r.itemColorActiveHoverInverted = t, r.itemColorActiveCollapsedInverted = t, r;
  }
}, Wg = {
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
function Vg(e) {
  const {
    textColor2: n,
    closeIconColor: t,
    closeIconColorHover: r,
    closeIconColorPressed: o,
    infoColor: a,
    successColor: i,
    errorColor: l,
    warningColor: s,
    popoverColor: d,
    boxShadow2: u,
    primaryColor: f,
    lineHeight: h,
    borderRadius: g,
    closeColorHover: m,
    closeColorPressed: C
  } = e;
  return Object.assign(Object.assign({}, Wg), {
    closeBorderRadius: g,
    textColor: n,
    textColorInfo: n,
    textColorSuccess: n,
    textColorError: n,
    textColorWarning: n,
    textColorLoading: n,
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
    iconColor: n,
    iconColorInfo: a,
    iconColorSuccess: i,
    iconColorWarning: s,
    iconColorError: l,
    iconColorLoading: f,
    closeColorHover: m,
    closeColorPressed: C,
    closeIconColor: t,
    closeIconColorHover: r,
    closeIconColorPressed: o,
    closeColorHoverInfo: m,
    closeColorPressedInfo: C,
    closeIconColorInfo: t,
    closeIconColorHoverInfo: r,
    closeIconColorPressedInfo: o,
    closeColorHoverSuccess: m,
    closeColorPressedSuccess: C,
    closeIconColorSuccess: t,
    closeIconColorHoverSuccess: r,
    closeIconColorPressedSuccess: o,
    closeColorHoverError: m,
    closeColorPressedError: C,
    closeIconColorError: t,
    closeIconColorHoverError: r,
    closeIconColorPressedError: o,
    closeColorHoverWarning: m,
    closeColorPressedWarning: C,
    closeIconColorWarning: t,
    closeIconColorHoverWarning: r,
    closeIconColorPressedWarning: o,
    closeColorHoverLoading: m,
    closeColorPressedLoading: C,
    closeIconColorLoading: t,
    closeIconColorHoverLoading: r,
    closeIconColorPressedLoading: o,
    loadingColor: f,
    lineHeight: h,
    borderRadius: g
  });
}
const jg = {
  name: "Message",
  common: B,
  self: Vg
};
function Ug(e) {
  const {
    modalColor: n,
    textColor2: t,
    boxShadow3: r
  } = e;
  return {
    color: n,
    textColor: t,
    boxShadow: r
  };
}
const Yg = {
  name: "Modal",
  common: B,
  peers: {
    Scrollbar: At,
    Dialog: as,
    Card: Zl
  },
  self: Ug
}, Gg = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function qg(e) {
  const {
    textColor2: n,
    successColor: t,
    infoColor: r,
    warningColor: o,
    errorColor: a,
    popoverColor: i,
    closeIconColor: l,
    closeIconColorHover: s,
    closeIconColorPressed: d,
    closeColorHover: u,
    closeColorPressed: f,
    textColor1: h,
    textColor3: g,
    borderRadius: m,
    fontWeightStrong: C,
    boxShadow2: y,
    lineHeight: b,
    fontSize: D
  } = e;
  return Object.assign(Object.assign({}, Gg), {
    borderRadius: m,
    lineHeight: b,
    fontSize: D,
    headerFontWeight: C,
    iconColor: n,
    iconColorSuccess: t,
    iconColorInfo: r,
    iconColorWarning: o,
    iconColorError: a,
    color: i,
    textColor: n,
    closeIconColor: l,
    closeIconColorHover: s,
    closeIconColorPressed: d,
    closeBorderRadius: m,
    closeColorHover: u,
    closeColorPressed: f,
    headerTextColor: h,
    descriptionTextColor: g,
    actionTextColor: n,
    boxShadow: y
  });
}
const Kg = {
  name: "Notification",
  common: B,
  peers: {
    Scrollbar: At
  },
  self: qg
}, Xg = {
  titleFontSize: "18px",
  backSize: "22px"
};
function Qg(e) {
  const {
    textColor1: n,
    textColor2: t,
    textColor3: r,
    fontSize: o,
    fontWeightStrong: a,
    primaryColorHover: i,
    primaryColorPressed: l
  } = e;
  return Object.assign(Object.assign({}, Xg), {
    titleFontWeight: a,
    fontSize: o,
    titleTextColor: n,
    backColor: t,
    backColorHover: i,
    backColorPressed: l,
    subtitleTextColor: r
  });
}
const Zg = {
  name: "PageHeader",
  common: B,
  self: Qg
}, Jg = {
  iconSize: "22px"
};
function ev(e) {
  const {
    fontSize: n,
    warningColor: t
  } = e;
  return Object.assign(Object.assign({}, Jg), {
    fontSize: n,
    iconColor: t
  });
}
const tv = {
  name: "Popconfirm",
  common: B,
  peers: {
    Button: $t,
    Popover: Wn
  },
  self: ev
};
function nv(e) {
  const {
    infoColor: n,
    successColor: t,
    warningColor: r,
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
    iconColor: n,
    iconColorInfo: n,
    iconColorSuccess: t,
    iconColorWarning: r,
    iconColorError: o,
    textColorCircle: a,
    textColorLineInner: "rgb(255, 255, 255)",
    textColorLineOuter: a,
    fillColor: n,
    fillColorInfo: n,
    fillColorSuccess: t,
    fillColorWarning: r,
    fillColorError: o,
    lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
  };
}
const ls = {
  name: "Progress",
  common: B,
  self(e) {
    const n = nv(e);
    return n.textColorLineInner = "rgb(0, 0, 0)", n.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", n;
  }
}, rv = {
  name: "Rate",
  common: B,
  self(e) {
    const {
      railColor: n
    } = e;
    return {
      itemColor: n,
      itemColorActive: "#CCAA33",
      itemSize: "20px",
      sizeSmall: "16px",
      sizeMedium: "20px",
      sizeLarge: "24px"
    };
  }
}, ov = {
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
function av(e) {
  const {
    textColor2: n,
    textColor1: t,
    errorColor: r,
    successColor: o,
    infoColor: a,
    warningColor: i,
    lineHeight: l,
    fontWeightStrong: s
  } = e;
  return Object.assign(Object.assign({}, ov), {
    lineHeight: l,
    titleFontWeight: s,
    titleTextColor: t,
    textColor: n,
    iconColorError: r,
    iconColorSuccess: o,
    iconColorInfo: a,
    iconColorWarning: i
  });
}
const iv = {
  name: "Result",
  common: B,
  self: av
}, lv = {
  railHeight: "4px",
  railWidthVertical: "4px",
  handleSize: "18px",
  dotHeight: "8px",
  dotWidth: "8px",
  dotBorderRadius: "4px"
}, sv = {
  name: "Slider",
  common: B,
  self(e) {
    const n = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", {
      railColor: t,
      modalColor: r,
      primaryColorSuppl: o,
      popoverColor: a,
      textColor2: i,
      cardColor: l,
      borderRadius: s,
      fontSize: d,
      opacityDisabled: u
    } = e;
    return Object.assign(Object.assign({}, lv), {
      fontSize: d,
      markFontSize: d,
      railColor: t,
      railColorHover: t,
      fillColor: o,
      fillColorHover: o,
      opacityDisabled: u,
      handleColor: "#FFF",
      dotColor: l,
      dotColorModal: r,
      dotColorPopover: a,
      handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      indicatorColor: a,
      indicatorBoxShadow: n,
      indicatorTextColor: i,
      indicatorBorderRadius: s,
      dotBorder: `2px solid ${t}`,
      dotBorderActive: `2px solid ${o}`,
      dotBoxShadow: ""
    });
  }
};
function dv(e) {
  const {
    opacityDisabled: n,
    heightTiny: t,
    heightSmall: r,
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
    sizeSmall: r,
    sizeMedium: o,
    sizeLarge: a,
    sizeHuge: i,
    color: l,
    opacitySpinning: n
  };
}
const cv = {
  name: "Spin",
  common: B,
  self: dv
};
function uv(e) {
  const {
    textColor2: n,
    textColor3: t,
    fontSize: r,
    fontWeight: o
  } = e;
  return {
    labelFontSize: r,
    labelFontWeight: o,
    valueFontWeight: o,
    valueFontSize: "24px",
    labelTextColor: t,
    valuePrefixTextColor: n,
    valueSuffixTextColor: n,
    valueTextColor: n
  };
}
const fv = {
  name: "Statistic",
  common: B,
  self: uv
}, hv = {
  stepHeaderFontSizeSmall: "14px",
  stepHeaderFontSizeMedium: "16px",
  indicatorIndexFontSizeSmall: "14px",
  indicatorIndexFontSizeMedium: "16px",
  indicatorSizeSmall: "22px",
  indicatorSizeMedium: "28px",
  indicatorIconSizeSmall: "14px",
  indicatorIconSizeMedium: "18px"
};
function mv(e) {
  const {
    fontWeightStrong: n,
    baseColor: t,
    textColorDisabled: r,
    primaryColor: o,
    errorColor: a,
    textColor1: i,
    textColor2: l
  } = e;
  return Object.assign(Object.assign({}, hv), {
    stepHeaderFontWeight: n,
    indicatorTextColorProcess: t,
    indicatorTextColorWait: r,
    indicatorTextColorFinish: o,
    indicatorTextColorError: a,
    indicatorBorderColorProcess: o,
    indicatorBorderColorWait: r,
    indicatorBorderColorFinish: o,
    indicatorBorderColorError: a,
    indicatorColorProcess: o,
    indicatorColorWait: "#0000",
    indicatorColorFinish: "#0000",
    indicatorColorError: "#0000",
    splitorColorProcess: r,
    splitorColorWait: r,
    splitorColorFinish: o,
    splitorColorError: r,
    headerTextColorProcess: i,
    headerTextColorWait: r,
    headerTextColorFinish: r,
    headerTextColorError: a,
    descriptionTextColorProcess: l,
    descriptionTextColorWait: r,
    descriptionTextColorFinish: r,
    descriptionTextColorError: a
  });
}
const pv = {
  name: "Steps",
  common: B,
  self: mv
}, gv = {
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
}, vv = {
  name: "Switch",
  common: B,
  self(e) {
    const {
      primaryColorSuppl: n,
      opacityDisabled: t,
      borderRadius: r,
      primaryColor: o,
      textColor2: a,
      baseColor: i
    } = e;
    return Object.assign(Object.assign({}, gv), {
      iconColor: i,
      textColor: a,
      loadingColor: n,
      opacityDisabled: t,
      railColor: "rgba(255, 255, 255, .20)",
      railColorActive: n,
      buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      buttonColor: "#FFF",
      railBorderRadiusSmall: r,
      railBorderRadiusMedium: r,
      railBorderRadiusLarge: r,
      buttonBorderRadiusSmall: r,
      buttonBorderRadiusMedium: r,
      buttonBorderRadiusLarge: r,
      boxShadowFocus: `0 0 8px 0 ${Q(o, {
        alpha: 0.3
      })}`
    });
  }
}, Cv = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function bv(e) {
  const {
    dividerColor: n,
    cardColor: t,
    modalColor: r,
    popoverColor: o,
    tableHeaderColor: a,
    tableColorStriped: i,
    textColor1: l,
    textColor2: s,
    borderRadius: d,
    fontWeightStrong: u,
    lineHeight: f,
    fontSizeSmall: h,
    fontSizeMedium: g,
    fontSizeLarge: m
  } = e;
  return Object.assign(Object.assign({}, Cv), {
    fontSizeSmall: h,
    fontSizeMedium: g,
    fontSizeLarge: m,
    lineHeight: f,
    borderRadius: d,
    borderColor: ne(t, n),
    borderColorModal: ne(r, n),
    borderColorPopover: ne(o, n),
    tdColor: t,
    tdColorModal: r,
    tdColorPopover: o,
    tdColorStriped: ne(t, i),
    tdColorStripedModal: ne(r, i),
    tdColorStripedPopover: ne(o, i),
    thColor: ne(t, a),
    thColorModal: ne(r, a),
    thColorPopover: ne(o, a),
    thTextColor: l,
    tdTextColor: s,
    thFontWeight: u
  });
}
const xv = {
  name: "Table",
  common: B,
  self: bv
}, Sv = {
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
function yv(e) {
  const {
    textColor2: n,
    primaryColor: t,
    textColorDisabled: r,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeColorHover: l,
    closeColorPressed: s,
    tabColor: d,
    baseColor: u,
    dividerColor: f,
    fontWeight: h,
    textColor1: g,
    borderRadius: m,
    fontSize: C,
    fontWeightStrong: y
  } = e;
  return Object.assign(Object.assign({}, Sv), {
    colorSegment: d,
    tabFontSizeCard: C,
    tabTextColorLine: g,
    tabTextColorActiveLine: t,
    tabTextColorHoverLine: t,
    tabTextColorDisabledLine: r,
    tabTextColorSegment: g,
    tabTextColorActiveSegment: n,
    tabTextColorHoverSegment: n,
    tabTextColorDisabledSegment: r,
    tabTextColorBar: g,
    tabTextColorActiveBar: t,
    tabTextColorHoverBar: t,
    tabTextColorDisabledBar: r,
    tabTextColorCard: g,
    tabTextColorHoverCard: g,
    tabTextColorActiveCard: t,
    tabTextColorDisabledCard: r,
    barColor: t,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeColorHover: l,
    closeColorPressed: s,
    closeBorderRadius: m,
    tabColor: d,
    tabColorSegment: u,
    tabBorderColor: f,
    tabFontWeightActive: h,
    tabFontWeight: h,
    tabBorderRadius: m,
    paneTextColor: n,
    fontWeightStrong: y
  });
}
const wv = {
  name: "Tabs",
  common: B,
  self(e) {
    const n = yv(e), {
      inputColor: t
    } = e;
    return n.colorSegment = t, n.tabColorSegment = t, n;
  }
};
function Pv(e) {
  const {
    textColor1: n,
    textColor2: t,
    fontWeightStrong: r,
    fontSize: o
  } = e;
  return {
    fontSize: o,
    titleTextColor: n,
    textColor: t,
    titleFontWeight: r
  };
}
const _v = {
  name: "Thing",
  common: B,
  self: Pv
}, Dv = {
  titleMarginMedium: "0 0 6px 0",
  titleMarginLarge: "-2px 0 6px 0",
  titleFontSizeMedium: "14px",
  titleFontSizeLarge: "16px",
  iconSizeMedium: "14px",
  iconSizeLarge: "14px"
}, Tv = {
  name: "Timeline",
  common: B,
  self(e) {
    const {
      textColor3: n,
      infoColorSuppl: t,
      errorColorSuppl: r,
      successColorSuppl: o,
      warningColorSuppl: a,
      textColor1: i,
      textColor2: l,
      railColor: s,
      fontWeightStrong: d,
      fontSize: u
    } = e;
    return Object.assign(Object.assign({}, Dv), {
      contentFontSize: u,
      titleFontWeight: d,
      circleBorder: `2px solid ${n}`,
      circleBorderInfo: `2px solid ${t}`,
      circleBorderError: `2px solid ${r}`,
      circleBorderSuccess: `2px solid ${o}`,
      circleBorderWarning: `2px solid ${a}`,
      iconColor: n,
      iconColorInfo: t,
      iconColorError: r,
      iconColorSuccess: o,
      iconColorWarning: a,
      titleTextColor: i,
      contentTextColor: l,
      metaTextColor: n,
      lineColor: s
    });
  }
}, Mv = {
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
}, Ov = {
  name: "Transfer",
  common: B,
  peers: {
    Checkbox: hr,
    Scrollbar: At,
    Input: Gt,
    Empty: Nn,
    Button: $t
  },
  self(e) {
    const {
      fontWeight: n,
      fontSizeLarge: t,
      fontSizeMedium: r,
      fontSizeSmall: o,
      heightLarge: a,
      heightMedium: i,
      borderRadius: l,
      inputColor: s,
      tableHeaderColor: d,
      textColor1: u,
      textColorDisabled: f,
      textColor2: h,
      textColor3: g,
      hoverColor: m,
      closeColorHover: C,
      closeColorPressed: y,
      closeIconColor: b,
      closeIconColorHover: D,
      closeIconColorPressed: E,
      dividerColor: M
    } = e;
    return Object.assign(Object.assign({}, Mv), {
      itemHeightSmall: i,
      itemHeightMedium: i,
      itemHeightLarge: a,
      fontSizeSmall: o,
      fontSizeMedium: r,
      fontSizeLarge: t,
      borderRadius: l,
      dividerColor: M,
      borderColor: "#0000",
      listColor: s,
      headerColor: d,
      titleTextColor: u,
      titleTextColorDisabled: f,
      extraTextColor: g,
      extraTextColorDisabled: f,
      itemTextColor: h,
      itemTextColorDisabled: f,
      itemColorPending: m,
      titleFontWeight: n,
      closeColorHover: C,
      closeColorPressed: y,
      closeIconColor: b,
      closeIconColorHover: D,
      closeIconColorPressed: E
    });
  }
};
function Rv(e) {
  const {
    borderRadiusSmall: n,
    dividerColor: t,
    hoverColor: r,
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
    nodeBorderRadius: n,
    nodeColorHover: r,
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
const ss = {
  name: "Tree",
  common: B,
  peers: {
    Checkbox: hr,
    Scrollbar: At,
    Empty: Nn
  },
  self(e) {
    const {
      primaryColor: n
    } = e, t = Rv(e);
    return t.nodeColorActive = Q(n, {
      alpha: 0.15
    }), t;
  }
}, Ev = {
  name: "TreeSelect",
  common: B,
  peers: {
    Tree: ss,
    Empty: Nn,
    InternalSelection: Ta
  }
}, Iv = {
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
function kv(e) {
  const {
    primaryColor: n,
    textColor2: t,
    borderColor: r,
    lineHeight: o,
    fontSize: a,
    borderRadiusSmall: i,
    dividerColor: l,
    fontWeightStrong: s,
    textColor1: d,
    textColor3: u,
    infoColor: f,
    warningColor: h,
    errorColor: g,
    successColor: m,
    codeColor: C
  } = e;
  return Object.assign(Object.assign({}, Iv), {
    aTextColor: n,
    blockquoteTextColor: t,
    blockquotePrefixColor: r,
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
    headerBarColor: n,
    headerBarColorPrimary: n,
    headerBarColorInfo: f,
    headerBarColorError: g,
    headerBarColorWarning: h,
    headerBarColorSuccess: m,
    textColor: t,
    textColor1Depth: d,
    textColor2Depth: t,
    textColor3Depth: u,
    textColorPrimary: n,
    textColorInfo: f,
    textColorSuccess: m,
    textColorWarning: h,
    textColorError: g,
    codeTextColor: t,
    codeColor: C,
    codeBorder: "1px solid #0000"
  });
}
const Fv = {
  name: "Typography",
  common: B,
  self: kv
};
function Av(e) {
  const {
    iconColor: n,
    primaryColor: t,
    errorColor: r,
    textColor2: o,
    successColor: a,
    opacityDisabled: i,
    actionColor: l,
    borderColor: s,
    hoverColor: d,
    lineHeight: u,
    borderRadius: f,
    fontSize: h
  } = e;
  return {
    fontSize: h,
    lineHeight: u,
    borderRadius: f,
    draggerColor: l,
    draggerBorder: `1px dashed ${s}`,
    draggerBorderHover: `1px dashed ${t}`,
    itemColorHover: d,
    itemColorHoverError: Q(r, {
      alpha: 0.06
    }),
    itemTextColor: o,
    itemTextColorError: r,
    itemTextColorSuccess: a,
    itemIconColor: n,
    itemDisabledOpacity: i,
    itemBorderImageCardError: `1px solid ${r}`,
    itemBorderImageCard: `1px solid ${s}`
  };
}
const $v = {
  name: "Upload",
  common: B,
  peers: {
    Button: $t,
    Progress: ls
  },
  self(e) {
    const {
      errorColor: n
    } = e, t = Av(e);
    return t.itemColorHoverError = Q(n, {
      alpha: 0.09
    }), t;
  }
}, Hv = {
  name: "Watermark",
  common: B,
  self(e) {
    const {
      fontFamily: n
    } = e;
    return {
      fontFamily: n
    };
  }
}, zv = {
  name: "FloatButton",
  common: B,
  self(e) {
    const {
      popoverColor: n,
      textColor2: t,
      buttonColor2Hover: r,
      buttonColor2Pressed: o,
      primaryColor: a,
      primaryColorHover: i,
      primaryColorPressed: l,
      baseColor: s,
      borderRadius: d
    } = e;
    return {
      color: n,
      textColor: t,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      colorHover: r,
      colorPressed: o,
      colorPrimary: a,
      colorPrimaryHover: i,
      colorPrimaryPressed: l,
      textColorPrimary: s,
      borderRadiusSquare: d
    };
  }
};
function Bv(e) {
  const {
    primaryColor: n,
    baseColor: t
  } = e;
  return {
    color: n,
    iconColor: t
  };
}
const Lv = {
  name: "IconWrapper",
  common: B,
  self: Bv
}, Nv = {
  name: "Image",
  common: B,
  peers: {
    Tooltip: xo
  },
  self: (e) => {
    const {
      textColor2: n
    } = e;
    return {
      toolbarIconColor: n,
      toolbarColor: "rgba(0, 0, 0, .35)",
      toolbarBoxShadow: "none",
      toolbarBorderRadius: "24px"
    };
  }
}, Wv = {
  extraFontSize: "12px",
  width: "440px"
}, Vv = {
  name: "Transfer",
  common: B,
  peers: {
    Checkbox: hr,
    Scrollbar: At,
    Input: Gt,
    Empty: Nn,
    Button: $t
  },
  self(e) {
    const {
      iconColorDisabled: n,
      iconColor: t,
      fontWeight: r,
      fontSizeLarge: o,
      fontSizeMedium: a,
      fontSizeSmall: i,
      heightLarge: l,
      heightMedium: s,
      heightSmall: d,
      borderRadius: u,
      inputColor: f,
      tableHeaderColor: h,
      textColor1: g,
      textColorDisabled: m,
      textColor2: C,
      hoverColor: y
    } = e;
    return Object.assign(Object.assign({}, Wv), {
      itemHeightSmall: d,
      itemHeightMedium: s,
      itemHeightLarge: l,
      fontSizeSmall: i,
      fontSizeMedium: a,
      fontSizeLarge: o,
      borderRadius: u,
      borderColor: "#0000",
      listColor: f,
      headerColor: h,
      titleTextColor: g,
      titleTextColorDisabled: m,
      extraTextColor: C,
      filterDividerColor: "#0000",
      itemTextColor: C,
      itemTextColorDisabled: m,
      itemColorPending: y,
      titleFontWeight: r,
      iconColor: t,
      iconColorDisabled: n
    });
  }
};
function jv() {
  return {};
}
const Uv = {
  name: "Marquee",
  common: B,
  self: jv
}, Yv = {
  name: "QrCode",
  common: B,
  self: (e) => ({
    borderRadius: e.borderRadius
  })
}, Gv = {
  name: "Skeleton",
  common: B,
  self(e) {
    const {
      heightSmall: n,
      heightMedium: t,
      heightLarge: r,
      borderRadius: o
    } = e;
    return {
      color: "rgba(255, 255, 255, 0.12)",
      colorEnd: "rgba(255, 255, 255, 0.18)",
      borderRadius: o,
      heightSmall: n,
      heightMedium: t,
      heightLarge: r
    };
  }
}, qv = {
  name: "Split",
  common: B
}, Kv = {
  name: "dark",
  common: B,
  Alert: vp,
  Anchor: xp,
  AutoComplete: yp,
  Avatar: Ql,
  AvatarGroup: _p,
  BackTop: Tp,
  Badge: Mp,
  Breadcrumb: Ep,
  Button: $t,
  ButtonGroup: Ip,
  Calendar: Ap,
  Card: Zl,
  Carousel: Bp,
  Cascader: Vp,
  Checkbox: hr,
  Code: Jl,
  Collapse: Gp,
  CollapseTransition: Up,
  ColorPicker: Kp,
  DataTable: ag,
  DatePicker: om,
  Descriptions: sg,
  Dialog: as,
  Divider: fg,
  Drawer: mg,
  Dropdown: Aa,
  DynamicInput: gg,
  DynamicTags: Cg,
  Element: bg,
  Empty: Nn,
  Ellipsis: es,
  Equation: Sg,
  Flex: Pg,
  Form: Tg,
  GradientText: Mg,
  Icon: Rg,
  IconWrapper: Lv,
  Image: Nv,
  Input: Gt,
  InputNumber: Eg,
  LegacyTransfer: Vv,
  Layout: Ig,
  List: Ag,
  LoadingBar: $g,
  Log: Hg,
  Menu: Ng,
  Mention: zg,
  Message: jg,
  Modal: Yg,
  Notification: Kg,
  PageHeader: Zg,
  Pagination: rs,
  Popconfirm: tv,
  Popover: Wn,
  Popselect: ts,
  Progress: ls,
  QrCode: Yv,
  Radio: os,
  Rate: rv,
  Result: iv,
  Row: kg,
  Scrollbar: At,
  Select: ns,
  Skeleton: Gv,
  Slider: sv,
  Space: is,
  Spin: cv,
  Statistic: fv,
  Steps: pv,
  Switch: vv,
  Table: xv,
  Tabs: wv,
  Tag: Il,
  Thing: _v,
  TimePicker: Bl,
  Timeline: Tv,
  Tooltip: xo,
  Transfer: Ov,
  Tree: ss,
  TreeSelect: Ev,
  Typography: Fv,
  Upload: $v,
  Watermark: Hv,
  Split: qv,
  FloatButton: zv,
  FloatButtonGroup: yg,
  Marquee: Uv
}, Xv = /* @__PURE__ */ Ce({
  __name: "index",
  setup(e) {
    return (n, t) => (zi(), Hs(Cr(pp), {
      "date-locale": Cr(sh),
      locale: Cr(Rf),
      theme: Cr(Kv)
    }, {
      default: Yo(() => [
        Ai(n.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["date-locale", "locale", "theme"]));
  }
}), Qv = { class: "lc-date-picker" }, Zv = /* @__PURE__ */ Ce({
  __name: "datePicker",
  setup(e) {
    return (n, t) => (zi(), zs("div", Qv, [
      Ha(Xv, null, {
        default: Yo(() => [
          Ha(
            Cr(hp),
            ua({
              type: "daterange",
              to: !1
            }, n.$attrs),
            {
              separator: Yo(() => t[0] || (t[0] = [
                Bs(
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
}), Jv = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, oC = /* @__PURE__ */ Jv(Zv, [["__scopeId", "data-v-86ecf069"]]);
export {
  oC as LcDatePicker
};
