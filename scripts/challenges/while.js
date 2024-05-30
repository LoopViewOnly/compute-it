define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'normal', 'yellow', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'yellow', 'red',    'yellow', 'normal'],
                ['purple', 'purple', 'purple', 'purple', 'yellow', 'purple', 'purple']
            ],
            code: function () {
                while (purple()) {
                    right()
                }
                up()
            },
            x: 0,
            y: 2
        }
    }

})