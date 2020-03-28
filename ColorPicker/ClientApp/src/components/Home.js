import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Color Picker</h1>

                <p>To help you get started, go to color picker:</p>
                <ul>
                    <li><strong>Enter a Hex value</strong>. For example, type <em>000000</em> in the Hex box then click <em>Submit</em> </li>
                    <li><strong>Enter a RGB value</strong>. For example, type <em>0,71,171</em> in the RGB box then click <em>Submit</em></li>
                    <li><strong>Enter a HSL value</strong>. For example, type <em>215,100%,34%</em> in the HSL box then click <em>Submit</em></li>
                    <li><strong>Enter a CMYK value</strong>. For example, type <em>100,58,0,33</em> in the CMYK box then click <em>Submit</em></li>
                   
                </ul>
                <p>The values will be cleared when you the submit button, After your second pick the first color will drop down in to the previous section,
                    the most recent will always be in the selected section. the previous section will hold a maximum of 10 previous selections, and you can sort
                    by the order that you selected them, the value you used, or the name. just click on the heading to sort asc or desc toggled for that column</p>
            </div>
        );
    }
}
