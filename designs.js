var height, width, color;

//Reset canvas and reload the page
$('#reload_page').click(function() {
    document.location.reload(true);
});
//defined in html
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})
//function to make grids
function makeGrid(x, y) {
    $('tr').remove();
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //add color to cells in canvas
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}