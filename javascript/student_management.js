

  $(document).ready(function () {


    $('form').prepend('Firstname :');
    $('form').append('<input type="text" id="fnam" placeholder="Enter firstname" name="fname"><br><br>');
    $('form').append('Lastname :');
    $('form').append('<input type="text" id="lnam"  placeholder=" Enter lastname" name="lname"><br><br>');
    $('form').append('Age :');
    $('form').append('<input type="date" id="ag" name="age"><br><br>');
    $('form').append('Email :');
    $('form').append('<input type="text" id="mail"  placeholder="email address" name="email"><br><br>');
    $('form').append('Phone No :');
    $('form').append('<input type="text" id="num"  placeholder="Phone no" name="phone"><br><br>');
    $('form').append('Address :');
    $('form').append('<textarea  id="address1" placeholder="Enter your address" name="address"></textarea><br><br>')

    $('input').css({
      "width": "200",
      "height": "30",
      "padding": "10 4 4 10",

    })

  })
  $("#submit").on('click', function (e) {
    var form = $("#formId");

    $.ajax({
      url: './php/student_management.php',
      type: "POST",
      data: form.serialize(),
      success: function (data) {
        alert("Form Submited Successfully");
      }
    });
  })





