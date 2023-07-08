import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import {SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js' 

async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const payer = Web3.Keypair.fromSecretKey(base58DecodedPK)


    //private key is not match to public key
    const tokenMintKey = await token.mintTo(
        connection, //responsible for the connection
        payer, //the signer for the task
        new Web3.PublicKey('9z44CKHH9TzEHMe2EteN7C54rm1JXp7YeyBNhi8TxrzN'), //token mint from the first one
        new Web3.PublicKey('5Csuey5co5sNCFYiMy81Lk6ogPumxs13rxgETrSLNxNm'), //destination //must be a token account
        new Web3.PublicKey('7k8kJi3kntyzcYdAhC8hpziKPhGpEPMAVXjk2AHbC412'), //authority of the first mint key
        5   
        )

    console.log('token mint', tokenMintKey) //this would be a transaciton
}

main()








//token.mintTo