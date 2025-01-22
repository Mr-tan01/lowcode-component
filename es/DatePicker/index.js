var Vd = Object.defineProperty;
var jd = (e, n, t) => n in e ? Vd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var ee = (e, n, t) => jd(e, typeof n != "symbol" ? n + "" : n, t);
import { ref as k, readonly as fo, watch as ht, computed as P, getCurrentInstance as _o, onMounted as an, onBeforeUnmount as hn, reactive as Ud, onBeforeMount as To, createTextVNode as Yd, Fragment as Do, Comment as wl, defineComponent as be, provide as Nn, inject as Qe, withDirectives as Wr, toRef as Ge, h as c, Teleport as Gd, nextTick as xn, renderSlot as Pl, onActivated as _l, onDeactivated as Tl, mergeProps as $a, isVNode as qd, shallowRef as Kd, watchEffect as At, Transition as Hn, TransitionGroup as Xd, markRaw as ui, openBlock as Dl, createBlock as Qd, unref as Mr, withCtx as fa, createElementBlock as Zd, createVNode as fi, createElementVNode as Jd } from "vue";
function ge(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ve(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
function Jn(e, n) {
  const t = ge(e);
  return isNaN(n) ? Ve(e, NaN) : (n && t.setDate(t.getDate() + n), t);
}
function vt(e, n) {
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
const Ml = 6048e5, ec = 864e5, tc = 6e4, nc = 36e5, rc = 1e3;
let oc = {};
function hr() {
  return oc;
}
function Qt(e, n) {
  var l, s, d, u;
  const t = hr(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((s = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ?? t.weekStartsOn ?? ((u = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function or(e) {
  return Qt(e, { weekStartsOn: 1 });
}
function Ol(e) {
  const n = ge(e), t = n.getFullYear(), r = Ve(e, 0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = or(r), a = Ve(e, 0);
  a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0);
  const i = or(a);
  return n.getTime() >= o.getTime() ? t + 1 : n.getTime() >= i.getTime() ? t : t - 1;
}
function ar(e) {
  const n = ge(e);
  return n.setHours(0, 0, 0, 0), n;
}
function ho(e) {
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
function ac(e, n) {
  const t = ar(e), r = ar(n), o = +t - ho(t), a = +r - ho(r);
  return Math.round((o - a) / ec);
}
function ic(e) {
  const n = Ol(e), t = Ve(e, 0);
  return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), or(t);
}
function lc(e, n) {
  const t = n * 3;
  return vt(e, t);
}
function ha(e, n) {
  return vt(e, n * 12);
}
function sc(e, n) {
  const t = ar(e), r = ar(n);
  return +t == +r;
}
function dc(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Yt(e) {
  if (!dc(e) && typeof e != "number")
    return !1;
  const n = ge(e);
  return !isNaN(Number(n));
}
function cc(e) {
  const n = ge(e);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function uc(e) {
  const n = ge(e);
  return n.setSeconds(0, 0), n;
}
function $r(e) {
  const n = ge(e), t = n.getMonth(), r = t - t % 3;
  return n.setMonth(r, 1), n.setHours(0, 0, 0, 0), n;
}
function cn(e) {
  const n = ge(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Vr(e) {
  const n = ge(e), t = Ve(e, 0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
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
}, hc = (e, n, t) => {
  let r;
  const o = fc[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function tr(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const mc = {
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
  date: tr({
    formats: mc,
    defaultWidth: "full"
  }),
  time: tr({
    formats: pc,
    defaultWidth: "full"
  }),
  dateTime: tr({
    formats: gc,
    defaultWidth: "full"
  })
}, bc = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Cc = (e, n, t, r) => bc[e];
function tn(e) {
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
}, _c = {
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
}, Tc = (e, n) => {
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
}, Dc = {
  ordinalNumber: Tc,
  era: tn({
    values: xc,
    defaultWidth: "wide"
  }),
  quarter: tn({
    values: Sc,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tn({
    values: yc,
    defaultWidth: "wide"
  }),
  day: tn({
    values: wc,
    defaultWidth: "wide"
  }),
  dayPeriod: tn({
    values: Pc,
    defaultWidth: "wide",
    formattingValues: _c,
    defaultFormattingWidth: "wide"
  })
};
function nn(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(o);
    if (!a)
      return null;
    const i = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Oc(l, (f) => f.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Mc(l, (f) => f.test(i))
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
function Mc(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Oc(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Rl(e) {
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
const Rc = /^(\d+)(th|st|nd|rd)?/i, Ec = /\d+/i, Ic = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Fc = {
  any: [/^b/i, /^(a|c)/i]
}, kc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ac = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $c = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hc = {
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
}, zc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Bc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Lc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Nc = {
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
}, Wc = {
  ordinalNumber: Rl({
    matchPattern: Rc,
    parsePattern: Ec,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: nn({
    matchPatterns: Ic,
    defaultMatchWidth: "wide",
    parsePatterns: Fc,
    defaultParseWidth: "any"
  }),
  quarter: nn({
    matchPatterns: kc,
    defaultMatchWidth: "wide",
    parsePatterns: Ac,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: nn({
    matchPatterns: $c,
    defaultMatchWidth: "wide",
    parsePatterns: Hc,
    defaultParseWidth: "any"
  }),
  day: nn({
    matchPatterns: zc,
    defaultMatchWidth: "wide",
    parsePatterns: Bc,
    defaultParseWidth: "any"
  }),
  dayPeriod: nn({
    matchPatterns: Lc,
    defaultMatchWidth: "any",
    parsePatterns: Nc,
    defaultParseWidth: "any"
  })
}, Ha = {
  code: "en-US",
  formatDistance: hc,
  formatLong: vc,
  formatRelative: Cc,
  localize: Dc,
  match: Wc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Vc(e) {
  const n = ge(e);
  return ac(n, Vr(n)) + 1;
}
function El(e) {
  const n = ge(e), t = +or(n) - +ic(n);
  return Math.round(t / Ml) + 1;
}
function za(e, n) {
  var u, f, h, g;
  const t = ge(e), r = t.getFullYear(), o = hr(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = Ve(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const l = Qt(i, n), s = Ve(e, 0);
  s.setFullYear(r, 0, a), s.setHours(0, 0, 0, 0);
  const d = Qt(s, n);
  return t.getTime() >= l.getTime() ? r + 1 : t.getTime() >= d.getTime() ? r : r - 1;
}
function jc(e, n) {
  var l, s, d, u;
  const t = hr(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((s = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : s.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = za(e, n), a = Ve(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Qt(a, n);
}
function Il(e, n) {
  const t = ge(e), r = +Qt(t, n) - +jc(t, n);
  return Math.round(r / Ml) + 1;
}
function Be(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const pn = {
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
}, qn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, hi = {
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
    return pn.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const o = za(e, r), a = o > 0 ? o : 1 - o;
    if (n === "YY") {
      const i = a % 100;
      return Be(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : Be(a, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = Ol(e);
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
        return pn.M(e, n);
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
    const o = Il(e, r);
    return n === "wo" ? t.ordinalNumber(o, { unit: "week" }) : Be(o, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = El(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : Be(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : pn.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = Vc(e);
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
    switch (r === 12 ? o = qn.noon : r === 0 ? o = qn.midnight : o = r / 12 >= 1 ? "pm" : "am", n) {
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
    switch (r >= 17 ? o = qn.evening : r >= 12 ? o = qn.afternoon : r >= 4 ? o = qn.morning : o = qn.night, n) {
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
    return pn.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : pn.H(e, n);
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
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : pn.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : pn.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return pn.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return pi(r);
      case "XXXX":
      case "XX":
        return Rn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Rn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return pi(r);
      case "xxxx":
      case "xx":
        return Rn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Rn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + mi(r, ":");
      case "OOOO":
      default:
        return "GMT" + Rn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + mi(r, ":");
      case "zzzz":
      default:
        return "GMT" + Rn(r, ":");
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
function mi(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + Be(a, 2);
}
function pi(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Be(Math.abs(e) / 60, 2) : Rn(e, n);
}
function Rn(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Be(Math.trunc(r / 60), 2), a = Be(r % 60, 2);
  return t + o + n + a;
}
const gi = (e, n) => {
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
}, Fl = (e, n) => {
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
}, Uc = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], o = t[2];
  if (!o)
    return gi(e, n);
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
  return a.replace("{{date}}", gi(r, n)).replace("{{time}}", Fl(o, n));
}, ma = {
  p: Fl,
  P: Uc
}, Yc = /^D+$/, Gc = /^Y+$/, qc = ["D", "DD", "YY", "YYYY"];
function kl(e) {
  return Yc.test(e);
}
function Al(e) {
  return Gc.test(e);
}
function pa(e, n, t) {
  const r = Kc(e, n, t);
  if (console.warn(r), qc.includes(e)) throw new RangeError(r);
}
function Kc(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Xc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Zc = /^'([^]*?)'?$/, Jc = /''/g, eu = /[a-zA-Z]/;
function Le(e, n, t) {
  var u, f, h, g, m, b, y, C;
  const r = hr(), o = (t == null ? void 0 : t.locale) ?? r.locale ?? Ha, a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((b = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((C = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = ge(e);
  if (!Yt(l))
    throw new RangeError("Invalid time value");
  let s = n.match(Qc).map((T) => {
    const E = T[0];
    if (E === "p" || E === "P") {
      const M = ma[E];
      return M(T, o.formatLong);
    }
    return T;
  }).join("").match(Xc).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const E = T[0];
    if (E === "'")
      return { isToken: !1, value: tu(T) };
    if (hi[E])
      return { isToken: !0, value: T };
    if (E.match(eu))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + E + "`"
      );
    return { isToken: !1, value: T };
  });
  o.localize.preprocessor && (s = o.localize.preprocessor(l, s));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return s.map((T) => {
    if (!T.isToken) return T.value;
    const E = T.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Al(E) || !(t != null && t.useAdditionalDayOfYearTokens) && kl(E)) && pa(E, n, String(e));
    const M = hi[E[0]];
    return M(l, E, o.localize, d);
  }).join("");
}
function tu(e) {
  const n = e.match(Zc);
  return n ? n[1].replace(Jc, "'") : e;
}
function Ut(e) {
  return ge(e).getDate();
}
function nu(e) {
  return ge(e).getDay();
}
function ru(e) {
  const n = ge(e), t = n.getFullYear(), r = n.getMonth(), o = Ve(e, 0);
  return o.setFullYear(t, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function $l() {
  return Object.assign({}, hr());
}
function bn(e) {
  return ge(e).getHours();
}
function ou(e) {
  let t = ge(e).getDay();
  return t === 0 && (t = 7), t;
}
function au(e) {
  return ge(e).getMilliseconds();
}
function mo(e) {
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
function iu(e, n) {
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
const lu = 10;
class Hl {
  constructor() {
    ee(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class su extends Hl {
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
class du extends Hl {
  constructor() {
    super(...arguments);
    ee(this, "priority", lu);
    ee(this, "subPriority", -1);
  }
  set(t, r) {
    return r.timestampIsSet ? t : Ve(t, iu(t, Date));
  }
}
class $e {
  run(n, t, r, o) {
    const a = this.parse(n, t, r, o);
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
  validate(n, t, r) {
    return !0;
  }
}
class cu extends $e {
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
}, rn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ct(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function Je(e, n) {
  const t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function on(e, n) {
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
    value: r * (o * nc + a * tc + i * rc),
    rest: n.slice(t[0].length)
  };
}
function zl(e) {
  return Je(dt.anyDigitsSigned, e);
}
function nt(e, n) {
  switch (e) {
    case 1:
      return Je(dt.singleDigit, n);
    case 2:
      return Je(dt.twoDigits, n);
    case 3:
      return Je(dt.threeDigits, n);
    case 4:
      return Je(dt.fourDigits, n);
    default:
      return Je(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function go(e, n) {
  switch (e) {
    case 1:
      return Je(dt.singleDigitSigned, n);
    case 2:
      return Je(dt.twoDigitsSigned, n);
    case 3:
      return Je(dt.threeDigitsSigned, n);
    case 4:
      return Je(dt.fourDigitsSigned, n);
    default:
      return Je(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function Ba(e) {
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
function Bl(e, n) {
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
function Ll(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class uu extends $e {
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
        return ct(nt(4, t), a);
      case "yo":
        return ct(
          o.ordinalNumber(t, {
            unit: "year"
          }),
          a
        );
      default:
        return ct(nt(r.length, t), a);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, o) {
    const a = t.getFullYear();
    if (o.isTwoDigitYear) {
      const l = Bl(
        o.year,
        a
      );
      return t.setFullYear(l, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
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
  parse(t, r, o) {
    const a = (i) => ({
      year: i,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return ct(nt(4, t), a);
      case "Yo":
        return ct(
          o.ordinalNumber(t, {
            unit: "year"
          }),
          a
        );
      default:
        return ct(nt(r.length, t), a);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, o, a) {
    const i = za(t, a);
    if (o.isTwoDigitYear) {
      const s = Bl(
        o.year,
        i
      );
      return t.setFullYear(
        s,
        0,
        a.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Qt(t, a);
    }
    const l = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return t.setFullYear(l, 0, a.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Qt(t, a);
  }
}
class hu extends $e {
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
    return go(r === "R" ? 4 : r.length, t);
  }
  set(t, r, o) {
    const a = Ve(t, 0);
    return a.setFullYear(o, 0, 4), a.setHours(0, 0, 0, 0), or(a);
  }
}
class mu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 130);
    ee(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, r) {
    return go(r === "u" ? 4 : r.length, t);
  }
  set(t, r, o) {
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
  parse(t, r, o) {
    switch (r) {
      case "Q":
      case "QQ":
        return nt(r.length, t);
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
  parse(t, r, o) {
    switch (r) {
      case "q":
      case "qq":
        return nt(r.length, t);
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
  parse(t, r, o) {
    const a = (i) => i - 1;
    switch (r) {
      case "M":
        return ct(
          Je(dt.month, t),
          a
        );
      case "MM":
        return ct(nt(2, t), a);
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
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, o) {
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class bu extends $e {
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
        return ct(
          Je(dt.month, t),
          a
        );
      case "LL":
        return ct(nt(2, t), a);
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
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, o) {
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function Cu(e, n, t) {
  const r = ge(e), o = Il(r, t) - n;
  return r.setDate(r.getDate() - o * 7), r;
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
  parse(t, r, o) {
    switch (r) {
      case "w":
        return Je(dt.week, t);
      case "wo":
        return o.ordinalNumber(t, { unit: "week" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, o, a) {
    return Qt(Cu(t, o, a), a);
  }
}
function Su(e, n) {
  const t = ge(e), r = El(t) - n;
  return t.setDate(t.getDate() - r * 7), t;
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
  parse(t, r, o) {
    switch (r) {
      case "I":
        return Je(dt.week, t);
      case "Io":
        return o.ordinalNumber(t, { unit: "week" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, o) {
    return or(Su(t, o));
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
class _u extends $e {
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
        return Je(dt.date, t);
      case "do":
        return o.ordinalNumber(t, { unit: "date" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    const o = t.getFullYear(), a = Ll(o), i = t.getMonth();
    return a ? r >= 1 && r <= Pu[i] : r >= 1 && r <= wu[i];
  }
  set(t, r, o) {
    return t.setDate(o), t.setHours(0, 0, 0, 0), t;
  }
}
class Tu extends $e {
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
        return Je(dt.dayOfYear, t);
      case "Do":
        return o.ordinalNumber(t, { unit: "date" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    const o = t.getFullYear();
    return Ll(o) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(t, r, o) {
    return t.setMonth(0, o), t.setHours(0, 0, 0, 0), t;
  }
}
function La(e, n, t) {
  var f, h, g, m;
  const r = hr(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((m = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : m.weekStartsOn) ?? 0, a = ge(e), i = a.getDay(), s = (n % 7 + 7) % 7, d = 7 - o, u = n < 0 || n > 6 ? n - (i + d) % 7 : (s + d) % 7 - (i + d) % 7;
  return Jn(a, u);
}
class Du extends $e {
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
    return t = La(t, o, a), t.setHours(0, 0, 0, 0), t;
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
        return ct(nt(r.length, t), i);
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
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, o, a) {
    return t = La(t, o, a), t.setHours(0, 0, 0, 0), t;
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
        return ct(nt(r.length, t), i);
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
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, o, a) {
    return t = La(t, o, a), t.setHours(0, 0, 0, 0), t;
  }
}
function Ru(e, n) {
  const t = ge(e), r = ou(t), o = n - r;
  return Jn(t, o);
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
  parse(t, r, o) {
    const a = (i) => i === 0 ? 7 : i;
    switch (r) {
      case "i":
      case "ii":
        return nt(r.length, t);
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
  validate(t, r) {
    return r >= 1 && r <= 7;
  }
  set(t, r, o) {
    return t = Ru(t, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Iu extends $e {
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
    return t.setHours(Ba(o), 0, 0, 0), t;
  }
}
class Fu extends $e {
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
    return t.setHours(Ba(o), 0, 0, 0), t;
  }
}
class ku extends $e {
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
    return t.setHours(Ba(o), 0, 0, 0), t;
  }
}
class Au extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "h":
        return Je(dt.hour12h, t);
      case "ho":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return nt(r.length, t);
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
class $u extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "H":
        return Je(dt.hour23h, t);
      case "Ho":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 23;
  }
  set(t, r, o) {
    return t.setHours(o, 0, 0, 0), t;
  }
}
class Hu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "K":
        return Je(dt.hour11h, t);
      case "Ko":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, o) {
    return t.getHours() >= 12 && o < 12 ? t.setHours(o + 12, 0, 0, 0) : t.setHours(o, 0, 0, 0), t;
  }
}
class zu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 70);
    ee(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "k":
        return Je(dt.hour24h, t);
      case "ko":
        return o.ordinalNumber(t, { unit: "hour" });
      default:
        return nt(r.length, t);
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
class Bu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 60);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "m":
        return Je(dt.minute, t);
      case "mo":
        return o.ordinalNumber(t, { unit: "minute" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, o) {
    return t.setMinutes(o, 0, 0), t;
  }
}
class Lu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 50);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, o) {
    switch (r) {
      case "s":
        return Je(dt.second, t);
      case "so":
        return o.ordinalNumber(t, { unit: "second" });
      default:
        return nt(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, o) {
    return t.setSeconds(o, 0), t;
  }
}
class Nu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 30);
    ee(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r) {
    const o = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return ct(nt(r.length, t), o);
  }
  set(t, r, o) {
    return t.setMilliseconds(o), t;
  }
}
class Wu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 10);
    ee(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, r) {
    switch (r) {
      case "X":
        return on(
          rn.basicOptionalMinutes,
          t
        );
      case "XX":
        return on(rn.basic, t);
      case "XXXX":
        return on(
          rn.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return on(
          rn.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return on(rn.extended, t);
    }
  }
  set(t, r, o) {
    return r.timestampIsSet ? t : Ve(
      t,
      t.getTime() - ho(t) - o
    );
  }
}
class Vu extends $e {
  constructor() {
    super(...arguments);
    ee(this, "priority", 10);
    ee(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, r) {
    switch (r) {
      case "x":
        return on(
          rn.basicOptionalMinutes,
          t
        );
      case "xx":
        return on(rn.basic, t);
      case "xxxx":
        return on(
          rn.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return on(
          rn.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return on(rn.extended, t);
    }
  }
  set(t, r, o) {
    return r.timestampIsSet ? t : Ve(
      t,
      t.getTime() - ho(t) - o
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
    return zl(t);
  }
  set(t, r, o) {
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
    return zl(t);
  }
  set(t, r, o) {
    return [Ve(t, o), { timestampIsSet: !0 }];
  }
}
const Yu = {
  G: new cu(),
  y: new uu(),
  Y: new fu(),
  R: new hu(),
  u: new mu(),
  Q: new pu(),
  q: new gu(),
  M: new vu(),
  L: new bu(),
  w: new xu(),
  I: new yu(),
  d: new _u(),
  D: new Tu(),
  E: new Du(),
  e: new Mu(),
  c: new Ou(),
  i: new Eu(),
  a: new Iu(),
  b: new Fu(),
  B: new ku(),
  h: new Au(),
  H: new $u(),
  K: new Hu(),
  k: new zu(),
  m: new Bu(),
  s: new Lu(),
  S: new Nu(),
  X: new Wu(),
  x: new Vu(),
  t: new ju(),
  T: new Uu()
}, Gu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ku = /^'([^]*?)'?$/, Xu = /''/g, Qu = /\S/, Zu = /[a-zA-Z]/;
function Ju(e, n, t, r) {
  var b, y, C, T, E, M, L, V;
  const o = $l(), a = (r == null ? void 0 : r.locale) ?? o.locale ?? Ha, i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((y = (b = r == null ? void 0 : r.locale) == null ? void 0 : b.options) == null ? void 0 : y.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((T = (C = o.locale) == null ? void 0 : C.options) == null ? void 0 : T.firstWeekContainsDate) ?? 1, l = (r == null ? void 0 : r.weekStartsOn) ?? ((M = (E = r == null ? void 0 : r.locale) == null ? void 0 : E.options) == null ? void 0 : M.weekStartsOn) ?? o.weekStartsOn ?? ((V = (L = o.locale) == null ? void 0 : L.options) == null ? void 0 : V.weekStartsOn) ?? 0;
  if (n === "")
    return e === "" ? ge(t) : Ve(t, NaN);
  const s = {
    firstWeekContainsDate: i,
    weekStartsOn: l,
    locale: a
  }, d = [new du()], u = n.match(qu).map((p) => {
    const D = p[0];
    if (D in ma) {
      const I = ma[D];
      return I(p, a.formatLong);
    }
    return p;
  }).join("").match(Gu), f = [];
  for (let p of u) {
    !(r != null && r.useAdditionalWeekYearTokens) && Al(p) && pa(p, n, e), !(r != null && r.useAdditionalDayOfYearTokens) && kl(p) && pa(p, n, e);
    const D = p[0], I = Yu[D];
    if (I) {
      const { incompatibleTokens: U } = I;
      if (Array.isArray(U)) {
        const z = f.find(
          (S) => U.includes(S.token) || S.token === D
        );
        if (z)
          throw new RangeError(
            `The format string mustn't contain \`${z.fullToken}\` and \`${p}\` at the same time`
          );
      } else if (I.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${p}\` and any other token at the same time`
        );
      f.push({ token: D, fullToken: p });
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
      if (D.match(Zu))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + D + "`"
        );
      if (p === "''" ? p = "'" : D === "'" && (p = ef(p)), e.indexOf(p) === 0)
        e = e.slice(p.length);
      else
        return Ve(t, NaN);
    }
  }
  if (e.length > 0 && Qu.test(e))
    return Ve(t, NaN);
  const h = d.map((p) => p.priority).sort((p, D) => D - p).filter((p, D, I) => I.indexOf(p) === D).map(
    (p) => d.filter((D) => D.priority === p).sort((D, I) => I.subPriority - D.subPriority)
  ).map((p) => p[0]);
  let g = ge(t);
  if (isNaN(g.getTime()))
    return Ve(t, NaN);
  const m = {};
  for (const p of h) {
    if (!p.validate(g, s))
      return Ve(t, NaN);
    const D = p.set(g, m, s);
    Array.isArray(D) ? (g = D[0], Object.assign(m, D[1])) : g = D;
  }
  return Ve(t, g);
}
function ef(e) {
  return e.match(Ku)[1].replace(Xu, "'");
}
function tf(e) {
  const n = ge(e);
  return n.setMinutes(0, 0, 0), n;
}
function Nl(e, n, t) {
  const r = Qt(e, t), o = Qt(n, t);
  return +r == +o;
}
function jr(e, n) {
  const t = ge(e), r = ge(n);
  return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth();
}
function Wl(e, n) {
  const t = $r(e), r = $r(n);
  return +t == +r;
}
function Na(e) {
  const n = ge(e);
  return n.setMilliseconds(0), n;
}
function Vl(e, n) {
  const t = ge(e), r = ge(n);
  return t.getFullYear() === r.getFullYear();
}
function Wa(e, n) {
  const t = ge(e), r = t.getFullYear(), o = t.getDate(), a = Ve(e, 0);
  a.setFullYear(r, n, 15), a.setHours(0, 0, 0, 0);
  const i = ru(a);
  return t.setMonth(n, Math.min(o, i)), t;
}
function bt(e, n) {
  let t = ge(e);
  return isNaN(+t) ? Ve(e, NaN) : (n.year != null && t.setFullYear(n.year), n.month != null && (t = Wa(t, n.month)), n.date != null && t.setDate(n.date), n.hours != null && t.setHours(n.hours), n.minutes != null && t.setMinutes(n.minutes), n.seconds != null && t.setSeconds(n.seconds), n.milliseconds != null && t.setMilliseconds(n.milliseconds), t);
}
function Mn(e, n) {
  const t = ge(e);
  return t.setHours(n), t;
}
function Yo(e, n) {
  const t = ge(e);
  return t.setMinutes(n), t;
}
function nf(e, n) {
  const t = ge(e), r = Math.trunc(t.getMonth() / 3) + 1, o = n - r;
  return Wa(t, t.getMonth() + o * 3);
}
function Go(e, n) {
  const t = ge(e);
  return t.setSeconds(n), t;
}
function ga(e, n) {
  const t = ge(e);
  return isNaN(+t) ? Ve(e, NaN) : (t.setFullYear(n), t);
}
let vo = [];
const jl = /* @__PURE__ */ new WeakMap();
function rf() {
  vo.forEach((e) => e(...jl.get(e))), vo = [];
}
function Ul(e, ...n) {
  jl.set(e, n), !vo.includes(e) && vo.push(e) === 1 && requestAnimationFrame(rf);
}
function Yl(e, n) {
  let { target: t } = e;
  for (; t; ) {
    if (t.dataset && t.dataset[n] !== void 0)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Mo(e) {
  return e.composedPath()[0] || null;
}
function bo(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Tr(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function er(e, n) {
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
}, mr = "^\\s*", pr = "\\s*$", En = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", In = "([0-9A-Fa-f])", Fn = "([0-9A-Fa-f]{2})", of = new RegExp(`${mr}rgb\\s*\\(${En},${En},${En}\\)${pr}`), af = new RegExp(`${mr}rgba\\s*\\(${En},${En},${En},${En}\\)${pr}`), lf = new RegExp(`${mr}#${In}${In}${In}${pr}`), sf = new RegExp(`${mr}#${Fn}${Fn}${Fn}${pr}`), df = new RegExp(`${mr}#${In}${In}${In}${In}${pr}`), cf = new RegExp(`${mr}#${Fn}${Fn}${Fn}${Fn}${pr}`);
function Ft(e) {
  return parseInt(e, 16);
}
function un(e) {
  try {
    let n;
    if (n = sf.exec(e))
      return [Ft(n[1]), Ft(n[2]), Ft(n[3]), 1];
    if (n = of.exec(e))
      return [wt(n[1]), wt(n[5]), wt(n[9]), 1];
    if (n = af.exec(e))
      return [
        wt(n[1]),
        wt(n[5]),
        wt(n[9]),
        Ir(n[13])
      ];
    if (n = lf.exec(e))
      return [
        Ft(n[1] + n[1]),
        Ft(n[2] + n[2]),
        Ft(n[3] + n[3]),
        1
      ];
    if (n = cf.exec(e))
      return [
        Ft(n[1]),
        Ft(n[2]),
        Ft(n[3]),
        Ir(Ft(n[4]) / 255)
      ];
    if (n = df.exec(e))
      return [
        Ft(n[1] + n[1]),
        Ft(n[2] + n[2]),
        Ft(n[3] + n[3]),
        Ir(Ft(n[4] + n[4]) / 255)
      ];
    if (e in vi)
      return un(vi[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function uf(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function va(e, n, t, r) {
  return `rgba(${wt(e)}, ${wt(n)}, ${wt(t)}, ${uf(r)})`;
}
function qo(e, n, t, r, o) {
  return wt((e * n * (1 - r) + t * r) / o);
}
function ne(e, n) {
  Array.isArray(e) || (e = un(e)), Array.isArray(n) || (n = un(n));
  const t = e[3], r = n[3], o = Ir(t + r - t * r);
  return va(qo(e[0], t, n[0], r, o), qo(e[1], t, n[1], r, o), qo(e[2], t, n[2], r, o), o);
}
function Q(e, n) {
  const [t, r, o, a = 1] = Array.isArray(e) ? e : un(e);
  return n.alpha ? va(t, r, o, n.alpha) : va(t, r, o, a);
}
function st(e, n) {
  const [t, r, o, a = 1] = Array.isArray(e) ? e : un(e), { lightness: i = 1, alpha: l = 1 } = n;
  return ff([t * i, r * i, o * i, a * l]);
}
function Ir(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function wt(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function ff(e) {
  const [n, t, r] = e;
  return 3 in e ? `rgba(${wt(n)}, ${wt(t)}, ${wt(r)}, ${Ir(e[3])})` : `rgba(${wt(n)}, ${wt(t)}, ${wt(r)}, 1)`;
}
function so(e) {
  return e.composedPath()[0];
}
const hf = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function mf(e, n, t) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      n.contains(so(o)) || t(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (i) => {
      r = !n.contains(so(i));
    }, a = (i) => {
      r && (n.contains(so(i)) || t(i));
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
function Gl(e, n, t) {
  const r = hf[e];
  let o = r.get(n);
  o === void 0 && r.set(n, o = /* @__PURE__ */ new WeakMap());
  let a = o.get(t);
  return a === void 0 && o.set(t, a = mf(e, n, t)), a;
}
function pf(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Gl(e, n, t);
    return Object.keys(o).forEach((a) => {
      Rt(a, document, o[a], r);
    }), !0;
  }
  return !1;
}
function gf(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Gl(e, n, t);
    return Object.keys(o).forEach((a) => {
      pt(a, document, o[a], r);
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
  const e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  function t() {
    e.set(this, !0);
  }
  function r() {
    e.set(this, !0), n.set(this, !0);
  }
  function o(p, D, I) {
    const U = p[D];
    return p[D] = function() {
      return I.apply(p, arguments), U.apply(p, arguments);
    }, p;
  }
  function a(p, D) {
    p[D] = Event.prototype[D];
  }
  const i = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var p;
    return (p = i.get(this)) !== null && p !== void 0 ? p : null;
  }
  function d(p, D) {
    l !== void 0 && Object.defineProperty(p, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: D ?? l.get
    });
  }
  const u = {
    bubble: {},
    capture: {}
  }, f = {};
  function h() {
    const p = function(D) {
      const { type: I, eventPhase: U, bubbles: Y } = D, z = so(D);
      if (U === 2)
        return;
      const S = U === 1 ? "capture" : "bubble";
      let A = z;
      const Z = [];
      for (; A === null && (A = window), Z.push(A), A !== window; )
        A = A.parentNode || null;
      const re = u.capture[I], K = u.bubble[I];
      if (o(D, "stopPropagation", t), o(D, "stopImmediatePropagation", r), d(D, s), S === "capture") {
        if (re === void 0)
          return;
        for (let me = Z.length - 1; me >= 0 && !e.has(D); --me) {
          const ve = Z[me], de = re.get(ve);
          if (de !== void 0) {
            i.set(D, ve);
            for (const De of de) {
              if (n.has(D))
                break;
              De(D);
            }
          }
          if (me === 0 && !Y && K !== void 0) {
            const De = K.get(ve);
            if (De !== void 0)
              for (const ke of De) {
                if (n.has(D))
                  break;
                ke(D);
              }
          }
        }
      } else if (S === "bubble") {
        if (K === void 0)
          return;
        for (let me = 0; me < Z.length && !e.has(D); ++me) {
          const ve = Z[me], de = K.get(ve);
          if (de !== void 0) {
            i.set(D, ve);
            for (const De of de) {
              if (n.has(D))
                break;
              De(D);
            }
          }
        }
      }
      a(D, "stopPropagation"), a(D, "stopImmediatePropagation"), d(D);
    };
    return p.displayName = "evtdUnifiedHandler", p;
  }
  function g() {
    const p = function(D) {
      const { type: I, eventPhase: U } = D;
      if (U !== 2)
        return;
      const Y = f[I];
      Y !== void 0 && Y.forEach((z) => z(D));
    };
    return p.displayName = "evtdUnifiedWindowEventHandler", p;
  }
  const m = h(), b = g();
  function y(p, D) {
    const I = u[p];
    return I[D] === void 0 && (I[D] = /* @__PURE__ */ new Map(), window.addEventListener(D, m, p === "capture")), I[D];
  }
  function C(p) {
    return f[p] === void 0 && (f[p] = /* @__PURE__ */ new Set(), window.addEventListener(p, b)), f[p];
  }
  function T(p, D) {
    let I = p.get(D);
    return I === void 0 && p.set(D, I = /* @__PURE__ */ new Set()), I;
  }
  function E(p, D, I, U) {
    const Y = u[D][I];
    if (Y !== void 0) {
      const z = Y.get(p);
      if (z !== void 0 && z.has(U))
        return !0;
    }
    return !1;
  }
  function M(p, D) {
    const I = f[p];
    return !!(I !== void 0 && I.has(D));
  }
  function L(p, D, I, U) {
    let Y;
    if (typeof U == "object" && U.once === !0 ? Y = (re) => {
      V(p, D, Y, U), I(re);
    } : Y = I, pf(p, D, Y, U))
      return;
    const S = U === !0 || typeof U == "object" && U.capture === !0 ? "capture" : "bubble", A = y(S, p), Z = T(A, D);
    if (Z.has(Y) || Z.add(Y), D === window) {
      const re = C(p);
      re.has(Y) || re.add(Y);
    }
  }
  function V(p, D, I, U) {
    if (gf(p, D, I, U))
      return;
    const z = U === !0 || typeof U == "object" && U.capture === !0, S = z ? "capture" : "bubble", A = y(S, p), Z = T(A, D);
    if (D === window && !E(D, z ? "bubble" : "capture", p, I) && M(p, I)) {
      const K = f[p];
      K.delete(I), K.size === 0 && (window.removeEventListener(p, b), f[p] = void 0);
    }
    Z.has(I) && Z.delete(I), Z.size === 0 && A.delete(D), A.size === 0 && (window.removeEventListener(p, m, S === "capture"), u[S][p] = void 0);
  }
  return {
    on: L,
    off: V
  };
}
const { on: Rt, off: pt } = vf(), Kn = "@@coContext", Va = {
  mounted(e, { value: n, modifiers: t }) {
    e[Kn] = {
      handler: void 0
    }, typeof n == "function" && (e[Kn].handler = n, Rt("clickoutside", e, n, {
      capture: t.capture
    }));
  },
  updated(e, { value: n, modifiers: t }) {
    const r = e[Kn];
    typeof n == "function" ? r.handler ? r.handler !== n && (pt("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = n, Rt("clickoutside", e, n, {
      capture: t.capture
    })) : (e[Kn].handler = n, Rt("clickoutside", e, n, {
      capture: t.capture
    })) : r.handler && (pt("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: t } = e[Kn];
    t && pt("clickoutside", e, t, {
      capture: n.capture
    }), e[Kn].handler = void 0;
  }
};
function bf(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class Cf {
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
    r.has(n) ? r.delete(n) : t === void 0 && bf("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Ko = new Cf(), Xn = "@@ziContext", xf = {
  mounted(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t;
    e[Xn] = {
      enabled: !!o,
      initialized: !1
    }, o && (Ko.ensureZIndex(e, r), e[Xn].initialized = !0);
  },
  updated(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t, a = e[Xn].enabled;
    o && !a && (Ko.ensureZIndex(e, r), e[Xn].initialized = !0), e[Xn].enabled = !!o;
  },
  unmounted(e, n) {
    if (!e[Xn].initialized)
      return;
    const { value: t = {} } = n, { zIndex: r } = t;
    Ko.unregister(e, r);
  }
};
function Sf(e) {
  const n = k(!!e.value);
  if (n.value)
    return fo(n);
  const t = ht(e, (r) => {
    r && (n.value = !0, t());
  });
  return fo(n);
}
function Gt(e) {
  const n = P(e), t = k(n.value);
  return ht(n, (r) => {
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
function yf() {
  return _o() !== null;
}
const wf = typeof window < "u";
let nr, Fr;
const Pf = () => {
  var e, n;
  nr = wf ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, Fr = !1, nr !== void 0 ? nr.then(() => {
    Fr = !0;
  }) : Fr = !0;
};
Pf();
function _f(e) {
  if (Fr)
    return;
  let n = !1;
  an(() => {
    Fr || nr == null || nr.then(() => {
      n || e();
    });
  }), hn(() => {
    n = !0;
  });
}
function Co(e, n) {
  return ht(e, (t) => {
    t !== void 0 && (n.value = t);
  }), P(() => e.value === void 0 ? n.value : e.value);
}
function Oo() {
  const e = k(!1);
  return an(() => {
    e.value = !0;
  }), fo(e);
}
const Tf = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Df() {
  return Tf;
}
function ql(e = {}, n) {
  const t = Ud({
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
    Rt("keydown", document, a), Rt("keyup", document, i);
  };
  return yf() ? (To(l), hn(() => {
    pt("keydown", document, a), pt("keyup", document, i);
  })) : l(), fo(t);
}
function ba(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return r();
}
function Ca(e, n = !0, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(Yd(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Ca(r, n, t);
        return;
      }
      if (r.type === Do) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && Ca(r.children, n, t);
      } else r.type !== wl && t.push(r);
    }
  }), t;
}
function bi(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const o = Ca(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`);
}
let gn = null;
function Kl() {
  if (gn === null && (gn = document.getElementById("v-binder-view-measurer"), gn === null)) {
    gn = document.createElement("div"), gn.id = "v-binder-view-measurer";
    const { style: e } = gn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(gn);
  }
  return gn.getBoundingClientRect();
}
function Mf(e, n) {
  const t = Kl();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: t.width - e,
    bottom: t.height - n
  };
}
function Xo(e) {
  const n = e.getBoundingClientRect(), t = Kl();
  return {
    left: n.left - t.left,
    top: n.top - t.top,
    bottom: t.height + t.top - n.bottom,
    right: t.width + t.left - n.right,
    width: n.width,
    height: n.height
  };
}
function Of(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Xl(e) {
  if (e === null)
    return null;
  const n = Of(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: t, overflowX: r, overflowY: o } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(t + o + r))
      return n;
  }
  return Xl(n);
}
const ja = be({
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
    Nn("VBinder", (n = _o()) === null || n === void 0 ? void 0 : n.proxy);
    const t = Qe("VBinder", null), r = k(null), o = (C) => {
      r.value = C, t && e.syncTargetWithParent && t.setTargetRef(C);
    };
    let a = [];
    const i = () => {
      let C = r.value;
      for (; C = Xl(C), C !== null; )
        a.push(C);
      for (const T of a)
        Rt("scroll", T, f, !0);
    }, l = () => {
      for (const C of a)
        pt("scroll", C, f, !0);
      a = [];
    }, s = /* @__PURE__ */ new Set(), d = (C) => {
      s.size === 0 && i(), s.has(C) || s.add(C);
    }, u = (C) => {
      s.has(C) && s.delete(C), s.size === 0 && l();
    }, f = () => {
      Ul(h);
    }, h = () => {
      s.forEach((C) => C());
    }, g = /* @__PURE__ */ new Set(), m = (C) => {
      g.size === 0 && Rt("resize", window, y), g.has(C) || g.add(C);
    }, b = (C) => {
      g.has(C) && g.delete(C), g.size === 0 && pt("resize", window, y);
    }, y = () => {
      g.forEach((C) => C());
    };
    return hn(() => {
      pt("resize", window, y), l();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: d,
      removeScrollListener: u,
      addResizeListener: m,
      removeResizeListener: b
    };
  },
  render() {
    return ba("binder", this.$slots);
  }
}), Ua = be({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = Qe("VBinder");
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
    return e ? Wr(bi("follower", this.$slots), [
      [n]
    ]) : bi("follower", this.$slots);
  }
}), Rf = "@css-render/vue3-ssr";
function Ef(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function If(e, n, t) {
  const { styles: r, ids: o } = t;
  o.has(e) || r !== null && (o.add(e), r.push(Ef(e, n)));
}
const Ff = typeof document < "u";
function gr() {
  if (Ff)
    return;
  const e = Qe(Rf, null);
  if (e !== null)
    return {
      adapter: (n, t) => If(n, t, e),
      context: e
    };
}
function Ci(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
function kf(e) {
  let n = 0;
  for (let t = 0; t < e.length; ++t)
    e[t] === "&" && ++n;
  return n;
}
const Ql = /\s*,(?![^(]*\))\s*/g, Af = /\s+/g;
function $f(e, n) {
  const t = [];
  return n.split(Ql).forEach((r) => {
    let o = kf(r);
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
function Hf(e, n) {
  const t = [];
  return n.split(Ql).forEach((r) => {
    e.forEach((o) => {
      t.push((o && o + " ") + r);
    });
  }), t;
}
function zf(e) {
  let n = [""];
  return e.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? n = $f(n, t) : n = Hf(n, t));
  }), n.join(", ").replace(Af, " ");
}
function xi(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function Ro(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Bf(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function Qr(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Lf = /[A-Z]/g;
function Zl(e) {
  return e.replace(Lf, (n) => "-" + n.toLowerCase());
}
function Nf(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => n + `  ${Zl(t[0])}: ${t[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function Wf(e, n, t) {
  return typeof e == "function" ? e({
    context: n.context,
    props: t
  }) : e;
}
function Si(e, n, t, r) {
  if (!n)
    return "";
  const o = Wf(n, t, r);
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
    l = Zl(l), s != null && i.push(`  ${l}${Nf(s)}`);
  }), e && i.push("}"), i.join(`
`);
}
function xa(e, n, t) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      xa(r, n, t);
    else if (typeof r == "function") {
      const o = r(n);
      Array.isArray(o) ? xa(o, n, t) : o && t(o);
    } else r && t(r);
  });
}
function Jl(e, n, t, r, o) {
  const a = e.$;
  let i = "";
  if (!a || typeof a == "string")
    Qr(a) ? i = a : n.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: r.context,
      props: o
    });
    Qr(d) ? i = d : n.push(d);
  } else if (a.before && a.before(r.context), !a.$ || typeof a.$ == "string")
    Qr(a.$) ? i = a.$ : n.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: r.context,
      props: o
    });
    Qr(d) ? i = d : n.push(d);
  }
  const l = zf(n), s = Si(l, e.props, r, o);
  i ? t.push(`${i} {`) : s.length && t.push(s), e.children && xa(e.children, {
    context: r.context,
    props: o
  }, (d) => {
    if (typeof d == "string") {
      const u = Si(l, { raw: d }, r, o);
      t.push(u);
    } else
      Jl(d, n, t, r, o);
  }), n.pop(), i && t.push("}"), a && a.after && a.after(r.context);
}
function Vf(e, n, t) {
  const r = [];
  return Jl(e, [], r, n, t), r.join(`

`);
}
function Hr(e) {
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
function jf(e, n, t, r) {
  const { els: o } = n;
  if (t === void 0)
    o.forEach(xi), n.els = [];
  else {
    const a = Ro(t, r);
    a && o.includes(a) && (xi(a), n.els = o.filter((i) => i !== a));
  }
}
function yi(e, n) {
  e.push(n);
}
function Uf(e, n, t, r, o, a, i, l, s) {
  let d;
  if (t === void 0 && (d = n.render(r), t = Hr(d)), s) {
    s.adapter(t, d ?? n.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const u = Ro(t, l);
  if (u !== null && !a)
    return u;
  const f = u ?? Bf(t);
  if (d === void 0 && (d = n.render(r)), f.textContent = d, u !== null)
    return u;
  if (i) {
    const h = l.querySelector(`meta[name="${i}"]`);
    if (h)
      return l.insertBefore(f, h), yi(n.els, f), f;
  }
  return o ? l.insertBefore(f, l.querySelector("style, link")) : l.appendChild(f), yi(n.els, f), f;
}
function Yf(e) {
  return Vf(this, this.instance, e);
}
function Gf(e = {}) {
  const { id: n, ssr: t, props: r, head: o = !1, force: a = !1, anchorMetaName: i, parent: l } = e;
  return Uf(this.instance, this, n, r, o, a, i, l, t);
}
function qf(e = {}) {
  const { id: n, parent: t } = e;
  jf(this.instance, this, n, t);
}
const Zr = function(e, n, t, r) {
  return {
    instance: e,
    $: n,
    props: t,
    children: r,
    els: [],
    render: Yf,
    mount: Gf,
    unmount: qf
  };
}, Kf = function(e, n, t, r) {
  return Array.isArray(n) ? Zr(e, { $: null }, null, n) : Array.isArray(t) ? Zr(e, n, null, t) : Array.isArray(r) ? Zr(e, n, t, r) : Zr(e, n, t, null);
};
function es(e = {}) {
  const n = {
    c: (...t) => Kf(n, ...t),
    use: (t, ...r) => t.install(n, ...r),
    find: Ro,
    context: {},
    config: e
  };
  return n;
}
function Xf(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: t } } = n;
    return t.has(e);
  }
  return Ro(e) !== null;
}
const { c: kn } = es(), ts = "vueuc-style";
function wi(e) {
  return e & -e;
}
class ns {
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
      o[n] += t, n += wi(n);
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
      a += t[n], n -= wi(n);
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
const Qf = be({
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
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? ba("lazy-teleport", this.$slots) : c(Gd, {
      disabled: this.disabled,
      to: this.mergedTo
    }, ba("lazy-teleport", this.$slots)) : null;
  }
}), Jr = {
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
}, Zf = {
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
}, Jf = {
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
}, eh = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, _i = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Ti = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function th(e, n, t, r, o, a) {
  if (!o || a)
    return { placement: e, top: 0, left: 0 };
  const [i, l] = e.split("-");
  let s = l ?? "center", d = {
    top: 0,
    left: 0
  };
  const u = (g, m, b) => {
    let y = 0, C = 0;
    const T = t[g] - n[m] - n[g];
    return T > 0 && r && (b ? C = _i[m] ? T : -T : y = _i[m] ? T : -T), {
      left: y,
      top: C
    };
  }, f = i === "left" || i === "right";
  if (s !== "center") {
    const g = eh[e], m = Jr[g], b = Qo[g];
    if (t[b] > n[b]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[g] + n[b] < t[b]
      ) {
        const y = (t[b] - n[b]) / 2;
        n[g] < y || n[m] < y ? n[g] < n[m] ? (s = Pi[l], d = u(b, m, f)) : d = u(b, g, f) : s = "center";
      }
    } else t[b] < n[b] && n[m] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[g] > n[m] && (s = Pi[l]);
  } else {
    const g = i === "bottom" || i === "top" ? "left" : "top", m = Jr[g], b = Qo[g], y = (t[b] - n[b]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[g] < y || n[m] < y) && (n[g] > n[m] ? (s = Ti[g], d = u(b, g, f)) : (s = Ti[m], d = u(b, m, f)));
  }
  let h = i;
  return (
    // space is not enough
    n[i] < t[Qo[i]] && // opposite position's space is larger
    n[i] < n[Jr[i]] && (h = Jr[i]), {
      placement: s !== "center" ? `${h}-${s}` : h,
      left: d.left,
      top: d.top
    }
  );
}
function nh(e, n) {
  return n ? Jf[e] : Zf[e];
}
function rh(e, n, t, r, o, a) {
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
const oh = kn([
  kn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  kn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    kn("> *", {
      pointerEvents: "all"
    })
  ])
]), Ya = be({
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
    const n = Qe("VBinder"), t = Gt(() => e.enabled !== void 0 ? e.enabled : e.show), r = k(null), o = k(null), a = () => {
      const { syncTrigger: h } = e;
      h.includes("scroll") && n.addScrollListener(s), h.includes("resize") && n.addResizeListener(s);
    }, i = () => {
      n.removeScrollListener(s), n.removeResizeListener(s);
    };
    an(() => {
      t.value && (s(), a());
    });
    const l = gr();
    oh.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: ts,
      ssr: l
    }), hn(() => {
      i();
    }), _f(() => {
      t.value && s();
    });
    const s = () => {
      if (!t.value)
        return;
      const h = r.value;
      if (h === null)
        return;
      const g = n.targetRef, { x: m, y: b, overlap: y } = e, C = m !== void 0 && b !== void 0 ? Mf(m, b) : Xo(g);
      h.style.setProperty("--v-target-width", `${Math.round(C.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(C.height)}px`);
      const { width: T, minWidth: E, placement: M, internalShift: L, flip: V } = e;
      h.setAttribute("v-placement", M), y ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
      const { style: p } = h;
      T === "target" ? p.width = `${C.width}px` : T !== void 0 ? p.width = T : p.width = "", E === "target" ? p.minWidth = `${C.width}px` : E !== void 0 ? p.minWidth = E : p.minWidth = "";
      const D = Xo(h), I = Xo(o.value), { left: U, top: Y, placement: z } = th(M, C, D, L, V, y), S = nh(z, y), { left: A, top: Z, transform: re } = rh(z, I, C, Y, U, y);
      h.setAttribute("v-placement", z), h.style.setProperty("--v-offset-left", `${Math.round(U)}px`), h.style.setProperty("--v-offset-top", `${Math.round(Y)}px`), h.style.transform = `translateX(${A}) translateY(${Z}) ${re}`, h.style.setProperty("--v-transform-origin", S), h.style.transformOrigin = S;
    };
    ht(t, (h) => {
      h ? (a(), d()) : i();
    });
    const d = () => {
      xn().then(s).catch((h) => console.error(h));
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
      ht(Ge(e, h), s);
    }), ["teleportDisabled"].forEach((h) => {
      ht(Ge(e, h), d);
    }), ht(Ge(e, "syncTrigger"), (h) => {
      h.includes("resize") ? n.addResizeListener(s) : n.removeResizeListener(s), h.includes("scroll") ? n.addScrollListener(s) : n.removeScrollListener(s);
    });
    const u = Oo(), f = Gt(() => {
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
    return c(Qf, {
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
        return this.zindexable ? Wr(t, [
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
var An = [], ah = function() {
  return An.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, ih = function() {
  return An.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Di = "ResizeObserver loop completed with undelivered notifications.", lh = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Di
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Di), window.dispatchEvent(e);
}, zr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(zr || (zr = {}));
var $n = function(e) {
  return Object.freeze(e);
}, sh = /* @__PURE__ */ function() {
  function e(n, t) {
    this.inlineSize = n, this.blockSize = t, $n(this);
  }
  return e;
}(), rs = function() {
  function e(n, t, r, o) {
    return this.x = n, this.y = t, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, $n(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, t = n.x, r = n.y, o = n.top, a = n.right, i = n.bottom, l = n.left, s = n.width, d = n.height;
    return { x: t, y: r, top: o, right: a, bottom: i, left: l, width: s, height: d };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), Ga = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, os = function(e) {
  if (Ga(e)) {
    var n = e.getBBox(), t = n.width, r = n.height;
    return !t && !r;
  }
  var o = e, a = o.offsetWidth, i = o.offsetHeight;
  return !(a || i || e.getClientRects().length);
}, Mi = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var t = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(t && e instanceof t.Element);
}, dh = function(e) {
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
}, kr = typeof window < "u" ? window : {}, eo = /* @__PURE__ */ new WeakMap(), Oi = /auto|scroll/, ch = /^tb|vertical/, uh = /msie|trident/i.test(kr.navigator && kr.navigator.userAgent), en = function(e) {
  return parseFloat(e || "0");
}, rr = function(e, n, t) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = !1), new sh((t ? n : e) || 0, (t ? e : n) || 0);
}, Ri = $n({
  devicePixelContentBoxSize: rr(),
  borderBoxSize: rr(),
  contentBoxSize: rr(),
  contentRect: new rs(0, 0, 0, 0)
}), as = function(e, n) {
  if (n === void 0 && (n = !1), eo.has(e) && !n)
    return eo.get(e);
  if (os(e))
    return eo.set(e, Ri), Ri;
  var t = getComputedStyle(e), r = Ga(e) && e.ownerSVGElement && e.getBBox(), o = !uh && t.boxSizing === "border-box", a = ch.test(t.writingMode || ""), i = !r && Oi.test(t.overflowY || ""), l = !r && Oi.test(t.overflowX || ""), s = r ? 0 : en(t.paddingTop), d = r ? 0 : en(t.paddingRight), u = r ? 0 : en(t.paddingBottom), f = r ? 0 : en(t.paddingLeft), h = r ? 0 : en(t.borderTopWidth), g = r ? 0 : en(t.borderRightWidth), m = r ? 0 : en(t.borderBottomWidth), b = r ? 0 : en(t.borderLeftWidth), y = f + d, C = s + u, T = b + g, E = h + m, M = l ? e.offsetHeight - E - e.clientHeight : 0, L = i ? e.offsetWidth - T - e.clientWidth : 0, V = o ? y + T : 0, p = o ? C + E : 0, D = r ? r.width : en(t.width) - V - L, I = r ? r.height : en(t.height) - p - M, U = D + y + L + T, Y = I + C + M + E, z = $n({
    devicePixelContentBoxSize: rr(Math.round(D * devicePixelRatio), Math.round(I * devicePixelRatio), a),
    borderBoxSize: rr(U, Y, a),
    contentBoxSize: rr(D, I, a),
    contentRect: new rs(f, s, D, I)
  });
  return eo.set(e, z), z;
}, is = function(e, n, t) {
  var r = as(e, t), o = r.borderBoxSize, a = r.contentBoxSize, i = r.devicePixelContentBoxSize;
  switch (n) {
    case zr.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case zr.BORDER_BOX:
      return o;
    default:
      return a;
  }
}, fh = /* @__PURE__ */ function() {
  function e(n) {
    var t = as(n);
    this.target = n, this.contentRect = t.contentRect, this.borderBoxSize = $n([t.borderBoxSize]), this.contentBoxSize = $n([t.contentBoxSize]), this.devicePixelContentBoxSize = $n([t.devicePixelContentBoxSize]);
  }
  return e;
}(), ls = function(e) {
  if (os(e))
    return 1 / 0;
  for (var n = 0, t = e.parentNode; t; )
    n += 1, t = t.parentNode;
  return n;
}, hh = function() {
  var e = 1 / 0, n = [];
  An.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var l = [];
      i.activeTargets.forEach(function(d) {
        var u = new fh(d.target), f = ls(d.target);
        l.push(u), d.lastReportedSize = is(d.target, d.observedBox), f < e && (e = f);
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
}, Ei = function(e) {
  An.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(o) {
      o.isActive() && (ls(o.target) > e ? t.activeTargets.push(o) : t.skippedTargets.push(o));
    });
  });
}, mh = function() {
  var e = 0;
  for (Ei(e); ah(); )
    e = hh(), Ei(e);
  return ih() && lh(), e > 0;
}, Zo, ss = [], ph = function() {
  return ss.splice(0).forEach(function(e) {
    return e();
  });
}, gh = function(e) {
  if (!Zo) {
    var n = 0, t = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return ph();
    }).observe(t, r), Zo = function() {
      t.textContent = "".concat(n ? n-- : n++);
    };
  }
  ss.push(e), Zo();
}, vh = function(e) {
  gh(function() {
    requestAnimationFrame(e);
  });
}, co = 0, bh = function() {
  return !!co;
}, Ch = 250, xh = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Ii = [
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
], Fi = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Jo = !1, Sh = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var t = this;
    if (n === void 0 && (n = Ch), !Jo) {
      Jo = !0;
      var r = Fi(n);
      vh(function() {
        var o = !1;
        try {
          o = mh();
        } finally {
          if (Jo = !1, n = r - Fi(), !bh())
            return;
          o ? t.run(1e3) : n > 0 ? t.run(n) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, t = function() {
      return n.observer && n.observer.observe(document.body, xh);
    };
    document.body ? t() : kr.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ii.forEach(function(t) {
      return kr.addEventListener(t, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), Ii.forEach(function(t) {
      return kr.removeEventListener(t, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Sa = new Sh(), ki = function(e) {
  !co && e > 0 && Sa.start(), co += e, !co && Sa.stop();
}, yh = function(e) {
  return !Ga(e) && !dh(e) && getComputedStyle(e).display === "inline";
}, wh = function() {
  function e(n, t) {
    this.target = n, this.observedBox = t || zr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = is(this.target, this.observedBox, !0);
    return yh(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), Ph = /* @__PURE__ */ function() {
  function e(n, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = t;
  }
  return e;
}(), to = /* @__PURE__ */ new WeakMap(), Ai = function(e, n) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === n)
      return t;
  return -1;
}, no = function() {
  function e() {
  }
  return e.connect = function(n, t) {
    var r = new Ph(n, t);
    to.set(n, r);
  }, e.observe = function(n, t, r) {
    var o = to.get(n), a = o.observationTargets.length === 0;
    Ai(o.observationTargets, t) < 0 && (a && An.push(o), o.observationTargets.push(new wh(t, r && r.box)), ki(1), Sa.schedule());
  }, e.unobserve = function(n, t) {
    var r = to.get(n), o = Ai(r.observationTargets, t), a = r.observationTargets.length === 1;
    o >= 0 && (a && An.splice(An.indexOf(r), 1), r.observationTargets.splice(o, 1), ki(-1));
  }, e.disconnect = function(n) {
    var t = this, r = to.get(n);
    r.observationTargets.slice().forEach(function(o) {
      return t.unobserve(n, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), _h = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    no.connect(this, n);
  }
  return e.prototype.observe = function(n, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Mi(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    no.observe(this, n, t);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Mi(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    no.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    no.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Th {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || _h)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const $i = new Th(), Br = be({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const t = _o().proxy;
    function r(o) {
      const { onResize: a } = e;
      a !== void 0 && a(o);
    }
    an(() => {
      const o = t.$el;
      if (o === void 0) {
        Ci("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        Ci("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && ($i.registerHandler(o.nextElementSibling, r), n = !0);
    }), hn(() => {
      n && $i.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return Pl(this.$slots, "default");
  }
});
let ro;
function Dh() {
  return typeof document > "u" ? !1 : (ro === void 0 && ("matchMedia" in window ? ro = window.matchMedia("(pointer:coarse)").matches : ro = !1), ro);
}
let ea;
function Hi() {
  return typeof document > "u" ? 1 : (ea === void 0 && (ea = "chrome" in window ? window.devicePixelRatio : 1), ea);
}
const ds = "VVirtualListXScroll";
function Mh({ columnsRef: e, renderColRef: n, renderItemWithColsRef: t }) {
  const r = k(0), o = k(0), a = P(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const u = new ns(d.length, 0);
    return d.forEach((f, h) => {
      u.add(h, f.width);
    }), u;
  }), i = Gt(() => {
    const d = a.value;
    return d !== null ? Math.max(d.getBound(o.value) - 1, 0) : 0;
  }), l = (d) => {
    const u = a.value;
    return u !== null ? u.sum(d) : 0;
  }, s = Gt(() => {
    const d = a.value;
    return d !== null ? Math.min(d.getBound(o.value + r.value) + 1, e.value.length - 1) : 0;
  });
  return Nn(ds, {
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
const zi = be({
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
      Qe(ds)
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
}), Oh = kn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  kn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    kn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), ya = be({
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
    const n = gr();
    Oh.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: ts,
      ssr: n
    }), an(() => {
      const { defaultScrollIndex: S, defaultScrollKey: A } = e;
      S != null ? y({ index: S }) : A != null && y({ key: A });
    });
    let t = !1, r = !1;
    _l(() => {
      if (t = !1, !r) {
        r = !0;
        return;
      }
      y({ top: g.value, left: i.value });
    }), Tl(() => {
      t = !0, r || (r = !0);
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
      return e.items.forEach((Z, re) => {
        S.set(Z[A], re);
      }), S;
    }), { scrollLeftRef: i, listWidthRef: l } = Mh({
      columnsRef: Ge(e, "columns"),
      renderColRef: Ge(e, "renderCol"),
      renderItemWithColsRef: Ge(e, "renderItemWithCols")
    }), s = k(null), d = k(void 0), u = /* @__PURE__ */ new Map(), f = P(() => {
      const { items: S, itemSize: A, keyField: Z } = e, re = new ns(S.length, A);
      return S.forEach((K, me) => {
        const ve = K[Z], de = u.get(ve);
        de !== void 0 && re.add(me, de);
      }), re;
    }), h = k(0), g = k(0), m = Gt(() => Math.max(f.value.getBound(g.value - bo(e.paddingTop)) - 1, 0)), b = P(() => {
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
      const { left: Z, top: re, index: K, key: me, position: ve, behavior: de, debounce: De = !0 } = S;
      if (Z !== void 0 || re !== void 0)
        M(Z, re, de);
      else if (K !== void 0)
        E(K, de, De);
      else if (me !== void 0) {
        const ke = a.value.get(me);
        ke !== void 0 && E(ke, de, De);
      } else ve === "bottom" ? M(0, Number.MAX_SAFE_INTEGER, de) : ve === "top" && M(0, 0, de);
    };
    let C, T = null;
    function E(S, A, Z) {
      const { value: re } = f, K = re.sum(S) + bo(e.paddingTop);
      if (!Z)
        s.value.scrollTo({
          left: 0,
          top: K,
          behavior: A
        });
      else {
        C = S, T !== null && window.clearTimeout(T), T = window.setTimeout(() => {
          C = void 0, T = null;
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
      const { value: me } = f, ve = a.value.get(S), de = me.get(ve), De = (K = (re = (Z = A.borderBoxSize) === null || Z === void 0 ? void 0 : Z[0]) === null || re === void 0 ? void 0 : re.blockSize) !== null && K !== void 0 ? K : A.contentRect.height;
      if (De === de)
        return;
      De - e.itemSize === 0 ? u.delete(S) : u.set(S, De - e.itemSize);
      const et = De - de;
      if (et === 0)
        return;
      me.add(ve, et);
      const Ce = s.value;
      if (Ce != null) {
        if (C === void 0) {
          const we = me.sum(ve);
          Ce.scrollTop > we && Ce.scrollBy(0, et);
        } else if (ve < C)
          Ce.scrollBy(0, et);
        else if (ve === C) {
          const we = me.sum(ve);
          De + we > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          Ce.scrollTop + Ce.offsetHeight && Ce.scrollBy(0, et);
        }
        Y();
      }
      h.value++;
    }
    const V = !Dh();
    let p = !1;
    function D(S) {
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
          S.preventDefault(), Z.scrollTop += S.deltaY / Hi(), Z.scrollLeft += S.deltaX / Hi(), Y(), p = !0, Ul(() => {
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
        const { itemResizable: S } = e, A = Tr(f.value.sum());
        return h.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: Tr(o.value),
            height: S ? "" : A,
            minHeight: S ? A : "",
            paddingTop: Tr(e.paddingTop),
            paddingBottom: Tr(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: P(() => (h.value, {
        transform: `translateY(${Tr(f.value.sum(m.value))})`
      })),
      viewportItems: b,
      listElRef: s,
      itemsElRef: k(null),
      scrollTo: y,
      handleListResize: U,
      handleListScroll: D,
      handleListWheel: I,
      handleItemResize: L
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: t, visibleItemsTag: r } = this;
    return c(Br, {
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
            c(r, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: i, renderItemWithCols: l } = this;
                return this.viewportItems.map((s) => {
                  const d = s[n], u = t.get(d), f = i != null ? c(zi, {
                    index: u,
                    item: s
                  }) : void 0, h = l != null ? c(zi, {
                    index: u,
                    item: s
                  }) : void 0, g = this.$slots.default({
                    item: s,
                    renderedCols: f,
                    renderedItemWithCols: h,
                    index: u
                  })[0];
                  return e ? c(Br, {
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
const Rh = "n-internal-select-menu-body", Eh = "n-drawer-body", Ih = "n-modal-body", Fh = "n-popover-body", cs = "__disabled__";
function wn(e) {
  const n = Qe(Ih, null), t = Qe(Eh, null), r = Qe(Fh, null), o = Qe(Rh, null), a = k();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const i = () => {
      a.value = document.fullscreenElement;
    };
    an(() => {
      Rt("fullscreenchange", document, i);
    }), hn(() => {
      pt("fullscreenchange", document, i);
    });
  }
  return Gt(() => {
    var i;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? cs : l === !0 ? a.value || "body" : l : n != null && n.value ? (i = n.value.$el) !== null && i !== void 0 ? i : n.value : t != null && t.value ? t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : l ?? (a.value || "body");
  });
}
wn.tdkey = cs;
wn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
const Eo = typeof document < "u" && typeof window < "u";
function kh(e) {
  const n = {
    isDeactivated: !1
  };
  let t = !1;
  return _l(() => {
    if (n.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), Tl(() => {
    n.isDeactivated = !0, t || (t = !0);
  }), n;
}
function Bi(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Li(e) {
  const {
    left: n,
    right: t,
    top: r,
    bottom: o
  } = er(e);
  return `${r} ${n} ${o} ${t}`;
}
var Ni = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Ah(e) {
  let n = ".", t = "__", r = "--", o;
  {
    let m = e.blockPrefix;
    m && (n = m), m = e.elementPrefix, m && (t = m), m = e.modifierPrefix, m && (r = m);
  }
  const a = {
    install(m) {
      o = m.c;
      const b = m.context;
      b.bem = {}, b.bem.b = null, b.bem.els = null;
    }
  };
  function i(m) {
    let b, y;
    return {
      before(C) {
        b = C.bem.b, y = C.bem.els, C.bem.els = null;
      },
      after(C) {
        C.bem.b = b, C.bem.els = y;
      },
      $({ context: C, props: T }) {
        return m = typeof m == "string" ? m : m({ context: C, props: T }), C.bem.b = m, `${(T == null ? void 0 : T.bPrefix) || n}${C.bem.b}`;
      }
    };
  }
  function l(m) {
    let b;
    return {
      before(y) {
        b = y.bem.els;
      },
      after(y) {
        y.bem.els = b;
      },
      $({ context: y, props: C }) {
        return m = typeof m == "string" ? m : m({ context: y, props: C }), y.bem.els = m.split(",").map((T) => T.trim()), y.bem.els.map((T) => `${(C == null ? void 0 : C.bPrefix) || n}${y.bem.b}${t}${T}`).join(", ");
      }
    };
  }
  function s(m) {
    return {
      $({ context: b, props: y }) {
        m = typeof m == "string" ? m : m({ context: b, props: y });
        const C = m.split(",").map((M) => M.trim());
        function T(M) {
          return C.map((L) => `&${(y == null ? void 0 : y.bPrefix) || n}${b.bem.b}${M !== void 0 ? `${t}${M}` : ""}${r}${L}`).join(", ");
        }
        const E = b.bem.els;
        if (E !== null) {
          if (Ni.NODE_ENV !== "production" && E.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${m}) is invalid, using modifier inside multiple elements is not allowed`);
          return T(E[0]);
        } else
          return T();
      }
    };
  }
  function d(m) {
    return {
      $({ context: b, props: y }) {
        m = typeof m == "string" ? m : m({ context: b, props: y });
        const C = b.bem.els;
        if (Ni.NODE_ENV !== "production" && C !== null && C.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${m}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(y == null ? void 0 : y.bPrefix) || n}${b.bem.b}${C !== null && C.length > 0 ? `${t}${C[0]}` : ""}${r}${m})`;
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
const $h = "n", Hh = `.${$h}-`, zh = "__", Bh = "--", us = es(), fs = Ah({
  blockPrefix: Hh,
  elementPrefix: zh,
  modifierPrefix: Bh
});
us.use(fs);
const {
  c: $,
  find: bS
} = us, {
  cB: oe,
  cE: N,
  cM: ae,
  cNotM: Vt
} = fs;
function Se(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
const Lh = /* @__PURE__ */ new WeakSet();
function xo(e) {
  Lh.add(e);
}
const Wi = /* @__PURE__ */ new Set();
function Pn(e, n) {
  const t = `[naive/${e}]: ${n}`;
  Wi.has(t) || (Wi.add(t), console.error(t));
}
function hs(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function qa(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function Pe(e, ...n) {
  if (Array.isArray(e))
    e.forEach((t) => Pe(t, ...n));
  else
    return e(...n);
}
function Ur(e) {
  return e.some((n) => qd(n) ? !(n.type === wl || n.type === Do && !Ur(n.children)) : !0) ? e : null;
}
function Fe(e, n) {
  return e && Ur(e()) || n();
}
function Et(e, n, t) {
  return e && Ur(e(n)) || t(n);
}
function Cn(e, n) {
  const t = e && Ur(e());
  return n(t || null);
}
function Nh(e) {
  return !(e && Ur(e()));
}
const Vi = be({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), fn = "n-config-provider", wa = "n";
function Yr(e = {}, n = {
  defaultBordered: !0
}) {
  const t = Qe(fn, null);
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
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : Kd(wa),
    namespaceRef: P(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function zn(e, n, t, r) {
  t || qa("useThemeClass", "cssVarsRef is not passed");
  const o = Qe(fn, null), a = o == null ? void 0 : o.mergedThemeHashRef, i = o == null ? void 0 : o.styleMountTarget, l = k(""), s = gr();
  let d;
  const u = `__${e}`, f = () => {
    let h = u;
    const g = n ? n.value : void 0, m = a == null ? void 0 : a.value;
    m && (h += `-${m}`), g && (h += `-${g}`);
    const {
      themeOverrides: b,
      builtinThemeOverrides: y
    } = r;
    b && (h += `-${Hr(JSON.stringify(b))}`), y && (h += `-${Hr(JSON.stringify(y))}`), l.value = h, d = () => {
      const C = t.value;
      let T = "";
      for (const E in C)
        T += `${E}: ${C[E]};`;
      $(`.${h}`, T).mount({
        id: h,
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
  defaultSize: n = "medium",
  mergedSize: t,
  mergedDisabled: r
} = {}) {
  const o = Qe(ji, null);
  Nn(ji, null);
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
  return hn(() => {
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
const Wh = {
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
}, Vh = {
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
}, jh = {
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
}, Uh = (e, n, t) => {
  let r;
  const o = jh[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", String(n)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? r + "内" : r + "前" : r;
}, Yh = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Gh = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, qh = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Kh = {
  date: tr({
    formats: Yh,
    defaultWidth: "full"
  }),
  time: tr({
    formats: Gh,
    defaultWidth: "full"
  }),
  dateTime: tr({
    formats: qh,
    defaultWidth: "full"
  })
};
function Ui(e, n, t) {
  const r = "eeee p";
  return Nl(e, n, t) ? r : e.getTime() > n.getTime() ? "'下个'" + r : "'上个'" + r;
}
const Xh = {
  lastWeek: Ui,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Ui,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Qh = (e, n, t, r) => {
  const o = Xh[e];
  return typeof o == "function" ? o(n, t, r) : o;
}, Zh = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Jh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, em = {
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
}, tm = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, nm = {
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
}, rm = {
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
}, om = (e, n) => {
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
}, am = {
  ordinalNumber: om,
  era: tn({
    values: Zh,
    defaultWidth: "wide"
  }),
  quarter: tn({
    values: Jh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tn({
    values: em,
    defaultWidth: "wide"
  }),
  day: tn({
    values: tm,
    defaultWidth: "wide"
  }),
  dayPeriod: tn({
    values: nm,
    defaultWidth: "wide",
    formattingValues: rm,
    defaultFormattingWidth: "wide"
  })
}, im = /^(第\s*)?\d+(日|时|分|秒)?/i, lm = /\d+/i, sm = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, dm = {
  any: [/^(前)/i, /^(公元)/i]
}, cm = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, um = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, fm = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, hm = {
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
}, mm = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, pm = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, gm = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, vm = {
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
}, bm = {
  ordinalNumber: Rl({
    matchPattern: im,
    parsePattern: lm,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: nn({
    matchPatterns: sm,
    defaultMatchWidth: "wide",
    parsePatterns: dm,
    defaultParseWidth: "any"
  }),
  quarter: nn({
    matchPatterns: cm,
    defaultMatchWidth: "wide",
    parsePatterns: um,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: nn({
    matchPatterns: fm,
    defaultMatchWidth: "wide",
    parsePatterns: hm,
    defaultParseWidth: "any"
  }),
  day: nn({
    matchPatterns: mm,
    defaultMatchWidth: "wide",
    parsePatterns: pm,
    defaultParseWidth: "any"
  }),
  dayPeriod: nn({
    matchPatterns: gm,
    defaultMatchWidth: "any",
    parsePatterns: vm,
    defaultParseWidth: "any"
  })
}, Cm = {
  code: "zh-CN",
  formatDistance: Uh,
  formatLong: Kh,
  formatRelative: Qh,
  localize: am,
  match: bm,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, xm = {
  name: "en-US",
  locale: Ha
}, Sm = {
  name: "zh-CN",
  locale: Cm
};
var ms = typeof global == "object" && global && global.Object === Object && global, ym = typeof self == "object" && self && self.Object === Object && self, vr = ms || ym || Function("return this")(), ir = vr.Symbol, ps = Object.prototype, wm = ps.hasOwnProperty, Pm = ps.toString, Dr = ir ? ir.toStringTag : void 0;
function _m(e) {
  var n = wm.call(e, Dr), t = e[Dr];
  try {
    e[Dr] = void 0;
    var r = !0;
  } catch {
  }
  var o = Pm.call(e);
  return r && (n ? e[Dr] = t : delete e[Dr]), o;
}
var Tm = Object.prototype, Dm = Tm.toString;
function Mm(e) {
  return Dm.call(e);
}
var Om = "[object Null]", Rm = "[object Undefined]", Yi = ir ? ir.toStringTag : void 0;
function Gr(e) {
  return e == null ? e === void 0 ? Rm : Om : Yi && Yi in Object(e) ? _m(e) : Mm(e);
}
function br(e) {
  return e != null && typeof e == "object";
}
var Em = "[object Symbol]";
function Im(e) {
  return typeof e == "symbol" || br(e) && Gr(e) == Em;
}
function Fm(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = Array(r); ++t < r; )
    o[t] = n(e[t], t, e);
  return o;
}
var So = Array.isArray, Gi = ir ? ir.prototype : void 0, qi = Gi ? Gi.toString : void 0;
function gs(e) {
  if (typeof e == "string")
    return e;
  if (So(e))
    return Fm(e, gs) + "";
  if (Im(e))
    return qi ? qi.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
}
function Wn(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function vs(e) {
  return e;
}
var km = "[object AsyncFunction]", Am = "[object Function]", $m = "[object GeneratorFunction]", Hm = "[object Proxy]";
function Ka(e) {
  if (!Wn(e))
    return !1;
  var n = Gr(e);
  return n == Am || n == $m || n == km || n == Hm;
}
var ta = vr["__core-js_shared__"], Ki = function() {
  var e = /[^.]+$/.exec(ta && ta.keys && ta.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zm(e) {
  return !!Ki && Ki in e;
}
var Bm = Function.prototype, Lm = Bm.toString;
function Nm(e) {
  if (e != null) {
    try {
      return Lm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wm = /[\\^$.*+?()[\]{}|]/g, Vm = /^\[object .+?Constructor\]$/, jm = Function.prototype, Um = Object.prototype, Ym = jm.toString, Gm = Um.hasOwnProperty, qm = RegExp(
  "^" + Ym.call(Gm).replace(Wm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Km(e) {
  if (!Wn(e) || zm(e))
    return !1;
  var n = Ka(e) ? qm : Vm;
  return n.test(Nm(e));
}
function Xm(e, n) {
  return e == null ? void 0 : e[n];
}
function Xa(e, n) {
  var t = Xm(e, n);
  return Km(t) ? t : void 0;
}
var Xi = Object.create, Qm = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!Wn(n))
      return {};
    if (Xi)
      return Xi(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Zm(e, n, t) {
  switch (t.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, t[0]);
    case 2:
      return e.call(n, t[0], t[1]);
    case 3:
      return e.call(n, t[0], t[1], t[2]);
  }
  return e.apply(n, t);
}
function Jm(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var ep = 800, tp = 16, np = Date.now;
function rp(e) {
  var n = 0, t = 0;
  return function() {
    var r = np(), o = tp - (r - t);
    if (t = r, o > 0) {
      if (++n >= ep)
        return arguments[0];
    } else
      n = 0;
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
}(), ap = yo ? function(e, n) {
  return yo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: op(n),
    writable: !0
  });
} : vs, ip = rp(ap), lp = 9007199254740991, sp = /^(?:0|[1-9]\d*)$/;
function bs(e, n) {
  var t = typeof e;
  return n = n ?? lp, !!n && (t == "number" || t != "symbol" && sp.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Qa(e, n, t) {
  n == "__proto__" && yo ? yo(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function Fo(e, n) {
  return e === n || e !== e && n !== n;
}
var dp = Object.prototype, cp = dp.hasOwnProperty;
function up(e, n, t) {
  var r = e[n];
  (!(cp.call(e, n) && Fo(r, t)) || t === void 0 && !(n in e)) && Qa(e, n, t);
}
function fp(e, n, t, r) {
  var o = !t;
  t || (t = {});
  for (var a = -1, i = n.length; ++a < i; ) {
    var l = n[a], s = void 0;
    s === void 0 && (s = e[l]), o ? Qa(t, l, s) : up(t, l, s);
  }
  return t;
}
var Qi = Math.max;
function hp(e, n, t) {
  return n = Qi(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var r = arguments, o = -1, a = Qi(r.length - n, 0), i = Array(a); ++o < a; )
      i[o] = r[n + o];
    o = -1;
    for (var l = Array(n + 1); ++o < n; )
      l[o] = r[o];
    return l[n] = t(i), Zm(e, this, l);
  };
}
function mp(e, n) {
  return ip(hp(e, n, vs), e + "");
}
var pp = 9007199254740991;
function Cs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pp;
}
function Za(e) {
  return e != null && Cs(e.length) && !Ka(e);
}
function gp(e, n, t) {
  if (!Wn(t))
    return !1;
  var r = typeof n;
  return (r == "number" ? Za(t) && bs(n, t.length) : r == "string" && n in t) ? Fo(t[n], e) : !1;
}
function vp(e) {
  return mp(function(n, t) {
    var r = -1, o = t.length, a = o > 1 ? t[o - 1] : void 0, i = o > 2 ? t[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && gp(t[0], t[1], i) && (a = o < 3 ? void 0 : a, o = 1), n = Object(n); ++r < o; ) {
      var l = t[r];
      l && e(n, l, r, a);
    }
    return n;
  });
}
var bp = Object.prototype;
function xs(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || bp;
  return e === t;
}
function Cp(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var xp = "[object Arguments]";
function Zi(e) {
  return br(e) && Gr(e) == xp;
}
var Ss = Object.prototype, Sp = Ss.hasOwnProperty, yp = Ss.propertyIsEnumerable, Pa = Zi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Zi : function(e) {
  return br(e) && Sp.call(e, "callee") && !yp.call(e, "callee");
};
function wp() {
  return !1;
}
var ys = typeof exports == "object" && exports && !exports.nodeType && exports, Ji = ys && typeof module == "object" && module && !module.nodeType && module, Pp = Ji && Ji.exports === ys, el = Pp ? vr.Buffer : void 0, _p = el ? el.isBuffer : void 0, ws = _p || wp, Tp = "[object Arguments]", Dp = "[object Array]", Mp = "[object Boolean]", Op = "[object Date]", Rp = "[object Error]", Ep = "[object Function]", Ip = "[object Map]", Fp = "[object Number]", kp = "[object Object]", Ap = "[object RegExp]", $p = "[object Set]", Hp = "[object String]", zp = "[object WeakMap]", Bp = "[object ArrayBuffer]", Lp = "[object DataView]", Np = "[object Float32Array]", Wp = "[object Float64Array]", Vp = "[object Int8Array]", jp = "[object Int16Array]", Up = "[object Int32Array]", Yp = "[object Uint8Array]", Gp = "[object Uint8ClampedArray]", qp = "[object Uint16Array]", Kp = "[object Uint32Array]", Ye = {};
Ye[Np] = Ye[Wp] = Ye[Vp] = Ye[jp] = Ye[Up] = Ye[Yp] = Ye[Gp] = Ye[qp] = Ye[Kp] = !0;
Ye[Tp] = Ye[Dp] = Ye[Bp] = Ye[Mp] = Ye[Lp] = Ye[Op] = Ye[Rp] = Ye[Ep] = Ye[Ip] = Ye[Fp] = Ye[kp] = Ye[Ap] = Ye[$p] = Ye[Hp] = Ye[zp] = !1;
function Xp(e) {
  return br(e) && Cs(e.length) && !!Ye[Gr(e)];
}
function Qp(e) {
  return function(n) {
    return e(n);
  };
}
var Ps = typeof exports == "object" && exports && !exports.nodeType && exports, Ar = Ps && typeof module == "object" && module && !module.nodeType && module, Zp = Ar && Ar.exports === Ps, na = Zp && ms.process, tl = function() {
  try {
    var e = Ar && Ar.require && Ar.require("util").types;
    return e || na && na.binding && na.binding("util");
  } catch {
  }
}(), nl = tl && tl.isTypedArray, _s = nl ? Qp(nl) : Xp;
function Jp(e, n) {
  var t = So(e), r = !t && Pa(e), o = !t && !r && ws(e), a = !t && !r && !o && _s(e), i = t || r || o || a, l = i ? Cp(e.length, String) : [], s = l.length;
  for (var d in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    bs(d, s)) || l.push(d);
  return l;
}
function eg(e, n) {
  return function(t) {
    return e(n(t));
  };
}
function tg(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var ng = Object.prototype, rg = ng.hasOwnProperty;
function og(e) {
  if (!Wn(e))
    return tg(e);
  var n = xs(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !rg.call(e, r)) || t.push(r);
  return t;
}
function Ts(e) {
  return Za(e) ? Jp(e) : og(e);
}
var Lr = Xa(Object, "create");
function ag() {
  this.__data__ = Lr ? Lr(null) : {}, this.size = 0;
}
function ig(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var lg = "__lodash_hash_undefined__", sg = Object.prototype, dg = sg.hasOwnProperty;
function cg(e) {
  var n = this.__data__;
  if (Lr) {
    var t = n[e];
    return t === lg ? void 0 : t;
  }
  return dg.call(n, e) ? n[e] : void 0;
}
var ug = Object.prototype, fg = ug.hasOwnProperty;
function hg(e) {
  var n = this.__data__;
  return Lr ? n[e] !== void 0 : fg.call(n, e);
}
var mg = "__lodash_hash_undefined__";
function pg(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Lr && n === void 0 ? mg : n, this;
}
function Bn(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Bn.prototype.clear = ag;
Bn.prototype.delete = ig;
Bn.prototype.get = cg;
Bn.prototype.has = hg;
Bn.prototype.set = pg;
function gg() {
  this.__data__ = [], this.size = 0;
}
function ko(e, n) {
  for (var t = e.length; t--; )
    if (Fo(e[t][0], n))
      return t;
  return -1;
}
var vg = Array.prototype, bg = vg.splice;
function Cg(e) {
  var n = this.__data__, t = ko(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : bg.call(n, t, 1), --this.size, !0;
}
function xg(e) {
  var n = this.__data__, t = ko(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Sg(e) {
  return ko(this.__data__, e) > -1;
}
function yg(e, n) {
  var t = this.__data__, r = ko(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function mn(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
mn.prototype.clear = gg;
mn.prototype.delete = Cg;
mn.prototype.get = xg;
mn.prototype.has = Sg;
mn.prototype.set = yg;
var Ds = Xa(vr, "Map");
function wg() {
  this.size = 0, this.__data__ = {
    hash: new Bn(),
    map: new (Ds || mn)(),
    string: new Bn()
  };
}
function Pg(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ao(e, n) {
  var t = e.__data__;
  return Pg(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function _g(e) {
  var n = Ao(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Tg(e) {
  return Ao(this, e).get(e);
}
function Dg(e) {
  return Ao(this, e).has(e);
}
function Mg(e, n) {
  var t = Ao(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function Cr(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Cr.prototype.clear = wg;
Cr.prototype.delete = _g;
Cr.prototype.get = Tg;
Cr.prototype.has = Dg;
Cr.prototype.set = Mg;
function Og(e) {
  return e == null ? "" : gs(e);
}
var Ms = eg(Object.getPrototypeOf, Object), Rg = "[object Object]", Eg = Function.prototype, Ig = Object.prototype, Os = Eg.toString, Fg = Ig.hasOwnProperty, kg = Os.call(Object);
function Ag(e) {
  if (!br(e) || Gr(e) != Rg)
    return !1;
  var n = Ms(e);
  if (n === null)
    return !0;
  var t = Fg.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Os.call(t) == kg;
}
function $g(e, n, t) {
  var r = -1, o = e.length;
  n < 0 && (n = -n > o ? 0 : o + n), t = t > o ? o : t, t < 0 && (t += o), o = n > t ? 0 : t - n >>> 0, n >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + n];
  return a;
}
function Hg(e, n, t) {
  var r = e.length;
  return t = t === void 0 ? r : t, !n && t >= r ? e : $g(e, n, t);
}
var zg = "\\ud800-\\udfff", Bg = "\\u0300-\\u036f", Lg = "\\ufe20-\\ufe2f", Ng = "\\u20d0-\\u20ff", Wg = Bg + Lg + Ng, Vg = "\\ufe0e\\ufe0f", jg = "\\u200d", Ug = RegExp("[" + jg + zg + Wg + Vg + "]");
function Rs(e) {
  return Ug.test(e);
}
function Yg(e) {
  return e.split("");
}
var Es = "\\ud800-\\udfff", Gg = "\\u0300-\\u036f", qg = "\\ufe20-\\ufe2f", Kg = "\\u20d0-\\u20ff", Xg = Gg + qg + Kg, Qg = "\\ufe0e\\ufe0f", Zg = "[" + Es + "]", _a = "[" + Xg + "]", Ta = "\\ud83c[\\udffb-\\udfff]", Jg = "(?:" + _a + "|" + Ta + ")", Is = "[^" + Es + "]", Fs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ks = "[\\ud800-\\udbff][\\udc00-\\udfff]", ev = "\\u200d", As = Jg + "?", $s = "[" + Qg + "]?", tv = "(?:" + ev + "(?:" + [Is, Fs, ks].join("|") + ")" + $s + As + ")*", nv = $s + As + tv, rv = "(?:" + [Is + _a + "?", _a, Fs, ks, Zg].join("|") + ")", ov = RegExp(Ta + "(?=" + Ta + ")|" + rv + nv, "g");
function av(e) {
  return e.match(ov) || [];
}
function iv(e) {
  return Rs(e) ? av(e) : Yg(e);
}
function lv(e) {
  return function(n) {
    n = Og(n);
    var t = Rs(n) ? iv(n) : void 0, r = t ? t[0] : n.charAt(0), o = t ? Hg(t, 1).join("") : n.slice(1);
    return r[e]() + o;
  };
}
var sv = lv("toUpperCase");
function dv() {
  this.__data__ = new mn(), this.size = 0;
}
function cv(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function uv(e) {
  return this.__data__.get(e);
}
function fv(e) {
  return this.__data__.has(e);
}
var hv = 200;
function mv(e, n) {
  var t = this.__data__;
  if (t instanceof mn) {
    var r = t.__data__;
    if (!Ds || r.length < hv - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Cr(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function xr(e) {
  var n = this.__data__ = new mn(e);
  this.size = n.size;
}
xr.prototype.clear = dv;
xr.prototype.delete = cv;
xr.prototype.get = uv;
xr.prototype.has = fv;
xr.prototype.set = mv;
var Hs = typeof exports == "object" && exports && !exports.nodeType && exports, rl = Hs && typeof module == "object" && module && !module.nodeType && module, pv = rl && rl.exports === Hs, ol = pv ? vr.Buffer : void 0;
ol && ol.allocUnsafe;
function gv(e, n) {
  return e.slice();
}
var al = vr.Uint8Array;
function vv(e) {
  var n = new e.constructor(e.byteLength);
  return new al(n).set(new al(e)), n;
}
function bv(e, n) {
  var t = vv(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
function Cv(e) {
  return typeof e.constructor == "function" && !xs(e) ? Qm(Ms(e)) : {};
}
function xv(e) {
  return function(n, t, r) {
    for (var o = -1, a = Object(n), i = r(n), l = i.length; l--; ) {
      var s = i[++o];
      if (t(a[s], s, a) === !1)
        break;
    }
    return n;
  };
}
var Sv = xv();
function Da(e, n, t) {
  (t !== void 0 && !Fo(e[n], t) || t === void 0 && !(n in e)) && Qa(e, n, t);
}
function yv(e) {
  return br(e) && Za(e);
}
function Ma(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function wv(e) {
  return fp(e, Ts(e));
}
function Pv(e, n, t, r, o, a, i) {
  var l = Ma(e, t), s = Ma(n, t), d = i.get(s);
  if (d) {
    Da(e, t, d);
    return;
  }
  var u = a ? a(l, s, t + "", e, n, i) : void 0, f = u === void 0;
  if (f) {
    var h = So(s), g = !h && ws(s), m = !h && !g && _s(s);
    u = s, h || g || m ? So(l) ? u = l : yv(l) ? u = Jm(l) : g ? (f = !1, u = gv(s)) : m ? (f = !1, u = bv(s)) : u = [] : Ag(s) || Pa(s) ? (u = l, Pa(l) ? u = wv(l) : (!Wn(l) || Ka(l)) && (u = Cv(s))) : f = !1;
  }
  f && (i.set(s, u), o(u, s, r, a, i), i.delete(s)), Da(e, t, u);
}
function zs(e, n, t, r, o) {
  e !== n && Sv(n, function(a, i) {
    if (o || (o = new xr()), Wn(a))
      Pv(e, n, i, t, zs, r, o);
    else {
      var l = r ? r(Ma(e, i), a, i + "", e, n, o) : void 0;
      l === void 0 && (l = a), Da(e, i, l);
    }
  }, Ts);
}
var Or = vp(function(e, n, t) {
  zs(e, n, t);
});
function qr(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: t
  } = Qe(fn, null) || {}, r = P(() => {
    var a, i;
    return (i = (a = n == null ? void 0 : n.value) === null || a === void 0 ? void 0 : a[e]) !== null && i !== void 0 ? i : Wh[e];
  });
  return {
    dateLocaleRef: P(() => {
      var a;
      return (a = t == null ? void 0 : t.value) !== null && a !== void 0 ? a : xm;
    }),
    localeRef: r
  };
}
const Nr = "naive-ui-style";
function Ja(e, n, t) {
  if (!n) return;
  const r = gr(), o = P(() => {
    const {
      value: l
    } = n;
    if (!l)
      return;
    const s = l[e];
    if (s)
      return s;
  }), a = Qe(fn, null), i = () => {
    At(() => {
      const {
        value: l
      } = t, s = `${l}${e}Rtl`;
      if (Xf(s, r)) return;
      const {
        value: d
      } = o;
      d && d.style.mount({
        id: s,
        head: !0,
        anchorMetaName: Nr,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: r,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return r ? i() : To(i), o;
}
const Vn = {
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
  fontSize: _v,
  fontFamily: Tv,
  lineHeight: Dv
} = Vn, Bs = $("body", `
 margin: 0;
 font-size: ${_v};
 font-family: ${Tv};
 line-height: ${Dv};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [$("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var Mv = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Kr(e, n, t) {
  if (!n) {
    Mv.NODE_ENV !== "production" && qa("use-style", "No style is specified.");
    return;
  }
  const r = gr(), o = Qe(fn, null), a = () => {
    const i = t.value;
    n.mount({
      id: i === void 0 ? e : i + e,
      head: !0,
      anchorMetaName: Nr,
      props: {
        bPrefix: i ? `.${i}-` : void 0
      },
      ssr: r,
      parent: o == null ? void 0 : o.styleMountTarget
    }), o != null && o.preflightStyleDisabled || Bs.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Nr,
      ssr: r,
      parent: o == null ? void 0 : o.styleMountTarget
    });
  };
  r ? a() : To(a);
}
function Zt(e, n, t, r, o, a) {
  const i = gr(), l = Qe(fn, null);
  if (t) {
    const d = () => {
      const u = a == null ? void 0 : a.value;
      t.mount({
        id: u === void 0 ? n : u + n,
        head: !0,
        props: {
          bPrefix: u ? `.${u}-` : void 0
        },
        anchorMetaName: Nr,
        ssr: i,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || Bs.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Nr,
        ssr: i,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    i ? d() : To(d);
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
      common: b,
      peers: y
    } = g, {
      common: C = void 0,
      [e]: {
        common: T = void 0,
        self: E = void 0,
        peers: M = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: L = void 0,
      [e]: V = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: p,
      peers: D = {}
    } = V, I = Or({}, u || T || C || r.common, L, p, b), U = Or(
      // {}, executed every time, no need for empty obj
      (d = f || E || r.self) === null || d === void 0 ? void 0 : d(I),
      m,
      V,
      g
    );
    return {
      common: I,
      self: U,
      peers: Or({}, r.peers, M, h),
      peerOverrides: Or({}, m.peers, D, y)
    };
  });
}
Zt.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Ov = oe("base-icon", `
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
 `)]), Sn = be({
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
    Kr("-base-icon", Ov, Ge(e, "clsPrefix"));
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
}), ei = be({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const t = Oo();
    return () => c(Hn, {
      name: "icon-switch-transition",
      appear: t.value
    }, n);
  }
});
function $o(e, n) {
  const t = be({
    render() {
      return n();
    }
  });
  return be({
    name: sv(e),
    setup() {
      var r;
      const o = (r = Qe(fn, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var a;
        const i = (a = o == null ? void 0 : o.value) === null || a === void 0 ? void 0 : a[e];
        return i ? i() : c(t, null);
      };
    }
  });
}
const lr = be({
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
}), Rv = be({
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
}))))), Iv = be({
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
}), Fv = be({
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
}), sr = be({
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
}), dr = be({
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
}), cr = be({
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
}), kv = $o("time", () => c("svg", {
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
} = Vn;
function wo({
  originalTransform: e = "",
  left: n = 0,
  top: t = 0,
  transition: r = `all .3s ${$v} !important`
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
const Hv = oe("base-clear", `
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
 `, [wo({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Oa = be({
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
    return Kr("-base-clear", Hv, Ge(e, "clsPrefix")), {
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
    }, c(ei, null, {
      default: () => {
        var n, t;
        return this.show ? c("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Fe(this.$slots.icon, () => [c(Sn, {
          clsPrefix: e
        }, {
          default: () => c(Ev, null)
        })])) : c("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (t = (n = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(n));
      }
    }));
  }
}), zv = be({
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
      } = e, f = l ? Xd : Hn, h = {
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
}), jn = be({
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
}), Bv = $([$("@keyframes rotator", `
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
 `, [wo()]), N("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [wo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), N("container", `
 animation: rotator 3s linear infinite both;
 `, [N("icon", `
 height: 1em;
 width: 1em;
 `)])])]), ra = "1.6s", Lv = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Ls = be({
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
  }, Lv),
  setup(e) {
    Kr("-base-loading", Bv, Ge(e, "clsPrefix"));
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
          color: r
        }
      }, c("g", null, c("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};270 ${a} ${a}`,
        begin: "0s",
        dur: ra,
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
        dur: ra,
        fill: "freeze",
        repeatCount: "indefinite"
      }), c("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: ra,
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
} = Vn;
function Nv({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: t = "0.2s",
  enterCubicBezier: r = ll,
  leaveCubicBezier: o = ll
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
}, Wv = un(X.neutralBase), Ns = un(X.neutralInvertBase), Vv = `rgba(${Ns.slice(0, 3).join(", ")}, `;
function Re(e) {
  return `${Vv + String(e)})`;
}
function jv(e) {
  const n = Array.from(Ns);
  return n[3] = Number(e), ne(Wv, n);
}
const B = Object.assign(Object.assign({
  name: "common"
}, Vn), {
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
}, Uv = un(ce.neutralBase), Ws = un(ce.neutralInvertBase), Yv = `rgba(${Ws.slice(0, 3).join(", ")}, `;
function sl(e) {
  return `${Yv + String(e)})`;
}
function yt(e) {
  const n = Array.from(Ws);
  return n[3] = Number(e), ne(Uv, n);
}
const Sr = Object.assign(Object.assign({
  name: "common"
}, Vn), {
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
    scrollbarColor: n,
    scrollbarColorHover: t,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Gv), {
    height: r,
    width: o,
    borderRadius: a,
    color: n,
    colorHover: t
  });
}
const ti = {
  name: "Scrollbar",
  common: Sr,
  self: Vs
}, $t = {
  name: "Scrollbar",
  common: B,
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
 `, [Nv(), $("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Kv = Object.assign(Object.assign({}, Zt.props), {
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
}), Xt = be({
  name: "Scrollbar",
  props: Kv,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Yr(e), o = Ja("Scrollbar", r, n), a = k(null), i = k(null), l = k(null), s = k(null), d = k(null), u = k(null), f = k(null), h = k(null), g = k(null), m = k(null), b = k(null), y = k(0), C = k(0), T = k(!1), E = k(!1);
    let M = !1, L = !1, V, p, D = 0, I = 0, U = 0, Y = 0;
    const z = Df(), S = Zt("Scrollbar", "-scrollbar", qv, ti, e, n), A = P(() => {
      const {
        value: F
      } = h, {
        value: J
      } = u, {
        value: le
      } = m;
      return F === null || J === null || le === null ? 0 : Math.min(F, le * F / J + bo(S.value.self.width) * 1.5);
    }), Z = P(() => `${A.value}px`), re = P(() => {
      const {
        value: F
      } = g, {
        value: J
      } = f, {
        value: le
      } = b;
      return F === null || J === null || le === null ? 0 : le * F / J + bo(S.value.self.height) * 1.5;
    }), K = P(() => `${re.value}px`), me = P(() => {
      const {
        value: F
      } = h, {
        value: J
      } = y, {
        value: le
      } = u, {
        value: Me
      } = m;
      if (F === null || le === null || Me === null)
        return 0;
      {
        const Ie = le - F;
        return Ie ? J / Ie * (Me - A.value) : 0;
      }
    }), ve = P(() => `${me.value}px`), de = P(() => {
      const {
        value: F
      } = g, {
        value: J
      } = C, {
        value: le
      } = f, {
        value: Me
      } = b;
      if (F === null || le === null || Me === null)
        return 0;
      {
        const Ie = le - F;
        return Ie ? J / Ie * (Me - re.value) : 0;
      }
    }), De = P(() => `${de.value}px`), ke = P(() => {
      const {
        value: F
      } = h, {
        value: J
      } = u;
      return F !== null && J !== null && J > F;
    }), et = P(() => {
      const {
        value: F
      } = g, {
        value: J
      } = f;
      return F !== null && J !== null && J > F;
    }), Ce = P(() => {
      const {
        trigger: F
      } = e;
      return F === "none" || T.value;
    }), we = P(() => {
      const {
        trigger: F
      } = e;
      return F === "none" || E.value;
    }), pe = P(() => {
      const {
        container: F
      } = e;
      return F ? F() : i.value;
    }), Ne = P(() => {
      const {
        content: F
      } = e;
      return F ? F() : l.value;
    }), rt = (F, J) => {
      if (!e.scrollable) return;
      if (typeof F == "number") {
        at(F, J ?? 0, 0, !1, "auto");
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
        debounce: Ke = !0
      } = F;
      (le !== void 0 || Me !== void 0) && at(le ?? 0, Me ?? 0, 0, !1, te), fe !== void 0 ? at(0, fe.offsetTop, fe.offsetHeight, Ke, te) : Ie !== void 0 && w !== void 0 ? at(0, Ie * w, w, Ke, te) : G === "bottom" ? at(0, Number.MAX_SAFE_INTEGER, 0, !1, te) : G === "top" && at(0, 0, 0, !1, te);
    }, he = kh(() => {
      e.container || rt({
        top: y.value,
        left: C.value
      });
    }), Ct = () => {
      he.isDeactivated || it();
    }, ye = (F) => {
      if (he.isDeactivated) return;
      const {
        onResize: J
      } = e;
      J && J(F), it();
    }, ot = (F, J) => {
      if (!e.scrollable) return;
      const {
        value: le
      } = pe;
      le && (typeof F == "object" ? le.scrollBy(F) : le.scrollBy(F, J || 0));
    };
    function at(F, J, le, Me, Ie) {
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
              left: F,
              top: J + le - te,
              behavior: Ie
            });
            return;
          }
        }
        w.scrollTo({
          left: F,
          top: J,
          behavior: Ie
        });
      }
    }
    function It() {
      Lt(), Oe(), it();
    }
    function zt() {
      _t();
    }
    function _t() {
      Bt(), xt();
    }
    function Bt() {
      p !== void 0 && window.clearTimeout(p), p = window.setTimeout(() => {
        E.value = !1;
      }, e.duration);
    }
    function xt() {
      V !== void 0 && window.clearTimeout(V), V = window.setTimeout(() => {
        T.value = !1;
      }, e.duration);
    }
    function Lt() {
      V !== void 0 && window.clearTimeout(V), T.value = !0;
    }
    function Oe() {
      p !== void 0 && window.clearTimeout(p), E.value = !0;
    }
    function ze(F) {
      const {
        onScroll: J
      } = e;
      J && J(F), tt();
    }
    function tt() {
      const {
        value: F
      } = pe;
      F && (y.value = F.scrollTop, C.value = F.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function Kt() {
      const {
        value: F
      } = Ne;
      F && (u.value = F.offsetHeight, f.value = F.offsetWidth);
      const {
        value: J
      } = pe;
      J && (h.value = J.offsetHeight, g.value = J.offsetWidth);
      const {
        value: le
      } = d, {
        value: Me
      } = s;
      le && (b.value = le.offsetWidth), Me && (m.value = Me.offsetHeight);
    }
    function Tt() {
      const {
        value: F
      } = pe;
      F && (y.value = F.scrollTop, C.value = F.scrollLeft * (o != null && o.value ? -1 : 1), h.value = F.offsetHeight, g.value = F.offsetWidth, u.value = F.scrollHeight, f.value = F.scrollWidth);
      const {
        value: J
      } = d, {
        value: le
      } = s;
      J && (b.value = J.offsetWidth), le && (m.value = le.offsetHeight);
    }
    function it() {
      e.scrollable && (e.useUnifiedContainer ? Tt() : (Kt(), tt()));
    }
    function mt(F) {
      var J;
      return !(!((J = a.value) === null || J === void 0) && J.contains(Mo(F)));
    }
    function O(F) {
      F.preventDefault(), F.stopPropagation(), L = !0, Rt("mousemove", window, ue, !0), Rt("mouseup", window, Ee, !0), I = C.value, U = o != null && o.value ? window.innerWidth - F.clientX : F.clientX;
    }
    function ue(F) {
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
      const w = (o != null && o.value ? window.innerWidth - F.clientX - U : F.clientX - U) * (le - J) / (J - Me), G = le - J;
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
    function Ee(F) {
      F.preventDefault(), F.stopPropagation(), pt("mousemove", window, ue, !0), pt("mouseup", window, Ee, !0), L = !1, it(), mt(F) && _t();
    }
    function ln(F) {
      F.preventDefault(), F.stopPropagation(), M = !0, Rt("mousemove", window, Nt, !0), Rt("mouseup", window, qe, !0), D = y.value, Y = F.clientY;
    }
    function Nt(F) {
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
      const w = (F.clientY - Y) * (le - J) / (J - Me), G = le - J;
      let te = D + w;
      te = Math.min(G, te), te = Math.max(te, 0);
      const {
        value: fe
      } = pe;
      fe && (fe.scrollTop = te);
    }
    function qe(F) {
      F.preventDefault(), F.stopPropagation(), pt("mousemove", window, Nt, !0), pt("mouseup", window, qe, !0), M = !1, it(), mt(F) && _t();
    }
    At(() => {
      const {
        value: F
      } = et, {
        value: J
      } = ke, {
        value: le
      } = n, {
        value: Me
      } = d, {
        value: Ie
      } = s;
      Me && (F ? Me.classList.remove(`${le}-scrollbar-rail--disabled`) : Me.classList.add(`${le}-scrollbar-rail--disabled`)), Ie && (J ? Ie.classList.remove(`${le}-scrollbar-rail--disabled`) : Ie.classList.add(`${le}-scrollbar-rail--disabled`));
    }), an(() => {
      e.container || it();
    }), hn(() => {
      V !== void 0 && window.clearTimeout(V), p !== void 0 && window.clearTimeout(p), pt("mousemove", window, Nt, !0), pt("mouseup", window, qe, !0);
    });
    const gt = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: F
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
          railInsetVerticalLeft: Ke,
          railColor: lt
        }
      } = S.value, {
        top: _,
        right: H,
        bottom: q,
        left: xe
      } = er(G), {
        top: Ze,
        right: We,
        bottom: Ae,
        left: v
      } = er(te), {
        top: R,
        right: ie,
        bottom: _e,
        left: He
      } = er(o != null && o.value ? Li(fe) : fe), {
        top: Te,
        right: Dt,
        bottom: Wt,
        left: ut
      } = er(o != null && o.value ? Li(Ke) : Ke);
      return {
        "--n-scrollbar-bezier": F,
        "--n-scrollbar-color": J,
        "--n-scrollbar-color-hover": le,
        "--n-scrollbar-border-radius": w,
        "--n-scrollbar-width": Ie,
        "--n-scrollbar-height": Me,
        "--n-scrollbar-rail-top-horizontal-top": _,
        "--n-scrollbar-rail-right-horizontal-top": H,
        "--n-scrollbar-rail-bottom-horizontal-top": q,
        "--n-scrollbar-rail-left-horizontal-top": xe,
        "--n-scrollbar-rail-top-horizontal-bottom": Ze,
        "--n-scrollbar-rail-right-horizontal-bottom": We,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ae,
        "--n-scrollbar-rail-left-horizontal-bottom": v,
        "--n-scrollbar-rail-top-vertical-right": R,
        "--n-scrollbar-rail-right-vertical-right": ie,
        "--n-scrollbar-rail-bottom-vertical-right": _e,
        "--n-scrollbar-rail-left-vertical-right": He,
        "--n-scrollbar-rail-top-vertical-left": Te,
        "--n-scrollbar-rail-right-vertical-left": Dt,
        "--n-scrollbar-rail-bottom-vertical-left": Wt,
        "--n-scrollbar-rail-left-vertical-left": ut,
        "--n-scrollbar-rail-color": lt
      };
    }), St = t ? zn("scrollbar", void 0, gt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: rt,
      scrollBy: ot,
      sync: it,
      syncUnifiedContainer: Tt,
      handleMouseEnterWrapper: It,
      handleMouseLeaveWrapper: zt
    }), {
      mergedClsPrefix: n,
      rtlEnabled: o,
      containerScrollTop: y,
      wrapperRef: a,
      containerRef: i,
      contentRef: l,
      yRailRef: s,
      xRailRef: d,
      needYBar: ke,
      needXBar: et,
      yBarSizePx: Z,
      xBarSizePx: K,
      yBarTopPx: ve,
      xBarLeftPx: De,
      isShowXBar: Ce,
      isShowYBar: we,
      isIos: z,
      handleScroll: ze,
      handleContentResize: Ct,
      handleContainerResize: ye,
      handleYScrollMouseDown: ln,
      handleXScrollMouseDown: O,
      cssVars: t ? void 0 : gt,
      themeClass: St == null ? void 0 : St.themeClass,
      onRender: St == null ? void 0 : St.onRender
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
    }, c(d ? Vi : Hn, d ? null : {
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
      return (g = this.onRender) === null || g === void 0 || g.call(this), c("div", $a(this.$attrs, {
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
      }, c(Br, {
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
      }, c(d ? Vi : Hn, d ? null : {
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
    }, h = this.container ? f() : c(Br, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? c(Do, null, h, u(this.themeClass, this.cssVars)) : h;
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
    textColorDisabled: n,
    iconColor: t,
    textColor2: r,
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
    textColor: n,
    iconColor: t,
    extraTextColor: r
  });
}
const Qv = {
  name: "Empty",
  common: Sr,
  self: js
}, Un = {
  name: "Empty",
  common: B,
  self: js
}, Zv = {
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
function Jv(e) {
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
    fontSizeHuge: b,
    heightTiny: y,
    heightSmall: C,
    heightMedium: T,
    heightLarge: E,
    heightHuge: M
  } = e;
  return Object.assign(Object.assign({}, Zv), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: h,
    optionFontSizeMedium: g,
    optionFontSizeLarge: m,
    optionFontSizeHuge: b,
    optionHeightTiny: y,
    optionHeightSmall: C,
    optionHeightMedium: T,
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
const Xr = {
  name: "InternalSelectMenu",
  common: B,
  peers: {
    Scrollbar: $t,
    Empty: Un
  },
  self: Jv
}, {
  cubicBezierEaseIn: dl,
  cubicBezierEaseOut: cl
} = Vn;
function Us({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: t = ".9",
  originalTransform: r = "",
  originalTransition: o = ""
} = {}) {
  return [$("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${dl}, transform ${n} ${dl} ${o && `,${o}`}`
  }), $("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${cl}, transform ${n} ${cl} ${o && `,${o}`}`
  }), $("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${r} scale(${t})`
  }), $("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${r} scale(1)`
  })];
}
const eb = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function tb(e) {
  const {
    boxShadow2: n,
    popoverColor: t,
    textColor2: r,
    borderRadius: o,
    fontSize: a,
    dividerColor: i
  } = e;
  return Object.assign(Object.assign({}, eb), {
    fontSize: a,
    borderRadius: o,
    color: t,
    dividerColor: i,
    textColor: r,
    boxShadow: n
  });
}
const Yn = {
  name: "Popover",
  common: B,
  self: tb
}, nb = {
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
      closeIconColorPressed: b,
      closeColorHover: y,
      closeColorPressed: C,
      borderRadiusSmall: T,
      fontSizeMini: E,
      fontSizeTiny: M,
      fontSizeSmall: L,
      fontSizeMedium: V,
      heightMini: p,
      heightTiny: D,
      heightSmall: I,
      heightMedium: U,
      buttonColor2Hover: Y,
      buttonColor2Pressed: z,
      fontWeightStrong: S
    } = e;
    return Object.assign(Object.assign({}, nb), {
      closeBorderRadius: T,
      heightTiny: p,
      heightSmall: D,
      heightMedium: I,
      heightLarge: U,
      borderRadius: T,
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
      closeIconColorPressed: b,
      closeColorHover: y,
      closeColorPressed: C,
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
}, rb = be({
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
      return c(Ls, {
        clsPrefix: t,
        class: `${t}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? c(Oa, {
          clsPrefix: t,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => c(Sn, {
            clsPrefix: t,
            class: `${t}-base-suffix__arrow`
          }, {
            default: () => Fe(n.default, () => [c(Rv, null)])
          })
        }) : null
      });
    };
  }
}), ob = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
}, ni = {
  name: "InternalSelection",
  common: B,
  peers: {
    Popover: Yn
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
      clearColorHover: b,
      clearColorPressed: y,
      placeholderColor: C,
      placeholderColorDisabled: T,
      fontSizeTiny: E,
      fontSizeSmall: M,
      fontSizeMedium: L,
      fontSizeLarge: V,
      heightTiny: p,
      heightSmall: D,
      heightMedium: I,
      heightLarge: U,
      fontWeight: Y
    } = e;
    return Object.assign(Object.assign({}, ob), {
      fontWeight: Y,
      fontSizeTiny: E,
      fontSizeSmall: M,
      fontSizeMedium: L,
      fontSizeLarge: V,
      heightTiny: p,
      heightSmall: D,
      heightMedium: I,
      heightLarge: U,
      borderRadius: n,
      // default
      textColor: t,
      textColorDisabled: r,
      placeholderColor: C,
      placeholderColorDisabled: T,
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
      clearColorHover: b,
      clearColorPressed: y
    });
  }
}, {
  cubicBezierEaseInOut: vn
} = Vn;
function ab({
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
 opacity ${e} ${vn},
 max-width ${e} ${vn} ${n},
 margin-left ${e} ${vn} ${n},
 margin-right ${e} ${vn} ${n};
 `), $("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${vn} ${n},
 max-width ${e} ${vn},
 margin-left ${e} ${vn},
 margin-right ${e} ${vn};
 `)];
}
const ib = oe("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), lb = be({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Kr("-base-wave", ib, Ge(e, "clsPrefix"));
    const n = k(null), t = k(!1);
    let r = null;
    return hn(() => {
      r !== null && window.clearTimeout(r);
    }), {
      active: t,
      selfRef: n,
      play() {
        r !== null && (window.clearTimeout(r), t.value = !1, r = null), xn(() => {
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
}), sb = Eo && "chrome" in window;
Eo && navigator.userAgent.includes("Firefox");
const Gs = Eo && navigator.userAgent.includes("Safari") && !sb, qs = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
}, qt = {
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
      fontSizeSmall: b,
      fontSizeMedium: y,
      fontSizeLarge: C,
      heightTiny: T,
      heightSmall: E,
      heightMedium: M,
      heightLarge: L,
      clearColor: V,
      clearColorHover: p,
      clearColorPressed: D,
      placeholderColor: I,
      placeholderColorDisabled: U,
      iconColor: Y,
      iconColorDisabled: z,
      iconColorHover: S,
      iconColorPressed: A,
      fontWeight: Z
    } = e;
    return Object.assign(Object.assign({}, qs), {
      fontWeight: Z,
      countTextColorDisabled: r,
      countTextColor: t,
      heightTiny: T,
      heightSmall: E,
      heightMedium: M,
      heightLarge: L,
      fontSizeTiny: m,
      fontSizeSmall: b,
      fontSizeMedium: y,
      fontSizeLarge: C,
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
      clearColorPressed: D,
      iconColor: Y,
      iconColorDisabled: z,
      iconColorHover: S,
      iconColorPressed: A,
      suffixTextColor: n
    });
  }
};
function db(e) {
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
    fontSizeTiny: b,
    fontSizeSmall: y,
    fontSizeMedium: C,
    fontSizeLarge: T,
    heightTiny: E,
    heightSmall: M,
    heightMedium: L,
    heightLarge: V,
    actionColor: p,
    clearColor: D,
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
  return Object.assign(Object.assign({}, qs), {
    fontWeight: K,
    countTextColorDisabled: r,
    countTextColor: t,
    heightTiny: E,
    heightSmall: M,
    heightMedium: L,
    heightLarge: V,
    fontSizeTiny: b,
    fontSizeSmall: y,
    fontSizeMedium: C,
    fontSizeLarge: T,
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
    clearColor: D,
    clearColorHover: I,
    clearColorPressed: U,
    iconColor: S,
    iconColorDisabled: A,
    iconColorHover: Z,
    iconColorPressed: re,
    suffixTextColor: n
  });
}
const ri = {
  name: "Input",
  common: Sr,
  self: db
}, Ks = "n-input", cb = oe("input", `
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
  ae("round", [Vt("textarea", "border-radius: calc(var(--n-height) / 2);")]),
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
  Vt("autosize", "width: 100%;"),
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
  Vt("textarea", [N("placeholder", "white-space: nowrap;")]),
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
  Vt("disabled", [N("eye", `
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
  ["warning", "error"].map((e) => ae(`${e}-status`, [Vt("disabled", [oe("base-loading", `
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
]), ub = oe("input", [ae("disabled", [N("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function fb(e) {
  let n = 0;
  for (const t of e)
    n++;
  return n;
}
function oo(e) {
  return e === "" || e == null;
}
function hb(e) {
  const n = k(null);
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
  return ht(e, o), {
    recordCursor: t,
    restoreCursor: r
  };
}
const ul = be({
  name: "InputWordCount",
  setup(e, {
    slots: n
  }) {
    const {
      mergedValueRef: t,
      maxlengthRef: r,
      mergedClsPrefixRef: o,
      countGraphemesRef: a
    } = Qe(Ks), i = P(() => {
      const {
        value: l
      } = t;
      return l === null || Array.isArray(l) ? 0 : (a.value || fb)(l);
    });
    return () => {
      const {
        value: l
      } = r, {
        value: s
      } = t;
      return c("span", {
        class: `${o.value}-input-word-count`
      }, Et(n.default, {
        value: s === null || Array.isArray(s) ? "" : s
      }, () => [l === void 0 ? i.value : `${i.value} / ${l}`]));
    };
  }
});
var mb = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const pb = Object.assign(Object.assign({}, Zt.props), {
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
}), ur = be({
  name: "Input",
  props: pb,
  slots: Object,
  setup(e) {
    mb.NODE_ENV !== "production" && At(() => {
      e.showPasswordToggle && Pn("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Yr(e), a = Zt("Input", "-input", cb, ri, e, n);
    Gs && Kr("-input-safari", ub, n);
    const i = k(null), l = k(null), s = k(null), d = k(null), u = k(null), f = k(null), h = k(null), g = hb(h), m = k(null), {
      localeRef: b
    } = qr("Input"), y = k(e.defaultValue), C = Ge(e, "value"), T = Co(C, y), E = Io(e), {
      mergedSizeRef: M,
      mergedDisabledRef: L,
      mergedStatusRef: V
    } = E, p = k(!1), D = k(!1), I = k(!1), U = k(!1);
    let Y = null;
    const z = P(() => {
      const {
        placeholder: v,
        pair: R
      } = e;
      return R ? Array.isArray(v) ? v : v === void 0 ? ["", ""] : [v, v] : v === void 0 ? [b.value.placeholder] : [v];
    }), S = P(() => {
      const {
        value: v
      } = I, {
        value: R
      } = T, {
        value: ie
      } = z;
      return !v && (oo(R) || Array.isArray(R) && oo(R[0])) && ie[0];
    }), A = P(() => {
      const {
        value: v
      } = I, {
        value: R
      } = T, {
        value: ie
      } = z;
      return !v && ie[1] && (oo(R) || Array.isArray(R) && oo(R[1]));
    }), Z = Gt(() => e.internalForceFocus || p.value), re = Gt(() => {
      if (L.value || e.readonly || !e.clearable || !Z.value && !D.value)
        return !1;
      const {
        value: v
      } = T, {
        value: R
      } = Z;
      return e.pair ? !!(Array.isArray(v) && (v[0] || v[1])) && (D.value || R) : !!v && (D.value || R);
    }), K = P(() => {
      const {
        showPasswordOn: v
      } = e;
      if (v)
        return v;
      if (e.showPasswordToggle) return "click";
    }), me = k(!1), ve = P(() => {
      const {
        textDecoration: v
      } = e;
      return v ? Array.isArray(v) ? v.map((R) => ({
        textDecoration: R
      })) : [{
        textDecoration: v
      }] : ["", ""];
    }), de = k(void 0), De = () => {
      var v, R;
      if (e.type === "textarea") {
        const {
          autosize: ie
        } = e;
        if (ie && (de.value = (R = (v = m.value) === null || v === void 0 ? void 0 : v.$el) === null || R === void 0 ? void 0 : R.offsetWidth), !l.value || typeof ie == "boolean") return;
        const {
          paddingTop: _e,
          paddingBottom: He,
          lineHeight: Te
        } = window.getComputedStyle(l.value), Dt = Number(_e.slice(0, -2)), Wt = Number(He.slice(0, -2)), ut = Number(Te.slice(0, -2)), {
          value: sn
        } = s;
        if (!sn) return;
        if (ie.minRows) {
          const dn = Math.max(ie.minRows, 1), _n = `${Dt + Wt + ut * dn}px`;
          sn.style.minHeight = _n;
        }
        if (ie.maxRows) {
          const dn = `${Dt + Wt + ut * ie.maxRows}px`;
          sn.style.maxHeight = dn;
        }
      }
    }, ke = P(() => {
      const {
        maxlength: v
      } = e;
      return v === void 0 ? void 0 : Number(v);
    });
    an(() => {
      const {
        value: v
      } = T;
      Array.isArray(v) || fe(v);
    });
    const et = _o().proxy;
    function Ce(v, R) {
      const {
        onUpdateValue: ie,
        "onUpdate:value": _e,
        onInput: He
      } = e, {
        nTriggerFormInput: Te
      } = E;
      ie && Pe(ie, v, R), _e && Pe(_e, v, R), He && Pe(He, v, R), y.value = v, Te();
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
    function rt(v) {
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
    function zt(v) {
      const {
        onWrapperBlur: R
      } = e;
      R && Pe(R, v);
    }
    function _t() {
      I.value = !0;
    }
    function Bt(v) {
      I.value = !1, v.target === f.value ? xt(v, 1) : xt(v, 0);
    }
    function xt(v, R = 0, ie = "input") {
      const _e = v.target.value;
      if (fe(_e), v instanceof InputEvent && !v.isComposing && (I.value = !1), e.type === "textarea") {
        const {
          value: Te
        } = m;
        Te && Te.syncUnifiedContainer();
      }
      if (Y = _e, I.value) return;
      g.recordCursor();
      const He = Lt(_e);
      if (He)
        if (!e.pair)
          ie === "input" ? Ce(_e, {
            source: R
          }) : we(_e, {
            source: R
          });
        else {
          let {
            value: Te
          } = T;
          Array.isArray(Te) ? Te = [Te[0], Te[1]] : Te = ["", ""], Te[R] = _e, ie === "input" ? Ce(Te, {
            source: R
          }) : we(Te, {
            source: R
          });
        }
      et.$forceUpdate(), He || xn(g.restoreCursor);
    }
    function Lt(v) {
      const {
        countGraphemes: R,
        maxlength: ie,
        minlength: _e
      } = e;
      if (R) {
        let Te;
        if (ie !== void 0 && (Te === void 0 && (Te = R(v)), Te > Number(ie)) || _e !== void 0 && (Te === void 0 && (Te = R(v)), Te < Number(ie)))
          return !1;
      }
      const {
        allowInput: He
      } = e;
      return typeof He == "function" ? He(v) : !0;
    }
    function Oe(v) {
      he(v), v.relatedTarget === i.value && ye(), v.relatedTarget !== null && (v.relatedTarget === u.value || v.relatedTarget === f.value || v.relatedTarget === l.value) || (U.value = !1), Tt(v, "blur"), h.value = null;
    }
    function ze(v, R) {
      Ct(v), p.value = !0, U.value = !0, ot(), Tt(v, "focus"), R === 0 ? h.value = u.value : R === 1 ? h.value = f.value : R === 2 && (h.value = l.value);
    }
    function tt(v) {
      e.passivelyActivated && (zt(v), Tt(v, "blur"));
    }
    function Kt(v) {
      e.passivelyActivated && (p.value = !0, It(v), Tt(v, "focus"));
    }
    function Tt(v, R) {
      v.relatedTarget !== null && (v.relatedTarget === u.value || v.relatedTarget === f.value || v.relatedTarget === l.value || v.relatedTarget === i.value) || (R === "focus" ? (Ne(v), p.value = !0) : R === "blur" && (pe(v), p.value = !1));
    }
    function it(v, R) {
      xt(v, R, "change");
    }
    function mt(v) {
      at(v);
    }
    function O(v) {
      rt(v), ue();
    }
    function ue() {
      e.pair ? (Ce(["", ""], {
        source: "clear"
      }), we(["", ""], {
        source: "clear"
      })) : (Ce("", {
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
              top: Te,
              width: Dt,
              height: Wt
            } = _e.getBoundingClientRect(), ut = 14;
            if (He + Dt - ut < v.clientX && v.clientX < He + Dt && Te + Wt - ut < v.clientY && v.clientY < Te + Wt)
              return;
          }
        }
        v.preventDefault(), p.value || le();
      }
    }
    function ln() {
      var v;
      D.value = !0, e.type === "textarea" && ((v = m.value) === null || v === void 0 || v.handleMouseEnterWrapper());
    }
    function Nt() {
      var v;
      D.value = !1, e.type === "textarea" && ((v = m.value) === null || v === void 0 || v.handleMouseLeaveWrapper());
    }
    function qe() {
      L.value || K.value === "click" && (me.value = !me.value);
    }
    function gt(v) {
      if (L.value) return;
      v.preventDefault();
      const R = (_e) => {
        _e.preventDefault(), pt("mouseup", document, R);
      };
      if (Rt("mouseup", document, R), K.value !== "mousedown") return;
      me.value = !0;
      const ie = () => {
        me.value = !1, pt("mouseup", document, ie);
      };
      Rt("mouseup", document, ie);
    }
    function St(v) {
      e.onKeyup && Pe(e.onKeyup, v);
    }
    function Jt(v) {
      switch (e.onKeydown && Pe(e.onKeydown, v), v.key) {
        case "Escape":
          J();
          break;
        case "Enter":
          F(v);
          break;
      }
    }
    function F(v) {
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
      e.passivelyActivated && (U.value = !1, xn(() => {
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
    function Ke() {
      De();
    }
    const lt = k({
      top: "0"
    });
    function _(v) {
      var R;
      const {
        scrollTop: ie
      } = v.target;
      lt.value.top = `${-ie}px`, (R = m.value) === null || R === void 0 || R.syncUnifiedContainer();
    }
    let H = null;
    At(() => {
      const {
        autosize: v,
        type: R
      } = e;
      v && R === "textarea" ? H = ht(T, (ie) => {
        !Array.isArray(ie) && ie !== Y && fe(ie);
      }) : H == null || H();
    });
    let q = null;
    At(() => {
      e.type === "textarea" ? q = ht(T, (v) => {
        var R;
        !Array.isArray(v) && v !== Y && ((R = m.value) === null || R === void 0 || R.syncUnifiedContainer());
      }) : q == null || q();
    }), Nn(Ks, {
      mergedValueRef: T,
      maxlengthRef: ke,
      mergedClsPrefixRef: n,
      countGraphemesRef: Ge(e, "countGraphemes")
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
    }, Ze = Ja("Input", o, n), We = P(() => {
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
          caretColor: Te,
          caretColorError: Dt,
          caretColorWarning: Wt,
          textDecorationColor: ut,
          border: sn,
          borderDisabled: dn,
          borderHover: _n,
          borderFocus: wr,
          placeholderColor: Pr,
          placeholderColorDisabled: _r,
          lineHeightTextarea: x,
          colorDisabled: W,
          colorFocus: se,
          textColorDisabled: ft,
          boxShadowFocus: jt,
          iconSize: Ue,
          colorFocusWarning: Tn,
          boxShadowFocusWarning: Gn,
          borderWarning: Dn,
          borderFocusWarning: Bo,
          borderHoverWarning: Lo,
          colorFocusError: No,
          boxShadowFocusError: Wo,
          borderError: Vo,
          borderFocusError: jo,
          borderHoverError: Uo,
          clearSize: wd,
          clearColor: Pd,
          clearColorHover: _d,
          clearColorPressed: Td,
          iconColor: Dd,
          iconColorDisabled: Md,
          suffixTextColor: Od,
          countTextColor: Rd,
          countTextColorDisabled: Ed,
          iconColorHover: Id,
          iconColorPressed: Fd,
          loadingColor: kd,
          loadingColorError: Ad,
          loadingColorWarning: $d,
          fontWeight: Hd,
          [Se("padding", v)]: zd,
          [Se("fontSize", v)]: Bd,
          [Se("height", v)]: Ld
        }
      } = a.value, {
        left: Nd,
        right: Wd
      } = er(zd);
      return {
        "--n-bezier": R,
        "--n-count-text-color": Rd,
        "--n-count-text-color-disabled": Ed,
        "--n-color": ie,
        "--n-font-size": Bd,
        "--n-font-weight": Hd,
        "--n-border-radius": _e,
        "--n-height": Ld,
        "--n-padding-left": Nd,
        "--n-padding-right": Wd,
        "--n-text-color": He,
        "--n-caret-color": Te,
        "--n-text-decoration-color": ut,
        "--n-border": sn,
        "--n-border-disabled": dn,
        "--n-border-hover": _n,
        "--n-border-focus": wr,
        "--n-placeholder-color": Pr,
        "--n-placeholder-color-disabled": _r,
        "--n-icon-size": Ue,
        "--n-line-height-textarea": x,
        "--n-color-disabled": W,
        "--n-color-focus": se,
        "--n-text-color-disabled": ft,
        "--n-box-shadow-focus": jt,
        "--n-loading-color": kd,
        // form warning
        "--n-caret-color-warning": Wt,
        "--n-color-focus-warning": Tn,
        "--n-box-shadow-focus-warning": Gn,
        "--n-border-warning": Dn,
        "--n-border-focus-warning": Bo,
        "--n-border-hover-warning": Lo,
        "--n-loading-color-warning": $d,
        // form error
        "--n-caret-color-error": Dt,
        "--n-color-focus-error": No,
        "--n-box-shadow-focus-error": Wo,
        "--n-border-error": Vo,
        "--n-border-focus-error": jo,
        "--n-border-hover-error": Uo,
        "--n-loading-color-error": Ad,
        // clear-button
        "--n-clear-color": Pd,
        "--n-clear-size": wd,
        "--n-clear-color-hover": _d,
        "--n-clear-color-pressed": Td,
        "--n-icon-color": Dd,
        "--n-icon-color-hover": Id,
        "--n-icon-color-pressed": Fd,
        "--n-icon-color-disabled": Md,
        "--n-suffix-text-color": Od
      };
    }), Ae = r ? zn("input", P(() => {
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
      rtlEnabled: Ze,
      uncontrolledValue: y,
      mergedValue: T,
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
      placeholderStyle: lt,
      mergedStatus: V,
      textAreaScrollContainerWidth: de,
      // methods
      handleTextAreaScroll: _,
      handleCompositionStart: _t,
      handleCompositionEnd: Bt,
      handleInput: xt,
      handleInputBlur: Oe,
      handleInputFocus: ze,
      handleWrapperBlur: tt,
      handleWrapperFocus: Kt,
      handleMouseEnter: ln,
      handleMouseLeave: Nt,
      handleMouseDown: Ee,
      handleChange: it,
      handleClick: mt,
      handleClear: O,
      handlePasswordToggleClick: qe,
      handlePasswordToggleMousedown: gt,
      handleWrapperKeydown: Jt,
      handleWrapperKeyup: St,
      handleTextAreaMirrorResize: Ke,
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
    }, Cn(s.prefix, (d) => d && c("div", {
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
        } = this, h = {
          width: this.autosize && f && `${f}px`
        };
        return c(Do, null, c("textarea", Object.assign({}, this.inputProps, {
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
        }, this.mergedPlaceholder[0]) : null, this.autosize ? c(Br, {
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
    }, " ") : null), !this.pair && Cn(s.suffix, (d) => d || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? c("div", {
      class: `${t}-input__suffix`
    }, [Cn(s["clear-icon-placeholder"], (u) => (this.clearable || u) && c(Oa, {
      clsPrefix: t,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => u,
      icon: () => {
        var f, h;
        return (h = (f = this.$slots)["clear-icon"]) === null || h === void 0 ? void 0 : h.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? c(rb, {
      clsPrefix: t,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? c(ul, null, {
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
    }, this.passwordVisible ? Fe(s["password-visible-icon"], () => [c(Sn, {
      clsPrefix: t
    }, {
      default: () => c(Iv, null)
    })]) : Fe(s["password-invisible-icon"], () => [c(Sn, {
      clsPrefix: t
    }, {
      default: () => c(Fv, null)
    })])) : null]) : null)), this.pair ? c("span", {
      class: `${t}-input__separator`
    }, Fe(s.separator, () => [this.separator])) : null, this.pair ? c("div", {
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
    }, c("span", null, this.mergedPlaceholder[1])) : null), Cn(s.suffix, (d) => (this.clearable || d) && c("div", {
      class: `${t}-input__suffix`
    }, [this.clearable && c(Oa, {
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
}), gb = {
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
    borderColor: b,
    primaryColor: y,
    baseColor: C,
    infoColor: T,
    infoColorHover: E,
    infoColorPressed: M,
    successColor: L,
    successColorHover: V,
    successColorPressed: p,
    warningColor: D,
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
  return Object.assign(Object.assign({}, gb), {
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
    border: `1px solid ${b}`,
    borderHover: `1px solid ${g}`,
    borderPressed: `1px solid ${m}`,
    borderFocus: `1px solid ${g}`,
    borderDisabled: `1px solid ${b}`,
    rippleColor: y,
    // primary
    colorPrimary: y,
    colorHoverPrimary: g,
    colorPressedPrimary: m,
    colorFocusPrimary: g,
    colorDisabledPrimary: y,
    textColorPrimary: C,
    textColorHoverPrimary: C,
    textColorPressedPrimary: C,
    textColorFocusPrimary: C,
    textColorDisabledPrimary: C,
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
    colorInfo: T,
    colorHoverInfo: E,
    colorPressedInfo: M,
    colorFocusInfo: E,
    colorDisabledInfo: T,
    textColorInfo: C,
    textColorHoverInfo: C,
    textColorPressedInfo: C,
    textColorFocusInfo: C,
    textColorDisabledInfo: C,
    textColorTextInfo: T,
    textColorTextHoverInfo: E,
    textColorTextPressedInfo: M,
    textColorTextFocusInfo: E,
    textColorTextDisabledInfo: f,
    textColorGhostInfo: T,
    textColorGhostHoverInfo: E,
    textColorGhostPressedInfo: M,
    textColorGhostFocusInfo: E,
    textColorGhostDisabledInfo: T,
    borderInfo: `1px solid ${T}`,
    borderHoverInfo: `1px solid ${E}`,
    borderPressedInfo: `1px solid ${M}`,
    borderFocusInfo: `1px solid ${E}`,
    borderDisabledInfo: `1px solid ${T}`,
    rippleColorInfo: T,
    // success
    colorSuccess: L,
    colorHoverSuccess: V,
    colorPressedSuccess: p,
    colorFocusSuccess: V,
    colorDisabledSuccess: L,
    textColorSuccess: C,
    textColorHoverSuccess: C,
    textColorPressedSuccess: C,
    textColorFocusSuccess: C,
    textColorDisabledSuccess: C,
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
    colorWarning: D,
    colorHoverWarning: I,
    colorPressedWarning: U,
    colorFocusWarning: I,
    colorDisabledWarning: D,
    textColorWarning: C,
    textColorHoverWarning: C,
    textColorPressedWarning: C,
    textColorFocusWarning: C,
    textColorDisabledWarning: C,
    textColorTextWarning: D,
    textColorTextHoverWarning: I,
    textColorTextPressedWarning: U,
    textColorTextFocusWarning: I,
    textColorTextDisabledWarning: f,
    textColorGhostWarning: D,
    textColorGhostHoverWarning: I,
    textColorGhostPressedWarning: U,
    textColorGhostFocusWarning: I,
    textColorGhostDisabledWarning: D,
    borderWarning: `1px solid ${D}`,
    borderHoverWarning: `1px solid ${I}`,
    borderPressedWarning: `1px solid ${U}`,
    borderFocusWarning: `1px solid ${I}`,
    borderDisabledWarning: `1px solid ${D}`,
    rippleColorWarning: D,
    // error
    colorError: Y,
    colorHoverError: z,
    colorPressedError: S,
    colorFocusError: z,
    colorDisabledError: Y,
    textColorError: C,
    textColorHoverError: C,
    textColorPressedError: C,
    textColorFocusError: C,
    textColorDisabledError: C,
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
const oi = {
  name: "Button",
  common: Sr,
  self: Xs
}, Ht = {
  name: "Button",
  common: B,
  self(e) {
    const n = Xs(e);
    return n.waveOpacity = "0.8", n.colorOpacitySecondary = "0.16", n.colorOpacitySecondaryHover = "0.2", n.colorOpacitySecondaryPressed = "0.12", n;
  }
}, vb = {
  itemFontSize: "12px",
  itemHeight: "36px",
  itemWidth: "52px",
  panelActionPadding: "8px 0"
};
function Qs(e) {
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
  return Object.assign(Object.assign({}, vb), {
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
const Zs = {
  name: "TimePicker",
  common: Sr,
  peers: {
    Scrollbar: ti,
    Button: oi,
    Input: ri
  },
  self: Qs
}, Js = {
  name: "TimePicker",
  common: B,
  peers: {
    Scrollbar: $t,
    Button: Ht,
    Input: qt
  },
  self: Qs
}, bb = {
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
  return Object.assign(Object.assign({}, bb), {
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
const Cb = {
  name: "DatePicker",
  common: Sr,
  peers: {
    Input: ri,
    Button: oi,
    TimePicker: Zs,
    Scrollbar: ti
  },
  self: ed
}, xb = {
  name: "DatePicker",
  common: B,
  peers: {
    Input: qt,
    Button: Ht,
    TimePicker: Js,
    Scrollbar: $t
  },
  self(e) {
    const {
      popoverColor: n,
      hoverColor: t,
      primaryColor: r
    } = e, o = ed(e);
    return o.itemColorDisabled = ne(n, t), o.itemColorIncluded = Q(r, {
      alpha: 0.15
    }), o.itemColorHover = ne(n, t), o;
  }
}, Ho = "n-date-picker";
function On(e) {
  return ne(e, [255, 255, 255, 0.16]);
}
function ao(e) {
  return ne(e, [0, 0, 0, 0.12]);
}
const Sb = "n-button-group", yb = $([oe("button", `
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
})]), Vt("disabled", [$("&:focus", [N("state-border", {
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
})]), Vt("disabled", [$("&:focus", {
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
})]), Eo && "MozBoxSizing" in document.createElement("div").style ? $("&::moz-focus-inner", {
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
 `, [wo({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), ab()]), N("content", `
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
var wb = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Pb = Object.assign(Object.assign({}, Zt.props), {
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
}), Pt = be({
  name: "Button",
  props: Pb,
  slots: Object,
  setup(e) {
    wb.NODE_ENV !== "production" && At(() => {
      const {
        dashed: M,
        ghost: L,
        text: V,
        secondary: p,
        tertiary: D,
        quaternary: I
      } = e;
      (M || L || V) && (p || D || I) && Pn("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const n = k(null), t = k(null), r = k(!1), o = Gt(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = Qe(Sb, {}), {
      mergedSizeRef: i
    } = Io({}, {
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
      mergedRtlRef: b
    } = Yr(e), y = Zt("Button", "-button", yb, oi, e, m), C = Ja("Button", b, m), T = P(() => {
      const M = y.value, {
        common: {
          cubicBezierEaseInOut: L,
          cubicBezierEaseOut: V
        },
        self: p
      } = M, {
        rippleDuration: D,
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
        secondary: De,
        tertiary: ke,
        quaternary: et,
        strong: Ce
      } = e, we = {
        "--n-font-weight": Ce ? Y : U
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
      const Ne = A === "tertiary", rt = A === "default", he = Ne ? "default" : A;
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
          "--n-text-color-hover": Oe ? On(Oe) : p[Se("textColorTextHover", he)],
          "--n-text-color-pressed": Oe ? ao(Oe) : p[Se("textColorTextPressed", he)],
          "--n-text-color-focus": Oe ? On(Oe) : p[Se("textColorTextHover", he)],
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
          "--n-text-color-hover": Oe ? On(Oe) : p[Se("textColorGhostHover", he)],
          "--n-text-color-pressed": Oe ? ao(Oe) : p[Se("textColorGhostPressed", he)],
          "--n-text-color-focus": Oe ? On(Oe) : p[Se("textColorGhostHover", he)],
          "--n-text-color-disabled": Oe || p[Se("textColorGhostDisabled", he)]
        };
      } else if (De) {
        const Oe = rt ? p.textColor : Ne ? p.textColorTertiary : p[Se("color", he)], ze = K || Oe, tt = A !== "default" && A !== "tertiary";
        pe = {
          "--n-color": tt ? Q(ze, {
            alpha: Number(p.colorOpacitySecondary)
          }) : p.colorSecondary,
          "--n-color-hover": tt ? Q(ze, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-pressed": tt ? Q(ze, {
            alpha: Number(p.colorOpacitySecondaryPressed)
          }) : p.colorSecondaryPressed,
          "--n-color-focus": tt ? Q(ze, {
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
      } else if (ke || et) {
        const Oe = rt ? p.textColor : Ne ? p.textColorTertiary : p[Se("color", he)], ze = K || Oe;
        ke ? (pe["--n-color"] = p.colorTertiary, pe["--n-color-hover"] = p.colorTertiaryHover, pe["--n-color-pressed"] = p.colorTertiaryPressed, pe["--n-color-focus"] = p.colorSecondaryHover, pe["--n-color-disabled"] = p.colorTertiary) : (pe["--n-color"] = p.colorQuaternary, pe["--n-color-hover"] = p.colorQuaternaryHover, pe["--n-color-pressed"] = p.colorQuaternaryPressed, pe["--n-color-focus"] = p.colorQuaternaryHover, pe["--n-color-disabled"] = p.colorQuaternary), pe["--n-ripple-color"] = "#0000", pe["--n-text-color"] = ze, pe["--n-text-color-hover"] = ze, pe["--n-text-color-pressed"] = ze, pe["--n-text-color-focus"] = ze, pe["--n-text-color-disabled"] = ze;
      } else
        pe = {
          "--n-color": K || p[Se("color", he)],
          "--n-color-hover": K ? On(K) : p[Se("colorHover", he)],
          "--n-color-pressed": K ? ao(K) : p[Se("colorPressed", he)],
          "--n-color-focus": K ? On(K) : p[Se("colorFocus", he)],
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
        [Se("fontSize", z)]: ot,
        [Se("padding", z)]: at,
        [Se("paddingRound", z)]: It,
        [Se("iconSize", z)]: zt,
        [Se("borderRadius", z)]: _t,
        [Se("iconMargin", z)]: Bt,
        waveOpacity: xt
      } = p, Lt = {
        "--n-width": ve && !re ? ye : "initial",
        "--n-height": re ? "initial" : ye,
        "--n-font-size": ot,
        "--n-padding": ve || re ? "initial" : me ? It : at,
        "--n-icon-size": zt,
        "--n-icon-margin": Bt,
        "--n-border-radius": re ? "initial" : ve || me ? ye : _t
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": L,
        "--n-bezier-ease-out": V,
        "--n-ripple-duration": D,
        "--n-opacity-disabled": I,
        "--n-wave-opacity": xt
      }, we), pe), Ct), Lt);
    }), E = g ? zn("button", P(() => {
      let M = "";
      const {
        dashed: L,
        type: V,
        ghost: p,
        text: D,
        color: I,
        round: U,
        circle: Y,
        textColor: z,
        secondary: S,
        tertiary: A,
        quaternary: Z,
        strong: re
      } = e;
      L && (M += "a"), p && (M += "b"), D && (M += "c"), U && (M += "d"), Y && (M += "e"), S && (M += "f"), A && (M += "g"), Z && (M += "h"), re && (M += "i"), I && (M += `j${Bi(I)}`), z && (M += `k${Bi(z)}`);
      const {
        value: K
      } = i;
      return M += `l${K[0]}`, M += `m${V[0]}`, M;
    }), T, e) : void 0;
    return {
      selfElRef: n,
      waveElRef: t,
      mergedClsPrefix: m,
      mergedFocusable: l,
      mergedSize: i,
      showBorder: o,
      enterPressed: r,
      rtlEnabled: C,
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
        const L = On(M);
        return {
          "--n-border-color": M,
          "--n-border-color-hover": L,
          "--n-border-color-pressed": ao(M),
          "--n-border-color-focus": L,
          "--n-border-color-disabled": M
        };
      }),
      cssVars: g ? void 0 : T,
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
    const r = Cn(this.$slots.default, (o) => o && c("span", {
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
    }, this.iconPlacement === "right" && r, c(zv, {
      width: !0
    }, {
      default: () => Cn(this.$slots.icon, (o) => (this.loading || this.renderIcon || o) && c("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Nh(this.$slots.default) ? "0" : ""
        }
      }, c(ei, null, {
        default: () => this.loading ? c(Ls, {
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
    }), this.iconPlacement === "left" && r, this.text ? null : c(lb, {
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
}), yn = Pt, Ln = 40, _b = {
  date: sc,
  month: jr,
  year: Vl,
  quarter: Wl
};
function Tb(e) {
  return (n, t) => {
    const r = (e + 1) % 7;
    return Nl(n, t, {
      weekStartsOn: r
    });
  };
}
function Mt(e, n, t, r = 0) {
  return (t === "week" ? Tb(r) : _b[t])(e, n);
}
function oa(e, n, t, r, o, a) {
  return o === "date" ? Db(e, n, t, r) : Mb(e, n, t, r, a);
}
function Db(e, n, t, r) {
  let o = !1, a = !1, i = !1;
  Array.isArray(t) && (t[0] < e && e < t[1] && (o = !0), Mt(t[0], e, "date") && (a = !0), Mt(t[1], e, "date") && (i = !0));
  const l = t !== null && (Array.isArray(t) ? Mt(t[0], e, "date") || Mt(t[1], e, "date") : Mt(t, e, "date"));
  return {
    type: "date",
    dateObject: {
      date: Ut(e),
      month: je(e),
      year: Xe(e)
    },
    inCurrentMonth: jr(e, n),
    isCurrentDate: Mt(r, e, "date"),
    inSpan: o,
    inSelectedWeek: !1,
    startOfSpan: a,
    endOfSpan: i,
    selected: l,
    ts: j(e)
  };
}
function td(e, n, t) {
  const r = new Date(2e3, e, 1).getTime();
  return Le(r, n, {
    locale: t
  });
}
function nd(e, n, t) {
  const r = new Date(e, 1, 1).getTime();
  return Le(r, n, {
    locale: t
  });
}
function rd(e, n, t) {
  const r = new Date(2e3, e * 3 - 2, 1).getTime();
  return Le(r, n, {
    locale: t
  });
}
function Mb(e, n, t, r, o) {
  let a = !1, i = !1, l = !1;
  Array.isArray(t) && (t[0] < e && e < t[1] && (a = !0), Mt(t[0], e, "week", o) && (i = !0), Mt(t[1], e, "week", o) && (l = !0));
  const s = t !== null && (Array.isArray(t) ? Mt(t[0], e, "week", o) || Mt(t[1], e, "week", o) : Mt(t, e, "week", o));
  return {
    type: "date",
    dateObject: {
      date: Ut(e),
      month: je(e),
      year: Xe(e)
    },
    inCurrentMonth: jr(e, n),
    isCurrentDate: Mt(r, e, "date"),
    inSpan: a,
    startOfSpan: i,
    endOfSpan: l,
    selected: !1,
    inSelectedWeek: s,
    ts: j(e)
  };
}
function Ob(e, n, t, {
  monthFormat: r
}) {
  return {
    type: "month",
    monthFormat: r,
    dateObject: {
      month: je(e),
      year: Xe(e)
    },
    isCurrent: jr(t, e),
    selected: n !== null && Mt(n, e, "month"),
    ts: j(e)
  };
}
function Rb(e, n, t, {
  yearFormat: r
}) {
  return {
    type: "year",
    yearFormat: r,
    dateObject: {
      year: Xe(e)
    },
    isCurrent: Vl(t, e),
    selected: n !== null && Mt(n, e, "year"),
    ts: j(e)
  };
}
function Eb(e, n, t, {
  quarterFormat: r
}) {
  return {
    type: "quarter",
    quarterFormat: r,
    dateObject: {
      quarter: cc(e),
      year: Xe(e)
    },
    isCurrent: Wl(t, e),
    selected: n !== null && Mt(n, e, "quarter"),
    ts: j(e)
  };
}
function Ra(e, n, t, r, o = !1, a = !1) {
  const i = a ? "week" : "date", l = je(e);
  let s = j(cn(e)), d = j(Jn(s, -1));
  const u = [];
  let f = !o;
  for (; nu(d) !== r || f; )
    u.unshift(oa(d, e, n, t, i, r)), d = j(Jn(d, -1)), f = !1;
  for (; je(s) === l; )
    u.push(oa(s, e, n, t, i, r)), s = j(Jn(s, 1));
  const h = o ? u.length <= 28 ? 28 : u.length <= 35 ? 35 : 42 : 42;
  for (; u.length < h; )
    u.push(oa(s, e, n, t, i, r)), s = j(Jn(s, 1));
  return u;
}
function Ea(e, n, t, r) {
  const o = [], a = Vr(e);
  for (let i = 0; i < 12; i++)
    o.push(Ob(j(vt(a, i)), n, t, r));
  return o;
}
function Ia(e, n, t, r) {
  const o = [], a = Vr(e);
  for (let i = 0; i < 4; i++)
    o.push(Eb(j(lc(a, i)), n, t, r));
  return o;
}
function Fa(e, n, t, r) {
  const o = r.value, a = [], i = Vr(ga(/* @__PURE__ */ new Date(), o[0]));
  for (let l = 0; l < o[1] - o[0]; l++)
    a.push(Rb(j(ha(i, l)), e, n, t));
  return a;
}
function kt(e, n, t, r) {
  const o = Ju(e, n, t, r);
  return Yt(o) ? Le(o, n, r) === e ? o : new Date(Number.NaN) : o;
}
function uo(e) {
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
function Qn(e, n) {
  return Array.isArray(e) ? e[n === "start" ? 0 : 1] : null;
}
const Ib = "HH:mm:ss", od = {
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
    value: Ib
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
    dateLocaleRef: n,
    timePickerSizeRef: t,
    timePickerPropsRef: r,
    localeRef: o,
    mergedClsPrefixRef: a,
    mergedThemeRef: i
  } = Qe(Ho), l = P(() => ({
    locale: n.value.locale
  })), s = k(null), d = ql();
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
  function b() {
    h(null, !0), g(!0), u();
  }
  function y() {
    m();
  }
  function C() {
    (e.active || e.panel) && xn(() => {
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
  function T(z) {
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
  function D() {
    L && (h(M, !1), L = !1);
  }
  function I(z) {
    return typeof z == "function" ? z() : z;
  }
  const U = k(!1);
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
    handleClearClick: b,
    handleFocusDetectorFocus: y,
    disableTransitionOneTick: C,
    handlePanelKeyDown: T,
    handlePanelFocus: E,
    cachePendingValue: V,
    clearPendingValue: p,
    restorePendingValue: D,
    getShortcutValue: I,
    handleShortcutMouseleave: D,
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
function ii(e, n) {
  var t;
  const r = ad(e), {
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
    yearFormatRef: b,
    monthFormatRef: y,
    quarterFormatRef: C,
    yearRangeRef: T
  } = Qe(Ho), E = {
    isValueInvalid: o,
    isDateDisabled: a,
    isDateInvalid: i,
    isTimeInvalid: l,
    isDateTimeInvalid: s,
    isHourDisabled: d,
    isMinuteDisabled: u,
    isSecondDisabled: f
  }, M = P(() => e.dateFormat || h.value.dateFormat), L = P(() => e.calendarDayFormat || h.value.dayFormat), V = k(e.value === null || Array.isArray(e.value) ? "" : Le(e.value, M.value)), p = k(e.value === null || Array.isArray(e.value) ? (t = e.defaultCalendarStartTime) !== null && t !== void 0 ? t : Date.now() : e.value), D = k(null), I = k(null), U = k(null), Y = k(Date.now()), z = P(() => {
    var O;
    return Ra(p.value, e.value, Y.value, (O = g.value) !== null && O !== void 0 ? O : h.value.firstDayOfWeek, !1, n === "week");
  }), S = P(() => {
    const {
      value: O
    } = e;
    return Ea(p.value, Array.isArray(O) ? null : O, Y.value, {
      monthFormat: y.value
    });
  }), A = P(() => {
    const {
      value: O
    } = e;
    return Fa(Array.isArray(O) ? null : O, Y.value, {
      yearFormat: b.value
    }, T);
  }), Z = P(() => {
    const {
      value: O
    } = e;
    return Ia(p.value, Array.isArray(O) ? null : O, Y.value, {
      quarterFormat: C.value
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
  ht(p, (O, ue) => {
    (n === "date" || n === "datetime") && (jr(O, ue) || r.disableTransitionOneTick());
  }), ht(P(() => e.value), (O) => {
    O !== null && !Array.isArray(O) ? (V.value = Le(O, M.value, r.dateFnsOptions.value), p.value = O) : V.value = "";
  });
  function de(O) {
    var ue;
    if (n === "datetime") return j(Na(O));
    if (n === "month") return j(cn(O));
    if (n === "year") return j(Vr(O));
    if (n === "quarter") return j($r(O));
    if (n === "week") {
      const Ee = (((ue = g.value) !== null && ue !== void 0 ? ue : h.value.firstDayOfWeek) + 1) % 7;
      return j(Qt(O, {
        weekStartsOn: Ee
      }));
    }
    return j(ar(O));
  }
  function De(O, ue) {
    const {
      isDateDisabled: {
        value: Ee
      }
    } = E;
    return Ee ? Ee(O, ue) : !1;
  }
  function ke(O) {
    const ue = kt(O, M.value, /* @__PURE__ */ new Date(), r.dateFnsOptions.value);
    if (Yt(ue)) {
      if (e.value === null)
        r.doUpdateValue(j(de(Date.now())), e.panel);
      else if (!Array.isArray(e.value)) {
        const Ee = bt(e.value, {
          year: Xe(ue),
          month: je(ue),
          date: Ut(ue)
        });
        r.doUpdateValue(j(de(j(Ee))), e.panel);
      }
    } else
      V.value = O;
  }
  function et() {
    const O = kt(V.value, M.value, /* @__PURE__ */ new Date(), r.dateFnsOptions.value);
    if (Yt(O)) {
      if (e.value === null)
        r.doUpdateValue(j(de(Date.now())), !1);
      else if (!Array.isArray(e.value)) {
        const ue = bt(e.value, {
          year: Xe(O),
          month: je(O),
          date: Ut(O)
        });
        r.doUpdateValue(j(de(j(ue))), !1);
      }
    } else
      ot();
  }
  function Ce() {
    r.doUpdateValue(null, !0), V.value = "", r.doClose(!0), r.handleClearClick();
  }
  function we() {
    r.doUpdateValue(j(de(Date.now())), !0);
    const O = Date.now();
    p.value = O, r.doClose(!0), e.panel && (n === "month" || n === "quarter" || n === "year") && (r.disableTransitionOneTick(), it(O));
  }
  const pe = k(null);
  function Ne(O) {
    O.type === "date" && n === "week" && (pe.value = de(j(O.ts)));
  }
  function rt(O) {
    return O.type === "date" && n === "week" ? de(j(O.ts)) === pe.value : !1;
  }
  function he(O) {
    if (De(O.ts, O.type === "date" ? {
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
      const Ee = uo(e.defaultTime);
      Ee && (ue = j(bt(ue, Ee)));
    }
    switch (ue = j(O.type === "quarter" && O.dateObject.quarter ? nf(ga(ue, O.dateObject.year), O.dateObject.quarter) : bt(ue, O.dateObject)), r.doUpdateValue(de(ue), e.panel || n === "date" || n === "week" || n === "year"), n) {
      case "date":
      case "week":
        r.doClose();
        break;
      case "year":
        e.panel && r.disableTransitionOneTick(), r.doClose();
        break;
      case "month":
        r.disableTransitionOneTick(), it(ue);
        break;
      case "quarter":
        r.disableTransitionOneTick(), it(ue);
        break;
    }
  }
  function Ct(O, ue) {
    let Ee;
    e.value !== null && !Array.isArray(e.value) ? Ee = e.value : Ee = Date.now(), Ee = j(O.type === "month" ? Wa(Ee, O.dateObject.month) : ga(Ee, O.dateObject.year)), ue(Ee), it(Ee);
  }
  function ye(O) {
    p.value = O;
  }
  function ot(O) {
    if (e.value === null || Array.isArray(e.value)) {
      V.value = "";
      return;
    }
    O === void 0 && (O = e.value), V.value = Le(O, M.value, r.dateFnsOptions.value);
  }
  function at() {
    E.isDateInvalid.value || E.isTimeInvalid.value || (r.doConfirm(), It());
  }
  function It() {
    e.active && r.doClose();
  }
  function zt() {
    var O;
    p.value = j(ha(p.value, 1)), (O = e.onNextYear) === null || O === void 0 || O.call(e);
  }
  function _t() {
    var O;
    p.value = j(ha(p.value, -1)), (O = e.onPrevYear) === null || O === void 0 || O.call(e);
  }
  function Bt() {
    var O;
    p.value = j(vt(p.value, 1)), (O = e.onNextMonth) === null || O === void 0 || O.call(e);
  }
  function xt() {
    var O;
    p.value = j(vt(p.value, -1)), (O = e.onPrevMonth) === null || O === void 0 || O.call(e);
  }
  function Lt() {
    const {
      value: O
    } = D;
    return (O == null ? void 0 : O.listElRef) || null;
  }
  function Oe() {
    const {
      value: O
    } = D;
    return (O == null ? void 0 : O.itemsElRef) || null;
  }
  function ze() {
    var O;
    (O = I.value) === null || O === void 0 || O.sync();
  }
  function tt(O) {
    O !== null && r.doUpdateValue(O, e.panel);
  }
  function Kt(O) {
    r.cachePendingValue();
    const ue = r.getShortcutValue(O);
    typeof ue == "number" && r.doUpdateValue(ue, !1);
  }
  function Tt(O) {
    const ue = r.getShortcutValue(O);
    typeof ue == "number" && (r.doUpdateValue(ue, e.panel), r.clearPendingValue(), at());
  }
  function it(O) {
    const {
      value: ue
    } = e;
    if (U.value) {
      const Ee = je(O === void 0 ? ue === null ? Date.now() : ue : O);
      U.value.scrollTo({
        top: Ee * Ln
      });
    }
    if (D.value) {
      const Ee = Xe(O === void 0 ? ue === null ? Date.now() : ue : O) - T.value[0];
      D.value.scrollTo({
        top: Ee * Ln
      });
    }
  }
  const mt = {
    monthScrollbarRef: U,
    yearScrollbarRef: I,
    yearVlRef: D
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
    mergedIsDateDisabled: De,
    nextYear: zt,
    prevYear: _t,
    nextMonth: Bt,
    prevMonth: xt,
    handleNowClick: we,
    handleConfirmClick: at,
    handleSingleShortcutMouseenter: Kt,
    handleSingleShortcutClick: Tt
  }, E), r), mt), {
    // datetime only
    handleDateClick: he,
    handleDateInputBlur: et,
    handleDateInput: ke,
    handleDateMouseEnter: Ne,
    isWeekHovered: rt,
    handleTimePickerChange: tt,
    clearSelectedDateTime: Ce,
    virtualListContainer: Lt,
    virtualListContent: Oe,
    handleVirtualListScroll: ze,
    timePickerSize: r.timePickerSize,
    dateInputValue: V,
    datePickerSlots: m,
    handleQuickMonthClick: Ct,
    justifyColumnsScrollState: it,
    calendarValue: p,
    onUpdateCalendarValue: ye
  });
}
const id = be({
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
    const n = ii(e, e.type), {
      dateLocaleRef: t
    } = qr("DatePicker"), r = (i) => {
      switch (i.type) {
        case "year":
          return nd(i.dateObject.year, i.yearFormat, t.value.locale);
        case "month":
          return td(i.dateObject.month, i.monthFormat, t.value.locale);
        case "quarter":
          return rd(i.dateObject.quarter, i.quarterFormat, t.value.locale);
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
    return an(() => {
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
    }, c(Xt, {
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
      default: () => c(ya, {
        ref: "yearVlRef",
        items: this.yearArray,
        itemSize: Ln,
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
      theme: n.peers.Scrollbar,
      themeOverrides: n.peerOverrides.Scrollbar
    }, {
      default: () => [(a === "month" ? this.monthArray : this.quarterArray).map((l, s) => o(l, s, e)), c("div", {
        class: `${e}-date-panel-${a}-calendar__padding`
      })]
    })) : null), Cn(this.datePickerSlots.footer, (l) => l ? c("div", {
      class: `${e}-date-panel-footer`
    }, l) : null), r != null && r.length || t ? c("div", {
      class: `${e}-date-panel-actions`
    }, c("div", {
      class: `${e}-date-panel-actions__prefix`
    }, t && Object.keys(t).map((l) => {
      const s = t[l];
      return Array.isArray(s) ? null : c(yn, {
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
    }, r != null && r.includes("clear") ? Et(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(Pt, {
      theme: n.peers.Button,
      themeOverrides: n.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    })]) : null, r != null && r.includes("now") ? Et(this.datePickerSlots.now, {
      onNow: this.handleNowClick,
      text: this.locale.now
    }, () => [c(Pt, {
      theme: n.peers.Button,
      themeOverrides: n.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    })]) : null, r != null && r.includes("confirm") ? Et(this.datePickerSlots.confirm, {
      onConfirm: this.handleConfirmClick,
      disabled: this.isDateInvalid,
      text: this.locale.confirm
    }, () => [c(Pt, {
      theme: n.peers.Button,
      themeOverrides: n.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(jn, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), fr = be({
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
    const e = k(null), n = k(null), t = k(!1);
    function r(a) {
      var i;
      t.value && !(!((i = e.value) === null || i === void 0) && i.contains(Mo(a))) && (t.value = !1);
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
    }, c(ja, null, {
      default: () => [c(Ua, null, {
        default: () => c("div", {
          class: [`${n}-date-panel-month__text`, this.show && `${n}-date-panel-month__text--active`],
          onClick: this.handleHeaderClick
        }, this.monthBeforeYear ? [this.calendarMonth, this.monthYearSeparator, this.calendarYear] : [this.calendarYear, this.monthYearSeparator, this.calendarMonth])
      }), c(Ya, {
        show: this.show,
        teleportDisabled: !0
      }, {
        default: () => c(Hn, {
          name: "fade-in-scale-up-transition",
          appear: !0
        }, {
          default: () => this.show ? Wr(c(id, {
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
var Fb = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const kb = be({
  name: "DatePanel",
  props: Object.assign(Object.assign({}, ai), {
    type: {
      type: String,
      required: !0
    }
  }),
  setup(e) {
    return Fb.NODE_ENV !== "production" && At(() => {
      var n;
      !((n = e.actions) === null || n === void 0) && n.includes("confirm") && Pn("date-picker", "The `confirm` action is not supported for n-date-picker of `date` type");
    }), ii(e, e.type);
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
    }, Fe(l["prev-year"], () => [c(sr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, Fe(l["prev-month"], () => [c(lr, null)])), c(fr, {
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
    }, Fe(l["next-month"], () => [c(cr, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, Fe(l["next-year"], () => [c(dr, null)]))), c("div", {
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
      return Array.isArray(u) ? null : c(yn, {
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Et(this.$slots.clear, {
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
    })]) : null)) : null, c(jn, {
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
function si(e, n) {
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
    isStartValueInvalidRef: b,
    isEndValueInvalidRef: y,
    isRangeInvalidRef: C,
    localeRef: T,
    rangesRef: E,
    closeOnSelectRef: M,
    updateValueOnCloseRef: L,
    firstDayOfWeekRef: V,
    datePickerSlots: p,
    monthFormatRef: D,
    yearFormatRef: I,
    quarterFormatRef: U,
    yearRangeRef: Y
  } = Qe(Ho), z = {
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
    isStartValueInvalid: b,
    isEndValueInvalid: y,
    isRangeInvalid: C
  }, S = ad(e), A = k(null), Z = k(null), re = k(null), K = k(null), me = k(null), ve = k(null), de = k(null), De = k(null), {
    value: ke
  } = e, et = (t = e.defaultCalendarStartTime) !== null && t !== void 0 ? t : Array.isArray(ke) && typeof ke[0] == "number" ? ke[0] : Date.now(), Ce = k(et), we = k((r = e.defaultCalendarEndTime) !== null && r !== void 0 ? r : Array.isArray(ke) && typeof ke[1] == "number" ? ke[1] : j(vt(et, 1)));
  qe(!0);
  const pe = k(Date.now()), Ne = k(!1), rt = k(0), he = P(() => e.dateFormat || T.value.dateFormat), Ct = P(() => e.calendarDayFormat || T.value.dayFormat), ye = k(Array.isArray(ke) ? Le(ke[0], he.value, S.dateFnsOptions.value) : ""), ot = k(Array.isArray(ke) ? Le(ke[1], he.value, S.dateFnsOptions.value) : ""), at = P(() => Ne.value ? "end" : "start"), It = P(() => {
    var x;
    return Ra(Ce.value, e.value, pe.value, (x = V.value) !== null && x !== void 0 ? x : T.value.firstDayOfWeek);
  }), zt = P(() => {
    var x;
    return Ra(we.value, e.value, pe.value, (x = V.value) !== null && x !== void 0 ? x : T.value.firstDayOfWeek);
  }), _t = P(() => It.value.slice(0, 7).map((x) => {
    const {
      ts: W
    } = x;
    return Le(W, Ct.value, S.dateFnsOptions.value);
  })), Bt = P(() => Le(Ce.value, e.calendarHeaderMonthFormat || T.value.monthFormat, S.dateFnsOptions.value)), xt = P(() => Le(we.value, e.calendarHeaderMonthFormat || T.value.monthFormat, S.dateFnsOptions.value)), Lt = P(() => Le(Ce.value, e.calendarHeaderYearFormat || T.value.yearFormat, S.dateFnsOptions.value)), Oe = P(() => Le(we.value, e.calendarHeaderYearFormat || T.value.yearFormat, S.dateFnsOptions.value)), ze = P(() => {
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
  }), Tt = P(() => Fa(Qn(e.value, "start"), pe.value, {
    yearFormat: I.value
  }, Y)), it = P(() => Fa(Qn(e.value, "end"), pe.value, {
    yearFormat: I.value
  }, Y)), mt = P(() => {
    const x = Qn(e.value, "start");
    return Ia(x ?? Date.now(), x, pe.value, {
      quarterFormat: U.value
    });
  }), O = P(() => {
    const x = Qn(e.value, "end");
    return Ia(x ?? Date.now(), x, pe.value, {
      quarterFormat: U.value
    });
  }), ue = P(() => {
    const x = Qn(e.value, "start");
    return Ea(x ?? Date.now(), x, pe.value, {
      monthFormat: D.value
    });
  }), Ee = P(() => {
    const x = Qn(e.value, "end");
    return Ea(x ?? Date.now(), x, pe.value, {
      monthFormat: D.value
    });
  }), ln = P(() => {
    var x;
    return (x = e.calendarHeaderMonthBeforeYear) !== null && x !== void 0 ? x : T.value.monthBeforeYear;
  });
  ht(P(() => e.value), (x) => {
    if (x !== null && Array.isArray(x)) {
      const [W, se] = x;
      ye.value = Le(W, he.value, S.dateFnsOptions.value), ot.value = Le(se, he.value, S.dateFnsOptions.value), Ne.value || fe(x);
    } else
      ye.value = "", ot.value = "";
  });
  function Nt(x, W) {
    (n === "daterange" || n === "datetimerange") && (Xe(x) !== Xe(W) || je(x) !== je(W)) && S.disableTransitionOneTick();
  }
  ht(Ce, Nt), ht(we, Nt);
  function qe(x) {
    const W = cn(Ce.value), se = cn(we.value);
    (e.bindCalendarMonths || W >= se) && (x ? we.value = j(vt(W, 1)) : Ce.value = j(vt(se, -1)));
  }
  function gt() {
    Ce.value = j(vt(Ce.value, 12)), qe(!0);
  }
  function St() {
    Ce.value = j(vt(Ce.value, -12)), qe(!0);
  }
  function Jt() {
    Ce.value = j(vt(Ce.value, 1)), qe(!0);
  }
  function F() {
    Ce.value = j(vt(Ce.value, -1)), qe(!0);
  }
  function J() {
    we.value = j(vt(we.value, 12)), qe(!1);
  }
  function le() {
    we.value = j(vt(we.value, -12)), qe(!1);
  }
  function Me() {
    we.value = j(vt(we.value, 1)), qe(!1);
  }
  function Ie() {
    we.value = j(vt(we.value, -1)), qe(!1);
  }
  function w(x) {
    Ce.value = x, qe(!0);
  }
  function G(x) {
    we.value = x, qe(!1);
  }
  function te(x) {
    const W = o.value;
    if (!W) return !1;
    if (!Array.isArray(e.value) || at.value === "start")
      return W(x, "start", null);
    {
      const {
        value: se
      } = rt;
      return x < rt.value ? W(x, "start", [se, se]) : W(x, "end", [se, se]);
    }
  }
  function fe(x) {
    if (x === null) return;
    const [W, se] = x;
    Ce.value = W, cn(se) <= cn(W) ? we.value = j(cn(vt(W, 1))) : we.value = j(cn(se));
  }
  function Ke(x) {
    if (!Ne.value)
      Ne.value = !0, rt.value = x.ts, Ze(x.ts, x.ts, "done");
    else {
      Ne.value = !1;
      const {
        value: W
      } = e;
      e.panel && Array.isArray(W) ? Ze(W[0], W[1], "done") : M.value && n === "daterange" && (L.value ? H() : _());
    }
  }
  function lt(x) {
    if (Ne.value) {
      if (te(x.ts)) return;
      x.ts >= rt.value ? Ze(rt.value, x.ts, "wipPreview") : Ze(x.ts, rt.value, "wipPreview");
    }
  }
  function _() {
    C.value || (S.doConfirm(), H());
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
  function Ze(x, W, se) {
    if (typeof x != "number" && (x = j(x)), se !== "shortcutPreview") {
      let ft, jt;
      if (n === "datetimerange") {
        const {
          defaultTime: Ue
        } = e;
        Array.isArray(Ue) ? (ft = uo(Ue[0]), jt = uo(Ue[1])) : (ft = uo(Ue), jt = ft);
      }
      ft && (x = j(bt(x, ft))), jt && (W = j(bt(W, jt)));
    }
    S.doUpdateValue([x, W], e.panel && se === "done");
  }
  function We(x) {
    return j(n === "datetimerange" ? Na(x) : n === "monthrange" ? cn(x) : ar(x));
  }
  function Ae(x) {
    const W = kt(x, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value);
    if (Yt(W))
      if (e.value) {
        if (Array.isArray(e.value)) {
          const se = bt(e.value[0], {
            year: Xe(W),
            month: je(W),
            date: Ut(W)
          });
          q(We(j(se)));
        }
      } else {
        const se = bt(/* @__PURE__ */ new Date(), {
          year: Xe(W),
          month: je(W),
          date: Ut(W)
        });
        q(We(j(se)));
      }
    else
      ye.value = x;
  }
  function v(x) {
    const W = kt(x, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value);
    if (Yt(W)) {
      if (e.value === null) {
        const se = bt(/* @__PURE__ */ new Date(), {
          year: Xe(W),
          month: je(W),
          date: Ut(W)
        });
        xe(We(j(se)));
      } else if (Array.isArray(e.value)) {
        const se = bt(e.value[1], {
          year: Xe(W),
          month: je(W),
          date: Ut(W)
        });
        xe(We(j(se)));
      }
    } else
      ot.value = x;
  }
  function R() {
    const x = kt(ye.value, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value), {
      value: W
    } = e;
    if (Yt(x)) {
      if (W === null) {
        const se = bt(/* @__PURE__ */ new Date(), {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        q(We(j(se)));
      } else if (Array.isArray(W)) {
        const se = bt(W[0], {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        q(We(j(se)));
      }
    } else
      _e();
  }
  function ie() {
    const x = kt(ot.value, he.value, /* @__PURE__ */ new Date(), S.dateFnsOptions.value), {
      value: W
    } = e;
    if (Yt(x)) {
      if (W === null) {
        const se = bt(/* @__PURE__ */ new Date(), {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
        });
        xe(We(j(se)));
      } else if (Array.isArray(W)) {
        const se = bt(W[1], {
          year: Xe(x),
          month: je(x),
          date: Ut(x)
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
      ye.value = "", ot.value = "";
      return;
    }
    x === void 0 && (x = W), ye.value = Le(x[0], he.value, S.dateFnsOptions.value), ot.value = Le(x[1], he.value, S.dateFnsOptions.value);
  }
  function He(x) {
    x !== null && q(x);
  }
  function Te(x) {
    x !== null && xe(x);
  }
  function Dt(x) {
    S.cachePendingValue();
    const W = S.getShortcutValue(x);
    Array.isArray(W) && Ze(W[0], W[1], "shortcutPreview");
  }
  function Wt(x) {
    const W = S.getShortcutValue(x);
    Array.isArray(W) && (Ze(W[0], W[1], "done"), S.clearPendingValue(), _());
  }
  function ut(x, W) {
    const se = x === void 0 ? e.value : x;
    if (x === void 0 || W === "start") {
      if (de.value) {
        const ft = Array.isArray(se) ? je(se[0]) : je(Date.now());
        de.value.scrollTo({
          debounce: !1,
          index: ft,
          elSize: Ln
        });
      }
      if (me.value) {
        const ft = (Array.isArray(se) ? Xe(se[0]) : Xe(Date.now())) - Y.value[0];
        me.value.scrollTo({
          index: ft,
          debounce: !1
        });
      }
    }
    if (x === void 0 || W === "end") {
      if (De.value) {
        const ft = Array.isArray(se) ? je(se[1]) : je(Date.now());
        De.value.scrollTo({
          debounce: !1,
          index: ft,
          elSize: Ln
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
  function sn(x, W) {
    const {
      value: se
    } = e, ft = !Array.isArray(se), jt = x.type === "year" && n !== "yearrange" ? ft ? bt(x.ts, {
      month: je(n === "quarterrange" ? $r(/* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date())
    }).valueOf() : bt(x.ts, {
      month: je(n === "quarterrange" ? $r(se[W === "start" ? 0 : 1]) : se[W === "start" ? 0 : 1])
    }).valueOf() : x.ts;
    if (ft) {
      const Gn = We(jt), Dn = [Gn, Gn];
      S.doUpdateValue(Dn, e.panel), ut(Dn, "start"), ut(Dn, "end"), S.disableTransitionOneTick();
      return;
    }
    const Ue = [se[0], se[1]];
    let Tn = !1;
    switch (W === "start" ? (Ue[0] = We(jt), Ue[0] > Ue[1] && (Ue[1] = Ue[0], Tn = !0)) : (Ue[1] = We(jt), Ue[0] > Ue[1] && (Ue[0] = Ue[1], Tn = !0)), S.doUpdateValue(Ue, e.panel), n) {
      case "monthrange":
      case "quarterrange":
        S.disableTransitionOneTick(), Tn ? (ut(Ue, "start"), ut(Ue, "end")) : ut(Ue, W);
        break;
      case "yearrange":
        S.disableTransitionOneTick(), ut(Ue, "start"), ut(Ue, "end");
    }
  }
  function dn() {
    var x;
    (x = re.value) === null || x === void 0 || x.sync();
  }
  function _n() {
    var x;
    (x = K.value) === null || x === void 0 || x.sync();
  }
  function wr(x) {
    var W, se;
    return x === "start" ? ((W = me.value) === null || W === void 0 ? void 0 : W.listElRef) || null : ((se = ve.value) === null || se === void 0 ? void 0 : se.listElRef) || null;
  }
  function Pr(x) {
    var W, se;
    return x === "start" ? ((W = me.value) === null || W === void 0 ? void 0 : W.itemsElRef) || null : ((se = ve.value) === null || se === void 0 ? void 0 : se.itemsElRef) || null;
  }
  const _r = {
    startYearVlRef: me,
    endYearVlRef: ve,
    startMonthScrollbarRef: de,
    endMonthScrollbarRef: De,
    startYearScrollbarRef: re,
    endYearScrollbarRef: K
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    startDatesElRef: A,
    endDatesElRef: Z,
    handleDateClick: Ke,
    handleColItemClick: sn,
    handleDateMouseEnter: lt,
    handleConfirmClick: _,
    startCalendarPrevYear: St,
    startCalendarPrevMonth: F,
    startCalendarNextYear: gt,
    startCalendarNextMonth: Jt,
    endCalendarPrevYear: le,
    endCalendarPrevMonth: Ie,
    endCalendarNextMonth: Me,
    endCalendarNextYear: J,
    mergedIsDateDisabled: te,
    changeStartEndTime: Ze,
    ranges: E,
    calendarMonthBeforeYear: ln,
    startCalendarMonth: Bt,
    startCalendarYear: Lt,
    endCalendarMonth: xt,
    endCalendarYear: Oe,
    weekdays: _t,
    startDateArray: It,
    endDateArray: zt,
    startYearArray: Tt,
    startMonthArray: ue,
    startQuarterArray: mt,
    endYearArray: it,
    endMonthArray: Ee,
    endQuarterArray: O,
    isSelecting: Ne,
    handleRangeShortcutMouseenter: Dt,
    handleRangeShortcutClick: Wt
  }, S), z), _r), {
    // datetimerangeonly
    startDateDisplayString: ye,
    endDateInput: ot,
    timePickerSize: S.timePickerSize,
    startTimeValue: ze,
    endTimeValue: tt,
    datePickerSlots: p,
    shortcuts: Kt,
    startCalendarDateTime: Ce,
    endCalendarDateTime: we,
    justifyColumnsScrollState: ut,
    handleFocusDetectorFocus: S.handleFocusDetectorFocus,
    handleStartTimePickerChange: He,
    handleEndTimePickerChange: Te,
    handleStartDateInput: Ae,
    handleStartDateInputBlur: R,
    handleEndDateInput: v,
    handleEndDateInputBlur: ie,
    handleStartYearVlScroll: dn,
    handleEndYearVlScroll: _n,
    virtualListContainer: wr,
    virtualListContent: Pr,
    onUpdateStartCalendarValue: w,
    onUpdateEndCalendarValue: G
  });
}
var Ab = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const $b = be({
  name: "DateRangePanel",
  props: li,
  setup(e) {
    return Ab.NODE_ENV !== "production" && At(() => {
      var n;
      !((n = e.actions) === null || n === void 0) && n.includes("now") && Pn("date-picker", "The `now` action is not supported for n-date-picker of `daterange` type");
    }), si(e, "daterange");
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
    }, Fe(l["prev-year"], () => [c(sr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, Fe(l["prev-month"], () => [c(lr, null)])), c(fr, {
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
    }, Fe(l["next-month"], () => [c(cr, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, Fe(l["next-year"], () => [c(dr, null)]))), c("div", {
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
    }, Fe(l["prev-year"], () => [c(sr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, Fe(l["prev-month"], () => [c(lr, null)])), c(fr, {
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
    }, Fe(l["next-month"], () => [c(cr, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, Fe(l["next-year"], () => [c(dr, null)]))), c("div", {
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
      return Array.isArray(d) || typeof d == "function" ? c(yn, {
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Et(l.clear, {
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
    })]) : null)) : null, c(jn, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
function fl(e, n, t) {
  const r = $l(), o = Bb(e, t.timeZone, t.locale ?? r.locale);
  return "formatToParts" in o ? Hb(o, n) : zb(o, n);
}
function Hb(e, n) {
  const t = e.formatToParts(n);
  for (let r = t.length - 1; r >= 0; --r)
    if (t[r].type === "timeZoneName")
      return t[r].value;
}
function zb(e, n) {
  const t = e.format(n).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(t);
  return r ? r[0].substr(1) : "";
}
function Bb(e, n, t) {
  return new Intl.DateTimeFormat(t ? [t.code, "en-US"] : void 0, {
    timeZone: n,
    timeZoneName: e
  });
}
function Lb(e, n) {
  const t = Ub(n);
  return "formatToParts" in t ? Wb(t, e) : Vb(t, e);
}
const Nb = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Wb(e, n) {
  try {
    const t = e.formatToParts(n), r = [];
    for (let o = 0; o < t.length; o++) {
      const a = Nb[t[o].type];
      a !== void 0 && (r[a] = parseInt(t[o].value, 10));
    }
    return r;
  } catch (t) {
    if (t instanceof RangeError)
      return [NaN];
    throw t;
  }
}
function Vb(e, n) {
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
const aa = {}, hl = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), jb = hl === "06/25/2014, 00:00:00" || hl === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Ub(e) {
  return aa[e] || (aa[e] = jb ? new Intl.DateTimeFormat("en-US", {
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
function ld(e, n, t, r, o, a, i) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, n, t), l.setUTCHours(r, o, a, i), l;
}
const ml = 36e5, Yb = 6e4, ia = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function di(e, n, t) {
  if (!e)
    return 0;
  let r = ia.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, a;
  if (r = ia.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), pl(o) ? -(o * ml) : NaN;
  if (r = ia.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const i = parseInt(r[3], 10);
    return pl(o, i) ? (a = Math.abs(o) * ml + i * Yb, r[1] === "+" ? -a : a) : NaN;
  }
  if (Kb(e)) {
    n = new Date(n || Date.now());
    const i = t ? n : Gb(n), l = ka(i, e);
    return -(t ? l : qb(n, l, e));
  }
  return NaN;
}
function Gb(e) {
  return ld(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function ka(e, n) {
  const t = Lb(e, n), r = ld(t[0], t[1] - 1, t[2], t[3] % 24, t[4], t[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, r - o;
}
function qb(e, n, t) {
  let o = e.getTime() - n;
  const a = ka(new Date(o), t);
  if (n === a)
    return n;
  o -= a - n;
  const i = ka(new Date(o), t);
  return a === i ? a : Math.max(a, i);
}
function pl(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
const gl = {};
function Kb(e) {
  if (gl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), gl[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Xb = 60 * 1e3, Qb = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = la(t.timeZone, e);
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return vl(r);
      case "XXXX":
      case "XX":
        return Zn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Zn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = la(t.timeZone, e);
    switch (n) {
      case "x":
        return vl(r);
      case "xxxx":
      case "xx":
        return Zn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Zn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = la(t.timeZone, e);
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Zb(r, ":");
      case "OOOO":
      default:
        return "GMT" + Zn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    switch (n) {
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
function la(e, n) {
  const t = e ? di(e, n, !0) / Xb : (n == null ? void 0 : n.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(t))
    throw new RangeError("Invalid time zone specified: " + e);
  return t;
}
function Po(e, n) {
  const t = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < n; )
    r = "0" + r;
  return t + r;
}
function Zn(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Po(Math.floor(r / 60), 2), a = Po(Math.floor(r % 60), 2);
  return t + o + n + a;
}
function vl(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Po(Math.abs(e) / 60, 2) : Zn(e, n);
}
function Zb(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + Po(a, 2);
}
function bl(e) {
  const n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), +e - +n;
}
const Jb = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, sa = 36e5, Cl = 6e4, eC = 2, Ot = {
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
  timeZone: Jb
};
function sd(e, n = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const t = n.additionalDigits == null ? eC : Number(n.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = tC(e), { year: o, restDateString: a } = nC(r.date, t), i = rC(a, o);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const l = i.getTime();
    let s = 0, d;
    if (r.time && (s = oC(r.time), s === null || isNaN(s)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || n.timeZone) {
      if (d = di(r.timeZone || n.timeZone, new Date(l + s)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = bl(new Date(l + s)), d = bl(new Date(l + s + d));
    return new Date(l + s + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function tC(e) {
  const n = {};
  let t = Ot.dateTimePattern.exec(e), r;
  if (t ? (n.date = t[1], r = t[3]) : (t = Ot.datePattern.exec(e), t ? (n.date = t[1], r = t[2]) : (n.date = null, r = e)), r) {
    const o = Ot.timeZone.exec(r);
    o ? (n.time = r.replace(o[1], ""), n.timeZone = o[1].trim()) : n.time = r;
  }
  return n;
}
function nC(e, n) {
  if (e) {
    const t = Ot.YYY[n], r = Ot.YYYYY[n];
    let o = Ot.YYYY.exec(e) || r.exec(e);
    if (o) {
      const a = o[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (o = Ot.YY.exec(e) || t.exec(e), o) {
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
function rC(e, n) {
  if (n === null)
    return null;
  let t, r, o;
  if (!e || !e.length)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  let a = Ot.MM.exec(e);
  if (a)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Sl(n, r) ? (t.setUTCFullYear(n, r), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ot.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    const i = parseInt(a[1], 10);
    return lC(n, i) ? (t.setUTCFullYear(n, 0, i), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ot.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10);
    return Sl(n, r, i) ? (t.setUTCFullYear(n, r, i), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ot.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, yl(o) ? xl(n, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Ot.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10) - 1;
    return yl(o, i) ? xl(n, o, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function oC(e) {
  let n, t, r = Ot.HH.exec(e);
  if (r)
    return n = parseFloat(r[1].replace(",", ".")), da(n) ? n % 24 * sa : NaN;
  if (r = Ot.HHMM.exec(e), r)
    return n = parseInt(r[1], 10), t = parseFloat(r[2].replace(",", ".")), da(n, t) ? n % 24 * sa + t * Cl : NaN;
  if (r = Ot.HHMMSS.exec(e), r) {
    n = parseInt(r[1], 10), t = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return da(n, t, o) ? n % 24 * sa + t * Cl + o * 1e3 : NaN;
  }
  return null;
}
function xl(e, n, t) {
  n = n || 0, t = t || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = n * 7 + t + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const aC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], iC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function dd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Sl(e, n, t) {
  if (n < 0 || n > 11)
    return !1;
  if (t != null) {
    if (t < 1)
      return !1;
    const r = dd(e);
    if (r && t > iC[n] || !r && t > aC[n])
      return !1;
  }
  return !0;
}
function lC(e, n) {
  if (n < 1)
    return !1;
  const t = dd(e);
  return !(t && n > 366 || !t && n > 365);
}
function yl(e, n) {
  return !(e < 0 || e > 52 || n != null && (n < 0 || n > 6));
}
function da(e, n, t) {
  return !(e < 0 || e >= 25 || n != null && (n < 0 || n >= 60) || t != null && (t < 0 || t >= 60));
}
const sC = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function dC(e, n, t = {}) {
  n = String(n);
  const r = n.match(sC);
  if (r) {
    const o = sd(t.originalDate || e, t);
    n = r.reduce(function(a, i) {
      if (i[0] === "'")
        return a;
      const l = a.indexOf(i), s = a[l - 1] === "'", d = a.replace(i, "'" + Qb[i[0]](o, i, t) + "'");
      return s ? d.substring(0, l - 1) + d.substring(l + 1) : d;
    }, n);
  }
  return Le(e, n, t);
}
function cC(e, n, t) {
  e = sd(e, t);
  const r = di(n, e, !0), o = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
function uC(e, n, t, r) {
  return r = {
    ...r,
    timeZone: n,
    originalDate: e
  }, dC(cC(e, n, { timeZone: r.timeZone }), t, r);
}
const cd = "n-time-picker", io = be({
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
}), Rr = {
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
function Er(e, n, t) {
  return Array.isArray(n) ? (t === "am" ? n.filter((r) => r < 12) : t === "pm" ? n.filter((r) => r >= 12).map((r) => r === 12 ? 12 : r - 12) : n).map((r) => ca(r)) : typeof n == "number" ? t === "am" ? e.filter((r) => {
    const o = Number(r);
    return o < 12 && o % n === 0;
  }) : t === "pm" ? e.filter((r) => {
    const o = Number(r);
    return o >= 12 && o % n === 0;
  }).map((r) => {
    const o = Number(r);
    return ca(o === 12 ? 12 : o - 12);
  }) : e.filter((r) => Number(r) % n === 0) : t === "am" ? e.filter((r) => Number(r) < 12) : t === "pm" ? e.map((r) => Number(r)).filter((r) => Number(r) >= 12).map((r) => ca(r === 12 ? 12 : r - 12)) : e;
}
function lo(e, n, t) {
  return t ? typeof t == "number" ? e % t === 0 : t.includes(e) : !0;
}
function fC(e, n, t) {
  const r = Er(Rr[n], t).map(Number);
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
  return o === void 0 ? (a || qa("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props"), a) : a === void 0 || a - e > e - o ? o : a;
}
function hC(e) {
  return bn(e) < 12 ? "am" : "pm";
}
const mC = {
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
}, pC = be({
  name: "TimePickerPanel",
  props: mC,
  setup(e) {
    const {
      mergedThemeRef: n,
      mergedClsPrefixRef: t
    } = Qe(cd), r = P(() => {
      const {
        isHourDisabled: l,
        hours: s,
        use12Hours: d,
        amPmValue: u
      } = e;
      if (d) {
        const f = u ?? hC(Date.now());
        return Er(Rr.hours, s, f).map((h) => {
          const g = Number(h), m = f === "pm" && g !== 12 ? g + 12 : g;
          return {
            label: h,
            value: m,
            disabled: l ? l(m) : !1
          };
        });
      } else
        return Er(Rr.hours, s).map((f) => ({
          label: f,
          value: Number(f),
          disabled: l ? l(Number(f)) : !1
        }));
    }), o = P(() => {
      const {
        isMinuteDisabled: l,
        minutes: s
      } = e;
      return Er(Rr.minutes, s).map((d) => ({
        label: d,
        value: Number(d),
        disabled: l ? l(Number(d), e.hourValue) : !1
      }));
    }), a = P(() => {
      const {
        isSecondDisabled: l,
        seconds: s
      } = e;
      return Er(Rr.seconds, s).map((d) => ({
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
      hourScrollRef: k(null),
      minuteScrollRef: k(null),
      secondScrollRef: k(null),
      amPmScrollRef: k(null)
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? c(Pt, {
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
    }) : null, !((r = this.actions) === null || r === void 0) && r.includes("confirm") ? c(Pt, {
      size: "tiny",
      type: "primary",
      class: `${o}-time-picker-actions__confirm`,
      theme: a.peers.Button,
      themeOverrides: a.peerOverrides.Button,
      disabled: this.isValueInvalid,
      onClick: this.onConfirmClick
    }, {
      default: () => this.confirmText
    }) : null) : null, c(jn, {
      onFocus: this.onFocusDetectorFocus
    }));
  }
}), gC = $([oe("time-picker", `
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
 `), Vt("disabled", [$("&:hover::before", `
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
var vC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function ua(e, n) {
  return e === void 0 ? !0 : Array.isArray(e) ? e.every((t) => t >= 0 && t <= n) : e >= 0 && e <= n;
}
const bC = Object.assign(Object.assign({}, Zt.props), {
  to: wn.propTo,
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
}), Aa = be({
  name: "TimePicker",
  props: bC,
  setup(e) {
    vC.NODE_ENV !== "production" && At(() => {
      e.onChange !== void 0 && Pn("time-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedBorderedRef: n,
      mergedClsPrefixRef: t,
      namespaceRef: r,
      inlineThemeDisabled: o
    } = Yr(e), {
      localeRef: a,
      dateLocaleRef: i
    } = qr("TimePicker"), l = Io(e), {
      mergedSizeRef: s,
      mergedDisabledRef: d,
      mergedStatusRef: u
    } = l, f = Zt("TimePicker", "-time-picker", gC, Zs, e, t), h = ql(), g = k(null), m = k(null), b = P(() => ({
      locale: i.value.locale
    }));
    function y(_) {
      return _ === null ? null : kt(_, e.valueFormat || e.format, /* @__PURE__ */ new Date(), b.value).getTime();
    }
    const {
      defaultValue: C,
      defaultFormattedValue: T
    } = e, E = k(T !== void 0 ? y(T) : C), M = P(() => {
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
      return _ ? (H, q, xe) => uC(H, _, q, xe) : (H, q, xe) => Le(H, q, xe);
    }), V = k("");
    ht(() => e.timeZone, () => {
      const _ = M.value;
      V.value = _ === null ? "" : L.value(_, e.format, b.value);
    }, {
      immediate: !0
    });
    const p = k(!1), D = Ge(e, "show"), I = Co(D, p), U = k(M.value), Y = k(!1), z = P(() => a.value.clear), S = P(() => a.value.now), A = P(() => e.placeholder !== void 0 ? e.placeholder : a.value.placeholder), Z = P(() => a.value.negativeText), re = P(() => a.value.positiveText), K = P(() => /H|h|K|k/.test(e.format)), me = P(() => e.format.includes("m")), ve = P(() => e.format.includes("s")), de = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : Number(L.value(_, "HH", b.value));
    }), De = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : Number(L.value(_, "mm", b.value));
    }), ke = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : Number(L.value(_, "ss", b.value));
    }), et = P(() => {
      const {
        isHourDisabled: _
      } = e;
      return de.value === null ? !1 : lo(de.value, "hours", e.hours) ? _ ? _(de.value) : !1 : !0;
    }), Ce = P(() => {
      const {
        value: _
      } = De, {
        value: H
      } = de;
      if (_ === null || H === null) return !1;
      if (!lo(_, "minutes", e.minutes)) return !0;
      const {
        isMinuteDisabled: q
      } = e;
      return q ? q(_, H) : !1;
    }), we = P(() => {
      const {
        value: _
      } = De, {
        value: H
      } = de, {
        value: q
      } = ke;
      if (q === null || _ === null || H === null)
        return !1;
      if (!lo(q, "seconds", e.seconds)) return !0;
      const {
        isSecondDisabled: xe
      } = e;
      return xe ? xe(q, _, H) : !1;
    }), pe = P(() => et.value || Ce.value || we.value), Ne = P(() => e.format.length + 4), rt = P(() => {
      const {
        value: _
      } = M;
      return _ === null ? null : bn(_) < 12 ? "am" : "pm";
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
        nTriggerFormChange: Ze,
        nTriggerFormInput: We
      } = l, Ae = Ct(_);
      H && Pe(H, _, Ae), q && Pe(q, _, Ae), xe && Pe(xe, _, Ae), he(Ae, _), E.value = _, Ze(), We();
    }
    function ot(_) {
      const {
        onFocus: H
      } = e, {
        nTriggerFormFocus: q
      } = l;
      H && Pe(H, _), q();
    }
    function at(_) {
      const {
        onBlur: H
      } = e, {
        nTriggerFormBlur: q
      } = l;
      H && Pe(H, _), q();
    }
    function It() {
      const {
        onConfirm: _
      } = e;
      _ && Pe(_, M.value, Ct(M.value));
    }
    function zt(_) {
      var H;
      _.stopPropagation(), ye(null), mt(null), (H = e.onClear) === null || H === void 0 || H.call(e);
    }
    function _t() {
      F({
        returnFocus: !0
      });
    }
    function Bt() {
      ye(null), mt(null), F({
        returnFocus: !0
      });
    }
    function xt(_) {
      _.key === "Escape" && I.value && xo(_);
    }
    function Lt(_) {
      var H;
      switch (_.key) {
        case "Escape":
          I.value && (xo(_), F({
            returnFocus: !0
          }));
          break;
        case "Tab":
          h.shift && _.target === ((H = m.value) === null || H === void 0 ? void 0 : H.$el) && (_.preventDefault(), F({
            returnFocus: !0
          }));
          break;
      }
    }
    function Oe() {
      Y.value = !0, xn(() => {
        Y.value = !1;
      });
    }
    function ze(_) {
      d.value || Yl(_, "clear") || I.value || St();
    }
    function tt(_) {
      typeof _ != "string" && (M.value === null ? ye(j(Mn(tf(/* @__PURE__ */ new Date()), _))) : ye(j(Mn(M.value, _))));
    }
    function Kt(_) {
      typeof _ != "string" && (M.value === null ? ye(j(Yo(uc(/* @__PURE__ */ new Date()), _))) : ye(j(Yo(M.value, _))));
    }
    function Tt(_) {
      typeof _ != "string" && (M.value === null ? ye(j(Go(Na(/* @__PURE__ */ new Date()), _))) : ye(j(Go(M.value, _))));
    }
    function it(_) {
      const {
        value: H
      } = M;
      if (H === null) {
        const q = /* @__PURE__ */ new Date(), xe = bn(q);
        _ === "pm" && xe < 12 ? ye(j(Mn(q, xe + 12))) : _ === "am" && xe >= 12 && ye(j(Mn(q, xe - 12))), ye(j(q));
      } else {
        const q = bn(H);
        _ === "pm" && q < 12 ? ye(j(Mn(H, q + 12))) : _ === "am" && q >= 12 && ye(j(Mn(H, q - 12)));
      }
    }
    function mt(_) {
      _ === void 0 && (_ = M.value), _ === null ? V.value = "" : V.value = L.value(_, e.format, b.value);
    }
    function O(_) {
      gt(_) || ot(_);
    }
    function ue(_) {
      var H;
      if (!gt(_))
        if (I.value) {
          const q = (H = m.value) === null || H === void 0 ? void 0 : H.$el;
          q != null && q.contains(_.relatedTarget) || (mt(), at(_), F({
            returnFocus: !1
          }));
        } else
          mt(), at(_);
    }
    function Ee() {
      d.value || I.value || St();
    }
    function ln() {
      d.value || (mt(), F({
        returnFocus: !1
      }));
    }
    function Nt() {
      if (!m.value) return;
      const {
        hourScrollRef: _,
        minuteScrollRef: H,
        secondScrollRef: q,
        amPmScrollRef: xe
      } = m.value;
      [_, H, q, xe].forEach((Ze) => {
        var We;
        if (!Ze) return;
        const Ae = (We = Ze.contentRef) === null || We === void 0 ? void 0 : We.querySelector("[data-active]");
        Ae && Ze.scrollTo({
          top: Ae.offsetTop
        });
      });
    }
    function qe(_) {
      p.value = _;
      const {
        onUpdateShow: H,
        "onUpdate:show": q
      } = e;
      H && Pe(H, _), q && Pe(q, _);
    }
    function gt(_) {
      var H, q, xe;
      return !!(!((q = (H = g.value) === null || H === void 0 ? void 0 : H.wrapperElRef) === null || q === void 0) && q.contains(_.relatedTarget) || !((xe = m.value) === null || xe === void 0) && xe.$el.contains(_.relatedTarget));
    }
    function St() {
      U.value = M.value, qe(!0), xn(Nt);
    }
    function Jt(_) {
      var H, q;
      I.value && !(!((q = (H = g.value) === null || H === void 0 ? void 0 : H.wrapperElRef) === null || q === void 0) && q.contains(Mo(_))) && F({
        returnFocus: !1
      });
    }
    function F({
      returnFocus: _
    }) {
      var H;
      I.value && (qe(!1), _ && ((H = g.value) === null || H === void 0 || H.focus()));
    }
    function J(_) {
      if (_ === "") {
        ye(null);
        return;
      }
      const H = kt(_, e.format, /* @__PURE__ */ new Date(), b.value);
      if (V.value = _, Yt(H)) {
        const {
          value: q
        } = M;
        if (q !== null) {
          const xe = bt(q, {
            hours: bn(H),
            minutes: mo(H),
            seconds: po(H),
            milliseconds: au(H)
          });
          ye(j(xe));
        } else
          ye(j(H));
      }
    }
    function le() {
      ye(U.value), qe(!1);
    }
    function Me() {
      const _ = /* @__PURE__ */ new Date(), H = {
        hours: bn,
        minutes: mo,
        seconds: po
      }, [q, xe, Ze] = ["hours", "minutes", "seconds"].map((Ae) => !e[Ae] || lo(H[Ae](_), Ae, e[Ae]) ? H[Ae](_) : fC(H[Ae](_), Ae, e[Ae])), We = Go(Yo(Mn(M.value ? M.value : j(_), q), xe), Ze);
      ye(j(We));
    }
    function Ie() {
      mt(), It(), F({
        returnFocus: !0
      });
    }
    function w(_) {
      gt(_) || (mt(), at(_), F({
        returnFocus: !1
      }));
    }
    ht(M, (_) => {
      mt(_), Oe(), xn(Nt);
    }), ht(I, () => {
      pe.value && ye(U.value);
    }), Nn(cd, {
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
    }), fe = o ? zn("time-picker-trigger", void 0, te, e) : void 0, Ke = P(() => {
      const {
        self: {
          panelColor: _,
          itemTextColor: H,
          itemTextColorActive: q,
          itemColorHover: xe,
          panelDividerColor: Ze,
          panelBoxShadow: We,
          itemOpacityDisabled: Ae,
          borderRadius: v,
          itemFontSize: R,
          itemWidth: ie,
          itemHeight: _e,
          panelActionPadding: He,
          itemBorderRadius: Te
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
        "--n-panel-divider-color": Ze,
        "--n-item-border-radius": Te
      };
    }), lt = o ? zn("time-picker", void 0, Ke, e) : void 0;
    return {
      focus: G.focus,
      blur: G.blur,
      mergedStatus: u,
      mergedBordered: n,
      mergedClsPrefix: t,
      namespace: r,
      uncontrolledValue: E,
      mergedValue: M,
      isMounted: Oo(),
      inputInstRef: g,
      panelInstRef: m,
      adjustedTo: wn(e),
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
      isHourInvalid: et,
      isMinuteInvalid: Ce,
      isSecondInvalid: we,
      transitionDisabled: Y,
      hourValue: de,
      minuteValue: De,
      secondValue: ke,
      amPmValue: rt,
      handleInputKeydown: xt,
      handleTimeInputFocus: O,
      handleTimeInputBlur: ue,
      handleNowClick: Me,
      handleConfirmClick: Ie,
      handleTimeInputUpdateValue: J,
      handleMenuFocusOut: w,
      handleCancelClick: le,
      handleClickOutside: Jt,
      handleTimeInputActivate: Ee,
      handleTimeInputDeactivate: ln,
      handleHourClick: tt,
      handleMinuteClick: Kt,
      handleSecondClick: Tt,
      handleAmPmClick: it,
      handleTimeInputClear: zt,
      handleFocusDetectorFocus: _t,
      handleMenuKeydown: Lt,
      handleTriggerClick: ze,
      mergedTheme: f,
      triggerCssVars: o ? void 0 : te,
      triggerThemeClass: fe == null ? void 0 : fe.themeClass,
      triggerOnRender: fe == null ? void 0 : fe.onRender,
      cssVars: o ? void 0 : Ke,
      themeClass: lt == null ? void 0 : lt.themeClass,
      onRender: lt == null ? void 0 : lt.onRender,
      clearSelectedValue: Bt
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
    }, c(ja, null, {
      default: () => [c(Ua, null, {
        default: () => c(ur, {
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
          [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => c(Sn, {
            clsPrefix: e,
            class: `${e}-time-picker-icon`
          }, {
            default: () => n.icon ? n.icon() : c(kv, null)
          })
        } : null)
      }), c(Ya, {
        teleportDisabled: this.adjustedTo === wn.tdkey,
        show: this.mergedShow,
        to: this.adjustedTo,
        containerClass: this.namespace,
        placement: this.placement
      }, {
        default: () => c(Hn, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var r;
            return this.mergedShow ? ((r = this.onRender) === null || r === void 0 || r.call(this), Wr(c(pC, {
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
}), CC = be({
  name: "DateTimePanel",
  props: ai,
  setup(e) {
    return ii(e, "datetime");
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
    }, c(ur, {
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
    }, Fe(s["prev-year"], () => [c(sr, null)])), c("div", {
      class: `${o}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, Fe(s["prev-month"], () => [c(lr, null)])), c(fr, {
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
    }, Fe(s["next-month"], () => [c(cr, null)])), c("div", {
      class: `${o}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, Fe(s["next-year"], () => [c(dr, null)]))), c("div", {
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
      return Array.isArray(f) ? null : c(yn, {
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Et(this.datePickerSlots.clear, {
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
    })]) : null, !((r = this.actions) === null || r === void 0) && r.includes("confirm") ? Et(s.confirm, {
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
    })]) : null)) : null, c(jn, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
var xC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const SC = be({
  name: "DateTimeRangePanel",
  props: li,
  setup(e) {
    return xC.NODE_ENV !== "production" && At(() => {
      var n;
      !((n = e.actions) === null || n === void 0) && n.includes("now") && Pn("date-picker", "The `now` action is not supported for n-date-picker of `datetimerange` type");
    }), si(e, "datetimerange");
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
    }, c(ur, {
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
    })), c(ur, {
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
      class: `${r}-date-panel-calendar ${r}-date-panel-calendar--start`
    }, c("div", {
      class: `${r}-date-panel-month`
    }, c("div", {
      class: `${r}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, Fe(s["prev-year"], () => [c(sr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, Fe(s["prev-month"], () => [c(lr, null)])), c(fr, {
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
    }, Fe(s["next-month"], () => [c(cr, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, Fe(s["next-year"], () => [c(dr, null)]))), c("div", {
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
    }, Fe(s["prev-year"], () => [c(sr, null)])), c("div", {
      class: `${r}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, Fe(s["prev-month"], () => [c(lr, null)])), c(fr, {
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
    }, Fe(s["next-month"], () => [c(cr, null)])), c("div", {
      class: `${r}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, Fe(s["next-year"], () => [c(dr, null)]))), c("div", {
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
      return Array.isArray(u) || typeof u == "function" ? c(yn, {
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Et(s.clear, {
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
    })]) : null)) : null, c(jn, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
var yC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const wC = be({
  name: "MonthRangePanel",
  props: Object.assign(Object.assign({}, li), {
    type: {
      type: String,
      required: !0
    }
  }),
  setup(e) {
    yC.NODE_ENV !== "production" && At(() => {
      var o;
      !((o = e.actions) === null || o === void 0) && o.includes("now") && Pn("date-picker", `The \`now\` action is not supported for n-date-picker of ${e.type}type`);
    });
    const n = si(e, e.type), {
      dateLocaleRef: t
    } = qr("DatePicker"), r = (o, a, i, l) => {
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
      }, o.type === "month" ? td(o.dateObject.month, o.monthFormat, t.value.locale) : o.type === "quarter" ? rd(o.dateObject.quarter, o.quarterFormat, t.value.locale) : nd(o.dateObject.year, o.yearFormat, t.value.locale));
    };
    return an(() => {
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
    }, c(Xt, {
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
      default: () => c(ya, {
        ref: "startYearVlRef",
        items: this.startYearArray,
        itemSize: Ln,
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
    }, c(Xt, {
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
    }, c(Xt, {
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
      default: () => c(ya, {
        ref: "endYearVlRef",
        items: this.endYearArray,
        itemSize: Ln,
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
    }, c(Xt, {
      ref: "endMonthScrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar
    }, {
      default: () => [(i === "monthrange" ? this.endMonthArray : this.endQuarterArray).map((d, u) => l(d, u, r, "end")), i === "monthrange" && c("div", {
        class: `${r}-date-panel-month-calendar__padding`
      })]
    })) : null)), Cn(this.datePickerSlots.footer, (d) => d ? c("div", {
      class: `${r}-date-panel-footer`
    }, d) : null), !((e = this.actions) === null || e === void 0) && e.length || a ? c("div", {
      class: `${r}-date-panel-actions`
    }, c("div", {
      class: `${r}-date-panel-actions__prefix`
    }, a && Object.keys(a).map((d) => {
      const u = a[d];
      return Array.isArray(u) || typeof u == "function" ? c(yn, {
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
    }, !((n = this.actions) === null || n === void 0) && n.includes("clear") ? Et(this.datePickerSlots.clear, {
      onClear: this.handleClearClick,
      text: this.locale.clear
    }, () => [c(yn, {
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
    }, () => [c(yn, {
      theme: o.peers.Button,
      themeOverrides: o.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    })]) : null)) : null, c(jn, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
}), PC = Object.assign(Object.assign({}, Zt.props), {
  to: wn.propTo,
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
}), _C = $([oe("date-picker", `
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
function TC(e, n) {
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
    const h = new Date(f), g = h.getHours(), m = h.getMinutes(), b = h.getMinutes();
    return (r.value ? r.value(g) : !1) || (o.value ? o.value(m, g) : !1) || (a.value ? a.value(b, m, g) : !1);
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
function DC(e, n) {
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
    const g = bn(h[0]), m = mo(h[0]), b = po(h[0]), {
      isStartHourDisabledRef: y,
      isStartMinuteDisabledRef: C,
      isStartSecondDisabledRef: T
    } = r;
    return (y.value ? y.value(g) : !1) || (C.value ? C.value(m, g) : !1) || (T.value ? T.value(b, m, g) : !1);
  }), l = P(() => {
    const {
      type: f
    } = e, {
      value: h
    } = n;
    if (h === null || !Array.isArray(h) || f !== "datetimerange")
      return !1;
    const g = bn(h[1]), m = mo(h[1]), b = po(h[1]), {
      isEndHourDisabledRef: y,
      isEndMinuteDisabledRef: C,
      isEndSecondDisabledRef: T
    } = r;
    return (y.value ? y.value(g) : !1) || (C.value ? C.value(m, g) : !1) || (T.value ? T.value(b, m, g) : !1);
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
var MC = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const OC = be({
  name: "DatePicker",
  props: PC,
  slots: Object,
  setup(e, {
    slots: n
  }) {
    var t;
    MC.NODE_ENV !== "production" && At(() => {
      e.onChange !== void 0 && Pn("date-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      localeRef: r,
      dateLocaleRef: o
    } = qr("DatePicker"), a = Io(e), {
      mergedSizeRef: i,
      mergedDisabledRef: l,
      mergedStatusRef: s
    } = a, {
      mergedComponentPropsRef: d,
      mergedClsPrefixRef: u,
      mergedBorderedRef: f,
      namespaceRef: h,
      inlineThemeDisabled: g
    } = Yr(e), m = k(null), b = k(null), y = k(null), C = k(!1), T = Ge(e, "show"), E = Co(T, C), M = P(() => ({
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
      defaultFormattedValue: D,
      defaultValue: I
    } = e, U = k((t = D !== void 0 ? p(D) : I) !== null && t !== void 0 ? t : null), Y = P(() => {
      const {
        formattedValue: w
      } = e;
      return w !== void 0 ? p(w) : e.value;
    }), z = Co(Y, U), S = k(null);
    At(() => {
      S.value = z.value;
    });
    const A = k(""), Z = k(""), re = k(""), K = Zt("DatePicker", "-date-picker", _C, Cb, e, u), me = P(() => {
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
    }), De = P(() => e.startPlaceholder === void 0 ? e.type === "daterange" ? r.value.startDatePlaceholder : e.type === "datetimerange" ? r.value.startDatetimePlaceholder : e.type === "monthrange" ? r.value.startMonthPlaceholder : "" : e.startPlaceholder), ke = P(() => e.endPlaceholder === void 0 ? e.type === "daterange" ? r.value.endDatePlaceholder : e.type === "datetimerange" ? r.value.endDatetimePlaceholder : e.type === "monthrange" ? r.value.endMonthPlaceholder : "" : e.endPlaceholder), et = P(() => {
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
          hs("date-picker", "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`.");
          break;
        }
      }
    });
    function Ce(w) {
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
        onChange: Ke
      } = e, {
        nTriggerFormChange: lt,
        nTriggerFormInput: _
      } = a, H = Ce(w);
      G.doConfirm && he(w, H), fe && Pe(fe, w, H), te && Pe(te, w, H), Ke && Pe(Ke, w, H), U.value = w, pe(H, w), lt(), _();
    }
    function rt() {
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
    function ot(w) {
      const {
        "onUpdate:show": G,
        onUpdateShow: te
      } = e;
      G && Pe(G, w), te && Pe(te, w), C.value = w;
    }
    function at(w) {
      w.key === "Escape" && E.value && (xo(w), gt({
        returnFocus: !0
      }));
    }
    function It(w) {
      w.key === "Escape" && E.value && xo(w);
    }
    function zt() {
      var w;
      ot(!1), (w = y.value) === null || w === void 0 || w.deactivate(), rt();
    }
    function _t() {
      var w;
      (w = y.value) === null || w === void 0 || w.deactivate(), rt();
    }
    function Bt() {
      gt({
        returnFocus: !0
      });
    }
    function xt(w) {
      var G;
      E.value && !(!((G = b.value) === null || G === void 0) && G.contains(Mo(w))) && gt({
        returnFocus: !1
      });
    }
    function Lt(w) {
      gt({
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
    function tt() {
      const {
        value: w
      } = S;
      ve.value ? (Array.isArray(w) || w === null) && Tt(w) : Array.isArray(w) || Kt(w);
    }
    function Kt(w) {
      w === null ? A.value = "" : A.value = Le(w, L.value, M.value);
    }
    function Tt(w) {
      if (w === null)
        Z.value = "", re.value = "";
      else {
        const G = M.value;
        Z.value = Le(w[0], L.value, G), re.value = Le(w[1], L.value, G);
      }
    }
    function it() {
      E.value || qe();
    }
    function mt(w) {
      var G;
      !((G = m.value) === null || G === void 0) && G.$el.contains(w.relatedTarget) || (ye(w), tt(), gt({
        returnFocus: !1
      }));
    }
    function O() {
      l.value || (tt(), gt({
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
      Yt(G) ? (Ne(j(G), {
        doConfirm: !1
      }), tt()) : A.value = w;
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
      const [te, fe] = w, Ke = kt(te, L.value, /* @__PURE__ */ new Date(), M.value), lt = kt(fe, L.value, /* @__PURE__ */ new Date(), M.value);
      if (Yt(Ke) && Yt(lt)) {
        let _ = j(Ke), H = j(lt);
        lt < Ke && (G === 0 ? H = _ : _ = H), Ne([_, H], {
          doConfirm: !1
        }), tt();
      } else
        [Z.value, re.value] = w;
    }
    function ln(w) {
      l.value || Yl(w, "clear") || E.value || qe();
    }
    function Nt(w) {
      l.value || Ct(w);
    }
    function qe() {
      l.value || E.value || ot(!0);
    }
    function gt({
      returnFocus: w,
      disableUpdateOnClose: G
    }) {
      var te;
      E.value && (ot(!1), e.type !== "date" && e.updateValueOnClose && !G && ze(), w && ((te = y.value) === null || te === void 0 || te.focus()));
    }
    ht(S, () => {
      tt();
    }), tt(), ht(E, (w) => {
      w || (S.value = z.value);
    });
    const St = TC(e, S), Jt = DC(e, S);
    Nn(Ho, Object.assign(Object.assign(Object.assign({
      mergedClsPrefixRef: u,
      mergedThemeRef: K,
      timePickerSizeRef: me,
      localeRef: r,
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
    }, St), Jt), {
      datePickerSlots: n
    }));
    const F = {
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
    }), le = g ? zn("date-picker-trigger", void 0, J, e) : void 0, Me = P(() => {
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
          itemColorDisabled: _,
          itemColorIncluded: H,
          itemColorHover: q,
          itemColorActive: xe,
          itemBorderRadius: Ze,
          itemTextColorDisabled: We,
          itemTextColorActive: Ae,
          panelColor: v,
          panelTextColor: R,
          arrowColor: ie,
          calendarTitleTextColor: _e,
          panelActionDividerColor: He,
          panelHeaderDividerColor: Te,
          calendarDaysDividerColor: Dt,
          panelBoxShadow: Wt,
          panelBorderRadius: ut,
          calendarTitleFontWeight: sn,
          panelExtraFooterPadding: dn,
          panelActionPadding: _n,
          itemSize: wr,
          itemCellWidth: Pr,
          itemCellHeight: _r,
          scrollItemWidth: x,
          scrollItemHeight: W,
          calendarTitlePadding: se,
          calendarTitleHeight: ft,
          calendarDaysHeight: jt,
          calendarDaysTextColor: Ue,
          arrowSize: Tn,
          panelHeaderPadding: Gn,
          calendarDividerColor: Dn,
          calendarTitleGridTempateColumns: Bo,
          iconColor: Lo,
          iconColorDisabled: No,
          scrollItemBorderRadius: Wo,
          calendarTitleColorHover: Vo,
          [Se("calendarLeftPadding", w)]: jo,
          [Se("calendarRightPadding", w)]: Uo
        }
      } = K.value;
      return {
        "--n-bezier": G,
        "--n-panel-border-radius": ut,
        "--n-panel-color": v,
        "--n-panel-box-shadow": Wt,
        "--n-panel-text-color": R,
        // panel header
        "--n-panel-header-padding": Gn,
        "--n-panel-header-divider-color": Te,
        // panel calendar
        "--n-calendar-left-padding": jo,
        "--n-calendar-right-padding": Uo,
        "--n-calendar-title-color-hover": Vo,
        "--n-calendar-title-height": ft,
        "--n-calendar-title-padding": se,
        "--n-calendar-title-font-size": te,
        "--n-calendar-title-font-weight": sn,
        "--n-calendar-title-text-color": _e,
        "--n-calendar-title-grid-template-columns": Bo,
        "--n-calendar-days-height": jt,
        "--n-calendar-days-divider-color": Dt,
        "--n-calendar-days-font-size": fe,
        "--n-calendar-days-text-color": Ue,
        "--n-calendar-divider-color": Dn,
        // panel action
        "--n-panel-action-padding": _n,
        "--n-panel-extra-footer-padding": dn,
        "--n-panel-action-divider-color": He,
        // panel item
        "--n-item-font-size": Ke,
        "--n-item-border-radius": Ze,
        "--n-item-size": wr,
        "--n-item-cell-width": Pr,
        "--n-item-cell-height": _r,
        "--n-item-text-color": lt,
        "--n-item-color-included": H,
        "--n-item-color-disabled": _,
        "--n-item-color-hover": q,
        "--n-item-color-active": xe,
        "--n-item-text-color-disabled": We,
        "--n-item-text-color-active": Ae,
        // scroll item
        "--n-scroll-item-width": x,
        "--n-scroll-item-height": W,
        "--n-scroll-item-border-radius": Wo,
        // panel arrow
        "--n-arrow-size": Tn,
        "--n-arrow-color": ie,
        // icon in trigger
        "--n-icon-color": Lo,
        "--n-icon-color-disabled": No
      };
    }), Ie = g ? zn("date-picker", P(() => e.type), Me, e) : void 0;
    return Object.assign(Object.assign({}, F), {
      mergedStatus: s,
      mergedClsPrefix: u,
      mergedBordered: f,
      namespace: h,
      uncontrolledValue: U,
      pendingValue: S,
      panelInstRef: m,
      triggerElRef: b,
      inputInstRef: y,
      isMounted: Oo(),
      displayTime: A,
      displayStartTime: Z,
      displayEndTime: re,
      mergedShow: E,
      adjustedTo: wn(e),
      isRange: ve,
      localizedStartPlaceholder: De,
      localizedEndPlaceholder: ke,
      mergedSize: i,
      mergedDisabled: l,
      localizedPlacehoder: de,
      isValueInvalid: St.isValueInvalidRef,
      isStartValueInvalid: Jt.isStartValueInvalidRef,
      isEndValueInvalid: Jt.isEndValueInvalidRef,
      handleInputKeydown: It,
      handleClickOutside: xt,
      handleKeydown: at,
      handleClear: zt,
      handlePanelClear: _t,
      handleTriggerClick: ln,
      handleInputActivate: it,
      handleInputDeactivate: O,
      handleInputFocus: Nt,
      handleInputBlur: mt,
      handlePanelTabOut: Bt,
      handlePanelClose: Lt,
      handleRangeUpdateValue: Ee,
      handleSingleUpdateValue: ue,
      handlePanelUpdateValue: Oe,
      handlePanelConfirm: ze,
      mergedTheme: K,
      actions: et,
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
      return l === "datetime" ? c(CC, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), r) : l === "daterange" ? c($b, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), r) : l === "datetimerange" ? c(SC, Object.assign({}, o, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), r) : l === "month" || l === "year" || l === "quarter" ? c(id, Object.assign({}, o, {
        type: l,
        key: l
      })) : l === "monthrange" || l === "yearrange" || l === "quarterrange" ? c(wC, Object.assign({}, o, {
        type: l
      })) : c(kb, Object.assign({}, o, {
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
    }, c(ja, null, {
      default: () => [c(Ua, null, {
        default: () => this.isRange ? c(ur, Object.assign({
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
          separator: () => this.separator === void 0 ? Fe(r.separator, () => [c(Sn, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => c(Av, null)
          })]) : this.separator,
          [e ? "clear-icon-placeholder" : "suffix"]: () => Fe(r["date-icon"], () => [c(Sn, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => c(il, null)
          })])
        }) : c(ur, Object.assign({
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
          [e ? "clear-icon-placeholder" : "suffix"]: () => c(Sn, {
            clsPrefix: t,
            class: `${t}-date-picker-icon`
          }, {
            default: () => Fe(r["date-icon"], () => [c(il, null)])
          })
        })
      }), c(Ya, {
        show: this.mergedShow,
        containerClass: this.namespace,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === wn.tdkey,
        placement: this.placement
      }, {
        default: () => c(Hn, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? Wr(a(), [[Va, this.handleClickOutside, void 0, {
            capture: !0
          }]]) : null
        })
      })]
    }));
  }
}), RC = {
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
    validator: () => (hs("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, EC = be({
  name: "ConfigProvider",
  alias: ["App"],
  props: RC,
  setup(e) {
    const n = Qe(fn, null), t = P(() => {
      const {
        theme: b
      } = e;
      if (b === null) return;
      const y = n == null ? void 0 : n.mergedThemeRef.value;
      return b === void 0 ? y : y === void 0 ? b : Object.assign({}, y, b);
    }), r = P(() => {
      const {
        themeOverrides: b
      } = e;
      if (b !== null) {
        if (b === void 0)
          return n == null ? void 0 : n.mergedThemeOverridesRef.value;
        {
          const y = n == null ? void 0 : n.mergedThemeOverridesRef.value;
          return y === void 0 ? b : Or({}, y, b);
        }
      }
    }), o = Gt(() => {
      const {
        namespace: b
      } = e;
      return b === void 0 ? n == null ? void 0 : n.mergedNamespaceRef.value : b;
    }), a = Gt(() => {
      const {
        bordered: b
      } = e;
      return b === void 0 ? n == null ? void 0 : n.mergedBorderedRef.value : b;
    }), i = P(() => {
      const {
        icons: b
      } = e;
      return b === void 0 ? n == null ? void 0 : n.mergedIconsRef.value : b;
    }), l = P(() => {
      const {
        componentOptions: b
      } = e;
      return b !== void 0 ? b : n == null ? void 0 : n.mergedComponentPropsRef.value;
    }), s = P(() => {
      const {
        clsPrefix: b
      } = e;
      return b !== void 0 ? b : n ? n.mergedClsPrefixRef.value : wa;
    }), d = P(() => {
      var b;
      const {
        rtl: y
      } = e;
      if (y === void 0)
        return n == null ? void 0 : n.mergedRtlRef.value;
      const C = {};
      for (const T of y)
        C[T.name] = ui(T), (b = T.peers) === null || b === void 0 || b.forEach((E) => {
          E.name in C || (C[E.name] = ui(E));
        });
      return C;
    }), u = P(() => e.breakpoints || (n == null ? void 0 : n.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (n == null ? void 0 : n.inlineThemeDisabled), h = e.preflightStyleDisabled || (n == null ? void 0 : n.preflightStyleDisabled), g = e.styleMountTarget || (n == null ? void 0 : n.styleMountTarget), m = P(() => {
      const {
        value: b
      } = t, {
        value: y
      } = r, C = y && Object.keys(y).length !== 0, T = b == null ? void 0 : b.name;
      return T ? C ? `${T}-${Hr(JSON.stringify(r.value))}` : T : C ? Hr(JSON.stringify(r.value)) : "";
    });
    return Nn(fn, {
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
          locale: b
        } = e;
        if (b !== null)
          return b === void 0 ? n == null ? void 0 : n.mergedLocaleRef.value : b;
      }),
      mergedDateLocaleRef: P(() => {
        const {
          dateLocale: b
        } = e;
        if (b !== null)
          return b === void 0 ? n == null ? void 0 : n.mergedDateLocaleRef.value : b;
      }),
      mergedHljsRef: P(() => {
        const {
          hljs: b
        } = e;
        return b === void 0 ? n == null ? void 0 : n.mergedHljsRef.value : b;
      }),
      mergedKatexRef: P(() => {
        const {
          katex: b
        } = e;
        return b === void 0 ? n == null ? void 0 : n.mergedKatexRef.value : b;
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
      class: `${this.mergedClsPrefix || wa}-config-provider`
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
}), IC = {
  iconMargin: "11px 8px 0 12px",
  iconMarginRtl: "11px 12px 0 8px",
  iconSize: "24px",
  closeIconSize: "16px",
  closeSize: "20px",
  closeMargin: "13px 14px 0 0",
  closeMarginRtl: "13px 0 0 14px",
  padding: "13px"
}, FC = {
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
      warningColorSuppl: b,
      errorColorSuppl: y,
      fontSize: C
    } = e;
    return Object.assign(Object.assign({}, IC), {
      fontSize: C,
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
      borderWarning: `1px solid ${Q(b, {
        alpha: 0.35
      })}`,
      colorWarning: Q(b, {
        alpha: 0.25
      }),
      titleTextColorWarning: i,
      iconColorWarning: b,
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
}, kC = {
  linkFontSize: "13px",
  linkPadding: "0 0 0 16px",
  railWidth: "4px"
};
function AC(e) {
  const {
    borderRadius: n,
    railColor: t,
    primaryColor: r,
    primaryColorHover: o,
    primaryColorPressed: a,
    textColor2: i
  } = e;
  return Object.assign(Object.assign({}, kC), {
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
const $C = {
  name: "Anchor",
  common: B,
  self: AC
};
function HC(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const zC = {
  name: "AutoComplete",
  common: B,
  peers: {
    InternalSelectMenu: Xr,
    Input: qt
  },
  self: HC
};
function BC(e) {
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
const ud = {
  name: "Avatar",
  common: B,
  self: BC
};
function LC() {
  return {
    gap: "-12px"
  };
}
const NC = {
  name: "AvatarGroup",
  common: B,
  peers: {
    Avatar: ud
  },
  self: LC
}, WC = {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  iconSize: "26px"
}, VC = {
  name: "BackTop",
  common: B,
  self(e) {
    const {
      popoverColor: n,
      textColor2: t,
      primaryColorHover: r,
      primaryColorPressed: o
    } = e;
    return Object.assign(Object.assign({}, WC), {
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
}, jC = {
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
}, UC = {
  fontWeightActive: "400"
};
function YC(e) {
  const {
    fontSize: n,
    textColor3: t,
    textColor2: r,
    borderRadius: o,
    buttonColor2Hover: a,
    buttonColor2Pressed: i
  } = e;
  return Object.assign(Object.assign({}, UC), {
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
const GC = {
  name: "Breadcrumb",
  common: B,
  self: YC
}, qC = {
  name: "ButtonGroup",
  common: B
}, KC = {
  titleFontSize: "22px"
};
function XC(e) {
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
  return Object.assign(Object.assign({}, KC), {
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
const QC = {
  name: "Calendar",
  common: B,
  peers: {
    Button: Ht
  },
  self: XC
}, ZC = {
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
function JC(e) {
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
    modalColor: b,
    boxShadow1: y,
    popoverColor: C,
    actionColor: T
  } = e;
  return Object.assign(Object.assign({}, ZC), {
    lineHeight: r,
    color: a,
    colorModal: b,
    colorPopover: C,
    colorTarget: n,
    colorEmbedded: T,
    colorEmbeddedModal: T,
    colorEmbeddedPopover: T,
    textColor: i,
    titleTextColor: l,
    borderColor: s,
    actionColor: T,
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
const fd = {
  name: "Card",
  common: B,
  self(e) {
    const n = JC(e), {
      cardColor: t,
      modalColor: r,
      popoverColor: o
    } = e;
    return n.colorEmbedded = t, n.colorEmbeddedModal = r, n.colorEmbeddedPopover = o, n;
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
  common: B,
  self: e0
}, n0 = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function r0(e) {
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
  return Object.assign(Object.assign({}, n0), {
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
const yr = {
  name: "Checkbox",
  common: B,
  self(e) {
    const {
      cardColor: n
    } = e, t = r0(e);
    return t.color = "#0000", t.checkMarkColor = n, t;
  }
};
function o0(e) {
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
const a0 = {
  name: "Cascader",
  common: B,
  peers: {
    InternalSelectMenu: Xr,
    InternalSelection: ni,
    Scrollbar: $t,
    Checkbox: yr,
    Empty: Qv
  },
  self: o0
}, hd = {
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
function i0(e) {
  const {
    cubicBezierEaseInOut: n
  } = e;
  return {
    bezier: n
  };
}
const l0 = {
  name: "CollapseTransition",
  common: B,
  self: i0
};
function s0(e) {
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
const d0 = {
  name: "Collapse",
  common: B,
  self: s0
};
function c0(e) {
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
const u0 = {
  name: "ColorPicker",
  common: B,
  peers: {
    Input: qt,
    Button: Ht
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
function h0(e) {
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
    heightHuge: b,
    textColor3: y,
    opacityDisabled: C
  } = e;
  return Object.assign(Object.assign({}, f0), {
    optionHeightSmall: h,
    optionHeightMedium: g,
    optionHeightLarge: m,
    optionHeightHuge: b,
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
    optionOpacityDisabled: C
  });
}
const ci = {
  name: "Dropdown",
  common: B,
  peers: {
    Popover: Yn
  },
  self(e) {
    const {
      primaryColorSuppl: n,
      primaryColor: t,
      popoverColor: r
    } = e, o = h0(e);
    return o.colorInverted = r, o.optionColorActive = Q(t, {
      alpha: 0.15
    }), o.optionColorActiveInverted = n, o.optionColorHoverInverted = n, o;
  }
}, m0 = {
  padding: "8px 14px"
}, zo = {
  name: "Tooltip",
  common: B,
  peers: {
    Popover: Yn
  },
  self(e) {
    const {
      borderRadius: n,
      boxShadow2: t,
      popoverColor: r,
      textColor2: o
    } = e;
    return Object.assign(Object.assign({}, m0), {
      borderRadius: n,
      boxShadow: t,
      color: r,
      textColor: o
    });
  }
}, md = {
  name: "Ellipsis",
  common: B,
  peers: {
    Tooltip: zo
  }
}, pd = {
  name: "Popselect",
  common: B,
  peers: {
    Popover: Yn,
    InternalSelectMenu: Xr
  }
};
function p0(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const gd = {
  name: "Select",
  common: B,
  peers: {
    InternalSelection: ni,
    InternalSelectMenu: Xr
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
  return Object.assign(Object.assign({}, g0), {
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
const vd = {
  name: "Pagination",
  common: B,
  peers: {
    Select: gd,
    Input: qt,
    Popselect: pd
  },
  self(e) {
    const {
      primaryColor: n,
      opacity3: t
    } = e, r = Q(n, {
      alpha: Number(t)
    }), o = v0(e);
    return o.itemBorderActive = `1px solid ${r}`, o.itemBorderDisabled = "1px solid #0000", o;
  }
}, b0 = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
}, bd = {
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
      lineHeight: b
    } = e;
    return Object.assign(Object.assign({}, b0), {
      labelLineHeight: b,
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
}, C0 = {
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
    fontSizeLarge: b,
    dividerColor: y,
    heightSmall: C,
    opacityDisabled: T,
    tableColorStriped: E
  } = e;
  return Object.assign(Object.assign({}, C0), {
    actionDividerColor: y,
    lineHeight: h,
    borderRadius: f,
    fontSizeSmall: g,
    fontSizeMedium: m,
    fontSizeLarge: b,
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
    loadingSize: C,
    opacityLoading: T
  });
}
const S0 = {
  name: "DataTable",
  common: B,
  peers: {
    Button: Ht,
    Checkbox: yr,
    Radio: bd,
    Pagination: vd,
    Scrollbar: $t,
    Empty: Un,
    Popover: Yn,
    Ellipsis: md,
    Dropdown: ci
  },
  self(e) {
    const n = x0(e);
    return n.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", n.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", n;
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
  return Object.assign(Object.assign({}, y0), {
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
const P0 = {
  name: "Descriptions",
  common: B,
  self: w0
}, _0 = {
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
function T0(e) {
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
    borderRadius: b,
    fontWeightStrong: y,
    lineHeight: C,
    fontSize: T
  } = e;
  return Object.assign(Object.assign({}, _0), {
    fontSize: T,
    lineHeight: C,
    border: `1px solid ${m}`,
    titleTextColor: n,
    textColor: t,
    color: r,
    closeColorHover: l,
    closeColorPressed: s,
    closeIconColor: o,
    closeIconColorHover: a,
    closeIconColorPressed: i,
    closeBorderRadius: b,
    iconColor: g,
    iconColorInfo: d,
    iconColorSuccess: u,
    iconColorWarning: f,
    iconColorError: h,
    borderRadius: b,
    titleFontWeight: y
  });
}
const Cd = {
  name: "Dialog",
  common: B,
  peers: {
    Button: Ht
  },
  self: T0
};
function D0(e) {
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
const M0 = {
  name: "Divider",
  common: B,
  self: D0
};
function O0(e) {
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
const R0 = {
  name: "Drawer",
  common: B,
  peers: {
    Scrollbar: $t
  },
  self: O0
}, E0 = {
  actionMargin: "0 0 0 20px",
  actionMarginRtl: "0 20px 0 0"
}, I0 = {
  name: "DynamicInput",
  common: B,
  peers: {
    Input: qt,
    Button: Ht
  },
  self() {
    return E0;
  }
}, F0 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
}, xd = {
  name: "Space",
  self() {
    return F0;
  }
}, k0 = {
  name: "DynamicTags",
  common: B,
  peers: {
    Input: qt,
    Button: Ht,
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
  common: B
}, $0 = () => ({}), H0 = {
  name: "Equation",
  common: B,
  self: $0
}, z0 = {
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
}, B0 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
}, L0 = {
  name: "Flex",
  self() {
    return B0;
  }
}, N0 = {
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
function W0(e) {
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
  return Object.assign(Object.assign({}, N0), {
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
const V0 = {
  name: "Form",
  common: B,
  self: W0
}, j0 = {
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
function U0(e) {
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
const Y0 = {
  name: "Icon",
  common: B,
  self: U0
}, G0 = {
  name: "InputNumber",
  common: B,
  peers: {
    Button: Ht,
    Input: qt
  },
  self(e) {
    const {
      textColorDisabled: n
    } = e;
    return {
      iconColorDisabled: n
    };
  }
}, q0 = {
  name: "Layout",
  common: B,
  peers: {
    Scrollbar: $t
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
}, K0 = {
  name: "Row",
  common: B
};
function X0(e) {
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
const Q0 = {
  name: "List",
  common: B,
  self: X0
}, Z0 = {
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
}, J0 = {
  name: "Log",
  common: B,
  peers: {
    Scrollbar: $t,
    Code: hd
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
}, ex = {
  name: "Mention",
  common: B,
  peers: {
    InternalSelectMenu: Xr,
    Input: qt
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
function tx(e, n, t, r) {
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
function nx(e) {
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
  }, tx("#BBB", r, "#FFF", "#AAA"));
}
const rx = {
  name: "Menu",
  common: B,
  peers: {
    Tooltip: zo,
    Dropdown: ci
  },
  self(e) {
    const {
      primaryColor: n,
      primaryColorSuppl: t
    } = e, r = nx(e);
    return r.itemColorActive = Q(n, {
      alpha: 0.15
    }), r.itemColorActiveHover = Q(n, {
      alpha: 0.15
    }), r.itemColorActiveCollapsed = Q(n, {
      alpha: 0.15
    }), r.itemColorActiveInverted = t, r.itemColorActiveHoverInverted = t, r.itemColorActiveCollapsedInverted = t, r;
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
    closeColorPressed: b
  } = e;
  return Object.assign(Object.assign({}, ox), {
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
    closeColorPressed: b,
    closeIconColor: t,
    closeIconColorHover: r,
    closeIconColorPressed: o,
    closeColorHoverInfo: m,
    closeColorPressedInfo: b,
    closeIconColorInfo: t,
    closeIconColorHoverInfo: r,
    closeIconColorPressedInfo: o,
    closeColorHoverSuccess: m,
    closeColorPressedSuccess: b,
    closeIconColorSuccess: t,
    closeIconColorHoverSuccess: r,
    closeIconColorPressedSuccess: o,
    closeColorHoverError: m,
    closeColorPressedError: b,
    closeIconColorError: t,
    closeIconColorHoverError: r,
    closeIconColorPressedError: o,
    closeColorHoverWarning: m,
    closeColorPressedWarning: b,
    closeIconColorWarning: t,
    closeIconColorHoverWarning: r,
    closeIconColorPressedWarning: o,
    closeColorHoverLoading: m,
    closeColorPressedLoading: b,
    closeIconColorLoading: t,
    closeIconColorHoverLoading: r,
    closeIconColorPressedLoading: o,
    loadingColor: f,
    lineHeight: h,
    borderRadius: g
  });
}
const ix = {
  name: "Message",
  common: B,
  self: ax
};
function lx(e) {
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
const sx = {
  name: "Modal",
  common: B,
  peers: {
    Scrollbar: $t,
    Dialog: Cd,
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
    fontWeightStrong: b,
    boxShadow2: y,
    lineHeight: C,
    fontSize: T
  } = e;
  return Object.assign(Object.assign({}, dx), {
    borderRadius: m,
    lineHeight: C,
    fontSize: T,
    headerFontWeight: b,
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
const ux = {
  name: "Notification",
  common: B,
  peers: {
    Scrollbar: $t
  },
  self: cx
}, fx = {
  titleFontSize: "18px",
  backSize: "22px"
};
function hx(e) {
  const {
    textColor1: n,
    textColor2: t,
    textColor3: r,
    fontSize: o,
    fontWeightStrong: a,
    primaryColorHover: i,
    primaryColorPressed: l
  } = e;
  return Object.assign(Object.assign({}, fx), {
    titleFontWeight: a,
    fontSize: o,
    titleTextColor: n,
    backColor: t,
    backColorHover: i,
    backColorPressed: l,
    subtitleTextColor: r
  });
}
const mx = {
  name: "PageHeader",
  common: B,
  self: hx
}, px = {
  iconSize: "22px"
};
function gx(e) {
  const {
    fontSize: n,
    warningColor: t
  } = e;
  return Object.assign(Object.assign({}, px), {
    fontSize: n,
    iconColor: t
  });
}
const vx = {
  name: "Popconfirm",
  common: B,
  peers: {
    Button: Ht,
    Popover: Yn
  },
  self: gx
};
function bx(e) {
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
const Sd = {
  name: "Progress",
  common: B,
  self(e) {
    const n = bx(e);
    return n.textColorLineInner = "rgb(0, 0, 0)", n.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", n;
  }
}, Cx = {
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
    textColor2: n,
    textColor1: t,
    errorColor: r,
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
    textColor: n,
    iconColorError: r,
    iconColorSuccess: o,
    iconColorInfo: a,
    iconColorWarning: i
  });
}
const yx = {
  name: "Result",
  common: B,
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
function _x(e) {
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
const Tx = {
  name: "Spin",
  common: B,
  self: _x
};
function Dx(e) {
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
const Mx = {
  name: "Statistic",
  common: B,
  self: Dx
}, Ox = {
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
    fontWeightStrong: n,
    baseColor: t,
    textColorDisabled: r,
    primaryColor: o,
    errorColor: a,
    textColor1: i,
    textColor2: l
  } = e;
  return Object.assign(Object.assign({}, Ox), {
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
const Ex = {
  name: "Steps",
  common: B,
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
}, Fx = {
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
    return Object.assign(Object.assign({}, Ix), {
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
}, kx = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function Ax(e) {
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
  return Object.assign(Object.assign({}, kx), {
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
const $x = {
  name: "Table",
  common: B,
  self: Ax
}, Hx = {
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
function zx(e) {
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
    fontSize: b,
    fontWeightStrong: y
  } = e;
  return Object.assign(Object.assign({}, Hx), {
    colorSegment: d,
    tabFontSizeCard: b,
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
const Bx = {
  name: "Tabs",
  common: B,
  self(e) {
    const n = zx(e), {
      inputColor: t
    } = e;
    return n.colorSegment = t, n.tabColorSegment = t, n;
  }
};
function Lx(e) {
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
const Nx = {
  name: "Thing",
  common: B,
  self: Lx
}, Wx = {
  titleMarginMedium: "0 0 6px 0",
  titleMarginLarge: "-2px 0 6px 0",
  titleFontSizeMedium: "14px",
  titleFontSizeLarge: "16px",
  iconSizeMedium: "14px",
  iconSizeLarge: "14px"
}, Vx = {
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
    return Object.assign(Object.assign({}, Wx), {
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
  common: B,
  peers: {
    Checkbox: yr,
    Scrollbar: $t,
    Input: qt,
    Empty: Un,
    Button: Ht
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
      closeColorHover: b,
      closeColorPressed: y,
      closeIconColor: C,
      closeIconColorHover: T,
      closeIconColorPressed: E,
      dividerColor: M
    } = e;
    return Object.assign(Object.assign({}, jx), {
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
      closeColorHover: b,
      closeColorPressed: y,
      closeIconColor: C,
      closeIconColorHover: T,
      closeIconColorPressed: E
    });
  }
};
function Yx(e) {
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
const yd = {
  name: "Tree",
  common: B,
  peers: {
    Checkbox: yr,
    Scrollbar: $t,
    Empty: Un
  },
  self(e) {
    const {
      primaryColor: n
    } = e, t = Yx(e);
    return t.nodeColorActive = Q(n, {
      alpha: 0.15
    }), t;
  }
}, Gx = {
  name: "TreeSelect",
  common: B,
  peers: {
    Tree: yd,
    Empty: Un,
    InternalSelection: ni
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
    codeColor: b
  } = e;
  return Object.assign(Object.assign({}, qx), {
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
    codeColor: b,
    codeBorder: "1px solid #0000"
  });
}
const Xx = {
  name: "Typography",
  common: B,
  self: Kx
};
function Qx(e) {
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
const Zx = {
  name: "Upload",
  common: B,
  peers: {
    Button: Ht,
    Progress: Sd
  },
  self(e) {
    const {
      errorColor: n
    } = e, t = Qx(e);
    return t.itemColorHoverError = Q(n, {
      alpha: 0.09
    }), t;
  }
}, Jx = {
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
}, eS = {
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
function tS(e) {
  const {
    primaryColor: n,
    baseColor: t
  } = e;
  return {
    color: n,
    iconColor: t
  };
}
const nS = {
  name: "IconWrapper",
  common: B,
  self: tS
}, rS = {
  name: "Image",
  common: B,
  peers: {
    Tooltip: zo
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
}, oS = {
  extraFontSize: "12px",
  width: "440px"
}, aS = {
  name: "Transfer",
  common: B,
  peers: {
    Checkbox: yr,
    Scrollbar: $t,
    Input: qt,
    Empty: Un,
    Button: Ht
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
      textColor2: b,
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
      headerColor: h,
      titleTextColor: g,
      titleTextColorDisabled: m,
      extraTextColor: b,
      filterDividerColor: "#0000",
      itemTextColor: b,
      itemTextColorDisabled: m,
      itemColorPending: y,
      titleFontWeight: r,
      iconColor: t,
      iconColorDisabled: n
    });
  }
};
function iS() {
  return {};
}
const lS = {
  name: "Marquee",
  common: B,
  self: iS
}, sS = {
  name: "QrCode",
  common: B,
  self: (e) => ({
    borderRadius: e.borderRadius
  })
}, dS = {
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
}, cS = {
  name: "Split",
  common: B
}, uS = {
  name: "dark",
  common: B,
  Alert: FC,
  Anchor: $C,
  AutoComplete: zC,
  Avatar: ud,
  AvatarGroup: NC,
  BackTop: VC,
  Badge: jC,
  Breadcrumb: GC,
  Button: Ht,
  ButtonGroup: qC,
  Calendar: QC,
  Card: fd,
  Carousel: t0,
  Cascader: a0,
  Checkbox: yr,
  Code: hd,
  Collapse: d0,
  CollapseTransition: l0,
  ColorPicker: u0,
  DataTable: S0,
  DatePicker: xb,
  Descriptions: P0,
  Dialog: Cd,
  Divider: M0,
  Drawer: R0,
  Dropdown: ci,
  DynamicInput: I0,
  DynamicTags: k0,
  Element: A0,
  Empty: Un,
  Ellipsis: md,
  Equation: H0,
  Flex: L0,
  Form: V0,
  GradientText: j0,
  Icon: Y0,
  IconWrapper: nS,
  Image: rS,
  Input: qt,
  InputNumber: G0,
  LegacyTransfer: aS,
  Layout: q0,
  List: Q0,
  LoadingBar: Z0,
  Log: J0,
  Menu: rx,
  Mention: ex,
  Message: ix,
  Modal: sx,
  Notification: ux,
  PageHeader: mx,
  Pagination: vd,
  Popconfirm: vx,
  Popover: Yn,
  Popselect: pd,
  Progress: Sd,
  QrCode: sS,
  Radio: bd,
  Rate: Cx,
  Result: yx,
  Row: K0,
  Scrollbar: $t,
  Select: gd,
  Skeleton: dS,
  Slider: Px,
  Space: xd,
  Spin: Tx,
  Statistic: Mx,
  Steps: Ex,
  Switch: Fx,
  Table: $x,
  Tabs: Bx,
  Tag: Ys,
  Thing: Nx,
  TimePicker: Js,
  Timeline: Vx,
  Tooltip: zo,
  Transfer: Ux,
  Tree: yd,
  TreeSelect: Gx,
  Typography: Xx,
  Upload: Zx,
  Watermark: Jx,
  Split: cS,
  FloatButton: eS,
  FloatButtonGroup: z0,
  Marquee: lS
}, fS = /* @__PURE__ */ be({
  __name: "index",
  setup(e) {
    return (n, t) => (Dl(), Qd(Mr(EC), {
      "date-locale": Mr(Sm),
      locale: Mr(Vh),
      theme: Mr(uS)
    }, {
      default: fa(() => [
        Pl(n.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["date-locale", "locale", "theme"]));
  }
}), hS = { class: "lc-date-picker" }, mS = /* @__PURE__ */ be({
  __name: "DatePicker",
  setup(e) {
    return (n, t) => (Dl(), Zd("div", hS, [
      fi(fS, null, {
        default: fa(() => [
          fi(
            Mr(OC),
            $a({
              type: "daterange",
              to: !1
            }, n.$attrs),
            {
              separator: fa(() => t[0] || (t[0] = [
                Jd(
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
}), pS = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, CS = /* @__PURE__ */ pS(mS, [["__scopeId", "data-v-afae7ac3"]]);
export {
  CS as LcDatePicker
};
