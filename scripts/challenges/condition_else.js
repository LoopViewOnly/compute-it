define(function () {

    return function () {
        return {
            map: [
                ['orange', 'blue', 'orange'],
                ['blue', 'orange', 'blue'],
                ['orange', 'blue', 'orange']
            ],
            code: function () {
                left()
                if (orange()) {
                    left()
                } else {
                    up()
                }
            },
            x: 2,
            y: 2
        }
    }

})
