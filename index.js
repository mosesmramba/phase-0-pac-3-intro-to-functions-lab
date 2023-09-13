function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
  const cannothear="I can't hear you!";
  const yescanhear="YES INDEED!";
  const loveto="I would love to!";
  if(string.toLowerCase(string)===string){
    return cannothear;
  }
  else if(string.toUpperCase(string)===string){
    return yescanhear;
  }
  else if("Let's have dinner together!"===string){
    return loveto;
  }
}