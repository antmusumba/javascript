document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#superheroTable tbody');
    const pageSizeSelect = document.getElementById('pageSize');
    const searchInput = document.getElementById('search');
    
    let allHeroes = [];
    let currentHeroes = [];
    let sortOrder = 'asc'; // Toggle between 'asc' and 'desc'
  
    // Fetch the data and call loadData function
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(response => response.json())
      .then(data => {
        allHeroes = data;
        updateTable();
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Function to update the table with filtered and paginated data
    function updateTable() {
      const pageSize = parseInt(pageSizeSelect.value);
      const query = searchInput.value.toLowerCase();
      
      // Filter data based on search query
      const filteredHeroes = allHeroes.filter(hero =>
        hero.name.toLowerCase().includes(query)
      );
      
      // Paginate data
      const paginatedHeroes = pageSize === 'all'
        ? filteredHeroes
        : filteredHeroes.slice(0, pageSize);
  
      // Clear the table
      tableBody.innerHTML = '';
  
      // Add rows to the table
      paginatedHeroes.forEach(hero => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img src="${hero.images.xs}" alt="${hero.name}"></td>
          <td>${hero.name}</td>
          <td>${hero.biography.fullName}</td>
          <td>${Object.entries(hero.powerstats).map(([key, value]) => `${key}: ${value}`).join(', ')}</td>
          <td>${hero.appearance.race}</td>
          <td>${hero.appearance.gender}</td>
          <td>${hero.appearance.height.join(', ')}</td>
          <td>${hero.appearance.weight.join(', ')}</td>
          <td>${hero.biography.placeOfBirth}</td>
          <td>${hero.biography.alignment}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    // Event listeners for page size and search input
    pageSizeSelect.addEventListener('change', updateTable);
    searchInput.addEventListener('input', updateTable);
  
    // Function to sort the table
    window.sortTable = function(column) {
      const rows = Array.from(tableBody.querySelectorAll('tr'));
      const sortedRows = rows.sort((a, b) => {
        const aText = a.querySelector(`td:nth-child(${getColumnIndex(column)})`).textContent.trim();
        const bText = b.querySelector(`td:nth-child(${getColumnIndex(column)})`).textContent.trim();
  
        // Handle numeric columns like weight
        if (column === 'weight') {
          return sortOrder === 'asc'
            ? parseInt(aText) - parseInt(bText)
            : parseInt(bText) - parseInt(aText);
        }
  
        return sortOrder === 'asc'
          ? aText.localeCompare(bText)
          : bText.localeCompare(aText);
      });
  
      // Append sorted rows to the table
      sortedRows.forEach(row => tableBody.appendChild(row));
  
      // Toggle sort order
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    }
  
    // Helper function to get column index based on column name
    function getColumnIndex(column) {
      const columns = {
        icon: 1,
        name: 2,
        fullName: 3,
        powerstats: 4,
        race: 5,
        gender: 6,
        height: 7,
        weight: 8,
        placeOfBirth: 9,
        alignment: 10
      };
      return columns[column];
    }
  });
  