define(function () {

    return function () {
        return {
            map: [
                ['purple', 'purple', 'purple', 'purple']
            ],
            code: function () {
                toTheRight()

                function toTheRight () {
                    right()
                    right()
                    right()
                }
            },
            x: 0,
            y: 0
        }
    }

})
