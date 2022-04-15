Notification.requestPermission(function(result) {
    console.log(result);
  });


var img = '/to-do-notifications/img/icon-128.png';
var text = 'HEY! Your task "' + "title" + '" is now overdue.';
var notification = new Notification('To do list', { body: text, icon: img });

notification.onshow = function() {
    console.log("noti")
    setTimeout(function() {
        notification.close();
    }, 10000);
    }

    