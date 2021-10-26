$(document).ready(function() {
    // Datatable
    $('#practicesList').DataTable({
        initComplete: function() {
            this.api().columns().every(function() {
                if ($(this.header()).html() != "Name") /* cfa1 */
                    return; /* cfa1 */
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo($("#sort"))
                    .on('change', function() {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function(d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });
            });
        },
        // "sDom": '<"top">rt<"bottom"p><"clear">',
        "sDom": '<"top"f>r<"H"t><"bottom"><"floatRight"p>',
        "ordering": false,
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    });
});