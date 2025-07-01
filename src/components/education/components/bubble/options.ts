export const baseOptions = {
    backgroundColor: 'transparent',
    animationEasingUpdate: 'bounceIn',
    series: [
        {
            type: 'graph',
            layout: 'none',
            animation: false,
            label: {
                normal: {
                    formatter: function (params) {
                        let name = params.data.name
                        const match = name.match(/^([^(]+)(\([^)]+\))?$/)
                        if (match) {
                            const desc = match[1]
                            const unit = match[2] || ''
                            let result = ''
                            const wrapLen = 6
                            for (let i = 0; i < desc.length; i += wrapLen) {
                                result += desc.slice(i, i + wrapLen)
                                if (i + wrapLen < desc.length) result += '\n'
                            }
                            name = result + unit
                        }
                        return (
                            '{value|' +
                            params.data.value +
                            '}\n{name|' +
                            name +
                            '}'
                        )
                    },
                    show: true,
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
