define(function () {

    return function () {
        return {
            map: [
                ['red', 'green', 'green', 'orange', 'normal', 'normal'],
                ['red', 'green', 'orange', 'normal', 'normal', 'normal'],
                ['red', 'green', 'green', 'green', 'orange', 'normal'],
                ['red', 'orange', 'normal', 'normal', 'normal', 'normal'],
                ['red', 'green', 'green', 'green', 'green', 'orange'],
                ['red', 'green', 'orange', 'normal', 'normal', 'normal']
            ],
            code: function () {

                for (let j = 0; j < 6; j++) {
                    while (!orange()) {
                        right()
                    }
                    while (!red()) {
                        left()
                    }
                    down()
                }

            },
            x: 0,
            y: 0
        }
    }

})
