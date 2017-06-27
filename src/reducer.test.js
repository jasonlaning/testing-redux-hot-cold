import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {

	it('Should start a new game', () => {
		let state = {
		    guesses: [54, 2, 46, 98],
		    feedback: 'You\'re hot!',
		};

		state = reducer(state, newGame());
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
	})	

	it('Should add a new guess', () => {
		let state = {
			guesses: [54, 2]
		}
		state = reducer(state, makeGuess(32));
		expect(state.guesses).toEqual([54, 2, 32]);
	})

	it('Should set the correct feedback for the guess', () => {
		let state = {
			guesses: [],
			correctAnswer: 12
		};

		const invalidGuess = 'burrito';
		const invalidFeedback = 'Please enter a valid number';
		const hotGuess = 15;
		const hotFeedback = 'You\'re Hot!';
		const coldGuess = 52;
		const coldFeedback = 'You\'re Cold...';
		const warmGuess = 24;
		const warmFeedback = 'You\'re Warm';
		const iceColdGuess = 70;
		const iceColdFeedback = 'You\'re Ice Cold...';
		const correctGuess =12;
		const correctFeedback = 'You got it!';

		state = reducer(state, makeGuess(invalidGuess));
		expect(state.feedback).toEqual(invalidFeedback);

		state = reducer(state, makeGuess(hotGuess));
		expect(state.feedback).toEqual(hotFeedback);

		state = reducer(state, makeGuess(coldGuess));
		expect(state.feedback).toEqual(coldFeedback);

		state = reducer(state, makeGuess(warmGuess));
		expect(state.feedback).toEqual(warmFeedback);

		state = reducer(state, makeGuess(iceColdGuess));
		expect(state.feedback).toEqual(iceColdFeedback);

		state = reducer(state, makeGuess(correctGuess));
		expect(state.feedback).toEqual(correctFeedback);
	})

	it('Should toggle the modal', () => {
		let state = {
			showInfoModal: false
		}

		state = reducer(state, toggleInfoModal());
		expect(state.showInfoModal).toEqual(true);
	})

})