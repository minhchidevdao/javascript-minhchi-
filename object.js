let promise = new Promise(
    function(resolve, reject){
        // logic
        // Thành công: resolve()
        // thất bại: reject()
    }
)

promise 
    .then(function(){
        console.log('succesully');
    })
    .catch(function(){
        console.log('error');
    })
    .finally( () => {
        console.log('done');
    })