define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'red'],
                ['red', 'normal', 'normal', 'normal', 'normal', 'normal', 'red'],
                ['red', 'normal', 'normal', 'normal', 'normal', 'normal', 'red'],
                ['red', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal']
            ],
            code: function () {
                function ping () {
                    for (let j = 0; j < 4; j++) {
                        left()
                    }
                }

                function pong () {
                    for (let k = 0; k < 4; k++) {
                        right()
                    }
                }

                for (let i = 0; i < 3; i++) {
                    ping()
                    pong()
                }
            },
            x: 5,
            y: 2
        }
    }

})
