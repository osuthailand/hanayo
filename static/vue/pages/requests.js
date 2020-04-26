Vue.use(window.VueTimeago);
new Vue({
    el: "#requests"+userID,
    delimiters: ["<%", "%>"],
    data(){
        return{
            load: true,
            requests: [],
            userID: userID,
            showComment: false
        }
    },
    created(){
      this.getRequests();
    },
    methods:{
        getRequests: function() {
            var vm = this;
            this.load = true;
            this.$axios.get("https://ainu.pw/api/kurai/beatmaps/requests", { params:{
                id: this.userID,
            }}).then(function(response){
                vm.requests = response.data.data;
                vm.load = false;
            });
        },
        formatDate: function(unix){
            var date = new Date(unix * 1000);
            return date.toLocaleString();
        }
    }
});
