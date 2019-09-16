import axios from "axios";

let Api = {
    getShop() {
        return axios.get('http://www.sj-app.net/m/user/shop').then(res=>res.data)
    },
    getCate(){
        return axios.get('http://www.sj-app.net/m/Menu_type/select').then(res=>res.data)
    },
    getCateItem(id) {
        return axios.get('http://www.sj-app.net/m/Menu/select/' + id).then(res=>res.data)
    },
    getGoodsDetailType(){
        return axios.get('http://www.sj-app.net/m/user/type').then(res=>res.data)
    },
    getGoodsDetail(){
        return axios.get('http://www.sj-app.net/m/user/greens').then(res=>res.data)
    },
    getEdit(){
        return axios.get('http://www.sj-app.net/m/shop/order/list/3').then(res=>res.data)
    }
}

export default Api;