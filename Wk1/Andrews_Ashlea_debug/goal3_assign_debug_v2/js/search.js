/*
Ashlea Andrews
August 9, 2015
Week #1 :: { Homework } - ANALYZE Buggy Search v1
 */


// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	//Establish variables for Results and the Search input
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	//Validate the search query with a function,
	var validqte == function(query){
		
		// Trim whitespace from start and end of search query
		//while the first character of the line is just a space, query is equaled to the second through
		//last characters
		while(query.charAt(0) = " "){
			query = query.substring(1, query.length);
		};
		//while the second to last character is a space, query is equaled to the first through second
		//to last character in the string
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
			//if the length of the search is less than 3 characters, program will alert the user
		if(query.length < 3){
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return; //return the information
		};
		
		search(query); //call function
	};
	
	// Finds search matches
	var search = function(query)
		
		// split the user's search query string into an array of letters
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		//Starting with the first item in the array, as long as the current item is
		//less than the length of the array, the loop will run, and increment by one
		//each time.
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
			//Display a message to the user that no matches were found.
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
			//Display results to the user.
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		//will increment each time, until the length of the array is reached.
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();