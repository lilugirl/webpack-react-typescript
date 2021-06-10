export const dataFetcher=(params)=>{
    console.log('datafetcher params',params);
    return WrapPromise(fetchData(params))
}

const WrapPromise=(promise)=>{
  console.log('wrapromise promise',promise);

  let status="pending";
  let result;
  let suspender=promise.then(r=>{
      status='success';
      result=r;
  },e=>{
      status='error';
      result=e;
  });

  return {
      read(){
          if(status==='pending'){
              throw  suspender;
          } else if(status==='error'){
              throw result;
          } else if(status==='success'){
              return result;
          }
      }
  }
}

const fetchData=(params)=>{
    console.log('fetchdata params',params);
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({
                foo:'bar'
            })
        },3000)
    })
}