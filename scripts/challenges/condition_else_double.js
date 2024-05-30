define(function () {

    return function () {
        return {
            map: [
                ['green', 'orange', 'green'],
                ['orange', 'green', 'orange'],
                ['green', 'orange', 'green']
            ],
            code: function () {
                if (green()) {
                    up()
                    right()
                } else {
                    left()
                }

                if (orange()) {
                    right()
                    right()
                } else {
                    down()
                }
                left()
            },
            x: 1,
            y: 1
        }
    }

})
