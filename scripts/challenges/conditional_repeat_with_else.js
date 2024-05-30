define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'orange', 'green'],
                ['normal', 'normal', 'orange', 'green', 'normal'],
                ['normal', 'normal', 'red', 'normal', 'normal'],
                ['normal', 'orange', 'green', 'normal', 'normal'],
                ['orange', 'green', 'normal', 'normal', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 8; i++) {
                    if (orange()) {
                        right()
                    } else {
                        up()
                    }
                }
            },
            x: 0,
            y: 4
        }
    }

})
