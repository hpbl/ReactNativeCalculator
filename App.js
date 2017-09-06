import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Style from './Styles.js';
import InputButton from './InputButton';

const inputButtons = [
	[1, 2, 3, '/'],
	[4, 5, 6, '*'],
	[7, 8, 9, '-'],
	[0, '.', '=', '+']
];

export default class ReactCalculator extends Component {

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}></View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }

    //For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
    _renderInputButtons() {
    	let views = [];

    	for (let rowIndex = 0; rowIndex < inputButtons.length; rowIndex++) {
    		let row = inputButtons[rowIndex];

    		let inputRow = [];
    		for (let buttonIndex = 0; buttonIndex < row.length; buttonIndex++) {
    			let input = row[buttonIndex];

    			inputRow.push(
    				<InputButton value={input} key={rowIndex + '-' + buttonIndex} />
    			)
    		}

            views.push(<View style={Style.inputRow} key={"row-" + rowIndex}>{inputRow}</View>)
    	}

    	return views;
    }
}
