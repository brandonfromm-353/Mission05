// jQuery for the calculator
$('#btnSubmit').click(function() {
    event.preventDefault()
    let hours = $('#Hours').val()
    const rate = 10
    // Makes sure the users only input a positive number above 0
    if (hours > 0) {
        let total = hours * rate
        $('#Total').val('$' + total.toFixed(2))
    } else if (hours == 0) {
        alert('Please enter a valid number')
    } else {
        alert('Please enter a positive number of hours.')
    }
})

