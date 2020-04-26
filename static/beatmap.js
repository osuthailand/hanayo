// f in the chat for the score leaderboards. you served us well...
(function() {
  var mapset = {};
  setData.ChildrenBeatmaps.forEach(function(diff) {
    mapset[diff.BeatmapID] = diff;
  });
  console.log(mapset);
  function changeDifficulty(bid) {
    // load info
    var diff = mapset[bid];

    // column 2
    $("#cs").html(diff.CS);
    $("#hp").html(diff.HP);
    $("#od").html(diff.OD);
    $("#passcount").html(addCommas(diff.Passcount));
    $("#playcount").html(addCommas(diff.Playcount));

    // column 3
    $("#ar").html(diff.AR);
    $("#stars").html(diff.DifficultyRating.toFixed(2));
    $("#length").html(timeFormat(diff.TotalLength));
    $("#drainLength").html(timeFormat(diff.HitLength));
    $("#bpm").html(diff.BPM);

    // hide mode for non-std maps
    console.log("favMode", favMode);
    if (diff.Mode != 0) {
      currentMode = (currentModeChanged ? currentMode : favMode);
      $("#mode-menu").hide();
    } else {
      currentMode = diff.Mode;
      $("#mode-menu").show();
    }

  }
  window.changeDifficulty = changeDifficulty;
  changeDifficulty(beatmapID);
  $("#diff-menu .item")
    .click(function(e) {
      e.preventDefault();
      $(this).addClass("active");
      beatmapID = $(this).data("bid");
      changeDifficulty(beatmapID);
    });
  $("table.sortable").tablesort();
})();