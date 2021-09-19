import React, { Fragment } from "react";
import Web3 from 'web3';
import { withStyles } from '@material-ui/core/styles';
import { createStyles } from "@material-ui/core";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";

const useStyles = theme => createStyles({
    root: {
        width: '100vh',
        margin: '20px auto',
    }
})

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({})

function Home() {
    const connectMetamask = () => {
        if (typeof window.web3 !== 'undefined') {
            window.web3 = new Web3(window.ethereum);
        } else {
            alert("No Ethereum interface injected into browser. Read-only access");
        }
        window.ethereum.enable()
            .then(function (accounts) {
                window.web3.eth.net.getNetworkType()
                    .then((network) => {
                        console.log(network);
                    });
                let wallet = accounts[0];
                callContractData(wallet);
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    const callContractData = async (wallet) => {
        console.log(wallet)
    }
    
    return(
        <Fragment>
            <Button variant="contained" color="primary" onClick={connectMetamask}>
                Connect Wallet
            </Button>
        </Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));