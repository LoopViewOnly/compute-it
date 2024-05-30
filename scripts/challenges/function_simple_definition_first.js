define(function () {

    return function () {
        return {
            map: [
                ['green', 'green', 'green', 'green']
            ],
            code: function () {
                function toTheRight () {
                    right()
                    right()
                    right()
                }

                left()
                toTheRight()
            },
            x: 1,
            y: 0
        }
    }

})
