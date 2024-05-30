define(function () {

    return function () {
        return {
            map: [
                ['blue', 'red', 'red'],
                ['blue', 'red', 'red'],
                ['blue', 'blue', 'blue']
            ],
            code: function () {
                up()
                right()
                down()
                left()
            },
            x: 1,
            y: 1
        }
    }

})
