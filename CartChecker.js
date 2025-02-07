/**
 * カートチェッカー
 */
class CartChecker{
    /**
     * Creates an instance of CartChecker.
     *
     * @constructor
     */
    constructor() {}
    /**
     * updateCart
     *
     * @param {*} sendData
     * @returns {Promise}
     */
    updateCart(sendData){
        return new Promise((resolve,reject) => {
            const url = window._routes && window._routes.cart_update_url ? window._routes.cart_update_url+'.js' : '/cart/update.js';
            const options = {
                method  : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body    : sendData
            };
            fetch(url,options)
                .then((response)=>{
                    if (!response.ok) {
                        throw new Error();
                    }
                    return response.json();
                })
                .then((json)=>{
                    resolve(json);
                })
                .catch((error)=>{
                    reject(error);
                });
        });
    }
    /**
     * changeCart
     *
     * @param {*} sendData
     * @returns {Promise}
     */
    changeCart(sendData){
        return new Promise((resolve,reject) => {
            const url = window._routes && window._routes.cart_change_url ? window._routes.cart_change_url+'.js' : '/cart/change.js';
            const options = {
                method  : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body    : sendData
            };
            fetch(url,options)
                .then((response)=>{
                    if (!response.ok) {
                        throw new Error();
                    }
                    return response.json();
                })
                .then((json)=>{
                    resolve(json);
                })
                .catch((error)=>{
                    reject(error);
                });
        });
    }
    /**
     * cart.jsからのレスポンスを返す
     *
     * @returns {Promise}
     */
    getCart(){
        return new Promise((resolve,reject) => {
            const url = window._routes && window._routes.cart_url ? window._routes.cart_url+'.js' : '/cart.js';
            fetch(url)
                .then((response)=>{
                    if (!response.ok) {
                        throw new Error();
                    }
                    return response.json();
                })
                .then((json)=>{
                    resolve(json);
                })
                .catch((error)=>{
                    reject(error);
                });
        });
    }
    /**
     * getLineItemPropertiesByLineItemKey
     *
     * @param {String} lineItemKey
     * @returns {Promise}
     */
    getLineItemPropertiesByLineItemKey(lineItemKey){
        return new Promise((resolve,reject) => {
            const url = window._routes && window._routes.cart_url ? window._routes.cart_url+'.js' : '/cart.js';
            fetch(url)
                .then((response)=>{
                    if (!response.ok) {
                        throw new Error();
                    }
                    return response.json();
                })
                .then((json)=>{
                    let i,item;
                    for(i=0;i<json.items.length;i++){
                        item = json.items[i];
                        if(item.key === lineItemKey){
                            resolve(item.properties);        
                            break;
                        }
                    }
                    resolve(null);
                })
                .catch((error)=>{
                    reject(error);
                });
        });
    }
}