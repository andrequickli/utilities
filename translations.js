var floatString = (s)=> parseFloat(/[\d,\.]+/.exec(s)?.[0]?.replace(/,/g,''));
/*input float, number of desired decimal places, Math function for rounding, 'round','floor','ceil'. 'floor' is default if null parameter */
var nthFloat = (n,m,t)=> Math[(t ? t : 'floor')]((n)*parseInt(`1${Array(m).fill().map(i=> '0').reduce((a,b)=> a+b)}`))/parseInt(`1${Array(m).fill().map(i=> '0').reduce((a,b)=> a+b)}`);
var getDecimal = (n,m,t)=> nthFloat((n % 1),(m||3),(t||'round'));





function tryRegExp(s,f){
    try{return new RegExp(s,f)}
    catch(err){
        try{
            return clean4RegX(s)
        }
        catch(r){ 
            console.log([err,r]);
            return /^$/;
        }
    }
}
function clean4RegX(s){
    return s.replace(/\W+/,'\\W+');
}
var subArr = (r, n) => r.reduceRight((a,b,c,d) => [...a, d.splice(0,n)],[]);
function averageOutSubArrWithinChunkDefault(r,n){
    var r_len = r.length;
    var num_chunks = Math.ceil((r_len/n));
    var target;
    for(let i=n; i>=n/2; i--){
        if((r_len/i) > num_chunks) break;
        target = (r_len/i);
    }
    return subArr(r,r_len/target);
}
