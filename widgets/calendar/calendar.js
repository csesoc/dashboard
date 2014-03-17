function GCalEvents() {

  // url of json data 
  //   here, instead of pointing to the google calendar link that you'll want to use,
  //   I'm pointing to a static file so that this example doesn't break in the future even
  //   if the calendar it was based upon changes.
  //   you'll want to use a link in the form of: 
  //     http://www.google.com/calendar/feeds/your-calendar@gmail.com/public/full?orderby=starttime&sortorder=ascending&max-results=3&futureevents=true&alt=json
  var calendar_json_url = "https://www.google.com/calendar/feeds/tq9e3mqs87en7plntqjnirossg@group.calendar.google.com/private-b6e77669297ea43f8026e04d0a86e60a/full?orderby=starttime&sortorder=ascending&futureevents=true&alt=json"
  var arr = new Array();

  var weekday=new Array(7);
  weekday[0]="Sun";
  weekday[1]="Mon";
  weekday[2]="Tue";
  weekday[3]="Wed";
  weekday[4]="Thur";
  weekday[5]="Fri";
  weekday[6]="Sat";

  var month=new Array();
  month[0]="January";
  month[1]="February";
  month[2]="March";
  month[3]="April";
  month[4]="May";
  month[5]="June";
  month[6]="July";
  month[7]="August";
  month[8]="September";
  month[9]="October";
  month[10]="November";
  month[11]="December";

  // Get list of upcoming events formatted in JSON
  $.getJSON(calendar_json_url, function(data){
  

    // Parse and render each event
    $.each(data.feed.entry, function(i, item){
      var title;
      if (item.title.$t.indexOf("[CSESoc]") == 0) {
        title = item.title.$t.slice(8);
      } else {
        title = item.title.$t;
      }
      var d = new Date(item.gd$when[0].startTime);
      if(i==1) {
        $("#event2name").html( title );
        $("#event2date").html( weekday[d.getDay()] + ' ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getHours() + ':' + fixtime(d.getMinutes()));
      }
      if(i==2) {
        $("#event1name").html( title );
        $("#event1date").html( weekday[d.getDay()] + ' ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getHours() + ':' + fixtime(d.getMinutes()) );
      }

    });
  });
}

function fixtime(num) {
  if(num<10) {
    num = "" + num + 0;
  }
  return num;
}

GCalEvents();
setInterval(GCalEvents, 10000);