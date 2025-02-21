// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { _ as C } from "./assets/mark-rect-CXWu9vet.js";
import { _ as W } from "./assets/mark-D-ktqeQX.js";
import { _ as D } from "./assets/mark2-rect-CB64moIF.js";
import { _ as F } from "./assets/mark2-b__rySwN.js";
import { _ as N } from "./assets/normal-DJ6iZJWa.js";
import { inject as A, computed as u, defineComponent as k, ref as V, onMounted as x, watchEffect as E, openBlock as R, createElementBlock as j, normalizeClass as L, normalizeStyle as q, createElementVNode as m, toDisplayString as P, renderSlot as O, createVNode as I, unref as z, createCommentVNode as $ } from "vue";
import { round as U } from "lodash-es";
const Y = "n-config-provider", B = {
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
};
function v(e) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function f(e) {
  return (a, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let l;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : i;
      l = e.formattingValues[o] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      l = e.values[o] || e.values[i];
    }
    const r = e.argumentCallback ? e.argumentCallback(a) : a;
    return l[r];
  };
}
function y(e) {
  return (a, t = {}) => {
    const n = t.width, l = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], r = a.match(l);
    if (!r)
      return null;
    const i = r[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(o) ? X(o, (g) => g.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      J(o, (g) => g.test(i))
    );
    let s;
    s = e.valueCallback ? e.valueCallback(d) : d, s = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(s)
    ) : s;
    const h = a.slice(i.length);
    return { value: s, rest: h };
  };
}
function J(e, a) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && a(e[t]))
      return t;
}
function X(e, a) {
  for (let t = 0; t < e.length; t++)
    if (a(e[t]))
      return t;
}
function Q(e) {
  return (a, t = {}) => {
    const n = a.match(e.matchPattern);
    if (!n) return null;
    const l = n[0], r = a.match(e.parsePattern);
    if (!r) return null;
    let i = e.valueCallback ? e.valueCallback(r[0]) : r[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const o = a.slice(l.length);
    return { value: i, rest: o };
  };
}
const H = {
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
}, Z = (e, a, t) => {
  let n;
  const l = H[e];
  return typeof l == "string" ? n = l : a === 1 ? n = l.one : n = l.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
}, K = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, G = (e, a, t, n) => K[e], ee = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, te = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ae = {
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
}, ne = {
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
}, re = {
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
}, oe = {
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
}, ie = (e, a) => {
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
}, le = {
  ordinalNumber: ie,
  era: f({
    values: ee,
    defaultWidth: "wide"
  }),
  quarter: f({
    values: te,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: f({
    values: ae,
    defaultWidth: "wide"
  }),
  day: f({
    values: ne,
    defaultWidth: "wide"
  }),
  dayPeriod: f({
    values: re,
    defaultWidth: "wide",
    formattingValues: oe,
    defaultFormattingWidth: "wide"
  })
}, ce = /^(\d+)(th|st|nd|rd)?/i, se = /\d+/i, de = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, me = {
  any: [/^b/i, /^(a|c)/i]
}, ue = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, he = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, fe = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ye = {
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
}, ge = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, be = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, pe = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ve = {
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
}, we = {
  ordinalNumber: Q({
    matchPattern: ce,
    parsePattern: se,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: y({
    matchPatterns: de,
    defaultMatchWidth: "wide",
    parsePatterns: me,
    defaultParseWidth: "any"
  }),
  quarter: y({
    matchPatterns: ue,
    defaultMatchWidth: "wide",
    parsePatterns: he,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: y({
    matchPatterns: fe,
    defaultMatchWidth: "wide",
    parsePatterns: ye,
    defaultParseWidth: "any"
  }),
  day: y({
    matchPatterns: ge,
    defaultMatchWidth: "wide",
    parsePatterns: be,
    defaultParseWidth: "any"
  }),
  dayPeriod: y({
    matchPatterns: pe,
    defaultMatchWidth: "any",
    parsePatterns: ve,
    defaultParseWidth: "any"
  })
}, Pe = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ke = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _e = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Me = {
  date: v({
    formats: Pe,
    defaultWidth: "full"
  }),
  time: v({
    formats: ke,
    defaultWidth: "full"
  }),
  dateTime: v({
    formats: _e,
    defaultWidth: "full"
  })
}, Se = {
  code: "en-US",
  formatDistance: Z,
  formatLong: Me,
  formatRelative: G,
  localize: le,
  match: we,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Te = {
  name: "en-US",
  locale: Se
};
function Ce(e) {
  const {
    mergedLocaleRef: a,
    mergedDateLocaleRef: t
  } = A(Y, null) || {}, n = u(() => {
    var r, i;
    return (i = (r = a == null ? void 0 : a.value) === null || r === void 0 ? void 0 : r[e]) !== null && i !== void 0 ? i : B[e];
  });
  return {
    dateLocaleRef: u(() => {
      var r;
      return (r = t == null ? void 0 : t.value) !== null && r !== void 0 ? r : Te;
    }),
    localeRef: n
  };
}
const We = (e) => 1 - Math.pow(1 - e, 5);
function De(e) {
  const {
    from: a,
    to: t,
    duration: n,
    onUpdate: l,
    onFinish: r
  } = e, i = performance.now(), o = () => {
    const d = performance.now(), s = Math.min(d - i, n), h = a + (t - a) * We(s / n);
    if (s === n) {
      r();
      return;
    }
    l(h), requestAnimationFrame(o);
  };
  o();
}
const Fe = {
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: Boolean,
  locale: String,
  from: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: Number,
    default: 2e3
  },
  onFinish: Function
}, Ne = k({
  name: "NumberAnimation",
  props: Fe,
  setup(e) {
    const {
      localeRef: a
    } = Ce("name"), {
      duration: t
    } = e, n = V(e.from), l = u(() => {
      const {
        locale: c
      } = e;
      return c !== void 0 ? c : a.value;
    });
    let r = !1;
    const i = (c) => {
      n.value = c;
    }, o = () => {
      var c;
      n.value = e.to, r = !1, (c = e.onFinish) === null || c === void 0 || c.call(e);
    }, d = (c = e.from, b = e.to) => {
      r = !0, n.value = e.from, c !== b && De({
        from: c,
        to: b,
        duration: t,
        onUpdate: i,
        onFinish: o
      });
    }, s = u(() => {
      var c;
      const p = U(n.value, e.precision).toFixed(e.precision).split("."), w = new Intl.NumberFormat(l.value), _ = (c = w.formatToParts(0.5).find((T) => T.type === "decimal")) === null || c === void 0 ? void 0 : c.value, M = e.showSeparator ? w.format(Number(p[0])) : p[0], S = p[1];
      return {
        integer: M,
        decimal: S,
        decimalSeparator: _
      };
    });
    function h() {
      r || d();
    }
    return x(() => {
      E(() => {
        e.active && d();
      });
    }), Object.assign({
      formattedValue: s
    }, {
      play: h
    });
  },
  render() {
    const {
      formattedValue: {
        integer: e,
        decimal: a,
        decimalSeparator: t
      }
    } = this;
    return [e, a ? t : null, a];
  }
}), Ae = { class: "lc-mark__wrapper__image" }, Ve = ["src"], xe = { class: "lc-mark__wrapper__image__label" }, Ee = { class: "lc-mark__wrapper__rect" }, Re = { class: "lc-mark__wrapper__rect--value" }, je = { class: "lc-mark__wrapper__rect--unit" }, Le = /* @__PURE__ */ k({
  __name: "mark",
  props: {
    value: { default: 0 },
    unit: {},
    model: { default: "default" },
    meta: { default: () => ({}) },
    size: { default: "medium" },
    iconName: { default: "mark" },
    iconSrc: { default: "" },
    label: { default: "" },
    show: { type: Boolean, default: !0 },
    precision: { default: 0 }
  },
  emits: ["mark:click"],
  setup(e, { emit: a }) {
    const t = /* @__PURE__ */ Object.assign({ "./images/mark-rect.png": C, "./images/mark.png": W, "./images/mark2-rect.png": D, "./images/mark2.png": F, "./images/normal.png": N }), n = a, l = u(() => e.iconSrc || t[`./images/${e.iconName}.png`]), r = u(() => ({
      "--mark-icon": `url(${t[`./images/${e.iconName}.png`]})`,
      "--mark-icon-rect": `url(${t[`./images/${e.iconName === "normal" ? "mark2" : e.iconName}-rect.png`]})`
    }));
    function i() {
      n("mark:click", {
        value: e.value,
        meta: e.meta
      });
    }
    return (o, d) => o.show ? (R(), j(
      "div",
      {
        key: 0,
        class: L(["lc-mark", [`lc-mark--${o.model}`, `lc-mark--${o.size}`, `lc-mark--icon-${o.iconName}`]]),
        tabindex: -1,
        style: q(r.value)
      },
      [
        m("div", {
          class: "lc-mark__wrapper",
          onClick: i
        }, [
          m("div", Ae, [
            m("img", {
              class: "lc-mark__wrapper__image__img",
              src: l.value,
              alt: " ",
              draggable: "false"
            }, null, 8, Ve),
            m(
              "span",
              xe,
              P(o.label),
              1
              /* TEXT */
            )
          ]),
          m("div", Ee, [
            O(o.$slots, "default", {}, () => [
              m("span", Re, [
                I(z(Ne), {
                  from: 0,
                  to: o.value,
                  precision: o.precision
                }, null, 8, ["to", "precision"])
              ]),
              m(
                "span",
                je,
                P(o.unit),
                1
                /* TEXT */
              )
            ], !0)
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    )) : $("v-if", !0);
  }
}), qe = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of a)
    t[n] = l;
  return t;
}, Je = /* @__PURE__ */ qe(Le, [["__scopeId", "data-v-609fb009"]]);
export {
  Je as LcMark
};
