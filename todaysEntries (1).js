
/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
	// Complete the function
	
	const currentDate = new Date().toISOString().slice(0,10); 
	let names=[];
	entries.forEach(ele=>{
		if(ele.date.slice(0,10) === currentDate){
			names.push(ele.name);
		}
	});
	return names.join(',');
}


module.exports = todaysEntries;
