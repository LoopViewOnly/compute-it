define(function () {

    return function () {
        return {
            map: [
                ['normal', 'orange', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'orange', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'orange', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'orange', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'red',    'normal']
            ],
            code: function () {
                for (let i = 0; i < 5; i++) {
                    right()
                    if (orange()) {
                        down()
                        down()
                    }
                }
            },
            x: 0,
            y: 0
        }
    }

})
