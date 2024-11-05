jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({ until: new Date(2024, 10, 6, 8) }); // year, month, date, hour
  });
});
