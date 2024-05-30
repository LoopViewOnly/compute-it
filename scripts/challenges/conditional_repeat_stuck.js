define(function () {

    return function () {
        return {
            map: [
                ['orange', 'orange', 'orange', 'red',    'orange'],
                ['normal', 'normal', 'normal', 'normal', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 5; i++) {
                    up()
                    if (orange()) {
                        right()
                    }
                    down()
                }
            },
            x: 0,
            y: 1
        }
    }

})