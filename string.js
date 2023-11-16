// string methods
var name = "reza - ali - sina";
var family = "babdi - aslani  - baghi";
// String length
var size = name.length;
// String slice()
var mySlice = name.slice(1, 2);
// String substring()
var mySubstring = name.substring(7, 10); // take a part you choose
// String replace()
var myReplace = name.replace("reza", "jasem");
// String replaceAll() all str
// String toUpperCase()
// String toLowerCase()
// String concat()
const test1 = "hi : ";
var myConcat = test1.concat(" " + name);
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()
var mySplit = name.split("-");

// -------------------------------------------------------------------------------
// str searching

// String indexOf()
var myindexOf = name.indexOf("reza");
// String lastIndexOf()   revers of indexOf()
// String search()  it look likes indexOf but is limited
// String match() number of mach with your choose and then return the value
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// Quotes Inside Strings
var test2 = `hi my name is 'rza' & my work is "web development"`;  


document.getElementById("lbl").innerHTML = test2; // make an arr from you choose for partitions