import * as Web3 from '@solana/web3.js'
import 'dotenv/config'

import base58 from 'bs58'
import {SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js' 


async function main(){
    const transaction = new Web3.Transaction();

    const sendSolInstruction = SystemProgram.transfer({
        
        fromPubkey: new Web3.PublicKey('7k8kJi3kntyzcYdAhC8hpziKPhGpEPMAVXjk2AHbC412'),
        toPubkey: new Web3.PublicKey('CFVDLHMN5biMvv5YoA8MVDdHiitg6W4uWeMVabsuEeaW'),
        lamports: 1 * LAMPORTS_PER_SOL
    })

    transaction.add(sendSolInstruction)


    //this is the signer
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)

    //responsible for connection
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))

    const txHash = await sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret]);

    console.log('txHash', txHash)
}

main()
