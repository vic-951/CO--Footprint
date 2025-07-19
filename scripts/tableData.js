let sortKey = null;
let sortDirection = 1; // 1 = aufsteigend, -1 = absteigend

let data = [
  {
    "country": "Japan",
    "company": "GlobalChem Inc.",
    "value": 8.88,
    "year": 2024
  },
  {
    "country": "Kanada",
    "company": "SolarTech",
    "value": 2.63,
    "year": 2022
  },
  {
    "country": "Indien",
    "company": "GlobalChem Inc.",
    "value": 2.99,
    "year": 2024
  },
  {
    "country": "Japan",
    "company": "AutoMobil SE",
    "value": 6.5,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "DataNet Solutions",
    "value": 13.95,
    "year": 2022
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 7.78,
    "year": 2023
  },
  {
    "country": "Indien",
    "company": "GreenFuel Corp.",
    "value": 0.9,
    "year": 2022
  },
  {
    "country": "Kanada",
    "company": "GreenFuel Corp.",
    "value": 4.71,
    "year": 2023
  },
  {
    "country": "China",
    "company": "DataNet Solutions",
    "value": 2.95,
    "year": 2022
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 10.49,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "EcoPower AG",
    "value": 12.68,
    "year": 2021
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 8.05,
    "year": 2022
  },
  {
    "country": "Deutschland",
    "company": "EcoPower AG",
    "value": 12.93,
    "year": 2025
  },
  {
    "country": "USA",
    "company": "SolarTech",
    "value": 2.67,
    "year": 2022
  },
  {
    "country": "China",
    "company": "AutoMobil SE",
    "value": 14.14,
    "year": 2022
  },
  {
    "country": "Deutschland",
    "company": "Stahl GmbH",
    "value": 13.24,
    "year": 2025
  },
  {
    "country": "Brasilien",
    "company": "GlobalChem Inc.",
    "value": 11.71,
    "year": 2023
  },
  {
    "country": "USA",
    "company": "AutoMobil SE",
    "value": 14.86,
    "year": 2023
  },
  {
    "country": "Kanada",
    "company": "EcoPower AG",
    "value": 10.2,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "GreenFuel Corp.",
    "value": 8.15,
    "year": 2024
  },
  {
    "country": "Indien",
    "company": "EcoPower AG",
    "value": 9.89,
    "year": 2023
  },
  {
    "country": "Japan",
    "company": "AutoMobil SE",
    "value": 12.63,
    "year": 2022
  },
  {
    "country": "Kanada",
    "company": "DataNet Solutions",
    "value": 6.99,
    "year": 2025
  },
  {
    "country": "China",
    "company": "SolarTech",
    "value": 3.95,
    "year": 2021
  },
  {
    "country": "Japan",
    "company": "GreenFuel Corp.",
    "value": 3.66,
    "year": 2025
  },
  {
    "country": "Frankreich",
    "company": "DataNet Solutions",
    "value": 1.58,
    "year": 2024
  },
  {
    "country": "China",
    "company": "AutoMobil SE",
    "value": 4.56,
    "year": 2025
  },
  {
    "country": "Brasilien",
    "company": "SolarTech",
    "value": 5.86,
    "year": 2023
  },
  {
    "country": "Indien",
    "company": "EcoPower AG",
    "value": 8.09,
    "year": 2025
  },
  {
    "country": "Frankreich",
    "company": "GlobalChem Inc.",
    "value": 2.15,
    "year": 2022
  },
  {
    "country": "Indien",
    "company": "EcoPower AG",
    "value": 4.2,
    "year": 2023
  },
  {
    "country": "Frankreich",
    "company": "GlobalChem Inc.",
    "value": 3.47,
    "year": 2022
  },
  {
    "country": "China",
    "company": "SolarTech",
    "value": 8.1,
    "year": 2023
  },
  {
    "country": "Indien",
    "company": "SolarTech",
    "value": 6.1,
    "year": 2025
  },
  {
    "country": "Japan",
    "company": "Stahl GmbH",
    "value": 2.87,
    "year": 2022
  },
  {
    "country": "Kanada",
    "company": "Stahl GmbH",
    "value": 6.19,
    "year": 2023
  },
  {
    "country": "Kanada",
    "company": "Stahl GmbH",
    "value": 14.36,
    "year": 2023
  },
  {
    "country": "Deutschland",
    "company": "EcoPower AG",
    "value": 2.95,
    "year": 2023
  },
  {
    "country": "Kanada",
    "company": "DataNet Solutions",
    "value": 10.62,
    "year": 2025
  },
  {
    "country": "Japan",
    "company": "GlobalChem Inc.",
    "value": 2.78,
    "year": 2022
  },
  {
    "country": "Indien",
    "company": "Stahl GmbH",
    "value": 2.69,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "Stahl GmbH",
    "value": 2.96,
    "year": 2023
  },
  {
    "country": "China",
    "company": "GreenFuel Corp.",
    "value": 6.89,
    "year": 2021
  },
  {
    "country": "Japan",
    "company": "AutoMobil SE",
    "value": 4.21,
    "year": 2021
  },
  {
    "country": "USA",
    "company": "SolarTech",
    "value": 1.16,
    "year": 2025
  },
  {
    "country": "Deutschland",
    "company": "AutoMobil SE",
    "value": 7.28,
    "year": 2021
  },
  {
    "country": "Deutschland",
    "company": "GreenFuel Corp.",
    "value": 12.9,
    "year": 2025
  },
  {
    "country": "China",
    "company": "EcoPower AG",
    "value": 6.36,
    "year": 2025
  },
  {
    "country": "Japan",
    "company": "GreenFuel Corp.",
    "value": 4.1,
    "year": 2022
  },
  {
    "country": "Indien",
    "company": "DataNet Solutions",
    "value": 3.56,
    "year": 2025
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 13.19,
    "year": 2023
  },
  {
    "country": "Kanada",
    "company": "Stahl GmbH",
    "value": 3.67,
    "year": 2024
  },
  {
    "country": "Brasilien",
    "company": "SolarTech",
    "value": 4.17,
    "year": 2021
  },
  {
    "country": "Brasilien",
    "company": "AutoMobil SE",
    "value": 4.98,
    "year": 2024
  },
  {
    "country": "Brasilien",
    "company": "Stahl GmbH",
    "value": 2.31,
    "year": 2025
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 8.13,
    "year": 2022
  },
  {
    "country": "Kanada",
    "company": "AutoMobil SE",
    "value": 1.52,
    "year": 2021
  },
  {
    "country": "Frankreich",
    "company": "AutoMobil SE",
    "value": 9.98,
    "year": 2024
  },
  {
    "country": "Kanada",
    "company": "EcoPower AG",
    "value": 8.53,
    "year": 2022
  },
  {
    "country": "Frankreich",
    "company": "SolarTech",
    "value": 6.61,
    "year": 2022
  },
  {
    "country": "Kanada",
    "company": "SolarTech",
    "value": 7.21,
    "year": 2023
  },
  {
    "country": "Frankreich",
    "company": "EcoPower AG",
    "value": 1.48,
    "year": 2025
  },
  {
    "country": "China",
    "company": "AutoMobil SE",
    "value": 5.88,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "SolarTech",
    "value": 11.98,
    "year": 2021
  },
  {
    "country": "Indien",
    "company": "GreenFuel Corp.",
    "value": 11.32,
    "year": 2025
  },
  {
    "country": "Indien",
    "company": "GlobalChem Inc.",
    "value": 4.81,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "DataNet Solutions",
    "value": 3.37,
    "year": 2021
  },
  {
    "country": "Frankreich",
    "company": "Stahl GmbH",
    "value": 5.35,
    "year": 2023
  },
  {
    "country": "Indien",
    "company": "AutoMobil SE",
    "value": 4.81,
    "year": 2021
  },
  {
    "country": "USA",
    "company": "EcoPower AG",
    "value": 6.09,
    "year": 2025
  },
  {
    "country": "Deutschland",
    "company": "SolarTech",
    "value": 7.46,
    "year": 2023
  },
  {
    "country": "Indien",
    "company": "EcoPower AG",
    "value": 4.22,
    "year": 2023
  },
  {
    "country": "Deutschland",
    "company": "Stahl GmbH",
    "value": 14.99,
    "year": 2022
  },
  {
    "country": "Indien",
    "company": "EcoPower AG",
    "value": 3.49,
    "year": 2022
  },
  {
    "country": "China",
    "company": "Stahl GmbH",
    "value": 11.63,
    "year": 2025
  },
  {
    "country": "Brasilien",
    "company": "EcoPower AG",
    "value": 7.67,
    "year": 2024
  },
  {
    "country": "China",
    "company": "DataNet Solutions",
    "value": 6.72,
    "year": 2025
  },
  {
    "country": "Japan",
    "company": "DataNet Solutions",
    "value": 14.18,
    "year": 2023
  },
  {
    "country": "Brasilien",
    "company": "SolarTech",
    "value": 2.08,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 9.61,
    "year": 2025
  },
  {
    "country": "Japan",
    "company": "SolarTech",
    "value": 13.53,
    "year": 2022
  },
  {
    "country": "Deutschland",
    "company": "DataNet Solutions",
    "value": 11.16,
    "year": 2025
  },
  {
    "country": "China",
    "company": "GlobalChem Inc.",
    "value": 12.41,
    "year": 2024
  },
  {
    "country": "Deutschland",
    "company": "GlobalChem Inc.",
    "value": 4.27,
    "year": 2022
  },
  {
    "country": "Indien",
    "company": "SolarTech",
    "value": 9.54,
    "year": 2025
  },
  {
    "country": "China",
    "company": "Stahl GmbH",
    "value": 9.49,
    "year": 2023
  },
  {
    "country": "Kanada",
    "company": "DataNet Solutions",
    "value": 1.61,
    "year": 2024
  },
  {
    "country": "Kanada",
    "company": "GlobalChem Inc.",
    "value": 6.59,
    "year": 2021
  },
  {
    "country": "USA",
    "company": "Stahl GmbH",
    "value": 7.76,
    "year": 2021
  },
  {
    "country": "Indien",
    "company": "GreenFuel Corp.",
    "value": 13.29,
    "year": 2023
  },
  {
    "country": "Indien",
    "company": "Stahl GmbH",
    "value": 12.12,
    "year": 2025
  },
  {
    "country": "Indien",
    "company": "Stahl GmbH",
    "value": 13.57,
    "year": 2022
  },
  {
    "country": "USA",
    "company": "AutoMobil SE",
    "value": 12.01,
    "year": 2024
  },
  {
    "country": "China",
    "company": "SolarTech",
    "value": 4.83,
    "year": 2021
  },
  {
    "country": "China",
    "company": "GlobalChem Inc.",
    "value": 7.35,
    "year": 2023
  },
  {
    "country": "USA",
    "company": "SolarTech",
    "value": 9.83,
    "year": 2024
  },
  {
    "country": "Japan",
    "company": "DataNet Solutions",
    "value": 3.49,
    "year": 2022
  },
  {
    "country": "USA",
    "company": "AutoMobil SE",
    "value": 4.59,
    "year": 2022
  },
  {
    "country": "Brasilien",
    "company": "SolarTech",
    "value": 1.87,
    "year": 2025
  },
  {
    "country": "Deutschland",
    "company": "Stahl GmbH",
    "value": 14.96,
    "year": 2025
  }
];
const selected = { country: [], company: [], year: [] };

