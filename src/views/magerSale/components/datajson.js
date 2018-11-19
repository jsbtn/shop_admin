const serchfrom = function(type) {
	type += ""
	var arr = [
			{id:1,name:"提现编号：",form:["numcode"],type="input"},
			{id:2,name:"申请时间：",form:["time1","time2"],type="date"},
			{id:3,name:"手机号：",form:['phone'],type="input"},
			]
	switch (type) {
		case 'examine':
			break;
		case 'drawing':
			arr.push({id:3,name:"审核时间：",form:['date3',"date4"],type="date"})
			break;
		case 'all':
			let info = [
				{id:1,name:"全部"},
				{id:2,name:"待审核"},
				{id:3,name:"待打款"},
				{id:4,name:"审核失败"},
				{id:5,name:"已完成"},
			]
			arr.push({id:3,name:"审核时间：",form:['date3',"date4"],type="date"})
			arr.push({id:4,name:"打款时间：",form:['date5',"date6"],type="date"})
			arr.push({id:5,name:"状态：",form:['state'],type="select",info:info})
			break;
		default:
			break;
	}
	return arr 
}
	
const getData = function(type){
	type += ""
	var arr = [
			{id:1,name:"提现编号：",form:["numcode"],type="input"},
			{id:2,name:"申请时间：",form:["time1","time2"],type="date"},
			{id:3,name:"手机号：",form:['phone'],type="input"},
			]
	switch (type) {
		case 'examine':
			break;
		case 'drawing':
			arr.push({id:3,name:"审核时间：",form:['date3',"date4"],type="date"})
			break;
		case 'all':
			let info = [
				{id:1,name:"全部"},
				{id:2,name:"待审核"},
				{id:3,name:"待打款"},
				{id:4,name:"审核失败"},
				{id:5,name:"已完成"},
			]
			arr.push({id:3,name:"审核时间：",form:['date3',"date4"],type="date"})
			arr.push({id:4,name:"打款时间：",form:['date5',"date6"],type="date"})
			arr.push({id:5,name:"状态：",form:['state'],type="select",info:info})
			break;
		default:
			break;
	}
	return arr 
}

export {
	serchfrom,
	getData
}