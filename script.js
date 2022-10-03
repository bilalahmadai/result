fetch("result.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let product of products) {
            out += `
         <tr >
            <td style="width:4%; background-color: #b5c3c6;color: #000 ">${product.id}</td>
            <td style="width:26%">${product.name}</td>
            <td style="background-color: #e1eae7;color: #000 ">${product.first}</td>
            <td>${product.second}</td>
            <td style="background-color: #e1eae7;color: #000 ">${product.third}</td>
            <td>${product.fourth}</td>
            <td style="background-color: #e1eae7;color: #000 ">${product.fifth}</td>
            <td>${product.sixth}</td>
         </tr>
      `;
        }

        placeholder.innerHTML = out;
    });