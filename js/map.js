domo.get('/data/v1/accdata')
.then(resultSet => {
const columns = [
          {
            type: DomoPhoenix.DATA_TYPE.STRING,
            name: 'Country',
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
            rows: resultSet.map(row => [row.country, row.countof])
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

        const chart = new DomoPhoenix.Chart(DomoPhoenix.CHART_TYPE.MAP_WORLD, data, options);

        document.getElementById('newMap').appendChild(chart.canvas);

        chart.render();
    });


function Org(){
    let selectedO = document.getElementById("orgs");
    switch (selectedO.value) {
      case 'usa':
        domo.get('/data/v1/accdata')
        .then(resultSet => {
          console.log('USA!')
          const newCols = [
          {
            type: DomoPhoenix.DATA_TYPE.STRING,
            name: 'USState',
            mapping: DomoPhoenix.MAPPING.ITEM
          },
          {
            type: DomoPhoenix.DATA_TYPE.DOUBLE,
            name: 'CountOf',
            mapping: DomoPhoenix.MAPPING.VALUE
          }
          ];
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
          const newData = {
          columns: newCols,
          rows: resultSet.map(row => [row.usstate, row.countof])
          }
          const chart = new DomoPhoenix.Chart(DomoPhoenix.CHART_TYPE.MAP_UNITED_STATES, newData, options);
          document.getElementById('map').removeChild(document.getElementById('newMap'));
          let cnd = document.createElement('div');
          cnd.setAttribute('id', 'newMap');
          document.getElementById('map').appendChild(cnd);
          document.getElementById('newMap').appendChild(chart.canvas);
          chart.render();
        })
        break;
      
      case 'mex':
        domo.get('/data/v1/accdata')
        .then(resultSet => {
          console.log('Mexico!')
          const newCols = [
          {
            type: DomoPhoenix.DATA_TYPE.STRING,
            name: 'Country',
            mapping: DomoPhoenix.MAPPING.ITEM
          },
          {
            type: DomoPhoenix.DATA_TYPE.DOUBLE,
            name: 'CountOf',
            mapping: DomoPhoenix.MAPPING.VALUE
          }
          ];

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
          const newData = {
          columns: newCols,
          rows: resultSet.map(row => [row.country, row.countof])
          }
          const chart = new DomoPhoenix.Chart(DomoPhoenix.CHART_TYPE.MAP_MEXICO, newData, options);
          document.getElementById('map').removeChild(document.getElementById('newMap'));
          let cnd = document.createElement('div');
          cnd.setAttribute('id', 'newMap');
          document.getElementById('map').appendChild(cnd);
          document.getElementById('newMap').appendChild(chart.canvas);
          chart.render();
        })
        break;
      
      case 'nee':
      case 'fra':
      case 'rus':
      case 'uk':
        domo.get('/data/v1/accdata')
        .then(resultSet => {
          console.log('Europe!')
          const newCols = [
          {
            type: DomoPhoenix.DATA_TYPE.STRING,
            name: 'Country',
            mapping: DomoPhoenix.MAPPING.ITEM
          },
          {
            type: DomoPhoenix.DATA_TYPE.DOUBLE,
            name: 'CountOf',
            mapping: DomoPhoenix.MAPPING.VALUE
          }
          ];

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

          const newData = {
          columns: newCols,
          rows: resultSet.map(row => [row.country, row.countof])
          }
          const chart = new DomoPhoenix.Chart(DomoPhoenix.CHART_TYPE.MAP_EUROPE, newData, options);
          document.getElementById('map').removeChild(document.getElementById('newMap'));
          let cnd = document.createElement('div');
          cnd.setAttribute('id', 'newMap');
          document.getElementById('map').appendChild(cnd);
          document.getElementById('newMap').appendChild(chart.canvas);
          chart.render();
        })
        break;
    
      default:
        domo.get('/data/v1/accdata')
        .then(resultSet => {
          console.log('Mexico!')
          const newCols = [
          {
            type: DomoPhoenix.DATA_TYPE.STRING,
            name: 'Country',
            mapping: DomoPhoenix.MAPPING.ITEM
          },
          {
            type: DomoPhoenix.DATA_TYPE.DOUBLE,
            name: 'CountOf',
            mapping: DomoPhoenix.MAPPING.VALUE
          }
          ];

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

          const newData = {
          columns: newCols,
          rows: resultSet.map(row => [row.country, row.countof])
          }
          const chart = new DomoPhoenix.Chart(DomoPhoenix.CHART_TYPE.MAP_WORLD, newData, options);
          document.getElementById('map').removeChild(document.getElementById('newMap'));
          let cnd = document.createElement('div');
          cnd.setAttribute('id', 'newMap');
          document.getElementById('map').appendChild(cnd);
          document.getElementById('newMap').appendChild(chart.canvas);
          chart.render();
        })
        break;
    }
}