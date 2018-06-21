const Prh = {

    search(term) {
        const searchUrl = `https://avoindata.prh.fi/tr/v1?totalResults=false&maxResults=100&resultsFrom=0&companyRegistrationFrom=${term}&companyRegistrationTo=${term}`;
        return fetch(searchUrl)
            .then(response => response.json())
            .then(jsonResponse => {
            if (!jsonResponse.results) {
                return [];
            }
            return jsonResponse.results.map(company => {
                return {
                    id: company.businessId,
                    name: company.name
                }
            })
            });
        }

};

export default Prh;