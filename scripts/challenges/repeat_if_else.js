define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'red', 'normal', 'normal'],
                ['normal', 'red', 'red', 'red', 'normal'],
                ['green', 'orange', 'orange', 'orange', 'blue'],
                ['green', 'green', 'orange', 'blue', 'blue'],
                ['green', 'normal', 'normal', 'normal', 'blue']
            ],
            code: function () {
                for (let i = 0; i < 5; i++) {
                    if (orange()) {
                        left()
                    } else {
                        right()
                    }
                    up()
                }
            },
            x: 1,
            y: 4
        }
    }

})
