define(function () {

    return function () {
        return {
            map: [
                ['red', 'green', 'green', 'green'],
                ['red', 'green', 'green', 'green'],
                ['red', 'green', 'green', 'green'],
                ['red', 'green', 'green', 'green']
            ],
            code: function () {

                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        right()
                    }
                    up()
                }
            },
            x: 0,
            y: 3
        }
    }

})
