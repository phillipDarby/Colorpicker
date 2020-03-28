import React, { Component } from 'react';

export class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            previous: [],
            loading: true,
            hex: '',
            rgb: '',
            hsl: '',
            cmyk: '',
            sort: {
                column: null,
                direction: 'desc',
            },
            request: 0
        };
    }

    handleChange = (type) => (event) => {
        if (type === 'hex') {
            this.setState({ hex: event.target.value });
        }
        else if (type === 'rgb') {
            this.setState({ rgb: event.target.value });
        }
        else if (type === 'hsl') {
            this.setState({ hsl: event.target.value });
        }
        else if (type === 'cmyk') {
            this.setState({ cmyk: event.target.value });
        }
    }

    handleSubmit = (type) => (event) => {
        event.preventDefault();
        if (type === 'hex') {
            this.populateHexColorData();
        }
        else if (type === 'rgb') {
            this.populateRgbColorData();
        }
        else if (type === 'hsl') {
            this.populateHslColorData();
        }
        else if (type === 'cmyk') {
            this.populateCmykColorData();
        }
        
        this.setState({ request: this.state.request + 1 , hex: '', rgb: '', hsl:'',cmyk:''});
        
    }
    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sortedData = this.state.previous.sort((a, b) => {
            if (column === 'Value') {
                const nameA = a.requestValue; 
                const nameB = b.requestValue; 
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            }
            else if (column === 'Name') {
                const nameA = a.name.value; 
                const nameB = b.name.value; 
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            } else if (column === 'requestOrder') {
                const nameA = a.ID; 
                const nameB = b.ID; 
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            } else {
                return a.contractValue - b.contractValue;
            }
        });

        if (direction === 'desc') {
            sortedData.reverse();
        }
        this.setState({
            previous: sortedData,
            sort: {
                column,
                direction,
            }
        });
    };

    static renderColorResults(data, previous, c, sort){
        let image = data.name.exactMatchName.toString() === 'true' ? data.image.named : data.image.bare;
        
        if (previous.length > 10) {
            previous = previous.slice(0, 10);
        }
        return (
            <div>
                <h3>Selected Color</h3>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Exact Match</th>
                            <th>Name</th>
                            <th>Named Hex</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr key={1}>
                            <td><img src={image} alt={data.name.value} /></td>
                            <td>{data.name.exactMatchName.toString()}</td>
                            <td>{data.name.value}</td>
                            <td>{data.name.closestNamedHex}</td>
                        </tr>

                    </tbody>
                </table>
                <h3>Previous Selection</h3>
                <p>click on Request order, Value, or Name heading to sort by that column</p>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th onClick={c.onSort('requestOrder')} style={{ cursor: 'pointer' }}>Request Order {sort.column === 'requestOrder' ? `(${sort.direction})` : ''}</th>
                            <th onClick={c.onSort('Value')} style={{ cursor: 'pointer' }}>Value {sort.column === 'Value' ? `(${sort.direction})` : ''}</th>
                            <th>Image</th>
                            <th>Exact Match</th>
                            <th onClick={c.onSort('Name')} style={{ cursor: 'pointer' }}>Name {sort.column === 'Name' ? `(${sort.direction})` : ''}</th>
                            <th>Named Hex</th>
                        </tr>
                    </thead>
                    <tbody>
                        {previous.map(dat => {
                            return <tr key={dat.ID && dat.ID}>
                                <td>{dat.ID}</td>
                                <td>{dat.requestValue}</td>
                                <td><img src={dat.name.exactMatchName.toString() === 'false' ? dat.image.bare : dat.image.named} alt={dat.name.value} /></td>
                                <td>{dat.name.exactMatchName.toString()}</td>
                                <td>{dat.name.value}</td>
                                <td>{dat.name.closestNamedHex}</td>
                            </tr>
                            
                        })}
                       

                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Please type a value in one of the boxes...</em></p>
            : ColorPicker.renderColorResults(this.state.data, this.state.previous, this, this.state.sort);

        return (
            <div>
                <h1 id="tabelLabel" >Color Results</h1>
                <form>
                    <label style={{ width: '15%' }}>
                        Hex: i.e. 000000
          <input type="text" value={this.state.hex} onChange={this.handleChange('hex')} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit('hex')} placeholder='000000' />
                    &nbsp;
                    <label style={{ width: '15%' }}>
                        Rgb: i.e. 0,71,171
          <input type="text" value={this.state.rgb} onChange={this.handleChange('rgb')} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit('rgb')} />
                    &nbsp;
                    <label style={{ width: '15%' }}>
                        Hsl: i.e. 215,100%,34%
          <input type="text" value={this.state.hsl} onChange={this.handleChange('hsl')} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit('hsl')} />
                    &nbsp;
                    <label style={{ width: '15%' }}>
                        Cmyk: i.e. 100,58,0,33
          <input type="text" value={this.state.cmyk} onChange={this.handleChange('cmyk')} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit('cmyk')} />
                </form>
                {contents}
            </div>
        );
    }
    populateHexColorData = async () => {

        await fetch('colorapi/Hex/' + this.state.hex)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = "Could not fetch data",
                        error = new Error(errorMessage);
                    throw (error);
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                json.ID = this.state.request;
                this.setState({ previous: this.state.data !== undefined ? [this.state.data, ...this.state.previous] : [], data: json, loading: false })
            });
    }
    populateRgbColorData = async () => {

        await fetch('colorapi/Rgb/' + this.state.rgb)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = "Could not fetch data",
                        error = new Error(errorMessage);
                    throw (error);
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                json.ID = this.state.request;
                this.setState({ previous: this.state.data !== undefined ? [this.state.data, ...this.state.previous] : [], data: json, loading: false })
            });
    }
    populateHslColorData = async () => {

        await fetch('colorapi/Hsl/' + encodeURI(this.state.hsl))
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = "Could not fetch data",
                        error = new Error(errorMessage);
                    throw (error);
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                json.ID = this.state.request;
                this.setState({ previous: this.state.data !== undefined ? [this.state.data, ...this.state.previous] : [], data: json, loading: false })
            });
    }
    populateCmykColorData = async () => {

        await fetch('colorapi/Cmyk/' + this.state.cmyk)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = "Could not fetch data",
                        error = new Error(errorMessage);
                    throw (error);
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                json.ID = this.state.request;
                this.setState({ previous: this.state.data !== undefined ? [this.state.data, ...this.state.previous] : [], data: json, loading: false })
            });
    }
}