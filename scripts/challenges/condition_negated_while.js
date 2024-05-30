define(function () {

    return function () {
        return {
            map: [
                ['purple', 'purple', 'purple', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'purple', 'purple', 'purple']
            ],
            code: function () {
                while (!purple()) {
                    right()
                }
                up()
            },
            x: 0,
            y: 1
        }
    }

})