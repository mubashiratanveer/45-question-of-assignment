"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title, tracks };
    // if(tracks) {
    //     album[`tracks`]=tracks;
    // }
    return album;
}
console.log(make_album("artist one", "first album"));
console.log(make_album("artist two", "second album"));
console.log(make_album("artist three", "third album", 12));
