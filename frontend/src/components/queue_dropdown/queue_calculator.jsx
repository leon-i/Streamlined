import React from 'react';

class QueueCalculator extends React.Component {
    constructor(props) {
        super(props);
        const { providers } = this.props;
        this.state = {
            Netflix: providers.includes('Netflix'),
            Hulu: providers.includes('Hulu'),
            HBO: providers.includes('HBO'),
            AmazonPrimeVideo: providers.includes('AmazonPrimeVideo'),
            totalCost: this.startingCost(this.props.providers)
        }

        // this.calculateTotalCost = this.calculateTotalCost.bind(this);
    }

    startingCost(providers) {
        let cost = 0;
        if (providers.includes('Netflix')) cost += 13;
        if (providers.includes('Hulu')) cost += 6;
        if (providers.includes('HBO')) cost += 15;
        if (providers.includes('AmazonPrimeVideo')) cost += 9;
        return cost;
    }

    // calculateTotalCost() {
    //     const { Netflix, Hulu, HBO, AmazonPrimeVideo } = this.state;
    //     let cost = 0;
    //     if (Netflix) cost += 13;
    //     if (Hulu) cost += 6;
    //     if (HBO) cost += 15;
    //     if (AmazonPrimeVideo) cost += 9;
    //     this.setState({ totalCost: cost });
    // }

    handleClick(providerName) {
        return (e) => {
            const costs = {
                Netflix: 13,
                Hulu: 6,
                HBO: 15,
                AmazonPrimeVideo: 9
            };

            const selected = this.state[providerName];
            if (selected) {
                const newTotal = this.state.totalCost - costs[providerName];
                return this.setState({ [providerName]: !this.state[providerName], totalCost: newTotal });
            } else {
                const newTotal = this.state.totalCost + costs[providerName];
                return this.setState({ [providerName]: !this.state[providerName], totalCost: newTotal });
            }
            
        }
    }

    render() {
        const buttonRenders = ['Netflix', 'Hulu', 'HBO', 'AmazonPrimeVideo'].map((provider, idx) => {
            const buttonClass = this.state[provider] ? 'calculator-btn selected' : 'calculator-btn';
            const buttonName = provider === 'AmazonPrimeVideo' ? 'Amazon' : provider;
            return (
                <button key={idx} className={buttonClass} onClick={this.handleClick(provider)}>{buttonName}</button>
            )
        })
        return (
            <div className='calculator flex'>
                <h1>Choose which services you have</h1>
                <div className='calculator-btns flex'>
                    { buttonRenders }
                </div>
                <div className='total-cost flex'>
                    <h4>Total cost:</h4>
                    <p>{`$${this.state.totalCost}`}</p>
                </div>
            </div>
        )
    }
}

export default QueueCalculator;