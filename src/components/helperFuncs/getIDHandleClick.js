function getIDHandleClick(event) {
    let parent = event.target.parentNode;
    
    while (parent) {
      if (parent.dataset && parent.dataset.id) {
        // Found the parent with the custom data attribute
        let myCustomData = parent.dataset.id;
        console.log(myCustomData);
        break;
      }
      
      parent = parent.parentNode;
    }
  }

  export default getIDHandleClick;