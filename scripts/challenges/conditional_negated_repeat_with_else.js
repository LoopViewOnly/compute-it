define(function () {

    /* eslint-disable no-negated-condition */
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
                    if (!orange()) {
                        up()
                    } else {
                        right()
                    }
                }
            },
            x: 0,
            y: 4
        }
    }

})
