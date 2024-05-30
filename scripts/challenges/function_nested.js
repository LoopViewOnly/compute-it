define(function () {

    return function () {
        return {
            map: [
                ['purple', 'yellow', 'purple', 'yellow', 'purple'],
                ['yellow', 'purple', 'yellow', 'purple', 'yellow'],
                ['purple', 'yellow', 'purple', 'yellow', 'purple']
            ],
            code: function () {
                function shake () {
                    right()
                    left()
                    right()
                    left()
                }

                function dance () {
                    shake()
                    left()
                }

                dance()
                dance()
                dance()
            },
            x: 3,
            y: 1
        }
    }

})
