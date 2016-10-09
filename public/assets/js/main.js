/*! JSON.minify()
    v0.1 (c) Kyle Simpson
    MIT License
*/

(function(global) {
    if (typeof global.JSON == "undefined" || !global.JSON) {
        global.JSON = {};
    }

    global.JSON.minify = function(json) {

        var tokenizer = /"|(\/\*)|(\*\/)|(\/\/)|\n|\r/g,
            in_string = false,
            in_multiline_comment = false,
            in_singleline_comment = false,
            tmp, tmp2, new_str = [],
            ns = 0,
            from = 0,
            lc, rc;

        tokenizer.lastIndex = 0;

        while (tmp = tokenizer.exec(json)) {
            lc = RegExp.leftContext;
            rc = RegExp.rightContext;
            if (!in_multiline_comment && !in_singleline_comment) {
                tmp2 = lc.substring(from);
                if (!in_string) {
                    tmp2 = tmp2.replace(/(\n|\r|\s)*/g, "");
                }
                new_str[ns++] = tmp2;
            }
            from = tokenizer.lastIndex;

            if (tmp[0] == "\"" && !in_multiline_comment && !in_singleline_comment) {
                tmp2 = lc.match(/(\\)*$/);
                if (!in_string || !tmp2 || (tmp2[0].length % 2) == 0) { // start of string with ", or unescaped " character found to end string
                    in_string = !in_string;
                }
                from--; // include " character in next catch
                rc = json.substring(from);
            } else if (tmp[0] == "/*" && !in_string && !in_multiline_comment && !in_singleline_comment) {
                in_multiline_comment = true;
            } else if (tmp[0] == "*/" && !in_string && in_multiline_comment && !in_singleline_comment) {
                in_multiline_comment = false;
            } else if (tmp[0] == "//" && !in_string && !in_multiline_comment && !in_singleline_comment) {
                in_singleline_comment = true;
            } else if ((tmp[0] == "\n" || tmp[0] == "\r") && !in_string && !in_multiline_comment && in_singleline_comment) {
                in_singleline_comment = false;
            } else if (!in_multiline_comment && !in_singleline_comment && !(/\n|\r|\s/.test(tmp[0]))) {
                new_str[ns++] = tmp[0];
            }
        }
        new_str[ns++] = rc;
        return new_str.join("");
    };
})(this);
var removeComment = new RegExp("(\\\/\\*[\\w\\\'\\s\\r\\n\\*]*\\*\\\/)|(\\\/\\\/[\\w\\s\\\']*)|(\\<![\\-\\-\\s\\w\\>\\\/]*\\>)")
var vm = new Vue({
    el: 'body',
    data: {
        currentPage: 'home',
        currentSpeed: '50',
        inCarTemp: '10',
        outCarTemp: '9',
        chargePerMile: '270'
    },
    ready: function() {
        this.startCurrentSpeed();
        //this.startInCarTemp();
    },
    methods: {
        honk: function() {
            this.$http.post('/wakeCar').then(function(data) {
                console.log(data)
            })
        },
        flash: function() {},
        cancelTrip: function() {
            swal({
                title: 'Are you sure?',
                text: 'You wont be able to revert this!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Stop the trip!'
            }).then(function() {
                swal(
                    'Cancelled!',
                    'Your trip has been cancelled.',
                    'success'
                );
            })
        },
        startCurrentSpeed: function() {
            var self = this;
            setTimeout(function() {
                self.$http.get('/getDriveAndLocation').then(function(data) {
                    console.log(JSON.parse(JSON.minify(data.body)).response)
                })
                self.startCurrentSpeed()
            }, 3000)
        },
        startInCarTemp: function() {
            var self = this;
            setTimeout(function() {
                self.$http.get('/getTemp').then(function(data) {
                    console.log(data.body)
                })
            })
        }
    },
})
