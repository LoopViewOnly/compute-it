define(function () {

    return function () {
        return {
            map: [
                ['green', 'red', 'green'],
                ['red', 'blue', 'red'],
                ['green', 'red', 'green']
            ],
            code: function () {
                right()
                if (green()) {
                    left()
                } else if (blue()) {
                    down()
                } else {
                    right()
                }
                up()
            },
            x: 0,
            y: 1
        }
    }

})
