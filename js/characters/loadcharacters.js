// NOTE: In the JSON, character objects must go inside { chapters: { x: [...] } }
document.addEventListener('DOMContentLoaded', () => {
    const menu = new CharacterMenu();
    menu._init();
});

const CHAPTER = document.querySelector('.characters').getAttribute('data-chapter');
const Names = { BUTTON: 0, MAIN: 1, EXTRA: 2 };

class CharacterMenu {
    constructor() {
        this.chapter = CHAPTER;
        this.characters = null; // Not the button, just the data
		this.selectedButton = null // Keeps track of the currently selected button
    }

	// System Methods
    async _init() {
        this.characters = await this._loadCharacters();
        if (this.characters) this._populateCharacters();
    }

    async _loadCharacters() {
        try {
            const response = await fetch('../js/characters/characters.json');
            const data = await response.json();
            return data.chapters[this.chapter] || null;
        } catch (error) {
            console.error("Error loading character data:", error);
            return null;
        }
    }
    
	_populateCharacters() {
		const tabButtonsContainer = document.querySelector('.chara-buttons');
		const profileContainer = document.querySelector('.profile-container');

		this.characters.forEach(character => {
			const button = this._createCharacterButton(character);
			const profileDiv = this._createProfileDiv(character);
			tabButtonsContainer.appendChild(button);
			profileContainer.appendChild(profileDiv);
		});
		
		// Select the first button by default
		document.querySelector('.chara-button')?.click(); 
	}

	_createCharacterButton(character) {
		const button = document.createElement('button');
		button.classList.add('chara-button');
		button.setAttribute('data-character', character.id);

		const img = document.createElement('img');
		img.classList.add('image', 'pixelated', 'chara-img');
		img.src = character.image.default; // Initial image source
		button.appendChild(img);

		const text = document.createElement('p');
		text.classList.add('chara-button-text');
		text.textContent = character.table.name[Names.BUTTON];
		button.appendChild(text);

		// Hover effects
        img.addEventListener('mouseover', () => this.updateCharacterImage(button, character.image.hover));
        img.addEventListener('mouseout', () => {
			// Only if button isn't selected, change back to default img
            if (!button.classList.contains('active')) { this.updateCharacterImage(button, character.image.default); }
		});

		// Clicking selects the character
		button.addEventListener('click', (e) => this._selectCharacter(e, character, button));

		return button;
	}

	_createProfileDiv(character) {
		const profileDiv = document.createElement('div');
		profileDiv.id = character.id;
		profileDiv.classList.add('character-profile');
		
		// Create the profile div content
		profileDiv.innerHTML = `
			<h2 class="center">Profile</h2>
			${this._createCharacterTable(character)}
			${character.description ? `<p class="formatted-text">${character.description}</p>` : ''}
		`;
		
		// Create the trivia list
		if (character.trivia?.length) {
			const triviaList = this._createTriviaList(character.trivia);
			const triviaHeading = document.createElement('h2');
			triviaHeading.classList.add('center');
			triviaHeading.innerText = 'Trivia';
			profileDiv.appendChild(triviaHeading);
			profileDiv.appendChild(triviaList);
		}
		
		return profileDiv;
	}
	
	_createCharacterTable(character) {
		let tableHTML = /*html*/ `
			<table>
				<tr><th>Name</th><td>${character.table.name[Names.MAIN]}<br><span style="color: var(--faint-text);">${character.table.name[Names.EXTRA] || ''}</span></td></tr>
				<tr><th>Pronouns</th><td>${character.table.pronouns}</td></tr>
				<tr><th>Role</th><td>${character.table.role}</td></tr>
		`;
	
		if (character.table.object) {
			tableHTML += /*html*/ `
				<tr><th>LW Object</th><td>${character.table.object}</td></tr>
			`;
		}
	
		if (character.table.role === 'Secret Boss') {
			if (character.table.soulMode) {
				tableHTML += /*html*/ `
					<tr><th>Soul Mode</th><td><img src="${character.table.soulMode}" alt="Soul Mode Image"></td></tr>
				`;
			}
	
			if (character.table.items?.length) {
				const itemsHTML = character.table.items.map(item => /*html*/ `<img class="image pixelated" src="${item.icon}"> ${item.name}`).join('<br>');
				tableHTML += /*html*/ `<tr><th>Items</th><td>${itemsHTML}</td></tr>`;
			}
		}
	
		tableHTML += `</table>`;
		
		return tableHTML;
	}	

	_createTriviaList(triviaItems) {
		const triviaList = document.createElement('ul');
		
		triviaItems.forEach(triviaItem => {
			const listItem = document.createElement('li');
			listItem.classList.add('formatted-text');
			listItem.innerHTML = triviaItem;
			triviaList.appendChild(listItem);
		});
		
		return triviaList;
	}

	_selectCharacter(event, character, button) {
		this.clearActiveClasses(); // Prevents multiple selections

		// Selected button
		this.selectedButton = button
		document.querySelector(`[data-character="${character.id}"]`).classList.add('active');
		document.getElementById(character.id).classList.add('active');

		// Unselect other buttons
		const allButtons = document.querySelectorAll('.chara-button');
		allButtons.forEach(btn => {
			if (!btn.classList.contains('active')) {
				// Revert the image to default
				const id = btn.getAttribute('data-character');
				const character = this.getCharacter(id);
				this.updateCharacterImage(btn, character.image.default);
			}
		});

		// Change the image of the selected button to hover image
		this.updateCharacterImage(button, character.image.hover);
	}

	// Usable Methods
	clearActiveClasses() {
		const tabButtons = document.querySelectorAll('.chara-button');
		const profiles = document.querySelectorAll('.character-profile');
	
		tabButtons.forEach(btn => btn.classList.remove('active'));
		profiles.forEach(profile => profile.classList.remove('active'));
	}

	updateCharacterImage(button, src) {
		if (button) { button.querySelector('.chara-img').src = src; };
	}

	getCharacter(id) {
		return this.characters.find(c => c.id === id);
	}
}
