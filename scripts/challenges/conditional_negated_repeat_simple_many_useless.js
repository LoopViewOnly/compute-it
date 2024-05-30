define(function () {

    return function () {
        return {
            map: [
                ['red', 'red', 'red', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'red', 'red', 'red']
            ],
            code: function () {
                for (let i = 0; i < 33; i++) {
                    if (!red()) {
                        right()
                    }
                }
                up()
            },
            x: 0,
            y: 1
        }
    }

})
