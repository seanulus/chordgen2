// BUSINESS LOGIC

function noteMachine(noteInput) {
  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  function findRoot(note) {
    return note === noteInput; // making sure the inputted note will match with a note in the array
  }
  var rootNoteIndex = notes.findIndex(findRoot); // at this point, it found the index
  var chromaticNotes = [];
  for (var i = rootNoteIndex; i < (rootNoteIndex + 12); i += 1) {
      chromaticNotes.push(notes[i]);
  } return chromaticNotes;
}

function scaleMachine(chromaticNotes, scaleInput) {
  var newScale = [];
  if (scaleInput === "Major") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 6 || i === 8 || i === 10) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
  else if (scaleInput === "Dorian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 4 || i === 6 || i === 8 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
  else if (scaleInput === "Phrygian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 2 || i === 4 || i === 6 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
  else if (scaleInput === "Lydian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 5 || i === 8 || i === 10) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
  else if (scaleInput === "Mixolydian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 6 || i === 8 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
  else if (scaleInput === "Minor") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 4 || i === 6 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
  else if (scaleInput === "Locrian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 2 || i === 4 || i === 7 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
}

// function triadsMachine(scaleInput) {
//     var triadChords = ["maj", "min", "min", "maj", "maj", "min", "dim"];
//     var seventhChords = ["maj7", "min7", "min7", "maj7", "7", "min7", "min7(b5)"];
//     var ninthChords = ["maj9", "min9", "min7(b9)", "maj9", "9", "min9", "min7(b5, b9)"];
//     var eleventhChords = ["maj11", "min11", "min11(b9)", "maj9(#11)", "11", "min11", "min11(b5, b9)"]
//     var thirteenthChords = ["maj13", "min13", "min11 (b9, b13)", "maj13(#11)", "13", "min11(b13)", "min11(b5, b9, b13)"]
//
//     var triads = [];
//
//     if (scaleInput === "Major") {
//     for (var i = 0; i < 12; i += 1) {
//       if (i === 1 || i === 3 || i === 6 || i === 8 || i === 10) { continue; }
//         triads.push(chromaticNotes[i]);
//     } return triads;
//   }

  function newObject(noteName, chordNumber) {
    this.noteName = noteName;
    this.chordNumber = chordNumber;
    this.chords = [];
  }

  function scaleDegreeMachine(newScale) {
    var i = new newObject(newScale[0], "I")
    var ii = new newObject(newScale[1], "II")
    var iii = new newObject(newScale[2], "III")
    var iv = new newObject(newScale[3], "VI")
    var v = new newObject(newScale[4], "V")
    var vi = new newObject(newScale[5], "VI")
    var vii = new newObject(newScale[6], "VII")

    return i, ii, iii, iv, v, vi, vii
  }

  var chordNumber = {
    i: ["maj", "maj7", "maj9", "maj11", "maj13"],
    ii: ["min", "min7", "min9", "min11", "min13"],
    iii: ["min", "min7", "min7(b9)", "min11(b9)", "min11 (b9, b13)"],
    iv: ["maj", "maj7", "maj9", "maj9(#11)", "maj13(#11)"],
    v: ["maj", "7", "9", "11", "13"],
    vi: ["min", "min7", "min9", "min11", "min11(b13)"],
    vii: ["dim", "min7(b5)", "min7(b5, b9)", "min11(b5, b9)", "min11(b5, b9, b13)"]
  }

// UI LOGIC

$(document).ready(function() {
  $("form#notescaleinput").submit(function(event) {
    event.preventDefault();

    var noteInput = $(".note").val();
    var scaleInput = $(".scale").val();

    var chromaticNotes = noteMachine(noteInput)
    var newScale = scaleMachine(chromaticNotes, scaleInput)

    // var triads = triadMachine(scaleInput)
    // var sevenths = seventhsMachine(scaleInput)
    // var ninths = ninthsMachine(scaleInput)
    // var elevenths = eleventhsMachine(scaleInput)
    // var thirteenths = thirteenthsMachine(scaleInput)

    // var scaleObject = scaleDegreeMachine(newScale);

    $("#noteI").text(newScale[0])
    $("#noteII").text(newScale[1])
    $("#noteIII").text(newScale[2])
    $("#noteIV").text(newScale[3])
    $("#noteV").text(newScale[4])
    $("#noteVI").text(newScale[5])
    $("#noteVII").text(newScale[6])

    $(".results").show();

    // $(".results").text(scaleObject);
    });
  });
