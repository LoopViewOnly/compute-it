define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'purple', 'yellow', 'purple', 'yellow', 'purple', 'normal'],
                ['normal', 'yellow', 'purple', 'yellow', 'purple', 'yellow', 'normal'],
                ['normal', 'purple', 'yellow', 'purple', 'yellow', 'purple', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal']
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
                function choreography () {
                    if (purple()) {
                        left()
                        dance()
                    } else {
                        right()
                    }
                    right()
                    right()
                }

                for (let i = 0; i < 3; i++) {
                    choreography()
                }
            },
            x: 4,
            y: 2
        }
    }

})