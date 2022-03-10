require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note shift pupil hover arena forward giggle'; 
let testAccounts = [
"0x2a7f90b1d7658c5dd97a654b835013241f779f29472adba1941b609f9bd5f888",
"0x87cbfb3b6bb0a525731a3ae36adad58120ef318512a8366d5ff4c722eee3d711",
"0xdde4018922de8ed0527e71939d2ceb1c0b39610254e350744b8222ea296a0ddd",
"0x9b4f0b8788a8cca8d3626f8ce9a021f5f3c5f8222e5ae7826e5ebb79338609a0",
"0xc01b196805f46cfde6e8492c050503d87f7682d3525179ec75612e47cf6b9a35",
"0x03a4e3805fab7ce7e5bdd803bc695ab3fd4173e44ba5dab1d239819515e3c00b",
"0xcf171892ccb94116be7ec09bcbda45eccab696864ed28ee1d1b549edd3866d0d",
"0x69792ef179e5c7f4a170d6aab338c781e8d44fcab3d9c2fc18aaf8113a910409",
"0x6e6ee19a17989123e7815fdf8660fb86f354945ca5e3a2df771a61cb070d10aa",
"0x9f8e35b41448de212280db8fd95d00542e00d9fd9f59f991189019d4ce57239e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

