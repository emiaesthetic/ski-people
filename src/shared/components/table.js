export const createTable = ({ data, title, className }) => {
  const table = document.createElement('table');
  table.className = `${className} table`;

  const caption = document.createElement('caption');
  caption.className = 'table__title';
  caption.textContent = title;

  const tbody = document.createElement('tbody');
  tbody.className = 'table__body';

  data.forEach(({ name, value }) => {
    const row = document.createElement('tr');
    row.className = 'table__row';
    row.innerHTML = `
      <td class="table__data">${name}</td>
      <td class="table__data">${value}</td>
    `;

    tbody.append(row);
  });

  table.append(caption, tbody);

  return table;
};
