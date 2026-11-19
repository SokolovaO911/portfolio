// Contact form: the site is static, so "Send message" opens the visitor's email app
// with the message already filled in (addressed to Olha).
(function () {
  var form = document.getElementById('touch-form');
  if (!form) return;
  var note = document.getElementById('touch-note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var d = new FormData(form);
    var subject = 'Message from ' + d.get('name') + ' via portfolio';
    var body = d.get('message') + '\n\n— ' + d.get('name') + ' (' + d.get('email') + ')';
    window.location.href = 'mailto:okulevycholha@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    note.textContent = 'Opening your email app…';
  });
})();
