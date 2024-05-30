define(function () {

    return function () {
        return {
            map: [
                ['normal', 'red', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'red', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'red', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'red', 'normal']
            ],
            code: function () {
                for (let i = 0; i < 3; i++) {
                    if (!red()) {
                        right()
                    }
                    down()
                }
            },
            x: 0,
            y: 0
        }
    }

})
