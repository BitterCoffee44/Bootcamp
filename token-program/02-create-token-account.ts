import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import {SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js' 


//you created a bank account using this stuff
async function main(){
    
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)



    //for the creation of token account
        const tokenAccount = await token.createAccount(
            connection,
            signer,
            new Web3.PublicKey('9z44CKHH9TzEHMe2EteN7C54rm1JXp7YeyBNhi8TxrzN'),
            new Web3.PublicKey('B5Cb5CpLUt43ub6iwAQhwBBJcCHpkbgY4kZo4bMySwxG')
        )

        console.log('token account', tokenAccount.toBase58())

        //token account 5Csuey5co5sNCFYiMy81Lk6ogPumxs13rxgETrSLNxNm
}

main()