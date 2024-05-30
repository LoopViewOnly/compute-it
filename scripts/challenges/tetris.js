define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'red',    'normal', 'normal', 'normal'],
                ['normal', 'red',    'red',    'normal', 'normal', 'normal'],
                ['normal', 'red',    'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'orange', 'normal', 'normal'],
                ['yellow', 'yellow', 'orange', 'orange', 'orange', 'purple'],
                ['yellow', 'yellow', 'green',  'purple', 'purple', 'purple'],
                ['red',    'red',    'green',  'green',  'yellow', 'yellow'],
                ['normal', 'red',    'red',    'green',  'yellow', 'yellow']
            ],
            code: function () {

                while (!purple()) {
                    if (red()) {
                        left()
                    } else if (green()) {
                        up()
                    } else if (orange()) {
                        right()
                    } else if (yellow()) {
                        down()
                        right()
                    } else {
                        down()
                    }
                }
            },
            roundedSquares: true,
            x: 2,
            y: 1
        }
    }

})
