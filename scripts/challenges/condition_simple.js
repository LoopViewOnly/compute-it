define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal'],
                ['normal', 'orange']
            ],
            code: function () {
                right()
                if (orange()) {
                    up()
                }
                left()
            },
            x: 0,
            y: 1
        }
    }

})
