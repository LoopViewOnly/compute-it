define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'red'],
                ['red', 'normal', 'normal', 'normal', 'normal', 'normal', 'red'],
                ['red', 'normal', 'normal', 'normal', 'normal', 'normal', 'red'],
                ['red', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal']
            ],
            code: function () {

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 4; j++) {
                        right()
                    }
                    for (let k = 0; k < 4; k++) {
                        left()
                    }
                }
            },
            x: 1,
            y: 2
        }
    }

})
