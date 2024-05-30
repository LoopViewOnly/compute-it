define(function () {

    return function () {
        return {
            map: [
                ['red', 'red', 'red', 'red']
            ],
            code: function () {
                left()
                toTheRight()

                function toTheRight () {
                    right()
                    right()
                    right()
                }

            },
            x: 1,
            y: 0
        }
    }

})
