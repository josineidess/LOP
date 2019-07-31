var total = prompt('total: ')
e = 0
nums = []
par = []
while(e < total) {
    var n = prompt('num: ')
    nums.push(n)
    e ++
}
for(var r = 0;r < total;r ++) {
    if(r % 2 == 0){
        par.push(nums[r])
    }
}
var tt = par.join(" ")
alert(tt)