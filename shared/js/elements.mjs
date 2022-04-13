import navigarionMock from '../mocks/navigation.mjs';

/**
 * @param {HTMLElement} navNode - Nav Elment.
 * @returns 
 */
export function generateNavbar(navNode) {
  const currentPath = window.location.pathname.replace('/', '');
  navNode.className = 'main-header navbar navbar-expand navbar-white navbar-light';
  
  const list = document.createElement('ul');
  list.className = 'navbar-nav';

  const firstListItem = document.createElement('li');
  firstListItem.className = 'nav-item';
  
  const toggleMenu = document.createElement('a');
  toggleMenu.className = 'nav-link';
  toggleMenu.setAttribute('data-widget', 'pushmenu');
  toggleMenu.setAttribute('href', '#');
  toggleMenu.setAttribute('role', 'button');

  const iconMenu = document.createElement('i');
  iconMenu.className = 'fas fa-bars';

  toggleMenu.append(iconMenu);
  firstListItem.append(toggleMenu)
  list.appendChild(firstListItem);

  navigarionMock.topNav.forEach((item) => {
    const listItem = document.createElement('li');
    firstListItem.className = 'nav-item';
    
    const navLink = document.createElement('a');
    navLink.setAttribute('href', item.href);
    navLink.className = `nav-link ${currentPath === item.href ? 'active' : ''} `;
    navLink.innerText = item.name
    
    listItem.appendChild(navLink);
    list.appendChild(listItem)
  })

  navNode.append(list);
  return navNode;
}

/**
 * @param {HTMLElement} footerNode - Footer Element.
 * @returns 
 */
export function generateFooter(footerNode) {
  footerNode.className = 'main-footer';

  footerNode.innerHTML = `
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  `;

  return footerNode;
}

/**
 * 
 * @param {HTMLElement} nodeAside - Aside Node.
 * @returns 
 */
export function generateSidebar(nodeAside) {
  nodeAside.className = 'main-sidebar sidebar-dark-primary elevation-4';
  const currentPath = window.location.pathname.replace('.html', '').replace('/', '');
  nodeAside.innerHTML = `
    <a href="#" class="brand-link">
    <img src="shared/images/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="shared/images/user-profile.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="https://github.com/alex1812r" target="blank class="d-block">
            Alexander Romero
          </a>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item menu-open">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="users.html" class="nav-link ${currentPath.includes('user') ? 'active' : ''}">
                  <i class="fas fa-users nav-icon"></i>
                  <p>Users</p>
                </a>
              </li>
              <li class="nav-item active">
                <a href="posts.html" class="nav-link ${currentPath.includes('post') ? 'active' : ''}">
                  <i class="far fa-newspaper nav-icon"></i>
                  <p>Posts</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="photos.html" class="nav-link ${currentPath.includes('photo') ? 'active' : ''}">
                  <i class="fas fa-images nav-icon"></i>
                  <p>Photos</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    
    </div>
  `;
  return nodeAside;
}

/**
 * 
 * @param {HTMLElement} asideNode - Aside Node. 
 */
export function generateSidebarControl(asideNode) {
  asideNode.className = 'control-sidebar control-sidebar-dark';
  asideNode.innerHTML = `
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  `;
  return asideNode;
}

/**
 * 
 * @param {string} color - Spnnier Color. 
 * @returns {HTMLSpanElement} - Spinner Element.
 */
export function createSpinner(color = 'primary') {
  const spinner = document.createElement('span');
  const spinnerContent = document.createElement('span');

  spinnerContent.className = 'sr-only';
  spinner.className = `spinner-border text-${color}`;

  spinner.appendChild(spinnerContent);
  return spinner;
};

/**
 * 
 * @param {string} dropdownId 
 * @param {array<HTMLElement>} menuNodes 
 */
export function createDropdownMenu(dropdownId, menuNodes = []) {
  const drowpdown = document.createElement('div');
  drowpdown.className = 'dropdown';

  const buttonToggle = document.createElement('button');
  buttonToggle.className = 'btn dropdown-toggle';
  buttonToggle.setAttribute('type', 'button');
  buttonToggle.setAttribute('id', dropdownId);
  buttonToggle.setAttribute('data-toggle', 'dropdown');
  buttonToggle.setAttribute('aria-expanded', 'false');

  const dropdownMenu = document.createElement('div');
  dropdownMenu.className = 'dropdown-menu';
  dropdownMenu.setAttribute('aria-labelledby', dropdownId);

  menuNodes.forEach((node) => {
    node.classList.add('dropdown-item');
    dropdownMenu.appendChild(node);
  });

  drowpdown.appendChild(buttonToggle);
  drowpdown.appendChild(dropdownMenu);
  
  return drowpdown
}

export function createOverlaySpinner(color = 'primary') {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.append(createSpinner(color))
  return overlay;
}

/**
 * 
 * @param {Array<{
 *  name: string,
 *  key: string,
 *  render?: (any) => string
 * }>} headers  - Table Headers.
 * @param {Array<any>} data - Table Body data.
 * @param {{
 *  tableHover: boolean,
 * }} props - TableProps
 * @returns - Table Element.
 */
export function createTableBase(
  headers, 
  data = [], 
  props = {
    tableHover: true,
  }
) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const theadTr = document.createElement('tr');
  const tbody = document.createElement('tbody');

  headers.forEach(header => {
    const th = document.createElement('th');
    th.style = "border: 0px;"
    th.innerText = header.name;
    theadTr.appendChild(th);
  });

  data.forEach((item) => {
    const tbodyTr = document.createElement('tr');

    headers.forEach((header) => {
      const td = document.createElement('td');
      if(header.render) {
        const val = header.render(item);
        if(typeof val === 'string') td.innerHTML = val;
        else td.appendChild(val)
      } else {
        td.innerHTML = item[header.key];
      }
      tbodyTr.appendChild(td);
    });

    tbody.appendChild(tbodyTr);
  });

  table.className = 'table';
  if(props.tableHover) table.classList.add('table-hover');

  thead.appendChild(theadTr);
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

/**
 * 
 * @param {HTMLFormElement} formNode - Form element.
 * @param {Array<any>} fields - Form fields.
 * @param {(data: any) => void} onSubmit 
 * @param {any} defaultValues 
 */
export function generateForm(formNode, fields, onSubmit, defaultValues = {}) {
  fields.map((field) => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    
    const label = document.createElement('label');
    label.innerText = field.name;
    
    const { inputProps: { type: inputType, ...inputProps } } = field;
    
    let input = document.createElement('input');
    
    if(inputType === 'select') {
      input = document.createElement("select");
      field.options.forEach((op) => {
        const option = document.createElement('option');
        option.textContent = op.label;
        option.value = op.value;
        input.appendChild(option)
      })
    }

    input.className = 'form-control'; 
    
    Object.keys(inputProps)
      .forEach(k => {
        input.setAttribute(k, inputProps[k])
      })

    const defaultValue = defaultValues[input.name];
    if(defaultValue) input.value = defaultValue;

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    formNode.appendChild(formGroup);
  });

  formNode.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = formNode.elements;
    const data = {};
    fields.forEach((field) => {
      const inputName = field.inputProps.name
      Object.assign(data, { [inputName]: inputs[inputName].value  })
    })
    onSubmit(data)
  });

  const buttonSubmit = document.createElement('button')
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.className = 'btn btn-primary ml-auto d-block';
  buttonSubmit.innerText = 'Submit';

  formNode.appendChild(buttonSubmit);
}