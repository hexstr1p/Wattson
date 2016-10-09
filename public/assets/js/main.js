var vm = new Vue({
    el: 'body',
    data: {
        currentPage: 'home',
        currentSpeed: '50',
        inCarTemp: '10',
        outCarTemp: '9',
        chargePerMile: '270'
    },
    ready: function(){
        this.startCurrentSpeed();
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
        startCurrentSpeed: function(){
            var self = this;
            setTimeout(function(){
                self.$http.get('/getDriveAndLocation').then(function(data) {
                console.log(data)
            })
                self.startCurrentSpeed()
            }, 3000)
        },
    },
})
