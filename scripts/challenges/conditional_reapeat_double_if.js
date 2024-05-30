define(function () {

    return function () {
        return {
            map: [
                ['orange', 'green'],
                ['orange', 'green'],
                ['normal', 'normal'],
                ['orange', 'green'],
                ['orange', 'green']
            ],
            code: function () {

                for (let i = 0; i < 5; i++) {
                    if (orange()) {
                        right()
                    }
                    if (green()) {
                        left()
                    }
                    down()
                }
            },
            x: 1,
            y: 0
        }
    }

})
