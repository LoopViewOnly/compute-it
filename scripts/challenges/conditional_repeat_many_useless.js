define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'orange', 'orange', 'orange'],
                ['orange', 'orange', 'orange', 'normal', 'normal', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 33; i++) {
                    if (orange()) {
                        right()
                    }
                }
                up()
                left()
            },
            x: 0,
            y: 1
        }
    }

})