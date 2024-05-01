class Table {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.forEach((d) => {
            open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
      `;
        });

        return open + close;
    }

    render(element) {
        let table =
            "<table class='table table-hover'>" +
            this.createHeader(this.init.columns) +
            this.createBody(this.init.data) +
            "</table>";
        element.innerHTML = table;
    }
}


const table = new Table({
    columns: ['Name', 'Phone Number', 'Email'],
    data: [
        ['Muhammad Arief Rahmatullah', '081221322243', 'ariefR12@gmail.com'],
        ['Jaka Rohmana', '082234758823', 'JakaRohmana43@gmail.com'],
        ['Ahmad Fadhil Baihaqi', '08991923719', 'Fadhilskuy711@gmail.com']
    ]
});

const app = getElementById('app');
table.render(app);