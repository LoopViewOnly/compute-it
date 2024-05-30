define(function () {

    return function () {
        return {
            map: [
                ['green', 'green', 'purple', 'green'],
                ['purple', 'green', 'green', 'green'],
                ['green', 'green', 'green', 'purple'],
                ['green', 'purple', 'green', 'green'],
                ['green', 'green', 'green', 'red']
            ],
            code: function () {
                while (green()) {
                    right()
                    if (purple()) {
                        down()
                    }
                }
            },
            x: 0,
            y: 0
        }
    }

})
