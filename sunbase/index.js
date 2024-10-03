document.addEventListener('DOMContentLoaded', () => {
    const centerContent = document.querySelector('.center-content');
    const addButtons = document.querySelectorAll('.btn');
    const saveButton = document.querySelector('.button');
    let formElements = [];
  
    // Function to create form elements dynamically
    const addFormElement = (type) => {
      const elementId = generateUUID();
      const formContainer = document.createElement('div');
      formContainer.className = 'form-container';
      formContainer.setAttribute('data-id', elementId);
  
      const label = document.createElement('label');
      label.innerText = `Sample Label:`;
      
      let formElement;
      let placeholder = '';
  
      // Create the corresponding form element based on the type
      if (type === 'select') {
        formElement = document.createElement('select');
        const option1 = document.createElement('option');
        option1.value = 'Option 1';
        option1.innerText = 'Sample Option 1';
        const option2 = document.createElement('option');
        option2.value = 'Option 2';
        option2.innerText = 'Sample Option 2';
        const option3 = document.createElement('option');
        option3.value = 'Option 3';
        option3.innerText = 'Sample Option 3';
        
        formElement.appendChild(option1);
        formElement.appendChild(option2);
        formElement.appendChild(option3);
        placeholder = 'Sample select';
      } else if (type === 'textarea') {
        formElement = document.createElement('textarea');
        placeholder = 'Sample textarea';
      } else {
        formElement = document.createElement('input');
        formElement.type = type;
        placeholder = 'Sample placeholder';
      }
      
      formElement.placeholder = placeholder;
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'delete';
      deleteButton.className = 'delete-button';
  
      // Append label, form element, and delete button to the container
      formContainer.appendChild(label);
      formContainer.appendChild(formElement);
      formContainer.appendChild(deleteButton);
      centerContent.appendChild(formContainer);
  
      // Add the form element to the formElements array
      formElements.push({
        id: elementId,
        type: type,
        label: 'Sample Label',
        placeholder: placeholder,
        options: type === 'select' ? ['Sample Option 1', 'Sample Option 2', 'Sample Option 3'] : undefined
      });
  
      // Delete functionality
      deleteButton.addEventListener('click', () => {
        formContainer.remove();
        formElements = formElements.filter(element => element.id !== elementId);
      });
    };
  
    // Generate UUID for unique IDs
    const generateUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };
  
    // Attach event listeners to add buttons for each type of form element
    addButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        let formType = 'text'; // Default to 'text' input
        
        if (index === 1) formType = 'select'; // For select
        if (index === 2) formType = 'textarea'; // For textarea
        
        // Call addFormElement with the selected form type
        addFormElement(formType);
      });
    });
  
    // Save button functionality to output the form data as JSON
    saveButton.addEventListener('click', () => {
      console.log(JSON.stringify(formElements, null, 2));
    });
  });
  