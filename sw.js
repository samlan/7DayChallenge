//console.log('Hello, ServiceWorker!');
self.addEventListener('fetch',(event)=>{
    console.log(event.request)
})