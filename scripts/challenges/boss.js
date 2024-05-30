define(function () {

    let skullMap = [
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', 'x', 'x', 'x', 'x', 'x', '-', '-', '-'],
        ['-', '-', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '-', '-'],
        ['-', 'x', 'x', '_', '_', '_', '_', '_', 'x', 'x', '-'],
        ['-', 'x', '_', 'o', 'o', 'x', 'o', 'o', '_', 'x', '-'],
        ['-', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', '-'],
        ['-', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o', 'x', '-'],
        ['-', 'x', 'x', 'x', 'x', 'W', 'x', 'x', 'x', 'x', '-'],
        ['-', '-', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '-', '-'],
        ['-', '-', '-', 'x', 'x', 'x', 'x', 'x', '-', '-', '-'],
        ['-', '-', '-', 'x', '-', 'x', '-', 'x', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
    ]

    let colorCodes = {
        '-': 'normal',
        x: 'dark',
        o: 'yellow',
        _: 'purple',
        W: 'red'
    }

    return function () {
        return {
            map: skullMap.map(function (line) {
                return line.map(function (code) {
                    return colorCodes[code]
                })
            }),
            code: function () {

                function fall () {
                    while (!red()) {
                        down()
                    }
                }
                function eye () {
                    for (let i = 0; i < 2; i++) {
                        right()
                        if (dark()) {
                            fall()
                        }
                    }
                }

                while (!purple()) {
                    up()
                }

                for (let i = 0; i < 3; i++) {
                    left()
                    if (!purple()) {
                        down()
                        right()
                        eye()
                    }
                }

            },
            roundedSquares: true,
            x: 5,
            y: 7
        }
    }

})
