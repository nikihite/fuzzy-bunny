import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const form = new FormData(form);
    // use createBunny to create a bunny with this name and family id
    await createBunny ({
        name: form.get('name'),
        family_id: form.get('family_id'),
    });
    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const select = document.querySelector('select');
    // go get the families from supabase
    const families = await 
    // for each family
    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.textContent = family.name;

        select.append(option);
    }
    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