async function loadData() {
  renderFilters();
  renderTable();
}

function renderFilters() {
  const countries = [...new Set(data.map(d => d.country))].sort();
  const companies = [...new Set(data.map(d => d.company))].sort();
  const years = [...new Set(data.map(d => d.year))].sort();

  createFilterOptions('filter-country', countries, 'country');
  createFilterOptions('filter-company', companies, 'company');
  createFilterOptions('filter-year', years, 'year');
}

function createFilterOptions(containerId, values, key) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  values.forEach(val => {
    const id = key + '-' + val;

    const div = document.createElement('div');
    div.className = "flex items-center space-x-2";

    const input = document.createElement('input');
    input.type = "checkbox";
    input.id = id;
    input.value = val;
    input.addEventListener("change", () => toggleFilter(key, input));

    const label = document.createElement('label');
    label.htmlFor = id;
    label.className = "text-sm";
    label.textContent = val;

    div.appendChild(input);
    div.appendChild(label);
    container.appendChild(div);
  });
}

function toggleFilter(key, checkbox) {
  const value = checkbox.value;
  if (checkbox.checked) {
    selected[key].push(value);
  } else {
    selected[key] = selected[key].filter(v => v !== value);
  }
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  const filtered = data.filter(d => (
    (selected.country.length === 0 || selected.country.includes(d.country)) &&
    (selected.company.length === 0 || selected.company.includes(d.company)) &&
    (selected.year.length === 0 || selected.year.includes(d.year.toString()))
  ));

  if (sortKey) {
    filtered.sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return -1 * sortDirection;
      if (valA > valB) return 1 * sortDirection;
      return 0;
    });
  }

  filtered.forEach(d => {
    const row = document.createElement('tr');
    row.className = "border-t";

    const tdCountry = document.createElement('td');
    tdCountry.className = "py-2 px-4";
    tdCountry.textContent = d.country;

    const tdCompany = document.createElement('td');
    tdCompany.className = "py-2 px-4";
    tdCompany.textContent = d.company;

    const tdValue = document.createElement('td');
    tdValue.className = "py-2 px-4";
    tdValue.textContent = d.value;

    const tdYear = document.createElement('td');
    tdYear.className = "py-2 px-4";
    tdYear.textContent = d.year;

    row.appendChild(tdCountry);
    row.appendChild(tdCompany);
    row.appendChild(tdValue);
    row.appendChild(tdYear);

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleCountry = document.getElementById("btn-filter-country");
  const menuCountry = document.getElementById("filter-country");
  const toggleCompany = document.getElementById("btn-filter-company");
  const menuCompany = document.getElementById("filter-company");
  const toggleYear = document.getElementById("btn-filter-year");
  const menuYear = document.getElementById("filter-year");

  toggleCountry.addEventListener("click", () => {
    menuCompany.classList.add("hidden");
    menuYear.classList.add("hidden");  
    menuCountry.classList.toggle("hidden");
  });

  toggleCompany.addEventListener("click", () => {
    menuYear.classList.add("hidden");  
    menuCountry.classList.add("hidden");
    menuCompany.classList.toggle("hidden");
  });
  toggleYear.addEventListener("click", () => {
    menuCompany.classList.add("hidden");
    menuCountry.classList.add("hidden");
    menuYear.classList.toggle("hidden");
  });

  ["country", "company", "value", "year"].forEach(key => {
    const th = document.getElementById("th-" + key);
    if (th) {
      th.style.cursor = "pointer";
      th.addEventListener("click", () => {
        if (sortKey === key) {
          sortDirection *= -1;
        } else {
          sortKey = key;
          sortDirection = 1;
        }
        renderTable();
      });
    }
  });
});

loadData();