define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal'],
                ['normal', 'red']
            ],
            code: function () {
                right()
                if (!red()) {
                    up()
                }
                left()
            },
            x: 0,
            y: 1
        }
    }

})
