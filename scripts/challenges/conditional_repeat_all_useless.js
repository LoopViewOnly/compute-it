define(function () {

    return function () {
        return {
            map: [
                ['orange', 'normal', 'orange', 'normal', 'orange'],
                ['normal', 'orange', 'normal', 'orange', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 22; i++) {
                    if (orange()) {
                        left()
                    }
                }
                up()
                right()
            },
            x: 2,
            y: 1
        }
    }

})
