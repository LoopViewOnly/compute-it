define(function () {

    return function () {
        return {
            map: [
                ['green', 'green', 'green', 'green', 'blue',  'green'],
                ['green',  'blue',  'blue',   'blue',   'blue',  'green'],
                ['green',  'blue',  'green', 'green', 'green', 'green']
            ],
            code: function () {
                up()
                for (let i = 0; i < 9; i++) {
                    right()
                }
                up()
            },
            x: 1,
            y: 2
        }
    }

})
