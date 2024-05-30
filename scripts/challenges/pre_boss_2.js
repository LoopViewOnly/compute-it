define(function () {

    let skullMap = [
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', 'w', 'w', '-', '-', '-', 'x', '-', '-', '-', 'w', 'w', '-'],
        ['-', 'w', 'w', 'w', '-', 'x', 'x', 'x', '-', 'w', 'w', 'w', '-'],
        ['-', '-', 'w', 'w', 'w', 'x', 'x', 'x', 'w', 'w', 'w', '-', '-'],
        ['-', '-', '-', '-', 'x', 'x', 'x', 'x', 'x', '-', '-', '-', '-'],
        ['-', '-', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', '-', '-'],
        ['-', '-', 'x', '-', 'x', 'x', 'x', 'x', 'x', '-', 'x', '-', '-'],
        ['-', '-', '-', '-', '-', 'x', '-', 'x', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', 'x', '-', 'x', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
    ]

    let colorCodes = {
        '-': 'normal',
        x: 'dark',
        o: 'yellow',
        w: 'green'
    }

    return function () {
        return {
            map: skullMap.map(function (line) {
                return line.map(function (code) {
                    return colorCodes[code]
                })
            }),
            code: function () {
                function choice () {
                    if (yellow()) {
                        while (!green()) {
                            left()
                            down()
                        }
                        choice()
                    } else {
                        while (!yellow()) {
                            down()
                            right()
                        }
                    }
                    right()
                }

                choice()
            },
            roundedSquares: true,
            x: 7,
            y: 5
        }
    }

})
