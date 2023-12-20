// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


// const categories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categories.length}`);
// categories.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });


const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const getCateg = categories.forEach((value) => {
    const firstCategory = value.firstElementChild.textContent;
    const categoryLength = value.lastElementChild.children.length;
    console.log(`Category: ${firstCategory}`);
    console.log(`Elements: ${categoryLength}`)
})