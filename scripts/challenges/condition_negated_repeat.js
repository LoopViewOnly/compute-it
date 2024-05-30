define(function () {

    return function () {
        return {
            map: [
                ['orange', 'normal', 'red', 'normal', 'orange'],
                ['normal', 'orange', 'red', 'orange', 'normal'],
                ['red', 'red', 'orange', 'red', 'red'],
                ['normal', 'orange', 'red', 'orange', 'normal'],
                ['orange', 'normal', 'red', 'normal', 'orange']
            ],
            code: function () {
                for (let i = 0; i < 5; i++) {
                    down()
                    down()
                    if (!orange()) {
                        up()
                        up()
                    }
                    left()
                }
            },
            x: 4,
            y: 0
        }
    }

})
