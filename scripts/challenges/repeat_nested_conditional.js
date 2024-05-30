define(function () {

    return function () {
        return {
            map: [
                ['normal', 'green', 'green', 'green'],
                ['orange', 'green', 'green', 'green'],
                ['normal', 'green', 'green', 'green'],
                ['orange', 'green', 'green', 'green'],
                ['normal', 'green', 'green', 'green']
            ],
            code: function () {

                for (let i = 0; i < 4; i++) {
                    if (orange()) {
                        for (let j = 0; j < 4; j++) {
                            right()
                        }
                    }
                    up()
                }
            },
            x: 0,
            y: 4
        }
    }

})
