define(function () {

    return function () {
        return {
            map: [
                ['purple', 'yellow', 'purple', 'yellow', 'purple'],
                ['yellow', 'purple', 'red', 'purple', 'yellow'],
                ['purple', 'yellow', 'purple', 'yellow', 'purple']
            ],
            code: function () {
                function shake () {
                    if (red()) {
                        left()
                    }
                    right()
                    left()
                    right()
                    if (yellow()) {
                        left()
                    }
                }

                function choreography () {
                    shake()
                    left()
                    shake()
                    right()
                }

                choreography()
                choreography()
                choreography()
            },
            x: 3,
            y: 1
        }
    }

})