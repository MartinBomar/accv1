domo.get('/data/v1/accdata')
.then(resultSet => {
const columns = [
          {
            type: DomoPhoenix.DATA_TYPE.STRING,
            name: 'Date',
            mapping: DomoPhoenix.MAPPING.ITEM
          },
          {
            type: DomoPhoenix.DATA_TYPE.DOUBLE,
            name: 'CountOf',
            mapping: DomoPhoenix.MAPPING.VALUE
          }
        ];

        const data = {
            columns: columns,
            rows: resultSet.map(row => [row.date, row.countof])
        }

        const customColors = ['#f1592a', '#c9252c', '#b42127'];
        const customProperties = {
          data_label_format_text : '%_VALUE',
          datalabel_font_size : 'Larger',
          datalabel_fill : 'true',
          datalabel_fill_color : '#000',
          datalabel_font_clr : '#fff'
        };
        const options = {
          width: 800,
          height: 550,
          colors: customColors,
          properties: customProperties
        };

        const chart = new DomoPhoenix.Chart(DomoPhoenix.CHART_TYPE.CALENDAR, data, options);

        document.getElementById('cal').appendChild(chart.canvas);

        chart.render();
    });