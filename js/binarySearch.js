function binarySearch(arr, l, r, x)
{
    while(l <= r)
    {
        let m = Math.floor(l + (r-l)/2);
        //Kiểm tra nếu x bằng với arr[m]
        if(arr[m] === x)
        {
            return m;
        }
        //Nếu x lớn hơn arr[m], di chuyển lên phía bên phải của mảng
        if(arr[m] < x)
        {
            l = + 1;
        }
        else
            r = m - 1;
    }
    //Trả về -1 nếu không có phần tử tìm kiếm ở trong mảng
    return -1;
}
let arr = [2,5,8,12,16,23,38,56,72,91];
let x = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n-1, x);
(result === -1)
    ? console.log("Phần tử không tồn tại trong mảng")
    : console.log("Phần tử tồn tại trong mảng tại vị trí " + result);