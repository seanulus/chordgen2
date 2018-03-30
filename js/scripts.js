// BUSINESS LOGIC

function noteMachine(noteInput) {
  var notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
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
  } else if (scaleInput === "Dorian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 4 || i === 6 || i === 8 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  } else if (scaleInput === "Phrygian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 2 || i === 4 || i === 6 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  } else if (scaleInput === "Lydian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 5 || i === 8 || i === 10) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  } else if (scaleInput === "Mixolydian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 6 || i === 8 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  } else if (scaleInput === "Minor") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 4 || i === 6 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  } else if (scaleInput === "Locrian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 2 || i === 4 || i === 7 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
    } return newScale;
  }
}

function chordObject(noteName) {
  this.noteName = noteName;
  this.chords = [];
}

chordObject.prototype.iArray = function() {
  this.chords.push(scaleChords.i);
}

chordObject.prototype.iiArray = function() {
  this.chords.push(scaleChords.ii);
}

chordObject.prototype.iiiArray = function() {
  this.chords.push(scaleChords.iii);
}

chordObject.prototype.ivArray = function() {
  this.chords.push(scaleChords.iv);
}

chordObject.prototype.vArray = function() {
  this.chords.push(scaleChords.v);
}

chordObject.prototype.viArray = function() {
  this.chords.push(scaleChords.vi);
}

chordObject.prototype.viiArray = function() {
  this.chords.push(scaleChords.vii);
}

var scaleChords = {
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

  var i = new chordObject(newScale[0])
  var ii = new chordObject(newScale[1])
  var iii = new chordObject(newScale[2])
  var iv = new chordObject(newScale[3])
  var v = new chordObject(newScale[4])
  var vi = new chordObject(newScale[5])
  var vii = new chordObject(newScale[6])

  if (scaleInput === "Major") {
    i.iArray();
    ii.iiArray();
    iii.iiiArray();
    iv.ivArray();
    v.vArray();
    vi.viArray();
    vii.viiArray();
  } else if (scaleInput === "Dorian") {
    i.iiArray();
    ii.iiiArray();
    iii.ivArray();
    iv.vArray();
    v.viArray();
    vi.viiArray();
    vii.iArray();
  } else if (scaleInput === "Phrygian") {
    i.iiiArray();
    ii.ivArray();
    iii.vArray();
    iv.viArray();
    v.viiArray();
    vi.iArray();
    vii.iiArray();
  } else if (scaleInput === "Lydian") {
    i.ivArray();
    ii.vArray();
    iii.viArray();
    iv.viiArray();
    v.iArray();
    vi.iiArray();
    vii.iiiArray();
  } else if (scaleInput === "Mixolydian") {
    i.vArray();
    ii.viArray();
    iii.viiArray();
    iv.iArray();
    v.iiArray();
    vi.iiiArray();
    vii.ivArray();
  } else if (scaleInput === "Minor") {
    i.viArray();
    ii.viiArray();
    iii.iArray();
    iv.iiArray();
    v.iiiArray();
    vi.ivArray();
    vii.vArray();
  } else if (scaleInput === "Locrian") {
    i.viiArray();
    ii.iArray();
    iii.iiArray();
    iv.iiiArray();
    v.ivArray();
    vi.vArray();
    vii.viArray();
  }

  $(".A, .Bb, .B, .C, .Db, .D, .Eb, .E, .F, .Gb, .G, .Ab").text("")
  $(".A, .Bb, .B, .C, .Db, .D, .Eb, .E, .F, .Gb, .G, .Ab").removeClass("red")

  $("." + i.noteName).text("O");
  $("." + i.noteName).addClass("red");
  $("." + ii.noteName).text("O");
  $("." + iii.noteName).text("O");
  $("." + iv.noteName).text("O");
  $("." + v.noteName).text("O");
  $("." + vi.noteName).text("O");
  $("." + vii.noteName).text("O");

  $("#noteI").text(i.noteName)
  $("#noteII").text(ii.noteName)
  $("#noteIII").text(iii.noteName)
  $("#noteIV").text(iv.noteName)
  $("#noteV").text(v.noteName)
  $("#noteVI").text(vi.noteName)
  $("#noteVII").text(vii.noteName)

  $("#chordsI").text(i.chords)
  $("#chordsII").text(ii.chords)
  $("#chordsIII").text(iii.chords)
  $("#chordsIV").text(iv.chords)
  $("#chordsV").text(v.chords)
  $("#chordsVI").text(vi.chords)
  $("#chordsVII").text(vii.chords)

  $(".results").show();
  });
});
