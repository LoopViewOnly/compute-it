define(function () {

    return function () {
        return {
            map: [
                ['orange', 'orange', 'orange', 'normal'],
                ['normal', 'blue', 'blue', 'blue'],
                ['orange', 'orange',  'orange', 'normal'],
                ['normal', 'blue', 'blue', 'blue'],
                ['orange', 'orange', 'orange', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 19; i++) {
                    if (orange()) {
                        right()
                    } else if (blue()) {
                        left()
                    } else {
                        down()
                    }
                }
            },
            x: 0,
            y: 0
        }
    }

})
