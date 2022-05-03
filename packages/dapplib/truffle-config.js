require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note museum collect grace clock flock genuine'; 
let testAccounts = [
"0xffd61cad65981a809083c979ab4daf3931ad8a2769fe511e373c1035e742e8eb",
"0xde3201f150deee70b028eaa41398b468e4eafc6925a17ccd8cfdc0ee9fd47fcd",
"0xff0300f79f364471e136011177f96c719e6026fe42492938d9391fdedf8c8d20",
"0x837236f4eb0264cbe6671dd76c81cbae4ea1a3ae8c150fc896050e27f8d45903",
"0x8479ff742760050b3d99b6a3afb1a9a0169ddef9634185d9ac2b7e53f1910b0c",
"0x8e3383e2c213eb38305aefc944ebd9fe71ad5bc2e829b21dd8f6fdcc88442703",
"0x3996accd8b0f20ae6c73e4d384827068ec761bcf6190c825c9def18d678ef08a",
"0x23ac07418f2fdc4b9178afc1752e96dd9ad3154f1a77c0ef844d4c37fe6b6738",
"0x305a02ecfb91788c09a9d47034441432e30a9383305dfd7e11e364beed66c595",
"0x0afff33d51daa04c3379c7237118014d32eafbf21addb518a76050618ed4c9fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


