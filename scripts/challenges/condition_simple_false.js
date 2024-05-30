define(function () {

    return function () {
        return {
            map: [
                ['normal', 'orange', 'normal', 'orange'],
                ['red', 'normal', 'red', 'normal'],
                ['normal', 'orange', 'normal', 'orange']
            ],
            code: function () {
                right()
                if (orange()) {
                    up()
                }
                right()
                if (orange()) {
                    up()
                }
                right()
            },
            x: 0,
            y: 2
        }
    }

})
