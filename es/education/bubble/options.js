const c = {
  backgroundColor: "transparent",
  animationEasingUpdate: "bounceIn",
  series: [
    {
      type: "graph",
      layout: "none",
      animation: !1,
      label: {
        normal: {
          formatter: function(l) {
            let n = l.data.name;
            const t = n.match(/^([^(]+)(\([^)]+\))?$/);
            if (t) {
              const a = t[1], r = t[2] || "";
              let o = "";
              const i = 6;
              for (let e = 0; e < a.length; e += i)
                o += a.slice(e, e + i), e + i < a.length && (o += `
`);
              n = o + r;
            }
            return "{value|" + l.data.value + `}
{name|` + n + "}";
          },
          show: !0,
          rich: {
            value: {
              fontSize: 40,
              lineHeight: 42,
              align: "center",
              color: "rgb(9, 238, 241)"
            },
            name: {
              fontSize: 14,
              lineHeight: 14,
              align: "center",
              color: "rgb(9, 238, 241)"
            }
          }
        },
        align: "center"
      },
      data: []
    }
  ]
};
export {
  c as baseOptions
};
