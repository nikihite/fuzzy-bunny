import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    // fetch families from supabase
    const familiesEl = document.querySelector('main');
    const families = await getFamilies();
    // clear out the familiesEl

    for (let family of families) {
        const familyEl = document.createElement('div');
        familyEl.classList.add('family');

        const nameEl = document.createElement('h3');
        nameEl.textContent = family.name;

        const bunnyEl = document.createElement('div');
        bunnyEl.classList.add('bunnies');

        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = document.createElement('div');
            bunnyEl.classList.add('bunny');
            bunnyEl.textContent = bunny.name;

            bunnyEl.addEventListener('click', async () => {
                await deleteBunny(bunny.id);
                displayFamilies();
            });
        }
        // create three elements for each family, one for the whole family, one to hold the name, and one to hold the bunnies
        // your HTML Element should look like this:
        // <div class="family">
        //    <h3>the Garcia family</h3>
        //    <div class="bunnies">
        //        <div class="bunny">Fluffy</div>
        //        <div class="bunny">Bob</div>
        //    </div>
        // </div>
        // add the bunnies css class to the bunnies el, and family css class to the family el
        // put the family name in the name element
        // for each of this family's bunnies
        //    make an element with the css class 'bunny', and put the bunny's name in the text content
        //    add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        // append this bunnyEl to the bunniesEl
    }

    // append the bunniesEl and nameEl to the familyEl

    // append the familyEl to the familiesEl
}

window.addEventListener('load', async () => {
    const families = await getFamilies();

    displayFamilies(families);
});
