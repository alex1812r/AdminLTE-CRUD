import { createTableBase, generateForm, createDropdownMenu } from '../../../shared/js/elements.mjs'
import userFormMock from '../mocks/user-form.mjs'

/**
 * 
 * @param {Array<any>} data 
 * @param {{
 *  onDelete: (id: string) => void
 * }} actions 
 * @returns 
 */
export function createUsersTable(data = [], actions = {}) {
  const { onDelete } = actions;
  const tableHeaders = [
    {
      name: 'Username',
      key: 'username',
      render(user) {
        return `
          <a href="#" class="brand-link" style="padding: 0px">
            <img src=${user.avatar} alt="user avatar" class="ml-0 brand-image img-circle">
            <span class="brand-text" style="font-size: 1rem;">${user.username}</span>
          </a>
        `;
      }
    },
    {
      name: 'name',
      key: 'name'
    },
    {
      name: 'Email',
      key: 'email',
    },
    {
      name: 'Company',
      key: 'company',
      render(item) {
        return item.company.name;
      }
    },
    {
      name: 'Actions',
      render(item) {
        const dropdownId = `userDropdownMenu${item.id}`;
        const editLink = document.createElement('a');
        editLink.setAttribute('href', `edit-user.html?id=${item.id}`);
        editLink.textContent = 'Edit';
      
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', function() {
          onDelete(item.id)
        });
      
        const dropdown = createDropdownMenu(dropdownId, [editLink, buttonDelete]);
        
        return dropdown;
      }
    }
  ];

  return createTableBase(tableHeaders, data);;
}

/**
 * 
 * @param {HTMLElement} formNode - Form node. 
 * @param {(id: string) => void} onSubmit - onSubmit.
 * @param {any} defaultUser - default user data.
 */
export function generateUserForm(formNode, onSubmit, defaultUser = {}) {
  const fields = userFormMock.newUser.fields

  return generateForm(formNode, fields, onSubmit, defaultUser);
}