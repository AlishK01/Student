$(document).ready(function () {
    $(".buttons").on("click", function () {
        var currentrow = $(this).closest("tr");
        var col1 = currentrow.find("td:eq(0)").text();
        var col2 = currentrow.find("td:eq(1)").text();
        var col3 = currentrow.find("td:eq(2)").text();
        var col4 = currentrow.find("td:eq(3)").text();
        var col5 = currentrow.find("td:eq(4)").text();
        var col6 = currentrow.find("td:eq(5)").text();
        var col7 = currentrow.find("td:eq(6)").text();
        var sum = Number(col3) + Number(col4) + Number(col5) + Number(col6) + Number(col7);
        var grade;

        var remark;

        var percent = ((sum / 500) * 100);
        if (percent > 80) {
            grade = "A+";
            remark = "Outstanding";
        }
        else if (percent > 70) {
            grade = "A";
            remark = "Excellent";
        }
        else if (percent > 65) {
            grade = "B+";
            remark = "very good";
        }
        else if (percent > 55) {
            grade = "B";
            remark = "good";
        }
        else {
            grade = "fail";
            remark = "Improve";
        }

        $(".result").html(
            `<h2><u>Report card</u></h2>
            Name : ${col2}<br>
            Class :10th C<br>
            Total marks Scored : ${sum}<br>
            Maximum Marks : 500<br>
            Percentage : ${percent}<br>
            Grade : ${grade}<br>
            Remark : ${remark}`
        )
        $("div.result").show();

    })
})
