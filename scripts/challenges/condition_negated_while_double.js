define(function () {

    return function () {
        return {
            map: [
                ['orange', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'orange', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'orange', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'orange', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'purple']
            ],
            code: function () {
                while (!purple()) {
                    down()
                    right()
                }
            },
            x: 0,
            y: 0
        }
    }

})