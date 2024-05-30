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
                for (let i = 0; i < 3; i++) {
                    down()
                    left()
                }
                for (let j = 0; j < 2; j++) {
                    right()
                    down()
                }
                for (let k = 0; k < 2; k++) {
                    up()
                    right()
                }
            },
            x: 4,
            y: 0
        }
    }

})
