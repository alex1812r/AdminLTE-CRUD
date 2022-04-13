import { createTableBase, generateForm, createDropdownMenu } from '../../../shared/js/elements.mjs'
import postFormMock from '../mocks/post-form.mjs';

/**
 * 
 * @param {Array<any>} data 
 * @param {{
 *  onDelete: (id: string) => void
 * }} actions 
 * @returns 
 */
export function createPostsTable(data = [], actions = { }) {
  const { onDelete } = actions;
  const tableHeaders = [
    {
      name: '#',
      key: 'id',
    },
    {
      name: 'Title',
      key: 'title'
    },
    {
      name: 'Actions',
      render(item) {
        const dropdownId = `postDropdownMenu${item.id}`;
        const editLink = document.createElement('a');
        editLink.setAttribute('href', `edit-post.html?id=${item.id}`);
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
 export function generatePostForm(formNode, onSubmit, defaultPost = {}) {
  const fields = postFormMock.newPost.fields

  return generateForm(formNode, fields, onSubmit, defaultPost);
}