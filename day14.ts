/*Question40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
console.log("\n \t \t Question40 ")
function make_album(artist_name:string , album_title:string , Tracks?:number) {
let album = {
    artist_name , album_title 
};
if(Tracks){
    album["Tracks"]  = Tracks;
}
return album
}
console.log(make_album("Thriller","Michael Jackson"));
console.log(make_album("Never Mind","Nirvana"));
console.log(make_album("Revolver","The Beatles",14));

/*Question41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array*/
console.log("\n \t \t Question41 ")
let magicians_name : string[] = ["David","John","Chris","Max"]
function show_magicians(magicians_name : string[]){
magicians_name.forEach(magicians_name => {
    console.log(magicians_name);
});
}
show_magicians(magicians_name);

/*Question42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
console.log("\n \t \t Question42 ")
function make_great(magicians_name:string[]){
    for(let i=0; i<magicians_name.length; i++){
        magicians_name[i] = magicians_name[i] + " The Great Magician"
    }
}
make_great(magicians_name)

show_magicians(magicians_name)

