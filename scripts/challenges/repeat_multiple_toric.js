define(function () {

    return function () {
        return {
            map: [
                ['green', 'green', 'green', 'green'],
                ['green', 'green', 'green', 'green'],
                ['green', 'red', 'green', 'green'],
                ['green', 'green', 'green', 'green']
            ],
            code: function () {
                for (let i = 0; i < 4; i++) {
                    down()
                }
                for (let j = 0; j < 4; j++) {
                    right()
                }
                for (let k = 0; k < 4; k++) {
                    up()
                }
                for (let l = 0; l < 4; l++) {
                    left()
                }
            },
            x: 1,
            y: 2
        }
    }

})
