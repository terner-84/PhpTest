
$().ready(function(){

    //$.datepicker.setDefaults( $.datepicker.parseDate("yy-mm-dd", "1980-12-20") );
    $('#datepicker').datepicker({altField: "#mydate",
        defaultDate: $.datepicker.parseDate("yy-mm-dd", "2017-9-1"),
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        showWeek: true,
        weekHeader: "KW",
        showButtonPanel: true,
        monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"],
        dayNamesMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
    });
    
    $('#btn').button({icon: "ui-icon-note"});
    $('#tpdata').button({icon: "ui-icon-transfer-e-w", iconPosition: "end"});

    $('#btn').click(function() {
        console.log('Stisknuto');
        $.getJSON('obj.php?par=neco', function(data) {
            console.log($.parseJSON(data));
            $('#obsah').html(data);
        });
    });

    $('#tpdata').click(function() {
        $('#alamo tbody').html('');
        
        $.getJSON('table_supplier.php', function(data) {
            $(function(){
            $.each(data, function(index, item){
                let row = '<tr>';
                //let row;
                /*
                if (index >= 10) {
                    row = '<tr class="tablepager-hide">';
                } else {
                    row = '<tr>';
                }*/
                row += '<td>' + item['name'] + '</td>';
                row += '<td>' + item['surname'] + '</td>';
                row += '<td>' + item['age'] + '</td>';
                $('#alamo tbody').append(row);
            });
            
                $('.tablesorter').tablesorter();
                $('.tablepager').tablepager();
            });
            
            
        });
    });

    $('#db_form').submit(function(event){
        event.preventDefault();
        let $vec_name = $(this), x = $vec_name.find("input[name='vec']").val();
        let posting = $.post('obj.php', {s: x});
        posting.done(function(data){
            console.log('posting done');
            console.log(data);
            let prd = document.createElement('ul');
            
            $.each($.parseJSON(data), function(ix, it) {
                let lix = document.createElement('li');
                lix.innerText = it;
                prd.appendChild(lix);
            });
            let tuje = document.getElementById('obsah');
            tuje.appendChild(prd);
            console.log("data len: " + data.length)
            //$('#obsah').html(data);
        });
        console.log({s: x});
    });
    
});