define(function () {

    return function () {
        return {
            map: [
                ['green', 'purple', 'green', 'purple'],
                ['green', 'purple', 'green', 'purple'],
                ['purple', 'green', 'purple', 'green'],
                ['purple', 'green', 'purple', 'green'],
                ['green', 'red',    'green', 'purple']
            ],
            code: function () {
                while (green()) {
                    right()
                    while (purple()) {
                        down()
                    }
                }
            },
            x: 0,
            y: 0
        }
    }

})
