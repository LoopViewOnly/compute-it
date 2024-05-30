define(function () {

    return function () {
        return {
            map: [
                ['red',   'green', 'green', 'green', 'red'],
                ['green', 'green', 'green', 'green', 'green'],
                ['green', 'green', 'green', 'green', 'red']
            ],
            code: function () {
                for (let i = 0; i < 4; i++) {
                    down()
                    left()
                }
                up()
            },
            x: 4,
            y: 0
        }
    }

})
