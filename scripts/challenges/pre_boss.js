define(function () {

    let challengeMap = [
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', 'x', '-', '-', '-', 'x', '-', '-', '-'],
        ['-', '-', '-', '-', 'x', '-', 'x', '-', '-', '-', '-'],
        ['-', '-', '-', 'x', 'x', 'x', 'x', 'x', '-', '-', '-'],
        ['-', '-', 'x', 'x', 'o', 'x', 'o', 'x', 'x', '-', '-'],
        ['-', '-', '-', 'x', 'x', 'x', 'x', 'x', '-', '-', '-'],
        ['-', '-', 'x', '-', 'x', '-', 'x', '-', 'x', '-', '-'],
        ['-', 'x', '-', '-', '-', '-', '-', '-', '-', 'x', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
    ]

    let colorCodes = {
        '-': 'normal',
        x: 'dark',
        o: 'red'
    }

    return function () {
        return {
            map: challengeMap.map(function (line) {
                return line.map(function (code) {
                    return colorCodes[code]
                })
            }),
            code: function () {
                function choice () {
                    if (dark()) {
                        fromBelow()
                    }
                    if (red()) {
                        fromAbove()
                    }
                }
                function fromAbove () {
                    up()
                    right()
                    right()
                    down()
                    left()
                    choice()
                }
                function fromBelow () {
                    down()
                    right()
                    right()
                    up()
                    left()
                    choice()
                }
                choice()
            },
            roundedSquares: true,
            x: 2,
            y: 4
        }
    }

})
