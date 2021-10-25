document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    // initialView: 'dayGridMonth,dayGridWeek',
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,dayGridWeek,dayGridDay,dayGridlist'
    },
    
  });
  calendar.render();

  // $cal2.fullCalendar('changeView', 'agendaDay');
});