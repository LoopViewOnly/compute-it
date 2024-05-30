define(function () {

    return function () {
        return {
            map: [
                ['orange', 'orange', 'orange', 'normal'],
                ['normal', 'purple', 'purple', 'purple'],
                ['orange', 'orange',  'orange', 'normal'],
                ['normal', 'purple', 'purple', 'purple'],
                ['orange', 'orange', 'orange', 'red']
            ],
            code: function () {
                while (!red()) {
                    down()
                    while (orange()) {
                        right()
                    }
                    while (purple()) {
                        left()
                    }
                }
            },
            x: 3,
            y: 0
        }
    }

})
