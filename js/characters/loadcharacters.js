document.addEventListener('DOMContentLoaded', () => {
	// Process JSON
    fetch('./js/characters/characters.json')
		.then(response => response.json())
		.then(data => {
		// NOTE: Character objects must go inside { chapters: { x: [...] } }
		const characterContainer = document.querySelector('.characters');
        const chapter = characterContainer.getAttribute('data-chapter');
		const characters = data.chapters[chapter];

		if (characters) {
			populateCharacters(characters);
		} else {
			console.error('No characters found for chapter: ', ch);
		}
		// console.log(data); // DEBUG
		})
		.catch(error => console.error('Error loading character data:', error));
});

// Helper Functions
function populateCharacters(characters) {
	const tabButtonsContainer = document.querySelector('.chara-buttons');
	const profileContainer = document.querySelector('.profile-container');

	characters.forEach(character => {
		// Create the character button
		const button = createCharacterButton(character);
		tabButtonsContainer.appendChild(button);

		const profileDiv = createProfileDiv(character);
		profileContainer.appendChild(profileDiv);
	});

	// Get the first character and select it by default
	document.querySelector('.chara-button')?.click();
}

function createCharacterButton(character) {
	const button = document.createElement('button');
	button.classList.add('chara-button');
	button.setAttribute('data-character', character.id);
	
	const img = document.createElement('img');
	img.classList.add('image', 'pixelated', 'chara-img');
	img.src = character.image.default; // Initial image source
	
    button.onmouseover = () => img.src = character.image.hover;
    button.onmouseout = () => img.src = character.image.default;
    button.appendChild(img);

	const text = document.createElement('p');
    text.classList.add('chara-button-text');
    text.textContent = character.table.buttonName;
    button.appendChild(text);

	button.addEventListener('click', selectCharacter);
	
	return button;
}
	
function createProfileDiv(character) {
	const profileDiv = document.createElement('div');
	profileDiv.id = character.id;
	profileDiv.classList.add('character-profile');
	
	profileDiv.innerHTML = generateCharacterTable(character);
	
	if (character.description) {
		const description = document.createElement('p');
		description.innerHTML = character.description;
		profileDiv.appendChild(description);
	}
	
	if (character.trivia?.length > 0) {
		profileDiv.innerHTML += '<h2 class="center">Trivia</h2>';
		const triviaList = createTriviaList(character.trivia);
		profileDiv.appendChild(triviaList);
	}
	
	return profileDiv;
}

function generateCharacterTable(character) {
	let table = /*html*/ `
		<h2 class="center">Profile</h2>
		<table>
		<tr><th>Name</th><td>${character.table.name[0]}<br><span style="color: var(--faint-text);">${character.table.name[1] || ''}</span></td></tr>
		<tr><th>Pronouns</th><td>${character.table.pronouns}</td></tr>
		<tr><th>Role</th><td>${character.table.role}</td></tr>
	`;
	
	if (character.table.object) {
		table += /*html*/ `<tr><th>LW Object</th><td>${character.table.object}</td></tr>`;
	}

	if (character.table.role === 'Secret Boss') {
		if (character.table.soulMode) {
		table += /*html*/ `<tr><th>Soul Mode</th><td><img src="${character.table.soulMode}"></td></tr>`;
		}
		if (character.table.items?.length) {
		const itemsHtml = character.table.items.map(item => /*html*/ `<img class="image pixelated" src="${item.icon}"> ${item.name}`).join('<br>');
		table += /*html*/ `<tr><th>Items</th><td>${itemsHtml}</td></tr>`;
		}
	}
	
	// Close tag
	table += `</table>`;
	
	return table;
}
	
function createTriviaList(triviaItems) {
	const triviaList = document.createElement('ul');
	triviaItems.forEach(triviaItem => {
	const listItem = document.createElement('li');
	listItem.textContent = triviaItem;
	triviaList.appendChild(listItem);
	});
	
	return triviaList;
}

function clearActiveClasses() {
	const tabButtons = document.querySelectorAll('.chara-button');
	const profiles = document.querySelectorAll('.character-profile');

	tabButtons.forEach(btn => btn.classList.remove('active'));
	profiles.forEach(profile => profile.classList.remove('active'));
}

function selectCharacter(event) {
	const characterId = event.currentTarget.getAttribute('data-character');

	clearActiveClasses(); // Clear active classes from previous selection

	// Add active class to the selected button and profile
	event.currentTarget.classList.add('active');
	document.getElementById(characterId)?.classList.add('active');
}
