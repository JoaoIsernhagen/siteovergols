document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Visualização inicial do mês
    events: [
      // Aqui você pode adicionar os eventos do calendário
      {
        title: 'Partida 1',
        start: '2023-08-09'
      },
      {
        title: 'Partida 2',
        start: '2023-08-15'
      },
      // Adicione mais eventos conforme necessário
    ]
  });

  calendar.render();
});
