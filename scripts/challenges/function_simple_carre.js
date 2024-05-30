define(function () {

    return function () {
        return {
            map: [
                ['blue', 'blue', 'blue', 'normal'],
                ['blue', 'purple', 'purple', 'red'],
                ['blue', 'purple', 'purple', 'red'],
                ['normal', 'red', 'red', 'red']
            ],
            code: function () {
                right()
                square()
                left()
                square()

                function square () {
                    up()
                    right()
                    down()
                    left()
                }
            },
            x: 1,
            y: 2
        }
    }

})
