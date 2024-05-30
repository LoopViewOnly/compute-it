define(function () {

    return function () {
        return {
            map: [
                ['red',  'blue',  'red'],
                ['blue', 'green', 'blue'],
                ['red',  'blue',  'red']
            ],
            code: function () {
                left()
                if (green()) {
                    up()
                } else if (blue()) {
                    left()
                } else {
                    right()
                }
                down()
            },
            x: 2,
            y: 1
        }
    }

})
