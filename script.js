const addRowToTable = (firstName, lastName, grade, elementIndex) => {
  const tableBody = document.querySelector(".table tbody");
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
        <th scope="row">${elementIndex}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${grade}</td>
        <td>      
        <button onclick="deleteRow(event)" class="btn btn-danger delete-button-${elementIndex}">Delete Row</button>
        </td>
    </tr>
  `
  );
};

let elementIndex = 0;

const newRowButton = document.querySelector(".add-new-button");
newRowButton.addEventListener("click", () => {
  
  const nameInput = document.querySelector(".firstName");
  const lastInput = document.querySelector(".lastName");
  const gradeInput = document.querySelector(".grade");
  addRowToTable(nameInput.value, lastInput.value, gradeInput.value, elementIndex);

  const deleteButton = document.querySelector(`.delete-button-${elementIndex}`);

  deleteButton.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.remove();
  });

  elementIndex ++;

  nameInput.value = '';
  lastInput.value = '';
  gradeInput.value = '';

});
const deleteRow = (event) => {
  event.target.parentElement.parentElement.remove();
};