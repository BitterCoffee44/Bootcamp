import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import {SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js' 


//focuses on creating the backbone
async function main(){


    //connection

    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))

    //signer
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)

    //mint authority
    const mintAuthority =  new Web3.PublicKey('7k8kJi3kntyzcYdAhC8hpziKPhGpEPMAVXjk2AHbC412')

    //freeze Authority
    const frozeAuthority = new Web3.PublicKey('7k8kJi3kntyzcYdAhC8hpziKPhGpEPMAVXjk2AHbC412')

    //decimals of lamport 
    const decimal = 1 * LAMPORTS_PER_SOL

    const tokenMint = await token.createMint(
        connection,
        signer,
        mintAuthority,
        frozeAuthority,
        9
    );

    //mint authority - the one who's allowed to mint token
    //mint frozen - stops the creation of accounts


    //tokenMint 9z44CKHH9TzEHMe2EteN7C54rm1JXp7YeyBNhi8TxrzN
    console.log('tokenMint', tokenMint.toBase58())
}

main()