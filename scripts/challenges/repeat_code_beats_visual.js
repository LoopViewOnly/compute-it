define(function () {

    return function () {
        return {
            map: [
                ['green', 'green', 'green', 'green', 'green', 'red',  'green'],
                ['green',  'red',  'red',   'red',   'red',   'red',  'green'],
                ['green',  'red',  'green', 'green', 'green', 'green', 'green']
            ],
            code: function () {
                up()
                for (let i = 0; i < 3; i++) {
                    right()
                }
                up()
            },
            x: 1,
            y: 2
        }
    }

})
