define(function () {

    return function () {
        return {
            map: [
                ['green', 'normal', 'normal', 'normal', 'normal', 'green'],
                ['normal', 'red', 'purple', 'red', 'purple', 'normal'],
                ['normal', 'purple', 'normal', 'normal', 'red', 'normal'],
                ['normal', 'red', 'normal', 'normal', 'purple', 'normal'],
                ['normal', 'purple', 'red', 'purple', 'red', 'normal'],
                ['green', 'normal', 'normal', 'normal', 'normal', 'green']
            ],
            code: function () {
                while (purple()) {
                    for (let i = 0; i < 3; i++) {
                        right()
                    }
                    up()
                }
                left()
            },
            x: 1,
            y: 4
        }
    }

})