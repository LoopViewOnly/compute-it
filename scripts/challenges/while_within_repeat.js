define(function () {

    return function () {
        return {
            map: [
                ['orange', 'orange', 'orange', 'normal'],
                ['normal', 'purple', 'purple', 'purple'],
                ['orange', 'orange',  'orange', 'normal'],
                ['normal', 'purple', 'purple', 'purple'],
                ['orange', 'orange', 'orange', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 5; i++) {
                    while (orange()) {
                        right()
                    }
                    while (purple()) {
                        left()
                    }
                    down()
                }
            },
            x: 0,
            y: 0
        }
    }

})
