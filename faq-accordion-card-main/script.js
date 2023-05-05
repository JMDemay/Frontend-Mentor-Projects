const items = [...document.querySelectorAll("li.faq__faq-item")];
// Selects the items in the html, all the list items in the faq-item...

const clearItem = (itemDetail) => {
  itemDetail.style.maxHeight = null;
};

const activateItem = (itemDetail) => {
  const scrollHeight = itemDetail.scrollHeight;
  //grabs scroll height of the content
  itemDetail.style.maxHeight = `${scrollHeight}px`;
  //Set scroll height to pixels
};

const handleItemClick = (e) => {
  const clickedItem = e.target.closest("li");
  //This makes it possible to activate the accordian whether you click the arrow, the headline or the blank space in the entry.
  const itemDetail = clickedItem.querySelector(".faq-item__detail");
  const clickedItemActive = clickedItem.classList.contains("active");
  //querrying, does the item have an active class or not, if not it will return null
  clickedItem.classList.toggle("active");
  //IF IT DOESN'T have an active class, add the maxHeight and the .active class. IF IT DOES have the active class, remove the maxHeight and remove the .active class.
  if (clickedItemActive) {
    clearItem(itemDetail);
  } else {
    activateItem(itemDetail);
  }
};

const addListenersToItems = (array, callback) => {
  array.forEach((item) => {
    item.addEventListener("click", (e) => {
      callback(e);
    });
  });
};

addListenersToItems(items, handleItemClick);

items[0].click();
//chooses which item is open upon start up
