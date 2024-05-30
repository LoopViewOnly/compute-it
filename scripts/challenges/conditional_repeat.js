define(function () {

    return function () {
        return {
            map: [
                ['normal', 'orange', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'orange', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'orange', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'orange', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 4; i++) {
                    if (orange()) {
                        down()
                    }
                    right()
                }
            },
            x: 0,
            y: 0
        }
    }

})
