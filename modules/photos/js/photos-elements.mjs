import { createTableBase, createDropdownMenu, generateForm } from '../../../shared/js/elements.mjs'
import { fetchUsersList } from '../../users/js/users-actions.mjs';
import photosFormMock from '../mocks/photos-form.mjs';

/**
 * 
 * @param {Array<any>} data 
 * @param {{
 *  onDelete: (id: string) => void
 * }} actions 
 * @returns 
 */
export function createPhotosTable(data = [], actions = { }) {
  const { onDelete } = actions;
  const tableHeaders = [
    {
      name: 'User',
      key: 'userId',
      render(item) {
        return item.user ? item.user.name : item.userId;
      }
    },
    {
      name: 'Title',
      key: 'title'
    },
    {
      name: 'Photo',
      key: 'thumbnailUrl',
      render(item) {
        return `
          <a href="${item.url}" target="blank">
            <img width="30px" src="${item.url}" alt="user-photo-${item.id}" />
          </a>
        `
      }
    },
    {
      name: 'Actions',
      render(item) {
        const dropdownId = `postDropdownMenu${item.id}`;
        const editLink = document.createElement('a');
        editLink.setAttribute('href', `edit-photo.html?id=${item.id}`);
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
 * @param {any} defaultPost - default post data.
 */
 export async function generatePhotoForm(formNode, onSubmit, defaultPhoto = {}) {
  const fields = photosFormMock.newPhoto.fields
  const usersList = await fetchUsersList();
  const fieldUserIndex = fields.findIndex((item) => item.inputProps.name === 'userId');
  fields[fieldUserIndex].options = usersList.map((user) => ({ label: user.name, value: user.id }));
  return generateForm(formNode, fields, onSubmit, defaultPhoto);
}