define(function () {

    /* eslint-disable no-negated-condition */
    return function () {
        return {
            map: [
                ['red', 'red', 'red', 'red', 'red'],
                ['orange', 'blue', 'yellow', 'purple', 'green'],
                ['red', 'red', 'red', 'red', 'red'],
                ['green', 'orange', 'blue', 'yellow', 'purple'],
                ['red', 'red', 'red', 'red', 'red']
            ],
            code: function () {
                for (let j = 0; j < 4; j++) {
                    for (let i = 0; i < 4; i++) {
                        if (!red()) {
                            left()
                        } else {
                            right()
                        }
                    }
                    up()
                }
            },
            x: 0,
            y: 4
        }
    }

})