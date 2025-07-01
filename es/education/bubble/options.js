const c = {
    backgroundColor: 'transparent',
    animationEasingUpdate: 'bounceIn',
    series: [
        {
            type: 'graph',
            layout: 'none',
            animation: !1,
            label: {
                normal: {
                    formatter: function (i) {
                        let n = i.data.name
                        const t = n.match(/^([^\(]+)(\([^)]+\))?$/)
                        if (t) {
                            let a = t[1],
                                r = t[2] || '',
                                l = ''
                            const o = 6
                            for (let e = 0; e < a.length; e += o)
                                ((l += a.slice(e, e + o)),
                                    e + o < a.length &&
                                        (l += `
`))
                            n = l + r
                        }
                        return (
                            '{value|' +
                            i.data.value +
                            `}
{name|` +
                            n +
                            '}'
                        )
                    },
                    show: !0,
                    rich: {
                        value: {
                            fontSize: 40,
                            lineHeight: 42,
                            align: 'center',
                            color: '#35DDFF',
                        },
                        name: {
                            fontSize: 12,
                            lineHeight: 11,
                            align: 'center',
                            color: '#35DDFF',
                        },
                    },
                },
                align: 'center',
            },
            data: [],
        },
    ],
}
export { c as baseOptions }
