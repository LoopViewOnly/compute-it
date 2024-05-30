define(function () {

    return function () {
        return {
            map: [
                ['blue', 'blue', 'blue', 'blue', 'red',  'blue'],
                ['blue',  'red',  'red', 'red',  'red',  'blue'],
                ['blue',  'red', 'blue', 'blue', 'blue', 'blue']
            ],
            code: function () {
                up()
                right()
                right()
                right()
                right()
                up()
            },
            x: 1,
            y: 2
        }
    }

})
