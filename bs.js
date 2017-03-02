function binary(arr, val, start, end){
	if(!start){
		start = 0;
	}
	if(!end){
		end = (arr.length-1)
	}
	if(arr[end/2] == val){
		return true
	}
	if(start==end){return false}
	if(val>arr[end/2]){
		start= ((end/2)+1)
	}
	if(val< arr[end/2]){
		end = ((end/2)-1)
	}
 return binary(arr, val, start, end)
}