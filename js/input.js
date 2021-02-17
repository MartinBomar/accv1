function getOpportunities() {
  domo.get(`/domo/datastores/v1/collections/accv1/documents/`)
    .then(opportunities => {

      const rows = opportunities.map(opportunity => ({id: opportunity.id, ...opportunity.content}));

      const options = {
        editable: true,
        action: updateOpportunity
      };

      drawTable(rows, 'opportunities-table', options)
    });
}

function updateOpportunity(id, document) {
  const newDoc = JSON.stringify({ content: document });
  console.log('Updating Record')
  console.log(newDoc)
  domo.put(`/domo/datastores/v1/collections/accv1/documents/${id}`, { content: document })
    .then(domo.post(`/domo/datastores/v1/export`))
    .then(getOpportunities);
}

function createOpportunity(document) {
  const newDoc2 = JSON.stringify({ content: document });
  console.log('New Record')
  console.log(newDoc2)
  domo.post(`/domo/datastores/v1/collections/accv1/documents/`, { content: document })
    .then(domo.post(`/domo/datastores/v1/export`))
    .then(getOpportunities);
}

function getLeads() {
  return domo.get(`/data/v1/orgnames?fields=concatorg`);
}

(function() {

  const opportunity = {
    Org: new AutoComplete(getLeads),
    Date: '',
    Area: '',
    Type: ''
  };

  addButton(opportunity, createOpportunity)

  getOpportunities();

})();