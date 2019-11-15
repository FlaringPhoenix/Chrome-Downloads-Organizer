// Author: FlaringPhoenix

chrome.downloads.onDeterminingFilename.addListener(function(item, __suggest) {
  function suggest(filename, conflictAction) {
    __suggest({filename: filename, conflictAction: conflictAction, conflict_action: conflictAction});
  }

  var date = new Date();
  var monthNum = date.getMonth() + 1;
  var monthName = {'01':'January', '02':'February', '03':'March', '04':'April', '05':'May', '06':'June', '07':'July', '08':'August', '09':'September', '10':'October', '11':'November', '12':'December'};
  var yearNum = date.getFullYear();

  suggest(yearNum + '/' + monthNum + ' (' + monthName[monthNum] + ')' + '/' + item.filename, 'uniquify');
  return;
});
