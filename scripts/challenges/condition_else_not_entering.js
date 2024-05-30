define(function () {

    return function () {
        return {
            map: [
                ['blue',   'orange', 'blue'],
                ['orange', 'blue',   'orange'],
                ['blue',   'orange', 'blue']
            ],
            code: function () {
                right()
                if (orange()) {
                    up()
                    up()
                } else {
                    left()
                    left()
                }

                down()
            },
            x: 0,
            y: 2
        }
    }

})
